import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSectionEN = () => {
  const faqs = [
    {
      question: "What is rewetting and why is it important?",
      answer: "Rewetting involves restoring the water balance in drained peatlands and wetlands. This is important for reducing greenhouse gas emissions, increasing biodiversity, and improving water regulation. When peat soils are drained, they decompose and release large amounts of CO₂ and other greenhouse gases."
    },
    {
      question: "What requirements does the Nature Restoration Regulation (NRR) impose?",
      answer: "The NRR requires EU countries to restore at least 20% of their land and sea areas by 2030. For wetlands and peatlands, this means concrete measures for rewetting, particularly on agricultural land where drainage has led to significant greenhouse gas emissions."
    },
    {
      question: "Can I receive compensation for rewetting my land?",
      answer: "Yes, there are several possibilities for financial compensation. This includes EU environmental compensations, LOVA support, and potential future carbon markets. We help navigate the application processes and ensure projects meet financing requirements."
    },
    {
      question: "How long does a rewetting project take?",
      answer: "Project duration varies depending on size and complexity, but typically takes 6-18 months from initial assessment to implementation. Long-term monitoring continues for at least 5-20 years depending on certification requirements and project goals."
    },
    {
      question: "What are the environmental benefits of rewetting?",
      answer: "Rewetting provides multiple environmental benefits: significant reduction in greenhouse gas emissions, increased biodiversity, improved water quality and flood control, habitat restoration for wetland species, and enhanced carbon sequestration in restored peat soils."
    },
    {
      question: "Do you work with both private and public landowners?",
      answer: "Yes, we work with all types of landowners including private individuals, municipalities, corporations, and government agencies. We adapt our services to meet the specific needs and goals of each client while ensuring compliance with all relevant regulations."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto section-animate">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
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

export default FAQSectionEN;