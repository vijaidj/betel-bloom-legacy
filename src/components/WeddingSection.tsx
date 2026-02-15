import { Button } from "@/components/ui/button";

const WeddingSection = () => (
  <section id="wedding" className="py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center border-2 border-accent/30 rounded-lg p-10 md:p-16 bg-accent/5">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Special Orders</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Bulk Betel Leaves for Weddings &amp; Ceremonies
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
          Planning a wedding or religious ceremony? We supply premium betel leaves in large quantities 
          with reliable delivery across Tamil Nadu and beyond. Custom packaging available for special occasions.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8" asChild>
          <a href="#contact">Request a Quote</a>
        </Button>
      </div>
    </div>
  </section>
);

export default WeddingSection;
