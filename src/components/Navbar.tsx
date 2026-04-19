import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import leafIcon from "@/assets/leaf-icon.png";
import giLogo from "@/assets/gi-logo.png";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Occasions", href: "#occasions" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs tracking-wide">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:+919600441284" className="flex items-center gap-1.5 font-semibold hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">📞 Order Now:</span> +91 96004 41284
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
      <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-1.5 px-4">
          <a href="#home" className="flex items-center gap-2.5">
            <img src={leafIcon} alt="Vetri Leaf logo" className="h-12 md:h-14 w-auto object-contain" />
            <span className="text-2xl md:text-3xl font-bold text-primary leading-none font-heading">
              Vetri Leaf
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
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

          {/* Mobile toggle */}
          <button className="md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 pt-2 space-y-3">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm font-medium text-muted-foreground hover:text-primary py-1">
              {l.label}
            </a>
          ))}
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
