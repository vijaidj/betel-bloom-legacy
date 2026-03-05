import farmImg from "@/assets/farm-heritage.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img src={farmImg} alt="Sholavandan heritage betel leaf farm in Tamil Nadu" className="w-full h-[400px] object-cover" loading="lazy" />
        </div>

        {/* Text */}
        <div>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">A Legacy of Freshness</h2>
          <p className="text-sm text-muted-foreground mb-3 font-medium">Generations of Excellence from Sholavandan</p>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              Our betel leaf farm in Sholavandan has been cultivating premium vetrilai for generations.
              The unique fertile soil of the Vaigai river basin gives our leaves their distinct taste,
              aroma, and texture – making them the most sought-after betel leaves in Tamil Nadu.
            </p>
            <p>
              Today, our farm is proudly protected by a Government of India Geographical
              Indication (GI) tag – a mark of authenticity and unmatched quality that
              no other betel leaf can claim.
            </p>
          </div>

          {/* Tamil decorative divider */}
          <div className="border-t border-accent/30 pt-6">
            <p className="text-accent font-semibold text-center italic" lang="ta">
              "வெற்றிலையில் சோழவந்தான் – தரத்தில் முதன்மை"
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              In betel leaf, Sholavandan is the finest
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
