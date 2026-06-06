import { MessageCircle, ClipboardList, PackageCheck, Truck, BadgeCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Place Order",
    desc: "WhatsApp or call us with your quantity & delivery date",
    time: null,
  },
  {
    icon: PackageCheck,
    step: "02",
    title: "Freshly Packed",
    desc: "Leaves harvested & packed in moisture-lock packaging",
    time: "Same Morning",
  },
  {
    icon: Truck,
    step: "03",
    title: "Dispatched",
    desc: "Shipped via express courier the same or next day",
    time: "Same / Next Day",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Delivered Fresh",
    desc: "Arrives at your door, farm-fresh and ready to use",
    time: "1–4 Days",
  },
];

const zones = [
  { zone: "Madurai & Around", time: "Same Day", color: "bg-accent/15 text-accent border-accent/20" },
  { zone: "Tamil Nadu", time: "1–2 Days", color: "bg-primary/10 text-primary border-primary/20" },
  { zone: "Pan India", time: "2–4 Days", color: "bg-primary/10 text-primary border-primary/20" },
  { zone: "Min. Order", time: "100 Leaves", color: "bg-primary/10 text-primary border-primary/20" },
];

const DeliverySection = () => (
  <section className="py-24 bg-secondary/30 overflow-hidden">
    <div className="container mx-auto px-4">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Shipping</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Fast &amp; Fresh Delivery</h2>
        <p className="text-muted-foreground max-w-md mx-auto text-sm">
          From our farm to your doorstep — every leaf arrives the same way it left us: fresh.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto mb-14 relative">

        {/* Connecting line desktop */}
        <div className="hidden md:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-border" style={{top: "2.5rem"}} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {steps.map((s, i) => (
            <div key={s.step} className="flex flex-col items-center text-center group">
              {/* Icon circle */}
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 shadow-md transition-all group-hover:scale-105 ${
                i === 0
                  ? "bg-accent border-accent/40 shadow-accent/20"
                  : "bg-card border-border group-hover:border-accent/40"
              }`}>
                <s.icon className={`h-8 w-8 ${i === 0 ? "text-accent-foreground" : "text-accent"}`} />
              </div>

              {/* Step number */}
              <span className="text-xs font-bold text-accent/50 tracking-widest uppercase mb-1">{s.step}</span>

              {/* Title */}
              <h3 className="font-bold text-primary text-base mb-1.5">{s.title}</h3>

              {/* Desc */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{s.desc}</p>

              {/* Time badge */}
              {s.time && (
                <span className="text-xs font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                  {s.time}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Zone badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
        {zones.map((z) => (
          <div key={z.zone} className={`rounded-xl border px-4 py-3 text-center ${z.color}`}>
            <div className="text-sm font-bold">{z.time}</div>
            <div className="text-xs opacity-80 mt-0.5">{z.zone}</div>
          </div>
        ))}
      </div>

      {/* Payment & CTA */}
      <div className="text-center space-y-4">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          <CreditCard className="h-4 w-4 text-accent" />
          Pay via UPI · Bank Transfer · Cash on Delivery (local)
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-13 px-8 gap-2" asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" /> Order Now
          </a>
        </Button>
      </div>

    </div>
  </section>
);

export default DeliverySection;
