import { useEffect, useState, type RefObject } from "react";
import { MessageCircle } from "lucide-react";

interface Props {
  /** The page's main order button; the bar shows once it has scrolled above the viewport */
  targetRef: RefObject<HTMLElement>;
  title: string;
  priceText: string;
  ctaLabel: string;
  /** Opens the same order form as the main button */
  onOrder: () => void;
  hidden?: boolean;
}

/**
 * Phone-only order bar. It never duplicates the main button on screen: it
 * appears after that button scrolls out of view and hides again when it
 * returns, or while the order form is open.
 */
const StickyOrderBar = ({ targetRef, title, priceText, ctaLabel, onOrder, hidden = false }: Props) => {
  const [pastTarget, setPastTarget] = useState(false);

  useEffect(() => {
    // A scroll check rather than an IntersectionObserver: jumping straight from
    // the bottom of the page to the top never "intersects" the button, so an
    // observer would leave the bar showing at the top.
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = targetRef.current;
      if (el) setPastTarget(el.getBoundingClientRect().bottom < 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [targetRef]);

  const visible = pastTarget && !hidden;

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="container flex items-center gap-3 py-2.5">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-primary truncate">{title}</p>
          <p className="text-xs text-muted-foreground truncate">{priceText}</p>
        </div>
        <button
          type="button"
          onClick={onOrder}
          tabIndex={visible ? 0 : -1}
          className="shrink-0 inline-flex items-center gap-2 h-11 px-4 rounded-md bg-accent text-accent-foreground text-sm font-semibold"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> {ctaLabel}
        </button>
      </div>
    </div>
  );
};

export default StickyOrderBar;
