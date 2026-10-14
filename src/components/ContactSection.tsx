import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MapPin, User, Package, MessageSquare, CheckCircle2, MessageCircle, Mail, Clock, Navigation } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  city: z.string().min(2, "City is required"),
  quantity: z.string().min(1, "Enter quantity"),
  purpose: z.string().min(1, "Select a purpose"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// ─── EmailJS config ────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail / SMTP) → copy Service ID below
// 3. Create an email template → copy Template ID below
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // ← replace
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // ← replace
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // ← replace

const WHATSAPP_BASE = "https://wa.me/919600441284";
const ORDER_URL = "https://wa.me/919600441284?text=Hi%2C%20I%20want%20to%20order%20Sholavandan%20Betel%20Leaf";
const MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Sholavandan,Tamil+Nadu";

const contactItems = [
  { icon: MapPin, label: "Our Farm",        value: "Sholavandan, Madurai District\nTamil Nadu – 625 221", href: MAPS_URL },
  { icon: Phone,  label: "Call / WhatsApp", value: "+91 96004 41284",     href: "tel:+919600441284" },
  { icon: Mail,   label: "Email",           value: "vetrileaf@gmail.com", href: "mailto:vetrileaf@gmail.com" },
  { icon: Clock,  label: "Open Hours",      value: "Mon – Sun\n6:00 AM – 8:00 PM", href: null },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", city: "", quantity: "", purpose: "", message: "" },
  });

  const sendEmail = async (data: FormData) => {
    // Only attempt EmailJS if credentials are configured
    if (
      EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
      EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
      EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
    ) {
      try {
        const emailjs = await import("@emailjs/browser");
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: data.name,
            from_phone: data.phone,
            from_city: data.city,
            quantity: data.quantity,
            purpose: data.purpose,
            message: data.message || "—",
            reply_to: `${data.phone}`,
          },
          EMAILJS_PUBLIC_KEY
        );
      } catch (err) {
        // Email failed silently — WhatsApp fallback still fires
        console.warn("EmailJS send failed:", err);
      }
    }
  };

  const onSubmit = async (data: FormData) => {
    // 1. Fire email in background
    sendEmail(data);

    // 2. Open WhatsApp
    const text = encodeURIComponent(
      `Hi, I'm ${data.name} from ${data.city}.\nPhone: ${data.phone}\nQuantity: ${data.quantity}\nPurpose: ${data.purpose}${data.message ? `\nMessage: ${data.message}` : ""}`
    );
    window.open(`${WHATSAPP_BASE}?text=${text}`, "_blank");

    // 3. Show success state
    setSubmittedData(data);
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="section bg-parchment">
      {/* Older links pointed here as #find-us */}
      <span id="find-us" className="block" aria-hidden="true" />
      <div className="container">
        <div className="max-w-2xl mb-10 md:mb-12">
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="font-heading text-3xl md:text-[42px] leading-[1.12] text-primary mb-3">Order Sholavandan Vetrilai Online</h2>
          <p className="text-muted-foreground">Fill in your details and we'll connect with you on WhatsApp for a personalised quote.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="min-w-0 lg:col-span-7 bg-card rounded-2xl border border-border shadow-sm p-5 sm:p-6 md:p-10">
          {submitted && submittedData ? (
            /* ── Success State ── */
            <div className="text-center py-4">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Enquiry Sent!</h3>
              <p className="text-muted-foreground mb-6 text-sm max-w-sm mx-auto">
                Your WhatsApp has opened with your details pre-filled. We typically reply within <strong>30 minutes</strong> during business hours (6 AM – 8 PM).
              </p>

              {/* Summary card */}
              <div className="bg-primary/5 border border-border/60 rounded-xl p-5 text-left mb-6 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="font-medium text-primary">{submittedData.name}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Phone</span><span className="font-medium text-primary">{submittedData.phone}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">City</span><span className="font-medium text-primary">{submittedData.city}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Quantity</span><span className="font-medium text-primary">{submittedData.quantity}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Purpose</span><span className="font-medium text-primary capitalize">{submittedData.purpose}</span></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="flex-1 h-12 bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                  onClick={() => {
                    const text = encodeURIComponent(`Hi, I'm ${submittedData.name} from ${submittedData.city}. I want to follow up on my enquiry for ${submittedData.quantity} leaves.`);
                    window.open(`${WHATSAPP_BASE}?text=${text}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-4 w-4" /> Open WhatsApp Again
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-12 border-accent/40 text-primary hover:bg-accent/5"
                  onClick={() => setSubmitted(false)}
                >
                  New Enquiry
                </Button>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 text-xs uppercase tracking-wider font-semibold">Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                          <Input placeholder="Your full name" className="pl-10 h-12 bg-background/60 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl transition-all" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 text-xs uppercase tracking-wider font-semibold">Phone</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                          <Input placeholder="Phone number" className="pl-10 h-12 bg-background/60 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl transition-all" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="city" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 text-xs uppercase tracking-wider font-semibold">City</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                          <Input placeholder="Your city" className="pl-10 h-12 bg-background/60 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl transition-all" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="quantity" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground/80 text-xs uppercase tracking-wider font-semibold">Quantity</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
                          <Input placeholder="e.g. 1000 leaves" className="pl-10 h-12 bg-background/60 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl transition-all" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="purpose" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 text-xs uppercase tracking-wider font-semibold">Purpose</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 bg-background/60 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl">
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="puja">Puja / Religious</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="wholesale">Wholesale / B2B</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground/80 text-xs uppercase tracking-wider font-semibold">Message <span className="text-muted-foreground font-normal normal-case tracking-normal">(optional)</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground/50" />
                        <Textarea placeholder="Any additional details..." className="pl-10 min-h-[100px] bg-background/60 border-border/50 focus:border-accent focus:ring-accent/20 rounded-xl transition-all resize-none" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 h-px bg-border/50" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Send via</span>
                  <div className="flex-1 h-px bg-border/50" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  Send Enquiry via WhatsApp
                </Button>

                <p className="text-center text-xs text-muted-foreground/60">
                  Your enquiry is sent via WhatsApp. We reply within 30 minutes (6 AM – 8 PM).
                </p>
              </form>
            </Form>
          )}
        </div>

        {/* Visit / contact details — formerly the separate map section */}
        <aside className="min-w-0 lg:col-span-5 space-y-4">
          <div className="bg-card rounded-2xl border border-border shadow-sm p-6 md:p-8">
            <p className="eyebrow mb-2">Visit our farm</p>
            <p className="font-heading text-2xl text-primary mb-2">Sri Sholavandan Heritage</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Nestled along the fertile Vaigai river basin in Sholavandan — come see where your leaves are grown.
            </p>
            <ul className="space-y-4 mb-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-primary/5 border border-border flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-gold-ink" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-primary font-medium hover:text-gold-ink transition-colors whitespace-pre-line leading-relaxed"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="block text-sm text-primary font-medium whitespace-pre-line leading-relaxed">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2.5">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Order on WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 rounded-md border border-primary/25 text-primary text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border h-56 md:h-64 bg-card">
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
        </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
