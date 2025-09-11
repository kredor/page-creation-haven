import { FileText, Droplet, LineChart, LeafyGreen, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSectionEN = () => {
  const services = [
    {
      title: "Consulting & Planning",
      description: "We start by investigating your lands and conditions. You receive guidance on where and how rewetting provides the greatest benefit.",
      icon: FileText,
    },
    {
      title: "Design & Implementation",
      description: "Our experts design technical solutions to raise groundwater levels – such as ditch plugging, dams, or other water-regulating measures.",
      icon: Droplet,
    },
    {
      title: "Certified Rewetting",
      description: "We offer rewetting services according to EU certification methodology for emission reductions through carbon sequestration.",
      icon: Award,
    },
    {
      title: "Long-term Monitoring",
      description: "After completed rewetting, we continue to support you with monitoring and evaluation of groundwater levels and greenhouse gas changes.",
      icon: LineChart,
    },
    {
      title: "Technical Expertise",
      description: "Peatland ecology is complex, but we master everything from hydrology to species knowledge and advanced measurement technology.",
      icon: LeafyGreen,
    },
    {
      title: "Nature Restoration Regulation (NRR)",
      description: "EU's new Nature Restoration Regulation creates binding requirements for member countries to restore drained peatlands.",
      icon: Globe,
      link: "/en/services"
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Services
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          We offer a comprehensive approach to peatland rewetting and handle every step of the project
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
                  Read more →
                </Link>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/en/services" className="hero-button group">
            Read more about our services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionEN;