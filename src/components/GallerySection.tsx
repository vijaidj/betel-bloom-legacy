import freshLeaves from "@/assets/fresh-betel-leaves.jpg";
import farmImg from "@/assets/farm-heritage.jpg";
import heroBetel from "@/assets/hero-betel.jpg";
import powderTea from "@/assets/betel-powder-tea.jpg";
import teaBags from "@/assets/betel-tea-bags.jpg";
import giScreenshot from "@/assets/gi-screenshot.png";

const images = [
  { src: freshLeaves, alt: "Fresh Sholavandan betel leaves ready for wedding thamboolam", label: "Fresh Betel Leaves" },
  { src: heroBetel, alt: "Wedding thamboolam arrangement with Sholavandan vetrilai", label: "Wedding Thamboolam" },
  { src: powderTea, alt: "Betel leaf packaging for bulk delivery", label: "Leaf Packaging" },
  { src: farmImg, alt: "Sholavandan betel leaf farm harvest", label: "Farm Harvest" },
  { src: teaBags, alt: "Bulk order packing of GI certified betel leaves", label: "Bulk Order Packing" },
  { src: giScreenshot, alt: "GI certified Sholavandan betel leaf product", label: "GI Certified Product" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Gallery</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">From Our Farm to Your Function</h2>
        <p className="text-muted-foreground">Fresh from the Vaigai river basin farms of Sholavandan</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img) => (
          <div key={img.label} className="group relative rounded-xl overflow-hidden aspect-square border border-border shadow-sm hover:shadow-xl transition-all">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-primary-foreground font-semibold text-sm">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
