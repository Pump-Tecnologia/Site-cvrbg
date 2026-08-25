"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { IconChevron } from "@/components/ui/icons";

const demandTypes = [
  "Castramóveis e mutirões",
  "SAMU Animal",
  "UBS Animal",
  "Resgate, manejo e alojamento",
  "Operação integrada",
  "Outro",
] as const;

type FormState = {
  name: string;
  org: string;
  contact: string;
  demand: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  org: "",
  contact: "",
  demand: demandTypes[0],
  message: "",
};

const fieldClass =
  "w-full rounded-[var(--radius-md)] border border-brand-brown/15 bg-white px-4 py-3 font-sans text-[15px] text-brand-brown placeholder:text-brand-muted/60 transition focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/25";

const labelClass =
  "mb-2 block font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-brown";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [honeypot, setHoneypot] = useState("");

  const requiredFilled =
    form.name.trim() !== "" &&
    form.org.trim() !== "" &&
    form.contact.trim() !== "";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (!requiredFilled || status === "sending") return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          org: form.org.trim(),
          contact: form.contact.trim(),
          demand: form.demand,
          message: form.message.trim(),
          website: honeypot,
        }),
      });
      const data = (await response.json()) as { success?: boolean };
      if (!response.ok || !data.success) throw new Error("send failed");
      setStatus("sent");
      setForm(emptyForm);
      setTouched(false);
    } catch {
      setStatus("error");
    }
  }

  const showError = touched && !requiredFilled;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-[var(--radius-xl)] border border-brand-brown/10 bg-brand-cream p-6 shadow-[var(--shadow-sm)] sm:p-8"
    >
      <p className="font-display text-xl font-semibold text-brand-brown">
        Envie sua demanda
      </p>
      <p className="mt-2 font-sans text-sm font-light leading-6 text-brand-muted">
        Preencha os campos e envie — sua mensagem chega direto no e-mail da
        nossa equipe comercial.
      </p>

      {/* Honeypot anti-spam: invisível para humanos, bots preenchem */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Não preencha este campo</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-7 grid gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Responsável <span className="text-brand-orange">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Seu nome completo"
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="org" className={labelClass}>
            Órgão público, cidade e estado{" "}
            <span className="text-brand-orange">*</span>
          </label>
          <input
            id="org"
            name="org"
            type="text"
            value={form.org}
            onChange={(e) => update("org", e.target.value)}
            placeholder="Ex.: Secretaria de Saúde — Município/UF"
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="contact" className={labelClass}>
            E-mail ou telefone <span className="text-brand-orange">*</span>
          </label>
          <input
            id="contact"
            name="contact"
            type="text"
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            placeholder="Como podemos retornar?"
            className={fieldClass}
            required
          />
        </div>

        <div>
          <label htmlFor="demand" className={labelClass}>
            Tipo de demanda
          </label>
          <div className="relative">
            <select
              id="demand"
              name="demand"
              value={form.demand}
              onChange={(e) => update("demand", e.target.value)}
              className={`${fieldClass} appearance-none pr-11`}
            >
              {demandTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <IconChevron
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-brand-brown/60"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Detalhes da demanda
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Volume estimado, urgência, região de atendimento..."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      {showError ? (
        <p
          role="alert"
          className="mt-4 font-sans text-sm font-medium text-brand-burgundy"
        >
          Preencha os campos obrigatórios para continuar.
        </p>
      ) : null}
      {status === "error" ? (
        <p
          role="alert"
          className="mt-4 font-sans text-sm font-medium text-brand-burgundy"
        >
          Não foi possível enviar agora. Tente novamente ou escreva para
          comercial@cvrbg.com.br.
        </p>
      ) : null}
      {status === "sent" ? (
        <p
          role="status"
          className="mt-4 font-sans text-sm font-medium text-brand-brown"
        >
          Demanda enviada! Nossa equipe comercial retorna em breve.
        </p>
      ) : null}

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          withArrow
          fullWidth
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar demanda"}
        </Button>
        <p className="mt-3 text-center font-sans text-xs font-light text-brand-muted">
          Sua mensagem vai direto para comercial@cvrbg.com.br.
        </p>
      </div>
    </form>
  );
}
