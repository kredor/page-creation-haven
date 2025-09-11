import { Mail, Phone, MapPin } from "lucide-react";

const ContactSectionDE = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Kontakt aufnehmen
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-8">Kontakt</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h4 className="font-semibold">E-Mail</h4>
                  <a href="mailto:kontakt@markovattenbyran.se" className="text-primary hover:text-secondary transition-colors">
                    kontakt@markovattenbyran.se
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h4 className="font-semibold">Telefon</h4>
                  <p className="text-gray-600">+46 (0)70 123 45 67</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-secondary mr-4" />
                <div>
                  <h4 className="font-semibold">Servicegebiet</h4>
                  <p className="text-gray-600">Mittelschweden (Västmanland, Örebro, Sörmland, Uppsala)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Unsere Dienstleistungen</h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Landbewertung und Beratung</h4>
                <p className="text-gray-600 text-sm">Identifizierung geeigneter Flächen für Wiedervernässung</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Planung und Genehmigungen</h4>
                <p className="text-gray-600 text-sm">Technische Planung und behördliche Prozesse</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Projektdurchführung</h4>
                <p className="text-gray-600 text-sm">Professionelle Umsetzung von Wiedervernässungsmaßnahmen</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">Langfristige Überwachung</h4>
                <p className="text-gray-600 text-sm">Wissenschaftliche Überwachung und Berichterstattung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionDE;