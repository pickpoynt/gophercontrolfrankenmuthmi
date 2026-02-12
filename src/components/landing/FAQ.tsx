const faqs = [
  {
    question: "How does mold grow in a Haddon Heights crawl space?",
    answer: "Haddon Heights foundations are subject to high groundwater and humidity. If the crawl space isn't properly sealed, moisture from the earth evaporates and condenses on wooden floor joists, providing the perfect environment for mold colonization."
  },
  {
    question: "Can crawl space mold affect the air in my living room?",
    answer: "Yes, significantly. Due to the 'stack effect,' air in your home naturally moves from the bottom to the top. This means that spore-laden air from your crawl space is pulled upwards and circulated throughout your entire home's living areas."
  },
  {
    question: "Do I have to move out during the mold removal process?",
    answer: "Usually not. We use advanced negative air containment and HEPA air scrubbers to isolate the crawl space. This ensures that no dust or spores escape into your Haddon Heights living spaces during the remediation process."
  },
  {
    question: "What is the difference between cleaning and encapsulation?",
    answer: "Cleaning removes existing mold growth. Encapsulation is a permanent preventive solution where we seal the floors and walls with a heavy-duty vapor barrier to stop the moisture cycle that mold needs to grow."
  },
  {
    question: "Is your crawl space mold treatment safe for my pets?",
    answer: "Absolutely. We use EPA-approved, hospital-grade antimicrobial solutions that are safe for your family and pets once the treated area has dried and been properly ventilated by our crews."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Remediation <span className="text-indigo-600">Science FAQ</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              Expert answers to common questions about crawl space mold removal and foundation restoration in Haddon Heights and Camden County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors flex items-start gap-3">
                  <span className="text-indigo-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-indigo-100">
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
