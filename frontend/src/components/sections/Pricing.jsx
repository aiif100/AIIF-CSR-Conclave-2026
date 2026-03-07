import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { Check, Crown, Building2, GraduationCap, Smartphone } from "lucide-react";
import React from "react";

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

export const Pricing = ({ isWomensDay }) => {
  const getDiscountedPrice = (amount) => {
    if (!isWomensDay) return { original: amount, current: amount, isDiscounted: false };
    const discounted = Math.round(amount * 0.75);
    return { original: amount, current: discounted, isDiscounted: true };
  };

  const handleUPIPayment = (amount) => {
    const upiLink = `${UPI_BASE}&am=${amount}`;
    window.location.href = upiLink;
  };

  // Theme constants
  const theme = isWomensDay ? {
    sectionBg: "linear-gradient(135deg, #FFF5F7 0%, #FDFCF5 100%)",
    accentText: "text-[#C05780]", // Rose Pink
    headingText: "text-[#4A0E2E]", // Deep Plum
    cardBorder: "border-[#C05780]/30",
    cardBorderGlow: "border-[#C05780] shadow-[0_0_20px_rgba(192,87,128,0.2)]",
    badgeBg: "bg-gradient-to-r from-[#C05780] to-[#6A0DAD]", // Rose to Purple
    btnBg: "bg-[#C05780] hover:bg-[#A0466A]",
    btnText: "text-white",
    iconBg: "bg-gradient-to-br from-[#FFB6C1] to-[#C05780]",
    label: "Women's Special Pass",
    subheading: "Celebrate International Women's Day with an exclusive 25% discount on all delegate passes."
  } : {
    sectionBg: "#FDFCF5",
    accentText: "text-[#641220]", // Heritage Maroon
    headingText: "text-[#2D0A0F]",
    cardBorder: "border-[#D4AF37]/20",
    cardBorderGlow: "border-[#D4AF37] border-glow",
    badgeBg: "bg-gradient-to-r from-[#D4AF37] to-[#C5A059]",
    btnBg: "bg-[#641220] hover:bg-[#801B2E]",
    btnText: "text-white",
    iconBg: "bg-gradient-to-br from-[#D4AF37] to-[#C5A059]",
    label: "Standard Delegate Pass",
    subheading: "Every pass includes a full-day experience — networking, dining, certificates, and exclusive gifts. No hidden costs."
  };

  return (
    <section
      className={`py-16 md:py-24 px-6 md:px-12 relative overflow-hidden`}
      style={{ background: theme.sectionBg }}
    >
      {/* Decorative Elements for Women's Day */}
      {isWomensDay && (
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="currentColor" className="text-[#C05780]">
            <path d="M100,20 C120,20 140,40 140,70 C140,110 100,160 100,160 C100,160 60,110 60,70 C60,40 80,20 100,20 Z" />
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className={`text-sm tracking-[0.3em] uppercase ${theme.accentText} font-bold mb-3`}>
            {theme.label}
          </p>
          <h2 className={`text-3xl sm:text-4xl font-bold ${theme.headingText}`}>
            {isWomensDay ? "Women's " : "Secure Your "}<span className={isWomensDay ? "text-[#C05780]" : "text-[#641220]"}>{isWomensDay ? "Edition" : "Presence"}</span>
          </h2>
          <p className="text-base text-[#5C4033] mt-4 max-w-2xl mx-auto italic font-medium">
            {theme.subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const pricing = getDiscountedPrice(tier.amount);

            return (
              <motion.div
                key={tier.id}
                className={`pricing-card relative bg-white rounded-2xl overflow-hidden border ${tier.featured || isWomensDay ? theme.cardBorderGlow : theme.cardBorder
                  } transition-all duration-500 hover:shadow-2xl`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Visual Accent for Women's Day */}
                {isWomensDay && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFB6C1] via-[#C05780] to-[#6A0DAD]" />
                )}

                {/* Badge */}
                {(tier.featured || isWomensDay) && (
                  <div className={`${theme.badgeBg} text-white text-center py-2 text-[10px] font-black tracking-[0.2em] uppercase`}>
                    {isWomensDay ? "Women's Day Exclusive" : "Most Popular"}
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${isWomensDay ? theme.iconBg : `bg-gradient-to-br ${tier.accent}`} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-lg font-bold ${theme.headingText}`}>{tier.title}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-[#8A7E72] font-semibold">INR</span>
                        <span className={`text-4xl sm:text-5xl font-black ${theme.headingText}`}>
                          {pricing.current.toLocaleString()}
                        </span>
                      </div>
                      {pricing.isDiscounted && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-[#8A7E72] line-through">₹{tier.amount.toLocaleString()}</span>
                          <span className="text-xs font-bold px-2 py-0.5 bg-[#4A6741]/10 text-[#4A6741] rounded-full">25% OFF</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-[#8A7E72] mt-2 font-medium tracking-wide">Limited Capacity | Inclusive of all taxes</p>
                  </div>

                  <Separator className="mb-6 opacity-50" />

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 group">
                        <div className={`mt-1 p-0.5 rounded-full ${isWomensDay ? "bg-[#C05780]/10" : "bg-[#4A6741]/10"}`}>
                          <Check className={`w-3.5 h-3.5 ${isWomensDay ? "text-[#C05780]" : "text-[#4A6741]"}`} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-[#5C4033] font-medium leading-tight group-hover:text-[#2D0A0F] transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* UPI Pay Button */}
                  <button
                    onClick={() => handleUPIPayment(pricing.current)}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold tracking-widest uppercase text-xs transition-all duration-300 hover:-translate-y-1 shadow-xl ${isWomensDay
                      ? "bg-gradient-to-r from-[#C05780] to-[#6A0DAD] text-white"
                      : tier.featured
                        ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05]"
                        : "bg-[#641220] text-white hover:bg-[#801B2E]"
                      }`}
                  >
                    <Smartphone className="w-4 h-4" strokeWidth={2} />
                    {isWomensDay ? "Claim Women's Special Pass" : "Get Your Pass Now"}
                  </button>

                  <p className="text-[10px] text-center text-[#8A7E72] mt-4 font-bold tracking-tighter opacity-70 italic">
                    *SECURE PAYMENT GATEWAY POWERED BY BHIM UPI
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Note */}
        {!isWomensDay && (
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
        )}
      </div>
    </section>
  );
};
