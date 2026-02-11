import { Shield, Shirt, Droplets, Wind, Zap, Scissors, Sparkles, Sprout, ClipboardCheck } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Fabric Decontamination",
    description: "Specialized extraction and sanitization for high-end clothing, suits, and silk garments affected by closet spores.",
    link: "#closet-mold-info"
  },
  {
    icon: Wind,
    title: "Micro-Space Scrubbing",
    description: "HEPA air filtration specifically configured for small, enclosed spaces like reach-in and walk-in closets.",
    link: "#closet-mold-info"
  },
  {
    icon: Sparkles,
    title: "Eco-Safe Sanitizing",
    description: "Application of non-toxic, botanical antimicrobials that effectively kill mold without damaging upholstery or fabrics.",
    link: "#closet-mold-info"
  },
  {
    icon: Sprout,
    title: "Odor Neutralization",
    description: "Deep-cleaning protocols to eliminate the persistent musty smells that linger in closet shelving and drywall.",
    link: "#closet-mold-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            Boutique Closet Health Services
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Closet mold is a threat to your wardrobe and your health. Our Ambler teams provide specialized micro-remediation designed for high-value areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                  <service.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-purple-600 font-bold text-sm uppercase tracking-wider">
                  View Service <ClipboardCheck className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
