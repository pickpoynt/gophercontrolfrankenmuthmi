const faqs = [
  {
    question: "What pests are most common in South Point, Ohio?",
    answer: "South Point's location along the Ohio River in Lawrence County creates the perfect environment for a wide range of pests. The most common include ants (especially carpenter ants), cockroaches, spiders, stink bugs, mice, rats, and seasonal wasps. Our pest control south point ohio team knows exactly which species dominate in each season and deploys targeted treatments accordingly."
  },
  {
    question: "How quickly can you respond to a pest problem in South Point, OH?",
    answer: "We offer same-day service for active pest infestations across South Point and all of Lawrence County, including Ironton, Chesapeake, Coal Grove, and Proctorville. Call (323) 880-1224 and we'll dispatch immediately — no waiting for a scheduled appointment."
  },
  {
    question: "Why do I keep getting pests inside my South Point home?",
    answer: "South Point sits at the crossroads of the Ohio River valley, dense woodlands, and older residential neighborhoods — creating year-round pest pressure from moisture-driven insects, woodland rodents, and overwintering bugs. Our pest control south point ohio specialists identify and treat all entry points and root causes, not just the visible pests."
  },
  {
    question: "What pest treatments do you use and are they safe for pets and children?",
    answer: "We use Ohio EPA-registered pest control products with targeted crack-and-crevice and perimeter application methods. We offer pet-safe and child-friendly formulations and follow strict Integrated Pest Management (IPM) protocols. Our technicians always brief you on any precautions before treatment begins."
  },
  {
    question: "Do you offer a guarantee on your pest control services?",
    answer: "Yes. We stand behind every treatment with a satisfaction guarantee. If pests return within the treatment period, we re-treat at no additional charge. South Point and Lawrence County homeowners count on us for long-lasting, proven results."
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
          <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Pest Expert Answers</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mt-4 mb-6 uppercase tracking-tight">
            Pest Control South Point Ohio <span className="text-indigo-600">FAQ</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Key answers for South Point and Lawrence County property owners dealing with pest problems.
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
