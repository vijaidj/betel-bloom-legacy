import { MessageCircle, ClipboardList, PackageCheck, Truck, BadgeCheck, CreditCard } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";

const steps = [
  { icon: ClipboardList, title: "Place Order",     desc: "WhatsApp or call us with your quantity & delivery date", time: null },
  { icon: PackageCheck,  title: "Freshly Packed",  desc: "Leaves harvested & packed in moisture-lock packaging",   time: "Same Morning" },
  { icon: Truck,         title: "Dispatched",      desc: "Shipped via express courier the same or next day",       time: "Same / Next Day" },
  { icon: BadgeCheck,    title: "Delivered Fresh", desc: "Arrives at your door, farm-fresh and ready to use",      time: "1–4 Days" },
];

const zones = [
  { zone: "Madurai & Around", time: "Same Day" },
  { zone: "Tamil Nadu", time: "1–2 Days" },
  { zone: "Pan India", time: "2–4 Days" },
  { zone: "Min. Order", time: "100 Leaves" },
];

const DeliverySection = () => (
  <section id="delivery" className="section bg-parchment">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-3">Shipping</p>
          <h2 className="font-heading text-3xl md:text-[42px] leading-[1.12] text-primary mb-4">Fast and fresh delivery</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From our farm to your doorstep — every leaf arrives the way it left us: fresh.
          </p>

          <dl className="grid grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border mb-6">
            {zones.map((z) => (
              <div key={z.zone} className="bg-card px-4 py-3">
                <dt className="text-xs text-muted-foreground">{z.zone}</dt>
                <dd className="font-semibold text-primary">{z.time}</dd>
              </div>
            ))}
          </dl>

          <p className="text-sm text-muted-foreground flex items-start gap-2 mb-1">
            <CreditCard className="h-4 w-4 text-gold-ink shrink-0 mt-0.5" aria-hidden="true" />
            Pay via UPI · Bank Transfer · Cash on Delivery (local)
          </p>
          <p className="text-sm text-muted-foreground flex items-start gap-2 mb-6">
            <Truck className="h-4 w-4 text-gold-ink shrink-0 mt-0.5" aria-hidden="true" />
            Free delivery above ₹2500
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Order Now
          </a>
        </div>

        <ol className="lg:col-span-8 grid sm:grid-cols-2 gap-4 content-start">
          {steps.map((s, i) => (
            <li key={s.title} className="relative flex sm:block gap-4 bg-card border border-border rounded-xl p-5 sm:p-6">
              <div className="flex items-center justify-between sm:mb-5 shrink-0">
                <span className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="hidden sm:inline font-heading text-3xl text-primary/15">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-primary mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2 sm:mb-3">{s.desc}</p>
                {s.time && (
                  <span className="inline-block text-xs font-semibold text-gold-ink bg-accent/15 px-3 py-1 rounded-full">
                    {s.time}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default DeliverySection;
