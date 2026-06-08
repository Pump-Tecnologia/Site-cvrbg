import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconPhone, IconMap, IconCheck } from "@/components/ui/icons";
import { ContactForm } from "@/components/pages/ContactForm";
import { company, whatsappLink } from "@/data/site";

const includePoints = [
  "Identificação do órgão público, cidade e estado.",
  "Tipo de demanda: castração, resgate, UBS Animal, SAMU Animal ou operação integrada.",
  "Volume estimado, urgência e região de atendimento.",
  "Dados de contato do gestor responsável.",
] as const;

const channels = [
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: company.whatsappDisplay,
    href: whatsappLink(
      "Olá, Grupo CVRBG! Gostaria de falar sobre uma operação de saúde pública animal.",
    ),
    external: true,
  },
  {
    icon: <IconPhone size={19} />,
    label: "Telefone",
    value: company.phoneDisplay,
    href: `tel:${company.phoneHref}`,
    external: false,
  },
  {
    icon: <FaInstagram size={20} />,
    label: "Instagram",
    value: company.instagram,
    href: company.instagramUrl,
    external: true,
  },
] as const;

export function ContactPage() {
  return (
    <section className="bg-mesh-cream pt-32 sm:pt-40">
      <Container className="pb-20 sm:pb-24">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>Fale com o Grupo</Eyebrow>
            <h1 className="mt-5 font-display text-[clamp(2.2rem,1.4rem+3.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-brand-brown">
              Contato para gestores públicos
              <span className="text-brand-orange">.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-lg font-light leading-8 text-brand-muted">
              Canal institucional para prefeituras, secretarias, governos e órgãos
              interessados em estruturar programas de saúde pública animal.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Channels + guidance */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="grid gap-3">
                {channels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-[var(--radius-lg)] border border-brand-brown/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-[var(--shadow-md)]"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-[var(--radius-md)] bg-brand-orange/12 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      {channel.icon}
                    </span>
                    <span>
                      <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-muted">
                        {channel.label}
                      </span>
                      <span className="block font-display text-base font-semibold text-brand-brown transition-colors group-hover:text-brand-orange">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="rounded-[var(--radius-lg)] bg-brand-brown p-6 text-white sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-[var(--radius-md)] bg-white/10 text-brand-orange">
                    <IconMap size={19} />
                  </span>
                  <div>
                    <span className="block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                      Endereço
                    </span>
                    <p className="mt-1 font-sans text-[15px] font-light leading-6 text-white/85">
                      {company.address.line1}
                      <br />
                      {company.address.line2}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  O que incluir na mensagem
                </p>
                <ul className="mt-4 grid gap-3">
                  {includePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-orange/15 text-brand-orange"
                        aria-hidden="true"
                      >
                        <IconCheck size={12} strokeWidth={3} />
                      </span>
                      <span className="font-sans text-[15px] font-light leading-6 text-brand-brown">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
