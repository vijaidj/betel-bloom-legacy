import SectionHeader from "@/components/SectionHeader";
import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { products, whatsappLink } from "@/data/products";

// Leaf packs (formerly the separate Packages section). Quantities, wording and
// WhatsApp messages are unchanged; prices are shared on WhatsApp.
const packs = [
  {
    title: "Small Pack",
    subtitle: "Ideal for small poojas & personal use",
    quantity: "100 Fresh Betel Leaves",
    popular: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20the%20Small%20Pack%20(100%20leaves)%20of%20Sholavandan%20Betel%20Leaf",
    cta: "Order Now",
  },
  {
    title: "Function Pack",
    subtitle: "Perfect for housewarming, puberty & small functions",
    quantity: "500 Fresh Betel Leaves",
    popular: true,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20the%20Function%20Pack%20(500%20leaves)%20of%20Sholavandan%20Betel%20Leaf",
    cta: "Order Now",
  },
  {
    title: "Wedding Bulk Order",
    subtitle: "Best for weddings, thamboolam & large events",
    quantity: "1000+ Fresh Betel Leaves",
    popular: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20need%20a%20bulk%20quote%20for%20Wedding%20order%20of%20Sholavandan%20Betel%20Leaf",
    cta: "Get Quote",
  },
];

const ProductsSection = () => {
  const [featured, ...rest] = products;

  return (
    <section id="products" className="section bg-background">
      {/* Older links pointed here as #all-products */}
      <span id="all-products" className="block" aria-hidden="true" />
      <div className="container">
        <SectionHeader
          eyebrow="Shop"
          title="Our products"
          description="Fresh leaves from our garden, and everyday products made from them. Message us on WhatsApp for pack prices and delivery."
          align="center"
        />

        {/* Featured: fresh betel leaf with its pack sizes */}
        <article className="grid grid-cols-1 lg:grid-cols-2 bg-card border border-border rounded-2xl overflow-hidden shadow-sm mb-10 md:mb-12">
          <Link to={`/products/${featured.slug}/`} className="relative block aspect-[4/3] lg:aspect-auto lg:min-h-full overflow-hidden group">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              width={800}
              height={800}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <span className="absolute top-4 left-4 bg-forest-deep/85 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              {featured.tagline}
            </span>
          </Link>

          <div className="p-6 md:p-10">
            <h3 className="font-heading text-3xl md:text-4xl text-primary mb-3">
              <Link to={`/products/${featured.slug}/`} className="hover:text-gold-ink transition-colors">{featured.name}</Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">{featured.cardDescription}</p>

            <p className="eyebrow mb-3">Choose a pack</p>
            <ul className="divide-y divide-border border-y border-border mb-5">
              {packs.map((pkg) => (
                <li key={pkg.title} className="flex items-center justify-between gap-4 py-4">
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-2 font-semibold text-primary">
                      {pkg.title}
                      {pkg.popular && (
                        <span className="text-[11px] font-semibold uppercase tracking-wide bg-accent/20 text-gold-ink px-2 py-0.5 rounded-full">
                          Most popular
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gold-ink font-medium mt-0.5">{pkg.quantity}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{pkg.subtitle}</p>
                  </div>
                  <a
                    href={pkg.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`shrink-0 inline-flex items-center gap-1.5 h-11 px-4 rounded-md text-sm font-semibold transition-colors ${
                      pkg.popular
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> {pkg.cta}
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground flex items-start gap-2 mb-5">
              <Clock className="h-4 w-4 text-gold-ink shrink-0 mt-0.5" aria-hidden="true" />
              Order 48 hours before your function for guaranteed freshness &amp; timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3">
              <Link
                to={`/products/${featured.slug}/`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
              >
                Varieties, prices per leaf and details <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink(`Hi, I would like to order ${featured.name} from VetriLeaf.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </article>

        {/* The rest of the range: a swipe row on phones, a grid from tablet up */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:overflow-visible">
          {rest.map((p) => (
            <article
              key={p.slug}
              className="snap-start shrink-0 w-[70%] sm:w-auto flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/products/${p.slug}/`} className="relative block aspect-square overflow-hidden group bg-parchment">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-forest-deep/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {p.tagline}
                </span>
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-heading text-lg text-primary leading-snug mb-1.5">
                  <Link to={`/products/${p.slug}/`} className="hover:text-gold-ink transition-colors">{p.name}</Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{p.cardDescription}</p>
                <a
                  href={whatsappLink(`Hi, I would like to order ${p.name} from VetriLeaf.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 h-11 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products/"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-md border border-primary/25 text-primary font-semibold hover:bg-primary/5 transition-colors"
          >
            View all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
