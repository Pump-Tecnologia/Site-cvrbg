type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl font-semibold leading-tight text-brand-brown sm:text-5xl">
        {title}
        <span className="text-brand-orange">.</span>
      </h2>
      {description ? (
        <p className="mt-5 text-lg font-light leading-8 text-brand-muted">{description}</p>
      ) : null}
    </div>
  );
}
