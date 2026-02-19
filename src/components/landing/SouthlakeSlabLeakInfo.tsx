import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target } from "lucide-react";

const SouthlakeSlabLeakInfo = () => {
    return (
        <section id="southlake-slab-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Tarrant County Foundation Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Precision <span className="text-blue-600">Slab Leak Repair</span> in Southlake
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Preserving the architectural integrity of Southlake's premier properties. We specialize in advanced electronic diagnostics and non-destructive restoration for sub-foundation water line failures across North Texas.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-blue-600" />
                                    Southlake Structural Plumbing
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Target className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Electronic Frequency Triangulation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                By analyzing the specific sonic signatures of escaping pressurized water, we pinpoint the exact location of sub-slab breaches to within inches, minimizing the need for invasive concrete cutting.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Differential Thermal Imaging</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Our technicians deploy high-resolution infrared scans to detect subtle heat deltas on floor surfaces, identifying hot water line leaks that may not be audible but are compromising your foundation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Sub-Slab Pressure Analysis</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We conduct clinical pressure tests on individual water manifolds to isolate specific pipeline segments, ensuring a 100% accurate diagnostic before any restoration begins.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Expertise */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-blue-600" />
                                    Southlake & Tarrant County Areas
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Providing rapid, technical leak diagnostics for the following North Texas communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Southlake Town Square",
                                        "Westlake",
                                        "Colleyville",
                                        "Grapevine",
                                        "Keller",
                                        "Trophy Club",
                                        "Roanoke",
                                        "Flower Mound"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* UNIQUE GEOLOGICAL CONTENT */}
                            <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The North Texas Clay Challenge</h4>
                                <p className="text-blue-50 text-sm leading-relaxed italic">
                                    Southlake properties are built on highly active "expansive" clay. During North Texas's heat cycles, this soil can retract, removing support from your foundation. Conversely, sudden rain causes expansion that can shear pressurized copper or PVC lines beneath your slab. Our systems are engineered to detect these movement-based failures early.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Foundation Concerns?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Early detection is critical to preventing foundation upheaval and costly structural repairs. If you suspect a leak under your slab, our Southlake diagnostic team is ready to respond.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Sub-Slab Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Southlake Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Acoustic Logic</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-blue-400/30 shadow-2xl">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Emergency Service Available</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic font-medium">
                                    Master-Grade Foundation Restoration Southlake
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SouthlakeSlabLeakInfo;
