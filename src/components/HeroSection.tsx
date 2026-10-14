import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ChevronDown, Truck } from "lucide-react";
import heroWide from "@/assets/farm/hero-vines-wide.webp";
import heroTall from "@/assets/farm/hero-vines-tall.webp";
import leafIcon from "@/assets/leaf-icon.webp";
import GIBadge from "@/components/GIBadge";
import GICertificateModal from "@/components/GICertificateModal";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const HeroSection = () => {
  const [certOpen, setCertOpen] = useState(false);

  return (
  <section
    id="home"
    className="relative flex flex-col justify-center overflow-hidden"
    style={{ minHeight: "100svh" }}
  >
    {/* Background image — z-0. Our own vine garden: wide crop on desktop, upright crop on phones */}
    <div className="absolute inset-0 z-0">
      <picture>
        <source media="(max-width: 767px)" srcSet={heroTall} width={900} height={1200} />
        <img
          src={heroWide}
          alt="Rows of betel vines in our garden at Sholavandan"
          className="w-full h-full object-cover"
          width={1920} height={1080}
          loading="eager"
          {...{ fetchpriority: "high" }}
        />
      </picture>
      {/* Strong dark overlay so ALL text is legible regardless of image */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,40,20,0.96) 0%, rgba(10,40,20,0.85) 55%, rgba(10,40,20,0.50) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,40,20,0.70) 0%, transparent 60%)" }} />
    </div>

    {/* GI Badge — top right desktop — z-20; opens the certificate */}
    <button type="button" onClick={() => setCertOpen(true)} aria-label="View GI certificate" className="hidden md:flex absolute top-28 right-10 z-20 items-center gap-3 rounded-2xl px-4 py-3 border border-white/20 shadow-lg text-left hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
      <GIBadge size="sm" />
      <div>
        <p className="font-semibold text-sm" style={{ color: "#fff" }}>GI Certified Product</p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Geographical Indication of India</p>
      </div>
    </button>

    {/* Main content — z-10, explicit white text */}
    <div className="container mx-auto px-4 relative pt-28 pb-16 md:pt-32 md:pb-20" style={{ zIndex: 10 }}>
      <div className="max-w-2xl">

        {/* Eyebrow */}
        <p className="font-semibold tracking-widest uppercase text-xs mb-6" style={{ color: "#c9a84c" }}>
          Since Generations · Sholavandan, Tamil Nadu
        </p>

        {/* Logo + Brand — same row, vertically centered */}
        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-4 mb-2">
            <img
              src={leafIcon}
              alt="Vetri Leaf logo"
              width={240} height={224}
              className="h-16 md:h-20 w-auto object-contain drop-shadow-2xl flex-shrink-0"
            />
            <h1 className="text-[52px] sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none font-heading tracking-tight" style={{ color: "#c9a84c" }}>
              Vetri Leaf
            </h1>
          </div>
          <p className="text-base md:text-lg font-semibold tracking-widest mt-1 font-heading italic" style={{ color: "rgba(201,168,76,0.85)" }}>
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

        {/* Trust line — the GI certificate and the delivery offer; no unverified statistics */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-8 gap-y-4">
          <button
            type="button"
            onClick={() => setCertOpen(true)}
            className="group md:hidden flex items-center gap-2.5 text-left rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]"
          >
            <GIBadge size="sm" />
            <span>
              <span className="block text-sm font-semibold leading-tight" style={{ color: "#fff" }}>GI Certified</span>
              <span className="block text-xs mt-0.5 underline underline-offset-2 group-hover:no-underline" style={{ color: "rgba(201,168,76,0.9)" }}>
                View certificate
              </span>
            </span>
          </button>
          <p className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
            <Truck className="h-4 w-4 shrink-0" style={{ color: "#c9a84c" }} aria-hidden="true" /> Free delivery above ₹2500
          </p>
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

    <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />
  </section>
  );
};

export default HeroSection;
