
import { Droplet, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-accent/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center relative overflow-hidden">
            <div className="absolute bottom-0 w-full h-1/2 bg-[#333333]"></div>
            <Droplet className="w-6 h-6 text-accent transform -rotate-45 absolute top-1" />
            <Waves className="w-6 h-6 text-accent/80 absolute bottom-1" />
          </div>
          <span className="text-2xl font-display font-bold">
            Mark och Vattenbyrån
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-secondary transition-colors">Om återvätning</a>
          <a href="#services" className="hover:text-secondary transition-colors">Tjänster</a>
          <a href="#team" className="hover:text-secondary transition-colors">Om oss</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Kontakt</a>
          <Link to="/services" className="hover:text-secondary transition-colors">Mer om våra tjänster</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
