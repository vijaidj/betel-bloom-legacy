import { Link } from "react-router-dom";
import { ChevronRight, Leaf, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import Seo from "@/components/Seo";
import { products, whatsappLink, SITE_URL } from "@/data/products";

const ProductsIndex = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "VetriLeaf Betel Leaf Products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
    ],
  };

  return (
    <>
      <Seo
        title="Betel Leaf Products | VetriLeaf"
        description="GI-certified Sholavandan betel leaf products: fresh leaves, powder, tea bags, oil, juice mix and infused water. Farm direct."
        keywords="betel leaf products, sholavandan vetrilai products, betel leaf powder, betel leaf tea, betel leaf oil, betel juice, betel leaf water"
        path="/products"
        schema={[itemListSchema, breadcrumbSchema]}
      />
      <Navbar />

      <main className="pt-28 md:pt-32">
        <nav aria-label="Breadcrumb" className="container mx-auto px-4 mb-6">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
            <li className="text-primary font-medium" aria-current="page">Products</li>
          </ol>
        </nav>

        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              <Leaf className="h-3 w-3" aria-hidden="true" /> Our Range
            </span>

            {/* Title left, description right — fills the grid width below while
                keeping the paragraph at a readable measure. */}
            <div className="grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-16 lg:items-end">
              <h1 className="text-4xl md:text-6xl lg:text-[68px] font-bold text-primary leading-[1.05] tracking-tight">
                Betel Leaf Products,<br className="hidden sm:block" /> Farm Direct
              </h1>
              <p className="text-[15px] md:text-base text-muted-foreground leading-[1.8] lg:pb-2">
                Every product here begins with GI-certified betel leaves grown on our own farms in
                Sholavandan, Madurai district. Fresh leaves for ceremony and tradition, and a small
                range of natural products made from the same harvest.
              </p>
            </div>

            <span className="block w-full h-px bg-border mt-10" aria-hidden="true" />
          </div>
        </section>

        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {products.map((p) => (
              <article key={p.slug} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow flex flex-col">
                <Link to={`/products/${p.slug}`} className="aspect-square overflow-hidden block">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    width={600}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{p.tagline}</span>
                  <h2 className="text-lg font-semibold text-primary mb-2">
                    <Link to={`/products/${p.slug}`} className="hover:text-accent transition-colors">{p.name}</Link>
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.cardDescription}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-border gap-1.5 text-xs" asChild>
                      <Link to={`/products/${p.slug}`}>
                        Details <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                    <Button size="sm" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5 text-xs" asChild>
                      <a href={whatsappLink(`Hi, I would like to order ${p.name} from VetriLeaf.`)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-3 w-3" /> Order
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14 max-w-xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for bulk quantities, wedding orders or wholesale supply? Tell us what you need.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 gap-2" asChild>
              <a href={whatsappLink("Hi, I would like a bulk quote from VetriLeaf.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Request a bulk quote
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
};

export default ProductsIndex;
