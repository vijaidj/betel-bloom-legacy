import { useState, useCallback } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import {
  MessageCircle, ChevronRight, Leaf, Package, Clock, ShieldCheck,
  Info, Sparkles, ArrowRight, Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getProduct, products, whatsappLink, SITE_URL, FSSAI_LICENCE } from "@/data/products";
import giBadge from "@/assets/gi-india-badge.webp";
import ProductGallery, { type GalleryImage } from "@/components/product/ProductGallery";
import VariantSelector from "@/components/product/VariantSelector";
import FreshnessIndicator from "@/components/product/FreshnessIndicator";
import SmartWhatsAppForm from "@/components/product/SmartWhatsAppForm";
import { ProductJourney, WhyThisVariant, VariantComparison } from "@/components/product/ProductJourney";
import { FrequentlyBoughtTogether, PeopleAlsoSearched } from "@/components/product/RelatedContent";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;
  const [searchParams, setSearchParams] = useSearchParams();
  const [formOpen, setFormOpen] = useState(false);

  const variants = product?.variants ?? [];
  const defaultId =
    variants.find((v) => v.recommended)?.id ?? variants[0]?.id ?? "";
  const requested = searchParams.get("variant");
  const activeId =
    variants.some((v) => v.id === requested) ? (requested as string) : defaultId;
  const variant = variants.find((v) => v.id === activeId);

  const selectVariant = useCallback(
    (id: string) => {
      // replace: variant choice should not add history entries
      setSearchParams(id === defaultId ? {} : { variant: id }, { replace: true });
    },
    [defaultId, setSearchParams]
  );

  const preload = useCallback((v: { image?: string }) => {
    if (!v.image) return;
    const img = new Image();
    img.src = v.image;
  }, []);

  if (!product) return <NotFound />;

  // Variant overrides product-level defaults
  const view = {
    image: variant?.image ?? product.image,
    summary: variant?.summary ?? product.summary,
    netWeight: variant?.netWeight ?? product.netWeight,
    shelfLife: variant?.shelfLife ?? product.shelfLife,
    minimumOrder: variant?.minimumOrder ?? product.minimumOrder,
    benefits: variant?.benefits ?? product.benefits,
    freshness: variant?.freshness ?? product.freshness,
    sku: variant?.sku ?? `VL-${product.slug.toUpperCase()}`,
    availability: variant?.availability ?? "InStock",
    giCovered: variant ? variant.giCovered : true,
    price: variant?.price,
    mrp: variant?.mrp,
    priceUnit: variant?.priceUnit,
    displayName: variant ? `${product.name} — ${variant.label}` : product.name,
  };

  // One gallery entry per variant that has a distinct image; otherwise a single
  // entry for the product. Thumbnails only render when there is a real choice.
  const galleryImages: GalleryImage[] = variants.some((v) => v.image)
    ? variants.map((v) => ({
        src: v.image ?? product.image,
        zoomSrc: v.zoomImage,
        alt: v.imageAlt ?? product.imageAlt,
        caption: v.label,
        variantId: v.id,
      }))
    : [{ src: product.image, alt: product.imageAlt }];

  const galleryIndex = Math.max(
    0,
    galleryImages.findIndex((g) => g.variantId === activeId)
  );

  // Selecting a thumbnail selects that variant, so the two controls stay in sync
  const onGallerySelect = (i: number) => {
    const id = galleryImages[i]?.variantId;
    if (id) selectVariant(i === galleryIndex ? id : id);
  };

  const path = `/products/${product.slug}`;
  const order = whatsappLink(`Hi, I would like to order ${view.displayName} from VetriLeaf.`);
  const related = product.related
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  // ProductGroup when variants exist so all variants share one canonical URL.
  // Price is omitted until the pricing decision is made; adding `price` to a
  // variant automatically populates its offer here.
  const productSchema = variants.length
    ? {
        "@context": "https://schema.org",
        "@type": "ProductGroup",
        name: `${product.name} — Sholavandan GI Certified`,
        description: product.summary,
        image: `${SITE_URL}${product.image}`,
        brand: { "@type": "Brand", name: "VetriLeaf" },
        productGroupID: `VL-${product.slug.toUpperCase()}`,
        variesBy: ["https://schema.org/size"],
        url: `${SITE_URL}${path}`,
        hasVariant: variants.map((v) => ({
          "@type": "Product",
          name: `${product.name} — ${v.label}`,
          description: v.summary ?? product.summary,
          sku: v.sku,
          image: `${SITE_URL}${v.image ?? product.image}`,
          ...(v.netWeight ? { weight: v.netWeight } : {}),
          ...(v.giCovered
            ? { countryOfOrigin: { "@type": "Country", name: "India" } }
            : {}),
          offers: {
            "@type": "Offer",
            availability: `https://schema.org/${v.availability}`,
            priceCurrency: "INR",
            url: `${SITE_URL}${path}?variant=${v.id}`,
            seller: { "@id": `${SITE_URL}/#organization` },
            ...(v.price !== undefined
              ? {
                  price: String(v.price),
                  // Per-unit pricing needs a UnitPriceSpecification so Google
                  // reads "₹5 per leaf" rather than "₹5 for the product"
                  priceSpecification: [
                    {
                      "@type": "UnitPriceSpecification",
                      price: String(v.price),
                      priceCurrency: "INR",
                      ...(v.priceUnit
                        ? { unitText: v.priceUnit.replace(/^per\s+/i, "") }
                        : {}),
                    },
                    // MRP as ListPrice — the pattern Google reads for
                    // strikethrough pricing in rich results
                    ...(v.mrp !== undefined && v.mrp > v.price
                      ? [
                          {
                            "@type": "UnitPriceSpecification",
                            priceType: "https://schema.org/ListPrice",
                            price: String(v.mrp),
                            priceCurrency: "INR",
                          },
                        ]
                      : []),
                  ],
                }
              : {}),
          },
        })),
      }
    : {
        "@context": "https://schema.org",
        "@type": "Product",
        name: `${product.name} — Sholavandan GI Certified`,
        description: product.summary,
        image: `${SITE_URL}${product.image}`,
        sku: view.sku,
        brand: { "@type": "Brand", name: "VetriLeaf" },
        manufacturer: { "@id": `${SITE_URL}/#organization` },
        countryOfOrigin: { "@type": "Country", name: "India" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
          url: `${SITE_URL}${path}`,
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${SITE_URL}${path}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const specs = [
    { icon: Package, label: "Net quantity", value: view.netWeight },
    { icon: Clock, label: "Shelf life", value: view.shelfLife },
    { icon: Leaf, label: "Ingredients", value: product.ingredients },
    { icon: Info, label: "Minimum order", value: view.minimumOrder },
    { icon: Sparkles, label: "Dispatch", value: product.leadTime },
    { icon: ShieldCheck, label: "FSSAI licence", value: FSSAI_LICENCE },
  ];

  // Extended specifications — brief §9
  const extendedSpecs = [
    { label: "Origin", value: product.specs.origin },
    { label: "Harvest method", value: product.specs.harvestMethod },
    { label: "Processing", value: product.specs.processingMethod },
    { label: "Packaging", value: product.specs.packageMaterial },
    { label: "Suitable for", value: product.specs.suitableFor },
    { label: "Country of origin", value: product.specs.countryOfOrigin },
    { label: "SKU", value: view.sku },
  ];

  return (
    <>
      <Seo
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        path={path}
        image={product.image}
        schema={[productSchema, breadcrumbSchema, faqSchema]}
      />
      <Navbar />

      <main className="pt-28 md:pt-32">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li className="text-primary font-medium" aria-current="page">{product.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="container mx-auto px-4 mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <ProductGallery
                images={galleryImages}
                activeIndex={galleryIndex}
                onSelect={onGallerySelect}
              />

              {/* Provenance strip */}
              <div className="mt-4 rounded-2xl border border-border bg-secondary/40 px-5 py-4 flex items-center gap-4">
                <img
                  src={giBadge}
                  alt=""
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-12 h-12 object-contain shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-semibold text-primary leading-snug">
                    Geographical Indication protected
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Grown on our own farms in Sholavandan, Madurai district.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Leaf className="h-3 w-3" /> {product.tagline}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                {product.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{view.summary}</p>

              {view.price !== undefined && (
                <div className="mb-6">
                  <p className="flex items-baseline flex-wrap gap-x-3 gap-y-1">
                    <span className="text-[42px] font-semibold text-primary tabular-nums tracking-tight leading-none">
                      <span className="text-[0.62em] font-medium align-baseline mr-0.5">₹</span>{view.price}
                    </span>
                    {view.mrp !== undefined && view.mrp > view.price && (
                      <>
                        <span className="text-lg text-muted-foreground/70 line-through tabular-nums">
                          ₹{view.mrp}
                        </span>
                        <span className="text-xs font-semibold text-accent-foreground bg-accent px-2 py-1 rounded">
                          {Math.round((1 - view.price / view.mrp) * 100)}% off
                        </span>
                      </>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {view.priceUnit} · minimum {view.minimumOrder}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-8">
                {product.trustBadges
                  .filter((b) => view.giCovered || !/GI/i.test(b))
                  .map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 text-xs font-medium bg-accent/[0.07] border border-accent/25 rounded-full px-3 py-1.5 text-primary"
                    >
                      <Check className="h-3 w-3 text-accent" aria-hidden="true" />
                      {b}
                    </span>
                  ))}
              </div>

              {/* Variant selector */}
              {variants.length > 1 && (
                <VariantSelector
                  label={product.slug === "betel-leaf-powder" ? "Choose pack size" : "Choose variety"}
                  variants={variants}
                  selectedId={activeId}
                  onSelect={selectVariant}
                  onPreload={preload}
                />
              )}

              <div className="mb-9">
                {/* Primary action */}
                <button
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="group flex items-center justify-center gap-3 w-full h-[58px] rounded-xl bg-accent text-accent-foreground font-semibold tracking-wide shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.7)] hover:shadow-[0_12px_32px_-8px_hsl(var(--accent)/0.85)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Order on WhatsApp
                  <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" aria-hidden="true" />
                </button>
                <p className="text-center text-xs text-muted-foreground mt-2.5">
                  We usually reply within 30 minutes · 6 AM – 8 PM
                </p>

                {/* Divider */}
                <div className="flex items-center gap-4 my-5" aria-hidden="true">
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70">or</span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                {/* Secondary action */}
                <a
                  href={whatsappLink(`Hi, I need a bulk quote for ${product.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full h-[54px] px-5 rounded-xl border border-primary/20 text-primary hover:border-accent hover:bg-accent/[0.04] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <span className="text-left">
                    <span className="block text-sm font-semibold leading-tight">Request a bulk quote</span>
                    <span className="block text-xs text-muted-foreground mt-0.5">Weddings, temples, wholesale &amp; export</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-accent shrink-0 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </a>
              </div>

              {/* Spec table */}
              <dl className="border border-border rounded-xl divide-y divide-border overflow-hidden">
                {specs.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3 px-4 py-3">
                    <Icon className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <dt className="text-xs text-muted-foreground w-32 shrink-0">{label}</dt>
                    <dd className="text-sm text-primary font-medium">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 space-y-5">
                <FreshnessIndicator freshness={view.freshness} />
                {variant && <WhyThisVariant variant={variant} />}
              </div>
            </div>
          </div>
        </section>

        {/* Description — editorial layout */}
        <section className="py-20 md:py-24 border-y border-border/60 bg-secondary/35 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-[190px_1fr] gap-10 md:gap-16">

              {/* Sticky label column */}
              <div className="md:sticky md:top-32 md:self-start">
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
                  The Product
                </p>
                <h2 className="font-heading text-2xl md:text-[28px] leading-[1.15] text-primary">
                  {product.name}
                </h2>
                <span className="block w-12 h-px bg-accent mt-5" aria-hidden="true" />
              </div>

              {/* Prose column */}
              <div className="max-w-[62ch]">
                {product.description.map((para, i) =>
                  i === 0 ? (
                    <p
                      key={i}
                      className="text-lg md:text-[21px] leading-[1.65] text-primary/85 font-light mb-7"
                    >
                      {para}
                    </p>
                  ) : (
                    <p key={i} className="text-[15px] leading-[1.8] text-muted-foreground mb-5 last:mb-0">
                      {para}
                    </p>
                  )
                )}

                {/* Provenance mark */}
                <div className="flex items-center gap-3 mt-10 pt-7 border-t border-border/70">
                  <Leaf className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                  <p className="text-xs text-muted-foreground italic">
                    Grown, harvested and packed by our own family in Sholavandan, Madurai district.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12 md:mb-14">
              <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
                What sets it apart
              </p>
              <h2 className="font-heading text-3xl md:text-[42px] leading-tight text-primary">
                Why it&rsquo;s different
              </h2>
              <span className="block w-14 h-px bg-accent mx-auto mt-6" aria-hidden="true" />
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12">
              {view.benefits.map((b) => (
                <div key={b.title} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-11 h-11 rounded-full border border-accent/30 bg-accent/[0.07] flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors duration-300"
                      aria-hidden="true"
                    >
                      <Leaf className="h-5 w-5 text-accent" />
                    </span>
                    <h3 className="font-heading text-xl md:text-[22px] leading-snug text-primary">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-[15px] md:text-base leading-[1.75] text-muted-foreground pl-[56px]">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to use + storage */}
        <section className="py-20 md:py-24 mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-14 md:gap-20">

              {/* Steps */}
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
                  Preparation
                </p>
                <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary mb-9">
                  How to use
                </h2>

                <ol className="space-y-7">
                  {product.howToUse.map((s, i) => (
                    <li key={i} className="flex gap-5">
                      <span
                        className="font-heading text-2xl leading-none text-accent/45 shrink-0 w-8 pt-0.5 tabular-nums"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[15px] md:text-base leading-[1.75] text-muted-foreground">{s}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Storage */}
              <div className="md:pt-[4.6rem]">
                <div className="rounded-2xl border border-border bg-card p-7 md:p-8 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-full bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0" aria-hidden="true">
                      <Package className="h-5 w-5 text-accent" />
                    </span>
                    <h2 className="font-heading text-2xl leading-none text-primary">Storage</h2>
                  </div>

                  <p className="text-[15px] leading-[1.8] text-muted-foreground mb-7">
                    {product.storage}
                  </p>

                  <dl className="border-t border-border pt-6 space-y-5">
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground/75 mb-1.5">
                        Shelf life
                      </dt>
                      <dd className="text-sm text-primary leading-relaxed">{view.shelfLife}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground/75 mb-1.5">
                        Ingredients
                      </dt>
                      <dd className="text-sm text-primary leading-relaxed">{product.ingredients}</dd>
                    </div>
                  </dl>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Extended specifications */}
        <section className="mb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
                Full detail
              </p>
              <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary">
                Specifications
              </h2>
              <span className="block w-14 h-px bg-accent mt-6" aria-hidden="true" />
            </div>

            <dl className="border-t border-border">
              {extendedSpecs.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-4 border-b border-border"
                >
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground/80 sm:w-52 shrink-0">
                    {label}
                  </dt>
                  <dd className="text-[15px] text-primary leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Journey */}
        {product.journey && <div className="mb-20"><ProductJourney steps={product.journey} /></div>}

        {/* Variant comparison */}
        {variants.length > 1 && product.compareRows && (
          <VariantComparison
            variants={variants}
            rows={product.compareRows}
            selectedId={activeId}
            onSelect={selectVariant}
          />
        )}

        {/* Origin */}
        <section className="mb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">

              {/* Decorative leaf, kept faint so it reads as texture */}
              <svg
                className="absolute -right-10 -top-12 w-64 h-64 opacity-[0.07] hidden md:block"
                viewBox="0 0 120 160" fill="none" aria-hidden="true"
              >
                <path d="M60 8 C92 30 114 72 102 104 C90 134 60 152 60 152 C60 152 30 134 18 104 C6 72 28 30 60 8Z" fill="currentColor" />
                <line x1="60" y1="8" x2="60" y2="152" stroke="hsl(var(--primary))" strokeWidth="2.5" />
              </svg>

              <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 p-9 md:p-14">

                {/* GI mark */}
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <img
                    src={giBadge}
                    alt=""
                    width={72}
                    height={72}
                    loading="lazy"
                    className="w-16 h-16 md:w-[72px] md:h-[72px] object-contain shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[10px] uppercase tracking-[0.24em] text-accent font-semibold md:mt-1">
                    Protected
                  </span>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-4">
                    Provenance
                  </p>
                  <h2 className="font-heading text-3xl md:text-[40px] leading-[1.15] mb-6">
                    Grown in Sholavandan,<br className="hidden sm:block" /> GI certified
                  </h2>

                  <p className="text-primary-foreground/75 text-[15px] leading-[1.8] max-w-[58ch] mb-8">
                    Sholavandan betel leaf holds a Geographical Indication tag from the Government of
                    India. The name is legally protected and can only be used for leaves grown in this
                    specific region of Madurai district — which is why no other farm can claim it.
                  </p>

                  {/* Three facts, ruled rather than boxed */}
                  <dl className="grid sm:grid-cols-3 gap-px bg-primary-foreground/15 rounded-xl overflow-hidden mb-8">
                    {[
                      { k: "Region", v: "Vaigai river basin" },
                      { k: "District", v: "Madurai, Tamil Nadu" },
                      { k: "Sourcing", v: "Our own farms only" },
                    ].map(({ k, v }) => (
                      <div key={k} className="bg-primary px-5 py-4">
                        <dt className="text-[10px] uppercase tracking-[0.16em] text-primary-foreground/50 mb-1.5">
                          {k}
                        </dt>
                        <dd className="text-sm font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  <Link
                    to="/#about"
                    className="group inline-flex items-center gap-2 text-accent text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
                  >
                    Read our story
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
                Common questions
              </p>
              <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary">
                Questions about {product.name}
              </h2>
              <span className="block w-14 h-px bg-accent mt-6" aria-hidden="true" />
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-border">
              {product.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                  <AccordionTrigger className="text-left py-6 gap-6 font-heading text-lg md:text-xl leading-snug text-primary hover:text-accent hover:no-underline [&[data-state=open]]:text-accent">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pr-8 text-[15px] md:text-base leading-[1.8] text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 rounded-2xl border border-accent/25 bg-accent/[0.05] px-7 py-8 text-center">
              <h3 className="font-heading text-xl md:text-2xl text-primary mb-2">
                Still deciding?
              </h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
                Send us a message and we&rsquo;ll answer honestly — including if this isn&rsquo;t the right product for you.
              </p>
              <a
                href={whatsappLink(`Hi, I have a question about ${product.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 h-12 px-7 rounded-xl bg-accent text-accent-foreground font-semibold text-sm tracking-wide hover:bg-accent/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-16 border-t border-border/60">
            <div className="container mx-auto px-4">
              <div className="text-center mb-10">
                <p className="text-[11px] uppercase tracking-[0.28em] text-accent font-semibold mb-3">
                  From the same harvest
                </p>
                <h2 className="font-heading text-3xl md:text-[38px] leading-tight text-primary">
                  You might also like
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/products/${r.slug}`}
                    className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={r.image}
                        alt={r.imageAlt}
                        width={400}
                        height={400}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-lg text-primary mb-1.5 leading-snug">{r.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{r.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        <FrequentlyBoughtTogether product={product} />
        <PeopleAlsoSearched currentSlug={product.slug} />
      </main>

      <SmartWhatsAppForm
        open={formOpen}
        onOpenChange={setFormOpen}
        product={product}
        variant={variant}
      />

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
};

export default ProductPage;
