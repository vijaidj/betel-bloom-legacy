import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Sholavandan,Tamil+Nadu";

const contactItems = [
  {
    icon: MapPin,
    label: "Our Farm",
    value: "Sholavandan, Madurai District\nTamil Nadu – 625 221",
    href: MAPS_URL,
    hrefLabel: "Get Directions",
  },
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 96004 41284",
    href: "tel:+919600441284",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@sholavandanvetrilai.com",
    href: "mailto:info@sholavandanvetrilai.com",
  },
  {
    icon: Clock,
    label: "Open Hours",
    value: "Mon – Sun\n6:00 AM – 8:00 PM",
  },
];

const MapContactSection = () => (
  <section id="find-us" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4">

      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
          <Navigation className="h-3.5 w-3.5" />
          Find Us
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3">Visit Our Farm</h2>
        <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
          Nestled along the fertile Vaigai river basin in Sholavandan — come see where your leaves are grown.
        </p>
      </div>

      {/* Main layout: map + card */}
      <div className="max-w-6xl mx-auto relative">

        {/* Map — full width, tall */}
        <div className="rounded-3xl overflow-hidden border border-border shadow-2xl shadow-primary/10 w-full h-[420px] md:h-[520px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31404.08!2d77.88!3d9.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf5d5b0bffab%3A0x9e0acfc1cf5f2f46!2sSholavandan%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sholavandan location on Google Maps"
          />
        </div>

        {/* Floating contact card — overlaps map at bottom right */}
        <div className="
          md:absolute md:bottom-8 md:right-8
          mt-6 md:mt-0
          bg-card/95 backdrop-blur-md
          border border-border/60
          rounded-2xl shadow-2xl shadow-primary/15
          p-7 w-full md:w-[340px]
        ">
          {/* Card header */}
          <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border/50">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <MapPin className="h-5 w-5 text-accent" />
            </div>
            <div>
              <p className="font-bold text-primary text-base leading-none">Sri Sholavandan Heritage</p>
              <p className="text-xs text-muted-foreground mt-1">Sholavandan, Tamil Nadu</p>
            </div>
          </div>

          {/* Contact rows */}
          <div className="space-y-5 mb-7">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/5 border border-border/50 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="h-3.5 w-3.5 text-accent" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                      className="text-sm text-primary font-medium hover:text-accent transition-colors whitespace-pre-line leading-relaxed">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-primary font-medium whitespace-pre-line leading-relaxed">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5">
            <Button className="w-full h-11 bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-sm font-semibold" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </Button>
            <Button variant="outline" className="w-full h-11 border-border/60 gap-2 text-sm hover:border-accent/50 hover:bg-accent/5" asChild>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
          </div>
        </div>

      </div>

      {/* Bottom stats strip */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: "Sholavandan", label: "GI Registered Village" },
          { value: "60+ Years", label: "Family Farming Legacy" },
          { value: "Pan India", label: "Delivery Coverage" },
          { value: "6AM – 8PM", label: "Daily Fresh Orders" },
        ].map((s) => (
          <div key={s.label} className="bg-card border border-border/50 rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
            <p className="text-base md:text-lg font-bold text-primary">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default MapContactSection;
