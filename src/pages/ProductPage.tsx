import { useParams, Link } from "react-router-dom";
import {
  MessageCircle, ChevronRight, Leaf, Package, Clock, ShieldCheck,
  Info, Sparkles, ArrowRight,
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

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) return <NotFound />;

  const path = `/products/${product.slug}`;
  const order = whatsappLink(`Hi, I would like to order ${product.name} from VetriLeaf.`);
  const related = product.related
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} — Sholavandan GI Certified`,
    description: product.summary,
    image: `${SITE_URL}${product.image}`,
    sku: `VL-${product.slug.toUpperCase()}`,
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
    { icon: Package, label: "Net quantity", value: product.netWeight },
    { icon: Clock, label: "Shelf life", value: product.shelfLife },
    { icon: Leaf, label: "Ingredients", value: product.ingredients },
    { icon: ShieldCheck, label: "FSSAI licence", value: FSSAI_LICENCE },
    { icon: Info, label: "Minimum order", value: product.minimumOrder },
    { icon: Sparkles, label: "Dispatch", value: product.leadTime },
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
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-card">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  width={800}
                  height={800}
                  loading="eager"
                  {...{ fetchpriority: "high" }}
                  className="w-full h-auto object-cover"
                />
              </div>

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
              <p className="text-muted-foreground leading-relaxed mb-6">{product.summary}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["GI Certified", "Farm Direct", "No Preservatives"].map((b) => (
                  <span key={b} className="text-xs font-medium bg-primary/5 border border-border rounded-full px-3 py-1.5 text-primary">
                    {b}
                  </span>
                ))}
              </div>

              <div className="mb-9">
                {/* Primary action */}
                <a
                  href={order}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full h-[58px] rounded-xl bg-accent text-accent-foreground font-semibold tracking-wide shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.7)] hover:shadow-[0_12px_32px_-8px_hsl(var(--accent)/0.85)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Order on WhatsApp
                  <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" aria-hidden="true" />
                </a>
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
            </div>
          </div>
        </section>

        {/* Description — editorial layout */}
        <section className="py-20 md:py-24 border-y border-border/60 bg-gradient-to-b from-secondary/20 to-transparent mb-20">
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
              {product.benefits.map((b) => (
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
        <section className="py-20 md:py-24 bg-secondary/25 border-y border-border/60 mb-20">
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

                  <dl className="border-t border-border pt-5 space-y-3">
                    <div className="flex justify-between gap-4">
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground/80">Shelf life</dt>
                      <dd className="text-sm font-medium text-primary text-right">{product.shelfLife}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-xs uppercase tracking-wider text-muted-foreground/80">Ingredients</dt>
                      <dd className="text-sm font-medium text-primary text-right max-w-[60%]">{product.ingredients}</dd>
                    </div>
                  </dl>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Origin */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-7 w-7 text-accent" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">Grown in Sholavandan, GI certified</h2>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                  Sholavandan betel leaf holds a Geographical Indication tag from the Government of India.
                  The name is legally protected and can only be used for leaves grown in this specific
                  region of Madurai district. Every VetriLeaf product begins with leaves from our own
                  farms along the Vaigai river basin — no intermediaries, no outside sourcing.
                </p>
                <Link to="/#about" className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold hover:gap-2.5 transition-all">
                  Read our story <ArrowRight className="h-4 w-4" />
                </Link>
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
          <section className="bg-secondary/30 py-16">
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
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
};

export default ProductPage;
