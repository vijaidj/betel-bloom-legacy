import { Sprout, Truck, ShieldCheck, CalendarDays, Hourglass, Leaf, Ban, Sun } from "lucide-react";
import type { Freshness } from "@/data/types";

/**
 * Answers the question every buyer of agricultural produce actually has:
 * how fresh is this, and what happens if it arrives badly?
 *
 * Fresh produce and packaged goods get different rows because they face
 * different doubts.
 */
const FreshnessIndicator = ({ freshness }: { freshness: Freshness }) => {
  const rows =
    freshness.kind === "fresh"
      ? [
          { icon: Sprout, label: "Harvest", value: freshness.harvest },
          { icon: Truck, label: "Dispatch", value: freshness.dispatch },
          { icon: ShieldCheck, label: "Guarantee", value: freshness.guarantee },
          ...(freshness.peakMonths
            ? [{ icon: Sun, label: "Season", value: freshness.peakMonths }]
            : []),
        ]
      : [
          { icon: CalendarDays, label: "Packed", value: freshness.packedNote },
          { icon: Hourglass, label: "Best before", value: freshness.bestBefore },
          { icon: Leaf, label: "Contents", value: freshness.naturalNote },
          { icon: Ban, label: "Additives", value: freshness.preservativeNote },
        ];

  return (
    <section
      aria-label="Freshness information"
      className="rounded-2xl border border-accent/25 bg-accent/[0.045] p-6 md:p-7"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-70 motion-safe:animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
        </span>
        <h2 className="font-heading text-xl text-primary leading-none">
          {freshness.kind === "fresh" ? "How fresh is this?" : "What's in the pack"}
        </h2>
      </div>

      <dl className="space-y-4">
        {rows.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-3.5">
            <Icon className="h-[18px] w-[18px] text-accent shrink-0 mt-0.5" aria-hidden="true" />
            <div className="min-w-0">
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground/75 mb-0.5">
                {label}
              </dt>
              <dd className="text-sm text-primary leading-relaxed">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default FreshnessIndicator;
