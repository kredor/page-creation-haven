import { ArrowLeft, Droplet, LeafyGreen, LineChart, FileText, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesDE = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <Link to="/de" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Unsere Dienstleistungen in der Wiedervernässung
        </h1>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Wir bieten einen umfassenden Ansatz für die Wiedervernässung von Torfmooren und handhaben jeden Schritt des Projekts
        </p>

        <div className="space-y-16 mb-16">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <service.icon className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-lg mb-6">{service.description}</p>
              <h3 className="text-xl font-semibold mb-4">Ergebnisse:</h3>
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
          <h2 className="text-2xl font-bold mb-6 text-center">Naturwiederherstellungsverordnung (NWV) – neue Möglichkeiten für Sie</h2>
          <p className="text-lg mb-6">
            Die neue EU-Naturwiederherstellungsverordnung (NWV) (verabschiedet 2024) setzt verbindliche Anforderungen für Mitgliedsstaaten zur Wiederherstellung entwässerter Torfmoore, insbesondere auf landwirtschaftlichen Flächen. Dies schafft große Chancen für Landbesitzer und lokale Akteure.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Konkrete Projekte</h3>
              </div>
              <p className="text-gray-700">
                Die neue Verordnung bedeutet, dass die Wiedervernässung von Torfböden ernsthaft priorisiert wird. Maßnahmen wie das Verstopfen von Gräben, die Schaffung neuer Feuchtgebiete oder die Wiederherstellung ehemaliger Torfabbaugebiete können nun Unterstützung erhalten und werden als wichtige Investitionen angesehen. Wir helfen Ihnen dabei zu identifizieren, welche Ihrer Flächen für die Wiedervernässung geeignet sind, um sowohl Vorschriften zu erfüllen als auch Umweltvorteile zu maximieren.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Unterstützung und Finanzierung</h3>
              </div>
              <p className="text-gray-700">
                Um die EU-Ziele zu erreichen, haben sowohl der schwedische Staat als auch die EU Mittel für die Naturwiederherstellung angekündigt. Verschiedene Unterstützungen und Zuschüsse sind für Feuchtgebietsprojekte verfügbar – wir führen Sie durch den Dschungel der Möglichkeiten. Wir helfen bei Anträgen und stellen sicher, dass das Projekt die Anforderungen für die Finanzierung erfüllt, damit Sie wirtschaftliche Unterstützung erhalten und gleichzeitig das Richtige für die Umwelt tun können.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Zusammenarbeit mit Behörden</h3>
              </div>
              <p className="text-gray-700">
                Wir fungieren als Verbindung zwischen Landbesitzern und Behörden. Durch die Zusammenarbeit mit Gemeinden, Bezirksverwaltungen und anderen Akteuren können wir Projekte gestalten, die allen Parteien zugute kommen. Gemeinsam schaffen wir Win-Win-Lösungen, bei denen sowohl die Umwelt als auch Sie als Landbesitzer vom Ergebnis profitieren.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6">Warum uns wählen?</h2>
          <p className="text-lg mb-6">
            Mit uns erhalten Sie einen engagierten und sachkundigen Partner, der die Gesamtverantwortung für die Wiedervernässung von Torfmooren übernimmt. Wir konzentrieren uns auf Mittelschweden und kennen die einzigartigen Bedingungen der Region gut – von den Mooren im Norden bis zu den landwirtschaftlichen Flächen im Süden.
          </p>
          <p className="text-lg mb-6">
            Unser kundennaher Ansatz bedeutet, dass wir auf Ihre Ziele hören, jeden Schritt klar erklären und Lösungen nach Ihren spezifischen Bedürfnissen anpassen. Durch die Beauftragung von uns können Sie sicher sein, dass die Wiedervernässung korrekt, kosteneffektiv und mit maximalem Umweltnutzen durchgeführt wird.
          </p>
          <p className="text-lg mb-8">
            Gleichzeitig müssen Sie sich keine Gedanken über Bürokratie oder technische Details machen – wir kümmern uns darum für Sie. Sind Sie bereit, wertvolle Feuchtgebiete wiederherzustellen und die gebotenen Möglichkeiten zu nutzen?
          </p>
          <Link to="/de#contact" className="hero-button group">
            Kontaktieren Sie uns heute
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
              <span className="text-sm opacity-80 my-1">Torfmoorrestaurierung</span>
              <span className="text-sm opacity-80 my-1">Naturwiederherstellungsverordnung</span>
              <span className="text-sm opacity-80 my-1">NWV</span>
              <span className="text-sm opacity-80 my-1">Torfmoore</span>
              <span className="text-sm opacity-80 my-1">Feuchtgebiete</span>
              <span className="text-sm opacity-80 my-1">Mittelschweden</span>
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

const detailedServices = [
  {
    title: "Beratung & Planung",
    description: "Wir beginnen mit der Untersuchung Ihrer Flächen und Bedingungen. Sie erhalten Beratung darüber, wo und wie Wiedervernässung den größten Nutzen bringt. Wir handhaben Behördenkontakte, Genehmigungen und Konsultationen und stellen sicher, dass alles von Anfang an richtig gemacht wird.",
    result: "Ein klarer Plan, der alle Anforderungen und Ziele erfüllt, angepasst an Ihr Land und Ihre Bedürfnisse.",
    icon: FileText,
    features: [
      "Gründliche Analyse der Bodenverhältnisse",
      "Kartierung von Grabensystemen und Entwässerungsgebieten",
      "Umweltverträglichkeitsprüfung",
      "Kontakt mit Behörden für Genehmigungen und Konsultationen",
      "Anpassung an lokale Bedingungen"
    ]
  },
  {
    title: "Planung & Durchführung",
    description: "Unsere Experten entwerfen technische Lösungen zur Anhebung des Grundwasserspiegels – wie Grabenverstopfung, Dämme oder andere wasserregulierende Maßnahmen. Wir verwenden Drohnen und fortschrittliche Messtechnik, um das Land detailliert zu kartieren und Maßnahmen mit hoher Präzision zu planen. Die eigentliche Umsetzung erfolgt dann durch erfahrene Feldteams.",
    result: "Effektive Wiedervernässung, die sicher, termingerecht und im Budget durchgeführt wird.",
    icon: Droplet,
    features: [
      "3D-Geländemodellierung mit Drohnentechnologie",
      "Detaillierte Planung von wasserregulierenden Maßnahmen",
      "Technische Lösungen angepasst an Standortbedingungen",
      "Erfahrene Feldteams für die Durchführung",
      "Kontinuierliche Überwachung während der Durchführung"
    ]
  },
  {
    title: "Langfristige Überwachung",
    description: "Nach abgeschlossener Wiedervernässung unterstützen wir Sie weiterhin mit Überwachung und Bewertung. Wir messen Grundwasserstände, verfolgen Änderungen der Treibhausgasemissionen (z.B. Kohlendioxid und Methan) und dokumentieren die Auswirkungen auf die Biodiversität vor und nach der Maßnahme. Sie erhalten regelmäßige Berichte, die den Umweltnutzen schwarz auf weiß zeigen.",
    result: "Qualitätssicherung des Projekts über die Zeit und wertvolle Daten, die für weitere Förderanträge oder zur Information der Öffentlichkeit verwendet werden können.",
    icon: LineChart,
    features: [
      "Kontinuierliche Messung der Grundwasserstände",
      "Treibhausgasmessungen zur Dokumentation des Klimanutzens",
      "Inventarisierung von Flora und Fauna zur Verfolgung der Biodiversitätsentwicklung",
      "Regelmäßige Berichte und Datenvisualisierung",
      "Wissenschaftlich fundierte Dokumentation für Förderanträge"
    ]
  },
  {
    title: "Technische Expertise",
    description: "Torfmoorökologie ist komplex, aber wir beherrschen alles von Hydrologie bis Artenkenntnissen. Darüber hinaus haben wir Spitzenexpertise in fortschrittlicher Messtechnik – wir verwenden Drohnen für Luftaufnahmen und 3D-Geländemodellierung, 3D-Drucker zur Herstellung maßgeschneiderter Messinstrumente und digitale Sensoren für kontinuierliche Überwachung.",
    result: "Optimierte Wiedervernässung mit korrekten Wasserständen für maximalen Klimanutzen und minimiertes Risiko, die dauerhafte positive Effekte liefert.",
    icon: LeafyGreen,
    features: [
      "Drohnen für Kartierung und Modellierung",
      "Maßgeschneiderte Messinstrumente für jedes Projekt",
      "Digitale Sensorsysteme für Echtzeit-Überwachung",
      "Expertise in Torfmoorökologie",
      "Klima- und umweltoptimierte Lösungen"
    ]
  }
];

export default ServicesDE;