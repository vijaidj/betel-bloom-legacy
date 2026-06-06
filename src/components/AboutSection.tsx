import { Award, Leaf, Heart } from "lucide-react";
import farmImg from "@/assets/farm-heritage.jpg";

const milestones = [
  { year: "1960s", label: "Farm Founded", desc: "3rd generation betel farmers in Sholavandan" },
  { year: "2019", label: "GI Certified", desc: "Govt. of India Geographical Indication tag" },
  { year: "Today", label: "5000+ Weddings", desc: "Trusted by families across India & abroad" },
];

const AboutSection = () => (
  <section id="about" className="py-24 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">

        {/* Image with floating stat badges */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <img
              src={farmImg}
              alt="Sholavandan heritage betel leaf farm in Tamil Nadu"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
            {/* Dark overlay for badge contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent rounded-2xl" />
          </div>

          {/* Floating stat badges */}
          <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl shadow-primary/10 text-center">
            <div className="text-2xl font-bold text-primary font-heading">60+</div>
            <div className="text-xs text-muted-foreground font-medium">Years Legacy</div>
          </div>

          <div className="absolute top-1/2 -left-5 -translate-y-1/2 bg-accent text-accent-foreground rounded-2xl px-5 py-3 shadow-xl shadow-accent/20 text-center">
            <div className="text-2xl font-bold font-heading">5000+</div>
            <div className="text-xs font-medium opacity-80">Weddings Served</div>
          </div>

          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl shadow-primary/10 flex items-center gap-2.5">
            <Award className="h-5 w-5 text-accent" />
            <div>
              <div className="text-sm font-bold text-primary leading-none">GI Certified</div>
              <div className="text-xs text-muted-foreground">Govt. of India</div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="pt-8 lg:pt-0">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-5 leading-tight">
            A Legacy of Freshness
          </h2>
          <p className="text-sm text-muted-foreground mb-2 font-medium">Generations of Excellence from Sholavandan</p>

          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8 text-sm">
            <p>
              Our betel leaf farm in Sholavandan has been cultivating premium vetrilai for generations.
              The unique fertile soil of the Vaigai river basin gives our leaves their distinct taste,
              aroma, and texture — making them the most sought-after betel leaves in Tamil Nadu.
            </p>
            <p>
              Today, our farm is proudly protected by a Government of India Geographical Indication (GI)
              tag — a mark of authenticity and unmatched quality that no other betel leaf can claim.
            </p>
          </div>

          {/* Milestone timeline */}
          <div className="space-y-0 mb-8">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-4 items-start">
                {/* Line + dot */}
                <div className="flex flex-col items-center shrink-0 w-10">
                  <div className="w-3 h-3 rounded-full bg-accent border-2 border-accent/40 mt-1 shrink-0" />
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-border min-h-[2.5rem]" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">{m.year}</span>
                    <span className="font-semibold text-primary text-sm">{m.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tamil quote */}
          <div className="border-t border-accent/25 pt-5">
            <p className="text-accent font-semibold italic text-sm" lang="ta">
              "வெற்றிலையில் சோழவந்தான் – தரத்தில் முதன்மை"
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              In betel leaf, Sholavandan is the finest
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default AboutSection;
