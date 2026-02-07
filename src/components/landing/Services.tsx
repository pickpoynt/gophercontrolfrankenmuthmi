import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, Ruler } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "CIPP Pipe Lining",
    description: "Cured-In-Place Pipe (CIPP) technology creates a brand new, structural pipe inside your existing one using epoxy resin, effectively fixing cracks and root intrusion.",
    link: "#trenchless-info"
  },
  {
    icon: Hammer,
    title: "Pipe Bursting",
    description: "A specialized tool pulls a new High-Density Polyethylene (HDPE) pipe through your old line, breaking the old pipe and replacing it in one continuous motion.",
    link: "#trenchless-info"
  },
  {
    icon: Search,
    title: "HD Video Inspection",
    description: "We use robotic sewer cameras to find exactly where your sewer line is failing, providing you with a high-definition recording and clear diagnostic report.",
    link: "#trenchless-info"
  },
  {
    icon: Zap,
    title: "Emergency Sewer Ops",
    description: "Available for rapid sewer backups in Phoenix. We can often clear the line and perform a trenchless repair faster than traditional excavation teams.",
    link: "#trenchless-info"
  },
  {
    icon: Droplets,
    title: "Hydro Jetting Scouring",
    description: "Using high-pressure water to blast through tree roots, grease, and scale, preparing your old host pipe for a smooth trenchless liner application.",
    link: "#trenchless-info"
  },
  {
    icon: Shield,
    title: "Commercial Trenchless",
    description: "Zero-downtime sewer repairs for Phoenix businesses. We fix lines under parking lots and sidewalks without closing your doors to customers.",
    link: "#trenchless-info"
  },
  {
    icon: Waves,
    title: "Permaliner Solutions",
    description: "Certified installers of industry-leading Permaliner systems, offering the highest strength-to-thickness ratio for modern trenchless pipe lining.",
    link: "#trenchless-info"
  },
  {
    icon: AlertTriangle,
    title: "Root Barrier Install",
    description: "Preventing future root damage in Phoenix's landscape by installing physical and chemical barriers after your sewer line has been restored.",
    link: "#trenchless-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Advanced Trenchless Services in Phoenix
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide the most innovative, non-invasive sewer solutions to protect your property and restore your drainage systems permanently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
