import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Flower2, Home, Sparkles, HandHeart, Gift } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20book%20betel%20leaves%20for%20my%20function";

const occasions = [
  { icon: Heart,     label: "Wedding",          tagline: "Thamboolam & bulk orders" },
  { icon: Flower2,   label: "Thamboolam",       tagline: "Traditional gift sets" },
  { icon: Home,      label: "Housewarming",     tagline: "Gruhapravesam puja" },
  { icon: Sparkles,  label: "Puberty ceremony", tagline: "Manjal neerattu function" },
  { icon: HandHeart, label: "Temple pooja",     tagline: "Daily & festival puja" },
  { icon: Gift,      label: "Corporate gifting", tagline: "Premium gift hampers" },
];

const OccasionsSection = () => (
  <section id="occasions" className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeader
          eyebrow="Celebrations"
          title="Perfect for every occasion"
          description="Fresh Sholavandan vetrilai for every traditional ceremony, delivered across India."
          align="center"
        />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
        {occasions.map((o) => (
            <div
              key={o.label}
              className="group text-center rounded-2xl border border-border bg-card p-6 md:p-7 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/[0.08] border border-accent/20 mb-4 transition-colors duration-300 group-hover:bg-accent/15">
                <o.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg text-primary mb-1 leading-snug">{o.label}</h3>
              <p className="text-xs text-muted-foreground">{o.tagline}</p>
            </div>
          ))}
      </div>

      <div className="text-center max-w-xl mx-auto">
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          We supply fresh betel leaves for 5000+ weddings every year worldwide.
          Order 2 days before your function for the freshest leaves delivered to your door.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base gap-2" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> Book for Your Function
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default OccasionsSection;
