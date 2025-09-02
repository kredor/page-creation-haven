import { FileText, Award } from "lucide-react";

const PolicySectionEN = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto section-animate">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Nature Restoration Regulation (NRR)
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
            EU's new Nature Restoration Regulation (adopted 2024) sets binding requirements for member states to restore drained peatlands, particularly on agricultural land. This creates great opportunities for landowners and local actors.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Concrete Projects</h3>
              </div>
              <p className="text-lg">
                The new regulation means that rewetting of peat soils is seriously prioritized. Measures such as plugging ditches, creating new wetlands, or restoring former peat extraction sites can now receive support and are seen as important investments. We help you identify which of your lands are suitable for rewetting to both comply with regulations and maximize environmental benefits.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Support and Financing</h3>
              </div>
              <p className="text-lg">
                To reach EU goals, both the Swedish state and EU have announced funds for nature restoration. Various support and grants are available for wetland projects – we guide you through the jungle of opportunities. We help with applications and ensure that the project meets the requirements for financing, so you can get economic support while doing right by the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySectionEN;