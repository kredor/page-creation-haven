
import { ArrowLeft, Droplet, LeafyGreen, LineChart, FileText, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tillbaka till startsidan
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Våra tjänster inom återvätning
        </h1>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Vi erbjuder ett helhetsgrepp på återvätning av torvmark och tar hand om varje steg i projektet
        </p>

        <div className="space-y-16 mb-16">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <service.icon className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-lg mb-6">{service.description}</p>
              <h3 className="text-xl font-semibold mb-4">Resultat:</h3>
              <p className="text-lg mb-6">{service.result}</p>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 h-6 w-6 text-secondary mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Naturrestaureringsförordningen – nya möjligheter för er</h2>
          <p className="text-lg mb-6">
            EU:s nya Naturrestaureringsförordning (antagen 2024) ställer bindande krav på att medlemsländerna återställer utdikade torvmarker, särskilt på jordbruksmark. Detta innebär stora möjligheter för markägare och lokala aktörer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Konkreta projekt</h3>
              </div>
              <p className="text-gray-700">
                Den nya förordningen gör att återvätning av torvjordar prioriteras på allvar. Åtgärder som att plugga igen diken, anlägga nya våtmarker eller restaurera tidigare torvtäkter kan nu få stöd och ses som viktiga investeringar. Vi hjälper er identifiera vilka av era marker som är lämpliga att återväta för att både uppfylla regelverk och maximera miljönyttan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Stöd och finansiering</h3>
              </div>
              <p className="text-gray-700">
                För att nå EU-målen har både svenska staten och EU utlyst medel för naturrestaurering. Olika stöd och bidrag finns att söka för våtmarksprojekt – vi guidar er genom djungeln av möjligheter. Vi hjälper till med ansökningar och ser till att projektet uppfyller kraven för finansiering, så att ni kan få ekonomiskt stöd och samtidigt göra rätt för miljön.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Samarbete med myndigheter</h3>
              </div>
              <p className="text-gray-700">
                Vi fungerar som en länk mellan markägare och myndigheter. Genom att samarbeta med kommuner, länsstyrelser och andra aktörer kan vi utforma projekt som gynnar alla parter. Tillsammans skapar vi win-win-lösningar där både miljön och ni som markägare vinner på resultatet.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6">Varför välja oss?</h2>
          <p className="text-lg mb-6">
            Med oss får ni en engagerad och kunnig partner som tar ett helhetsansvar för återvätning av torvmarker. Vi fokuserar på Mellansverige och känner väl till regionens unika förutsättningar – från myrarna i norr till jordbruksmarkerna i söder.
          </p>
          <p className="text-lg mb-6">
            Vår kundnära approach innebär att vi lyssnar på era mål, förklarar tydligt varje steg och anpassar lösningar efter just era behov. Genom att anlita oss kan ni vara säkra på att återvätningen utförs korrekt, kostnadseffektivt och med maximal miljönytta.
          </p>
          <p className="text-lg mb-8">
            Samtidigt slipper ni oroa er för byråkrati eller tekniska detaljer – vi sköter det åt er. Är ni redo att återställa värdefulla våtmarker och ta del av de möjligheter som ges?
          </p>
          <Link to="/#contact" className="hero-button group">
            Kontakta oss idag
          </Link>
        </div>
      </div>

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
              <span className="text-sm opacity-80 my-1">torvmarker</span>
              <span className="text-sm opacity-80 my-1">våtmarker</span>
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

const detailedServices = [
  {
    title: "Rådgivning & planering",
    description: "Vi börjar med att utreda era marker och förutsättningar. Ni får rådgivning kring var och hur en återvätning gör störst nytta. Vi sköter myndighetskontakter, tillstånd och samråd, så att allt går rätt till från början.",
    result: "En tydlig plan som uppfyller alla krav och mål, anpassad efter er mark och era behov.",
    icon: FileText,
    features: [
      "Noggrann analys av markförhållanden",
      "Kartläggning av dikessystem och avrinningsområden",
      "Miljöpåverkansbedömning",
      "Kontakt med myndigheter för tillstånd och samråd",
      "Anpassning till lokala förhållanden"
    ]
  },
  {
    title: "Projektering & genomförande",
    description: "Våra experter projekterar tekniska lösningar för att höja grundvattennivån – till exempel dikespluggning, dammar eller andra vattenreglerande åtgärder. Vi använder drönare och avancerad mätteknik för att kartlägga marken i detalj och planera åtgärderna med hög precision. Själva utförandet sker sedan av erfarna fältteam.",
    result: "En effektiv återvätning som genomförs säkert, i tid och inom budget.",
    icon: Droplet,
    features: [
      "3D-modellering av terrängen med drönarteknik",
      "Detaljerad planering av vattenreglerande åtgärder",
      "Tekniska lösningar anpassade till platsens förutsättningar",
      "Erfarna fältteam för genomförande",
      "Kontinuerlig uppföljning under genomförandet"
    ]
  },
  {
    title: "Långsiktig uppföljning",
    description: "Efter genomförd återvätning fortsätter vi stödja er med monitorering och utvärdering. Vi mäter grundvattennivåer, följer upp förändringar i växthusgasavgång (t.ex. koldioxid och metan) och dokumenterar effekten på biologisk mångfald före och efter. Ni får regelbundna rapporter som visar miljönyttan svart på vitt.",
    result: "Kvalitetssäkring av projektet över tid och värdefull data som kan användas för att söka fortsatt stöd eller informera allmänheten.",
    icon: LineChart,
    features: [
      "Kontinuerlig mätning av grundvattennivåer",
      "Växthusgasmätningar för att dokumentera klimatnytta",
      "Inventering av växt- och djurliv för att följa biodiversitetsutveckling",
      "Regelbundna rapporter och datavisualisering",
      "Vetenskapligt underbyggd dokumentation för stödansökningar"
    ]
  },
  {
    title: "Teknisk expertis",
    description: "Torvmarksekologi är komplext, men vi behärskar allt från hydrologi till artkunskap. Dessutom har vi spetskompetens inom avancerad mätteknik – vi använder drönare för flygfotografering och 3D-modellering av terrängen, 3D-skrivare för att ta fram specialanpassade mätinstrument, samt digitala sensorer för kontinuerlig övervakning.",
    result: "Optimerad återvätning med rätt vattennivåer för maximal klimatnytta och minimerad risk, som ger bestående positiva effekter.",
    icon: LeafyGreen,
    features: [
      "Drönare för kartläggning och modellering",
      "Specialanpassade mätinstrument för varje projekt",
      "Digitala sensorsystem för realtidsövervakning",
      "Expertis inom torvmarksekologi",
      "Klimat- och miljöoptimerade lösningar"
    ]
  }
];

export default Services;
