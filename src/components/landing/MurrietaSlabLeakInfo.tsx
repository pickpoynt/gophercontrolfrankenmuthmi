import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target } from "lucide-react";

const MurrietaSlabLeakInfo = () => {
    return (
        <section id="murrieta-slab-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-497c596d229f?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Riverside County Leak Detection Experts</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Advanced <span className="text-blue-600">Slab Leak Detection</span> in Murrieta
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting the structural foundations of Murrieta. Our local specialists utilize non-invasive electronic technology to triangulate sub-slab water breaches with scientific precision throughout the Temecula Valley.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-blue-600" />
                                    Temecula Valley Foundation Care
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Target className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Acoustic Sonic Location</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We use ultra-sensitive microphones to pick up the high-frequency "hisss" of pressurized water escaping pipes beneath your concrete slab, allowing for surgical repair access.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Activity className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Electronic Gas Tracing</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                For difficult-to-hear leaks, we introduce a safe nitrogen-hydrogen tracer gas into the lines. Our sensors detect the rising gas molecules to find the exact point of the pipe break.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Foundation Stress Analysis</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                A slab leak can cause soil erosion and foundation upheaval. We assess the surrounding structural impact to ensure your Murrieta home remains stable after the pipe is restored.
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
                                    Murrieta & Riverside Service Area
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid response electronic diagnostics across Murrieta and the surrounding Inland Empire:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Bear Creek",
                                        "Greer Ranch",
                                        "La Cresta",
                                        "Copper Canyon",
                                        "French Valley",
                                        "Temecula",
                                        "Wildomar",
                                        "Menifee"
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
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Murrieta Soil Factor</h4>
                                <p className="text-blue-50 text-sm leading-relaxed italic">
                                    Murrieta's geological profile includes expansive clay soil that undergoes significant movement during California's seasonal shifts. This natural expansion and contraction creates immense pressure on concrete slabs and the pressurized water lines beneath them. Our team specializes in finding leaks caused by these specific geological stressors.
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
                                    Unexplained Water Bill Bump?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    If you notice warm spots on your hardwood, wet carpets, or that your water meter is spinning when no water is running, your Murrieta property likely has a foundation leak.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Sub-Slab Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Murrieta Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Acoustic Logic</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-blue-400/30 shadow-2xl">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Priority Diagnostics</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic font-medium">
                                    Precision Foundation Restoration Murrieta
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MurrietaSlabLeakInfo;
