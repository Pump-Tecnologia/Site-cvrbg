import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { company, solutions, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-grain bg-brand-brown text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-12">
          <div className="max-w-sm">
            <Link href="/" aria-label="Grupo CVRBG" className="inline-flex">
              <span className="relative size-16 overflow-hidden">
                <Image
                  src="/logos/logo-u.png"
                  alt="Grupo CVRBG"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </span>
            </Link>
            <p className="mt-6 text-sm font-light leading-7 text-white/65">
              Operações veterinárias para programas públicos de saúde animal —
              com estrutura, equipe e capacidade de atendimento em escala. Desde{" "}
              {company.foundedYear}.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Navegação
            </h2>
            <ul className="mt-6 grid gap-3.5">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm font-light text-white/70 transition hover:text-brand-orange"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluções">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Soluções
            </h2>
            <ul className="mt-6 grid gap-3.5">
              {solutions.map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={`/solucoes#${solution.id}`}
                    className="link-underline text-sm font-light text-white/70 transition hover:text-brand-orange"
                  >
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Contato
            </h2>
            <div className="mt-6 grid gap-4 text-sm font-light leading-6 text-white/70">
              <p>
                {company.address.line1}
                <br />
                {company.address.line2}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-brand-orange"
              >
                WhatsApp {company.whatsappDisplay}
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className="transition hover:text-brand-orange"
              >
                {company.phoneDisplay}
              </a>
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-brand-orange"
              >
                {company.instagram}
              </a>
            </div>
          </address>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-light text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {company.foundedYear}–{new Date().getFullYear()} {company.name}. Todos
            os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://pumpsites.com.br"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-white/65 transition hover:text-brand-orange"
            >
              Pump
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
