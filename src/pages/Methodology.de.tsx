import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MethodologyDE = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 pb-16">
        <Link to="/de" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Zertifizierte Wiedervernässung von Torfmooren
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6">Unsere Arbeitsweise für zertifizierte Wiedervernässung von Torfmooren</h2>
          
          <p className="text-lg mb-8">
            Wir bieten professionelle Wiedervernässungsdienstleistungen für entwässerte Torfmoore in Übereinstimmung mit der kommenden EU-Zertifizierungsmethodik für Emissionsreduzierungen durch Kohlenstoffbindung und landwirtschaftliche Maßnahmen (CRCF). Unser Ziel ist es, die Hydrologie wiederherzustellen, Treibhausgasemissionen zu reduzieren und gleichzeitig Mehrwerte für biologische Vielfalt, Bodengesundheit und Wasserregulierung zu schaffen.
          </p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">🔍</span> 1. Inventarisierung und Projektvorbereitung
              </h3>
              <p className="mb-4">
                Wir beginnen jedes Projekt mit einer sorgfältigen Kartierung des Gebiets:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identifizierung von entwässerten organogenen Böden</li>
                <li>Kartierung früherer Landnutzung und Entwässerungsstatus</li>
                <li>Bewertung von Torftyp, -tiefe und -zersetzungsgrad</li>
                <li>Vegetationsinventar und Wasserstandsmessungen</li>
                <li>Stratifizierung des Gebiets in Teilbereiche mit homogenen Bedingungen</li>
              </ul>
              <p>
                Wir verwenden sowohl Felddaten als auch Fernerkundung (z.B. Satellitenbilder, drohnenbasierte LiDAR oder SEPLA-Methodik), um geografische Nachverfolgbarkeit und Genauigkeit zu gewährleisten.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">📊</span> 2. Berechnung vermiedener Treibhausgasemissionen
              </h3>
              <p className="mb-4">
                Wir befolgen die im CRCF-Regelwerk vorgeschriebene Methode:
              </p>
              <div className="bg-gray-50 p-4 border-l-4 border-secondary mb-4">
                <p className="italic">
                  Nettoreduktion = (Baseline-Emissionen) – (Emissionen nach Wiedervernässung) – (Assoziierte Emissionen)
                </p>
              </div>
              <p className="mb-4">
                Wir berechnen Emissionen mit Hilfe von Emissionsfaktoren (EF) für CO₂, CH₄ und N₂O. Diese basieren auf:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nationalen Tier-3-Daten (falls verfügbar)</li>
                <li>Prozessbasierten Modellen (z.B. CoupModel)</li>
                <li>Proxy-Variablen (Wasserstand, Vegetation, Torfzersetzung)</li>
                <li>Direktmessungen mit Gasfluss-Kammern wo erforderlich</li>
              </ul>
              <p className="mt-4">
                Wir arbeiten konservativ und mit Unsicherheitsschätzung nach IPCC-Richtlinien.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">💧</span> 3. Maßnahmen zur Wiedervernässung
              </h3>
              <p className="mb-4">
                Die praktischen Maßnahmen, die wir durchführen, umfassen:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Blockierung, Abdämmung oder Verfüllung von Gräben</li>
                <li>Stilllegung von Pumpen und Entwässerungsinfrastruktur</li>
                <li>Vegetationswiederherstellung und Einführung torfbildender Arten</li>
                <li>Etablierung paludikultureller Systeme wo geeignet</li>
              </ul>
              <p className="mt-4">
                Alle Maßnahmen werden angepasst, um sowohl Klimanutzen als auch biologische Vielfalt nach EU-Naturschutzregeln zu gewährleisten.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">📈</span> 4. Langfristige Überwachung und Berichterstattung
              </h3>
              <p className="mb-4">
                Wir befolgen einen Überwachungsplan, der sich über die gesamte Projektlaufzeit erstreckt (mindestens 20 Jahre):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Messung des Wasserstands (mindestens monatlich)</li>
                <li>Vegetationsinventar alle fünf Jahre</li>
                <li>Berichterstattung an Zertifizierungsorgane nach geltendem EU-Standard</li>
                <li>Erste Zertifizierungsprüfung nach fünf Jahren, danach jährlich</li>
              </ul>
              <p className="mt-4">
                Bei Bedarf führen wir direkte THG-Messungen durch, insbesondere in den ersten Jahren, wenn Methanemissionen schwanken können.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">♻️</span> 5. Zertifizierung und Klimanutzen
              </h3>
              <p className="mb-4">
                Wenn das Projekt alle Anforderungen erfüllt, wird es von einem unabhängigen akkreditierten Zertifizierungsorgan zertifiziert. Der zertifizierte Klimanutzen wird als <strong>Boden-Emissionsreduktionseinheiten (t CO₂e)</strong> in einem anerkannten Zertifizierungsregister registriert.
              </p>
              <p>
                Diese Einheiten können dann in der Klimaberichterstattung, Klimakompensation oder als Teil freiwilliger Kohlenstoffmärkte genutzt werden.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-lg font-medium text-center">
              Unsere Stärke liegt in wissenschaftlich fundierter, praktisch umgesetzter und langfristig nachhaltiger Wiedervernässung – mit Klima, Natur und Landbesitzern im Mittelpunkt.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/de#contact" className="hero-button group">
            Kontaktieren Sie uns für weitere Informationen
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-accent py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Land und Wasser Büro</h3>
            <p className="mb-6">Experten für Wiedervernässung und Umweltüberwachung in Mittelschweden</p>
            <div className="flex flex-wrap justify-center space-x-6 mb-8">
              <span className="text-sm opacity-80 my-1">Wiedervernässung</span>
              <span className="text-sm opacity-80 my-1">rewetting</span>
              <span className="text-sm opacity-80 my-1">Naturwiederherstellungsgesetz</span>
              <span className="text-sm opacity-80 my-1">NWG</span>
              <span className="text-sm opacity-80 my-1">Torfmoore</span>
              <span className="text-sm opacity-80 my-1">Feuchtgebiete</span>
              <span className="text-sm opacity-80 my-1">Mittelschweden</span>
              <span className="text-sm opacity-80 my-1">CRCF</span>
              <span className="text-sm opacity-80 my-1">Zertifizierung</span>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://www.linkedin.com/company/mark-och-vattenbyr%C3%A5n/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="mailto:kontakt@markovattenbyran.se" className="hover:text-secondary transition-colors">E-Mail</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MethodologyDE;