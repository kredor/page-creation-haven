import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroEN = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center section-animate">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Experts in 
          <span className="text-secondary"> rewetting</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Your partner for professional design and monitoring of rewetting projects with focus on groundwater, greenhouse gases and vegetation.
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          We are specialists in the Nature Restoration Regulation (NRR) and rewetting for restoration of peatlands and wetlands in Central Sweden.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="hero-button group">
            Contact us
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link to="/en/methodology" className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Our certified method
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroEN;