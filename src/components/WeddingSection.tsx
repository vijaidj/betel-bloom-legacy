import { MessageCircle, ArrowRight, Heart, Flower2, Home, Sparkles, HandHeart, Gift } from "lucide-react";
import weddingImg from "@/assets/wedding-thamboolam.webp";

const WEDDING_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20book%20betel%20leaves%20for%20my%20wedding%20or%20function";
const FUNCTION_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20book%20betel%20leaves%20for%20my%20function";

// Formerly the separate Occasions section
const occasions = [
  { icon: Heart,     label: "Wedding",           tagline: "Thamboolam & bulk orders" },
  { icon: Flower2,   label: "Thamboolam",        tagline: "Traditional gift sets" },
  { icon: Home,      label: "Housewarming",      tagline: "Gruhapravesam puja" },
  { icon: Sparkles,  label: "Puberty ceremony",  tagline: "Manjal neerattu function" },
  { icon: HandHeart, label: "Temple pooja",      tagline: "Daily & festival puja" },
  { icon: Gift,      label: "Corporate gifting", tagline: "Premium gift hampers" },
];

const WeddingSection = () => (
  <section id="wedding" className="section bg-parchment">
    {/* Older links pointed here as #occasions */}
    <span id="occasions" className="block" aria-hidden="true" />
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] shadow-xl shadow-primary/10">
            <img
              src={weddingImg}
              alt="Freshly picked Sholavandan betel leaves ready for a wedding order"
              width={892}
              height={904}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow mb-3">Weddings &amp; bulk orders</p>
          <h2 className="font-heading text-3xl md:text-[42px] leading-[1.12] text-primary mb-5">
            Perfect for Tamil Weddings &amp; Thamboolam
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3 max-w-xl">
            Planning a wedding or religious ceremony? We supply premium GI-certified betel leaves in large quantities with reliable delivery across India.
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-xl">
            Custom packaging available · Dedicated wedding coordinator · Order 2 days before your function for the freshest leaves.
          </p>

          <p className="eyebrow mb-4">For every occasion</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {occasions.map((o) => (
              <li key={o.label} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-background border border-accent/30 shrink-0">
                  <o.icon className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-primary leading-snug">{o.label}</span>
                  <span className="block text-sm text-muted-foreground">{o.tagline}</span>
                </span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground mb-4">
            Looking for custom quantities, white-label packaging, or bulk export orders? We've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WEDDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Book Your Wedding Order
            </a>
            <a
              href={FUNCTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Book for Your Function
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
          >
            Request a quote with your details <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WeddingSection;
