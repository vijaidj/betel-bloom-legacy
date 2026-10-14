import { useState } from "react";
import { MessageCircle, Phone, ChevronDown, Truck } from "lucide-react";
import heroWide from "@/assets/farm/hero-vines-wide.webp";
import heroTall from "@/assets/farm/hero-vines-tall.webp";
import leafIcon from "@/assets/leaf-icon.webp";
import GIBadge from "@/components/GIBadge";
import GICertificateModal from "@/components/GICertificateModal";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

// Hero palette, tuned for contrast on the dark green overlay
const GOLD = "#D6B65E";      // brand title and button (~8:1 on the overlay)
const GOLD_SOFT = "#DDC27A"; // small gold labels
const IVORY = "#F5F1E6";     // headings and button text on dark

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
      {/* Overlay: even on phones (text spans the width), darker on the text side from tablet up */}
      <div className="absolute inset-0 md:hidden" style={{ background: "rgba(7,30,17,0.80)" }} />
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: "linear-gradient(to right, rgba(7,30,17,0.95) 0%, rgba(7,30,17,0.88) 42%, rgba(7,30,17,0.55) 72%, rgba(7,30,17,0.30) 100%)" }}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,30,17,0.75) 0%, transparent 45%)" }} />
    </div>

    {/* GI Badge — top right desktop — z-20; opens the certificate */}
    <button type="button" onClick={() => setCertOpen(true)} aria-label="View GI certificate" className="hidden md:flex absolute top-28 right-10 z-20 items-center gap-3 rounded-2xl px-4 py-3 border border-white/20 shadow-lg text-left hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c]" style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(8px)" }}>
      <GIBadge size="sm" />
      <div>
        <p className="font-semibold text-sm" style={{ color: IVORY }}>GI Certified Product</p>
        <p className="text-xs" style={{ color: "rgba(245,241,230,0.78)" }}>Geographical Indication of India · View</p>
      </div>
    </button>

    {/* Main content — z-10 */}
    <div className="container relative pt-24 pb-20 md:pt-28 md:pb-24" style={{ zIndex: 10 }}>
      <div className="max-w-[640px]">

        {/* Eyebrow */}
        <p className="text-xs sm:text-[13px] font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: GOLD_SOFT }}>
          Since Generations · Sholavandan, Tamil Nadu
        </p>

        {/* Brand — kept as the H1 */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img
            src={leafIcon}
            alt="Vetri Leaf logo"
            width={240} height={224}
            className="h-12 sm:h-14 md:h-[72px] lg:h-20 w-auto object-contain flex-shrink-0 drop-shadow-xl"
          />
          <h1
            className="font-heading font-semibold leading-[0.95] tracking-tight text-[52px] sm:text-[64px] md:text-[88px] lg:text-[104px]"
            style={{ color: GOLD, textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
          >
            Vetri Leaf
          </h1>
        </div>

        {/* What it is — upright and in ivory, so it reads at a glance */}
        <p
          className="font-heading text-[22px] sm:text-[26px] md:text-[30px] leading-snug mt-4 mb-7"
          style={{ color: IVORY }}
        >
          Sholavandan GI Certified Betel Leaf
        </p>

        {/* Offer + supporting line */}
        <p className="text-lg md:text-xl font-semibold leading-snug mb-3 max-w-[32rem] text-balance" style={{ color: IVORY }}>
          Premium Bulk Supply for Weddings, Thamboolam &amp; Puja
        </p>
        <p className="text-[15px] md:text-base leading-7 mb-8 max-w-[34rem]" style={{ color: "rgba(245,241,230,0.82)" }}>
          Harvested fresh every morning from our heritage farms along the Vaigai river basin. No middlemen. No cold storage. Pure farm-direct freshness.
        </p>

        {/* CTAs — side by side from small tablets up */}
        <div className="flex flex-col sm:flex-row gap-3 mb-7">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-lg text-base font-semibold shadow-lg shadow-black/25 transition-[filter] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b2a16]"
            style={{ background: GOLD, color: "#0B2A16" }}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Order on WhatsApp
          </a>
          <a
            href="tel:+919600441284"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-6 rounded-lg text-base font-semibold border transition-colors hover:bg-white/10"
            style={{ color: IVORY, borderColor: "rgba(245,241,230,0.4)" }}
          >
            <Phone className="h-5 w-5" aria-hidden="true" /> Call +91 96004 41284
          </a>
        </div>

        {/* Trust line — the GI certificate and the delivery offer; no unverified statistics */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ color: "rgba(245,241,230,0.88)" }}>
          <button
            type="button"
            onClick={() => setCertOpen(true)}
            className="group md:hidden flex items-center gap-2.5 text-left rounded-lg"
          >
            <GIBadge size="sm" />
            <span>
              <span className="block font-semibold leading-tight" style={{ color: IVORY }}>GI Certified</span>
              <span className="block text-xs mt-0.5 underline underline-offset-2 group-hover:no-underline" style={{ color: GOLD_SOFT }}>
                View certificate
              </span>
            </span>
          </button>
          <p className="flex items-center gap-2">
            <Truck className="h-4 w-4 shrink-0" style={{ color: GOLD_SOFT }} aria-hidden="true" /> Free delivery above ₹2500
          </p>
        </div>

        {/* Tamil tagline */}
        <div className="mt-9 pt-6 border-t" style={{ borderColor: "rgba(214,182,94,0.28)" }}>
          <h2 className="tamil-text text-xl md:text-2xl font-semibold leading-snug" lang="ta" style={{ color: GOLD_SOFT }}>
            சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
          </h2>
        </div>

      </div>
    </div>

    {/* Scroll hint */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce" style={{ zIndex: 10 }}>
      <ChevronDown className="h-5 w-5" style={{ color: "rgba(221,194,122,0.7)" }} aria-hidden="true" />
    </div>

    <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />
  </section>
  );
};

export default HeroSection;
