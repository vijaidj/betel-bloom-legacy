import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20claim%20the%20WEDDING10%20offer%20for%20Sholavandan%20Betel%20Leaf";

const SeasonalBanner = () => (
  <section className="py-10">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-3xl bg-primary">

        {/* Decorative leaf circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-accent/10 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full bg-accent/10 blur-2xl" />
        <div className="absolute top-4 right-20 w-20 h-20 rounded-full bg-white/5" />
        <div className="absolute bottom-4 left-20 w-14 h-14 rounded-full bg-white/5" />

        {/* SVG leaf motifs */}
        <svg className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden md:block" width="120" height="160" viewBox="0 0 120 160" fill="none">
          <path d="M60 10 C90 30 110 70 100 100 C90 130 60 150 60 150 C60 150 30 130 20 100 C10 70 30 30 60 10Z" fill="white"/>
          <line x1="60" y1="10" x2="60" y2="150" stroke="white" strokeWidth="2" opacity="0.5"/>
          <line x1="60" y1="50" x2="85" y2="70" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          <line x1="60" y1="70" x2="85" y2="90" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          <line x1="60" y1="90" x2="82" y2="108" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          <line x1="60" y1="50" x2="35" y2="70" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          <line x1="60" y1="70" x2="35" y2="90" stroke="white" strokeWidth="1.5" opacity="0.4"/>
          <line x1="60" y1="90" x2="38" y2="108" stroke="white" strokeWidth="1.5" opacity="0.4"/>
        </svg>

        <div className="relative z-10 p-8 md:p-12 text-center">

          {/* Icon + badge */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-accent text-xs font-bold tracking-widest uppercase">Limited Time Offer</span>
            </div>
          </div>

          {/* Big discount callout */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-7xl md:text-8xl font-bold text-accent font-heading leading-none">10%</span>
            <div className="text-left">
              <div className="text-primary-foreground font-bold text-xl md:text-2xl leading-tight">OFF</div>
              <div className="text-primary-foreground/70 text-sm">Wedding Season</div>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
            On All Orders Above 500 Leaves
          </h3>
          <p className="text-primary-foreground/70 mb-2 text-sm">
            WhatsApp us and mention code:&nbsp;
            <span className="font-bold text-accent bg-accent/15 px-2 py-0.5 rounded text-base tracking-widest">WEDDING10</span>
          </p>

          <div className="flex items-center justify-center gap-1.5 text-primary-foreground/50 text-xs mb-8">
            <Clock className="h-3.5 w-3.5" />
            Valid for the wedding season · While stocks last
          </div>

          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-base gap-2 shadow-2xl shadow-accent/30 font-semibold"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Claim Offer on WhatsApp
            </a>
          </Button>

        </div>
      </div>
    </div>
  </section>
);

export default SeasonalBanner;
