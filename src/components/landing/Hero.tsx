import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Clock, Hammer } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = (
    <>
      Trenchless sewer repair Phoenix
      <span className="block text-blue-400 mt-2">Zero Digging. Permanent Pipe Restoration.</span>
    </>
  ),
  subtitle = "Professional trenchless sewer repair and pipe lining services in Phoenix, Arizona. We use cured-in-place pipe (CIPP) and pipe bursting technology to replace your old, broken sewer lines without turning your yard into a construction zone. Faster, cleaner, and built to last 50+ years.",
  image = "https://images.unsplash.com/photo-1542013919164-94427b3fa437?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="Phoenix Trenchless Sewer Repair" className="w-full h-full object-cover" />
        {/* UNIQUE OVERLAY IMAGE: Using a desert sun flare or geometric desert pattern texture */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80"
            alt="Warm Desert Texture Overlay"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-blue-900/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8 animate-fade-in shadow-xl">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Arizona's Trenchless Authorities</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1]">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl text-shadow">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-blue-900/40" asChild>
              <a href="tel:8777921410" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (877) 792-1410
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg" asChild>
              <a href="#services" className="flex items-center gap-2">
                See How It Works
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">No Yard Digging</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">1-Day Installs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">50-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
