import { Award, Leaf, Heart, Truck } from "lucide-react";
import giScreenshot from "@/assets/gi-screenshot.png";

const badges = [
  { icon: Award, label: "GI Certified", color: "text-accent" },
  { icon: Leaf, label: "Farm Fresh", color: "text-accent" },
  { icon: Heart, label: "500+ Weddings Served", color: "text-accent" },
  { icon: Truck, label: "Pan India Delivery", color: "text-accent" },
];

const HighlightsSection = () => (
  <section className="py-12 bg-primary/5">
    <div className="container mx-auto px-4">
      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-3 justify-center p-4 rounded-xl bg-card border border-border hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
              <b.icon className="h-5 w-5 text-accent" />
            </div>
            <span className="text-sm font-semibold text-primary">{b.label}</span>
          </div>
        ))}
      </div>

      {/* GI Certificate */}
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-muted-foreground mb-4 font-medium">Government of India – GI Certificate</p>
        <div className="rounded-2xl overflow-hidden border-2 border-accent/20 shadow-lg">
          <img
            src={giScreenshot}
            alt="Government of India GI Certificate for Sholavandan Betel Leaf"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
