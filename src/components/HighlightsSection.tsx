import { useState } from "react";
import { Award, Leaf, Heart, Truck, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GICertificateModal from "./GICertificateModal";
import farmFreshImg from "@/assets/highlight-farm-fresh.jpg";
import weddingImg from "@/assets/highlight-wedding.jpg";
import deliveryImg from "@/assets/highlight-delivery.jpg";

const highlights = [
  {
    id: "gi",
    icon: Award,
    label: "GI Certified",
    highlight: true,
    isGiCert: true,
    image: farmFreshImg,
    description: "",
  },
  {
    id: "farm",
    icon: Leaf,
    label: "Farm Fresh",
    image: farmFreshImg,
    stat: "100%",
    statLabel: "Organic",
    description:
      "Every leaf is hand-picked from our 3rd-generation betel farms in Sholavandan, Tamil Nadu. We harvest fresh daily and ship within hours -- no cold storage, no chemicals, no middlemen. You receive the same quality our family has been proud of for over 60 years.",
    bullets: [
      "Hand-picked at dawn for peak freshness",
      "Zero pesticides -- naturally grown",
      "Direct from farm to your doorstep",
      "Harvested and shipped the same day",
    ],
  },
  {
    id: "wedding",
    icon: Heart,
    label: "500+ Weddings Served",
    image: weddingImg,
    stat: "500+",
    statLabel: "Happy Weddings",
    description:
      "Trusted by over 500 families for their most important celebrations. Our premium betel leaves have graced weddings, pooja ceremonies, and cultural events across India. We offer bulk wedding packages with dedicated support to ensure your special day is perfect.",
    bullets: [
      "Bulk orders from 1,000 to 50,000+ leaves",
      "Dedicated wedding coordinator",
      "Custom packaging for ceremonies",
      "On-time delivery guarantee",
    ],
  },
  {
    id: "delivery",
    icon: Truck,
    label: "Pan India Delivery",
    image: deliveryImg,
    stat: "24hr",
    statLabel: "Express Shipping",
    description:
      "We deliver fresh Sholavandan betel leaves across all major cities in India. Our specially designed moisture-lock packaging keeps leaves farm-fresh for up to 5 days. Free delivery on orders above Rs.500.",
    bullets: [
      "All major Indian cities covered",
      "Moisture-lock packaging technology",
      "Free delivery above Rs.500",
      "Track your order in real-time",
    ],
  },
];

const HighlightsSection = () => {
  const [certOpen, setCertOpen] = useState(false);
  const [activePopup, setActivePopup] = useState<string | null>(null);

  const activeHighlight = highlights.find((h) => h.id === activePopup);

  return (
    <>
      <section className="py-10 md:py-14 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((h) => (
              <div
                key={h.id}
                onClick={() => {
                  if (h.isGiCert) {
                    setCertOpen(true);
                  } else {
                    setActivePopup(h.id);
                  }
                }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-32 md:h-40 overflow-hidden">
                  <img
                    src={h.image}
                    alt={h.label}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {h.stat && (
                    <div className="absolute bottom-3 left-3">
                      <span className="text-2xl md:text-3xl font-bold text-white font-heading leading-none">
                        {h.stat}
                      </span>
                      <span className="block text-xs text-white/80 font-medium">
                        {h.statLabel}
                      </span>
                    </div>
                  )}
                  {h.isGiCert && (
                    <div className="absolute bottom-3 left-3">
                      <span className="text-xs font-semibold text-accent bg-black/50 px-2 py-1 rounded">
                        View Certificate
                      </span>
                    </div>
                  )}
                </div>

                {/* Label */}
                <div className="p-3 md:p-4 flex items-center gap-2">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      h.highlight
                        ? "bg-primary text-primary-foreground"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <h.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-primary leading-tight">
                    {h.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GI Certificate Modal */}
      <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />

      {/* Detail Popup for other highlights */}
      <Dialog
        open={!!activePopup && !activeHighlight?.isGiCert}
        onOpenChange={(open) => !open && setActivePopup(null)}
      >
        {activeHighlight && (
          <DialogContent className="max-w-lg md:max-w-2xl p-0 overflow-hidden rounded-2xl">
            {/* Hero image */}
            <div className="relative h-48 md:h-64">
              <img
                src={activeHighlight.image}
                alt={activeHighlight.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-5">
                {activeHighlight.stat && (
                  <span className="text-4xl md:text-5xl font-bold text-white font-heading">
                    {activeHighlight.stat}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-white font-heading mt-1">
                  {activeHighlight.label}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-7 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {activeHighlight.description}
              </p>

              {activeHighlight.bullets && (
                <ul className="space-y-2.5">
                  {activeHighlight.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Leaf className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors mt-2"
              >
                Enquire Now
              </a>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default HighlightsSection;
