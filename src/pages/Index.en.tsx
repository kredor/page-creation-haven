import NavigationEN from "@/components/home/Navigation.en";
import HeroEN from "@/components/home/Hero.en";
import AboutSectionEN from "@/components/home/AboutSection.en";
import ServicesSectionEN from "@/components/home/ServicesSection.en";
import PolicySectionEN from "@/components/home/PolicySection.en";
import TeamSectionEN from "@/components/home/TeamSection.en";
import MellansverigeFocusEN from "@/components/home/MellansverigeFocus.en";
import FAQSectionEN from "@/components/home/FAQSection.en";
import ContactSectionEN from "@/components/home/ContactSection.en";
import FooterEN from "@/components/home/Footer.en";

const IndexEN = () => {
  return (
    <div className="min-h-screen">
      <NavigationEN />
      <HeroEN />
      <AboutSectionEN />
      <ServicesSectionEN />
      <PolicySectionEN />
      <TeamSectionEN />
      <MellansverigeFocusEN />
      <FAQSectionEN />
      <ContactSectionEN />
      <FooterEN />
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Land and Water Bureau",
            "alternateName": "Mark och Vattenbyrån",
            "description": "Experts in rewetting of peatlands and wetlands in Central Sweden. Specialists in Nature Restoration Regulation (NRR) and rewetting.",
            "url": window.location.origin,
            "logo": `${window.location.origin}/mark-och-vattenbyran-logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "areaServed": "SE",
              "availableLanguage": ["Swedish", "English"]
            },
            "areaServed": {
              "@type": "Place",
              "name": "Central Sweden"
            },
            "serviceType": [
              "Rewetting",
              "Peatland Restoration",
              "Nature Restoration",
              "Environmental Analysis",
              "Greenhouse Gas Measurement",
              "Project Design"
            ],
            "expertise": [
              "Nature Restoration Regulation (NRR)",
              "Peatland Restoration",
              "Wetland Restoration", 
              "Greenhouse Gas Calculations",
              "Environmental Monitoring"
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
                "name": "What is rewetting and why is it important?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rewetting involves restoring the water balance in drained peatlands and wetlands. This is important for reducing greenhouse gas emissions, increasing biodiversity, and improving water regulation."
                }
              },
              {
                "@type": "Question", 
                "name": "What requirements does the Nature Restoration Regulation (NRR) impose?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The NRR requires EU countries to restore at least 20% of their land and sea areas by 2030. For wetlands and peatlands, this means concrete measures for rewetting."
                }
              },
              {
                "@type": "Question",
                "name": "Can I receive compensation for rewetting my land?",
                "acceptedAnswer": {
                  "@type": "Answer", 
                  "text": "Yes, there are several possibilities for financial compensation. This includes EU environmental compensations, LOVA support, and potential future carbon markets."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default IndexEN;