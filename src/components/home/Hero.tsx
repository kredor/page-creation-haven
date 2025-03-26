
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center section-animate">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Experter på 
          <span className="text-secondary"> återvätning</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Din partner för professionell projektering och uppföljning av återvätningsprojekt med fokus på grundvatten, växthusgaser och vegetation.
        </p>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          Vi är specialister inom naturrestaureringslagen (NRL), rewetting och Nature Restoration Law för restaurering av torvmarker och våtmarker i Mellansverige.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="hero-button group">
            Kontakta oss
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#about" className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Läs mer om återvätning
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
