import { MessageCircle } from "lucide-react";
import FAQSection from "@/components/FAQSection";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

// Wording unchanged. Star ratings and "verified" badges are not shown, since
// these reviews cannot be independently verified on the site.
const testimonials = [
  {
    name: "Priya Ramakrishnan",
    initials: "PR",
    location: "Madurai",
    occasion: "Wedding",
    date: "March 2024",
    text: "Leaves were incredibly fresh and beautifully packed. Everyone at the wedding appreciated the quality. The GI tag really shows — these are clearly a class apart from market leaves.",
  },
  {
    name: "Ramesh Kumar",
    initials: "RK",
    location: "Dindigul",
    occasion: "Housewarming",
    date: "January 2024",
    text: "Delivered exactly on time for our gruhapravesam. The leaves were fragrant and fresh — still bright green on the day of the function. Will definitely order again for our next event.",
  },
  {
    name: "Lakshmi Subramaniam",
    initials: "LS",
    location: "Chennai",
    occasion: "Temple Function",
    date: "February 2024",
    text: "GI certified quality is clearly visible. Guests complimented the freshness throughout the day. The packaging was excellent — not a single leaf damaged. Great service and prompt response on WhatsApp!",
  },
];

/** Customer words, then the FAQ: both answer "can I trust this order?" in one place. */
const TestimonialsSection = () => (
  <section className="section bg-background">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-[42px] leading-[1.12] text-primary mb-3">What Our Customers Say</h2>
          <p className="text-muted-foreground">Trusted by families across India for their most special moments</p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto shrink-0 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Order on WhatsApp
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 pb-2 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible mb-16 md:mb-20">
        {testimonials.map((t) => (
          <figure key={t.name} className="snap-start shrink-0 w-[85%] md:w-auto flex flex-col bg-card border border-border rounded-xl p-6">
            <blockquote className="text-foreground/85 leading-relaxed mb-5 flex-1">
              <span className="font-heading text-3xl leading-none text-accent mr-1 align-[-0.35em]" aria-hidden="true">“</span>
              {t.text}
            </blockquote>
            <figcaption className="flex items-center gap-3 pt-4 border-t border-border/70">
              <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                {t.initials}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-primary text-sm truncate">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.location} · {t.occasion} · {t.date}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <FAQSection embedded />
    </div>
  </section>
);

export default TestimonialsSection;
