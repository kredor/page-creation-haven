import { Mail, Phone, MapPin } from "lucide-react";

const ContactSectionDE = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Kontakt aufnehmen
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-12">
            Sind Sie bereit, Ihr Wiedervernässungsprojekt zu starten? Kontaktieren Sie uns für eine kostenlose Erstberatung, in der wir das Potenzial Ihres Landes und die Möglichkeiten zur Restaurierung besprechen.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">E-Mail</h4>
                <p className="text-gray-600 mb-2">Örjan Berglund</p>
                <a href="mailto:berglund76@gmail.com" className="text-secondary hover:text-primary transition-colors text-lg">
                  berglund76@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">Telefon</h4>
                <a href="tel:0707142186" className="text-secondary hover:text-primary transition-colors text-lg">
                  070-714 21 86
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">Servicegebiet</h4>
                <p className="text-gray-600">Mittelschweden (Västmanland, Örebro, Sörmland, Uppsala)</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg mt-12">
            Wir freuen uns darauf, von Ihnen zu hören und Ihr Wiedervernässungsprojekt zum Erfolg zu führen!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionDE;