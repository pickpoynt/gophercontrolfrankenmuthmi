import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import CorvallisRodentControlInfo from "@/components/landing/CorvallisRodentControlInfo";
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
        <title>rodent control corvallis oregon - Corvallis Rodent Control Pros</title>
        <meta name="description" content="rodent control corvallis oregon - Professional rodent control corvallis oregon. Licensed rat and mouse exterminators deploy proven elimination treatments, exclusion barriers, and full home protection across Corvallis, OR. Call (323) 880-1224 for 24/7 same-day service." />
        <meta name="keywords" content="rodent control corvallis oregon, corvallis rodent control, mouse exterminator corvallis, rat control oregon" />
        <link rel="canonical" href="https://rodentcontrolcorvallisoregon.com/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Corvallis Rodent Control Pros",
            "image": "/1.jpeg",
            "@id": "https://rodentcontrolcorvallisoregon.com/",
            "url": "https://rodentcontrolcorvallisoregon.com/",
            "telephone": "+13238801224",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "300 NW 2nd St",
              "addressLocality": "Corvallis",
              "addressRegion": "OR",
              "postalCode": "97330",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "44.5646",
              "longitude": "-123.2620"
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
            "serviceType": "Rodent Control",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Corvallis Rodent Control Pros"
            },
            "areaServed": {
              "@type": "City",
              "name": "Corvallis, OR"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Rodent Control Corvallis Oregon Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rodent Inspection & Entry Point Identification" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mice & Rat Exclusion Barrier" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Rodent Elimination" } }
              ]
            }
          })}
        </script>

        <meta property="og:title" content="rodent control corvallis oregon - Corvallis Rodent Control Pros" />
        <meta property="og:description" content="rodent control corvallis oregon - Licensed Corvallis OR rodent specialists. Same-day mice and rat elimination, exclusion barriers, and full home protection across Benton County, Oregon." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rodentcontrolcorvallisoregon.com/" />
        <meta property="og:image" content="/1.jpeg" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              rodent control <br />
              <span className="text-white drop-shadow-sm uppercase">corvallis oregon</span>
            </>
          }
          subtitle="Corvallis's most trusted rodent control specialists. We deploy targeted interior trapping, exterior exclusion applications, and full property decontamination to protect your Benton County home from rats and mice — fast and guaranteed."
          image="/1.jpeg"
          overlayImage="/2.jpeg"
          badge="CORVALLIS OREGON RODENT CONTROL ELITE"
          phone="3238801224"
        />
        <Services />
        <WhyUs />
        <CorvallisRodentControlInfo />
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
