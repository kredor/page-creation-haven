import { Droplet, Waves, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const NavigationDE = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "Über Wiedervernässung" },
    { href: "#services", label: "Dienstleistungen" },
    { href: "#team", label: "Über uns" },
    { href: "#contact", label: "Kontakt" },
    { to: "/de/services", label: "Mehr über unsere Dienstleistungen" },
  ];

  return (
    <nav className="fixed w-full bg-accent/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/de" className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center relative overflow-hidden">
            <div className="absolute bottom-0 w-full h-1/2 bg-[#333333]"></div>
            <Droplet className="w-6 h-6 text-accent transform -rotate-45 absolute top-1" />
            <Waves className="w-6 h-6 text-accent/80 absolute bottom-1" />
          </div>
          <span className="text-2xl font-display font-bold">
            Land und Wasser Büro
          </span>
        </a>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {isMobile ? (
            <div className="relative">
              <button 
                onClick={toggleMenu} 
                className="p-2 text-primary hover:text-secondary transition-colors"
                aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              
              {isMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-accent rounded-md shadow-lg border border-gray-200 overflow-hidden">
                  <div className="py-2">
                    {navLinks.map((link, index) => (
                      <div key={index} className="block">
                        {link.to ? (
                          <Link 
                            to={link.to} 
                            className="block px-4 py-3 hover:bg-gray-100 text-primary"
                            onClick={toggleMenu}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a 
                            href={link.href} 
                            className="block px-4 py-3 hover:bg-gray-100 text-primary"
                            onClick={toggleMenu}
                          >
                            {link.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.to ? (
                    <Link to={link.to} className="hover:text-secondary transition-colors">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-secondary transition-colors">
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationDE;