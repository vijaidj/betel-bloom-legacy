import { useRef, useState } from "react";
import { Play } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import betelBundles from "@/assets/betel-bundles-fresh.webp";
import leavesCloseup from "@/assets/farm/farm-leaves-closeup.webp";
import gardenPath from "@/assets/farm/farm-garden-path.webp";
import farmerWalking from "@/assets/farm/farm-farmer-walking.webp";
import vineRows from "@/assets/farm/farm-vine-rows.webp";
import peacock from "@/assets/farm/farm-peacock.webp";
import harvestVideo from "@/assets/farm/farm-harvest.mp4";
import harvestPoster from "@/assets/farm/farm-harvest-poster.webp";
import pickingVideo from "@/assets/farm/farm-hand-picking.mp4";
import pickingPoster from "@/assets/farm/farm-hand-picking-poster.webp";
import leafVideo from "@/assets/farm/farm-leaf-in-hand.mp4";
import leafPoster from "@/assets/farm/farm-leaf-in-hand-poster.webp";
import walkVideo from "@/assets/farm/farm-vine-walk.mp4";
import walkPoster from "@/assets/farm/farm-vine-walk-poster.webp";

const videos = [
  { src: harvestVideo, poster: harvestPoster, label: "Harvested by hand", alt: "Farmer hand-picking betel leaves from the vine" },
  { src: pickingVideo, poster: pickingPoster, label: "Picked leaf by leaf", alt: "Farmer reaching into the vine to pick betel leaves one at a time" },
  { src: leafVideo, poster: leafPoster, label: "A leaf, just picked", alt: "A betel leaf plucked from the vine and held up in the garden" },
  { src: walkVideo, poster: walkPoster, label: "Inside the vine garden", alt: "Walking between rows of betel vines" },
];

const images = [
  { src: leavesCloseup, alt: "Betel leaves growing on the vine at our Sholavandan farm", label: "Leaves on the vine" },
  { src: gardenPath, alt: "Path between betel vine rows with a drip irrigation line", label: "Drip-irrigated rows" },
  { src: farmerWalking, alt: "Farmer walking between rows of betel vines", label: "Morning rounds" },
  { src: vineRows, alt: "Rows of betel vines climbing their supports", label: "Rows of betel vines" },
  { src: peacock, alt: "Peacock perched on a wall at the farm", label: "A visitor at the farm" },
  { src: betelBundles, alt: "Fresh betel leaf bundles ready for delivery", label: "Farm fresh bundles" },
];

/**
 * Poster first; the clip is only fetched once the visitor presses play.
 * Clips carry a quiet ambient garden track, so they are never autoplayed.
 */
const FarmVideo = ({ src, poster, label, alt }: (typeof videos)[number]) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    ref.current?.play();
  };

  return (
    <figure className="shrink-0 w-[64vw] sm:w-auto snap-center">
      <div className="relative rounded-xl overflow-hidden aspect-[9/16] border border-border shadow-sm bg-primary/10">
        <video
          ref={ref}
          src={src}
          poster={poster}
          preload="none"
          loop
          playsInline
          controls={started}
          onPlay={(e) => {
            // One clip at a time, so their sound never overlaps
            document.querySelectorAll<HTMLVideoElement>("#gallery video").forEach((v) => {
              if (v !== e.currentTarget) v.pause();
            });
          }}
          aria-label={alt}
          className="w-full h-full object-cover"
        />
        {!started && (
          <button
            type="button"
            onClick={start}
            aria-label={`Play video: ${label}`}
            className="group absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/55 via-transparent to-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
          >
            <span className="w-14 h-14 rounded-full bg-background/90 text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Play className="h-5 w-5 ml-0.5 fill-current" aria-hidden="true" />
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-sm font-medium text-primary mt-3 text-center">{label}</figcaption>
    </figure>
  );
};

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <SectionHeader
          eyebrow="Our farm"
          title="Grown by us, not sourced"
          description="Every leaf comes from our own betel gardens in Sholavandan. This is unstaged footage of how we grow and pick them."
          align="center"
        />

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-2 sm:mx-auto sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible max-w-xl lg:max-w-5xl mb-12">
        {videos.map((v) => (
          <FarmVideo key={v.label} {...v} />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {images.map((img) => (
          <div key={img.label} className="group relative rounded-xl overflow-hidden aspect-[4/5] border border-border shadow-sm hover:shadow-xl transition-all">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
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
