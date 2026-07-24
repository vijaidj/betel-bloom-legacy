/**
 * Product data types.
 *
 * Design rule: product-level fields are DEFAULTS. A variant overrides only
 * what genuinely differs. Products without variants keep working unchanged —
 * `variants` is optional throughout.
 */

export type Availability = "InStock" | "PreOrder" | "OutOfStock";

export interface Benefit {
  title: string;
  detail: string;
}

export interface Faq {
  q: string;
  a: string;
}

/** One step in the farm-to-customer journey. */
export interface JourneyStep {
  icon: "sprout" | "scissors" | "layers" | "package" | "truck" | "home";
  title: string;
  detail: string;
}

/**
 * Freshness status. Discriminated on `kind` because fresh produce and
 * packaged goods answer completely different questions.
 */
export type Freshness =
  | {
      kind: "fresh";
      /** e.g. "Harvested at dawn, dispatched same day" */
      harvest: string;
      dispatch: string;
      guarantee: string;
      /** Months when quality peaks. Empty means year-round. */
      peakMonths?: string;
    }
  | {
      kind: "packaged";
      packedNote: string;
      bestBefore: string;
      naturalNote: string;
      preservativeNote: string;
    };

/** Extended specification fields (brief §9). */
export interface Specs {
  origin: string;
  harvestMethod: string;
  processingMethod: string;
  packageMaterial: string;
  suitableFor: string;
  countryOfOrigin: string;
}

/**
 * A purchasable variant — a variety, a pack size, or both.
 * Any Product field listed here overrides the product-level default.
 */
export interface Variant {
  id: string;
  label: string;
  /** Short qualifier under the label, e.g. "Premium grade" */
  sublabel: string;
  /** One-line reason to choose this one, e.g. "Best for weddings" */
  note: string;
  sku: string;
  availability: Availability;

  /** Marks the variant preselected on load. Exactly one per product. */
  recommended?: boolean;
  /** Badge shown on the selector card, e.g. "Best value" */
  badge?: string;

  /**
   * Whether this variant is covered by the Sholavandan GI registration.
   * Anything sourced outside the GI production area must set this false —
   * it suppresses GI badging, provenance copy and the origin schema fields.
   */
  giCovered: boolean;

  /** Optional per-variant overrides */
  image?: string;
  /** Larger file for the lightbox. Falls back to `image`. */
  zoomImage?: string;
  imageAlt?: string;
  summary?: string;
  netWeight?: string;
  shelfLife?: string;
  minimumOrder?: string;
  benefits?: Benefit[];
  freshness?: Freshness;
  /** Pending the pricing decision. Undefined renders as "Quote on request". */
  price?: number;

  /** Rows for the variant comparison table (brief §10) */
  compare: Record<string, string>;
  /** Why choose this one — 3 short reasons */
  whyThis: string[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  cardDescription: string;
  description: string[];
  image: string;
  imageAlt: string;
  benefits: Benefit[];
  howToUse: string[];
  storage: string;
  shelfLife: string;
  ingredients: string;
  netWeight: string;
  minimumOrder: string;
  leadTime: string;
  specs: Specs;
  freshness: Freshness;
  journey?: JourneyStep[];
  /** Trust badges beside the title. Keep to 3. */
  trustBadges: string[];
  /** Ordered comparison row labels — controls table row order */
  compareRows?: string[];
  variants?: Variant[];
  /** Slugs commonly ordered alongside this product */
  boughtWith?: string[];
  seo: { title: string; description: string; keywords: string };
  faqs: Faq[];
  related: string[];
}
