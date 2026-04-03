import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MapPin, User, Package, MessageSquare } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Enter a valid phone number"),
  city: z.string().min(2, "City is required"),
  quantity: z.string().min(1, "Enter quantity"),
  purpose: z.string().min(1, "Select a purpose"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const ContactSection = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", city: "", quantity: "", purpose: "", message: "" },
  });

  const onSubmit = (data: FormData) => {
    const text = `Hi, I'm ${data.name} from ${data.city}.%0APhone: ${data.phone}%0AQuantity: ${data.quantity}%0APurpose: ${data.purpose}%0A${data.message || ""}`;
    window.open(`https://wa.me/919600441284?text=${text}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your enquiry is being sent via WhatsApp." });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/60 to-secondary/30">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-1.5 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <p className="text-accent font-medium tracking-widest uppercase text-xs">Get in Touch</p>
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-3">Order Sholavandan Vetrilai Online</h2>
          <p className="text-muted-foreground max-w-md mx-auto">Fill in your details and we'll connect with you on WhatsApp for a personalised quote.</p>
        </div>

        {/* Form Card */}
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl shadow-primary/5 p-8 md:p-10">
          {/* Gold accent line */}
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent/40 rounded-full mx-auto mb-8" />
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Two column layout for name & phone */}
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

              {/* Two column layout for city & quantity */}
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

              {/* Purpose select */}
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

              {/* Message */}
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

              {/* Divider */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex-1 h-px bg-border/50" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Send via</span>
                <div className="flex-1 h-px bg-border/50" />
              </div>

              {/* Submit */}
              <Button type="submit" size="lg" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Send Enquiry via WhatsApp
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
