import { MessageCircle, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import giLogo from "@/assets/gi-logo.png";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#0a1f17] text-white">
      {/* Abstract SVG leaf vein decoration */}
      <svg
        className="absolute top-0 right-0 h-full w-1/2 opacity-[0.06] pointer-events-none"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <path d="M200 0 C120 80 40 200 40 320 C40 480 120 580 200 600 C240 580 320 520 340 400 C360 280 300 120 200 0Z" stroke="#C8A951" strokeWidth="1.5" />
        <path d="M200 40 L200 560" stroke="#C8A951" strokeWidth="0.8" />
        <path d="M200 120 L100 200" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 200 L80 300" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 280 L100 380" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 360 L120 440" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 160 L300 220" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 240 L320 310" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 320 L300 400" stroke="#C8A951" strokeWidth="0.6" />
        <path d="M200 400 L280 460" stroke="#C8A951" strokeWidth="0.6" />
      </svg>

      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main content */}
        <div className="py-10 grid md:grid-cols-12 gap-8 md:gap-4">
          {/* Brand statement */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-[2px] rounded-full bg-gradient-to-b from-[#C8A951] to-transparent" />
              <h3 className="font-serif text-xl font-bold tracking-wide leading-tight">
                Sholavandan <span className="text-[#C8A951]">Heritage Vetrilai</span>
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-white/50">
              Three generations of farming heritage, delivering GI-certified betel leaves with unmatched freshness — straight from our farm to your doorstep.
            </p>
            <div className="flex items-center gap-2">
              <img src={giLogo} alt="GI Certified" className="h-6 w-6 rounded-full object-contain bg-white p-0.5" />
              <span className="text-[11px] font-semibold text-[#C8A951]">GI Certified — Govt. of India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold text-[#C8A951]">Explore</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Wedding Orders", href: "#wedding" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-white/45 hover:text-[#C8A951] transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold text-[#C8A951]">Reach Us</h4>
            <div className="space-y-3">
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
                  className="flex items-center gap-3 text-sm text-white/45 hover:text-[#C8A951] transition-colors duration-300"
                >
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border border-[#C8A951]/20">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {text}
                </a>
              ))}
              <div className="flex items-start gap-3 text-sm text-white/40">
                <span className="flex items-center justify-center h-8 w-8 rounded-full border border-[#C8A951]/20 shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <span className="pt-1.5">Sholavandan, Madurai District,<br />Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        {/* SEO keyword-rich Tamil section */}
        <div className="py-4 border-t border-white/5">
          <p className="text-[11px] text-white/20 text-center mb-3 leading-relaxed">
            Sri Sholavandan Heritage Vetrilai | GI Certified Betel Leaf from Tamil Nadu | Supplier for Weddings, Thamboolam, Pooja, Housewarming & Bulk Functions | Madurai | Contact: +91 63791 44257
          </p>
          <p className="text-[11px] text-white/15 text-center mb-4" lang="ta">
            சோழவந்தான் வெற்றிலை – திருமணம், பூஜை மற்றும் விழாக்களுக்கு ஏற்ற GI சான்றிதழ் பெற்ற வெற்றிலை
          </p>
        </div>
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Sri Sholavandan Heritage Vetrilai. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-[11px] text-[#C8A951]/60 hover:text-[#C8A951] transition-colors">
            Back to top
            <span className="flex items-center justify-center h-6 w-6 rounded-full border border-[#C8A951]/20">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
