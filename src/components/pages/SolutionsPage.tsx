import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Figure } from "@/components/ui/Figure";
import { Button } from "@/components/ui/Button";
import { PawField } from "@/components/ui/PawField";
import { ClosingCta } from "@/components/sections/ClosingCta";
import {
  IconVan,
  IconAmbulance,
  IconClinic,
  IconRescue,
  IconArrow,
  IconTeam,
  IconPhone,
} from "@/components/ui/icons";
import { solutions, type SolutionIcon } from "@/data/site";
import type { LucideIcon } from "lucide-react";

const solutionIcons: Record<SolutionIcon, LucideIcon> = {
  van: IconVan,
  ambulance: IconAmbulance,
  clinic: IconClinic,
  rescue: IconRescue,
};

// Solutions that have a dedicated detail section below the overview grid.
const detailIds = new Set<string>(["castramoveis", "samu-animal", "ubs-animal"]);

const managementItems = [
  {
    title: "Planejamento operacional",
    text: "Dimensionamento de equipe, logística, agenda e fluxo de atendimento para programas públicos.",
  },
  {
    title: "Protocolos técnicos",
    text: "Padronização de etapas, cuidados e processos para ampliar segurança e previsibilidade.",
  },
  {
    title: "Controle e rastreabilidade",
    text: "Apoio à organização de dados, acompanhamento e prestação de informações ao setor público.",
  },
] as const;

const samuPoints: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: IconAmbulance,
    title: "Ambulâncias equipadas",
    text: "Veículos preparados para transporte e primeiro atendimento no local.",
  },
  {
    icon: IconTeam,
    title: "Equipe de prontidão",
    text: "Profissionais prontos para acionar quando a ocorrência exige rapidez.",
  },
  {
    icon: IconPhone,
    title: "Suporte a ocorrências",
    text: "Apoio operacional do chamado até a resolução de cada caso.",
  },
];

export function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-mesh-cream pt-32 sm:pt-40">
        <Container className="pb-16 sm:pb-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-16">
            <Reveal className="flex flex-col justify-center">
              <div>
                <Eyebrow>Soluções B2G</Eyebrow>
                <h1 className="mt-5 font-display text-[clamp(2.2rem,1.4rem+3.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-brand-brown">
                  Operações veterinárias estruturadas para municípios
                  <span className="text-brand-orange">.</span>
                </h1>
                <p className="mt-6 max-w-xl font-sans text-lg font-light leading-8 text-brand-muted">
                  Soluções para ampliar acesso, organizar demandas e apoiar
                  secretarias em programas de saúde animal — do planejamento à
                  execução assistida.
                </p>
                <div className="mt-8">
                  <Button href="/contato" variant="primary" size="lg" withArrow>
                    Solicitar uma proposta
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:h-full">
              <Figure
                src="/images/equipe-operacao.jpeg"
                alt="Castramóvel da Clínica Veterinária Ricardo atendendo em via pública"
                sizes="(min-width: 1024px) 50vw, 100vw"
                ratio="aspect-[5/4] lg:aspect-auto"
                priority
                className="shadow-[var(--shadow-md)] lg:h-full lg:min-h-[420px]"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overview grid */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        <PawField className="text-[#a88f8b]/30" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="O que oferecemos"
              title="Quatro frentes para a saúde pública animal"
              description="Cada solução pode operar de forma isolada ou integrada, conforme a necessidade do município."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[solution.icon];
              const hasDetail = detailIds.has(solution.id);
              const cardBase =
                "flex h-full flex-col gap-5 rounded-[var(--radius-lg)] border border-brand-brown/8 bg-brand-cream p-7";
              const inner = (
                <>
                  <span className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-white text-brand-brown shadow-[var(--shadow-sm)] transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    <Icon width={22} height={22} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-brand-brown">
                      {solution.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm font-light leading-6 text-brand-muted">
                      {solution.text}
                    </p>
                  </div>
                  {hasDetail ? (
                    <span className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-brand-orange">
                      Ver detalhes
                      <IconArrow
                        size={14}
                        strokeWidth={2.25}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  ) : null}
                </>
              );
              return (
                <Reveal key={solution.id} delay={index * 0.05}>
                  {hasDetail ? (
                    <a
                      href={`#${solution.id}`}
                      className={`group ${cardBase} transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-white hover:shadow-[var(--shadow-md)]`}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className={cardBase}>{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Castramóveis — video */}
      <section id="castramoveis" className="bg-brand-brown py-20 text-white sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  poster="/images/video-posters/castramovel.jpg"
                >
                  <source src="/videos/castramovel.mp4" type="video/mp4" />
                  Seu navegador não oferece suporte à reprodução de vídeo.
                </video>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <span className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-brand-orange text-white">
                  <IconVan width={22} height={22} />
                </span>
                <SectionHeading
                  className="mt-6"
                  eyebrow="Castramóveis e mutirões"
                  title="Atendimento móvel para programas de grande demanda"
                  description="Unidades móveis equipadas para levar estrutura veterinária a diferentes regiões, com fluxo organizado, equipe técnica e acompanhamento dos atendimentos."
                  tone="dark"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SAMU Animal — icon-led */}
      <section id="samu-animal" className="bg-brand-cream py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <span className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-brand-burgundy text-white">
                  <IconAmbulance width={22} height={22} />
                </span>
                <SectionHeading
                  className="mt-6"
                  eyebrow="SAMU Animal"
                  title="Resposta rápida para emergências com animais"
                  description="Ambulâncias, profissionais e suporte operacional para atender ocorrências que exigem agilidade e condução técnica."
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="grid gap-4">
                {samuPoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div
                      key={point.title}
                      className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-brand-brown/8 bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-burgundy/30 hover:shadow-[var(--shadow-md)] sm:p-6"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-[var(--radius-md)] bg-brand-burgundy/10 text-brand-burgundy">
                        <Icon size={20} />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-brand-brown">
                          {point.title}
                        </h3>
                        <p className="mt-1.5 font-sans text-sm font-light leading-6 text-brand-muted">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* UBS Animal — video */}
      <section id="ubs-animal" className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <span className="grid size-12 place-items-center rounded-[var(--radius-md)] bg-brand-orange text-white">
                  <IconClinic width={22} height={22} />
                </span>
                <SectionHeading
                  className="mt-6"
                  eyebrow="UBS Animal"
                  title="Apoio à estrutura pública de atendimento animal"
                  description="Administração e suporte operacional para unidades públicas, aproximando atendimento veterinário, manejo e cuidado animal da população."
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)]">
                <video
                  className="aspect-video w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  poster="/images/video-posters/ubs-animal.jpg"
                >
                  <source src="/videos/ubs-animal.mp4" type="video/mp4" />
                  Seu navegador não oferece suporte à reprodução de vídeo.
                </video>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Gestão técnica */}
      <section className="relative overflow-hidden bg-brand-orange py-20 text-white sm:py-24">
        <PawField className="text-white/[0.13]" />
        <Container className="relative">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div>
                <Eyebrow tone="onOrange">Gestão técnica</Eyebrow>
                <h2 className="mt-5 max-w-xl font-display text-[clamp(1.8rem,1.2rem+2.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-white">
                  Organização que dá previsibilidade à operação
                  <span className="text-brand-brown">.</span>
                </h2>
              </div>

              <div className="grid gap-4">
                {managementItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[var(--radius-lg)] border border-brand-brown/10 bg-white p-6 text-brand-brown shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-brown/25 hover:shadow-[var(--shadow-lg)] sm:p-7"
                  >
                    <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 font-sans text-sm font-light leading-6 text-brand-muted">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ClosingCta
        text="Estruture uma operação de saúde animal com equipe, frota e processos preparados para o setor público."
        primaryLabel="Falar com o Grupo"
        primaryHref="/contato"
        secondaryLabel="Conhecer o Grupo"
        secondaryHref="/sobre"
      />
    </>
  );
}
