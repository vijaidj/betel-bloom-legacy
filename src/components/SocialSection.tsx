import { Instagram, Facebook, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", href: "#", handle: "@sholavandanvetrilai" },
  { icon: Facebook, label: "Facebook", href: "#", handle: "Sri Sholavandan Heritage" },
  { icon: Youtube, label: "YouTube", href: "#", handle: "Sholavandan Vetrilai" },
];

const SocialSection = () => (
  <section className="py-16 bg-primary/5">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Connect</p>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Follow Our Farm Journey</h2>
      <p className="text-muted-foreground text-sm mb-8">Stay connected for freshness updates, offers &amp; farm photos</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-card hover:border-accent/40 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <s.icon className="h-5 w-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-primary text-sm">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.handle}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Follow us for daily farm updates, seasonal offers, and behind-the-scenes from our Sholavandan betel leaf farm.
      </p>
    </div>
  </section>
);

export default SocialSection;
