const faqs = [
  {
    question: "What rodents are most common in Corvallis, Oregon?",
    answer: "Corvallis's mix of heavy rainfall, agricultural surroundings, and older neighborhoods creates high pressure from Deer Mice, House Mice, and Norway Rats. During the rainy season, these rodents aggressively seek shelter indoors. Our rodent control corvallis oregon team specializes in the specific behaviors of Willamette Valley rodent species."
  },
  {
    question: "How do you stop rats and mice from coming back?",
    answer: "Elimination is only half the battle. We focus on exclusion — sealing every possible entry point larger than 1/4 inch with rodent-proof materials like steel mesh and structural sealants. By removing the access, we provide a permanent solution for your Corvallis home."
  },
  {
    question: "How quickly can you respond to a rodent problem in Corvallis, OR?",
    answer: "We offer same-day service for active rodent sightings across Corvallis and all of Benton County, including Philomath, Albany, and Lebanon. Call (323) 880-1224 and we'll dispatch a specialist immediately to begin trapping and exclusion."
  },
  {
    question: "Are your rodent treatments safe for pets and children?",
    answer: "Yes. Our priority is structural exclusion first. When trapping or baiting is necessary, we use locked, tamper-resistant stations placed in areas inaccessible to pets and children. We follow strict Oregon IPM (Integrated Pest Management) standards."
  },
  {
    question: "Do you offer attic cleanup after a rodent infestation?",
    answer: "Yes. Rodents leave behind urine, droppings, and nesting material that can carry Hantavirus and other pathogens. Our team provides professional decontamination, sanitization, and insulation replacement to ensure your Corvallis property is healthy and safe again."
  }
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Rodent Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Rodent Control Corvallis Oregon <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for Corvallis and Benton County property owners dealing with rat or mouse problems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-slate-200 rounded-2xl px-6">
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
