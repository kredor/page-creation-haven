import { FileText, Droplet, LineChart, LeafyGreen, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSectionDE = () => {
  const services = [
    {
      title: "Beratung & Planung",
      description: "Wir beginnen mit der Untersuchung Ihrer Flächen und Bedingungen. Sie erhalten Beratung darüber, wo und wie Wiedervernässung den größten Nutzen bringt.",
      icon: FileText,
    },
    {
      title: "Planung & Umsetzung",
      description: "Unsere Experten entwerfen technische Lösungen zur Anhebung des Grundwasserspiegels – wie Grabenverstopfung, Dämme oder andere wasserregulierende Maßnahmen.",
      icon: Droplet,
    },
    {
      title: "Zertifizierte Wiedervernässung",
      description: "Wir bieten Wiedervernässungsdienstleistungen nach EU-Zertifizierungsmethodik für Emissionsreduzierungen durch Kohlenstoffbindung an.",
      icon: Award,
    },
    {
      title: "Langfristige Überwachung",
      description: "Nach abgeschlossener Wiedervernässung unterstützen wir Sie weiterhin mit Überwachung und Bewertung von Grundwasserständen und Treibhausgasveränderungen.",
      icon: LineChart,
    },
    {
      title: "Technische Expertise",
      description: "Torfmoorökologie ist komplex, aber wir beherrschen alles von Hydrologie bis hin zu Artenkenntnissen und fortschrittlicher Messtechnik.",
      icon: LeafyGreen,
    },
    {
      title: "Naturwiederherstellungsverordnung (NWV)",
      description: "Die neue EU-Naturwiederherstellungsverordnung schafft verbindliche Anforderungen für Mitgliedsstaaten zur Wiederherstellung entwässerter Torfmoore.",
      icon: Globe,
      link: "/de/services"
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Unsere Dienstleistungen
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Wir bieten einen umfassenden Ansatz für die Wiedervernässung von Torfmooren und handhaben jeden Schritt des Projekts
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="feature-card group">
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.link && (
                <Link 
                  to={service.link} 
                  className="text-secondary hover:text-primary transition-colors font-medium"
                >
                  Mehr lesen →
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/de/services" className="hero-button group">
            Mehr über unsere Dienstleistungen lesen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionDE;