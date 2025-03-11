
import { MapPin } from "lucide-react";

const MellansverigeFocus = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 section-animate">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-8 h-8 text-secondary mr-2" />
          <h2 className="text-3xl font-bold">Fokus på Mellansverige</h2>
        </div>
        <p className="text-xl text-center max-w-3xl mx-auto mb-6">
          Vi fokuserar på Mellansverige och känner väl till regionens unika förutsättningar – från myrarna i norr till jordbruksmarkerna i söder.
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Vår kundnära approach innebär att vi lyssnar på era mål, förklarar tydligt varje steg och anpassar lösningar efter just era behov.
        </p>
      </div>
    </section>
  );
};

export default MellansverigeFocus;
