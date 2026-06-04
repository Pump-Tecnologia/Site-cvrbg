import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type InstitutionalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
};

export function InstitutionalPage({
  eyebrow,
  title,
  description,
  points,
}: InstitutionalPageProps) {
  return (
    <section className="bg-white pt-40">
      <Container className="pb-24">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-tight text-brand-brown sm:text-6xl">
              {title}
              <span className="text-brand-orange">.</span>
            </h1>
            <p className="mt-6 text-xl font-bold leading-9 text-brand-muted">
              {description}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <Reveal>
            <div className="rounded-[8px] bg-brand-cream p-8">
              <SectionHeading
                eyebrow="Página em construção"
                title="Base estrutural criada"
                description="Nesta fase, a página já existe para orientar navegação, SEO e arquitetura. O conteúdo visual e textual será aprofundado bloco a bloco."
              />
              <Link
                href="/contato"
                className="mt-8 inline-flex rounded-full bg-brand-orange px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-brand-burgundy"
              >
                Falar com o Grupo
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {points.map((point, index) => (
              <Reveal key={point} delay={index * 0.04}>
                <div className="rounded-[8px] border border-black/6 bg-white p-6 shadow-sm">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-lg font-bold leading-8 text-brand-brown">
                    {point}
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

