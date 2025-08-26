
import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PolicySection from "@/components/home/PolicySection";
import TeamSection from "@/components/home/TeamSection";
import MellansverigeFocus from "@/components/home/MellansverigeFocus";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PolicySection />
      <TeamSection />
      <MellansverigeFocus />
      <FAQSection />
      <ContactSection />
      <Footer />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mark och Vattenbyrån",
            "description": "Experter på återvätning av torvmarker och våtmarker i Mellansverige. Specialister inom naturrestaureringslagen (NRL) och rewetting.",
            "url": window.location.origin,
            "logo": `${window.location.origin}/mark-och-vattenbyran-logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "areaServed": "SE",
              "availableLanguage": "Swedish"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Mellansverige"
            },
            "serviceType": [
              "Återvätning",
              "Rewetting",
              "Naturrestaurering",
              "Miljöanalyser",
              "Växthusgasmätning",
              "Projektering"
            ],
            "expertise": [
              "Naturrestaureringsfördordningen (NRF)",
              "Nature Restoration Law",
              "Torvmarksrestaurering",
              "Våtmarksrestaurering",
              "Växthusgasberäkningar",
              "Miljöövervakning"
            ]
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Vad är återvätning och varför är det viktigt?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Återvätning (rewetting) innebär att man återställer vattenbalansen i dikade torvmarker och våtmarker. Detta är viktigt för att minska växthusgasutsläpp, öka biologisk mångfald och förbättra vattenreglering."
                }
              },
              {
                "@type": "Question", 
                "name": "Vilka krav ställer Naturrestaureringsfördordningen (NRF)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NRF kräver att EU-länderna återställer minst 20% av sina land- och havsområden senast 2030. För våtmarker och torvmarker innebär detta konkreta åtgärder för återvätning."
                }
              },
              {
                "@type": "Question",
                "name": "Kan jag få ersättning för återvätning av min mark?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Ja, det finns flera möjligheter till ekonomisk ersättning. Detta inkluderar EU:s miljöersättningar, LOVA-stöd, och potentiella framtida koldioxidmarknader."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default Index;
