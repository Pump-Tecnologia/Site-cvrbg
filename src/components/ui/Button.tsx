import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  /** Internal route or external URL. Omit to render a <button>. */
  href?: string;
  external?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  withArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
};

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 font-sans font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes: Record<ButtonSize, string> = {
  sm: "rounded-[var(--radius-pill)] px-5 py-2.5 text-[11px]",
  md: "rounded-[var(--radius-pill)] px-6 py-3.5 text-xs",
  lg: "rounded-[var(--radius-pill)] px-8 py-4 text-xs sm:text-[13px]",
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-orange text-white shadow-[var(--shadow-orange)] hover:bg-brand-orange-600 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(221,94,30,0.36)] active:translate-y-0 focus-visible:outline-brand-orange",
  secondary:
    "bg-brand-brown text-white hover:bg-brand-brown-700 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] active:translate-y-0 focus-visible:outline-brand-brown",
  inverse:
    "bg-white text-brand-brown hover:-translate-y-0.5 hover:bg-brand-cream hover:shadow-[var(--shadow-md)] active:translate-y-0 focus-visible:outline-white",
  ghost:
    "border border-brand-brown/25 text-brand-brown hover:border-brand-orange hover:text-brand-orange hover:-translate-y-0.5 focus-visible:outline-brand-orange",
  link: "px-0 py-1 normal-case tracking-normal text-brand-brown hover:text-brand-orange focus-visible:outline-brand-orange",
};

function Arrow() {
  return (
    <ArrowRight
      size={16}
      strokeWidth={2.25}
      aria-hidden="true"
      className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
    />
  );
}

export function Button({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  withArrow = false,
  fullWidth = false,
  className = "",
  type = "button",
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    base,
    variant === "link" ? "" : sizes[size],
    variants[variant],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <Arrow /> : null}
    </>
  );

  if (href !== undefined) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
