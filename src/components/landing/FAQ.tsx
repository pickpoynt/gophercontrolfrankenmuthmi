import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is trenchless sewer repair really as strong as a new PVC pipe?",
    answer: "Yes, even stronger! The cured-in-place pipe (CIPP) liners we use in Phoenix are structural, semi-rigid, and rated for a 50+ year life span. They are resistant to chemical corrosion and significantly more resistant to root intrusion than traditional clay or PVC joints."
  },
  {
    question: "How long does a typical trenchless repair take in Phoenix?",
    answer: "Most residential lining projects are completed in a single day. We arrive in the morning, clean the host pipe, install the liner, and have your sewer service back up and running by the evening. Traditional digging can take 3-7 days."
  },
  {
    question: "Can any sewer line be fixed with trenchless technology?",
    answer: "While most pipes are candidates, if a sewer line has completely pancaked (collapsed) or has severe 'bellies' (low spots), pipe bursting or traditional excavation may be required. We perform a free video inspection to determine the best method for your specific Phoenix property."
  },
  {
    question: "What is the cost difference between digging and trenchless in Phoenix?",
    answer: "Trenchless repair itself may have a higher per-foot material cost, but you save thousands by not having to replace your landscape, patio, driveway, or pool deck. This makes trenchless the more affordable overall solution for most Phoenix homeowners."
  },
  {
    question: "Do you offer a warranty on the new sewer liner?",
    answer: "Absolutely. We offer a lifetime material warranty and a 10-year labor warranty on all our trenchless installations. We stand by the quality of our Arizona craftsmanship."
  },
  {
    question: "How do you 'get into' the pipe without digging a trench?",
    answer: "We typically use an existing sewer cleanout or create a single small access point at the pipe's entry into the house. From there, we 'blow' or pull the liner through the entire length of the broken pipe."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Phoenix Trenchless FAQ
          </h2>
          <p className="text-lg text-slate-600">
            Expert answers to common questions about no-dig sewer repair in Arizona.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-4 bg-white shadow-sm overflow-hidden">
              <AccordionTrigger className="text-left font-heading font-bold text-slate-900 hover:text-blue-600 py-6 transition-colors font-semibold leading-relaxed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
