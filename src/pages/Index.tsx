import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SouthPointPestControlInfo from "@/components/landing/SouthPointPestControlInfo";
import Contact from "@/components/landing/Contact";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>pest control south point ohio - South Point Pest Control Pros</title>
        <meta name="description" content="pest control south point ohio - Professional pest control south point ohio. Licensed pest specialists deploy proven elimination treatments, perimeter barriers, and full home protection across South Point, OH. Call (323) 880-1224 for 24/7 same-day service." />
        <meta name="keywords" content="pest control south point ohio, south point ohio pest control, pest exterminator south point oh, Lawrence county pest control" />
        <link rel="canonical" href="https://pestcontrolsouthpointohio.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "South Point Pest Control Pros",
            "image": "/1.jpeg",
            "@id": "https://pestcontrolsouthpointohio.com/",
            "url": "https://pestcontrolsouthpointohio.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "301 Solida Rd",
              "addressLocality": "South Point",
              "addressRegion": "OH",
              "postalCode": "45680",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "38.4268",
              "longitude": "-82.5766"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pest Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "South Point Pest Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "South Point, OH"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pest Control South Point Ohio Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pest Inspection & Identification" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perimeter Barrier Treatment" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Indoor Pest Elimination" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="pest control south point ohio - South Point Pest Control Pros" />
        <meta property="og:description" content="pest control south point ohio - Licensed South Point OH pest specialists. Same-day pest elimination, perimeter barrier treatments, and full home protection across Lawrence County, Ohio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pestcontrolsouthpointohio.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              pest control <br />
              <span className="text-white drop-shadow-sm uppercase">south point ohio</span>
            </>
          }
          subtitle="South Point's most trusted pest control specialists. We deploy targeted interior treatments, perimeter barrier applications, and full property exclusion to protect your Lawrence County home from pests — fast and guaranteed."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="SOUTH POINT OHIO PEST CONTROL ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <SouthPointPestControlInfo />
        <Contact />
        <FAQ />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
