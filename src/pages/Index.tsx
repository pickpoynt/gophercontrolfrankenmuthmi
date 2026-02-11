import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import ClosetMoldCleanupInfo from "@/components/landing/ClosetMoldCleanupInfo";
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
        <title>Closet mold cleanup Ambler</title>
        <meta name="description" content="Closet mold cleanup Ambler. Professional mold removal for walk-in closets, garment protection, and small-space air scrubbing in Ambler, PA. Call (380) 266-0944!" />
        <meta name="keywords" content="Closet mold cleanup Ambler, mold removal closets Ambler PA, garment mold remediation Ambler, Montgomery County mold specialists" />
        <link rel="canonical" href="https://ambler-closet-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Ambler Closet Mold Cleanup",
            "image": "https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ambler",
              "addressRegion": "PA",
              "postalCode": "19002",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "40.1545",
              "longitude": "-75.2216"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "description": "Specialized closet mold cleanup and garment decontamination services in Ambler, PA. Expert small-space remediation and humidity control."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Closet Mold Cleanup",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Ambler Closet Mold Cleanup",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Ambler, Pennsylvania"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Mold Cleaning Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Small Space Remediation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Clothing & Fabric Salvage"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Micro-Scrubbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Humidity Source Mapping"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Closet mold cleanup Ambler" />
        <meta property="og:description" content="Professional closet mold removal in Ambler, PA. Protect your garments and air quality with specialized remediation. Call (380) 266-0944." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambler-closet-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1595428774223-ef52624120ec?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title="Closet mold cleanup Ambler"
          subtitle="Is your wardrobe at risk? Our specialized Ambler crews provide precise, HEPA-filtered cleanup for mold-infested closets and walk-in suites. We sanitize your space and help salvage your high-end garments with clinical precision. Ambler Closet Mold Cleanup: Expert Small Space Care."
          image="https://images.unsplash.com/photo-1558997519-83ec79029436?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <ClosetMoldCleanupInfo />
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
