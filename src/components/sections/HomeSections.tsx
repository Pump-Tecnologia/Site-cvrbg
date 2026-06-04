import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  metrics,
  operatingHighlights,
  partnerItems,
  presenceItems,
  solutions,
} from "@/data/site";

export function AuthoritySection() {
  return (
    <section id="autoridade" className="bg-white py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Autoridade operacional"
            title="Números que sustentam contratos públicos"
            description="A narrativa institucional do Grupo CVRBG precisa provar estrutura, escala e maturidade técnica logo no início da experiência."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.04}>
              <div className="rounded-[8px] border border-black/6 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-orange-950/8">
                <strong className="font-display text-4xl font-semibold text-brand-brown">
                  {metric.value}
                </strong>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-muted">
                  {metric.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-brand-cream py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Soluções para gestão pública"
              title="Serviços para demandas reais de municípios e estados"
              description="A Home precisa encaminhar gestores públicos para soluções claras, sem parecer uma clínica comum ou um catálogo genérico."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <Reveal key={solution.title} delay={index * 0.05}>
                <Link
                  href="/solucoes"
                  className="group block min-h-56 rounded-[8px] bg-white p-8 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-950/10"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-brand-cream text-lg font-semibold text-brand-orange transition duration-300 group-hover:bg-brand-orange group-hover:text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold text-brand-brown">
                    {solution.title}
                  </h3>
                  <p className="mt-4 font-light leading-7 text-brand-muted">{solution.text}</p>
                  <span className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                    Saiba mais
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function StructureSection() {
  return (
    <section id="estrutura" className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[1.1/1] overflow-hidden rounded-[8px]">
              <Image
                src="/images/unidade-interna.jpeg"
                alt="Interior de unidade móvel veterinária do Grupo CVRBG"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-8 left-8 max-w-md rounded-[8px] bg-white/90 p-6 shadow-xl backdrop-blur">
                <p className="font-display text-3xl font-semibold leading-tight text-brand-brown">
                  Castramóveis modernos, equipados e fiscalizáveis.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Estrutura operacional"
              title="Do agendamento à execução, a operação precisa ser controlável"
              description="O diferencial do Grupo CVRBG está na soma de frota, protocolos técnicos, equipe selecionada e rastreabilidade para o contratante público."
            />
            <div className="mt-8 grid gap-4">
              {operatingHighlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[8px] border border-black/6 bg-white p-5 shadow-sm"
                >
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-brand-orange" />
                  <p className="text-lg font-light leading-8 text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function PresenceSection() {
  return (
    <section id="presenca" className="bg-brand-brown py-28 text-white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Presença e parcerias"
            title="Capacidade nacional para diferentes realidades públicas"
            description="A presença em estados e municípios reforça a leitura de empresa preparada para expansão e contratação B2G."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-[8px] bg-white/8 p-7 ring-1 ring-white/10">
              <h3 className="font-display text-2xl font-semibold">Estados de atuação</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {presenceItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-brown"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[8px] bg-white/8 p-7 ring-1 ring-white/10">
              <h3 className="font-display text-2xl font-semibold">Governos e municípios</h3>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {partnerItems.map((item) => (
                  <span key={item} className="text-sm font-light text-white/78">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contato" className="bg-white py-28">
      <Container>
        <Reveal>
          <div className="rounded-[8px] bg-brand-orange px-7 py-14 text-center text-white sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              Próximo passo
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Estruture uma operação pública de saúde animal com quem já executa em escala.
            </h2>
            <Link
              href="/contato"
              className="mt-9 inline-flex rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-brown transition duration-300 hover:-translate-y-0.5"
            >
              Abrir contato institucional
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
