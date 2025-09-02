import { ArrowLeft, Droplet, LeafyGreen, LineChart, FileText, Globe, Award } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesEN = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <Link to="/en" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our Services in Rewetting
        </h1>
        
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          We offer a comprehensive approach to peatland rewetting and handle every step of the project
        </p>

        <div className="space-y-16 mb-16">
          {detailedServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <service.icon className="w-8 h-8 text-secondary mr-3" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-lg mb-6">{service.description}</p>
              <h3 className="text-xl font-semibold mb-4">Results:</h3>
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
          <h2 className="text-2xl font-bold mb-6 text-center">Nature Restoration Regulation (NRR) – new opportunities for you</h2>
          <p className="text-lg mb-6">
            EU's new Nature Restoration Regulation (NRR) (adopted 2024) sets binding requirements for member states to restore drained peatlands, particularly on agricultural land. This creates great opportunities for landowners and local actors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Concrete Projects</h3>
              </div>
              <p className="text-gray-700">
                The new regulation means that rewetting of peat soils is seriously prioritized. Measures such as plugging ditches, creating new wetlands, or restoring former peat extraction sites can now receive support and are seen as important investments. We help you identify which of your lands are suitable for rewetting to both comply with regulations and maximize environmental benefits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Support and Financing</h3>
              </div>
              <p className="text-gray-700">
                To reach EU goals, both the Swedish state and EU have announced funds for nature restoration. Various support and grants are available for wetland projects – we guide you through the jungle of opportunities. We help with applications and ensure that the project meets the requirements for financing, so you can get economic support while doing right by the environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-semibold">Authority Collaboration</h3>
              </div>
              <p className="text-gray-700">
                We function as a link between landowners and authorities. By collaborating with municipalities, county administrative boards, and other actors, we can design projects that benefit all parties. Together we create win-win solutions where both the environment and you as a landowner benefit from the result.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg mb-6">
            With us, you get an engaged and knowledgeable partner who takes comprehensive responsibility for peatland rewetting. We focus on Central Sweden and are well acquainted with the region's unique conditions – from the mires in the north to the agricultural lands in the south.
          </p>
          <p className="text-lg mb-6">
            Our customer-close approach means we listen to your goals, clearly explain each step, and adapt solutions according to your specific needs. By hiring us, you can be sure that the rewetting is carried out correctly, cost-effectively, and with maximum environmental benefit.
          </p>
          <p className="text-lg mb-8">
            At the same time, you don't have to worry about bureaucracy or technical details – we handle that for you. Are you ready to restore valuable wetlands and take advantage of the opportunities presented?
          </p>
          <Link to="/en#contact" className="hero-button group">
            Contact us today
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

const detailedServices = [
  {
    title: "Consulting & Planning",
    description: "We start by investigating your lands and conditions. You receive guidance on where and how rewetting provides the greatest benefit. We handle authority contacts, permits, and consultations, ensuring everything is done correctly from the beginning.",
    result: "A clear plan that meets all requirements and goals, adapted to your land and your needs.",
    icon: FileText,
    features: [
      "Thorough analysis of soil conditions",
      "Mapping of ditch systems and drainage areas",
      "Environmental impact assessment",
      "Contact with authorities for permits and consultations",
      "Adaptation to local conditions"
    ]
  },
  {
    title: "Design & Implementation",
    description: "Our experts design technical solutions to raise groundwater levels – such as ditch plugging, dams, or other water-regulating measures. We use drones and advanced measurement technology to map the land in detail and plan measures with high precision. The actual implementation is then carried out by experienced field teams.",
    result: "Effective rewetting that is implemented safely, on time, and within budget.",
    icon: Droplet,
    features: [
      "3D terrain modeling with drone technology",
      "Detailed planning of water-regulating measures",
      "Technical solutions adapted to site conditions",
      "Experienced field teams for implementation",
      "Continuous monitoring during implementation"
    ]
  },
  {
    title: "Long-term Monitoring",
    description: "After completed rewetting, we continue to support you with monitoring and evaluation. We measure groundwater levels, follow up on changes in greenhouse gas emissions (e.g., carbon dioxide and methane), and document the effect on biodiversity before and after. You receive regular reports that show environmental benefits in black and white.",
    result: "Quality assurance of the project over time and valuable data that can be used to apply for continued support or inform the public.",
    icon: LineChart,
    features: [
      "Continuous measurement of groundwater levels",
      "Greenhouse gas measurements to document climate benefits",
      "Inventory of flora and fauna to follow biodiversity development",
      "Regular reports and data visualization",
      "Scientifically based documentation for grant applications"
    ]
  },
  {
    title: "Technical Expertise",
    description: "Peatland ecology is complex, but we master everything from hydrology to species knowledge. Additionally, we have cutting-edge expertise in advanced measurement technology – we use drones for aerial photography and 3D terrain modeling, 3D printers to produce custom-made measurement instruments, and digital sensors for continuous monitoring.",
    result: "Optimized rewetting with correct water levels for maximum climate benefit and minimized risk, providing lasting positive effects.",
    icon: LeafyGreen,
    features: [
      "Drones for mapping and modeling",
      "Custom-made measurement instruments for each project",
      "Digital sensor systems for real-time monitoring",
      "Expertise in peatland ecology",
      "Climate and environmentally optimized solutions"
    ]
  }
];

export default ServicesEN;