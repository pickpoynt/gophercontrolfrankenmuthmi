import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import FairviewLeakDetectionInfo from "@/components/landing/FairviewLeakDetectionInfo";
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
        <title>Electronic slab leak detection Fairview TX</title>
        <meta name="description" content="Electronic slab leak detection Fairview TX - Professional non-invasive foundation leak detection in Fairview, Texas. Using digital acoustic sensors & thermal imaging. Call (877) 792-1410." />
        <meta name="keywords" content="Electronic slab leak detection Fairview TX, Fairview electronic leak detection, slab leak repair Fairview, Collin County leak specialists, plumbing leak Fairview" />
        <link rel="canonical" href="https://electronic-slab-leak-detection-fairview.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Electronic Slab Leak Pros Fairview",
            "image": "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "372 Town Pl",
              "addressLocality": "Fairview",
              "addressRegion": "TX",
              "postalCode": "75069",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.1465",
              "longitude": "-96.6186"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Fairview, TX"
            },
            "priceRange": "$$$",
            "description": "Specialized electronic slab leak detection and foundation plumbing repair services in Fairview, Texas. Advanced acoustic technology and thermal imaging."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Electronic Slab Leak Detection",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Electronic Slab Leak Pros Fairview",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Fairview, Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leak Detection Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Acoustic Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Slab Leak Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Thermal Imaging Diagnostics"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Electronic slab leak detection Fairview TX - Electronic Slab Leak Pros Fairview" />
        <meta property="og:description" content="Professional electronic slab leak detection in Fairview, TX. Rapid, non-invasive technology to pinpoint foundation leaks." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://electronic-slab-leak-detection-fairview.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Electronic slab leak detection Fairview TX
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl italic">Electronic Slab Leak Pros Fairview</span>
            </>
          }
          subtitle="Precision electronic diagnostics for Fairview's foundation leaks. We use non-invasive technology to pinpoint and repair leaks with zero guesswork. Serving North Texas with pride."
          image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
          overlayImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
          badge="FAIRVIEW'S ELECTRONIC LEAK EXPERTS"
        />
        <Services />
        <WhyUs />
        <FairviewLeakDetectionInfo />
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
