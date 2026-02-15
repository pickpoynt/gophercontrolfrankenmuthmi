import { Wrench, Droplet, Thermometer, Shield, Clock, Award, MapPin, Phone, Zap } from "lucide-react";

const WestMiltonPlumbingInfo = () => {
    return (
        <section id="west-milton-info" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 mb-6 uppercase tracking-widest text-xs font-bold">
                            <Zap className="w-4 h-4" />
                            <span>Miami County Local Authority</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
                            Elite <span className="text-blue-600">Plumbing Restoration</span> in West Milton
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed italic font-medium">
                            Serving the West Milton community and the greater Stillwater River region. We provide technical residential infrastructure maintenance and advanced system diagnostics for Miami County's historical and modern properties.
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - Priority Response */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-3">
                                    <Clock className="w-7 h-7 text-blue-600" />
                                    West Milton Priority Response
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Zap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Stillwater Valley Dispatch</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Centrally based to serve West Milton, Union, and Milton-Union areas. Our teams provide rapid deployment for pipe failures and system blockages across the Stillwater Valley valley.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Shield className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Village Infrastructure Care</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                West Milton blends historic village charm with new residential growth. We specialize in maintaining aging metallic pipe systems and integrating modern PEX and PVC solutions for reliable performance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-all">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                            <Droplet className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 uppercase text-sm tracking-wide">Advanced Water Quality Support</h4>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                Miami County water profiles can be challenging. We utilize advanced filtration diagnostics and sediment removal techniques to protect your home's internal plumbing network and fixture longevity.
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
                                    Serving West Milton & Miami County
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    We provide comprehensive master-licensed technical plumbing services to the Stillwater Valley region, including:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "West Milton",
                                        "Union",
                                        "Tipp City",
                                        "Troy",
                                        "Ludlow Falls",
                                        "Potsdam",
                                        "Laura",
                                        "Pleasant Hill"
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
                                    West Milton Infrastructure Pros
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-6 italic">
                                    Don't compromise on your home's technical reliability. Our Miami County experts provide master-licensed diagnostics and precision restoration throughout the Stillwater Valley.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Master Licensed</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Miami Co. Approved</div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Insured & Bonded</div>
                                </div>
                            </div>
                            <div className="bg-blue-600 rounded-2xl p-8 text-center transform hover:scale-105 transition-transform">
                                <p className="text-blue-100 text-sm font-bold uppercase tracking-widest mb-2">Service Hotline</p>
                                <a href="tel:8777921410" className="text-4xl font-bold transition-colors block mb-4">
                                    (877) 792-1410
                                </a>
                                <p className="text-blue-100 text-sm italic">
                                    Village Technical Support Available 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WestMiltonPlumbingInfo;
