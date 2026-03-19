import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { Check, Copy, Crown, Building2, GraduationCap, Smartphone } from "lucide-react";
import { useState } from "react";
import React from "react";

const UPI_ID = "ajk01@fbl";
const BANK_DETAILS = {
  holder: "AJK INNOVATION INCUBATOR FOUNDATION",
  account: "10920100234043",
  ifsc: "FDRL0001092",
  bank: "FEDERAL BANK"
};
const UPI_BASE = `upi://pay?pa=${UPI_ID}&pn=AJK%20INNOVATION%20INCUBATOR%20FOUNDATION&cu=INR&tn=CSR%20Conclave%202026`;

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
    title: "Students, Researchers, Incubator Managers & Heads",
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
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleUPIPayment = (amount) => {
    const upiLink = `${UPI_BASE}&am=${amount}`;
    window.location.href = upiLink;
  };

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
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
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-semibold mb-3">
            Choose Your Pass
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D0A0F]">
            Secure Your <span className="text-[#641220]">Presence</span>
          </h2>
          <p className="text-base text-[#5C4033] mt-4 max-w-2xl mx-auto italic font-medium">
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
                className={`pricing-card relative bg-white rounded-2xl overflow-hidden border ${tier.featured ? "border-[#D4AF37] border-glow shadow-[0_0_20px_rgba(212,175,55,0.2)]" : "border-[#D4AF37]/20"} transition-all duration-500 hover:shadow-2xl`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Badge */}
                {tier.featured && (
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05] text-center py-2 text-[10px] font-black tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.accent} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[#2D0A0F]">{tier.title}</h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-[#8A7E72] font-semibold">INR</span>
                        <span className="text-4xl sm:text-5xl font-black text-[#2D0A0F]">
                          {tier.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#8A7E72] mt-2 font-medium tracking-wide">Limited Capacity | Inclusive of all taxes</p>
                  </div>

                  <Separator className="mb-6 opacity-50" />

                  {/* Benefits */}
                  <ul className="space-y-4 mb-8">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 group">
                        <div className="mt-1 p-0.5 rounded-full bg-[#4A6741]/10">
                          <Check className="w-3.5 h-3.5 text-[#4A6741]" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-[#5C4033] font-medium leading-tight group-hover:text-[#2D0A0F] transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* UPI Pay Button */}
                  <button
                    onClick={() => handleUPIPayment(tier.amount)}
                    className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold tracking-widest uppercase text-xs transition-all duration-300 hover:-translate-y-1 shadow-xl ${tier.featured
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05]"
                      : "bg-[#641220] text-white hover:bg-[#801B2E]"
                      }`}
                  >
                    <Smartphone className="w-4 h-4" strokeWidth={2} />
                    Get Your Pass Now
                  </button>

                  <p className="text-[10px] text-center text-[#8A7E72] mt-4 font-bold tracking-tighter opacity-70 italic">
                    *SECURE PAYMENT GATEWAY POWERED BY BHIM UPI
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Alternative Payment Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {/* UPI ID Info */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/20 p-6 sm:p-8 shadow-lg h-full group/main cursor-pointer hover:border-[#D4AF37]/40 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onClick={() => copyToClipboard(UPI_ID, 'upi')}
          >
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#F5F2E8] rounded-full flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6 text-[#641220]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#8A7E72] uppercase tracking-[0.2em] font-bold">UPI Payment</p>
                    <p className="text-lg font-bold text-[#2D0A0F] tracking-tight">{UPI_ID}</p>
                  </div>
                </div>
                {copiedField === 'upi' ? <Check className="w-5 h-5 text-[#4A6741]" /> : <Copy className="w-5 h-5 text-[#8A7E72] opacity-0 group-hover/main:opacity-100 transition-opacity" />}
              </div>
              <p className="text-sm text-[#5C4033] italic">Scan the QR code in the next section or click to copy this ID.</p>
            </div>
          </motion.div>

          {/* Bank Transfer Info */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/20 p-6 sm:p-8 shadow-lg h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-[#F5F2E8] rounded-full flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#641220]" />
                </div>
                <p className="text-sm font-bold text-[#2D0A0F] uppercase tracking-wider">Bank Details (Alternative)</p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div
                  className="bg-[#FDFCF5] p-3 rounded-lg border border-[#D4AF37]/10 group/item cursor-pointer hover:border-[#D4AF37]/40 transition-colors"
                  onClick={() => copyToClipboard(BANK_DETAILS.holder, 'holder')}
                >
                  <p className="text-[9px] text-[#8A7E72] uppercase font-bold tracking-tighter">Account Holder</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-bold text-[#2D0A0F] leading-tight">{BANK_DETAILS.holder}</p>
                    {copiedField === 'holder' ? <Check className="w-3 h-3 text-[#4A6741]" /> : <Copy className="w-3 h-3 text-[#8A7E72] opacity-0 group-hover/item:opacity-100 transition-opacity" />}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="bg-[#FDFCF5] p-3 rounded-lg border border-[#D4AF37]/10 group/item cursor-pointer hover:border-[#D4AF37]/40 transition-colors"
                    onClick={() => copyToClipboard(BANK_DETAILS.account, 'account')}
                  >
                    <p className="text-[9px] text-[#8A7E72] uppercase font-bold tracking-tighter">Account Number</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-[#2D0A0F]">{BANK_DETAILS.account}</p>
                      {copiedField === 'account' ? <Check className="w-3 h-3 text-[#4A6741]" /> : <Copy className="w-3 h-3 text-[#8A7E72] opacity-0 group-hover/item:opacity-100 transition-opacity" />}
                    </div>
                  </div>
                  <div
                    className="bg-[#FDFCF5] p-3 rounded-lg border border-[#D4AF37]/10 group/item cursor-pointer hover:border-[#D4AF37]/40 transition-colors"
                    onClick={() => copyToClipboard(BANK_DETAILS.ifsc, 'ifsc')}
                  >
                    <p className="text-[9px] text-[#8A7E72] uppercase font-bold tracking-tighter">IFSC Code</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-[#2D0A0F] font-mono">{BANK_DETAILS.ifsc}</p>
                      {copiedField === 'ifsc' ? <Check className="w-3 h-3 text-[#4A6741]" /> : <Copy className="w-3 h-3 text-[#8A7E72] opacity-0 group-hover/item:opacity-100 transition-opacity" />}
                    </div>
                  </div>
                </div>

                <div className="bg-[#FDFCF5] p-2 rounded-lg border border-[#D4AF37]/10 text-center">
                  <p className="text-[10px] font-bold text-[#5C4033]">{BANK_DETAILS.bank}</p>
                </div>
              </div>
            </div>
          </motion.div>
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
