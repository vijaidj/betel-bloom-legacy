import { useState } from "react";
import { MessageCircle, Phone, Truck, MapPin } from "lucide-react";
import leavesCloseup from "@/assets/farm/farm-leaves-closeup.webp";
import farmerWalking from "@/assets/farm/farm-farmer-walking.webp";
import leafIcon from "@/assets/leaf-icon.webp";
import GIBadge from "@/components/GIBadge";
import GICertificateModal from "@/components/GICertificateModal";
import { VineBorder } from "@/components/BrandStatementSection";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

/**
 * Hand-drawn heritage hero: ivory ground, brand and offer on the left, our
 * own garden photo in an arched frame on the right, with pen-drawn betel
 * leaf sprigs in the same style as the brand statement below.
 * The H1 stays "Vetri Leaf" (SEO is out of scope for this phase).
 */
const HeroSection = () => {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-[#FBF8F1]">
      {/* Side borders — the same hand-drawn betel vines as the brand statement */}
      <VineBorder className="hidden sm:block absolute left-0 top-0 h-full w-16 md:w-24 xl:w-28 text-[#8FA88F]/70 pointer-events-none" />
      <VineBorder className="hidden sm:block absolute right-0 top-0 h-full w-16 md:w-24 xl:w-28 text-[#8FA88F]/70 pointer-events-none" flip />

      <div className="container relative sm:px-16 md:px-24 xl:px-32 pt-24 pb-14 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5 flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Since Generations · Sholavandan, Tamil Nadu
            </p>

            <div className="flex items-center gap-3 mb-3">
              <img src={leafIcon} alt="Vetri Leaf logo" width={240} height={224} className="h-12 md:h-14 w-auto object-contain" />
              <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold leading-none tracking-tight text-primary">
                Vetri Leaf
              </h1>
            </div>

            <p className="font-script text-[28px] sm:text-4xl md:text-[40px] lg:text-[36px] xl:text-[40px] leading-[1.3] text-gold-ink mb-6 text-balance">
              Sholavandan GI Certified Betel Leaf
            </p>

            <p className="text-lg md:text-xl font-semibold text-primary leading-snug mb-3 max-w-xl">
              Premium Bulk Supply for Weddings, Thamboolam &amp; Puja
            </p>
            <p className="font-book text-lg md:text-xl leading-relaxed text-foreground/80 mb-8 max-w-xl">
              Harvested fresh every morning from our heritage farms along the Vaigai river basin. No middlemen. No cold storage. Pure farm-direct freshness.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-8 whitespace-nowrap rounded-full bg-primary text-primary-foreground text-base font-semibold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" /> Order on WhatsApp
              </a>
              <a
                href="tel:+919600441284"
                className="inline-flex items-center justify-center gap-2.5 h-14 px-7 whitespace-nowrap rounded-full border-2 border-primary/30 text-primary text-base font-semibold hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-5 w-5" aria-hidden="true" /> Call +91 96004 41284
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-border">
              <button type="button" onClick={() => setCertOpen(true)} className="group flex items-center gap-3 text-left">
                <GIBadge size="sm" />
                <span>
                  <span className="block font-semibold text-primary leading-tight">GI Certified</span>
                  <span className="block text-sm text-gold-ink underline underline-offset-2 group-hover:no-underline">View certificate</span>
                </span>
              </button>
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <Truck className="h-5 w-5 text-gold-ink" aria-hidden="true" /> Free delivery above ₹2500
              </p>
              <h2 className="tamil-text text-lg font-semibold text-gold-ink w-full" lang="ta">
                சோழவந்தான் புவிசார் குறியீடு வெற்றிலை
              </h2>
            </div>
          </div>

          {/* Arched photo */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-[78%] max-w-[300px] sm:max-w-[360px] lg:w-full lg:max-w-[440px]">
              {/* Offset gold outline arch */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-full rounded-b-3xl border-2 border-accent/60" aria-hidden="true" />
              <div className="relative rounded-t-full rounded-b-3xl overflow-hidden aspect-[3/4] shadow-2xl shadow-primary/20 ring-4 ring-[#FBF8F1]">
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
              {/* Round inset: the farmer in our garden */}
              <div className="absolute -left-6 sm:-left-10 bottom-8 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#FBF8F1] shadow-xl">
                <img src={farmerWalking} alt="Farmer walking between rows of betel vines" width={825} height={1100} loading="lazy" className="w-full h-full object-cover" />
              </div>
              {/* Label */}
              <p className="absolute -right-2 sm:-right-6 top-[18%] rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold px-4 py-2 shadow-lg">
                Our own garden
              </p>
            </div>
          </div>
        </div>
      </div>

      <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />
    </section>
  );
};

export default HeroSection;
