import { useState } from "react";
import { MessageCircle, ArrowRight, X } from "lucide-react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import { whatsappLink } from "@/data/products";
import type { Product, Variant } from "@/data/types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
  variant?: Variant;
}

const PURPOSES = ["Wedding", "Temple", "Home use", "Retail resale", "Wholesale", "Export"] as const;

/** Quantity presets differ by product type — leaves are counted, jars are not. */
const quantitiesFor = (slug: string) =>
  slug === "fresh-betel-leaf"
    ? ["100 leaves", "500 leaves", "1,000 leaves", "5,000+ leaves"]
    : ["1–2", "3–10", "11–50", "50+"];

/**
 * Collects the four things we would otherwise ask for over three messages,
 * then opens WhatsApp with a structured enquiry already written.
 *
 * The generated message carries the product, variant and source path, which
 * is what makes WhatsApp enquiries attributable back to a page.
 */
const SmartWhatsAppForm = ({ open, onOpenChange, product, variant }: Props) => {
  const [qty, setQty] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");

  const quantities = quantitiesFor(product.slug);
  const label = variant ? `${product.name} — ${variant.label}` : product.name;

  const message = [
    "Hi VetriLeaf,",
    "",
    `I would like to order: ${label}`,
    qty && `Quantity: ${qty}`,
    purpose && `Purpose: ${purpose}`,
    date && `Needed by: ${date}`,
    place && `Delivery location: ${place}`,
    "",
    `(from vetrileaf.com/products/${product.slug})`,
  ]
    .filter(Boolean)
    .join("\n");

  const send = () => {
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  const Chip = ({
    value, active, onClick,
  }: { value: string; active: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3.5 py-2 rounded-lg border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
        active
          ? "border-accent bg-accent/10 text-primary font-medium"
          : "border-border text-muted-foreground hover:border-accent/45"
      }`}
    >
      {value}
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg p-0 gap-0 overflow-hidden rounded-2xl">
        <DialogHeader className="px-6 pt-6 pb-4 text-left">
          <DialogTitle className="font-heading text-2xl text-primary leading-tight">
            Order {label}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1.5">
            A few details so we can quote accurately in one reply. All optional —
            skip anything you're unsure of.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-5 space-y-6 max-h-[60vh] overflow-y-auto">
          <fieldset>
            <legend className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2.5">
              Quantity
            </legend>
            <div className="flex flex-wrap gap-2">
              {quantities.map((q) => (
                <Chip key={q} value={q} active={qty === q} onClick={() => setQty(qty === q ? "" : q)} />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2.5">
              What is it for
            </legend>
            <div className="flex flex-wrap gap-2">
              {PURPOSES.map((p) => (
                <Chip
                  key={p}
                  value={p}
                  active={purpose === p}
                  onClick={() => setPurpose(purpose === p ? "" : p)}
                />
              ))}
            </div>
          </fieldset>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="swf-date"
                className="block text-[11px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2"
              >
                Needed by
              </label>
              <input
                id="swf-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
              />
            </div>
            <div>
              <label
                htmlFor="swf-place"
                className="block text-[11px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2"
              >
                Delivery city
              </label>
              <input
                id="swf-place"
                type="text"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="Madurai"
                className="w-full h-11 px-3 rounded-lg border border-border bg-background text-sm text-primary placeholder:text-muted-foreground/50 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"
              />
            </div>
          </div>

          {/* Live preview — shows exactly what will be sent */}
          <div className="rounded-xl bg-secondary/40 border border-border p-4">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground/80 font-semibold mb-2">
              Your message
            </p>
            <pre className="text-xs text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
              {message}
            </pre>
          </div>
        </div>

        <div className="px-6 py-5 border-t border-border bg-card">
          <button
            type="button"
            onClick={send}
            className="group flex items-center justify-center gap-3 w-full h-[52px] rounded-xl bg-accent text-accent-foreground font-semibold tracking-wide hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Continue on WhatsApp
            <ArrowRight
              className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
              aria-hidden="true"
            />
          </button>
          <p className="text-center text-xs text-muted-foreground mt-2.5">
            We usually reply within 30 minutes · 6 AM – 8 PM
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SmartWhatsAppForm;
