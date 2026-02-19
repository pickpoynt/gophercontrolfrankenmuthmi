import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MurrietaSlabLeakInfo from "@/components/landing/MurrietaSlabLeakInfo";
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
        <title>slab leak detection murrieta | Murrieta Slab Leak Pros</title>
        <meta name="description" content="slab leak detection murrieta - Professional electronic slab leak detection and repair in Murrieta, CA. Expert foundation leak diagnostics and non-invasive restoration. Call (877) 792-1410." />
        <meta name="keywords" content="slab leak detection murrieta, Murrieta CA leak detection, foundation water leak, concrete slab repair, Riverside County plumbing restoration" />
        <link rel="canonical" href="https://slab-leak-detection-murrieta.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Murrieta Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-497c596d229f?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "24630 Washington Ave",
              "addressLocality": "Murrieta",
              "addressRegion": "CA",
              "postalCode": "92562",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.5539",
              "longitude": "-117.2139"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Murrieta, California"
            },
            "priceRange": "$$$",
            "description": "Expert electronic slab leak detection and foundation pipe repair services in Murrieta, CA. Specialized in non-invasive leak diagnostics and structural plumbing restoration."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Murrieta Slab Leak Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Murrieta, CA"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Murrieta Slab Leak Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acoustic Pipe Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Non-Invasive Foundation Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="slab leak detection murrieta - Murrieta Slab Leak Pros" />
        <meta property="og:description" content="Professional electronic slab leak detection and restoration in Murrieta, CA. Protect your property with advanced diagnostics and master-grade plumbing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-detection-murrieta.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504148455328-497c596d229f?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              slab leak detection murrieta
              <span className="block text-emerald-400 mt-2 text-2xl md:text-3xl italic">Murrieta Slab Leak Pros</span>
            </>
          }
          subtitle="Murrieta's premier experts in master-grade electronic slab leak detection and foundation restoration. We design high-performance plumbing solutions tailored for Southern California's shifting soil conditions, ensuring long-term structural integrity. Engineering excellence for Riverside County."
          image="https://images.unsplash.com/photo-1504148455328-497c596d229f?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
          badge="MURRIETA SLAB LEAK RESTORATION SPECIALISTS"
        />
        <Services />
        <WhyUs />
        <MurrietaSlabLeakInfo />
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







