import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import leafIcon from "@/assets/leaf-icon.png";
import giLogo from "@/assets/gi-logo.png";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#products" },
  { label: "All Products", href: "#all-products" },
  { label: "Occasions", href: "#occasions" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar — hidden on very small screens to save space */}
      <div className="bg-primary text-primary-foreground border-b border-primary-foreground/10">
        <div className="container mx-auto flex items-center justify-between px-3 py-1.5 text-xs tracking-wide">
          <a href="tel:+919600441284" className="flex items-center gap-1.5 font-semibold hover:text-accent transition-colors min-w-0">
            <Phone className="h-3 w-3 shrink-0" />
            <span className="hidden sm:inline">Order Now:&nbsp;</span>
            <span>+91 96004 41284</span>
          </a>
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1 font-medium text-xs">
              🚚 <span className="hidden sm:inline">Free delivery above&nbsp;</span>₹2500
            </span>
            <span className="hidden md:inline opacity-40">|</span>
            <div className="hidden md:flex items-center gap-1.5">
              <img src={giLogo} alt="GI Certified" className="h-4 w-4 rounded-full object-contain bg-white p-0.5" />
              <span className="font-semibold text-accent text-xs">GI Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-1 px-3 md:px-4">
          <a href="#home" className="flex items-center gap-2">
            <img src={leafIcon} alt="Vetri Leaf logo" className="h-10 md:h-12 w-auto object-contain" />
            <span className="text-xl md:text-2xl font-bold text-primary leading-none font-heading">Vetri Leaf</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-xs lg:text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                {l.label}
              </a>
            ))}
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-1.5 shrink-0" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile: WhatsApp icon + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-accent text-accent-foreground"
              aria-label="WhatsApp Order">
              <MessageCircle className="h-4 w-4" />
            </a>
            <button className="text-primary p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — full screen dropdown */}
      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="flex items-center py-3 text-sm font-medium text-muted-foreground hover:text-primary border-b border-border/40 last:border-0 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="px-4 pb-4 pt-2 flex flex-col gap-2">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2 h-12" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </Button>
            <a href="tel:+919600441284"
              className="flex items-center justify-center gap-2 text-sm font-medium text-primary py-2.5 border border-border rounded-lg">
              <Phone className="h-4 w-4" /> +91 96004 41284
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
