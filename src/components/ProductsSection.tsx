import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

// Correctly matched images for each product
import freshLeavesImg from "@/assets/fresh-betel-leaves.jpg";       // Fresh Betel Leaf
import powderImg from "@/assets/betel-powder-tea.jpg";               // Betel Leaf Powder
import teaImg from "@/assets/betel-tea-bags.jpg";                    // Betel Leaf Tea
import oilImg from "@/assets/betel-oil.jpg";                         // Betel Leaf Oil
import juiceMixImg from "@/assets/real-betel-nuts-lime.jpg";         // Betel Juice Mix — betel nuts & lime mix, closest match
import waterImg from "@/assets/betel-infused-water.jpg";             // Betel Leaf Water

const products = [
  {
    title: "Fresh Betel Leaf",
    tagline: "Farm to Door",
    desc: "Hand-picked at dawn from our heritage farms along the Vaigai river basin. GI-certified Sholavandan vetrilai — the gold standard for weddings, thamboolam, puja & daily rituals. Same-day harvest freshness, delivered in bulk.",
    image: freshLeavesImg,
    featured: true,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Fresh%20Betel%20Leaf",
  },
  {
    title: "Betel Leaf Powder",
    tagline: "100% Natural",
    desc: "Stone-ground from sun-dried Sholavandan betel leaves, retaining all traditional health benefits. Rich in antioxidants — ideal for herbal preparations, Ayurvedic formulations, natural supplements and daily wellness routines.",
    image: powderImg,
    featured: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Betel%20Leaf%20Powder",
  },
  {
    title: "Betel Leaf Tea",
    tagline: "Ready to Brew",
    desc: "Convenient herbal tea made from our premium betel leaf. A refreshing, caffeine-free daily wellness ritual — simply steep for 3 minutes. Known to aid digestion, boost immunity & promote oral health naturally.",
    image: teaImg,
    featured: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Betel%20Leaf%20Tea",
  },
  {
    title: "Betel Leaf Oil",
    tagline: "Cold Pressed",
    desc: "Pure essential oil extracted from premium betel leaves using traditional cold-press methods. Prized in aromatherapy and natural medicine for its powerful antiseptic, anti-inflammatory and healing properties.",
    image: oilImg,
    featured: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Betel%20Leaf%20Oil",
  },
  {
    title: "Betel Juice Mix",
    tagline: "Concentrated Wellness",
    desc: "A potent herbal juice concentrate made from fresh Sholavandan betel leaves. Easy to mix with water or coconut water — packed with natural antioxidants, supports digestion, immunity and daily vitality.",
    image: juiceMixImg,
    featured: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Betel%20Juice%20Mix",
  },
  {
    title: "Betel Leaf Water",
    tagline: "Daily Detox",
    desc: "Refreshing detox water infused with fresh Sholavandan betel leaves. Packed with natural antioxidants, minerals & vitamins — your perfect daily companion for hydration, digestion and natural wellness.",
    image: waterImg,
    featured: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Betel%20Leaf%20Water",
  },
];

const ProductsSection = () => (
  <section id="all-products" className="py-24 bg-primary/5">
    <div className="container mx-auto px-4">

      {/* Section Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-medium tracking-wide uppercase mb-4">
          <Leaf className="h-4 w-4" />
          Direct from Our Farms
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Our Products</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          From fresh betel leaves to wellness products — every item is crafted from leaves grown in our own
          heritage farms in Sholavandan, Tamil Nadu. No middlemen. No compromise.
        </p>
      </div>

      {/* Farmer Direct Banner */}
      <div className="max-w-4xl mx-auto mb-14 bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <Leaf className="h-8 w-8 text-accent" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1 font-heading">We Grow. We Harvest. We Deliver.</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            As 3rd-generation native farmers of Sholavandan, we cultivate every betel leaf ourselves using centuries-old
            methods along the fertile Vaigai river basin. When you buy from us, you get the freshest produce —
            harvested that morning and shipped the same day. No warehouses, no chemicals, no artificial preservatives.
          </p>
        </div>
      </div>

      {/* Product Grid — 6 products in 3-col grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.title}
            className={`group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 ${
              p.featured ? "ring-2 ring-accent/30" : ""
            }`}
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={p.image}
                alt={`${p.title} — Sholavandan GI certified betel leaf product`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group/btn" asChild>
                <a href={p.whatsapp} target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
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
          Looking for custom quantities, white-label packaging, or bulk export orders? We've got you covered.
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
