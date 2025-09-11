import { FileText, Award } from "lucide-react";

const PolicySectionDE = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto section-animate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Naturwiederherstellungsverordnung (NWV)
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
            Die neue EU-Naturwiederherstellungsverordnung (verabschiedet 2024) setzt verbindliche Anforderungen für Mitgliedsstaaten zur Wiederherstellung entwässerter Torfmoore, insbesondere auf landwirtschaftlichen Flächen. Dies schafft große Chancen für Landbesitzer und lokale Akteure.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Konkrete Projekte</h3>
              </div>
              <p className="text-lg">
                Die neue Verordnung bedeutet, dass die Wiedervernässung von Torfböden ernsthaft priorisiert wird. Maßnahmen wie das Verstopfen von Gräben, die Schaffung neuer Feuchtgebiete oder die Wiederherstellung ehemaliger Torfabbaugebiete können nun Unterstützung erhalten und werden als wichtige Investitionen angesehen. Wir helfen Ihnen dabei zu identifizieren, welche Ihrer Flächen für die Wiedervernässung geeignet sind, um sowohl Vorschriften zu erfüllen als auch Umweltvorteile zu maximieren.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Unterstützung und Finanzierung</h3>
              </div>
              <p className="text-lg">
                Um die EU-Ziele zu erreichen, haben sowohl der schwedische Staat als auch die EU Mittel für die Naturwiederherstellung angekündigt. Verschiedene Unterstützungen und Zuschüsse sind für Feuchtgebietsprojekte verfügbar – wir führen Sie durch den Dschungel der Möglichkeiten. Wir helfen bei Anträgen und stellen sicher, dass das Projekt die Anforderungen für die Finanzierung erfüllt, damit Sie wirtschaftliche Unterstützung erhalten und gleichzeitig das Richtige für die Umwelt tun können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySectionDE;