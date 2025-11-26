import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Kontakta oss
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-12">
            Är du redo att starta ditt återvätningsprojekt? Kontakta oss för en kostnadsfri första konsultation där vi diskuterar din marks potential och möjligheterna för restaurering.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">E-post</h4>
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
                <h4 className="font-semibold text-lg mb-2">Serviceområde</h4>
                <p className="text-gray-600">Mellansverige (Västmanland, Örebro, Sörmland, Uppsala)</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg mt-12">
            Vi ser fram emot att höra från dig och hjälpa till att göra ditt återvätningsprojekt till en framgång!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
