import { Star, MessageCircle, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";
// TODO: Replace with your actual Google Business Review URL
const GOOGLE_REVIEWS_URL = "https://g.page/r/YOUR_GOOGLE_PLACE_ID/review";

const testimonials = [
  {
    name: "Priya Ramakrishnan",
    initials: "PR",
    location: "Madurai",
    occasion: "Wedding",
    date: "March 2024",
    text: "Leaves were incredibly fresh and beautifully packed. Everyone at the wedding appreciated the quality. The GI tag really shows — these are clearly a class apart from market leaves.",
    rating: 5,
    verified: true,
  },
  {
    name: "Ramesh Kumar",
    initials: "RK",
    location: "Dindigul",
    occasion: "Housewarming",
    date: "January 2024",
    text: "Delivered exactly on time for our gruhapravesam. The leaves were fragrant and fresh — still bright green on the day of the function. Will definitely order again for our next event.",
    rating: 5,
    verified: true,
  },
  {
    name: "Lakshmi Subramaniam",
    initials: "LS",
    location: "Chennai",
    occasion: "Temple Function",
    date: "February 2024",
    text: "GI certified quality is clearly visible. Guests complimented the freshness throughout the day. The packaging was excellent — not a single leaf damaged. Great service and prompt response on WhatsApp!",
    rating: 5,
    verified: true,
  },
];

const avatarColors = [
  "bg-emerald-700",
  "bg-amber-700",
  "bg-teal-700",
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Trusted by families across India for their most special moments
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
        {testimonials.map((t, i) => (
          <div key={t.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>

            {/* Review text */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic flex-1">"{t.text}"</p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className={`w-10 h-10 rounded-full ${avatarColors[i]} flex items-center justify-center shrink-0`}>
                <span className="text-white text-xs font-bold">{t.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-primary text-sm truncate">{t.name}</p>
                  {t.verified && (
                    <BadgeCheck className="h-3.5 w-3.5 text-accent shrink-0" aria-label="Verified customer" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground">{t.location} · {t.occasion} · {t.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Google Reviews CTA — commented until Google Business Profile is verified
      <div className="text-center max-w-xl mx-auto mb-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary border border-border/60 rounded-full px-5 py-2.5 transition-colors hover:border-accent/40 bg-card"
        >
          View all Google Reviews
        </a>
      </div>
      */}

      <div className="text-center">
        <p className="text-muted-foreground mb-4 font-medium">Join 5000+ Happy Families Worldwide – Order Today</p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base gap-2" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> Order on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
