import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Clock } from "lucide-react";

const packages = [
  {
    title: "Small Pack",
    subtitle: "Ideal for small poojas & personal use",
    quantity: "100 Fresh Betel Leaves",
    price: "Contact for Price",
    popular: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20the%20Small%20Pack%20(100%20leaves)%20of%20Sholavandan%20Betel%20Leaf",
    cta: "Order Now",
  },
  {
    title: "Function Pack",
    subtitle: "Perfect for housewarming, puberty & small functions",
    quantity: "500 Fresh Betel Leaves",
    price: "Contact for Price",
    popular: true,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20the%20Function%20Pack%20(500%20leaves)%20of%20Sholavandan%20Betel%20Leaf",
    cta: "Order Now",
  },
  {
    title: "Wedding Bulk Order",
    subtitle: "Best for weddings, thamboolam & large events",
    quantity: "1000+ Fresh Betel Leaves",
    price: "Call for Best Price",
    popular: false,
    whatsapp: "https://wa.me/919600441284?text=Hi%2C%20I%20need%20a%20bulk%20quote%20for%20Wedding%20order%20of%20Sholavandan%20Betel%20Leaf",
    cta: "Get Quote",
  },
];

const PackagesSection = () => (
  <section id="products" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Our Packages</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Choose Your Package</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Fresh GI-certified Sholavandan betel leaves for every occasion — from small poojas to grand weddings.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className={`relative rounded-2xl border-2 p-8 text-center transition-all duration-300 hover:shadow-xl ${
              pkg.popular
                ? "border-accent bg-accent/5 shadow-lg scale-[1.03]"
                : "border-border bg-card hover:border-accent/30"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="h-3 w-3" /> Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-primary mb-2">{pkg.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
            <div className="py-4 border-y border-border/50 mb-6">
              <p className="text-2xl font-bold text-accent mb-1">{pkg.quantity}</p>
              <p className="text-sm text-muted-foreground">{pkg.price}</p>
            </div>
            <Button
              size="lg"
              className={`w-full h-12 gap-2 ${
                pkg.popular
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
              asChild
            >
              <a href={pkg.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> {pkg.cta}
              </a>
            </Button>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1.5">
        <Clock className="h-4 w-4 text-accent" /> Order 48 hours before your function for guaranteed freshness &amp; timely delivery.
      </p>
    </div>
  </section>
);

export default PackagesSection;
