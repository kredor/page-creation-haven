import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSectionEN = () => {
  const team = [
    {
      name: "Örjan Berglund",
      role: "Founder & Project Manager",
      image: "/lovable-uploads/0a89a031-97a3-46dc-a5c0-f265939f38bc.png",
      description: "Researcher in soil science with over 20 years of experience in environmental monitoring and soil and water issues.",
      expertise: [
        "Rewetting of organic soils",
        "Greenhouse gas measurements",
        "Soil physical investigations",
        "Project management in environmental monitoring",
        "Drainage and water regulation"
      ],
      linkedin: "https://www.linkedin.com/in/orjanberglund/"
    },
    {
      name: "Sabine Jordan",
      role: "Environmental Specialist",
      image: "/lovable-uploads/d1b76eb2-cd5b-4ac6-8fde-9ee02a65d5c7.png",
      description: "Researcher in soil science at SLU with expertise in greenhouse gas measurements and peatlands.",
      expertise: [
        "Greenhouse gas measurements from peatlands",
        "Soil physical and soil chemical analyses",
        "Rewetting of organic soils",
        "Nature-based climate solutions",
        "Peat and peatlands"
      ],
      linkedin: "https://www.linkedin.com/in/sabine-jordan-24289316/"
    },
    {
      name: "Daniel Iseskog",
      role: "Technical Expert",
      image: "/lovable-uploads/94356559-202d-45dc-8ac4-68ea422adf04.png",
      description: "Designer and drone pilot",
      expertise: [
        "Hydrological modeling",
        "Monitoring of groundwater levels",
        "GIS and mapping of peatlands",
        "Practical implementation of rewetting",
        "Technical solutions for water regulation"
      ],
      linkedin: "https://www.linkedin.com/in/daniel-iseskog/"
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Our Team
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Our interdisciplinary team combines deep scientific knowledge with practical experience in peatland restoration and environmental monitoring.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <Avatar className="w-24 h-24 mx-auto mb-6">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-secondary font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Expertise:</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                LinkedIn →
              </a>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-center mb-6">Our Technology and Methods</h3>
          <p className="text-lg text-center mb-8">
            We combine cutting-edge technology with proven scientific methods to deliver reliable and cost-effective rewetting solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Advanced Monitoring</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated groundwater level sensors</li>
                <li>• Greenhouse gas measurement chambers</li>
                <li>• Real-time data logging and analysis</li>
                <li>• Remote sensing and satellite monitoring</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Precision Technology</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Drone-based LiDAR and photogrammetry</li>
                <li>• 3D printed custom measurement tools</li>
                <li>• GIS analysis and hydrological modeling</li>
                <li>• Digital project documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionEN;