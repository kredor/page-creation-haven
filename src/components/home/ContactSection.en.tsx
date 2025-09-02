import { Mail, Phone, MapPin } from "lucide-react";

const ContactSectionEN = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Contact Us
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <p className="text-lg mb-8">
                Ready to start your rewetting project? Contact us for a free initial consultation where we discuss your land's potential and the possibilities for restoration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-secondary mr-4" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:kontakt@markovattenbyran.se" className="text-secondary hover:text-primary transition-colors">
                      kontakt@markovattenbyran.se
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-secondary mr-4" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+46123456789" className="text-secondary hover:text-primary transition-colors">
                      +46 12 345 67 89
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-secondary mr-4" />
                  <div>
                    <h4 className="font-semibold">Service Area</h4>
                    <p>Central Sweden (Mellansverige)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6">What We Can Help You With</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Assessment of your land's rewetting potential</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Planning and design of rewetting measures</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Support with permits and authority contacts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Implementation and project management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Long-term monitoring and reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Guidance on funding opportunities</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg">
              We look forward to hearing from you and helping make your rewetting project a success!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionEN;