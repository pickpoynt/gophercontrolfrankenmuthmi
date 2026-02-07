import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Arizona Soil Experts",
    description: "Phoenix's hard-packed caliche soil makes traditional digging incredibly expensive. Our trenchless methods bypass the desert's toughest earth."
  },
  {
    icon: CheckCircle2,
    title: "Eco-Friendly Tech",
    description: "Trenchless repair uses 80% less heavy machinery, protecting your landscape and reducing the carbon footprint of your home repair."
  },
  {
    icon: Building2,
    title: "Zero Landscape Damage",
    description: "Keep your pavers, mature palm trees, and pools exactly where they are. We only need two small access points to replace an entire line."
  },
  {
    icon: ClipboardCheck,
    title: "Licensed & Certified",
    description: "We are factory-certified installers of industry-leading trenchless systems, backed by full Arizona plumbing licenses and bonding."
  },
  {
    icon: Zap,
    title: "Rapid Completion",
    description: "Traditional sewer replacement can take a week. Most of our trenchless lining projects are completed and live in a single business day."
  },
  {
    icon: MapPin,
    title: "Phoenix-Wide Service",
    description: "From North Mountain to Ahwatukee and Scottsdale to Glendale—we are your local, rapid-response trenchless specialists."
  }
];

const stats = [
  { number: "25k+", label: "Feet of Pipe Lined" },
  { number: "1-Day", label: "Completion Time" },
  { number: "50-Yr", label: "Pipe Life Span" },
  { number: "Licensed", label: "In Arizona" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Phoenix's First Choice for No-Dig Sewer Repair
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Experience the future of plumbing. We combine aerospace-grade epoxy with expert Arizona craftsmanship to deliver sewer solutions that last a lifetime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
