import { ArrowRight, Search, ShieldCheck, Bug, Droplets, Home } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Expert <span className="text-indigo-600">pest control south point ohio</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            South Point homeowners and businesses trust us for precision pest elimination, inside-out perimeter defense, and long-lasting protection. We target every pest harborage zone found in Lawrence County properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Pest Inspection",
              description: "Comprehensive inspection of your South Point property — identifying ant trails, rodent entry points, cockroach harborage zones, spider nests, and moisture-driven pest conditions unique to Lawrence County homes.",
            },
            {
              icon: ShieldCheck,
              title: "Perimeter Barrier Treatment",
              description: "Professional-grade residual barrier treatments applied to your home's foundation, door frames, window sills, and utility entries — creating an invisible shield pests cannot cross.",
            },
            {
              icon: Bug,
              title: "Indoor Pest Elimination",
              description: "Targeted crack-and-crevice treatments to flush and eliminate roaches, ants, spiders, and other invaders already inside your South Point, OH home or business.",
            },
            {
              icon: Home,
              title: "Rodent & Wildlife Control",
              description: "South Point's rural-meets-suburban landscape creates rodent pressure year-round. We identify and seal entry points, set strategic traps, and eliminate rodent colonies across your property.",
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
