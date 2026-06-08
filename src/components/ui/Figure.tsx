import Image from "next/image";
import type { ReactNode } from "react";
import { PawField } from "@/components/ui/PawField";

type FigureProps = {
  /** When omitted, a branded placeholder is rendered for the client to replace. */
  src?: string;
  alt?: string;
  /** Placeholder caption when no src is supplied. */
  placeholderLabel?: string;
  placeholderHint?: string;
  sizes?: string;
  priority?: boolean;
  /** Tailwind aspect ratio class, e.g. "aspect-[4/5]". Omit to fill the parent. */
  ratio?: string;
  rounded?: string;
  className?: string;
  /** Optional overlay rendered above the image (caption chips, scrims). */
  children?: ReactNode;
  imageClassName?: string;
};

/**
 * Branded image frame. Renders a real photo when `src` is given,
 * otherwise a tasteful, on-brand placeholder the client can swap in.
 */
export function Figure({
  src,
  alt = "",
  placeholderLabel = "Imagem a definir",
  placeholderHint,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  ratio,
  rounded = "rounded-[var(--radius-lg)]",
  className = "",
  children,
  imageClassName = "object-cover",
}: FigureProps) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${ratio ?? "h-full w-full"} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageClassName}
        />
      ) : (
        <Placeholder label={placeholderLabel} hint={placeholderHint} />
      )}
      {children}
    </div>
  );
}

function Placeholder({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden bg-brand-cream-deep px-6 text-center">
      <PawField className="text-brand-brown/[0.06]" />
      <span className="relative size-16 opacity-90">
        <Image
          src="/logos/logo-u.png"
          alt=""
          fill
          sizes="64px"
          className="object-contain"
        />
      </span>
      <div>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-brown/70">
          {label}
        </p>
        {hint ? (
          <p className="mt-1.5 max-w-xs font-sans text-[13px] font-light leading-5 text-brand-brown/50">
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  );
}
