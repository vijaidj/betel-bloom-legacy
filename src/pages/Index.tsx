import { lazy, Suspense } from "react";
import Seo from "@/components/Seo";
import { SITE_URL, products } from "@/data/products";
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
const MapContactSection  = lazy(() => import("@/components/MapContactSection"));
const ContactSection     = lazy(() => import("@/components/ContactSection"));
const Footer             = lazy(() => import("@/components/Footer"));
const WhatsAppButton     = lazy(() => import("@/components/WhatsAppButton"));
const ScrollToTop        = lazy(() => import("@/components/ScrollToTop"));

// Reserves vertical space while a section loads so nothing shifts.

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Sri Sholavandan Heritage Vetrilai",
  alternateName: "VetriLeaf",
  description: "GI Certified Sholavandan betel leaf farm and supplier for weddings, pooja and bulk orders.",
  url: SITE_URL,
  telephone: "+919600441284",
  email: "vetrileaf@gmail.com",
  openingHours: "Mo-Su 06:00-20:00",
  priceRange: "\u20b9\u20b9",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sholavandan",
    addressLocality: "Madurai District",
    addressRegion: "Tamil Nadu",
    postalCode: "625221",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 9.93, longitude: 77.88 },
  areaServed: [
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "Country", name: "India" },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VetriLeaf Products",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `${SITE_URL}/products/${p.slug}`,
  })),
};

const SectionFallback = () => <div className="min-h-[400px]" aria-hidden="true" />;

const Index = () => {
  return (
    <main>
      <Seo
        title="Sholavandan GI Betel Leaf Online | VetriLeaf"
        description="GI-certified Sholavandan betel leaf, farm direct from Madurai. Fresh leaves, powder, tea, oil and juice mix. Pan India delivery."
        keywords="sholavandan betel leaf, vetrilai online, GI certified betel leaf, fresh betel leaf, betel leaf powder, betel leaf tea, wedding vetrilai, thamboolam"
        path="/"
        schema={[localBusinessSchema, itemListSchema]}
      />
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
