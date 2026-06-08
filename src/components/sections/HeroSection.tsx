"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-mesh-cream text-brand-brown lg:min-h-screen lg:bg-white">
      {/* Desktop: full-bleed background image (unchanged) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 hidden lg:block"
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

      <Container className="relative pb-16 pt-28 lg:flex lg:min-h-screen lg:items-center lg:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:max-w-2xl"
        >
          <h1 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-brand-brown sm:text-5xl lg:text-[60px]">
            Saúde animal para gestão pública
            <span className="text-brand-orange">.</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-light leading-7 text-brand-brown/70">
            Estrutura, equipe e operação para apoiar programas municipais.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/contato"
              variant="primary"
              size="lg"
              withArrow
              fullWidth
              className="sm:w-auto"
            >
              Falar com o Grupo
            </Button>
            {/* Mobile / tablet: solid for contrast on the light background */}
            <Button
              href="/sobre"
              variant="secondary"
              size="lg"
              fullWidth
              className="sm:w-auto lg:hidden"
            >
              Sobre o Grupo
            </Button>
            {/* Desktop: white button over the photo (unchanged) */}
            <Button
              href="/sobre"
              variant="inverse"
              size="lg"
              fullWidth
              className="max-lg:hidden sm:w-auto"
            >
              Sobre o Grupo
            </Button>
          </div>

          {/* Mobile / tablet: framed photo card (hidden on desktop) */}
          <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] lg:hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero-cvrbg-mobile.png"
                alt="Veterinária examinando um cão em clínica do Grupo CVRBG"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[60%_center]"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
