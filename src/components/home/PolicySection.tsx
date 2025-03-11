
import { FileText, Award } from "lucide-react";

const PolicySection = () => {
  return (
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
  );
};

export default PolicySection;
