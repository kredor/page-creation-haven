import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MethodologyEN = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4 pb-16">
        <Link to="/en" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Certified Rewetting of Peatlands
        </h1>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Approach to Certified Peatland Rewetting</h2>
          
          <p className="text-lg mb-8">
            We offer professional rewetting services for drained peatlands, in accordance with EU's upcoming certification methodology for emission reductions through carbon sequestration and agricultural measures (CRCF). Our goal is to restore hydrology, reduce greenhouse gas emissions, and simultaneously create added value for biodiversity, soil health, and water regulation.
          </p>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">🔍</span> 1. Inventory and Project Preparation
              </h3>
              <p className="mb-4">
                We begin each project with thorough mapping of the area:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Identification of drained organic soils</li>
                <li>Mapping of previous land use and drainage status</li>
                <li>Assessment of peat type, depth, and decomposition degree</li>
                <li>Vegetation inventory and water level measurements</li>
                <li>Stratification of the area into sub-areas with homogeneous conditions</li>
              </ul>
              <p>
                We use both field data and remote analysis (such as satellite images, drone-based LiDAR, or SEPLA methodology) to ensure geographic traceability and accuracy.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">📊</span> 2. Calculation of Avoided Greenhouse Gas Emissions
              </h3>
              <p className="mb-4">
                We follow the method prescribed in the CRCF regulation:
              </p>
              <div className="bg-gray-50 p-4 border-l-4 border-secondary mb-4">
                <p className="italic">
                  Net reduction = (Baseline emissions) – (Emissions after rewetting) – (Associated emissions)
                </p>
              </div>
              <p className="mb-4">
                We calculate emissions using emission factors (EF) for CO₂, CH₄, and N₂O. These are based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>National Tier 3 data (if available)</li>
                <li>Process-based models (e.g., CoupModel)</li>
                <li>Proxy variables (water level, vegetation, peat decomposition)</li>
                <li>Direct measurements with gas flux chambers where required</li>
              </ul>
              <p className="mt-4">
                We work conservatively and with uncertainty estimation according to IPCC guidelines.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">💧</span> 3. Rewetting Measures
              </h3>
              <p className="mb-4">
                The practical measures we implement include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Blocking, damming, or filling of ditches</li>
                <li>Decommissioning of pumps and drainage infrastructure</li>
                <li>Vegetation restoration and introduction of peat-forming species</li>
                <li>Establishment of paludiculture systems where appropriate</li>
              </ul>
              <p className="mt-4">
                All measures are adapted to ensure both climate benefits and biodiversity according to EU nature conservation rules.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">📈</span> 4. Long-term Monitoring and Reporting
              </h3>
              <p className="mb-4">
                We follow a monitoring plan that extends over the entire project period (minimum 20 years):
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Water level measurement (at least monthly)</li>
                <li>Vegetation inventory every five years</li>
                <li>Reporting to certification body according to applicable EU standard</li>
                <li>First certification review after five years, then annually</li>
              </ul>
              <p className="mt-4">
                When needed, we conduct direct GHG measurements, especially during the first years when methane emissions can fluctuate.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center mb-4">
                <span className="text-secondary mr-2">♻️</span> 5. Certification and Climate Benefits
              </h3>
              <p className="mb-4">
                When the project meets all requirements, it is certified by an independent accredited certification body. The certified climate benefits are registered as <strong>soil emission reduction units (t CO₂e)</strong> in an approved certification register.
              </p>
              <p>
                These units can then be used in climate accounting, climate compensation, or as part of voluntary carbon markets.
              </p>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-lg font-medium text-center">
              Our strength lies in scientifically anchored, practically realized, and long-term sustainable rewetting – with climate, nature, and landowners at the center.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/en#contact" className="hero-button group">
            Contact us for more information
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-accent py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Land and Water Bureau</h3>
            <p className="mb-6">Experts in rewetting and environmental monitoring in Central Sweden</p>
            <div className="flex flex-wrap justify-center space-x-6 mb-8">
              <span className="text-sm opacity-80 my-1">rewetting</span>
              <span className="text-sm opacity-80 my-1">peatland restoration</span>
              <span className="text-sm opacity-80 my-1">nature restoration regulation</span>
              <span className="text-sm opacity-80 my-1">NRR</span>
              <span className="text-sm opacity-80 my-1">peatlands</span>
              <span className="text-sm opacity-80 my-1">wetlands</span>
              <span className="text-sm opacity-80 my-1">Central Sweden</span>
              <span className="text-sm opacity-80 my-1">CRCF</span>
              <span className="text-sm opacity-80 my-1">certification</span>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
              <a href="mailto:kontakt@markovattenbyran.se" className="hover:text-secondary transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MethodologyEN;