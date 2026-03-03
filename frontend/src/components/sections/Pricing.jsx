import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Check, Crown, Building2, GraduationCap, Smartphone } from "lucide-react";

const UPI_BASE = "upi://pay?pa=ajk01@fbl&pn=AJK%20INNOVATION%20INCUBATOR%20FOUNDATION&cu=INR&tn=CSR%20Conclave%202026";

const tiers = [
  {
    id: "corporate",
    title: "CSR Leaders & Corporates",
    price: "2,999",
    amount: 2999,
    icon: Crown,
    accent: "from-[#D4AF37] to-[#C5A059]",
    featured: true,
    benefits: [
      "Exclusive Networking Session",
      "Luxury Dining & Refreshments",
      "Exclusive Gift Box",
      "Recognition Certificate",
      "Surprise Gift",
    ],
  },
  {
    id: "ngo",
    title: "NGOs & Institutions",
    price: "2,499",
    amount: 2499,
    icon: Building2,
    accent: "from-[#641220] to-[#801B2E]",
    featured: false,
    benefits: [
      "Exclusive Networking Session",
      "Luxury Dining & Refreshments",
      "Exclusive Gift Box",
      "Recognition Certificate",
      "Surprise Gift",
    ],
  },
  {
    id: "student",
    title: "Students & Researchers",
    price: "499",
    amount: 499,
    icon: GraduationCap,
    accent: "from-[#4A6741] to-[#5A7A50]",
    featured: false,
    benefits: [
      "General Networking",
      "Lunch & Refreshments",
      "Sustainable Memento",
      "Participation Certificate",
      "Surprise Gift",
    ],
  },
];

export const Pricing = () => {
  const handleUPIPayment = (amount) => {
    const upiLink = `${UPI_BASE}&am=${amount}`;
    window.location.href = upiLink;
  };

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: "#FDFCF5" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-medium mb-3">
            Choose Your Pass
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0F]">
            Secure Your <span className="text-[#641220]">Presence</span>
          </h2>
          <p className="text-base md:text-lg text-[#5C4033] mt-4 max-w-2xl mx-auto">
            Every pass includes a full-day experience — networking, dining, certificates, and exclusive gifts. No hidden costs.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                data-testid={`pricing-card-${tier.id}`}
                className={`pricing-card relative bg-white rounded-lg overflow-hidden border ${
                  tier.featured ? "border-[#D4AF37] border-glow" : "border-[#D4AF37]/20"
                } ${tier.featured ? "md:-mt-4 md:mb-[-16px]" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05] text-center py-2 text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tier.accent} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2D0A0F]">{tier.title}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-[#8A7E72]">INR</span>
                      <span className="text-4xl sm:text-5xl font-bold text-[#2D0A0F]">{tier.price}</span>
                    </div>
                    <p className="text-sm text-[#8A7E72] mt-1">Per person | All inclusive</p>
                  </div>

                  <Separator className="mb-6" />

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#4A6741] shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-[#5C4033]">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* UPI Pay Button */}
                  <button
                    data-testid={`pay-button-${tier.id}`}
                    onClick={() => handleUPIPayment(tier.amount)}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                      tier.featured
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05] font-bold"
                        : "bg-[#641220] text-white hover:bg-[#801B2E]"
                    }`}
                  >
                    <Smartphone className="w-4 h-4" strokeWidth={1.5} />
                    Pay via UPI
                  </button>

                  <p className="text-xs text-center text-[#8A7E72] mt-3">
                    Opens your UPI app for instant payment
                  </p>
                </div>

                {/* Ticket perforated edges */}
                <div className="ticket-edge-left ticket-edge-right absolute top-1/2 w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          className="text-center text-sm text-[#8A7E72] mt-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          This is an <span className="font-semibold text-[#641220]">Invite-Only</span> event with strictly limited capacity.
          Your registration is the first step toward a sustainable future.
        </motion.p>
      </div>
    </section>
  );
};
