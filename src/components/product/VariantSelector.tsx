import { useRef } from "react";
import { Check } from "lucide-react";
import type { Variant } from "@/data/types";

interface Props {
  label: string;
  variants: Variant[];
  selectedId: string;
  onSelect: (id: string) => void;
  /** Preload the variant image on hover so switching is instant */
  onPreload?: (v: Variant) => void;
}

/**
 * Premium selection cards, not a dropdown.
 * Implemented as a real radiogroup: arrow keys move selection, Home/End jump
 * to the ends, and only the selected card is in the tab order.
 */
const VariantSelector = ({ label, variants, selectedId, onSelect, onPreload }: Props) => {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const move = (from: number, delta: number) => {
    const next = (from + delta + variants.length) % variants.length;
    onSelect(variants[next].id);
    refs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        move(i, 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        move(i, -1);
        break;
      case "Home":
        e.preventDefault();
        move(0, 0);
        break;
      case "End":
        e.preventDefault();
        move(variants.length - 1, 0);
        break;
    }
  };

  return (
    <div className="mb-8">
      <p
        id={`variant-label-${label.replace(/\s+/g, "-").toLowerCase()}`}
        className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 font-semibold mb-3"
      >
        {label}
      </p>

      <div
        role="radiogroup"
        aria-labelledby={`variant-label-${label.replace(/\s+/g, "-").toLowerCase()}`}
        className="grid sm:grid-cols-2 gap-3"
      >
        {variants.map((v, i) => {
          const selected = v.id === selectedId;
          return (
            <button
              key={v.id}
              ref={(el) => (refs.current[i] = el)}
              type="button"
              role="radio"
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onSelect(v.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              onMouseEnter={() => onPreload?.(v)}
              onFocus={() => onPreload?.(v)}
              className={`relative text-left rounded-xl border-2 px-5 py-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                selected
                  ? "border-accent bg-accent/[0.06]"
                  : "border-border hover:border-accent/45 bg-card"
              }`}
            >
              {v.badge && (
                <span className="absolute -top-2.5 right-4 bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {v.badge}
                </span>
              )}

              <span className="flex items-start gap-3">
                {/* Radio mark */}
                <span
                  aria-hidden="true"
                  className={`mt-0.5 w-[18px] h-[18px] rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
                    selected ? "border-accent bg-accent" : "border-muted-foreground/35"
                  }`}
                >
                  {selected && <Check className="h-3 w-3 text-accent-foreground" strokeWidth={3} />}
                </span>

                <span className="min-w-0">
                  <span className="block font-heading text-lg leading-tight text-primary">
                    {v.label}
                  </span>
                  <span className="block text-xs text-accent font-medium mt-0.5">{v.sublabel}</span>
                  <span className="block text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {v.note}
                  </span>
                  {v.price !== undefined && (
                    <span className="flex items-baseline flex-wrap gap-x-2 mt-2.5">
                      <span className="font-heading text-xl text-primary">₹{v.price}</span>
                      {v.mrp !== undefined && v.mrp > v.price && (
                        <>
                          <span className="text-sm text-muted-foreground/70 line-through">
                            ₹{v.mrp}
                          </span>
                          <span className="text-[11px] font-semibold text-accent">
                            {Math.round((1 - v.price / v.mrp) * 100)}% off
                          </span>
                        </>
                      )}
                      {v.priceUnit && (
                        <span className="w-full text-xs text-muted-foreground mt-0.5">
                          {v.priceUnit}
                        </span>
                      )}
                    </span>
                  )}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VariantSelector;
