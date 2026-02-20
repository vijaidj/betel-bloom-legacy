import { Leaf, Truck, ShieldCheck } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Our Heritage</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Native Farmers of Sholavandan</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            For generations, our family has cultivated premium betel leaves in the fertile lands of Sholavandan, Tamil Nadu. 
            We are not traders or resellers — we are the farmers. Every leaf you receive is grown, harvested, 
            and packed by our own hands.
          </p>
        </div>

        {/* Value props */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 mb-4">
              <Leaf className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">We Grow It</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our betel vines are nurtured using centuries-old cultivation methods passed down through our family — no chemicals, no shortcuts.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 mb-4">
              <ShieldCheck className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">We Quality Check</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every batch is hand-sorted and inspected for size, colour, and freshness before dispatch — ensuring only the finest leaves reach you.
            </p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-primary/5 border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/15 mb-4">
              <Truck className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">We Deliver Direct</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Harvested at dawn, packed with care, and shipped the same day. No middlemen, no warehouses — farm to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
