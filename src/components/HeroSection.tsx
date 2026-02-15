import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroBetel from "@/assets/hero-betel.jpg";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20your%20betel%20leaves.";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroBetel} alt="Fresh betel leaves" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
    </div>

    <div className="container mx-auto px-4 relative z-10 py-20">
      <div className="max-w-2xl">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">Since Generations</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
          GI Certified<br />Sholavandan Betel Leaf
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10">
          Premium Bulk Supply for Weddings &amp; Puja — Harvested Fresh from Our Heritage Farms
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8" asChild>
            <a href="#contact">Enquire Now</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 gap-2" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp Order
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
