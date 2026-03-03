import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/916379144257?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const TamilSection = () => (
  <section className="py-16 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 text-center max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" lang="ta">சோளவந்தான் வெற்றிலை</h2>
      <div className="space-y-4 text-primary-foreground/80 leading-relaxed mb-8" lang="ta">
        <p>
          சோளவந்தான் வெற்றிலை – திருமணம், தாம்பூலம், பூஜை மற்றும்
          விழாக்களுக்கு ஏற்றது.
        </p>
        <p>
          GI சான்றிதழ் பெற்ற தரமான வெற்றிலை. வைகை நதி படுகையின் வளமான
          மண்ணில் விளைந்த இந்த வெற்றிலை, தனித்துவமான மணம் மற்றும் சுவையுடன்
          விளங்குகிறது.
        </p>
        <p>தமிழ்நாடு முழுவதும் டெலிவரி வசதி உள்ளது.</p>
        <p className="font-semibold text-accent text-lg">இப்போதே ஆர்டர் செய்யுங்கள்!</p>
      </div>
      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base gap-2" asChild>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5" /> வாட்ஸ்அப்பில் ஆர்டர் செய்யுங்கள்
        </a>
      </Button>
    </div>
  </section>
);

export default TamilSection;
