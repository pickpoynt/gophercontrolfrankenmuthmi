import { ShieldCheck, Zap, Users, Award, Biohazard, Wind, Shirt, Sparkles, Scissors } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Wardrobe Protection",
    description: "Our primary focus is safeguarding your high-end clothing and leather goods during the remediation process."
  },
  {
    icon: Scissors,
    title: "Surgical Attention",
    description: "Small spaces require surgical detail. We clean every hanging rod, shelf support, and baseboard with precision."
  },
  {
    icon: Sparkles,
    title: "Botanical Solutions",
    description: "We use hospital-grade, plant-based antimicrobials that are safe for your family and your delicate fabrics."
  },
  {
    icon: ShieldCheck,
    title: "Certified Results",
    description: "Our Ambler teams are IICRC certified and use lab-verified methods to ensure total spore removal."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ambler's Trusted Closet Remediation Experts
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            Closet mold requires a delicate touch and clinical precision. We combine advanced HEPA technology with garment-safe sanitizers to restore your home's healthiest spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-[2rem] bg-slate-800/50 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 rounded-[3rem] bg-gradient-to-br from-purple-600 to-purple-800 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-purple-900/40">
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Clothing Smell Like Mildew?</h3>
            <p className="text-purple-50 text-lg font-medium opacity-90">
              Don't wait until your whole wardrobe is compromised. Our Ambler field team provides same-day inspections and garment-safe protocols.
            </p>
          </div>
          <a
            href="tel:3802660944"
            className="px-10 py-5 bg-white text-purple-600 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/10 flex items-center gap-3 whitespace-nowrap"
          >
            <ShieldCheck className="w-6 h-6" />
            (380) 266-0944
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
