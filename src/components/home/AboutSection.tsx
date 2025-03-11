
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 section-animate">
        <h2 className="section-title text-center mb-12">Återvätning av torvmarker – för klimatet och naturen</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto mb-12">
          <p className="text-lg mb-6">
            Återvätning av torvmarker innebär att höja vattennivån i utdikade våtmarker. Det är en av de mest effektiva åtgärderna för att minska växthusgasutsläpp, återställa biologisk mångfald och förbättra vattenkvalitet.
          </p>
          <p className="text-lg mb-6">
            Genom att återväta dikad torvjord stoppar man torvens nedbrytning som frigör koldioxid, och man skapar samtidigt nya livsmiljöer för växter och djur. För markägare, myndigheter och även stora markägare som kyrkan betyder detta att man kan bidra till klimatmålen samtidigt som man får en rikare natur på sin mark.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Din partner för återvätning i Mellansverige</h3>
          <p className="text-lg mb-6">
            Vi är specialister på återvätning av torvmarker i Mellansverige. Med gedigen erfarenhet och djup kompetens inom agronomi och torvmarksekologi hjälper vi markägare, kommuner, myndigheter och kyrkan att planera och genomföra framgångsrika återvätningprojekt.
          </p>
          <p className="text-lg mb-6">
            Vårt företag erbjuder en komplett tjänst från idé till uppföljning – allt för att ni som kund ska känna er trygga genom hela processen. Vi anpassar språket och processen efter er kunskapsnivå, så att även ni som inte är experter lätt förstår nyttan och stegen i projektet.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/services" className="hero-button group">
            Utforska våra tjänster
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
