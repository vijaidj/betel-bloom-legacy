import { useEffect, useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import leafIcon from "@/assets/leaf-icon.webp";
import betelBundles from "@/assets/betel-bundles-fresh.webp";
import leavesCloseup from "@/assets/farm/farm-leaves-closeup.webp";
import gardenPath from "@/assets/farm/farm-garden-path.webp";
import farmerWalking from "@/assets/farm/farm-farmer-walking.webp";
import newField from "@/assets/farm/farm-new-field.webp";
import newFieldClose from "@/assets/farm/farm-new-field-close.webp";
import newPlantingVideo from "@/assets/farm/farm-new-planting.mp4";
import newPlantingPoster from "@/assets/farm/farm-new-planting-poster.webp";
import harvestVideo from "@/assets/farm/farm-harvest-picking.mp4";
import harvestPoster from "@/assets/farm/farm-harvest-picking-poster.webp";
import leafVideo from "@/assets/farm/farm-leaf-in-hand.mp4";
import leafPoster from "@/assets/farm/farm-leaf-in-hand-poster.webp";
import walkVideo from "@/assets/farm/farm-vine-walk.mp4";
import walkPoster from "@/assets/farm/farm-vine-walk-poster.webp";

const INSTAGRAM_URL = "https://www.instagram.com/vetrileaf/";

const reels = [
  { src: newPlantingVideo, poster: newPlantingPoster, label: "A new garden, from scratch", alt: "A newly planted betel garden, then young vines at the base of their supports" },
  { src: harvestVideo, poster: harvestPoster, label: "Harvested by hand, leaf by leaf", alt: "Farmer hand-picking betel leaves from the vine one at a time" },
  { src: leafVideo, poster: leafPoster, label: "A leaf, just picked", alt: "A betel leaf plucked from the vine and held up in the garden" },
  { src: walkVideo, poster: walkPoster, label: "Inside the vine garden", alt: "Walking between rows of betel vines" },
];

// In growing order: a new garden first, through to bundles ready to send
const images = [
  { src: newField, alt: "A newly planted garden at our farm, with coconut palms behind" },
  { src: newFieldClose, alt: "Young plants in a new garden, with betel vine leaves at the base" },
  { src: gardenPath, alt: "Path between mature betel vine rows with a drip irrigation line" },
  { src: leavesCloseup, alt: "Betel leaves growing on the vine at our Sholavandan farm" },
  { src: farmerWalking, alt: "Farmer walking between rows of betel vines" },
  { src: betelBundles, alt: "Fresh betel leaf bundles ready for delivery" },
];

/**
 * One reel: plays muted on a loop while it is on screen, pauses when it leaves.
 * Tap the clip to pause or resume; the speaker button turns the ambient garden
 * sound on for that reel only.
 */
const Reel = ({ src, poster, label, alt }: (typeof reels)[number]) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;

    // Visitors who asked for less motion or less data start reels themselves
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (saveData || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.6 },
    );
    observer.observe(v);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    if (v.muted) {
      // Only one reel is ever audible
      document.querySelectorAll<HTMLVideoElement>("#gallery video").forEach((other) => {
        if (other !== v) other.muted = true;
      });
    }
    v.muted = !v.muted;
  };

  return (
    <figure className="relative shrink-0 w-[62vw] max-w-[280px] sm:w-auto sm:max-w-none snap-start aspect-[9/16] rounded-2xl overflow-hidden bg-primary shadow-lg">
      <video
        ref={ref}
        src={src}
        poster={poster}
        preload="none"
        muted
        loop
        playsInline
        aria-label={alt}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        onTimeUpdate={(e) => {
          const { currentTime, duration } = e.currentTarget;
          if (duration) setProgress(currentTime / duration);
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Tap anywhere to pause or resume */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={`${playing ? "Pause" : "Play"} reel: ${label}`}
        className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        {!playing && (
          <span className="w-14 h-14 rounded-full bg-black/45 backdrop-blur-sm text-white flex items-center justify-center">
            <Play className="h-6 w-6 ml-0.5 fill-current" aria-hidden="true" />
          </span>
        )}
      </button>

      {/* Progress */}
      <div className="absolute top-2.5 inset-x-3 h-0.5 rounded-full bg-white/30 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="h-full bg-white rounded-full" style={{ width: `${progress * 100}%` }} />
      </div>

      <button
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Turn sound on" : "Turn sound off"}
        className="absolute top-5 right-3 w-9 h-9 rounded-full bg-black/45 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {muted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
      </button>

      <figcaption className="absolute inset-x-0 bottom-0 px-3.5 pb-3.5 pt-16 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none">
        <span className="flex items-center gap-2 mb-1.5">
          <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0">
            <img src={leafIcon} alt="" className="h-4 w-auto" loading="lazy" />
          </span>
          <span className="text-white text-xs font-semibold">vetrileaf</span>
        </span>
        <span className="block text-white text-sm leading-snug">{label}</span>
      </figcaption>
    </figure>
  );
};

const GallerySection = () => (
  <section id="gallery" className="section bg-parchment">
    <div className="container mx-auto px-4">
      <SectionHeader
          eyebrow="Our farm"
          title="Grown by us, not sourced"
          description="Every leaf comes from our own betel gardens in Sholavandan. This is unstaged footage of how we grow and pick them."
          align="center"
        />

      {/* Reels — swipe sideways on phones, four across on desktop */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-4 -mx-4 px-4 pb-2 sm:mx-auto sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 sm:overflow-visible max-w-xl lg:max-w-5xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reels.map((r) => (
          <Reel key={r.label} {...r} />
        ))}
      </div>

      {/* Photo grid — tight squares, like a profile grid */}
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-1 max-w-xl lg:max-w-5xl mx-auto mt-4 rounded-2xl overflow-hidden">
        {images.map((img) => (
          <div key={img.src} className="group relative aspect-square overflow-hidden bg-primary/10">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      <p className="text-center mt-8">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary underline underline-offset-4 decoration-accent hover:text-accent transition-colors"
        >
          More from the farm on Instagram @vetrileaf
        </a>
      </p>
    </div>
  </section>
);

export default GallerySection;
