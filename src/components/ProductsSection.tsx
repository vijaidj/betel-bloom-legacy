import { Leaf, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    icon: Leaf,
    title: "Fresh Betel Leaves",
    desc: "Hand-picked, premium quality betel leaves — perfect for weddings, puja ceremonies, and daily use. Available in bulk quantities with same-day harvest freshness.",
  },
  {
    icon: Coffee,
    title: "Betel Leaf Powder",
    desc: "100% natural betel leaf powder for herbal tea and wellness. Sun-dried and finely ground, retaining all traditional health benefits.",
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Products</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {products.map((p) => (
          <Card key={p.title} className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/15 mb-5">
                <p.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{p.desc}</p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="#contact">Enquire</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
