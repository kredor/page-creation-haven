import { MapPin } from "lucide-react";

const MellansverigeFocusDE = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 section-animate">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-8 h-8 text-secondary mr-2" />
          <h2 className="text-3xl font-bold">Fokus auf Mittelschweden</h2>
        </div>
        <p className="text-xl text-center max-w-3xl mx-auto mb-6">
          Wir konzentrieren uns auf Mittelschweden und kennen die einzigartigen Bedingungen der Region gut – von den Mooren im Norden bis zu den landwirtschaftlichen Flächen im Süden.
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Unser kundennaher Ansatz bedeutet, dass wir auf Ihre Ziele hören, jeden Schritt klar erklären und Lösungen nach Ihren spezifischen Bedürfnissen anpassen.
        </p>
      </div>
    </section>
  );
};

export default MellansverigeFocusDE;