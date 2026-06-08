import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PawField } from "@/components/ui/PawField";

type ClosingCtaProps = {
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

/**
 * Standard closing call-to-action band, shared by the inner pages
 * so every surface ends with the same consistent next step.
 */
export function ClosingCta({
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: ClosingCtaProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative flex flex-col gap-8 overflow-hidden rounded-[var(--radius-xl)] bg-brand-brown bg-grain px-7 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <PawField />
            <p className="relative max-w-xl font-display text-2xl font-semibold leading-snug text-white sm:text-[28px]">
              {text}
            </p>
            <div className="relative flex flex-col gap-3 sm:flex-row">
              <Button href={primaryHref} variant="primary" size="lg" withArrow>
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryHref ? (
                <Button href={secondaryHref} variant="inverse" size="lg">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
