import { Button } from "@/components/ui/button";
import { MessageCircle, PartyPopper } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/916379144257?text=Hi%2C%20I%20want%20to%20claim%20the%20WEDDING10%20offer%20for%20Sholavandan%20Betel%20Leaf";

const SeasonalBanner = () => (
  <section className="py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent via-accent/90 to-accent/80 rounded-2xl p-8 md:p-10 text-center text-accent-foreground shadow-xl">
        <div className="flex justify-center mb-2"><PartyPopper className="h-8 w-8 text-accent-foreground" /></div>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Wedding Season Special Offer!</h3>
        <p className="text-lg mb-1 font-medium">Get 10% OFF on orders above 500 leaves.</p>
        <p className="text-sm mb-6 opacity-80">WhatsApp us and mention code: <strong className="text-primary">WEDDING10</strong></p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base gap-2 shadow-lg" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> Claim Offer on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default SeasonalBanner;
