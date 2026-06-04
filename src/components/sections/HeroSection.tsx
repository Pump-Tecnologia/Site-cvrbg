"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-brand-brown">
      <motion.div
        initial={{ opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-cvrbg.png"
          alt="Operação do Grupo CVRBG"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <Container className="relative flex min-h-screen items-center pt-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-brand-brown sm:text-5xl lg:text-[60px]">
            Saúde animal para gestão pública
            <span className="text-brand-orange">.</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-light leading-7 text-brand-brown/70">
            Estrutura, equipe e operação para apoiar programas municipais.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="rounded-full bg-brand-orange px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy"
              style={{ color: "#ffffff" }}
            >
              Falar com o Grupo
            </Link>
            <Link
              href="/estrutura-operacional"
              className="rounded-full bg-white px-8 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-brand-brown transition duration-300 hover:-translate-y-0.5"
              style={{ color: "#24140f" }}
            >
              Ver estrutura
            </Link>
          </div>
        </motion.div>
      </Container>

    </section>
  );
}
