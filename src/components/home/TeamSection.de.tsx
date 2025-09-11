import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TeamSectionDE = () => {
  const team = [
    {
      name: "Dr. Erik Lundberg",
      role: "Torfmoor-Ökologe & Projektleiter",
      image: "/lovable-uploads/0a89a031-97a3-46dc-a5c0-f265939f38bc.png",
      description: "Promotion in Umweltwissenschaften mit Spezialisierung auf Torfmoor-Hydrologie und Treibhausgasdynamik. Über 15 Jahre Erfahrung in Feuchtgebietsprojekten.",
      expertise: ["Torfmoor-Ökologie", "Hydrologie", "THG-Messungen", "Projektmanagement"],
      linkedin: "https://linkedin.com/in/eriklundberg"
    },
    {
      name: "M.Sc. Anna Svensson",
      role: "Umweltingenieurin & GIS-Spezialistin",
      image: "/lovable-uploads/94356559-202d-45dc-8ac4-68ea422adf04.png", 
      description: "Master in Umweltingenieurwesen mit Fokus auf Wassermanagement und Raumanalyse. Spezialistin für Drohnentechnologie und 3D-Modellierung für Wiedervernässungsprojekte.",
      expertise: ["GIS-Analyse", "Drohnenvermessung", "3D-Modellierung", "Wassermanagement"],
      linkedin: "https://linkedin.com/in/annasvensson"
    },
    {
      name: "Dr. Magnus Karlsson",
      role: "Biogeochemiker & Überwachungsspezialist",
      image: "/lovable-uploads/d1b76eb2-cd5b-4ac6-8fde-9ee02a65d5c7.png",
      description: "Promotion in Biogeochemie mit Expertise in Kohlenstoffkreisläufen und Treibhausgasflüssen aus wiederhergestellten Torfmooren. Leitet unsere Überwachungs- und Verifizierungsprogramme.",
      expertise: ["Biogeochemie", "Kohlenstoffkreislauf", "Überwachungssysteme", "Datenanalyse"],
      linkedin: "https://linkedin.com/in/magnuskarlsson"
    }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Unser Team
        </h2>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Unser interdisziplinäres Team kombiniert tiefes wissenschaftliches Wissen mit praktischer Erfahrung in der Torfmoorrestaurierung und Umweltüberwachung.
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
          <h3 className="text-2xl font-bold text-center mb-6">Unsere Technologie und Methoden</h3>
          <p className="text-lg text-center mb-8">
            Wir kombinieren modernste Technologie mit bewährten wissenschaftlichen Methoden, um zuverlässige und kosteneffektive Wiedervernässungslösungen zu liefern.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3">Erweiterte Überwachung</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Automatisierte Grundwasserstandssensoren</li>
                <li>• Treibhausgas-Messkammern</li>
                <li>• Echtzeit-Datenerfassung und -analyse</li>
                <li>• Fernerkundung und Satellitenüberwachung</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3">Präzisionstechnologie</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Drohnenbasierte LiDAR und Photogrammetrie</li>
                <li>• 3D-gedruckte maßgeschneiderte Messwerkzeuge</li>
                <li>• GIS-Analyse und hydrologische Modellierung</li>
                <li>• Digitale Projektdokumentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSectionDE;