import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How many betel leaves do I need for 100 wedding guests?",
    a: "For 100 guests, we recommend at least 300–500 leaves to ensure generous thamboolam. We can help you calculate the right quantity based on your function type.",
  },
  {
    q: "How do you pack leaves for weddings and functions?",
    a: "We carefully pack fresh leaves in moisture-retaining natural packaging to keep them fresh during transit. All packs are hygienically handled and ready for use on arrival.",
  },
  {
    q: "Is delivery available outside Tamil Nadu?",
    a: "Yes! We deliver pan India. Orders within Tamil Nadu are delivered in 1–2 days. For other states, delivery takes 2–4 days via express courier.",
  },
  {
    q: "How should I store betel leaves before my function?",
    a: "Keep leaves in a cool, damp cloth or airtight container in the refrigerator. Avoid direct sunlight. Leaves stay fresh for 5–7 days when stored properly.",
  },
  {
    q: "Are your betel leaves GI certified?",
    a: "Yes! Our Sholavandan betel leaves carry the Government of India Geographical Indication (GI) tag – guaranteeing authenticity, origin, and premium quality.",
  },
  {
    q: "Can I order the same day?",
    a: "For Madurai and nearby areas, same-day delivery is possible for orders placed before 10 AM. For bulk/wedding orders, please order 48 hours in advance.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-5 bg-card data-[state=open]:shadow-md transition-shadow">
            <AccordionTrigger className="text-left font-semibold text-primary text-sm md:text-base hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
