"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { IconChevron } from "@/components/ui/icons";
import { whatsappLink } from "@/data/site";

const demandTypes = [
  "Castramóveis e mutirões",
  "SAMU Animal",
  "UBS Animal",
  "Resgate e manejo",
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

export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [touched, setTouched] = useState(false);

  const requiredFilled =
    form.name.trim() !== "" &&
    form.org.trim() !== "" &&
    form.contact.trim() !== "";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    if (!requiredFilled) return;

    const message = [
      `Olá, Grupo CVRBG! Sou ${form.name.trim()}.`,
      `Órgão/cidade: ${form.org.trim()}`,
      `Demanda: ${form.demand}`,
      `Contato: ${form.contact.trim()}`,
      form.message.trim() ? `Detalhes: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(message), "_blank", "noreferrer");
  }

  const showError = touched && !requiredFilled;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[var(--radius-xl)] border border-brand-brown/10 bg-brand-cream p-6 shadow-[var(--shadow-sm)] sm:p-8"
    >
      <p className="font-display text-xl font-semibold text-brand-brown">
        Envie sua demanda
      </p>
      <p className="mt-2 font-sans text-sm font-light leading-6 text-brand-muted">
        Preencha os campos e continue a conversa pelo WhatsApp — sua mensagem já
        chega organizada para a nossa equipe.
      </p>

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

      <div className="mt-6">
        <Button type="submit" variant="primary" size="lg" withArrow fullWidth>
          Enviar pelo WhatsApp
        </Button>
        <p className="mt-3 text-center font-sans text-xs font-light text-brand-muted">
          Você será direcionado ao WhatsApp com a mensagem pronta.
        </p>
      </div>
    </form>
  );
}
