import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      {/* Top row: Logo centered */}
      <div className="container mx-auto flex items-center justify-center py-2 px-4">
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Sri Sholavandan Heritage Vetrilai" className="h-24 md:h-28 w-auto object-contain rounded-full shadow-md" />
        </a>
      </div>

      {/* Bottom row: Navigation links */}
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

      {/* Mobile toggle */}
      <button className="md:hidden absolute top-4 right-4 text-primary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
