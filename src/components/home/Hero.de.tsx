import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroDE = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center section-animate">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Experten für 
          <span className="text-secondary"> Wiedervernässung</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Ihr Partner für professionelle Planung und Überwachung von Wiedervernässungsprojekten mit Fokus auf Grundwasser, Treibhausgase und Vegetation.
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Wir sind Spezialisten für die Naturwiederherstellungsverordnung (NWV) und Wiedervernässung zur Restaurierung von Torfmooren und Feuchtgebieten in Mittelschweden.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="hero-button group">
            Kontakt aufnehmen
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link to="/de/methodology" className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Unsere zertifizierte Methode
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroDE;