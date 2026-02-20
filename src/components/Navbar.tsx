import { useState } from "react";
import { Menu, X, MessageCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import giLogo from "@/assets/gi-logo.jpg";

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
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs tracking-wide">
          <span className="hidden sm:inline opacity-80">🌿 Direct from Our Farm — No Middlemen, Pure Authenticity</span>
          <div className="flex items-center gap-3 mx-auto sm:mx-0">
            <div className="flex items-center gap-1.5 bg-primary-foreground/10 rounded-full px-3 py-1">
              <img src={giLogo} alt="GI Certified" className="h-4 w-4 rounded-sm object-contain" />
              <span className="font-semibold text-accent">GI Certified Product</span>
            </div>
            <span className="hidden md:inline opacity-70">|</span>
            <span className="hidden md:inline opacity-80">3rd Gen Heritage Farmers</span>
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
            <div className="flex items-center gap-2 border border-accent/30 rounded-full px-3 py-1.5 bg-accent/5">
              <img src={giLogo} alt="GI Tag" className="h-7 w-7 rounded-sm object-contain" />
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
            <img src={giLogo} alt="GI Tag" className="h-6 w-6 rounded-sm object-contain" />
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
