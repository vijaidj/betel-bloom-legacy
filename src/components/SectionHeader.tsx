interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  /** Use on dark backgrounds so the heading stays legible */
  tone?: "default" | "onDark";
  className?: string;
}

/**
 * The one section header used across the whole site.
 *
 * Matches the product-page header language exactly: an 11px letterspaced
 * eyebrow, a Playfair heading at regular weight, a short gold hairline, and an
 * optional description. Headings are sentence case by convention — pass them
 * that way.
 */
const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  className = "",
}: SectionHeaderProps) => {
  const centered = align === "center";
  const onDark = tone === "onDark";

  return (
    <div
      className={`${centered ? "text-center mx-auto" : "text-left"} ${
        centered ? "max-w-2xl" : ""
      } mb-12 md:mb-14 ${className}`}
    >
      <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
        {eyebrow}
      </p>
      <h2
        className={`font-heading text-3xl md:text-[42px] leading-[1.12] ${
          onDark ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span
        className={`block w-14 h-px bg-accent mt-6 ${centered ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {description && (
        <p
          className={`text-[15px] leading-[1.75] mt-6 ${centered ? "mx-auto" : ""} max-w-xl ${
            onDark ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
