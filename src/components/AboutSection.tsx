import { Leaf, Truck, ShieldCheck, Clock, Users } from "lucide-react";
import farmImg from "@/assets/farm-heritage.jpg";

const stats = [
  { value: "50+", label: "Years of Farming" },
  { value: "3", label: "Generations" },
  { value: "10K+", label: "Leaves Daily" },
  { value: "500+", label: "Happy Customers" },
];

const steps = [
  {
    icon: Leaf,
    title: "We Grow It",
    desc: "Our betel vines are nurtured using centuries-old cultivation methods passed down through our family — no chemicals, no shortcuts.",
  },
  {
    icon: ShieldCheck,
    title: "We Quality Check",
    desc: "Every batch is hand-sorted and inspected for size, colour, and freshness before dispatch — ensuring only the finest leaves reach you.",
  },
  {
    icon: Truck,
    title: "We Deliver Direct",
    desc: "Harvested at dawn, packed with care, and shipped the same day. No middlemen, no warehouses — farm to your doorstep.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      {/* Split layout: Image + Text */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto mb-20">
        {/* Image side */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src={farmImg} alt="Betel leaf farm in Sholavandan" className="w-full h-[400px] lg:h-[500px] object-cover" />
          </div>
          {/* Floating stats card */}
          <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-primary-foreground rounded-2xl p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">3rd Gen</p>
                <p className="text-xs text-primary-foreground/70">Heritage Farmers</p>
              </div>
            </div>
          </div>
          {/* Decorative accent */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-3xl -z-10" />
        </div>

        {/* Text side */}
        <div>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Our Heritage</p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Native Farmers of<br />Sholavandan
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For generations, our family has cultivated premium betel leaves in the fertile lands of Sholavandan, Tamil Nadu. 
            We are not traders or resellers — <strong className="text-foreground">we are the farmers</strong>. Every leaf you receive is grown, harvested, 
            and packed by our own hands.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our cultivation practices honour centuries-old methods while meeting modern quality standards, 
            ensuring every leaf carries the authentic taste and aroma that Sholavandan betel is renowned for.
          </p>

          {/* Mini stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-3 rounded-xl bg-primary/5">
                <p className="text-2xl font-bold text-accent">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process steps — horizontal timeline style */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-primary">Farm to You — Our Process</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-0.5 bg-accent/20" />
          
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center px-6 py-8">
              {/* Step number circle */}
              <div className="relative z-10 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 border-2 border-accent/30 mb-5">
                <step.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="absolute top-8 left-1/2 -translate-x-1/2 -translate-y-full text-xs font-bold text-accent bg-background px-2">
                Step {i + 1}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
