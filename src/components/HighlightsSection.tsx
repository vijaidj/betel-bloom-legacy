import { Leaf, Award, Package, Sprout } from "lucide-react";
import GIBadge from "@/components/GIBadge";

const highlights = [
  { icon: Leaf, title: "Farmer Direct", desc: "Sourced straight from our family farms" },
  { icon: Package, title: "Bulk Orders", desc: "Large quantities for any occasion" },
  { icon: Sprout, title: "Fresh Harvest", desc: "Handpicked and delivered fresh daily" },
];

const HighlightsSection = () => (
  <section className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {/* GI Certified Card - highlighted */}
        <div className="text-center p-6 bg-card rounded-2xl border border-accent/30 shadow-md">
          <div className="flex justify-center mb-3">
            <GIBadge size="md" />
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">GI Certified</h3>
          <p className="text-sm text-muted-foreground">Geographical Indication certified heritage quality from Sholavandan</p>
        </div>
        {highlights.map((h) => (
          <div key={h.title} className="text-center p-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/15 mb-4">
              <h.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
