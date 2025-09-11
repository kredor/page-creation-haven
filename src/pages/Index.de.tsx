import NavigationDE from "@/components/home/Navigation.de";
import HeroDE from "@/components/home/Hero.de";
import AboutSectionDE from "@/components/home/AboutSection.de";
import ServicesSectionDE from "@/components/home/ServicesSection.de";
import PolicySectionDE from "@/components/home/PolicySection.de";
import TeamSectionDE from "@/components/home/TeamSection.de";
import MellansverigeFocusDE from "@/components/home/MellansverigeFocus.de";
import FAQSectionDE from "@/components/home/FAQSection.de";
import ContactSectionDE from "@/components/home/ContactSection.de";
import FooterDE from "@/components/home/Footer.de";

const IndexDE = () => {
  return (
    <div className="min-h-screen">
      {/* SEO structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Land und Wasser Büro",
          "alternateName": "Mark och Vattenbyrån",
          "description": "Experten für Wiedervernässung und Umweltüberwachung in Mittelschweden. Spezialisiert auf Torfmoorrestaurierung, Naturwiederherstellungsverordnung (NWV) und zertifizierte Wiedervernässungsprojekte.",
          "url": "https://markovattenbyran.se/de",
          "logo": "https://markovattenbyran.se/mark-och-vattenbyran-logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+46-70-123-45-67",
            "contactType": "Kundenservice",
            "email": "kontakt@markovattenbyran.se",
            "availableLanguage": ["German", "Swedish", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Mittelschweden",
            "addressCountry": "SE"
          },
          "sameAs": [
            "https://www.linkedin.com/company/mark-och-vattenbyr%C3%A5n/"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 59.6099,
              "longitude": 16.5448
            },
            "geoRadius": "200000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wiedervernässungsdienstleistungen",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Torfmoor-Wiedervernässung",
                  "description": "Professionelle Wiedervernässung von entwässerten Torfmooren"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Umweltüberwachung",
                  "description": "Langfristige Überwachung von Grundwasser und Treibhausgasen"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "NWV-Beratung",
                  "description": "Beratung zur Naturwiederherstellungsverordnung"
                }
              }
            ]
          }
        })}
      </script>

      {/* SEO structured data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Was ist Wiedervernässung und warum ist sie wichtig?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wiedervernässung beinhaltet die Wiederherstellung des Wasserhaushalts in entwässerten Torfmooren und Feuchtgebieten. Dies ist wichtig zur Reduzierung von Treibhausgasemissionen, zur Erhöhung der Biodiversität und zur Verbesserung der Wasserregulierung."
              }
            },
            {
              "@type": "Question", 
              "name": "Welche Anforderungen stellt die Naturwiederherstellungsverordnung (NWV)?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die NWV verpflichtet EU-Länder dazu, bis 2030 mindestens 20% ihrer Land- und Meeresgebiete zu restaurieren. Für Feuchtgebiete und Torfmoore bedeutet dies konkrete Maßnahmen zur Wiedervernässung."
              }
            },
            {
              "@type": "Question",
              "name": "Kann ich eine Entschädigung für die Wiedervernässung meines Landes erhalten?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "Ja, es gibt mehrere Möglichkeiten für finanzielle Entschädigung, einschließlich EU-Umweltentschädigungen, LOVA-Unterstützung und potenzielle zukünftige Kohlenstoffmärkte."
              }
            }
          ]
        })}
      </script>

      <NavigationDE />
      <main>
        <HeroDE />
        <AboutSectionDE />
        <ServicesSectionDE />
        <PolicySectionDE />
        <TeamSectionDE />
        <MellansverigeFocusDE />
        <FAQSectionDE />
        <ContactSectionDE />
      </main>
      <FooterDE />
    </div>
  );
};

export default IndexDE;