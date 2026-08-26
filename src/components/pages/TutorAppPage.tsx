import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PawField } from "@/components/ui/PawField";
import { IconCalendar, IconMessage, IconShield } from "@/components/ui/icons";
import type { LucideIcon } from "lucide-react";

const appFlow = [
  {
    title: "Crie sua conta e cadastre seus pets",
    text: "Entre com e-mail, Google ou Apple e informe os dados do seu cão ou gato uma única vez: nome, espécie, idade, peso e porte.",
  },
  {
    title: "Inscreva-se no evento da sua cidade",
    text: "Escolha o mutirão de castração gratuita disponível na sua região. O app confere as regras do programa (idade, peso, cota por CPF, residência) na hora.",
  },
  {
    title: "Compareça e acompanhe tudo pelo app",
    text: "Receba a senha do dia, o resultado da triagem, o status do atendimento e o horário de alta — com o número do microchip registrado no cadastro do pet.",
  },
] as const;

const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: IconMessage,
    title: "Avisos em cada etapa",
    text: "Notificações no app e por e-mail sobre inscrição, triagem, resultado e lembretes do evento.",
  },
  {
    icon: IconCalendar,
    title: "Eventos da sua região",
    text: "Veja os mutirões de castração gratuita disponíveis onde você mora e as regras de cada programa.",
  },
  {
    icon: IconShield,
    title: "Seus dados, sob seu controle",
    text: "Sem anúncios nem rastreamento. Você vê, baixa ou exclui seus dados quando quiser, direto no perfil.",
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
    <span className="inline-flex min-w-[200px] items-center gap-3.5 rounded-[var(--radius-md)] border border-white/20 bg-brand-brown px-5 py-3.5 text-white">
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
                <Eyebrow>ConectaPet · app para tutores</Eyebrow>
                <h1 className="mt-5 font-display text-[clamp(2.2rem,1.4rem+3.4vw,3.9rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-brand-brown">
                  Castração gratuita do seu pet, com inscrição pelo celular
                  <span className="text-brand-orange">.</span>
                </h1>
                <p className="mt-6 font-sans text-lg font-light leading-8 text-brand-muted">
                  O ConectaPet é o aplicativo do Grupo CVRBG para tutores de
                  cães e gatos se inscreverem nos eventos de castração gratuita
                  promovidos por estados e prefeituras — e acompanharem cada
                  etapa, da inscrição à alta.
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

                {/* Mockup real do app — a moldura do aparelho ja vem na
                    imagem (PNG com fundo transparente), por isso nao ha
                    device desenhado em volta. */}
                <Image
                  src="/images/mock-conectapet.png"
                  alt="Tela inicial do ConectaPet: inscricao do pet em um mutirao de castracao, com a lista de pets do tutor"
                  width={1122}
                  height={1402}
                  priority
                  // Captura de interface, nao fotografia: o padrao q=75 do Next
                  // serrilha o texto miudo da tela do app. 95 mantem a leitura
                  // limpa e ainda entrega ~100 KB contra 980 KB do PNG original.
                  quality={95}
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 280px"
                  className="relative h-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px]"
                />
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
              title="Da inscrição à alta, tudo pelo ConectaPet"
              description="Três passos para garantir a vaga do seu pet no mutirão de castração gratuita e chegar preparado no dia."
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
              title="Tudo do seu pet e do atendimento num só lugar"
              description="Inscrições, status, documentos e avisos — organizados no app, sem papelada e sem fila para saber em que etapa o seu pet está."
            />
          </Reveal>
        </Container>

        {/* Full-bleed dog band — transparent cut-outs on white */}
        <Reveal delay={0.08}>
          <div className="relative mx-auto mt-10 w-full max-w-[1500px] px-5 sm:mt-12 sm:px-6 lg:px-8">
            <Image
              src="/images/feedback-img.png"
              alt="Cães e gatos atendidos nos eventos de castração do Grupo CVRBG"
              width={3907}
              height={1241}
              sizes="(min-width: 1500px) 1500px, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <Container className="relative">
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="mt-8 text-center font-sans text-sm font-light text-brand-muted">
            Quer saber exatamente quais dados o app usa e por quê?{" "}
            <Link
              href="/privacidade"
              className="font-medium text-brand-orange underline-offset-4 hover:underline"
            >
              Leia a política de privacidade do ConectaPet
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Download */}
      <section
        id="baixar"
        className="bg-grain relative overflow-hidden bg-brand-orange py-20 text-white sm:py-24"
      >
        <PawField className="text-white/[0.13]" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <Container className="relative">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
              <div>
                <Eyebrow tone="onOrange">Em breve nas lojas</Eyebrow>
                <h2 className="mt-5 max-w-xl font-display text-[clamp(1.8rem,1.2rem+2.2vw,2.8rem)] font-semibold leading-[1.1] tracking-[-0.01em] text-white">
                  Baixe o ConectaPet assim que chegar na sua cidade
                  <span className="text-brand-brown">.</span>
                </h2>
                <p className="mt-5 max-w-lg font-sans text-base font-light leading-7 text-white/85">
                  Os links da App Store e da Google Play serão ativados no
                  lançamento, conforme os eventos de castração gratuita chegam a
                  cada município. Fique de olho!
                </p>
              </div>

              <div className="rounded-[var(--radius-lg)] border border-white/25 bg-white/10 p-6 sm:p-8">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-brown">
                  Disponível em breve
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <StoreBadge
                    glyph={<FaApple size={24} />}
                    eyebrow="Baixar na"
                    label="App Store"
                  />
                  <StoreBadge
                    glyph={<FaGooglePlay size={20} />}
                    eyebrow="Disponível no"
                    label="Google Play"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
