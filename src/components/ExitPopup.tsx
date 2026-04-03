import { useState, useEffect } from "react";
import { X, MessageCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const ExitPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("exit-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={dismiss}>
      <div className="bg-primary border-2 border-accent rounded-2xl p-8 max-w-sm w-full text-center relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={dismiss} className="absolute top-3 right-3 text-primary-foreground/50 hover:text-primary-foreground" aria-label="Close">
          <X className="h-5 w-5" />
        </button>
        <div className="flex justify-center mb-3"><Leaf className="h-8 w-8 text-accent" /></div>
        <h3 className="text-xl font-bold text-primary-foreground mb-2">Special Offer!</h3>
        <p className="text-primary-foreground/80 mb-1">Order Today &amp; Get FREE Delivery!</p>
        <p className="text-primary-foreground/60 text-sm mb-6">WhatsApp us now →</p>
        <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-base gap-2" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={dismiss}>
            <MessageCircle className="h-5 w-5" /> Order on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ExitPopup;
