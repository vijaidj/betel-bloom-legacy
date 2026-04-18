import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star } from "lucide-react";
import heroBetel from "@/assets/hero-betel.jpg";
import leafIcon from "@/assets/leaf-icon.png";
import GIBadge from "@/components/GIBadge";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const HeroSection = () => (
  <section id="home" className="relative flex items-center pt-28 pb-6 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBetel} alt="Fresh Sholavandan GI betel leaf for Tamil wedding thamboolam" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />
    </div>

    {/* GI Badge - Top Right (hidden on mobile, shown inline below on mobile) */}
    <div className="hidden md:flex absolute top-32 right-12 z-20 items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-primary-foreground/20">
      <GIBadge size="sm" />
      <div>
        <p className="text-primary-foreground font-semibold text-sm">GI Certified Product</p>
        <p className="text-primary-foreground/70 text-xs">Geographical Indication of India</p>
      </div>
    </div>

    <div className="container mx-auto px-4 relative z-10 py-8 md:py-10">
      <div className="max-w-3xl">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in">Since Generations</p>
        <div className="mb-5 animate-fade-in">
          <img
            src={logo}
            alt="Vetri Leaf — Sholavandan GI Certified Betel Leaf"
            className="h-32 md:h-44 lg:h-52 w-auto object-contain drop-shadow-2xl"
          />
          <p className="mt-3 text-accent text-base md:text-lg font-semibold tracking-wide font-heading italic">
            Sholavandan GI Certified Betel Leaf
          </p>
        </div>
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-3 font-medium">
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
            <a href="tel:+919600441284">
              <Phone className="h-5 w-5" /> Call Now: +91 96004 41284
            </a>
          </Button>
        </div>

        {/* Trust text */}
        <p className="text-primary-foreground/70 text-sm flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-accent text-accent" /> Trusted by 5000+ Weddings Every Year Worldwide
        </p>

        {/* GI Badge - Mobile only */}
        <div className="flex md:hidden items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl px-4 py-2.5 border border-primary-foreground/20 w-fit mt-4">
          <GIBadge size="sm" />
          <div>
            <p className="text-primary-foreground font-semibold text-sm">GI Certified Product</p>
            <p className="text-primary-foreground/70 text-xs">Geographical Indication of India</p>
          </div>
        </div>

        {/* Tamil tagline at bottom */}
        <div className="mt-8 pt-5 border-t border-accent/30">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-accent leading-tight tamil-text" lang="ta">
            சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
          </h2>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
