import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Figure } from "@/components/ui/Figure";
import { PawField } from "@/components/ui/PawField";
import {
  IconVan,
  IconAmbulance,
  IconClinic,
  IconRescue,
  IconArrow,
} from "@/components/ui/icons";
import { metrics, presenceItems, solutions, type SolutionIcon } from "@/data/site";
import type { LucideIcon } from "lucide-react";

const solutionIcons: Record<SolutionIcon, LucideIcon> = {
  van: IconVan,
  ambulance: IconAmbulance,
  clinic: IconClinic,
  rescue: IconRescue,
};

/* ----------------------------------------------------------------- */
/* Authority — metrics over a dark, textured field                    */
/* ----------------------------------------------------------------- */
export function AuthoritySection() {
  return (
    <section
      id="autoridade"
      className="bg-grain relative overflow-hidden bg-brand-brown py-20 text-white sm:py-24 lg:py-28"
    >
      <PawField />
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-orange/12 blur-3xl" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Autoridade operacional"
              title="Estrutura para programas públicos de saúde animal"
              description="Desde 2005, o Grupo CVRBG atua com equipes, frota e unidades móveis preparadas para operações de grande demanda."
              tone="dark"
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/10">
            {metrics.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 0.06}>
                <div className="group flex h-full min-h-36 flex-col justify-between gap-6 bg-brand-brown p-6 transition-colors duration-300 hover:bg-white/[0.04] sm:min-h-44 sm:p-8">
                  <span className="font-display text-5xl font-light leading-none text-white sm:text-6xl">
                    {metric.value}
                  </span>
                  <p className="font-sans text-[11px] font-medium uppercase leading-snug tracking-[0.16em] text-white/55">
                    {metric.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/* Solutions — image + structured service list                        */
/* ----------------------------------------------------------------- */
export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-mesh-cream py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-16">
          <Reveal className="order-2 lg:order-1 lg:h-full">
            <Figure
              src="/images/castramovel-hero.jpeg"
              alt="Castramóvel do Grupo CVRBG em operação"
              sizes="(min-width: 1024px) 52vw, 100vw"
              ratio="aspect-[4/3] lg:aspect-auto"
              className="shadow-[var(--shadow-md)] lg:h-full"
            >
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-[var(--radius-md)] bg-white/92 px-5 py-3.5 backdrop-blur-sm sm:inset-x-6 sm:bottom-6">
                <span className="grid size-9 place-items-center rounded-full bg-brand-orange text-white">
                  <IconVan width={18} height={18} />
                </span>
                <p className="font-sans text-sm font-medium leading-snug text-brand-brown">
                  Unidades móveis equipadas para atendimento em escala.
                </p>
              </div>
            </Figure>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="Soluções B2G"
                title="Operações desenhadas para a demanda pública"
                description="Atuação veterinária estruturada para apoiar programas municipais e estaduais, do planejamento à execução."
              />
            </Reveal>

            <div className="mt-9 divide-y divide-brand-brown/10 border-y border-brand-brown/10">
              {solutions.map((solution, index) => {
                const Icon = solutionIcons[solution.icon];
                return (
                  <Reveal key={solution.id} delay={index * 0.05}>
                    <a
                      href={`/solucoes#${solution.id}`}
                      className="group flex items-center gap-4 py-4 transition-colors sm:gap-5"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-[var(--radius-sm)] bg-brand-orange/12 text-brand-orange transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <Icon size={20} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-sans text-base font-semibold text-brand-brown transition-colors group-hover:text-brand-orange sm:text-lg">
                          {solution.title}
                        </span>
                        <span className="block font-sans text-sm font-light text-brand-muted">
                          {solution.outcome}
                        </span>
                      </span>
                      <IconArrow
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="shrink-0 text-brand-brown/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-orange"
                      />
                    </a>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-9">
                <Button href="/solucoes" variant="secondary" withArrow>
                  Ver todas as soluções
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/* About — heritage split with overlaid stat                          */
/* ----------------------------------------------------------------- */
export function AboutSection() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <PawField className="text-[#a88f8b]/30" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-20">
          <div className="flex flex-col">
            <Reveal>
              <SectionHeading
                eyebrow="Sobre o Grupo CVRBG"
                title="Cuidado animal e gestão pública na mesma operação"
                description="O Grupo CVRBG nasceu da prática veterinária e ampliou sua atuação para atender demandas públicas com responsabilidade, organização e visão de longo prazo."
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-7 space-y-5 font-sans text-base font-light leading-7 text-brand-muted sm:text-[17px]">
                <p>
                  Ao longo de mais de duas décadas, reunimos profissionais,
                  conhecimento técnico e capacidade operacional para apoiar
                  municípios e estados em programas que aproximam o cuidado
                  veterinário da população.
                </p>
                <p>
                  Hoje o Grupo opera com frota própria, equipes especializadas e
                  protocolos que dão previsibilidade e segurança a operações
                  públicas de grande demanda — da castração em escala ao
                  atendimento de emergências.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/sobre" variant="secondary" withArrow>
                  Conhecer o Grupo
                </Button>
                <Button href="/solucoes" variant="ghost">
                  Ver soluções
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:h-full">
            <div className="relative h-full">
              <Figure
                src="/images/castramovel-lateral.jpeg"
                alt="Unidade móvel do Grupo CVRBG em parceria com a gestão pública"
                sizes="(min-width: 1024px) 48vw, 100vw"
                ratio="aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto"
                className="shadow-[var(--shadow-md)] lg:h-full"
              />
              <div className="absolute -bottom-5 left-4 rounded-[var(--radius-md)] bg-brand-brown px-6 py-5 text-white shadow-[var(--shadow-lg)] sm:-bottom-6 sm:left-6 sm:px-7 sm:py-6">
                <span className="font-display text-4xl font-light leading-none text-brand-orange sm:text-5xl">
                  2005
                </span>
                <p className="mt-2 max-w-44 font-sans text-xs font-light leading-5 text-white/75">
                  o ano em que a nossa trajetória na saúde animal começou.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/* Presence — fleet image with regional reach                         */
/* ----------------------------------------------------------------- */
export function PresenceSection() {
  return (
    <section
      id="presenca"
      className="relative overflow-hidden bg-brand-brown text-white"
    >
      <Figure
        src="/images/equipe-operacao.jpeg"
        alt="Castramóvel da Clínica Veterinária Ricardo em operação"
        sizes="100vw"
        rounded="rounded-none"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-brown via-brand-brown/85 to-brand-brown/40" />
      <Container className="relative flex min-h-[640px] flex-col justify-between py-20 sm:py-24">
        <Reveal>
          <div className="max-w-xl">
            <Eyebrow tone="dark">Presença e parcerias</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,1.2rem+2.6vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.01em] text-white">
              Presença que acompanha a escala da operação
              <span className="text-brand-orange">.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-16">
            <ul className="grid gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
              {presenceItems.map((item) => (
                <li
                  key={item}
                  className="relative border-t border-white/30 pt-4"
                >
                  <span
                    className="absolute -top-[7px] left-0 size-3 rounded-full border-2 border-brand-orange bg-brand-brown"
                    aria-hidden="true"
                  />
                  <p className="font-sans text-lg font-medium text-white">{item}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg font-sans text-sm font-light leading-6 text-white/70">
                Experiência em operações públicas com capacidade de mobilização em
                diferentes regiões do país.
              </p>
              <Button href="/sobre" variant="primary" withArrow>
                Nossa trajetória
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- */
/* Final CTA                                                          */
/* ----------------------------------------------------------------- */
export function FinalCtaSection() {
  return (
    <section id="contato" className="bg-grain relative overflow-hidden bg-brand-orange py-20 text-white sm:py-24">
      <PawField className="text-white/[0.13]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow tone="onOrange" className="justify-center">
              Próximo passo
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(1.7rem,1.1rem+2.2vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-white">
              Estruture uma operação pública de saúde animal com quem já executa
              em escala.
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contato" variant="secondary" size="lg" withArrow>
                Falar com o Grupo
              </Button>
              <Button href="/solucoes" variant="inverse" size="lg">
                Conhecer as soluções
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
