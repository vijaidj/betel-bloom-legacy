import { Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const testimonials = [
  {
    name: "Priya Ramakrishnan",
    location: "Madurai | Wedding",
    text: "Leaves were incredibly fresh and beautifully packed. Everyone at the wedding appreciated the quality. Highly recommended!",
  },
  {
    name: "Ramesh Kumar",
    location: "Dindigul | Housewarming",
    text: "Delivered exactly on time. The leaves were fragrant and fresh. Will definitely order again for our next function.",
  },
  {
    name: "Lakshmi Subramaniam",
    location: "Chennai | Temple Function",
    text: "GI certified quality is clearly visible. Guests complimented the freshness. Great service!",
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Trusted by families across Tamil Nadu for their most special moments
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-primary text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground mb-4 font-medium">Join 500+ Happy Families – Order Today</p>
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
