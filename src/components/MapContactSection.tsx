import { Phone, Mail, MapPin, Clock } from "lucide-react";

const MapContactSection = () => (
  <section id="find-us" className="py-20 bg-primary/[0.04]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-accent font-medium tracking-widest uppercase text-xs mb-3">Location</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Find Us</h2>
      </div>

      <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {/* Map */}
        <div className="md:col-span-3 rounded-2xl overflow-hidden border border-border/60 shadow-md h-[320px]">
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

        {/* Contact details */}
        <div className="md:col-span-2 bg-card border border-border/60 rounded-2xl p-6 flex flex-col justify-center space-y-5">
          <h3 className="text-lg font-bold text-primary">Contact Details</h3>
          {[
            { icon: MapPin, label: "Sholavandan, Madurai District, Tamil Nadu, India" },
            { icon: Phone, label: "+91 96004 41284", href: "tel:+919600441284" },
            { icon: Mail, label: "info@sholavandanvetrilai.com", href: "mailto:info@sholavandanvetrilai.com" },
            { icon: Clock, label: "Monday to Sunday, 6 AM – 8 PM" },
          ].map(({ icon: Icon, label, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-accent" />
              </div>
              {href ? (
                <a href={href} className="text-sm text-muted-foreground hover:text-accent transition-colors pt-1.5">
                  {label}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground pt-1.5">{label}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MapContactSection;
