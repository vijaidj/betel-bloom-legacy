import { Award, Leaf, Heart, Truck, Sprout, Package, Sun } from "lucide-react";
import GIBadge from "./GIBadge";

const badges = [
  { icon: Award, label: "GI Certified" },
  { icon: Leaf, label: "Farm Fresh" },
  { icon: Heart, label: "500+ Weddings Served" },
  { icon: Truck, label: "Pan India Delivery" },
];

const features = [
  {
    icon: null,
    useBadge: true,
    title: "GI Certified",
    desc: "Geographical Indication certified heritage quality from Sholavandan",
  },
  {
    icon: Sprout,
    title: "Farmer Direct",
    desc: "Sourced straight from our family farms",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    desc: "Large quantities for any occasion",
  },
  {
    icon: Sun,
    title: "Fresh Harvest",
    desc: "Handpicked and delivered fresh daily",
  },
];

const HighlightsSection = () => (
  <section className="py-14 bg-secondary/50">
    <div className="container mx-auto px-4">
      {/* Trust Badges Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-3 justify-center py-5 px-4 rounded-2xl bg-card shadow-sm"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <b.icon className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm font-semibold text-primary">{b.label}</span>
          </div>
        ))}
      </div>

      {/* GI Certificate Section */}
      <p className="text-center text-muted-foreground font-medium mb-6 tracking-wide text-sm">
        Government of India – GI Certificate
      </p>

      <div className="max-w-3xl mx-auto rounded-3xl bg-card shadow-sm p-6 sm:p-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`flex flex-col items-center text-center gap-3 p-4 rounded-2xl transition-shadow ${
                f.useBadge ? "bg-secondary/60 shadow-sm" : ""
              }`}
            >
              {f.useBadge ? (
                <GIBadge size="sm" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  {f.icon && <f.icon className="h-5 w-5 text-accent" />}
                </div>
              )}
              <h3 className="text-sm font-bold text-primary font-sans">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
