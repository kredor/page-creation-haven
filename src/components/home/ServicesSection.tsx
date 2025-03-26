
import { ArrowRight, Droplet, LeafyGreen, LineChart, Globe, FileText, Award } from "lucide-react";
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
      title: "EU-policy och naturrestaurering",
      description: "Rådgivning om naturrestaureringslagen (NRL), EU:s Nature Restoration Law och praktisk implementering i Sverige.",
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
