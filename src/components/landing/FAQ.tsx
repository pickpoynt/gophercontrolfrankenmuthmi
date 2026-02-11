const faqs = [
  {
    question: "Can you save clothes that have visible mold on them?",
    answer: "In many cases, yes. We use specialized HEPA vacuuming for dry spores combined with textile-safe antimicrobial treatments and professional laundering advice. High-value silks, leathers, and wools often require our boutique decontamination protocols to be fully restored."
  },
  {
    question: "Why does mold grow back in the same closet every year?",
    answer: "This is usually due to a combination of stagnant air and 'thermal bridging'—where the closet wall is colder than the rest of the room. We identify these moisture triggers and provide long-term solutions, such as ventilation improvements or antimicrobial coatings, to stop the cycle."
  },
  {
    question: "Are your cleaning chemicals safe for my boutique clothing?",
    answer: "Yes. We prioritize botanical, VOC-free antimicrobials that are hospital-grade but safe for luxury fabrics. Our technicians are trained to treat delicate materials without causing staining or fiber degradation."
  },
  {
    question: "Do I need to empty the entire closet before you arrive?",
    answer: "For a full remediation, yes. However, we can assist with the inventory and safe removal of items to a filtered containment area to prevent spores from spreading throughout your Ambler home."
  },
  {
    question: "How long does a typical closet cleanup take?",
    answer: "Most closet remediation projects in Ambler are completed in a single day. This includes containment, air scrubbing, structural cleaning, and antimicrobial application. Larger walk-in suites may require a follow-up air quality verification."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Closet Restoration FAQ
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Expert answers to common questions about small-space mold and garment protection in Ambler.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-purple-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-700 transition-colors flex items-start gap-3">
                  <span className="text-purple-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-purple-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
