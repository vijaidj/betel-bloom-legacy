import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your enquiry is being sent via WhatsApp." });
    form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 max-w-xl">
        <div className="text-center mb-10">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Enquire Now</h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField control={form.control} name="name" render={({ field }) => (
              <FormItem><FormLabel>Name</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="phone" render={({ field }) => (
              <FormItem><FormLabel>Phone</FormLabel><FormControl><Input placeholder="Phone number" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="city" render={({ field }) => (
              <FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="Your city" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="quantity" render={({ field }) => (
              <FormItem><FormLabel>Quantity</FormLabel><FormControl><Input placeholder="e.g. 1000 leaves" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="purpose" render={({ field }) => (
              <FormItem><FormLabel>Purpose</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl><SelectTrigger><SelectValue placeholder="Select purpose" /></SelectTrigger></FormControl>
                  <SelectContent>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="puja">Puja / Religious</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="wholesale">Wholesale / B2B</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              <FormMessage /></FormItem>
            )} />
            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem><FormLabel>Message (optional)</FormLabel><FormControl><Textarea placeholder="Any additional details..." {...field} /></FormControl><FormMessage /></FormItem>
            )} />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base">
              Send Enquiry via WhatsApp
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactSection;
