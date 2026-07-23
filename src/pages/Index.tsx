import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";

// Above the fold — loaded eagerly above.
// Everything below is deferred so it does not block first paint or LCP.
const PackagesSection    = lazy(() => import("@/components/PackagesSection"));
const ProductsSection    = lazy(() => import("@/components/ProductsSection"));
const WeddingSection     = lazy(() => import("@/components/WeddingSection"));
const OccasionsSection   = lazy(() => import("@/components/OccasionsSection"));
const GallerySection     = lazy(() => import("@/components/GallerySection"));
const TestimonialsSection= lazy(() => import("@/components/TestimonialsSection"));
const DeliverySection    = lazy(() => import("@/components/DeliverySection"));
const AboutSection       = lazy(() => import("@/components/AboutSection"));
const BenefitsSection    = lazy(() => import("@/components/BenefitsSection"));
const TamilSection       = lazy(() => import("@/components/TamilSection"));
const FAQSection         = lazy(() => import("@/components/FAQSection"));
const SocialSection      = lazy(() => import("@/components/SocialSection"));
const MapContactSection  = lazy(() => import("@/components/MapContactSection"));
const ContactSection     = lazy(() => import("@/components/ContactSection"));
const Footer             = lazy(() => import("@/components/Footer"));
const WhatsAppButton     = lazy(() => import("@/components/WhatsAppButton"));
const ScrollToTop        = lazy(() => import("@/components/ScrollToTop"));

// Reserves vertical space while a section loads so nothing shifts.
const SectionFallback = () => <div className="min-h-[400px]" aria-hidden="true" />;

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HighlightsSection />

      <Suspense fallback={<SectionFallback />}>
        <PackagesSection />
        <ProductsSection />
        <WeddingSection />
        <OccasionsSection />
        <GallerySection />
        <TestimonialsSection />
        <DeliverySection />
        <AboutSection />
        <BenefitsSection />
        <TamilSection />
        <FAQSection />
        <SocialSection />
        <MapContactSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </Suspense>
    </main>
  );
};

export default Index;
