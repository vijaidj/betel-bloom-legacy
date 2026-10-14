import { useState } from "react";
import { MessageCircle, Phone, ArrowDown, MapPin, Truck } from "lucide-react";
import leavesCloseup from "@/assets/farm/farm-leaves-closeup.webp";
import farmerWalking from "@/assets/farm/farm-farmer-walking.webp";
import leafIcon from "@/assets/leaf-icon.webp";
import GIBadge from "@/components/GIBadge";
import GICertificateModal from "@/components/GICertificateModal";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

/**
 * First screen. The brand stays the H1 (SEO is out of scope for this phase),
 * but the offer line carries the visual weight, and real farm photography
 * sits beside it instead of a darkened background image.
 */
const HeroSection = () => {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-forest-deep text-primary-foreground">
      {/* Soft light from the photo side, so the dark ground is not flat */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(90% 70% at 85% 30%, hsl(156 45% 18% / 0.9) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container relative pt-[84px] pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Photo — first on mobile so the farm is the first thing seen */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              <div className="rounded-2xl overflow-hidden aspect-[2/1] sm:aspect-[4/3] lg:aspect-[4/5] shadow-2xl shadow-black/40 ring-1 ring-white/10">
                <img
                  src={leavesCloseup}
                  alt="Betel leaves growing on the vine at our Sholavandan farm"
                  width={825}
                  height={1100}
                  loading="eager"
                  {...{ fetchpriority: "high" }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Inset: the people who grow it */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 lg:-left-10 w-32 md:w-40 rounded-xl overflow-hidden border-4 border-forest-deep shadow-xl aspect-[4/5]">
                <img
                  src={farmerWalking}
                  alt="Farmer walking between rows of betel vines"
                  width={825}
                  height={1100}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Our garden, Sholavandan
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 lg:order-1">
            <p className="eyebrow-on-dark mb-4 sm:mb-5">Since Generations · Sholavandan, Tamil Nadu</p>

            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <img src={leafIcon} alt="Vetri Leaf logo" width={240} height={224} className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-accent leading-none">Vetri Leaf</h1>
            </div>

            <p className="font-heading text-[34px] leading-[1.08] sm:text-5xl md:text-6xl lg:text-[64px] text-white max-w-[15ch] mb-4 sm:mb-5">
              Sholavandan GI Certified Betel Leaf
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-2 sm:mb-3 max-w-xl">
              Premium Bulk Supply for Weddings, Thamboolam &amp; Puja
            </p>
            <p className="text-sm sm:text-[15px] md:text-base text-white/70 leading-relaxed max-w-xl mb-6 sm:mb-8">
              Harvested fresh every morning from our heritage farms along the Vaigai river basin. No middlemen. No cold storage. Pure farm-direct freshness.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-[52px] sm:h-14 px-7 rounded-md bg-accent text-accent-foreground text-base font-semibold hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Order on WhatsApp
              </a>
              <a
                href="tel:+919600441284"
                className="inline-flex items-center justify-center gap-2 h-[52px] sm:h-14 px-7 rounded-md border border-white/30 text-white text-base font-semibold hover:bg-white/10 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> Call +91 96004 41284
              </a>
            </div>

            {/* Trust strip — facts already stated elsewhere on the site, no statistics */}
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
              <li>
                <button
                  type="button"
                  onClick={() => setCertOpen(true)}
                  className="group inline-flex items-center gap-2.5 text-left rounded-md"
                >
                  <GIBadge size="sm" />
                  <span>
                    GI-tagged Sholavandan vetrilai ·{" "}
                    <span className="text-accent underline underline-offset-4 group-hover:no-underline">View certificate</span>
                  </span>
                </button>
              </li>
              <li className="inline-flex items-center gap-2">
                <Truck className="h-4 w-4 text-accent shrink-0" aria-hidden="true" /> Free delivery above ₹2500
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <h2 className="text-lg md:text-xl font-semibold leading-tight tamil-text text-accent" lang="ta">
                சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
              </h2>
              <a
                href="#products"
                className="hidden md:inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors shrink-0"
              >
                See our products <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />
    </section>
  );
};

export default HeroSection;
