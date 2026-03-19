import { motion } from "framer-motion";
import { QrCode, Smartphone, Copy, Check, Building2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";

const UPI_ID = "ajk01@fbl";
const BANK_DETAILS = {
  holder: "AJK INNOVATION INCUBATOR FOUNDATION",
  account: "10920100234043",
  ifsc: "FDRL0001092",
  bank: "FEDERAL BANK"
};
const UPI_BASE = `upi://pay?pa=${UPI_ID}&pn=AJK%20INNOVATION%20INCUBATOR%20FOUNDATION&cu=INR&tn=CSR%20Conclave%202026`;

const tiers = [
  { label: "CSR Leaders & Corporates", amount: 2999, price: "2,999" },
  { label: "NGOs & Institutions", amount: 2499, price: "2,499" },
  { label: "Students, Researchers, Incubator Managers & Heads", amount: 499, price: "499" },
];

const getQRUrl = (amount) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(`${UPI_BASE}&am=${amount}`)}`;

export const QRPayment = () => {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      data-testid="qr-payment-section"
      className="py-16 md:py-24 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #F5F2E8 0%, #FDFCF5 100%)" }}
    >
      {/* Subtle patterns */}
      <div className="absolute inset-0 kolam-pattern pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-bold mb-3">
            Standard Edition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D0A0F]">
            Pay via <span className="text-[#641220]">QR Code</span>
          </h2>
          <p className="text-base text-[#5C4033] mt-4 max-w-2xl mx-auto italic font-medium">
            Scan the QR code below with any UPI app to complete your payment.
          </p>
        </motion.div>

        {/* QR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {tiers.map((tier, index) => {
            return (
              <motion.div
                key={tier.label}
                className="bg-white rounded-2xl border border-[#D4AF37]/20 transition-all duration-500 p-8 text-center hover:shadow-2xl hover:border-[#D4AF37] group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <h3 className="text-base font-bold text-[#2D0A0F] mb-1 uppercase tracking-tight">{tier.label}</h3>
                <div className="mb-5">
                  <p className="text-3xl font-black text-[#641220]">
                    <span className="text-sm text-[#8A7E72] font-semibold">INR </span>{tier.amount.toLocaleString()}
                  </p>
                </div>

                {/* QR Code */}
                <div className="inline-block p-4 bg-white border-2 border-[#D4AF37]/30 rounded-2xl transition-all duration-300 group-hover:border-[#D4AF37]">
                  <img
                    src={getQRUrl(tier.amount)}
                    alt={`UPI QR Code for ₹${tier.amount}`}
                    className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]"
                    loading="lazy"
                  />
                </div>

                <p className="text-[10px] uppercase tracking-widest text-[#8A7E72] mt-5 font-bold">
                  Scan to Pay
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* UPI ID Info */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/20 p-6 sm:p-8 shadow-lg h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col h-full justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5F2E8] rounded-full flex items-center justify-center shrink-0">
                  <QrCode className="w-6 h-6 text-[#641220]" />
                </div>
                <div>
                  <p className="text-[10px] text-[#8A7E72] uppercase tracking-[0.2em] font-bold">UPI ID</p>
                  <p className="text-lg font-bold text-[#2D0A0F] tracking-tight">{UPI_ID}</p>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(UPI_ID, 'upi')}
                className="w-full flex items-center justify-center gap-2 bg-[#641220] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#801B2E] transition-all shadow-md active:scale-95"
              >
                {copiedField === 'upi' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedField === 'upi' ? "ID Copied" : "Copy UPI ID"}
              </button>
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
                <p className="text-sm font-bold text-[#2D0A0F] uppercase tracking-wider">Bank Transfer Details</p>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <div 
                  className="bg-[#FDFCF5] p-3 rounded-lg border border-[#D4AF37]/10 group/item cursor-pointer hover:border-[#D4AF37]/40 transition-colors relative"
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
      </div>
    </section>
  );
};
