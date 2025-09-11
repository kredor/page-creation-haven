import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSectionDE = () => {
  const faqs = [
    {
      question: "Was ist Wiedervernässung und warum ist sie wichtig?",
      answer: "Wiedervernässung beinhaltet die Wiederherstellung des Wasserhaushalts in entwässerten Torfmooren und Feuchtgebieten. Dies ist wichtig zur Reduzierung von Treibhausgasemissionen, zur Erhöhung der Biodiversität und zur Verbesserung der Wasserregulierung. Wenn Torfböden entwässert werden, zersetzen sie sich und setzen große Mengen CO₂ und andere Treibhausgase frei."
    },
    {
      question: "Welche Anforderungen stellt die Naturwiederherstellungsverordnung (NWV)?",
      answer: "Die NWV verpflichtet EU-Länder dazu, bis 2030 mindestens 20% ihrer Land- und Meeresgebiete zu restaurieren. Für Feuchtgebiete und Torfmoore bedeutet dies konkrete Maßnahmen zur Wiedervernässung, insbesondere auf landwirtschaftlichen Flächen, wo Entwässerung zu erheblichen Treibhausgasemissionen geführt hat."
    },
    {
      question: "Kann ich eine Entschädigung für die Wiedervernässung meines Landes erhalten?",
      answer: "Ja, es gibt mehrere Möglichkeiten für finanzielle Entschädigung. Dazu gehören EU-Umweltentschädigungen, LOVA-Unterstützung und potenzielle zukünftige Kohlenstoffmärkte. Wir helfen bei der Navigation durch die Antragsprozesse und stellen sicher, dass Projekte die Finanzierungsanforderungen erfüllen."
    },
    {
      question: "Wie lange dauert ein Wiedervernässungsprojekt?",
      answer: "Die Projektdauer variiert je nach Größe und Komplexität, dauert aber typischerweise 6-18 Monate von der ersten Bewertung bis zur Umsetzung. Die langfristige Überwachung setzt sich mindestens 5-20 Jahre fort, je nach Zertifizierungsanforderungen und Projektzielen."
    },
    {
      question: "Was sind die Umweltvorteile der Wiedervernässung?",
      answer: "Wiedervernässung bietet mehrere Umweltvorteile: erhebliche Reduzierung von Treibhausgasemissionen, erhöhte Biodiversität, verbesserte Wasserqualität und Hochwasserschutz, Lebensraumwiederherstellung für Feuchtgebietsarten und verstärkte Kohlenstoffbindung in wiederhergestellten Torfböden."
    },
    {
      question: "Arbeiten Sie sowohl mit privaten als auch öffentlichen Landbesitzern?",
      answer: "Ja, wir arbeiten mit allen Arten von Landbesitzern, einschließlich Privatpersonen, Gemeinden, Unternehmen und Regierungsbehörden. Wir passen unsere Dienstleistungen an die spezifischen Bedürfnisse und Ziele jedes Kunden an und stellen gleichzeitig die Einhaltung aller relevanten Vorschriften sicher."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Häufig gestellte Fragen
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionDE;