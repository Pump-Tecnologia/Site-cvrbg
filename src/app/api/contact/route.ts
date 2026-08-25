import { NextResponse } from "next/server";
import { company } from "@/data/site";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;

/** Janela simples de rate limit por IP (por instância da função). */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX_REQUESTS;
}

type ContactPayload = {
  name: string;
  org: string;
  contact: string;
  demand: string;
  message: string;
  website: string; // honeypot — humanos deixam vazio
};

function sanitize(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function parsePayload(body: unknown): ContactPayload {
  const raw = (body ?? {}) as Record<string, unknown>;
  return {
    name: sanitize(raw.name, MAX_FIELD_LENGTH),
    org: sanitize(raw.org, MAX_FIELD_LENGTH),
    contact: sanitize(raw.contact, MAX_FIELD_LENGTH),
    demand: sanitize(raw.demand, MAX_FIELD_LENGTH),
    message: sanitize(raw.message, MAX_MESSAGE_LENGTH),
    website: sanitize(raw.website, MAX_FIELD_LENGTH),
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY não configurada");
    return NextResponse.json(
      { success: false, error: "Serviço de envio indisponível." },
      { status: 503 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: "Muitas tentativas. Aguarde um minuto." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Requisição inválida." },
      { status: 400 },
    );
  }

  const payload = parsePayload(body);

  // Honeypot preenchido = bot. Responde sucesso sem enviar nada.
  if (payload.website !== "") {
    return NextResponse.json({ success: true });
  }

  if (!payload.name || !payload.org || !payload.contact) {
    return NextResponse.json(
      { success: false, error: "Preencha os campos obrigatórios." },
      { status: 400 },
    );
  }

  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Site CVRBG <site@cvrbg.com.br>";
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.contact);

  const lines = [
    ["Responsável", payload.name],
    ["Órgão/cidade", payload.org],
    ["Contato", payload.contact],
    ["Demanda", payload.demand],
    ["Detalhes", payload.message || "—"],
  ] as const;

  const html = `<h2>Nova demanda pelo site</h2><table cellpadding="6">${lines
    .map(
      ([label, value]) =>
        `<tr><td><strong>${label}</strong></td><td>${escapeHtml(value).replace(/\n/g, "<br />")}</td></tr>`,
    )
    .join("")}</table>`;

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [company.email],
      subject: `[Site] ${payload.demand} — ${payload.org}`,
      html,
      text: lines.map(([label, value]) => `${label}: ${value}`).join("\n"),
      ...(isEmail ? { reply_to: payload.contact } : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error(`[contact] Resend ${response.status}: ${detail}`);
    return NextResponse.json(
      { success: false, error: "Não foi possível enviar. Tente novamente." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
