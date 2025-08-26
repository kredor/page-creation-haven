import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Vad är återvätning och varför är det viktigt?",
      answer: "Återvätning (rewetting) innebär att man återställer vattenbalansen i dikade torvmarker och våtmarker. Detta är viktigt för att minska växthusgasutsläpp, öka biologisk mångfald och förbättra vattenreglering. Dikade torvmarker släpper ut stora mängder koldioxid, och genom återvätning kan vi stoppa dessa utsläpp och skapa klimatnytta."
    },
    {
      question: "Vilka krav ställer Naturrestaureringsfördordningen (NRF)?",
      answer: "NRF kräver att EU-länderna återställer minst 20% av sina land- och havsområden senast 2030. För våtmarker och torvmarker innebär detta konkreta åtgärder för återvätning. Vi hjälper markägare att identifiera lämpliga områden och genomföra projekt som uppfyller förordningens krav."
    },
    {
      question: "Hur lång tid tar ett återvätningsprojekt?",
      answer: "Ett typiskt återvätningsprojekt tar 6-18 månader från initial bedömning till genomförande. Detta inkluderar inventering, projektering, myndighetskontakter, genomförande av åtgärder och initial uppföljning. Långsiktig övervakning pågår sedan i flera år för att dokumentera effekterna."
    },
    {
      question: "Vilka kostnader är förknippade med återvätning?",
      answer: "Kostnaderna varierar beroende på projektets storlek och komplexitet. Vi erbjuder rådgivning om tillgängliga finansieringsmöjligheter genom EU-stöd, LOVA-stöd och andra finansieringskällor. Många projekt kan genomföras med betydande ekonomiskt stöd från olika källor."
    },
    {
      question: "Kan jag få ersättning för återvätning av min mark?",
      answer: "Ja, det finns flera möjligheter till ekonomisk ersättning. Detta inkluderar EU:s miljöersättningar, LOVA-stöd, och potentiella framtida koldioxidmarknader. Vi hjälper till att identifiera och ansöka om relevanta stöd och ersättningar för ditt projekt."
    },
    {
      question: "Vilka områden i Mellansverige är lämpliga för återvätning?",
      answer: "Lämpliga områden inkluderar dikade torvmarker, före detta våtmarker och områden med organisk jord. Vi fokuserar på Mellansverige där det finns stor potential för återvätning. Genom vår expertis kan vi bedöma om ditt område är lämpligt och vilka åtgärder som behövs."
    },
    {
      question: "Hur mäts och verifieras klimatnyttan?",
      answer: "Vi använder certifierade metoder för att beräkna och verifiera minskade växthusgasutsläpp. Detta inkluderar mätningar av grundvattennivåer, vegetation och gasflöden. Resultaten dokumenteras enligt internationella standarder och kan användas för klimatrapportering och potentiella koldioxidkrediter."
    },
    {
      question: "Påverkar återvätning närliggande fastigheter?",
      answer: "Professionellt genomförd återvätning minimerar påverkan på närliggande fastigheter. Vi gör noggranna hydrologiska bedömningar och planerar åtgärderna för att undvika negativa effekter. Tvärtom kan återvätning ofta förbättra vattenregleringen i landskapet och minska översvämningsrisker."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Vanliga frågor</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Här hittar du svar på de vanligaste frågorna om återvätning, naturrestaureringslagen och våra tjänster.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Har du fler frågor? Vi hjälper gärna till med mer information.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;