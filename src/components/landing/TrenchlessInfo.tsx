import { ShieldCheck, FileCheck, Hammer, Microscope, MapPin, Gauge } from "lucide-react";

const TrenchlessInfo = () => {
    const techOptions = [
        {
            icon: Microscope,
            title: "CIPP Sewer Lining",
            description: "A flexible liner saturated with epoxy resin is inserted into your old sewer pipe. Once cured, it creates a new 'pipe-within-a-pipe' that is stronger than brand new PVC."
        },
        {
            icon: Hammer,
            title: "Pipe Bursting",
            description: "Using a hydraulic 'bursting head,' we pull a new HDPE pipe through your old, collapsed line, shattering the old pipe and expanding the space for the new one."
        },
        {
            icon: Gauge,
            title: "Hydro-Jetting Prep",
            description: "Our high-PSI water scouring process removes decades of scale, sludge, and tree roots, ensuring a perfect bond for the new trenchless liner."
        },
        {
            icon: FileCheck,
            title: "Digital Inspection",
            description: "Every Phoenix trenchless project starts and ends with a high-definition video inspection to verify structural integrity and flow capacity."
        }
    ];

    const phoenixFactors = [
        {
            icon: MapPin,
            title: "Navigating Caliche Soil",
            description: "Phoenix's 'caliche' is a rock-hard layer of calcium carbonate. Trenchless technology bypasses the need to jackhammer through this sub-layer, saving you time and labor costs."
        },
        {
            icon: ShieldCheck,
            title: "Orangeburg Pipe Warning",
            description: "Many 1950s-era Phoenix homes have 'Orangeburg' (bituminous fiber) pipes. These are prone to collapse. Our pipe bursting specialists can replace these completely without a trench."
        }
    ];

    return (
        <section id="trenchless-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 capitalize leading-tight">
                            The Future of <span className="text-blue-600">Sewer Repair in Phoenix</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed shadow-sm p-4 bg-white/50 rounded-xl border border-blue-100">
                            Stop the digging and save your home. Our trenchless methods provide a permanent, structural fix for your Phoenix sewer lines without the destruction of traditional excavation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {techOptions.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow-inner">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">Localized Phoenix Sewer Challenges</h3>
                            <div className="grid md:grid-cols-2 gap-12">
                                {phoenixFactors.map((factor, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <factor.icon className="w-6 h-6 text-blue-400" />
                                            <h4 className="text-lg font-bold">{factor.title}</h4>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                                            {factor.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Abstract Desert Map Pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
                    </div>

                    <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Facing a Massive Sewer Bill?</h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Trenchless repair is often 30-50% cheaper over the entire project life when compared to digging up and replacing expensive Phoenix landscaping.
                        </p>
                        <a
                            href="tel:8777921410"
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                        >
                            Call (877) 792-1410
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrenchlessInfo;
