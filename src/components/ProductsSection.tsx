import { Button } from "@/components/ui/button";
import freshLeavesImg from "@/assets/fresh-betel-leaves.jpg";
import powderTeaImg from "@/assets/betel-powder-tea.jpg";
import teaBagsImg from "@/assets/betel-tea-bags.jpg";

const products = [
  {
    title: "Fresh Betel Leaves",
    desc: "Hand-picked, premium quality betel leaves — perfect for weddings, puja ceremonies, and daily use. Available in bulk quantities with same-day harvest freshness.",
    image: freshLeavesImg,
  },
  {
    title: "Betel Leaf Powder",
    desc: "100% natural betel leaf powder for herbal tea and wellness. Sun-dried and finely ground, retaining all traditional health benefits.",
    image: powderTeaImg,
  },
  {
    title: "Betel Leaf Tea Bags",
    desc: "Convenient herbal tea bags crafted from premium betel leaf powder. A refreshing and healthy daily ritual — simply steep and enjoy.",
    image: teaBagsImg,
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">What We Offer</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Products</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((p) => (
          <div key={p.title} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-primary mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                <a href="#contact">Enquire</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
