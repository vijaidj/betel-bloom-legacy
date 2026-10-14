import { useState } from "react";
import { MessageCircle } from "lucide-react";
import gardenPath from "@/assets/farm/farm-garden-path.webp";
import GIBadge from "@/components/GIBadge";
import GICertificateModal from "@/components/GICertificateModal";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

// Replaces the former "health benefits" cards. Cultural uses only — no medical claims.
const traditions = [
  {
    ta: "தாம்பூலம்",
    en: "Thamboolam",
    desc: "Betel leaves and areca nut offered to guests and elders as a mark of respect and blessing.",
  },
  {
    ta: "திருமணம்",
    en: "Weddings",
    desc: "Part of engagement and wedding rituals, and given to guests in thamboolam bags as they leave.",
  },
  {
    ta: "பூஜை",
    en: "Pooja",
    desc: "Placed with fruit and flowers as an offering in temple and home pooja.",
  },
  {
    ta: "விருந்தோம்பல்",
    en: "Hospitality",
    desc: "Served as vetrilai paakku after a festive meal, a traditional gesture of welcome.",
  },
];

const AboutSection = () => {
  const [certOpen, setCertOpen] = useState(false);

  return (
    <section id="about" className="section bg-background">
      <div className="container">
        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-20">
          <div className="lg:col-span-7 lg:order-2">
            <p className="eyebrow mb-3">Our story</p>
            <h2 className="font-heading text-3xl md:text-[42px] leading-[1.12] text-primary mb-2">A Legacy of Freshness</h2>
            <p className="font-medium text-gold-ink mb-5">Generations of Excellence from Sholavandan</p>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 max-w-xl">
              <p>
                Every leaf is hand-picked from our 3rd-generation betel farms in Sholavandan. The unique fertile soil of the Vaigai river basin gives our leaves their distinct taste, aroma, and texture.
              </p>
              <p>Our farm is proudly protected by a Government of India GI tag — a mark of authenticity and unmatched quality.</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 p-5 rounded-xl border border-border bg-card max-w-xl">
              <GIBadge size="md" />
              <div className="flex-1">
                <p className="font-semibold text-primary">Geographical Indication of India</p>
                <p className="text-sm text-muted-foreground">Sholavandan vetrilai is a GI-registered variety from Madurai district.</p>
              </div>
              <button
                type="button"
                onClick={() => setCertOpen(true)}
                className="shrink-0 inline-flex items-center justify-center h-11 px-4 rounded-md border border-primary/25 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                View certificate
              </button>
            </div>

            <figure className="mt-8 border-l-2 border-accent pl-5 max-w-xl">
              <blockquote className="font-semibold text-gold-ink tamil-text text-lg" lang="ta">
                "வெற்றிலையில் சோழவந்தான் – தரத்தில் முதன்மை"
              </blockquote>
              <figcaption className="text-sm text-muted-foreground mt-1">In betel leaf, Sholavandan is the finest</figcaption>
            </figure>
          </div>

          <div className="lg:col-span-5 lg:order-1">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[4/5] shadow-xl shadow-primary/10">
              <img
                src={gardenPath}
                alt="Path between betel vine rows with a drip irrigation line at our Sholavandan farm"
                width={825}
                height={1100}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Traditional uses — older links pointed here as #benefits */}
        <div id="benefits" className="mb-16 md:mb-20">
          <div className="max-w-2xl mb-8">
            <p className="eyebrow mb-3">Traditional uses</p>
            <h3 className="font-heading text-2xl md:text-3xl text-primary">Part of every Tamil celebration</h3>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t border-border pt-8">
            {traditions.map((t, i) => (
              <li key={t.en}>
                <span className="block font-heading text-sm text-gold-ink mb-3">0{i + 1}</span>
                <p className="tamil-text text-lg font-semibold text-primary leading-snug" lang="ta">{t.ta}</p>
                <p className="font-semibold text-primary mb-2">{t.en}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Tamil message — formerly its own full-width band */}
        <div className="rounded-2xl bg-forest-deep text-primary-foreground px-6 py-10 md:px-14 md:py-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7" lang="ta">
            <h3 className="tamil-text text-2xl md:text-3xl font-semibold text-accent mb-4">சோழவந்தான் வெற்றிலை</h3>
            <div className="tamil-text space-y-3 text-white/80 leading-relaxed">
              <p>சோழவந்தான் வெற்றிலை – திருமணம், தாம்பூலம், பூஜை மற்றும் விழாக்களுக்கு ஏற்றது.</p>
              <p>
                GI சான்றிதழ் பெற்ற தரமான வெற்றிலை. வைகை நதி படுகையின் வளமான மண்ணில் விளைந்த இந்த வெற்றிலை, தனித்துவமான மணம் மற்றும் சுவையுடன் விளங்குகிறது.
              </p>
              <p>தமிழ்நாடு முழுவதும் டெலிவரி வசதி உள்ளது.</p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:text-right" lang="ta">
            <p className="tamil-text font-semibold text-accent text-lg mb-4">இப்போதே ஆர்டர் செய்யுங்கள்!</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tamil-text inline-flex items-center justify-center gap-2 min-h-12 px-5 py-2 rounded-md bg-accent text-accent-foreground text-sm md:text-base font-semibold hover:bg-accent/90 transition-colors w-full sm:w-auto sm:whitespace-nowrap"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" /> வாட்ஸ்அப்பில் ஆர்டர் செய்யுங்கள்
            </a>
          </div>
        </div>
      </div>

      <GICertificateModal open={certOpen} onOpenChange={setCertOpen} />
    </section>
  );
};

export default AboutSection;
