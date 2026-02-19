import { ShieldCheck, Droplets, Activity, ClipboardCheck, MapPin, Construction, Locate, Search, Clock, Zap, Target, Filter, Waves } from "lucide-react";

const AnokaPlumbingInfo = () => {
    return (
        <section id="anoka-plumbing-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504148455328-4362779fb452?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Locate className="w-4 h-4" />
                            <span>Anoka County Infrastructure Specialists</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Expert <span className="text-indigo-600">Plumbing Services</span> in Anoka, MN
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Serving the "Halloween Capital of the World" with precision. We provide specialized plumbing diagnostics and rapid repair services for homes and businesses at the confluence of the Rum and Mississippi Rivers.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Service Excellence */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Construction className="w-7 h-7 text-indigo-600" />
                                    Anoka's Technical Solutions
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Waves className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Main Line Clearing</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Anoka's historic neighborhoods often deal with mature root systems affecting main sewer lines. We use hydro-jetting technology to clear stubborn blockages without excavation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Water Heater Optimization</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Minnesota winters put immense strain on water heaters. Our technicians specialize in ensuring your heating system is calibrated for maximum efficiency during the North's coldest months.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                                            <Droplets className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Sump Pump Reliability</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                With the Rum River nearby, basement flooding is a seasonal concern. We install and test heavy-duty sump pump systems with battery backups to protect your property.
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
                                    <MapPin className="w-7 h-7 text-indigo-600" />
                                    Serving Anoka & Beyond
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                    Providing rapid response plumbing services for the entire Anoka County region including:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Coon Rapids",
                                        "Ramsey",
                                        "Andover",
                                        "Champlin",
                                        "Ham Lake",
                                        "Blaine",
                                        "Otsego",
                                        "Oak Grove"
                                    ].map((area, index) => (
                                        <div key={index} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500" />
                                            <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{area}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* UNIQUE LOCAL CONTENT */}
                            <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                                <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Anoka's River City Advantage</h4>
                                <p className="text-indigo-50 text-sm leading-relaxed italic">
                                    Being at the heart of the Rum River confluence means Anoka homes face unique soil conditions and water table fluctuations. Our plumbing solutions are designed specifically for the environmental demands of Minnesota's river cities, focusing on durability and frost-resistant installations that withstand the deepest freezes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical Box */}
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
                        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight flex items-center gap-3">
                                    Emergency Leak?
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Whether it's a burst pipe in the middle of a Minnesota blizzard or a failing water heater on a Friday night, our Anoka-based technicians are ready to deploy 24/7.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">MN Master Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Anoka County Local</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest font-heading">Emergency Specialists</div>
                                </div>
                            </div>
                            <div className="bg-indigo-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform border border-indigo-400/30 shadow-2xl">
                                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">24/7 Emergency Line</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4 hover:text-white">
                                    (877) 792-1410
                                </a>
                                <p className="text-indigo-100 text-sm italic font-medium">
                                    Master-Grade Plumbing Anoka
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AnokaPlumbingInfo;
