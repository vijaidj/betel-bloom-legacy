import SectionHeader from "@/components/SectionHeader";
import realLeaf1 from "@/assets/real-betel-leaf-1.webp";
import realPlant from "@/assets/real-betel-plant.webp";
import betelBundles from "@/assets/betel-bundles-fresh.webp";

const images = [
  { src: realLeaf1, alt: "Fresh betel leaves from Sholavandan farm", label: "Fresh Betel Leaves" },
  { src: realPlant, alt: "Betel vine plant growing in Sholavandan", label: "Betel Vine Plant" },
  { src: betelBundles, alt: "Fresh betel leaf bundles ready for delivery", label: "Farm Fresh Bundles" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <SectionHeader
          eyebrow="Gallery"
          title="From our farm"
          align="center"
        />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
