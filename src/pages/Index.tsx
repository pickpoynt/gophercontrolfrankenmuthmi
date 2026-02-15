import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WestChesterPlumbingInfo from "@/components/landing/WestChesterPlumbingInfo";
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
        <title>plumber west chester ohio West Chester OH</title>
        <meta name="description" content="plumber west chester ohio West Chester OH - Precision plumbing repair, leak detection & infrastructure maintenance. Reliable residential and commercial services for West Chester, Ohio. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber west chester ohio, West Chester plumber, plumbing repair West Chester, emergency plumber West Chester, Butler County plumbing, West Chester leak detection" />
        <link rel="canonical" href="https://west-chester-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "West Chester Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1542013936693-8846383242?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "West Chester",
              "addressRegion": "OH",
              "postalCode": "45069",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.3321",
              "longitude": "-84.4073"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "West Chester, OH"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in West Chester, Ohio. We specialize in technical diagnostics, infrastructure restoration, and master-licensed care for Butler County property owners."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Technical Residential Plumbing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "West Chester Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "West Chester, Ohio"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "West Chester Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Fiber-Optic Main Line Tracing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Pressure Regulation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Moisture Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber west chester ohio West Chester OH - West Chester Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in West Chester, Ohio. Technical restoration and infrastructure maintenance for Butler County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://west-chester-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1542013936693-8846383242?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber west chester ohio West Chester OH
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">West Chester Plumbing Pros</span>
            </>
          }
          subtitle="West Chester's trusted authority for resilient home infrastructure. We provide precision diagnostics, technical restoration, and master-licensed support for Butler County property owners. Engineering Excellence."
          image="https://images.unsplash.com/photo-1542013936693-8846383242?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
          badge="WEST CHESTER AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <WestChesterPlumbingInfo />
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
