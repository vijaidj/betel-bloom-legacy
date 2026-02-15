import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-serif text-lg font-bold mb-3">Sri Sholavandan Heritage Vetrilai</h3>
          <p className="text-sm opacity-80">Premium GI certified betel leaves from the heart of Tamil Nadu.</p>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70">Contact</h4>
          <a href="tel:+919999999999" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
            <Phone className="h-4 w-4" /> +91 99999 99999
          </a>
          <a href="mailto:info@sholavandanvetrilai.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
            <Mail className="h-4 w-4" /> info@sholavandanvetrilai.com
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
            <MessageCircle className="h-4 w-4" /> WhatsApp Order
          </a>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 opacity-70">Location</h4>
          <p className="flex items-start gap-2 text-sm opacity-80">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Sholavandan, Madurai District,<br />Tamil Nadu, India
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Sri Sholavandan Heritage Vetrilai. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
