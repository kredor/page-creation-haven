import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSectionDE = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto section-animate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Wiedervernässung von Torfmooren
          </h2>
          <p className="text-xl text-center mb-8">
            Die Wiedervernässung von entwässerten Torfmooren ist eine der kosteneffektivsten Maßnahmen zur Reduzierung von Treibhausgasemissionen und zur Wiederherstellung der Biodiversität. Wenn Torfböden austrocknen, zersetzen sie sich und setzen große Mengen CO₂ in die Atmosphäre frei.
          </p>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            Wir helfen Landbesitzern, Gemeinden und Organisationen bei der Umsetzung von Wiedervernässungsprojekten, die sowohl Umweltziele als auch regulatorische Anforderungen erfüllen. Unsere Expertise umfasst alles von der ersten Bewertung bis zur langfristigen Überwachung.
          </p>
          <div className="text-center">
            <Link to="/de/services" className="inline-flex items-center hero-button group">
              Mehr über unsere Dienstleistungen erfahren
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionDE;