import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import freshLeavesImg from "@/assets/fresh-betel-leaves.jpg";
import powderTeaImg from "@/assets/betel-powder-tea.jpg";
import teaBagsImg from "@/assets/betel-tea-bags.jpg";
import infusedWaterImg from "@/assets/betel-infused-water.jpg";
import oilImg from "@/assets/betel-oil.jpg";
import extractImg from "@/assets/betel-extract.jpg";
import facePackImg from "@/assets/betel-face-pack.jpg";
import mouthFreshenerImg from "@/assets/betel-mouth-freshener.jpg";
import balmImg from "@/assets/betel-balm.jpg";

const products = [
  {
    title: "Fresh Betel Leaves",
    tagline: "Farm to Door",
    desc: "Hand-picked at dawn from our heritage farms in Sholavandan. Premium quality vetrilai — ideal for weddings, puja ceremonies, and daily rituals. Available in bulk with same-day harvest freshness guaranteed.",
    image: freshLeavesImg,
    featured: true,
  },
  {
    title: "Betel Leaf Powder",
    tagline: "100% Natural",
    desc: "Sun-dried and stone-ground betel leaf powder retaining all traditional health benefits. Perfect for herbal tea, smoothies, and Ayurvedic preparations.",
    image: powderTeaImg,
  },
  {
    title: "Betel Leaf Tea Bags",
    tagline: "Ready to Brew",
    desc: "Convenient herbal tea bags crafted from our premium betel leaf powder. A refreshing, caffeine-free daily ritual — simply steep for 3 minutes and enjoy the natural goodness.",
    image: teaBagsImg,
  },
  {
    title: "Betel Leaf Infused Water",
    tagline: "Daily Detox",
    desc: "Refreshing detox water infused with fresh betel leaves. Rich in antioxidants and natural minerals — your perfect companion for daily hydration and wellness.",
    image: infusedWaterImg,
  },
  {
    title: "Betel Leaf Essential Oil",
    tagline: "Cold Pressed",
    desc: "Pure essential oil extracted from premium betel leaves using traditional cold-press methods. Used in aromatherapy, massage, and natural medicine for its antiseptic and healing properties.",
    image: oilImg,
  },
  {
    title: "Betel Leaf Extract",
    tagline: "Concentrated Wellness",
    desc: "Potent herbal tincture from hand-selected betel leaves for dietary supplementation. Supports digestion, boosts immunity, and promotes overall vitality.",
    image: extractImg,
  },
  {
    title: "Betel Leaf Face Pack",
    tagline: "Natural Skincare",
    desc: "Artisanal skincare paste made from betel leaf for radiant, healthy skin. Anti-bacterial and anti-inflammatory — a time-tested remedy for acne and blemish control.",
    image: facePackImg,
  },
  {
    title: "Betel Leaf Mouth Freshener",
    tagline: "Traditional Paan",
    desc: "Authentic paan-inspired mouth freshener with dried betel leaf, cardamom, and natural spices. A delightful after-meal ritual rooted in Indian tradition with digestive benefits.",
    image: mouthFreshenerImg,
  },
  {
    title: "Betel Leaf Healing Balm",
    tagline: "Ancient Remedy",
    desc: "Handcrafted herbal balm infused with betel leaf extract for pain relief, wound healing, and skin nourishment. A natural remedy passed down through generations.",
    image: balmImg,
  },
];

const ProductsSection = () => (
  <section id="products" className="py-24 bg-primary/5">
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-4">
          <Leaf className="h-4 w-4" />
          Direct from Our Farms
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Bulk Orders for Functions & Events</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          Every product is crafted from betel leaves grown in our own heritage farms in Sholavandan, Tamil Nadu — 
          no middlemen, no compromise. From farm to you, with love and tradition.
        </p>
      </div>

      {/* Farmer Direct Banner */}
      <div className="max-w-4xl mx-auto mb-14 bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <Leaf className="h-8 w-8 text-accent" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            We Grow. We Harvest. We Deliver.
          </h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            As native farmers of Sholavandan, we cultivate every betel leaf ourselves using centuries-old methods. 
            When you buy from us, you get the freshest produce — harvested that morning and shipped the same day. 
            No warehouses, no chemicals, just pure heritage quality.
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.title}
            className={`group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 ${
              p.featured ? "sm:col-span-2 lg:col-span-1 ring-2 ring-accent/30" : ""
            }`}
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={p.image}
                alt={`${p.title} - Sholavandan GI certified betel leaf product`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Tagline badge */}
              <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                {p.tagline}
              </span>
              {p.featured && (
                <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Bestseller
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{p.desc}</p>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground gap-2 group/btn"
                asChild
              >
                <a href="#contact">
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-14">
        <p className="text-muted-foreground mb-4 text-sm">
          Looking for custom quantities or white-label packaging? We've got you covered.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 gap-2" asChild>
          <a href="#contact">
            Get Custom Quote <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default ProductsSection;
