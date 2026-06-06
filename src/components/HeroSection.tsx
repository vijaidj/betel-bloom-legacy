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
    {/* Background image — z-0 */}
    <div className="absolute inset-0 z-0">
      <img
        src={heroBetel}
        alt="Fresh Sholavandan GI betel leaf for Tamil wedding thamboolam"
        className="w-full h-full object-cover"
        loading="eager"
      />
      {/* Strong dark overlay so ALL text is legible regardless of image */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,40,20,0.96) 0%, rgba(10,40,20,0.85) 55%, rgba(10,40,20,0.50) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,40,20,0.70) 0%, transparent 60%)" }} />
    </div>

    {/* GI Badge — top right desktop — z-20 */}
    <div className="hidden md:flex absolute top-28 right-10 z-20 items-center gap-3 rounded-2xl px-4 py-3 border border-white/20 shadow-lg" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
      <GIBadge size="sm" />
      <div>
        <p className="font-semibold text-sm" style={{ color: "#fff" }}>GI Certified Product</p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Geographical Indication of India</p>
      </div>
    </div>

    {/* Main content — z-10, explicit white text */}
    <div className="container mx-auto px-4 relative pt-28 pb-16 md:pt-32 md:pb-20" style={{ zIndex: 10 }}>
      <div className="max-w-2xl">

        {/* Eyebrow */}
        <p className="font-semibold tracking-widest uppercase text-xs mb-6" style={{ color: "#c9a84c" }}>
          Since Generations · Sholavandan, Tamil Nadu
        </p>

        {/* Logo + Brand stacked */}
        <div className="flex flex-col items-start mb-6">
          <img
            src={leafIcon}
            alt="Vetri Leaf logo"
            className="h-20 md:h-24 w-auto object-contain drop-shadow-2xl mb-3"
          />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none font-heading tracking-tight" style={{ color: "#c9a84c" }}>
            Vetri Leaf
          </h1>
          <p className="text-base md:text-lg font-semibold tracking-widest mt-2 font-heading italic" style={{ color: "rgba(201,168,76,0.85)" }}>
            Sholavandan GI Certified Betel Leaf
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-lg mb-2 font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.92)" }}>
          Premium Bulk Supply for Weddings, Thamboolam &amp; Puja
        </p>
        <p className="text-sm max-w-md mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
          Harvested fresh every morning from our heritage farms along the Vaigai river basin. No middlemen. No cold storage. Pure farm-direct freshness.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 max-w-sm mb-6">
          <Button
            size="lg"
            className="w-full h-14 text-base font-semibold gap-2"
            style={{ background: "#c9a84c", color: "#0a2814" }}
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Order on WhatsApp
            </a>
          </Button>
          <a
            href="tel:+919600441284"
            className="flex items-center justify-center gap-2 text-sm font-medium py-1 transition-colors hover:opacity-100"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            <Phone className="h-4 w-4" /> Call Now: +91 96004 41284
          </a>
        </div>

        {/* Trust signal */}
        <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5" style={{ fill: "#c9a84c", color: "#c9a84c" }} />
            ))}
          </div>
          <span>Trusted by 5000+ Weddings Every Year Worldwide</span>
        </div>

        {/* GI Badge — mobile */}
        <div className="flex md:hidden items-center gap-3 rounded-xl px-4 py-2.5 border border-white/20 w-fit mt-6" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
          <GIBadge size="sm" />
          <div>
            <p className="font-semibold text-sm" style={{ color: "#fff" }}>GI Certified Product</p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Geographical Indication of India</p>
          </div>
        </div>

        {/* Tamil tagline */}
        <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(201,168,76,0.25)" }}>
          <h2 className="text-lg md:text-2xl font-bold leading-tight tamil-text" lang="ta" style={{ color: "#c9a84c" }}>
            சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
          </h2>
        </div>

      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ zIndex: 10 }}>
      <ChevronDown className="h-5 w-5" style={{ color: "rgba(201,168,76,0.6)" }} />
    </div>
  </section>
);

export default HeroSection;
