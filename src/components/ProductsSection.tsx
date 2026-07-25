import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products, whatsappLink } from "@/data/products";

const ProductsSection = () => (
  <section id="all-products" className="py-24 bg-primary/5">
    <div className="container mx-auto px-4">

      <SectionHeader
        eyebrow="Our range"
        title="Betel leaf, and everything from it"
        description="Every item begins with leaves grown on our own heritage farms in Sholavandan. No middlemen, no compromise."
        align="center"
      />

      {/* Farmer Direct Banner */}
      <div className="max-w-4xl mx-auto mb-14 bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <Leaf className="h-8 w-8 text-accent" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1 font-heading">We Grow. We Harvest. We Deliver.</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            As 3rd-generation native farmers of Sholavandan, we cultivate every betel leaf ourselves using centuries-old
            methods along the fertile Vaigai river basin. When you buy from us, you get the freshest produce —
            harvested that morning and shipped the same day. No warehouses, no chemicals, no artificial preservatives.
          </p>
        </div>
      </div>

      {/* Product Grid — 6 products in 3-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.slug}
            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <Link to={`/products/${p.slug}`} className="aspect-square overflow-hidden relative block">
              <img
                src={p.image}
                alt={p.imageAlt}
                width={600}
                height={600}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                {p.tagline}
              </span>
            </Link>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-2">
                <Link to={`/products/${p.slug}`} className="hover:text-accent transition-colors">{p.name}</Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-3">{p.cardDescription}</p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 group/btn" asChild>
                <a href={whatsappLink(`Hi, I would like to order ${p.name} from VetriLeaf.`)} target="_blank" rel="noopener noreferrer">
                  Enquire on WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-14">
        <p className="text-muted-foreground mb-4 text-sm">
          Looking for custom quantities, white-label packaging, or bulk export orders? We've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 gap-2" asChild>
            <Link to="/products">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-accent/40 text-primary hover:bg-accent/5 px-8" asChild>
            <a href="#contact">Get custom quote</a>
          </Button>
        </div>
      </div>

    </div>
  </section>
);

export default ProductsSection;
