import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Flower2, Home, Sparkles, HandHeart, Gift } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20book%20betel%20leaves%20for%20my%20function";

const occasions = [
  { icon: Heart, label: "Wedding" },
  { icon: Flower2, label: "Thamboolam" },
  { icon: Home, label: "Housewarming" },
  { icon: Sparkles, label: "Puberty Ceremony" },
  { icon: HandHeart, label: "Temple Pooja" },
  { icon: Gift, label: "Corporate Gifting" },
];

const OccasionsSection = () => (
  <section id="occasions" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Celebrations</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Perfect for Every Special Occasion</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We deliver fresh Sholavandan vetrilai for all your traditional ceremonies
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
        {occasions.map((o) => (
          <div key={o.label} className="flex items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all justify-center">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <o.icon className="h-5 w-5 text-accent" />
            </div>
            <span className="font-semibold text-primary">{o.label}</span>
          </div>
        ))}
      </div>

      <div className="text-center max-w-xl mx-auto">
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          We supply fresh betel leaves for 500+ weddings every year.
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
