import { MessageCircle, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import giLogo from "@/assets/gi-logo.png";

const WHATSAPP_URL = "https://wa.me/916379144257";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Occasions", href: "#occasions" },
  { label: "About Us", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden bg-[#0a1f17] text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-10 grid md:grid-cols-12 gap-8 md:gap-4">
          {/* Brand */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-serif text-xl font-bold">
              Sri Sholavandan <span className="text-accent">Heritage Vetrilai</span>
            </h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Three generations of farming heritage, delivering GI-certified betel leaves with unmatched freshness.
            </p>
            <div className="flex items-center gap-2">
              <img src={giLogo} alt="GI Certified" className="h-6 w-6 rounded-full object-contain bg-white p-0.5" />
              <span className="text-[11px] font-semibold text-accent">GI Certified — Govt. of India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold text-accent">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-white/45 hover:text-accent transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold text-accent">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+916379144257" className="flex items-center gap-2 text-sm text-white/45 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" /> +91 63791 44257
              </a>
              <a href="mailto:info@sholavandanvetrilai.com" className="flex items-center gap-2 text-sm text-white/45 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> info@sholavandanvetrilai.com
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/45 hover:text-accent transition-colors">
                <MessageCircle className="h-4 w-4" /> WhatsApp Order
              </a>
              <p className="flex items-start gap-2 text-sm text-white/40">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> Sholavandan, Madurai District, Tamil Nadu
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold text-accent">Social</h4>
            <div className="space-y-2 text-sm text-white/45">
              <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors"><Instagram className="h-4 w-4" /> Instagram</a>
              <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors"><Facebook className="h-4 w-4" /> Facebook</a>
              <a href="#" className="flex items-center gap-2 hover:text-accent transition-colors"><Youtube className="h-4 w-4" /> YouTube</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
          </div>
        </div>

        {/* SEO text */}
        <div className="py-3 border-t border-white/5">
          <p className="text-[10px] text-white/15 text-center leading-relaxed">
            Sholavandan GI Betel Leaf Supplier | Vetrilai for Weddings | Thamboolam | Bulk Orders | Pooja | Tamil Nadu | Pan India Delivery
          </p>
        </div>

        {/* Bottom */}
        <div className="py-3 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5">
          <p className="text-[11px] text-white/30">
            © {new Date().getFullYear()} Sri Sholavandan Heritage Vetrilai. All Rights Reserved.
          </p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-[11px] text-accent/60 hover:text-accent transition-colors">
            Back to top <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
