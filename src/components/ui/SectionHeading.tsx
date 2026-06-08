import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark" | "onOrange";
  /** Adds the brand orange full-stop after the title. */
  period?: boolean;
  className?: string;
  titleClassName?: string;
};

const titleColor: Record<NonNullable<SectionHeadingProps["tone"]>, string> = {
  light: "text-brand-brown",
  dark: "text-white",
  onOrange: "text-white",
};

const descColor: Record<NonNullable<SectionHeadingProps["tone"]>, string> = {
  light: "text-brand-muted",
  dark: "text-white/70",
  onOrange: "text-white/85",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  period = true,
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <Eyebrow
          tone={tone}
          className={isCenter ? "justify-center" : ""}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={`mt-5 font-display text-[clamp(1.9rem,1.2rem+2.6vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.01em] ${titleColor[tone]} ${titleClassName}`}
      >
        {title}
        {period ? <span className="text-brand-orange">.</span> : null}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl font-sans text-base font-light leading-7 sm:text-[17px] ${descColor[tone]} ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
