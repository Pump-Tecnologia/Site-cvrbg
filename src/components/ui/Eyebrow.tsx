import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark" | "onOrange";
  className?: string;
};

const toneColor: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  light: "text-brand-orange",
  dark: "text-brand-orange",
  onOrange: "text-brand-brown",
};

const lineColor: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  light: "bg-brand-orange",
  dark: "bg-brand-orange",
  onOrange: "bg-brand-brown",
};

/**
 * Section label. A short uppercase kicker with a leading rule —
 * a single consistent treatment used across every surface.
 */
export function Eyebrow({ children, tone = "light", className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.24em] ${toneColor[tone]} ${className}`}
    >
      <span className={`h-px w-7 ${lineColor[tone]}`} aria-hidden="true" />
      {children}
    </p>
  );
}
