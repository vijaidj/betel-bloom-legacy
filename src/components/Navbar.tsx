import { useState } from "react";
import { Menu, X, MessageCircle, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import giLogo from "@/assets/gi-logo.png";

const WHATSAPP_URL = "https://wa.me/916379144257?text=Hello%2C%20I%20am%20interested%20in%20your%20betel%20leaves.";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Wedding Bulk", href: "#wedding" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Premium top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-xs tracking-wide">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:+916379144257" className="flex items-center gap-1.5 font-semibold hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">📞 Order Now:</span> +91 63791 44257
            </a>
            <span className="opacity-40">|</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
              <MessageCircle className="h-3.5 w-3.5" /> <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1 font-medium">
              🚚 <span className="hidden sm:inline">Free delivery above</span> <span className="sm:hidden">Free &gt;</span> ₹500
            </span>
            <span className="hidden md:inline opacity-40">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <img src={giLogo} alt="GI Certified" className="h-5 w-5 rounded-full object-contain bg-white p-0.5" />
              <span className="font-semibold text-accent">GI Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur border-b border-border">
        {/* Logo row */}
        <div className="container mx-auto flex items-center justify-between py-2 px-4">
          <div className="hidden md:flex items-center gap-2 opacity-0 pointer-events-none">
            <span>spacer</span>
          </div>
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Sri Sholavandan Heritage Vetrilai" className="h-20 md:h-24 w-auto object-contain rounded-full shadow-md" />
          </a>
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2 border border-accent/30 rounded-full px-3 py-1.5 bg-background">
              <img src={giLogo} alt="GI Tag" className="h-10 w-10 rounded-full object-contain bg-white p-0.5" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-accent leading-tight">GI TAGGED</p>
                <p className="text-[9px] text-muted-foreground leading-tight">Govt. of India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center justify-center gap-8 pb-3 border-t border-border/50 pt-2">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden absolute top-10 right-4 text-primary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary">
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 py-2">
            <img src={giLogo} alt="GI Tag" className="h-8 w-8 rounded-full object-contain bg-white p-0.5" />
            <span className="text-xs font-semibold text-accent">GI Certified Product — Govt. of India</span>
          </div>
          <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp Order
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
