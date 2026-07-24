import { useState, useEffect, useRef } from "react";
import { ZoomIn, X } from "lucide-react";

export interface GalleryImage {
  src: string;
  alt: string;
  /** Larger file, fetched only when the lightbox opens. Falls back to src. */
  zoomSrc?: string;
  /** Shown under the thumbnail strip when this image is active */
  caption?: string;
  /** Variant this image belongs to, if any */
  variantId?: string;
}

interface Props {
  images: GalleryImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

/**
 * Main image with an optional horizontal thumbnail strip.
 *
 * Zoom is click-to-open, not hover-magnify: hover does not exist on touch,
 * and a magnifier would force the large file to load on every visit. The
 * lightbox fetches it on demand instead.
 */
const ProductGallery = ({ images, activeIndex, onSelect }: Props) => {
  const [zoomOpen, setZoomOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const active = images[activeIndex] ?? images[0];
  const canZoom = Boolean(active.zoomSrc);

  // Escape closes; focus moves to the close button on open
  useEffect(() => {
    if (!zoomOpen) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [zoomOpen]);

  return (
    <>
      {/* Main image */}
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-card group">
        <img
          key={active.src}
          src={active.src}
          alt={active.alt}
          width={800}
          height={800}
          loading="eager"
          {...{ fetchpriority: "high" }}
          className="w-full h-auto object-cover"
        />

        {canZoom && (
        <button
          type="button"
          onClick={() => setZoomOpen(true)}
          aria-label="Open larger image"
          className="absolute bottom-3 right-3 flex items-center gap-1.5 h-9 px-3 rounded-lg bg-background/85 backdrop-blur-sm border border-border text-xs font-medium text-primary opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <ZoomIn className="h-4 w-4" aria-hidden="true" />
          Zoom
        </button>
        )}
      </div>

      {/* Thumbnail strip — only when there is a genuine choice */}
      {images.length > 1 && (
        <div className="mt-3">
          <ul className="flex gap-2.5 overflow-x-auto pb-1" role="list">
            {images.map((img, i) => (
              <li key={img.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  aria-label={img.caption ?? img.alt}
                  aria-current={i === activeIndex ? "true" : undefined}
                  className={`block w-[68px] h-[68px] rounded-lg overflow-hidden border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 ${
                    i === activeIndex ? "border-accent" : "border-border hover:border-accent/45"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    width={68}
                    height={68}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
          {active.caption && (
            <p className="text-xs text-muted-foreground mt-2">{active.caption}</p>
          )}
        </div>
      )}

      {/* Lightbox */}
      {zoomOpen && canZoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setZoomOpen(false)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setZoomOpen(false)}
            aria-label="Close larger image"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-background/15 hover:bg-background/25 border border-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <img
            src={active.zoomSrc}
            alt={active.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg cursor-default"
          />
        </div>
      )}
    </>
  );
};

export default ProductGallery;
