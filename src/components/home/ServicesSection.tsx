
import { ArrowRight, Droplet, LeafyGreen, LineChart, Globe, FileText, Award, Euro, MapPin, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Rådgivning & planering",
      description: "Vi utreder era marker och förutsättningar, ger rådgivning om var återvätningen gör störst nytta och sköter myndighetskontakter och tillstånd.",
      icon: FileText
    },
    {
      title: "Projektering & genomförande",
      description: "Våra experter projekterar tekniska lösningar med drönare och avancerad mätteknik. Genomförandet sker sedan av erfarna fältteam.",
      icon: Droplet
    },
    {
      title: "Långsiktig uppföljning",
      description: "Vi fortsätter stödja er med monitorering, mäter grundvattennivåer, följer upp växthusgasavgång och dokumenterar effekten på biologisk mångfald.",
      icon: LineChart
    },
    {
      title: "Vegetationsanalys",
      description: "Vi analyserar och följer upp hur vegetationen förändras i samband med återvätning och restaurering av våtmarker.",
      icon: LeafyGreen
    },
    {
      title: "Certifierad återvätning",
      description: "Vi erbjuder certifierad återvätning enligt EU:s kommande CRCF-certifieringsmetodologi för utsläppsminskningar och kolinlagring.",
      icon: Award,
      link: "/methodology"
    },
    {
      title: "CAP Strategic Plans-rådgivning",
      description: "Hjälper markägare navigera EU:s nya jordbrukspolitik (CAP 2023-2027) och optimera bidragssystem för torvmarker.",
      icon: Euro
    },
    {
      title: "GAEC2 Compliance",
      description: "Stöd för att uppfylla EU:s nya minimikrav för torvmarksskydd enligt Good Agricultural and Ecological Condition 2.",
      icon: Award
    },
    {
      title: "Paludiculture-utveckling",
      description: "Konsultation kring våtodling som alternativ till traditionellt jordbruk - odling på våta torvmarker med bibehållen kolinlagring.",
      icon: LeafyGreen
    },
    {
      title: "Eco-schemes design",
      description: "Utveckling av miljöåtgärder som kvalificerar för EU:s bonusbetalningar (upp till 25% av direktbetalningarna).",
      icon: Globe
    },
    {
      title: "AECM-projektledning",
      description: "Agri-Environmental Climate Measures med betydande EU-finansiering (100-4600 EUR/ha/år) för torvmarksprojekt.",
      icon: Briefcase
    },
    {
      title: "Kartläggning och GIS",
      description: "Professionell kartläggning av torvmarker för att kvalificera för EU-stöd och uppfylla myndighetskrav.",
      icon: MapPin
    },
    {
      title: "Finansierings- och bidragsrådgivning",
      description: "Navigation genom komplexa EU-bidragssystem och hjälp med ansökningar för maximalt ekonomiskt stöd.",
      icon: Euro
    },
    {
      title: "Naturrestaureringsfördordningen (NRF)",
      description: "Rådgivning om EU:s Naturrestaureringsfördordningen, praktisk implementering och compliance-stöd.",
      icon: Globe
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 section-animate">
        <h2 className="section-title text-center">Våra tjänster</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Vi erbjuder ett helhetsgrepp på återvätning av torvmark och tar hand om varje steg i projektet
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="feature-card">
              <div className="flex items-center mb-4">
                <service.icon className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              {service.link && (
                <div className="mt-4">
                  <Link to={service.link} className="text-secondary hover:underline inline-flex items-center">
                    Läs mer
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center text-secondary hover:underline">
            Läs mer om våra tjänster
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
