import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer emergency plumbing repair in Anoka?",
    answer: "Yes. Our Anoka teams are available 24/7 for diagnostics and rapid restoration. We provide system support across Anoka County to resolve leaks, backups, and failures immediately."
  },
  {
    question: "What are the common plumbing issues in Anoka homes?",
    answer: "Given Anoka's mix of historic and modern homes, common issues include root intrusion in main lines, frozen pipe repair during winter, and failing water heaters or sump pumps."
  },
  {
    question: "Are your technicians licensed for Minnesota plumbing?",
    answer: "Absolutely. Our technicians are fully licensed Minnesota Master Plumbers who understand the specific building codes and environmental challenges of the Anoka County region."
  },
  {
    question: "How quickly can you respond to a leak?",
    answer: "Most emergency diagnostics and repairs can be initiated within the hour. We focus on technical results—whether it's leak detection or pipe restoration—to protect your property from water damage."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Common Questions</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Anoka Plumbing <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Answers to common questions about residential and commercial plumbing services in Anoka, Minnesota.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-indigo-600 py-6 text-lg uppercase tracking-tight" id={`faq-trigger-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed font-medium italic">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
