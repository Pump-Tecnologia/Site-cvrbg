"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{
        y: 0,
        backgroundColor: isScrolled ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0)",
        boxShadow: isScrolled
          ? "0 18px 50px rgba(36,20,15,0.12)"
          : "0 0 0 rgba(36,20,15,0)",
      }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 ${
        isScrolled ? "border-b border-black/5" : ""
      }`}
    >
      <Container>
        <nav
          aria-label="Navegação principal"
          className={`flex items-center justify-between transition-[height] duration-300 ${
            isScrolled ? "h-24" : "h-28"
          }`}
        >
          <Link
            href="/"
            aria-label="Grupo CVRBG"
            className="flex items-center gap-3"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`relative overflow-hidden transition-[height,width] duration-300 ${
                isScrolled ? "h-13 w-48" : "h-14 w-52"
              }`}
            >
              <Image
                src="/logos/logo-lateral.png"
                alt=""
                fill
                sizes={isScrolled ? "192px" : "208px"}
                className="object-contain"
                priority
              />
            </span>
          </Link>

          <div className="ml-auto hidden items-center justify-end gap-10 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold leading-none transition hover:text-brand-orange"
                style={{ color: "#24140f" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid size-11 place-items-center rounded-full bg-white/92 text-brand-brown transition hover:bg-brand-orange hover:text-white lg:hidden"
            style={{ color: "#24140f" }}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t border-black/5 bg-white lg:hidden"
          >
            <Container className="py-3">
              <div className="rounded-[8px] border border-black/8 bg-white p-4 shadow-2xl">
                <div className="grid gap-1">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="rounded-[8px] px-4 py-3 text-sm font-black text-brand-brown transition hover:bg-brand-cream hover:text-brand-orange"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
