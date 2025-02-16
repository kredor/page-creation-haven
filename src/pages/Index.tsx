
import { ArrowRight, Droplet, LeafyGreen, LineChart, Waves } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
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
            <a href="#services" className="hover:text-secondary transition-colors">Tjänster</a>
            <a href="#team" className="hover:text-secondary transition-colors">Om oss</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center section-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experter på 
            <span className="text-secondary"> återvätning</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Vi erbjuder professionell projektering och uppföljning av återvätningsprojekt med fokus på grundvatten, växthusgaser och vegetation.
          </p>
          <button className="hero-button group">
            Kontakta oss
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Våra tjänster</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div key={index} className="feature-card">
                <div className="flex items-center mb-4">
                  <service.icon className="w-6 h-6 text-secondary mr-2" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Vårt team</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                  ) : (
                    <AvatarFallback className="bg-gray-200"></AvatarFallback>
                  )}
                </Avatar>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="text-left text-sm space-y-2">
                  {member.description && (
                    <p className="text-gray-700">{member.description}</p>
                  )}
                  {member.expertise && (
                    <ul className="list-disc list-inside text-gray-600 pl-2">
                      {member.expertise.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {member.linkedin && (
                    <div className="text-center mt-4">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-secondary/80 transition-colors"
                      >
                        LinkedIn profil
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
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
            <h3 className="text-2xl font-display font-bold mb-4">Mark och Vattenbyrån</h3>
            <p className="mb-6">Experter på återvätning och miljöövervakning</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="mailto:kontakt@markovattenbyran.se" className="hover:text-secondary transition-colors">E-post</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Återvätningsprojektering",
    description: "Vi projekterar återvätning av utdikade marker med fokus på hållbarhet och effektivitet.",
    icon: Droplet
  },
  {
    title: "Miljöövervakning",
    description: "Uppföljning av grundvattenyta och växthusgasavgång för att säkerställa projektets framgång.",
    icon: LineChart
  },
  {
    title: "Vegetationsanalys",
    description: "Vi analyserar och följer upp hur vegetationen förändras i samband med återvätning.",
    icon: LeafyGreen
  },
];

const team = [
  {
    name: "Örjan Berglund",
    role: "Grundare & Projektledare",
    image: "/lovable-uploads/0a89a031-97a3-46dc-a5c0-f265939f38bc.png",
    description: "Docent i markvetenskap med över 20 års erfarenhet inom miljöövervakning och mark- och vattenfrågor.",
    expertise: [
      "Återvätning av organogena jordar",
      "Växthusgasmätningar",
      "Markfysikaliska undersökningar",
      "Projektledning inom miljöövervakning",
      "Dränering och vattenreglering"
    ],
    linkedin: "https://www.linkedin.com/in/orjanberglund/"
  },
  {
    name: "Sabine Jordan",
    role: "Miljöspecialist",
    image: "/lovable-uploads/d1b76eb2-cd5b-4ac6-8fde-9ee02a65d5c7.png",
    description: "Docent i markvetenskap vid SLU med expertis inom växthusgasmätningar och torvmarker.",
    expertise: [
      "Växthusgasmätningar från torvmarker",
      "Markfysikaliska och markkemiska analyser",
      "Återvätning av organogena jordar",
      "Naturbaserade klimatlösningar",
      "Torv och torvmarker"
    ],
    linkedin: "https://www.linkedin.com/in/sabine-jordan-24289316/"
  },
  {
    name: "Daniel Iseskog",
    role: "Teknisk Expert",
    image: "/lovable-uploads/94356559-202d-45dc-8ac4-68ea422adf04.png"
  }
];

export default Index;
