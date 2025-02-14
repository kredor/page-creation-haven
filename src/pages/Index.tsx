
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-accent/80 backdrop-blur-md z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-display font-bold">
            Företaget
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-secondary transition-colors">Funktioner</a>
            <a href="#about" className="hover:text-secondary transition-colors">Om oss</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center section-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Skapa något 
            <span className="text-secondary"> extraordinärt</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Vi hjälper företag att bygga moderna och användarvänliga digitala lösningar.
          </p>
          <button className="hero-button group">
            Kom igång
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Våra tjänster</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Om oss</h2>
          <div className="max-w-3xl mx-auto text-center mt-8">
            <p className="text-lg leading-relaxed">
              Vi är ett passionerat team som brinner för att skapa exceptionella digitala upplevelser. 
              Med års av erfarenhet hjälper vi företag att växa och utvecklas i den digitala världen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Kontakta oss</h2>
          <div className="max-w-md mx-auto mt-12">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">Namn</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">E-post</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">Meddelande</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button type="submit" className="hero-button w-full">
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-accent py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Företaget</h3>
            <p className="mb-6">Skapar morgondagens digitala lösningar</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">Twitter</a>
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "Webbdesign",
    description: "Vi skapar moderna och användarvänliga webbplatser som gör intryck.",
  },
  {
    title: "Utveckling",
    description: "Skräddarsydda lösningar med fokus på prestanda och användarupplevelse.",
  },
  {
    title: "Strategi",
    description: "Vi hjälper dig att utveckla en digital strategi som ger resultat.",
  },
];

export default Index;
