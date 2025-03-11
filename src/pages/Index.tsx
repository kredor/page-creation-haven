
import Navigation from "@/components/home/Navigation";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PolicySection from "@/components/home/PolicySection";
import TeamSection from "@/components/home/TeamSection";
import MellansverigeFocus from "@/components/home/MellansverigeFocus";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PolicySection />
      <TeamSection />
      <MellansverigeFocus />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
