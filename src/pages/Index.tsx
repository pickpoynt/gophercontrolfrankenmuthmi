import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import DentonSlabLeakInfo from "@/components/landing/DentonSlabLeakInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>slab leak repair denton tx | Denton Slab Leak Pros</title>
        <meta name="description" content="slab leak repair denton tx - Professional electronic slab leak detection and repair in Denton, TX. Expert foundation leak diagnostics and localized restoration. Call (877) 792-1410." />
        <meta name="keywords" content="slab leak repair denton tx, Denton TX leak detection, foundation water leak, concrete slab repair, North Texas plumbing restoration" />
        <link rel="canonical" href="https://slab-leak-repair-denton-tx.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Denton Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "215 E McKinney St",
              "addressLocality": "Denton",
              "addressRegion": "TX",
              "postalCode": "76201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.2148",
              "longitude": "-97.1331"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Denton, Texas"
            },
            "priceRange": "$$$",
            "description": "Expert electronic slab leak detection and repair services in Denton, TX. Specialized in residential leak diagnostics and foundation pipe restoration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Denton Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Denton, TX"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Denton Slab Leak Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Imaging Diagnostic"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sub-Slab Pipe Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak repair denton tx - Denton Slab Leak Pros" />
        <meta property="og:description" content="Professional electronic slab leak detection and restoration in Denton, TX. Protect your property with advanced diagnostics and master-grade plumbing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-repair-denton-tx.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak repair denton tx
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Denton Slab Leak Pros</span>
            </>
          }
          subtitle="Denton's premier experts in master-grade electronic slab leak detection and repair. We design high-performance main line solutions tailored for Texas's shifting soil conditions, ensuring long-term structural integrity. Engineering excellence for Denton County."
          image="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80"
          badge="DENTON SLAB LEAK RESTORATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <DentonSlabLeakInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;






