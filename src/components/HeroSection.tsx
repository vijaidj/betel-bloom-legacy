import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20your%20betel%20leaves.";

const HeroSection = () => (
  <section id="home" className="relative min-h-[90vh] flex items-center betel-pattern pt-16">
    <div className="container mx-auto px-4 text-center py-20">
      <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">Since Generations</p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
        GI Certified<br />Sholavandan Betel Leaf
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Premium Bulk Supply for Weddings &amp; Puja — Harvested Fresh from Our Heritage Farms
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8" asChild>
          <a href="#contact">Enquire Now</a>
        </Button>
        <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 gap-2" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> WhatsApp Order
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
