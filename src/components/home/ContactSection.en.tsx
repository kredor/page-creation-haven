import { Mail, Phone, MapPin } from "lucide-react";

const ContactSectionEN = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Contact Us
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-12">
            Ready to start your rewetting project? Contact us for a free initial consultation where we discuss your land's potential and the possibilities for restoration.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-gray-600 mb-2">Örjan Berglund</p>
                <a href="mailto:berglund76@gmail.com" className="text-secondary hover:text-primary transition-colors text-lg">
                  berglund76@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <a href="tel:0707142186" className="text-secondary hover:text-primary transition-colors text-lg">
                  070-714 21 86
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-secondary mb-4" />
                <h4 className="font-semibold text-lg mb-2">Service Area</h4>
                <p className="text-gray-600">Central Sweden (Västmanland, Örebro, Sörmland, Uppsala)</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg mt-12">
            We look forward to hearing from you and helping make your rewetting project a success!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionEN;
