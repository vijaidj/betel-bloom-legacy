import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";
import heroBetel from "@/assets/hero-betel.jpg";
import GIBadge from "@/components/GIBadge";

const WHATSAPP_URL = "https://wa.me/916379144257?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const HeroSection = () => (
  <section id="home" className="relative flex items-center pt-28 pb-12 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBetel} alt="Fresh Sholavandan GI betel leaf for Tamil wedding thamboolam" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
    </div>

    {/* GI Badge - Top Right */}
    <div className="absolute top-32 right-6 md:right-12 z-20 flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-primary-foreground/20">
      <GIBadge size="sm" />
      <div>
        <p className="text-primary-foreground font-semibold text-sm">GI Certified Product</p>
        <p className="text-primary-foreground/70 text-xs">Geographical Indication of India</p>
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10 py-10 md:py-16">
      <div className="max-w-2xl">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">Since Generations</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent leading-tight mb-5 tamil-text whitespace-nowrap" lang="ta">
          சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-3 font-medium">
          Fresh • Fragrant • Farm Direct • Wedding Ready
        </p>
        <p className="text-base text-primary-foreground/70 max-w-xl mb-8">
          Premium Bulk Supply for Weddings, Thamboolam &amp; Puja — Harvested Fresh from Our Heritage Farms
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 h-14 text-lg gap-2 shadow-lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-accent bg-accent/10 text-primary-foreground hover:bg-accent/20 text-base px-8 h-14 text-lg gap-2" asChild>
            <a href="tel:+916379144257">
              <Phone className="h-5 w-5" /> Call Now: +91 63791 44257
            </a>
          </Button>
        </div>

        {/* Trust text */}
        <p className="text-primary-foreground/70 text-sm">
          ⭐ Trusted by 500+ Weddings Every Year Across Tamil Nadu
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
