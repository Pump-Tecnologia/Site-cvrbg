import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { PawField } from "@/components/ui/PawField";
import { ClosingCta } from "@/components/sections/ClosingCta";
import {
  IconShield,
  IconProcess,
  IconChart,
  IconTeam,
  IconCheck,
} from "@/components/ui/icons";
import {
  metrics,
  values,
  processSteps,
  presenceItems,
  partnerItems,
  operatingHighlights,
  type ValueIcon,
} from "@/data/site";
import type { LucideIcon } from "lucide-react";

const valueIcons: Record<ValueIcon, LucideIcon> = {
  shield: IconShield,
  process: IconProcess,
  chart: IconChart,
  team: IconTeam,
};

const timeline = [
  {
    year: "2005",
    title: "Origem na prática veterinária",
    text: "A Clínica Veterinária Ricardo nasce com o propósito de oferecer cuidado animal com ética, segurança e respeito aos processos.",
  },
  {
    year: "Expansão",
    title: "Atuação junto aos municípios",
    text: "O atendimento é ampliado para serviços de resgate, alojamento, tratamento, internação e reabilitação de animais.",
  },
  {
    year: "Pioneirismo",
    title: "Controle populacional em escala",
    text: "A esterilização de cães e gatos em castramóveis amplia o impacto da operação e fortalece a saúde pública animal.",
  },
  {
    year: "2015",
    title: "Criação da BG Zangrossi",
    text: "Uma nova empresa passa a integrar a trajetória do Grupo, ampliando seu alcance operacional.",
  },
] as const;

const ricardoHighlights = [
  "Atendimento clínico e cirúrgico",
  "Resgate, alojamento e reabilitação",
  "Base técnica para operações públicas",
] as const;

export function AboutPage() {
  return (
    <>
      {/* Intro + authority metrics */}
      <section className="bg-mesh-cream pt-32 sm:pt-40">
        <Container className="pb-16 sm:pb-20">
          <Reveal>
            <div className="max-w-4xl">
              <Eyebrow>Sobre o Grupo CVRBG</Eyebrow>
              <h1 className="mt-5 font-display text-[clamp(2.2rem,1.4rem+3.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-brand-brown">
                Experiência veterinária a serviço da gestão pública
                <span className="text-brand-orange">.</span>
              </h1>
              <p className="mt-6 max-w-2xl font-sans text-lg font-light leading-8 text-brand-muted">
                Há mais de 20 anos, o Grupo CVRBG transforma conhecimento técnico
                em operações capazes de aproximar o cuidado animal da população —
                com estrutura própria, equipe especializada e visão de longo prazo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-brand-brown/10 bg-brand-brown/10 lg:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col gap-3 bg-[var(--background)] p-6 sm:p-7"
                >
                  <dt className="font-display text-4xl font-light leading-none text-brand-orange sm:text-5xl">
                    {metric.value}
                  </dt>
                  <dd className="font-sans text-[11px] font-medium uppercase leading-snug tracking-[0.16em] text-brand-muted">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Trajetória — vertical timeline */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-28 lg:self-start">
                <SectionHeading
                  eyebrow="Nossa trajetória"
                  title="Uma história construída com propósito"
                  description="O crescimento do Grupo acompanha a ampliação de sua responsabilidade com animais, municípios e gestores públicos."
                />
              </div>
            </Reveal>

            <ol className="relative">
              <span
                className="absolute left-[7px] top-2 bottom-2 w-px bg-brand-brown/12"
                aria-hidden="true"
              />
              {timeline.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <li
                    className={`relative grid grid-cols-[auto_1fr] gap-x-6 ${
                      index === timeline.length - 1 ? "" : "pb-16 sm:pb-20"
                    }`}
                  >
                    <span
                      className="relative z-10 mt-1 size-4 rounded-full border-2 border-brand-orange bg-[var(--background)]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                        {item.year}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold text-brand-brown sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xl font-sans text-[15px] font-light leading-7 text-brand-muted">
                        {item.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="bg-brand-cream py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="O que nos orienta"
              title="Princípios que sustentam cada operação"
              description="A forma como atuamos junto à gestão pública é guiada por compromissos claros."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = valueIcons[value.icon];
              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <article className="group flex h-full flex-col gap-5 rounded-[var(--radius-lg)] border border-brand-brown/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-[var(--shadow-md)]">
                    <span className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-brand-orange/12 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-brown">
                        {value.title}
                      </h3>
                      <p className="mt-3 font-sans text-sm font-light leading-6 text-brand-muted">
                        {value.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Como atuamos — process */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <PawField className="text-[#a88f8b]/30" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Como atuamos"
              title="Do diagnóstico à prestação de contas"
              description="Um método claro que dá previsibilidade à operação e segurança à gestão pública."
            />
          </Reveal>

          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <li className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] bg-brand-cream p-7">
                  <span className="font-display text-4xl font-light leading-none text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-brown">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm font-light leading-6 text-brand-muted">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Estrutura operacional */}
      <section id="estrutura" className="bg-brand-brown py-20 text-white sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-16">
            <Reveal className="lg:h-full">
              <Figure
                src="/images/unidade-interna.jpeg"
                alt="Estrutura interna de uma unidade móvel do Grupo CVRBG"
                sizes="(min-width: 1024px) 52vw, 100vw"
                ratio="aspect-[4/3] lg:aspect-auto"
                className="shadow-[var(--shadow-lg)] lg:h-full"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <SectionHeading
                  eyebrow="Estrutura operacional"
                  title="Capacidade própria para operar em escala"
                  description="Frota, equipamentos e protocolos preparados para sustentar programas públicos de grande demanda."
                  tone="dark"
                />
                <ul className="mt-9 grid gap-4">
                  {operatingHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-orange/15 text-brand-orange"
                        aria-hidden="true"
                      >
                        <IconCheck size={12} strokeWidth={3} />
                      </span>
                      <span className="font-sans text-[15px] font-light leading-7 text-white/78">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Presença e parcerias */}
      <section id="presenca" className="bg-mesh-cream py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Presença e parcerias"
              title="Onde já estivemos em operação"
              description="Experiência em operações públicas com capacidade de mobilização em diferentes regiões do país."
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  Estados atendidos
                </p>
                <ul className="mt-5 flex flex-wrap gap-2.5">
                  {presenceItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-[var(--radius-pill)] border border-brand-brown/12 bg-white px-4 py-2 font-sans text-sm font-medium text-brand-brown"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  Governos e municípios parceiros
                </p>
                <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {partnerItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 border-b border-brand-brown/8 pb-3 font-sans text-[15px] font-light text-brand-brown"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-brand-orange" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vídeo institucional */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Vídeo institucional"
              title="Conheça o Grupo CVRBG em operação"
              description="Um panorama da estrutura, da equipe e do impacto da operação na saúde pública animal."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]">
              <video
                className="aspect-video w-full bg-black object-cover"
                controls
                preload="metadata"
                poster="/images/video-posters/institucional-cvrbg.jpg"
              >
                <source src="/videos/institucional-cvrbg.mp4" type="video/mp4" />
                Seu navegador não oferece suporte à reprodução de vídeo.
              </video>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Empresas do grupo */}
      <section className="bg-brand-cream py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Empresas do Grupo"
              title="Frentes complementares, uma só operação"
              description="O Grupo CVRBG reúne empresas que conectam assistência veterinária, estrutura operacional e capacidade de atendimento para demandas públicas."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <Reveal delay={0.08}>
              <article className="relative overflow-hidden rounded-[var(--radius-lg)] bg-brand-brown p-8 text-white sm:p-10 lg:min-h-[480px]">
                <PawField className="text-white/[0.05]" />
                <div className="absolute right-0 top-0 h-full w-1/4 bg-brand-orange/90" />
                <div className="relative z-10 flex h-full max-w-[460px] flex-col justify-between gap-12">
                  <div>
                    <div className="flex size-24 items-center justify-center rounded-[var(--radius-md)] bg-white p-3 sm:size-28">
                      <Image
                        src="/logos/ricardo-logo-color-crop.png"
                        alt="Clínica Veterinária Ricardo"
                        width={112}
                        height={112}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="mt-7 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                      Desde 2005
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                      Clínica Veterinária Ricardo
                      <span className="text-brand-orange">.</span>
                    </h3>
                    <p className="mt-4 max-w-xl font-sans text-[15px] font-light leading-7 text-white/74">
                      A origem do Grupo nasce da prática veterinária e evolui para uma
                      operação capaz de atender animais, famílias e administrações
                      públicas com método, equipe e responsabilidade técnica.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {ricardoHighlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-[var(--radius-sm)] border border-white/12 bg-white/[0.06] p-4"
                      >
                        <p className="font-sans text-sm font-light leading-6 text-white/82">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.16}>
              <article className="flex h-full min-h-[320px] flex-col justify-between rounded-[var(--radius-lg)] border border-brand-brown/12 bg-white p-8 sm:p-10 lg:min-h-[480px]">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
                    Em desenvolvimento
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-brand-brown sm:text-3xl">
                    BG Zangrossi
                    <span className="text-brand-orange">.</span>
                  </h3>
                  <p className="mt-4 font-sans text-[15px] font-light leading-7 text-brand-muted">
                    Empresa criada em 2015 e integrada à trajetória do Grupo CVRBG. O
                    conteúdo institucional detalhado será incorporado assim que o
                    material oficial for disponibilizado.
                  </p>
                </div>
                <div className="mt-10 border-t border-brand-brown/10 pt-6">
                  <p className="font-sans text-sm font-light leading-6 text-brand-muted">
                    Espaço preparado para receber histórico, identidade visual e
                    diferenciais operacionais próprios.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <ClosingCta
        text="Conheça as soluções que transformam essa experiência em operações para a gestão pública."
        primaryLabel="Falar com o Grupo"
        primaryHref="/contato"
        secondaryLabel="Ver soluções"
        secondaryHref="/solucoes"
      />
    </>
  );
}
