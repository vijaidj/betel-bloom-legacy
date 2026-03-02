import { Heart, ShieldCheck, Smile, Brain, Droplets, Flame } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Heart Health", desc: "Supports cardiovascular wellness and healthy blood circulation." },
  { icon: ShieldCheck, title: "Immunity Booster", desc: "Rich in antioxidants that strengthen the body's natural defences." },
  { icon: Smile, title: "Oral Health", desc: "Traditionally used to freshen breath and maintain dental hygiene." },
  { icon: Brain, title: "Mental Clarity", desc: "Natural compounds that aid focus and cognitive function." },
  { icon: Droplets, title: "Detoxification", desc: "Helps purify the body and supports healthy digestion." },
  { icon: Flame, title: "Anti-inflammatory", desc: "Contains natural anti-inflammatory and antiseptic properties." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 bg-primary/5 betel-pattern">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Nature's Gift</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Health Benefits of Sholavandan Vetrilai</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Revered in Ayurveda for centuries, the betel leaf offers a wealth of health benefits backed by tradition and modern research.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="flex gap-4 p-5 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow">
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-accent/15">
              <b.icon className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
