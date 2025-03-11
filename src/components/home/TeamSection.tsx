
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TeamSection = () => {
  const team = [
    {
      name: "Örjan Berglund",
      role: "Grundare & Projektledare",
      image: "/lovable-uploads/0a89a031-97a3-46dc-a5c0-f265939f38bc.png",
      description: "Forskare i markvetenskap med över 20 års erfarenhet inom miljöövervakning och mark- och vattenfrågor.",
      expertise: [
        "Återvätning av organogena jordar",
        "Växthusgasmätningar",
        "Markfysikaliska undersökningar",
        "Projektledning inom miljöövervakning",
        "Dränering och vattenreglering"
      ],
      linkedin: "https://www.linkedin.com/in/orjanberglund/"
    },
    {
      name: "Sabine Jordan",
      role: "Miljöspecialist",
      image: "/lovable-uploads/d1b76eb2-cd5b-4ac6-8fde-9ee02a65d5c7.png",
      description: "Forskare i markvetenskap vid SLU med expertis inom växthusgasmätningar och torvmarker.",
      expertise: [
        "Växthusgasmätningar från torvmarker",
        "Markfysikaliska och markkemiska analyser",
        "Återvätning av organogena jordar",
        "Naturbaserade klimatlösningar",
        "Torv och torvmarker"
      ],
      linkedin: "https://www.linkedin.com/in/sabine-jordan-24289316/"
    },
    {
      name: "Daniel Iseskog",
      role: "Teknisk Expert",
      image: "/lovable-uploads/94356559-202d-45dc-8ac4-68ea422adf04.png",
      expertise: [
        "Hydrologisk modellering",
        "Övervakning av grundvattennivåer",
        "GIS och kartläggning av torvmarker",
        "Praktisk implementering av återvätning",
        "Tekniska lösningar för vattenreglering"
      ]
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 section-animate">
        <h2 className="section-title text-center">Vårt team</h2>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12">
          Vårt team består av agronomer, ekologer och ingenjörer med specialkunskap om våtmarker och torvjordar
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                {member.image ? (
                  <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                ) : (
                  <AvatarFallback className="bg-gray-200"></AvatarFallback>
                )}
              </Avatar>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="text-left text-sm space-y-2">
                {member.description && (
                  <p className="text-gray-700">{member.description}</p>
                )}
                {member.expertise && (
                  <ul className="list-disc list-inside text-gray-600 pl-2">
                    {member.expertise.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
                {member.linkedin && (
                  <div className="text-center mt-4">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-secondary/80 transition-colors"
                    >
                      LinkedIn profil
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Ledande expertis och teknik</h3>
          <p className="text-gray-700 mb-4">
            Torvmarksekologi är komplext, men vi behärskar allt från hydrologi till artkunskap. Dessutom har vi spetskompetens inom avancerad mätteknik – vi använder drönare för flygfotografering och 3D-modellering av terrängen, 3D-skrivare för att ta fram specialanpassade mätinstrument, samt digitala sensorer och mätsystem för att kontinuerligt övervaka vatten och gasflöden.
          </p>
          <p className="text-gray-700">
            Denna kombination av kunskap och teknik gör att vi kan optimera återvätningen: vi säkerställer rätt vattennivåer för maximal klimatnytta och minimerad risk. Resultatet för er som kund blir en trygg och vetenskapsbaserad insats som ger bestående positiva effekter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
