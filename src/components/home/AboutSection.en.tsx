import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSectionEN = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto section-animate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Rewetting of Peatlands
          </h2>
          <p className="text-xl text-center mb-8">
            Rewetting of drained peatlands is one of the most cost-effective measures to reduce greenhouse gas emissions and restore biodiversity. When peat soils dry out, they decompose and release large amounts of CO₂ into the atmosphere.
          </p>
          <p className="text-lg text-center mb-8 max-w-3xl mx-auto">
            We help landowners, municipalities, and organizations implement rewetting projects that meet both environmental goals and regulatory requirements. Our expertise covers everything from initial assessment to long-term monitoring.
          </p>
          <div className="text-center">
            <Link to="/en/services" className="inline-flex items-center hero-button group">
              Learn more about our services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionEN;