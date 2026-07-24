import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does not scroll to `#hash` targets on navigation.
 *
 * Without this, a link like `/#about` clicked from /products/... navigates to
 * the homepage but leaves you at the top of the page. This waits for the
 * target to exist — sections below the fold are lazy-loaded, so the element
 * may not be mounted on the first frame — then scrolls to it.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Plain navigation between routes should start at the top
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    const id = hash.slice(1);
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        // Offset for the fixed navbar
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
      // Lazy sections may not have mounted yet — retry for ~2s
      if (attempts++ < 40) requestAnimationFrame(tryScroll);
    };

    requestAnimationFrame(tryScroll);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
