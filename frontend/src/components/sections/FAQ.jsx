import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    id: "fee",
    question: "Is the fee inclusive of everything?",
    answer:
      "Yes. Your pass covers the full experience, from high-level networking and luxury dining to your certificates and exclusive gift boxes. No hidden costs — just pure value.",
  },
  {
    id: "exclusive",
    question: 'What makes this "Exclusive"?',
    answer:
      "We hand-pick our attendees. This isn't a crowded hall; it's a room full of decision-makers. You aren't just a face in the crowd; you are a partner in the mission.",
  },
  {
    id: "onspot",
    question: "Can I register on the day?",
    answer:
      "To maintain the luxury and exclusivity of the event, we do not allow on-spot registrations. All seats must be reserved in advance.",
  },
  {
    id: "surprise",
    question: 'What is the "Surprise Gift"?',
    answer:
      "True innovation is always unexpected. You'll have to be there to find out.",
  },
  {
    id: "dresscode",
    question: "What is the dress code?",
    answer:
      "Business Casual or Traditional Indian Formals (matching the theme of the conclave).",
  },
  {
    id: "certificate",
    question: "Will I receive my certificate on the day of the event?",
    answer:
      "Yes, all registered participants will receive their recognition certificates during the closing ceremony.",
  },
  {
    id: "venue",
    question: "Where exactly in Navakkarai is the venue?",
    answer:
      "The event is held at the AJK Innovation Incubator Foundation. Detailed directions will be sent to your registered WhatsApp number/Email.",
  },
];

export const FAQ = () => {
  return (
    <section
      data-testid="faq-section"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: "#FDFCF5" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-medium mb-3">
            Have Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0F]">
            Frequently Asked <span className="text-[#641220]">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-testid={`faq-item-${faq.id}`}
                className="faq-item border-b border-[#D4AF37]/20 px-0"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${faq.id}`}
                  className="text-left text-base sm:text-lg font-semibold text-[#2D0A0F] hover:text-[#641220] py-5 hover:no-underline"
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-[#5C4033] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
