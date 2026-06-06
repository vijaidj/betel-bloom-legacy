import { Star, MessageCircle, BadgeCheck, ExternalLink } from "lucide-react";
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

      {/* Google Reviews CTA */}
      <div className="text-center max-w-xl mx-auto mb-8">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary border border-border/60 rounded-full px-5 py-2.5 transition-colors hover:border-accent/40 bg-card"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          View all Google Reviews
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

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
