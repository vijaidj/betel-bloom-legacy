import { MessageCircle, Phone, Mail, MapPin, Leaf, ArrowUp } from "lucide-react";
import giLogo from "@/assets/gi-logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, hsl(156 61% 8%), hsl(156 50% 12%), hsl(156 61% 8%))" }}>
      {/* Abstract SVG leaf vein decoration */}
      <svg
        className="absolute top-0 right-0 h-full w-1/2 opacity-[0.04] pointer-events-none"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path d="M200 0 C120 80 40 200 40 320 C40 480 120 580 200 600 C240 580 320 520 340 400 C360 280 300 120 200 0Z" stroke="hsl(42 47% 54%)" strokeWidth="1.5" />
        <path d="M200 40 L200 560" stroke="hsl(42 47% 54%)" strokeWidth="0.8" />
        <path d="M200 120 L100 200" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 200 L80 300" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 280 L100 380" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 360 L120 440" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 160 L300 220" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 240 L320 310" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 320 L300 400" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
        <path d="M200 400 L280 460" stroke="hsl(42 47% 54%)" strokeWidth="0.6" />
      </svg>

      {/* Gold top line */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 5%, hsl(42 47% 54%) 50%, transparent 95%)" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="py-16 grid md:grid-cols-12 gap-10 md:gap-6">
          {/* Brand statement */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-[2px] rounded-full" style={{ background: "linear-gradient(180deg, hsl(42 47% 54%), transparent)" }} />
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide leading-tight">
                Sholavandan<br />
                <span style={{ color: "hsl(42 47% 64%)" }}>Heritage Vetrilai</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "hsl(43 20% 70%)" }}>
              Three generations of farming heritage, delivering GI-certified betel leaves with unmatched freshness — straight from our farm to your doorstep.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <img src={giLogo} alt="GI Certified" className="h-7 w-7 rounded-full object-contain bg-white p-0.5" />
              <span className="text-xs font-semibold" style={{ color: "hsl(42 47% 54%)" }}>GI Certified — Govt. of India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-5 font-semibold" style={{ color: "hsl(42 47% 54%)" }}>
              Explore
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Wedding Orders", href: "#wedding" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm transition-all duration-300 hover:translate-x-1 transform"
                  style={{ color: "hsl(43 20% 60%)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(42 47% 70%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(43 20% 60%)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-5 font-semibold" style={{ color: "hsl(42 47% 54%)" }}>
              Reach Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 63791 44257", href: "tel:+916379144257" },
                { icon: Mail, text: "info@sholavandanvetrilai.com", href: "mailto:info@sholavandanvetrilai.com" },
                { icon: MessageCircle, text: "WhatsApp Order", href: "https://wa.me/916379144257" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm group transition-all duration-300"
                  style={{ color: "hsl(43 20% 60%)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(42 47% 70%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(43 20% 60%)")}
                >
                  <span
                    className="flex items-center justify-center h-9 w-9 rounded-full transition-colors duration-300"
                    style={{ border: "1px solid hsl(42 47% 54% / 0.25)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  {text}
                </a>
              ))}
              <div className="flex items-start gap-3 text-sm pt-1" style={{ color: "hsl(43 20% 55%)" }}>
                <span
                  className="flex items-center justify-center h-9 w-9 rounded-full shrink-0"
                  style={{ border: "1px solid hsl(42 47% 54% / 0.25)" }}
                >
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="pt-2">Sholavandan, Madurai District,<br />Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid hsl(42 47% 54% / 0.1)" }}>
          <p className="text-xs" style={{ color: "hsl(43 20% 45%)" }}>
            © {new Date().getFullYear()} Sri Sholavandan Heritage Vetrilai. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs transition-all duration-300 hover:-translate-y-0.5 group"
            style={{ color: "hsl(42 47% 54%)" }}
          >
            Back to top
            <span className="flex items-center justify-center h-7 w-7 rounded-full transition-colors" style={{ border: "1px solid hsl(42 47% 54% / 0.3)" }}>
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
