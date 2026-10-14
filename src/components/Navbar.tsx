import { useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import leafIcon from "@/assets/leaf-icon.webp";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

// Absolute paths so these resolve from any route, not just the homepage.
// Each homepage anchor still exists, including the older ones (#occasions,
// #all-products, #find-us, #benefits), so bookmarked links keep working.
const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Weddings & Bulk", href: "/#wedding" },
  { label: "Our Farm", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/70">
      <div className="container flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img src={leafIcon} alt="Vetri Leaf logo" width={48} height={45} className="h-9 md:h-10 w-auto object-contain" />
          <span className="text-xl md:text-[22px] font-semibold text-primary leading-none font-heading">Vetri Leaf</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-[15px] font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919600441284"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold-ink transition-colors"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> +91 96004 41284
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order on WhatsApp
          </a>
        </div>

        {/* Mobile and tablet: WhatsApp + menu */}
        <div className="flex lg:hidden items-center gap-1.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-accent text-accent-foreground"
            aria-label="WhatsApp Order"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <button
            className="flex items-center justify-center w-11 h-11 rounded-full text-primary hover:bg-primary/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-border bg-background shadow-lg">
          <div className="container py-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center min-h-[48px] text-base font-medium text-primary border-b border-border/60 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/products/"
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[48px] text-base font-medium text-primary"
            >
              All products
            </Link>
          </div>
          <div className="container pb-4 pt-1 grid grid-cols-2 gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-12 rounded-md bg-accent text-accent-foreground text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <a
              href="tel:+919600441284"
              className="flex items-center justify-center gap-2 h-12 rounded-md border border-primary/25 text-primary text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> Call us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
