import { MapPin } from "lucide-react";

const MellansverigeFocusEN = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 section-animate">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-8 h-8 text-secondary mr-2" />
          <h2 className="text-3xl font-bold">Focus on Central Sweden</h2>
        </div>
        <p className="text-xl text-center max-w-3xl mx-auto mb-6">
          We focus on Central Sweden and are well acquainted with the region's unique conditions – from the mires in the north to the agricultural lands in the south.
        </p>
        <p className="text-lg text-center max-w-3xl mx-auto">
          Our customer-close approach means we listen to your goals, clearly explain each step, and adapt solutions according to your specific needs.
        </p>
      </div>
    </section>
  );
};

export default MellansverigeFocusEN;