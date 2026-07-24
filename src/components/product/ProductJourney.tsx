import { Sprout, Scissors, Layers, Package, Truck, Home, Check } from "lucide-react";
import type { JourneyStep, Variant } from "@/data/types";

const ICONS = { sprout: Sprout, scissors: Scissors, layers: Layers, package: Package, truck: Truck, home: Home };

/* ── Farm to customer timeline ─────────────────────────────────── */

export const ProductJourney = ({ steps }: { steps: JourneyStep[] }) => (
  <section className="py-20 md:py-24 bg-secondary/25 border-y border-border/60">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
          Farm to your door
        </p>
        <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary">
          The journey
        </h2>
        <span className="block w-14 h-px bg-accent mx-auto mt-6" aria-hidden="true" />
      </div>

      <ol className="relative grid gap-10 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
        {/* Connecting rule, desktop only */}
        <span
          className="hidden lg:block absolute top-7 left-[8.33%] right-[8.33%] h-px bg-border"
          aria-hidden="true"
        />

        {steps.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <li key={s.title} className="relative lg:text-center">
              <div className="flex lg:flex-col lg:items-center gap-4 lg:gap-0">
                <span
                  className="relative z-10 w-14 h-14 rounded-full bg-card border border-accent/30 flex items-center justify-center shrink-0 lg:mx-auto lg:mb-4"
                  aria-hidden="true"
                >
                  <Icon className="h-6 w-6 text-accent" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] tracking-widest text-accent/60 font-semibold mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading text-lg text-primary leading-snug mb-1.5">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.detail}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

/* ── Why choose this variant ───────────────────────────────────── */

export const WhyThisVariant = ({ variant }: { variant: Variant }) => (
  <div className="rounded-2xl border border-border bg-card p-6 md:p-7">
    <h2 className="font-heading text-xl text-primary mb-5 leading-tight">
      Why choose {variant.label}?
    </h2>
    <ul className="space-y-3.5">
      {variant.whyThis.map((reason) => (
        <li key={reason} className="flex gap-3">
          <Check className="h-[18px] w-[18px] text-accent shrink-0 mt-0.5" aria-hidden="true" />
          <span className="text-sm text-muted-foreground leading-relaxed">{reason}</span>
        </li>
      ))}
    </ul>
  </div>
);

/* ── Variant comparison table ──────────────────────────────────── */

interface CompareProps {
  variants: Variant[];
  rows: string[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export const VariantComparison = ({ variants, rows, selectedId, onSelect }: CompareProps) => {
  if (variants.length < 2) return null;

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
            Side by side
          </p>
          <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary">
            Which one suits you
          </h2>
          <span className="block w-14 h-px bg-accent mx-auto mt-6" aria-hidden="true" />
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full min-w-[520px] border-collapse">
            <caption className="sr-only">
              Comparison of {variants.map((v) => v.label).join(" and ")}
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-[28%]" />
                {variants.map((v) => (
                  <th
                    key={v.id}
                    scope="col"
                    className={`text-left align-bottom p-4 border-b-2 transition-colors ${
                      v.id === selectedId ? "border-accent" : "border-border"
                    }`}
                  >
                    <span className="block text-[17px] font-semibold tracking-tight text-primary leading-tight tabular-nums">
                      {v.label}
                    </span>
                    <span className="block text-xs text-accent mt-0.5">{v.sublabel}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row} className="border-b border-border">
                  <th
                    scope="row"
                    className="text-left py-4 pr-4 text-xs uppercase tracking-wider text-muted-foreground/80 font-medium align-top"
                  >
                    {row}
                  </th>
                  {variants.map((v) => (
                    <td key={v.id} className="py-4 px-4 text-sm text-primary align-top tabular-nums">
                      {v.compare[row] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td />
                {variants.map((v) => (
                  <td key={v.id} className="pt-6 px-4">
                    <button
                      type="button"
                      onClick={() => onSelect(v.id)}
                      className={`w-full h-11 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                        v.id === selectedId
                          ? "bg-accent text-accent-foreground"
                          : "border border-border text-primary hover:border-accent"
                      }`}
                    >
                      {v.id === selectedId ? "Selected" : `Choose ${v.label}`}
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
