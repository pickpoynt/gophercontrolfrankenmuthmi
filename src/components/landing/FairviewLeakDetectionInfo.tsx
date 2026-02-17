import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone, Zap, Search, Radar } from "lucide-react";

const FairviewLeakDetectionInfo = () => {
    return (
        <section id="fairview-leak-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Radar className="w-4 h-4" />
                            <span>Collin County Electronic Leak Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Advanced <span className="text-blue-600">Electronic Slab Leak Detection</span> in Fairview
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Protecting Fairview properties with state-of-the-art electronic diagnostics. We pinpoint foundation leaks with zero-destruction precision in the North Texas area.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Tech & Precision */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Zap className="w-7 h-7 text-blue-600" />
                                    Electronic Precision
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Radar className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Digital Acoustic Sensors</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Our highly sensitive acoustic equipment can detect the frequency of escaping water through several feet of North Texas clay and concrete.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Foundation Integrity Preservation</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Slab leaks are common in Collin County due to shifting soil. We help you address them before they lead to massive structural foundation failure.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Thermometer className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Thermal Imaging Scans</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We combine electronic listening with thermal imaging to map hot water leaks under your floors, ensuring 100% accuracy before any repair begins.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Local Reach */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-blue-600" />
                                    Serving Fairview & Nearby Communities
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Deeply familiar with Fairview's luxury estates and sprawling residential properties:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Fairview Estates",
                                        "Heritage Ranch",
                                        "Oakwood Estates",
                                        "Chamberlain",
                                        "The Woods",
                                        "Allen",
                                        "McKinney",
                                        "Lucas"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Fairview's Tech-Lead Specialists
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Trust the experts who use technology, not guesswork. Fast, reliable, and locally owned.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Digital Precision</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Licensed & Insured</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Free Initial Consultation</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Leak Emergency Line</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic">
                                    Priority Dispatch to Fairview
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FairviewLeakDetectionInfo;
