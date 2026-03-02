import { MessageCircle, Phone, Mail, MapPin, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";
import giLogo from "@/assets/gi-logo.png";

const Footer = () => (
  <footer className="relative bg-primary text-primary-foreground overflow-hidden">
    {/* Betel leaf pattern overlay */}
    <div className="absolute inset-0 betel-pattern opacity-20 pointer-events-none" />

    {/* Gold accent top border */}
    <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

    <div className="container mx-auto px-4 relative z-10">
      {/* Main footer content */}
      <div className="py-14 grid md:grid-cols-3 gap-10">
        {/* Brand column */}
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="Sri Sholavandan Heritage Vetrilai" className="h-20 w-auto rounded-full shadow-lg border-2 border-accent/30" />
          <h3 className="font-serif text-xl font-bold tracking-wide">
            Sri Sholavandan<br />
            <span className="text-accent">Heritage Vetrilai</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Premium GI certified betel leaves, cultivated with 3 generations of farming heritage from the heart of Tamil Nadu.
          </p>
          <div className="flex items-center gap-2 mt-1">
            <img src={giLogo} alt="GI Certified" className="h-8 w-8 rounded-full object-contain bg-white p-0.5" />
            <span className="text-xs font-semibold text-accent">GI Certified — Govt. of India</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-2">
            <Leaf className="h-4 w-4" /> Quick Links
          </h4>
          <div className="space-y-3">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Products", href: "#products" },
              { label: "Wedding Bulk Orders", href: "#wedding" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300 hover:translate-x-1 transform"
              >
                → {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div className="space-y-4">
          <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-2">
            <Mail className="h-4 w-4" /> Get in Touch
          </h4>
          <div className="space-y-3">
            <a href="tel:+916379144257" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300 group">
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-accent/30 group-hover:bg-accent/10 transition-colors">
                <Phone className="h-4 w-4" />
              </span>
              +91 63791 44257
            </a>
            <a href="mailto:info@sholavandanvetrilai.com" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300 group">
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-accent/30 group-hover:bg-accent/10 transition-colors">
                <Mail className="h-4 w-4" />
              </span>
              info@sholavandanvetrilai.com
            </a>
            <a href="https://wa.me/916379144257" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all duration-300 group">
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-accent/30 group-hover:bg-accent/10 transition-colors">
                <MessageCircle className="h-4 w-4" />
              </span>
              WhatsApp Order
            </a>
            <div className="flex items-start gap-3 text-sm opacity-70 pt-1">
              <span className="flex items-center justify-center h-8 w-8 rounded-full border border-accent/30 shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Sholavandan, Madurai District,<br />Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} Sri Sholavandan Heritage Vetrilai. All rights reserved.
        </p>
        <p className="text-xs opacity-40 flex items-center gap-1">
          Crafted with <Leaf className="h-3 w-3 text-accent" /> tradition & pride
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
