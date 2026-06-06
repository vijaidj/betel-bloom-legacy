import { Button } from "@/components/ui/button";
import { MessageCircle, Heart } from "lucide-react";
import weddingImg from "@/assets/highlight-wedding.jpg";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20book%20betel%20leaves%20for%20my%20wedding%20or%20function";

const stats = [
  { value: "5000+", label: "Weddings Served" },
  { value: "50,000+", label: "Max Leaves/Order" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "GI", label: "Certified Quality" },
];

const WeddingSection = () => (
  <section id="wedding" className="relative overflow-hidden py-0">
    {/* Full bleed background */}
    <div className="absolute inset-0">
      <img
        src={weddingImg}
        alt="Tamil wedding with Sholavandan betel leaf thamboolam"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-primary/40" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
          <Heart className="h-3.5 w-3.5 fill-accent" />
          Wedding & Special Orders
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight font-heading">
          Perfect for Tamil Weddings &amp; Thamboolam
        </h2>

        <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-xl mx-auto text-base md:text-lg">
          Planning a wedding or religious ceremony? We supply premium GI-certified betel leaves in large quantities with reliable delivery across India.
        </p>
        <p className="text-primary-foreground/60 text-sm mb-10 max-w-lg mx-auto">
          Custom packaging available · Dedicated wedding coordinator · Order 2 days before your function for the freshest leaves.
        </p>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl py-4 px-3">
              <div className="text-2xl md:text-3xl font-bold text-accent font-heading">{s.value}</div>
              <div className="text-xs text-primary-foreground/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="h-14 px-8 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold gap-2 shadow-xl"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Book Your Wedding Order
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 border-white/30 text-primary-foreground hover:bg-white/10 text-base gap-2"
            asChild
          >
            <a href="#contact">Request a Quote</a>
          </Button>
        </div>

      </div>
    </div>
  </section>
);

export default WeddingSection;
