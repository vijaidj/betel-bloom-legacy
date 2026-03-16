import { Award, Leaf, Heart, Truck, Sprout, Package, Sun, ShieldCheck } from "lucide-react";
import GIBadge from "./GIBadge";
import giScreenshot from "@/assets/gi-screenshot.png";

const badges = [
  { icon: Award, label: "GI Certified", highlight: true },
  { icon: Leaf, label: "Farm Fresh" },
  { icon: Heart, label: "500+ Weddings Served" },
  { icon: Truck, label: "Pan India Delivery" },
];

const features = [
  {
    icon: Sprout,
    title: "Farmer Direct",
    desc: "Sourced straight from our family farms — no middlemen",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: "Large quantities for weddings, temples & export",
  },
  {
    icon: Sun,
    title: "Fresh Harvest",
    desc: "Handpicked at dawn, delivered fresh daily",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Every leaf inspected before dispatch",
  },
];

const HighlightsSection = () => (
  <section className="py-12 bg-secondary/40">
    <div className="container mx-auto px-4">
      {/* Trust Badges - Horizontal Strip */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {badges.map((b) => (
          <div
            key={b.label}
            className={`flex items-center gap-2.5 py-3 px-5 rounded-full border transition-all ${
              b.highlight
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card border-border shadow-sm hover:shadow-md"
            }`}
          >
            <b.icon className={`h-4 w-4 ${b.highlight ? "text-accent" : "text-accent"}`} />
            <span className={`text-sm font-semibold whitespace-nowrap ${b.highlight ? "text-primary-foreground" : "text-primary"}`}>
              {b.label}
            </span>
          </div>
        ))}
      </div>

      {/* GI Certificate + Features Combined Card */}
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-5">
            {/* Left: GI Badge + Certificate */}
            <div className="md:col-span-2 bg-primary/5 p-6 sm:p-8 flex flex-col items-center justify-center gap-4 border-b md:border-b-0 md:border-r border-border">
              <GIBadge size="lg" />
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-1">
                  Government of India
                </p>
                <h3 className="text-lg font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  GI Certified Heritage
                </h3>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed max-w-[220px] mx-auto">
                  Sholavandan Betel Leaf holds the prestigious Geographical Indication tag — a mark of origin, quality & tradition.
                </p>
              </div>
              <img
                src={giScreenshot}
                alt="GI Certificate for Sholavandan Betel Leaf"
                className="w-full max-w-[180px] rounded-lg border border-border shadow-sm mt-1 opacity-90"
                loading="lazy"
              />
            </div>

            {/* Right: Feature Grid */}
            <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-5">
                Why Choose Us
              </p>
              <div className="grid grid-cols-2 gap-5">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary leading-tight mb-0.5">{f.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
