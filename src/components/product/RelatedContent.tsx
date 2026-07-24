import { Link } from "react-router-dom";
import { Plus, MessageCircle } from "lucide-react";
import { products, whatsappLink } from "@/data/products";
import type { Product } from "@/data/types";

/* ── Frequently bought together ────────────────────────────────── */

export const FrequentlyBoughtTogether = ({ product }: { product: Product }) => {
  const others = (product.boughtWith ?? [])
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as Product[];

  if (others.length === 0) return null;

  const all = [product, ...others];
  const message = `Hi VetriLeaf, I would like to order these together:\n${all
    .map((p) => `• ${p.name}`)
    .join("\n")}`;

  return (
    <section className="py-20 md:py-24 bg-secondary/25 border-y border-border/60">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
            Ordered together
          </p>
          <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary">
            Frequently bought together
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
          {all.map((p, i) => (
            <div key={p.slug} className="flex items-center gap-4 flex-1">
              <article className="flex-1 flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={72}
                  height={72}
                  loading="lazy"
                  className="w-[72px] h-[72px] rounded-lg object-cover shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-heading text-base text-primary leading-snug">
                    {p.slug === product.slug ? (
                      p.name
                    ) : (
                      <Link to={`/products/${p.slug}`} className="hover:text-accent transition-colors">
                        {p.name}
                      </Link>
                    )}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {p.slug === product.slug ? "This product" : p.tagline}
                  </p>
                </div>
              </article>

              {i < all.length - 1 && (
                <Plus className="h-5 w-5 text-accent shrink-0 hidden sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-accent text-accent-foreground font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Enquire about all {all.length}
        </a>
      </div>
    </section>
  );
};

/* ── Internal linking ──────────────────────────────────────────── */

const SEARCH_LINKS: { label: string; to: string }[] = [
  { label: "Fresh betel leaf", to: "/products/fresh-betel-leaf" },
  { label: "Premium betel leaf", to: "/products/fresh-betel-leaf" },
  { label: "Wedding betel leaf", to: "/products/fresh-betel-leaf" },
  { label: "Temple betel leaf", to: "/products/fresh-betel-leaf" },
  { label: "Betel leaf powder", to: "/products/betel-leaf-powder" },
  { label: "Betel tea", to: "/products/betel-leaf-tea" },
  { label: "Betel leaf oil", to: "/products/betel-leaf-oil" },
  { label: "Betel juice", to: "/products/betel-juice-mix" },
  { label: "Betel water", to: "/products/betel-leaf-water" },
  { label: "All products", to: "/products" },
];

export const PeopleAlsoSearched = ({ currentSlug }: { currentSlug: string }) => (
  <section className="py-14 border-t border-border/60">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground/80 font-semibold mb-5">
        People also searched for
      </h2>
      <ul className="flex flex-wrap gap-2.5">
        {SEARCH_LINKS.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              aria-current={l.to.endsWith(currentSlug) ? "page" : undefined}
              className="inline-block text-sm px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-accent/50 hover:text-primary transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
