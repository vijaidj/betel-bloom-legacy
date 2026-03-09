import realLeaf1 from "@/assets/real-betel-leaf-1.jpg";
import realPlant from "@/assets/real-betel-plant.jpg";
import realLeaf2 from "@/assets/real-betel-leaf-2.jpg";
import realNutsLime from "@/assets/real-betel-nuts-lime.jpg";
import realLeaf3 from "@/assets/real-betel-leaf-3.jpg";
import realPaan from "@/assets/real-paan-making.jpg";

const images = [
  { src: realLeaf1, alt: "Fresh betel leaves from Sholavandan farm", label: "Fresh Betel Leaves" },
  { src: realPlant, alt: "Betel vine plant growing in Sholavandan", label: "Betel Vine Plant" },
  { src: realLeaf2, alt: "Close-up of premium betel leaf", label: "Premium Leaf" },
  { src: realNutsLime, alt: "Traditional betel leaf with nuts and lime", label: "Traditional Setup" },
  { src: realLeaf3, alt: "Sholavandan betel leaf detail", label: "Leaf Detail" },
  { src: realPaan, alt: "Traditional paan making with betel leaves", label: "Paan Making" },
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
