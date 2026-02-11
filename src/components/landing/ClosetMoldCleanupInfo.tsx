import { Shield, Shirt, Droplets, Wind, Zap, Scissors, Sparkles, Sprout } from "lucide-react";

const ClosetMoldCleanupInfo = () => {
    return (
        <section id="closet-mold-info" className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 mb-6 font-bold uppercase tracking-wider text-sm">
                            <Shirt className="w-4 h-4" />
                            Premium Garment & Space Protection
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                            Closet mold cleanup Ambler: Delicate Area Restoration
                        </h2>
                        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
                            Closets are micro-environments where stagnant air and wall-side temperature variances often lead to catastrophic mold growth on high-end garments and personal belongings. We provide surgical remediation for Ambler's most delicate spaces.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-purple-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mb-8 shadow-lg shadow-purple-200">
                                <Scissors className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Clothing Decontamination</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We utilize advanced HEPA-filtered vacuuming and specialized techniques to salvage luxury fabrics and leather goods affected by mold spores.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-purple-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mb-8 shadow-lg shadow-purple-200">
                                <Wind className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Micro-Space Scrubbing</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                Our ultra-compact HEPA air scrubbers are designed to filter 99.97% of spores from enclosed walk-in and reach-in closets.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-purple-900/5 border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center mb-8 shadow-lg shadow-purple-200">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Antimicrobial Fogging</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                We treat porous shelving and hidden corners with botanical antimicrobials that are safe for your garments but lethal to mold roots.
                            </p>
                        </div>
                    </div>

                    <div className="mt-20 bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
                        <div className="absolute inset-0 opacity-20">
                            <img
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80"
                                alt="Waitikiri Closet Cleanup"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ambler's Closet Health Experts</h3>
                                <p className="text-purple-100 text-lg leading-relaxed mb-8 opacity-90 font-medium">
                                    Historic Ambler homes often have closets on exterior walls, creating a 'cold spot' that attracts condensation. When paired with stored leather or wood, it's a breeding ground for mold. We address the root cause and restore the air.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Sprout className="text-purple-400 w-6 h-6" />
                                        Botanical Spore Neutralization
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Sprout className="text-purple-400 w-6 h-6" />
                                        Odor Elimination Protocols
                                    </div>
                                    <div className="flex items-center gap-3 text-white font-bold text-lg">
                                        <Sprout className="text-purple-400 w-6 h-6" />
                                        Ventilation Assessment
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <h4 className="text-2xl font-bold text-white mb-4">Signs of Closet Mold</h4>
                                <ul className="text-purple-50 space-y-4 font-medium opacity-80">
                                    <li>• Faint musty odors on clean laundry</li>
                                    <li>• White "dusting" on leather shoes or belts</li>
                                    <li>• Black spotting on exterior-facing closet walls</li>
                                    <li>• High humidity in walk-in suites</li>
                                    <li>• Condensation on metal shelving or rods</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClosetMoldCleanupInfo;
