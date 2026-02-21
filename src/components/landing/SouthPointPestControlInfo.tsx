import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind } from "lucide-react";

const SouthPointPestControlInfo = () => {
    return (
        <section id="south-point-pest-control-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Lawrence County Ohio Pest Control Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">pest control south point ohio</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Precision pest control for South Point, OH homes and businesses. We deploy targeted perimeter defense, indoor crack-and-crevice treatment, and comprehensive property exclusion to stop pest invasions permanently across Lawrence County.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    South Point Pest Control Protocol
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Full Property Assessment</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                South Point's older housing stock, river-valley topography, and dense tree lines create multiple pest entry points. Our pest control south point ohio specialists assess every crack, gap, crawl space, attic vent, and utility penetration before treatment begins — no harborage zone left unchecked.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Perimeter Residual Barrier</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We apply a professional-grade residual insecticide barrier around your home's full perimeter — foundation base, door frames, window wells, and garage entries — creating an invisible defense that stops ants, roaches, spiders, and other crawling pests before they enter.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Moisture & Entry Point Correction</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                South Point's humid Ohio River valley climate creates persistent moisture conditions that drive pests indoors. We treat and advise on drainage corrections, crawl space moisture barriers, and exclusion caulking to remove the conditions pests need to survive near your home year-round.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving South Point & Lawrence County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid pest control south point ohio service for these communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "South Point",
                                        "Ironton",
                                        "Chesapeake",
                                        "Coal Grove",
                                        "Proctorville",
                                        "Huntington WV",
                                        "Ashland KY",
                                        "Gallia County"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The South Point Pest Problem</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    South Point sits at the confluence of the Ohio River valley, Appalachian foothills, and Lawrence County's aging residential neighborhoods — a perfect storm for pest pressure. Springtime flooding drives rodents to higher ground inside homes. Summer heat brings ants, wasps, and cockroaches. Fall sends stink bugs and spiders indoors en masse. Our pest control south point ohio team knows these local cycles and deploys precisely timed treatments to break the pattern permanently.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">Pest Control South Point Ohio</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Bug, title: "Pests Indoors", desc: "Finding roaches, ants, or spiders inside your kitchen, bathroom, or basement is a clear sign of an active infestation requiring immediate professional pest control south point ohio treatment." },
                                { icon: Droplets, title: "Droppings or Damage", desc: "Rodent droppings in cabinets, gnaw marks on wood or wiring, or shredded insulation in your attic or crawl space are urgent signs of a rodent colony that needs professional elimination." },
                                { icon: Wind, title: "Seasonal Surges", desc: "Seeing large numbers of stink bugs, ladybugs, or box elder bugs entering through windows each fall is a sign your South Point home needs professional exclusion work before the next winter." }
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* South Point-Specific Unique Content */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight text-center">
                            Why South Point Pest Control Is <span className="text-indigo-600">Different</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <Thermometer className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">River Valley Pest Pressure</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">South Point's location along the Ohio River creates unique pest pressure. Seasonal flooding displaces rodents and insects from riverbanks directly toward residential properties. Standard pest control from general chain companies misses these locally specific patterns — our team doesn't.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Older Home Vulnerabilities</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Many South Point homes were built decades ago with construction gaps, aging foundations, and crawl spaces that create dozens of pest entry points that modern homes don't have. Our pest control south point ohio specialists are trained specifically in older Appalachian-region home construction and its unique pest vulnerabilities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <Activity className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Tri-State Coverage</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">South Point sits at the Ohio-Kentucky-West Virginia Tri-State border. Our pest control coverage extends across Lawrence County and into adjacent Cabell County WV and Boyd County KY — ensuring comprehensive protection no matter which side of the river your property is near.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <ClipboardCheck className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Ohio-Licensed & IPM Certified</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">All our pest control south point ohio technicians carry active Ohio Department of Agriculture pest control licenses and follow IPM (Integrated Pest Management) methodology — ensuring the most effective, lowest-risk treatment protocols for your family, home, and pets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Technical CTA Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-indigo-500/20">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight">
                                    Pests Taking Over Your South Point Home?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Don't let a small pest problem become a full-scale infestation. Every week without treatment allows pest populations to multiply. Our pest control south point ohio team is stationed locally in Lawrence County for rapid same-day response anywhere across the Tri-State region.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">OH State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">IPM Certified</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Same-Day Service</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Pest Control South Point Ohio</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    pest control south point ohio
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SouthPointPestControlInfo;
