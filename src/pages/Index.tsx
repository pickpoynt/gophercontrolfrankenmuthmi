import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import WestMiltonPlumbingInfo from "@/components/landing/WestMiltonPlumbingInfo";
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
        <title>plumber west milton ohio West Milton OH</title>
        <meta name="description" content="plumber west milton ohio West Milton OH - Precision plumbing repair, leak detection & infrastructure maintenance. Reliable residential and commercial services for West Milton, Ohio. Call (877) 792-1410!" />
        <meta name="keywords" content="plumber west milton ohio, West Milton plumber, plumbing repair West Milton, emergency plumber West Milton, Miami County plumbing, West Milton leak detection" />
        <link rel="canonical" href="https://west-milton-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "West Milton Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "West Milton",
              "addressRegion": "OH",
              "postalCode": "45383",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.9614",
              "longitude": "-84.3274"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "West Milton, OH"
            },
            "priceRange": "$$",
            "description": "Professional residential plumbing services in West Milton, Ohio. We specialize in technical diagnostics, infrastructure restoration, and master-licensed care for Miami County property owners."
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
              "name": "West Milton Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "West Milton, Ohio"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "West Milton Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Stillwater Valley Leak Diagnostics"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Miami County Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Water Quality Optimization"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="plumber west milton ohio West Milton OH - West Milton Plumbing Pros" />
        <meta property="og:description" content="Expert plumbing solutions in West Milton, Ohio. Technical restoration and infrastructure maintenance for Miami County residents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://west-milton-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              plumber west milton ohio West Milton OH
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">West Milton Plumbing Pros</span>
            </>
          }
          subtitle="West Milton's trusted authority for resilient home infrastructure. We provide precision diagnostics, technical restoration, and master-licensed support for Miami County property owners. Village Engineering Heritage."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
          overlayImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=2000"
          badge="WEST MILTON AUTHORIZED PLUMBERS"
        />
        <Services />
        <WhyUs />
        <WestMiltonPlumbingInfo />
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
