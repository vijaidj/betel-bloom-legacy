import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Flower2, Home, Sparkles, HandHeart, Gift } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20book%20betel%20leaves%20for%20my%20function";

const occasions = [
  { icon: Heart,      label: "Wedding",           tagline: "Thamboolam & bulk orders",  color: "bg-rose-50 text-rose-600 border-rose-100",         hover: "hover:border-rose-300 hover:shadow-rose-100" },
  { icon: Flower2,    label: "Thamboolam",         tagline: "Traditional gift sets",     color: "bg-violet-50 text-violet-600 border-violet-100",    hover: "hover:border-violet-300 hover:shadow-violet-100" },
  { icon: Home,       label: "Housewarming",        tagline: "Gruhapravesam puja",       color: "bg-amber-50 text-amber-600 border-amber-100",       hover: "hover:border-amber-300 hover:shadow-amber-100" },
  { icon: Sparkles,   label: "Puberty Ceremony",   tagline: "Manjal neerattu function", color: "bg-pink-50 text-pink-600 border-pink-100",          hover: "hover:border-pink-300 hover:shadow-pink-100" },
  { icon: HandHeart,  label: "Temple Pooja",        tagline: "Daily & festival puja",   color: "bg-teal-50 text-teal-600 border-teal-100",          hover: "hover:border-teal-300 hover:shadow-teal-100" },
  { icon: Gift,       label: "Corporate Gifting",  tagline: "Premium gift hampers",     color: "bg-emerald-50 text-emerald-600 border-emerald-100", hover: "hover:border-emerald-300 hover:shadow-emerald-100" },
];

const OccasionsSection = () => (
  <section id="occasions" className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Celebrations</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Perfect for Every Special Occasion
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm">
          We deliver fresh Sholavandan vetrilai for all your traditional ceremonies across India.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
        {occasions.map((o) => (
          <div
            key={o.label}
            className={`group flex flex-col items-center text-center p-6 rounded-2xl border-2 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default ${o.hover}`}
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border ${o.color} group-hover:scale-110 transition-transform duration-300`}>
              <o.icon className="h-6 w-6" />
            </div>
            <span className="font-bold text-primary text-base mb-1">{o.label}</span>
            <span className="text-xs text-muted-foreground">{o.tagline}</span>
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
