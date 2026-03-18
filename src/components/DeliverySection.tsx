import { MapPin, Building2, Plane, Package, CreditCard } from "lucide-react";

const deliveryInfo = [
  { icon: MapPin, title: "Madurai & Surroundings", desc: "Same Day Delivery", color: "bg-accent/15" },
  { icon: Building2, title: "Tamil Nadu", desc: "1 to 2 Days", color: "bg-accent/15" },
  { icon: Plane, title: "Pan India", desc: "2 to 4 Days", color: "bg-accent/15" },
  { icon: Package, title: "Minimum Order", desc: "100 Leaves", color: "bg-accent/15" },
];

const DeliverySection = () => (
  <section className="py-20 bg-primary/5">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Shipping</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Fast &amp; Fresh Delivery</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
        {deliveryInfo.map((d) => (
          <div key={d.title} className="bg-card border border-border rounded-xl p-5 text-center hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-full ${d.color} flex items-center justify-center mx-auto mb-3`}>
              <d.icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-primary text-sm mb-1">{d.title}</h3>
            <p className="text-xs text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center space-y-3 max-w-xl mx-auto">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          <CreditCard className="h-4 w-4 text-accent" /> Pay via UPI | Bank Transfer | Cash on Delivery available locally
        </p>
        <p className="text-xs text-muted-foreground/70">
          All leaves are freshly harvested and packed with care to maintain freshness during transit.
        </p>
      </div>
    </div>
  </section>
);

export default DeliverySection;
