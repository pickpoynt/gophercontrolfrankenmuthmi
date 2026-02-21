import { ArrowRight, Search, ShieldCheck, Bug, Droplets, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">rodent control corvallis oregon</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Corvallis homeowners and local businesses trust us for precision rat and mouse elimination, total structure exclusion, and full property decontamination. We target every rodent entry point found in Benton County properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Rodent Inspection",
              description: "Comprehensive inspection of your Corvallis property — identifying rat runways, mouse entry holes, nesting sites in insulation, and structural vulnerabilities unique to Willamette Valley homes.",
            },
            {
              icon: ShieldCheck,
              title: "Structure Exclusion",
              description: "Professional-grade exclusion work including steel mesh barriers, industrial sealant, and hardware cloth applied to foundation vents, roof lines, and utility penetrations rodents use to enter.",
            },
            {
              icon: Bug,
              title: "Targeted Elimination",
              description: "Strategic placement of high-efficiency traps and localized baiting systems to rapidly eliminate rats and mice already established inside your Corvallis, OR home or business.",
            },
            {
              icon: Home,
              title: "Attic & Crawl Decontamination",
              description: "Rodents leave dangerous pathogens in insulation. We provide full cleanup, sanitization, and insulation replacement to restore a healthy environment to your Benton County property.",
            }
          ].map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
              <a href="#contact">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 uppercase tracking-tight">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                  Get Service <ArrowRight className="w-4 h-4" />
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
