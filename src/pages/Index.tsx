
import { ArrowRight, Droplet, LeafyGreen, LineChart, Waves, Globe, FileText, Award, MapPin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
            <a href="#about" className="hover:text-secondary transition-colors">Om återvätning</a>
            <a href="#services" className="hover:text-secondary transition-colors">Tjänster</a>
            <a href="#team" className="hover:text-secondary transition-colors">Om oss</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Kontakt</a>
            <Link to="/services" className="hover:text-secondary transition-colors">Mer om våra tjänster</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center section-animate">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Experter på 
            <span className="text-secondary"> återvätning</span>
            <br />
            <span className="text-3xl md:text-4xl mt-2 block">i Mellansverige</span>
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

      {/* About Rewetting Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Våra tjänster</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Vi erbjuder ett helhetsgrepp på återvätning av torvmark och tar hand om varje steg i projektet
          </p>
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
          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center text-secondary hover:underline">
              Läs mer om våra tjänster
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EU Policy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center mb-10">Naturrestaureringsförordningen</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              EU:s nya Naturrestaureringsförordning (antagen 2024) ställer bindande krav på att medlemsländerna återställer utdikade torvmarker, särskilt på jordbruksmark. Till exempel ska en stor andel av dikad torvjord i produktion återställas redan till 2030, med stegvis ökade mål mot 2050.
            </p>
            <p className="text-lg mb-6">
              Detta kan låta som en utmaning, men det innebär också stora möjligheter för markägare och lokala aktörer. För att nå EU-målen har både svenska staten och EU utlyst medel för naturrestaurering.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="w-5 h-5 text-secondary mr-2" />
                  <h3 className="text-lg font-semibold">Konkreta projekt</h3>
                </div>
                <p className="text-gray-700">
                  Den nya förordningen gör att återvätning av torvjordar prioriteras på allvar. Vi hjälper er identifiera vilka av era marker som är lämpliga att återväta.
                </p>
              </div>
              <div className="p-4 border border-gray-100 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-secondary mr-2" />
                  <h3 className="text-lg font-semibold">Stöd och finansiering</h3>
                </div>
                <p className="text-gray-700">
                  Vi guidar er genom möjligheterna till ekonomiskt stöd och hjälper till med ansökningar och ser till att projektet uppfyller kraven för finansiering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Vårt team</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Vårt team består av agronomer, ekologer och ingenjörer med specialkunskap om våtmarker och torvjordar
          </p>
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
          <div className="mt-12 max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Ledande expertis och teknik</h3>
            <p className="text-gray-700 mb-4">
              Torvmarksekologi är komplext, men vi behärskar allt från hydrologi till artkunskap. Dessutom har vi spetskompetens inom avancerad mätteknik – vi använder drönare för flygfotografering och 3D-modellering av terrängen, 3D-skrivare för att ta fram specialanpassade mätinstrument, samt digitala sensorer och mätsystem för att kontinuerligt övervaka vatten och gasflöden.
            </p>
            <p className="text-gray-700">
              Denna kombination av kunskap och teknik gör att vi kan optimera återvätningen: vi säkerställer rätt vattennivåer för maximal klimatnytta och minimerad risk. Resultatet för er som kund blir en trygg och vetenskapsbaserad insats som ger bestående positiva effekter.
            </p>
          </div>
        </div>
      </section>

      {/* Mellansverige Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 section-animate">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-8 h-8 text-secondary mr-2" />
            <h2 className="text-3xl font-bold">Fokus på Mellansverige</h2>
          </div>
          <p className="text-xl text-center max-w-3xl mx-auto mb-6">
            Vi fokuserar på Mellansverige och känner väl till regionens unika förutsättningar – från myrarna i norr till jordbruksmarkerna i söder.
          </p>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Vår kundnära approach innebär att vi lyssnar på era mål, förklarar tydligt varje steg och anpassar lösningar efter just era behov.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 section-animate">
          <h2 className="section-title text-center">Kontakta oss</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Är ni redo att återställa värdefulla våtmarker och ta del av de möjligheter som ges? Tveka inte att kontakta oss.
          </p>
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
            <p className="mb-6">Experter på återvätning och miljöövervakning i Mellansverige</p>
            <div className="flex flex-wrap justify-center space-x-6 mb-8">
              <span className="text-sm opacity-80 my-1">återvätning</span>
              <span className="text-sm opacity-80 my-1">rewetting</span>
              <span className="text-sm opacity-80 my-1">naturrestaureringslagen</span>
              <span className="text-sm opacity-80 my-1">NRL</span>
              <span className="text-sm opacity-80 my-1">Nature Restoration Law</span>
              <span className="text-sm opacity-80 my-1">torvmarker</span>
              <span className="text-sm opacity-80 my-1">våtmarker</span>
              <span className="text-sm opacity-80 my-1">torvjord</span>
              <span className="text-sm opacity-80 my-1">peatland restoration</span>
              <span className="text-sm opacity-80 my-1">wetland restoration</span>
              <span className="text-sm opacity-80 my-1">Mellansverige</span>
            </div>
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
    title: "Rådgivning & planering",
    description: "Vi utreder era marker och förutsättningar, ger rådgivning om var återvätningen gör störst nytta och sköter myndighetskontakter och tillstånd.",
    icon: FileText
  },
  {
    title: "Projektering & genomförande",
    description: "Våra experter projekterar tekniska lösningar med drönare och avancerad mätteknik. Genomförandet sker sedan av erfarna fältteam.",
    icon: Droplet
  },
  {
    title: "Långsiktig uppföljning",
    description: "Vi fortsätter stödja er med monitorering, mäter grundvattennivåer, följer upp växthusgasavgång och dokumenterar effekten på biologisk mångfald.",
    icon: LineChart
  },
  {
    title: "Vegetationsanalys",
    description: "Vi analyserar och följer upp hur vegetationen förändras i samband med återvätning och restaurering av våtmarker.",
    icon: LeafyGreen
  },
  {
    title: "EU-policy och naturrestaurering",
    description: "Rådgivning om naturrestaureringslagen (NRL), EU:s Nature Restoration Law och praktisk implementering i Sverige.",
    icon: Globe
  }
];

const team = [
  {
    name: "Örjan Berglund",
    role: "Grundare & Projektledare",
    image: "/lovable-uploads/0a89a031-97a3-46dc-a5c0-f265939f38bc.png",
    description: "Forskare i markvetenskap med över 20 års erfarenhet inom miljöövervakning och mark- och vattenfrågor.",
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
    description: "Forskare i markvetenskap vid SLU med expertis inom växthusgasmätningar och torvmarker.",
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
    image: "/lovable-uploads/94356559-202d-45dc-8ac4-68ea422adf04.png",
    expertise: [
      "Hydrologisk modellering",
      "Övervakning av grundvattennivåer",
      "GIS och kartläggning av torvmarker",
      "Praktisk implementering av återvätning",
      "Tekniska lösningar för vattenreglering"
    ]
  }
];

export default Index;
