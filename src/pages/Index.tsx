import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import TrenchlessInfo from "@/components/landing/TrenchlessInfo";
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
        <title>Trenchless sewer repair Phoenix | Phoenix Trenchless Pros: No-Dig Sewer Solutions</title>
        <meta name="description" content="Expert Trenchless sewer repair Phoenix. Professional sewer pipe lining, pipe bursting, and no-dig sewer repair. Licensed plumbers serving Phoenix and Maricopa County. Call (877) 792-1410 today!" />
        <meta name="keywords" content="Trenchless sewer repair Phoenix, sewer pipe lining Phoenix, no dig sewer repair AZ, pipe bursting Phoenix, trenchless sewer replacement" />
        <link rel="canonical" href="https://trenchless-sewer-repair-phoenix.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Phoenix Trenchless Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "postalCode": "85001",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.4484",
              "longitude": "-112.0740"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Phoenix, Arizona"
            },
            "priceRange": "$$$",
            "description": "Professional trenchless sewer repair services in Phoenix, Arizona. We specialize in pipe lining and pipe bursting to fix sewer lines without digging up your yard."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Trenchless Sewer Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Phoenix Trenchless Pros",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Phoenix, Arizona"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Trenchless Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cured-In-Place Pipe (CIPP) Lining"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pipe Bursting Sewer Replacement"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Video Sewer Inspection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hydro Jetting Drain Cleaning"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Trenchless sewer repair Phoenix | Phoenix Trenchless Pros" />
        <meta property="og:description" content="Expert trenchless sewer repair in Phoenix, AZ. Permanent sewer solutions without the trench. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trenchless-sewer-repair-phoenix.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1541233349642-6e425fe6190e?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Trenchless sewer repair Phoenix
              <span className="block text-blue-400 mt-2">Phoenix Sewer Experts: Pipe Lining Specialists</span>
            </>
          }
          subtitle="Don't destroy your Arizona landscape. Our advanced trenchless technology restores your sewer lines from the inside out. Permanent, structural pipe lining and pipe bursting solutions for Phoenix homeowners. Save time, money, and your yard."
          image="https://images.unsplash.com/photo-1542013919164-94427b3fa437?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <TrenchlessInfo />
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
