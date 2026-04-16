import { useState } from "react";
import { Award, Leaf, Heart, Truck } from "lucide-react";
import GICertificateModal from "./GICertificateModal";

const badges = [
  { icon: Award, label: "GI Certified", highlight: true, clickable: true },
  { icon: Leaf, label: "Farm Fresh" },
  { icon: Heart, label: "500+ Weddings Served" },
  { icon: Truck, label: "Pan India Delivery" },
];

const HighlightsSection = () => {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <>
      <section className="py-8 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                onClick={b.clickable ? () => setCertOpen(true) : undefined}
                className={`flex items-center gap-2.5 py-3 px-5 rounded-full border transition-all ${
                  b.highlight
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card border-border shadow-sm hover:shadow-md"
                } ${b.clickable ? "cursor-pointer hover:scale-105" : ""}`}
              >
                <b.icon className="h-4 w-4 text-accent" />
                <span className={`text-sm font-semibold whitespace-nowrap ${b.highlight ? "text-primary-foreground" : "text-primary"}`}>
                  {b.label}
                </span>
                {b.clickable && (
                  <span className="text-xs opacity-70 ml-1">↗</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />
    </>
  );
};

export default HighlightsSection;
