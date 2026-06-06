import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Star, ChevronDown } from "lucide-react";
import heroBetel from "@/assets/hero-betel.jpg";
import leafIcon from "@/assets/leaf-icon.png";
import GIBadge from "@/components/GIBadge";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const HeroSection = () => (
  <section
    id="home"
    className="relative flex flex-col justify-center overflow-hidden"
    style={{ minHeight: "100svh" }}
  >
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroBetel}
        alt="Fresh Sholavandan GI betel leaf for Tamil wedding thamboolam"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/97 via-primary/80 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
    </div>

    {/* GI Badge — top right desktop */}
    <div className="hidden md:flex absolute top-28 right-10 z-20 items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20 shadow-lg">
      <GIBadge size="sm" />
      <div>
        <p className="text-primary-foreground font-semibold text-sm">GI Certified Product</p>
        <p className="text-primary-foreground/70 text-xs">Geographical Indication of India</p>
      </div>
    </div>

    {/* Main content */}
    <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="max-w-2xl">

        {/* Eyebrow */}
        <p className="text-accent font-semibold tracking-widest uppercase text-xs mb-6">
          Since Generations · Sholavandan, Tamil Nadu
        </p>

        {/* Logo + Brand stacked */}
        <div className="flex flex-col items-start mb-6">
          <img
            src={leafIcon}
            alt="Vetri Leaf logo"
            className="h-20 md:h-24 w-auto object-contain drop-shadow-2xl mb-3"
          />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-accent leading-none font-heading tracking-tight">
            Vetri Leaf
          </h1>
          <p className="text-accent/80 text-base md:text-lg font-semibold tracking-widest mt-2 font-heading italic">
            Sholavandan GI Certified Betel Leaf
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-lg mb-2 font-medium leading-relaxed">
          Premium Bulk Supply for Weddings, Thamboolam &amp; Puja
        </p>
        <p className="text-sm text-primary-foreground/65 max-w-md mb-8 leading-relaxed">
          Harvested fresh every morning from our heritage farms along the Vaigai river basin. No middlemen. No cold storage. Pure farm-direct freshness.
        </p>

        {/* CTAs — dominant primary + secondary text link */}
        <div className="flex flex-col gap-3 max-w-sm mb-6">
          <Button
            size="lg"
            className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold gap-2 shadow-xl shadow-accent/20"
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
          </Button>
          <a
            href="tel:+919600441284"
            className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm font-medium py-1"
          >
            <Phone className="h-4 w-4" /> Call Now: +91 96004 41284
          </a>
        </div>

        {/* Trust signal */}
        <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </div>
          <span>Trusted by 5000+ Weddings Every Year Worldwide</span>
        </div>

        {/* GI Badge — mobile */}
        <div className="flex md:hidden items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20 w-fit mt-6">
          <GIBadge size="sm" />
          <div>
            <p className="text-primary-foreground font-semibold text-sm">GI Certified Product</p>
            <p className="text-primary-foreground/70 text-xs">Geographical Indication of India</p>
          </div>
        </div>

        {/* Tamil tagline */}
        <div className="mt-8 pt-6 border-t border-accent/25">
          <h2 className="text-lg md:text-2xl font-bold text-accent leading-tight tamil-text" lang="ta">
            சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
          </h2>
        </div>
      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
      <ChevronDown className="h-5 w-5 text-accent/60" />
    </div>
  </section>
);

export default HeroSection;
