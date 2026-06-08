"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      animate={{
        backgroundColor: isScrolled ? "rgba(255,255,255,0.94)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled
          ? "0 14px 40px rgba(45,22,18,0.1)"
          : "0 0 0 rgba(45,22,18,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md ${
        isScrolled ? "border-b border-brand-brown/8" : ""
      }`}
    >
      <Container>
        <nav
          aria-label="Navegação principal"
          className={`flex items-center justify-between transition-[height] duration-300 ${
            isScrolled ? "h-20 lg:h-22" : "h-24 lg:h-28"
          }`}
        >
          <Link
            href="/"
            aria-label="Grupo CVRBG — página inicial"
            className="flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`relative overflow-hidden transition-[height,width] duration-300 ${
                isScrolled ? "h-11 w-40 lg:h-12 lg:w-44" : "h-12 w-44 lg:h-14 lg:w-52"
              }`}
            >
              <Image
                src="/logos/logo-lateral.png"
                alt="Grupo CVRBG"
                fill
                sizes="208px"
                className="object-contain object-left"
                priority
              />
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-9 lg:flex">
            {navigationItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-[15px] font-semibold leading-none transition-colors hover:text-brand-orange ${
                    active ? "text-brand-orange" : "text-brand-brown"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-brand-orange transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
            <Button href="/contato" variant="primary" size="sm" withArrow>
              Falar com o Grupo
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-full bg-white text-brand-brown shadow-[var(--shadow-sm)] ring-1 ring-brand-brown/8 transition hover:bg-brand-orange hover:text-white lg:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="border-t border-brand-brown/8 bg-[rgba(255,255,255,0.98)] backdrop-blur-md lg:hidden"
          >
            <Container className="py-4">
              <div className="grid gap-1">
                {navigationItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-[var(--radius-sm)] px-4 py-3.5 text-[15px] font-semibold transition ${
                        active
                          ? "bg-brand-cream text-brand-orange"
                          : "text-brand-brown hover:bg-brand-cream"
                      }`}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-brand-orange">
                        ›
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-3">
                <Button href="/contato" variant="primary" withArrow fullWidth>
                  Falar com o Grupo
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
