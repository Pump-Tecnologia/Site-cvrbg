import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PawField } from "@/components/ui/PawField";
import {
  IconCalendar,
  IconDoc,
  IconHeart,
  IconMessage,
} from "@/components/ui/icons";
import type { LucideIcon } from "lucide-react";

const appFlow = [
  {
    title: "Cadastre você e seu pet",
    text: "Coloque os dados do seu animal e o seu contato uma única vez. Rápido e sem papelada.",
  },
  {
    title: "Agende o atendimento",
    text: "Confirme data, local e tipo de serviço. Você sabe exatamente quando e onde comparecer.",
  },
  {
    title: "Siga as orientações",
    text: "Veja os cuidados antes e depois do atendimento, explicados de um jeito simples e direto.",
  },
] as const;

const appFeatures = ["Castração", "Retorno", "Documentos", "Comunicados"] as const;

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: IconCalendar,
    title: "Agenda e lembretes",
    text: "Você é avisado de cada data e não perde o atendimento do seu pet.",
  },
  {
    icon: IconDoc,
    title: "Histórico e documentos",
    text: "Tudo o que foi feito com o seu pet fica guardado num só lugar.",
  },
  {
    icon: IconHeart,
    title: "Cuidados explicados",
    text: "Orientações de pré e pós-atendimento em linguagem simples.",
  },
  {
    icon: IconMessage,
    title: "Avisos da sua cidade",
    text: "Comunicados sobre mutirões e serviços disponíveis na sua região.",
  },
];

function StoreBadge({
  glyph,
  eyebrow,
  label,
}: {
  glyph: React.ReactNode;
  eyebrow: string;
  label: string;
}) {
  return (
    <span className="inline-flex min-w-[200px] items-center gap-3.5 rounded-[var(--radius-md)] border border-white/20 bg-brand-brown/30 px-5 py-3.5 text-white">
      <span className="text-white">{glyph}</span>
      <span className="flex flex-col">
        <span className="font-sans text-[10px] font-medium uppercase leading-none tracking-[0.16em] text-white/65">
          {eyebrow}
        </span>
        <span className="mt-1 font-display text-base font-semibold leading-none text-white">
          {label}
        </span>
      </span>
    </span>
  );
}

export function TutorAppPage() {
  return (
    <>
      {/* Hero — phone mockup */}
      <section className="bg-mesh-cream overflow-hidden pt-32 sm:pt-40">
        <Container className="pb-20 sm:pb-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="max-w-xl">
                <Eyebrow>App para tutores</Eyebrow>
                <h1 className="mt-5 font-display text-[clamp(2.2rem,1.4rem+3.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-brand-brown">
                  O cuidado do seu pet na palma da mão
                  <span className="text-brand-orange">.</span>
                </h1>
                <p className="mt-6 font-sans text-lg font-light leading-8 text-brand-muted">
                  Acompanhe o cadastro, o agendamento e cada etapa do atendimento
                  do seu pet — com orientações simples e lembretes, direto no
                  celular.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button href="#baixar" variant="primary" size="lg" withArrow>
                    Onde baixar
                  </Button>
                  <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-brand-brown/15 px-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted">
                    <span className="size-1.5 rounded-full bg-brand-orange" />
                    Em breve nas lojas
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative flex justify-center lg:justify-end">
                {/* backdrop */}
                <div className="absolute right-4 top-6 hidden h-[80%] w-[62%] rounded-[var(--radius-xl)] bg-brand-orange/90 lg:block" />
                <div className="absolute -left-6 bottom-0 h-56 w-56 rounded-full bg-brand-orange/15 blur-3xl" />

                {/* device */}
                <div className="relative w-full max-w-[320px] rounded-[40px] bg-brand-brown p-3 shadow-[var(--shadow-lg)]">
                  <div className="absolute left-1/2 top-4 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/25" />
                  <div className="overflow-hidden rounded-[30px] bg-white">
                    <div className="bg-brand-brown px-5 pb-9 pt-9 text-white">
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                        Próximo atendimento
                      </p>
                      <h2 className="mt-3 font-display text-2xl font-semibold leading-tight">
                        Castração agendada
                        <span className="text-brand-orange">.</span>
                      </h2>
                      <p className="mt-3 font-sans text-sm font-light leading-6 text-white/72">
                        Confira local, horário e orientações antes do procedimento.
                      </p>
                    </div>

                    <div className="space-y-4 p-5">
                      <div className="rounded-[var(--radius-md)] bg-brand-cream p-4">
                        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                          Pet
                        </p>
                        <p className="mt-2 font-display text-lg font-semibold text-brand-brown">
                          Luna
                        </p>
                        <p className="mt-1 font-sans text-sm font-light text-brand-muted">
                          Procedimento confirmado
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {appFeatures.map((item) => (
                          <div
                            key={item}
                            className="rounded-[var(--radius-sm)] border border-brand-brown/10 p-3"
                          >
                            <p className="font-sans text-xs font-medium text-brand-brown">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-[var(--radius-md)] bg-brand-orange p-4 text-white">
                        <p className="font-sans text-sm font-semibold">
                          Orientações liberadas
                        </p>
                        <p className="mt-1 font-sans text-xs font-light leading-5 text-white/82">
                          Preparos antes do atendimento e cuidados após a alta.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Jornada do tutor */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Como funciona"
              title="Do cadastro ao atendimento, sem complicação"
              description="Três passos simples para você chegar tranquilo e preparado no dia do atendimento do seu pet."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {appFlow.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="flex h-full flex-col gap-5 rounded-[var(--radius-lg)] bg-brand-cream p-7">
                  <span className="font-display text-4xl font-light leading-none text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-brand-brown">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm font-light leading-6 text-brand-muted">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Feito para você e seu pet */}
      <section className="relative overflow-hidden bg-white pb-20 sm:pb-24 lg:pb-28">
        <PawField className="text-[#a88f8b]/30" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Feito para você e seu pet"
              title="Tudo do seu pet, organizado num só lugar"
              description="Lembretes, orientações e o histórico de cada atendimento — simples e na hora que você precisar, para cuidar do seu melhor amigo com tranquilidade."
            />
          </Reveal>
        </Container>

        {/* Full-bleed dog band — transparent cut-outs on white */}
        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-10 w-full max-w-[1500px] px-5 sm:mt-12 sm:px-6 lg:px-8">
            <Image
              src="/images/feedback-img.png"
              alt="Pets acompanhados pelo Grupo CVRBG"
              width={3907}
              height={1241}
              sizes="(min-width: 1500px) 1500px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Container className="relative">
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={index * 0.05}>
                  <article className="flex h-full flex-col gap-4 rounded-[var(--radius-lg)] border border-brand-brown/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-[var(--shadow-md)]">
                    <span className="grid size-11 place-items-center rounded-[var(--radius-md)] bg-brand-orange/12 text-brand-orange">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-brand-brown">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm font-light leading-6 text-brand-muted">
                        {benefit.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Download */}
      <section
        id="baixar"
        className="relative overflow-hidden bg-grain bg-brand-brown py-20 text-white sm:py-24"
      >
        <PawField />
        <Container className="relative">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
              <div>
                <Eyebrow tone="dark">Em breve nas lojas</Eyebrow>
                <h2 className="mt-5 max-w-xl font-display text-[clamp(1.8rem,1.2rem+2.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-white">
                  Baixe o app assim que chegar na sua cidade
                  <span className="text-brand-orange">.</span>
                </h2>
                <p className="mt-5 max-w-lg font-sans text-base font-light leading-7 text-white/72">
                  Os links da App Store e da Google Play serão ativados no
                  lançamento, conforme o serviço chega a cada município. Fique de
                  olho!
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-white/12 bg-white/[0.04] p-6 sm:p-8">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  Disponível em breve
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <StoreBadge glyph={<FaApple size={24} />} eyebrow="Baixar na" label="App Store" />
                  <StoreBadge glyph={<FaGooglePlay size={20} />} eyebrow="Disponível no" label="Google Play" />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
