
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Methodology = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 pb-16">
        <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tillbaka till startsidan
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Certifierad återvätning av torvmarker
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6">Vårt arbetssätt för certifierad återvätning av torvmarker</h2>
          
          <p className="text-lg mb-8">
            Vi erbjuder professionella återvätningstjänster av dränerade torvmarker, i enlighet med EU:s kommande certifieringsmetodologi för utsläppsminskningar genom kolinlagring och jordbruksåtgärder (CRCF). Vår målsättning är att återställa hydrologin, minska växthusgasutsläpp och samtidigt skapa mervärden för biologisk mångfald, markhälsa och vattenreglering.
          </p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">🔍</span> 1. Inventering och projektförberedelse
              </h3>
              <p className="mb-4">
                Vi inleder varje projekt med en noggrann kartläggning av området:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identifiering av dränerade organogena jordar</li>
                <li>Kartläggning av tidigare markanvändning och dräneringsstatus</li>
                <li>Bedömning av torvtyp, djup och nedbrytningsgrad</li>
                <li>Vegetationsinventering och vattennivåmätningar</li>
                <li>Stratifiering av området i delytor med homogena förhållanden</li>
              </ul>
              <p>
                Vi använder både fältdata och fjärranalys (exempelvis satellitbilder, drönarbaserad LiDAR eller SEPLA-metodik) för att säkra geografisk spårbarhet och noggrannhet.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">📊</span> 2. Beräkning av uteblivna växthusgasutsläpp
              </h3>
              <p className="mb-4">
                Vi följer den metod som föreskrivs i CRCF-regelverket:
              </p>
              <div className="bg-gray-50 p-4 border-l-4 border-secondary mb-4">
                <p className="italic">
                  Netto reduktion = (Baslinjeutsläpp) – (Utsläpp efter återvätning) – (Associerade utsläpp)
                </p>
              </div>
              <p className="mb-4">
                Vi beräknar utsläppen med hjälp av emissionsfaktorer (EF) för CO₂, CH₄ och N₂O. Dessa baseras på:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nationella Tier 3-data (om tillgängligt)</li>
                <li>Processbaserade modeller (t.ex. CoupModel)</li>
                <li>Proxyvariabler (vattennivå, vegetation, torvnedbrytning)</li>
                <li>Direktmätningar med gasflödeskammare där så krävs</li>
              </ul>
              <p className="mt-4">
                Vi arbetar konservativt och med osäkerhetsuppskattning enligt IPCC:s riktlinjer.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">💧</span> 3. Åtgärder för återvätning
              </h3>
              <p className="mb-4">
                De praktiska åtgärder vi utför inkluderar:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Blockering, dammning eller igenfyllning av diken</li>
                <li>Avveckling av pumpar och dräneringsinfrastruktur</li>
                <li>Vegetationsåterställning och introduktion av torvbildande arter</li>
                <li>Etablering av paludikulturella system där lämpligt</li>
              </ul>
              <p className="mt-4">
                Alla åtgärder anpassas för att säkerställa både klimatnytta och biologisk mångfald enligt EU:s naturvårdsregler.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">📈</span> 4. Långsiktig övervakning och rapportering
              </h3>
              <p className="mb-4">
                Vi följer en övervakningsplan som sträcker sig över hela projektperioden (minst 20 år):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mätning av vattennivå (minst månadsvis)</li>
                <li>Vegetationsinventering vart femte år</li>
                <li>Rapportering till certifieringsorgan enligt gällande EU-standard</li>
                <li>Första certifieringsrevision efter fem år, därefter årligen</li>
              </ul>
              <p className="mt-4">
                Vid behov genomför vi direkta GHG-mätningar, särskilt under de första åren då metanemissioner kan fluktuera.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">♻️</span> 5. Certifiering och klimatnytta
              </h3>
              <p className="mb-4">
                När projektet uppfyller alla krav certifieras det av ett oberoende ackrediterat certifieringsorgan. Den certifierade klimatnyttan registreras som <strong>soil emission reduction units (t CO₂e)</strong> i ett godkänt certifieringsregister.
              </p>
              <p>
                Dessa enheter kan sedan nyttjas i klimatredovisning, klimatkompensation eller som del i frivilliga kolmarknader.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-lg font-medium text-center">
              Vår styrka ligger i vetenskapligt förankrad, praktiskt förverkligad och långsiktigt hållbar återvätning – med klimat, natur och markägare i centrum.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/#contact" className="hero-button group">
            Kontakta oss för mer information
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
              <span className="text-sm opacity-80 my-1">CRCF</span>
              <span className="text-sm opacity-80 my-1">certifiering</span>
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

export default Methodology;
