import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Locate, Search, Zap, AlertTriangle, Bug, Thermometer, Wind } from "lucide-react";

const CorvallisRodentControlInfo = () => {
    return (
        <section id="corvallis-rodent-control-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/1.jpeg')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Benton County Oregon Rodent Control Elite</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">rodent control corvallis oregon</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Precision rodent elimination for Corvallis, OR homes and businesses. We deploy targeted interior trapping, heavy-duty structural exclusion, and full-attic decontamination to stop rat and mouse invasions permanently across Benton County.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <AlertTriangle className="w-7 h-7 text-rose-500" />
                                    The Corvallis Rodent Threat
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Deer Mouse & Norway Rat Invasions</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Corvallis's lush landscape and agricultural borders make it a prime target for Deer Mice and Norway Rats. These rodents carry Leer and Hantavirus, posing direct health risks. Our rodent control corvallis oregon specialists identify the specific species invading your structure to deploy the most effective elimination protocol.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Total Structure Exclusion</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                We don't just set traps; we seal your home. Using industrial-grade steel mesh, structural sealants, and hardware cloth, we block every entry point in foundation vents, roof lines, and crawl space portals. If they can't get in, they can't infest — providing you with a permanent solution.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Benton County Moisture Defense</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                The humid Willamette Valley climate drives rodents toward dry nesting sites in attics and crawl spaces. We treat the infestation and address moisture conditions that attract rodents, including vapor barrier repair and attic sanitization to remove attractant pheromones.
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
                                    Serving Corvallis & Benton County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Rapid rodent control corvallis oregon service for these communities:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Corvallis",
                                        "Philomath",
                                        "Albany",
                                        "Lebanon",
                                        "Tangent",
                                        "Adair Village",
                                        "Monroe",
                                        "Willamette Valley"
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
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">The Rainy Season Surge</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    In Corvallis, when the rains begin in October, rodent pressure on residential structures triples. Field mice and city rats seek the warmth and dryness of your attic, crawl space, and kitchen walls. Our rodent control corvallis oregon team is optimized for these seasonal surges, deploying aggressive exclusion and trapping strategies that stop infestations before they become established in your home's infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Signs Section */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight text-center">
                            Signs You Need <span className="text-indigo-600">Rodent Control Corvallis Oregon</span>
                        </h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Bug, title: "Noises in Walls", desc: "Scratching, scuttling, or squeaking noises in your ceiling or walls, especially at night, are primary indicators of a rodent infestation requiring immediate rodent control corvallis oregon intervention." },
                                { icon: Droplets, title: "Droppings Found", desc: "Small, dark, pellet-like droppings in pantry corners, under sinks, or in your attic are conclusive evidence of active mice or rats. Professional elimination is required to prevent population growth." },
                                { icon: Wind, title: "Gnaw Marks", desc: "Finding gnaw marks on food packaging, wooden baseboards, or electrical wiring is a critical warning sign. Rodents must gnaw to maintain their teeth; our team identifies these marks to find nesting zones." }
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

                    {/* Corvallis-Specific Unique Content */}
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12 border border-slate-200">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight text-center">
                            Why Corvallis Rodent Control Is <span className="text-indigo-600">Specialized</span>
                        </h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <Thermometer className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Willamette Valley Humidity Control</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">High humidity in Corvallis crawl spaces attracts rodents and promotes rapid nesting. Our rodent control corvallis oregon specialists address the environmental factors, not just the animals, ensuring your home is no longer a hospitable environment for pests.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Older Structure Vulnerabilities</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Corvallis's historic and older homes often have crawl space access and attic vents that have degraded over decades. We specialize in structural retrofitting for these older Benton County properties, installing permanent rodent-proof barriers that modern construction methods often lack.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <Activity className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Agri-Zone Pressure Management</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">Properties on the edge of Corvallis face extreme rodent pressure from adjacent fields and orchards. We deploy 'Integrated Barrier Defense' strategies that create multiple layers of protection between the agricultural fields and your living space.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                        <ClipboardCheck className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Oregon Structural Licensed</h4>
                                        <p className="text-slate-600 text-sm leading-relaxed">All our rodent control corvallis oregon technicians carry active Oregon Department of Agriculture structural pest licenses, ensuring that every treatment and exclusion we perform meets the highest legal and safety standards in the state.</p>
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
                                    Hearing Rodents in Your Ceiling?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic font-medium">
                                    Every night you wait allows rodent colonies to grow and further damage your insulation and wiring. Our rodent control corvallis oregon team is stationed locally for rapid same-day response anywhere in Benton County.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">OR State Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Exclusion Specialists</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Same-Day Service</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Rodent Control Corvallis Oregon</p>
                                <a href="tel:3238801224" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (323) 880-1224
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    rodent control corvallis oregon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorvallisRodentControlInfo;
