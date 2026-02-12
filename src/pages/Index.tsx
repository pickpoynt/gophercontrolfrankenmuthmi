import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MustyOdorRemovalInfo from "@/components/landing/MustyOdorRemovalInfo";
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
        <title>Crawl space mold removal Haddon Heights</title>
        <meta name="description" content="Crawl space mold removal Haddon Heights. Expert crawl space mold remediation and moisture control in Haddon Heights, NJ. Professional mold cleanup. Call (380) 266-0944!" />
        <meta name="keywords" content="Crawl space mold removal Haddon Heights, crawl space mold remediation Haddon Heights NJ, Camden County mold removal, foundation mold cleanup" />
        <link rel="canonical" href="https://haddon-heights-crawlspace-mold.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Haddon Heights Crawl Space Pros",
            "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Haddon Heights",
              "addressRegion": "NJ",
              "postalCode": "08035",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.8804",
              "longitude": "-75.0660"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Haddon Heights, Camden County, NJ"
            },
            "priceRange": "$$",
            "description": "Professional crawl space mold removal in Haddon Heights, NJ. We specialize in deep-extraction mold remediation, vapor barrier installation, and structural dry-out for Haddon Heights foundations."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Crawl Space Mold Removal",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Haddon Heights Crawl Space Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Haddon Heights, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Crawl Space Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Biological Mold Extraction"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vapor Barrier Encapsulation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Air Scrubbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sub-Floor Moisture Control"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Crawl space mold removal Haddon Heights" />
        <meta property="og:description" content="Expert crawl space mold removal in Haddon Heights, NJ. Permanent remediation for foundation moisture and mold issues." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haddon-heights-crawlspace-mold.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Crawl space mold removal Haddon Heights
              <span className="block text-indigo-400 mt-2">HADDON HEIGHTS CRAWL SPACE PROS: FOUNDATION CARE</span>
            </>
          }
          subtitle="Is moisture trapped beneath your home? We specialize in scientific crawl space mold extraction, high-durability vapor barriers, and environmental resets for Haddon Heights residences."
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <MustyOdorRemovalInfo />
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
