import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Shirt, Sparkles, Scissors, Wind } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = "Closet mold cleanup Ambler",
  subtitle = "Is your wardrobe at risk? Our specialized Ambler crews provide precise, HEPA-filtered cleanup for mold-infested closets and walk-in suites. We sanitize your space and help salvage your high-end garments with clinical precision. Ambler Closet Mold Cleanup: Expert Small Space Care.",
  image = "https://images.unsplash.com/photo-1558997519-83ec79029436?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Closet mold cleanup Ambler" className="w-full h-full object-cover brightness-[0.45]" />
        {/* UNIQUE OVERLAY IMAGE: Using a delicate fabric/silk texture overlay */}
        <div className="absolute inset-0 opacity-25 mix-blend-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80"
            alt="Fabric Texture Overlay"
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-[12000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-8 animate-fade-in shadow-lg shadow-purple-500/5">
            <Shirt className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Ambler's Boutique Mold Restoration Team</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-purple-900/40" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                Cleanup Protocols
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-white font-medium">Garment Salvage</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Scissors className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-white font-medium">Surgical Detail</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Wind className="w-6 h-6 text-purple-400" />
              </div>
              <span className="text-white font-medium">Odor Elimination</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
