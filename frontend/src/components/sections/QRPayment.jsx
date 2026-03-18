import { motion } from "framer-motion";
import { QrCode, Smartphone, Copy, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";

const UPI_ID = "ajk01@fbl";
const UPI_BASE = `upi://pay?pa=${UPI_ID}&pn=AJK%20INNOVATION%20INCUBATOR%20FOUNDATION&cu=INR&tn=CSR%20Conclave%202026`;

const tiers = [
  { label: "CSR Leaders & Corporates", amount: 2999, price: "2,999" },
  { label: "NGOs & Institutions", amount: 2499, price: "2,499" },
  { label: "Students, Researchers, Incubator Managers & Heads", amount: 499, price: "499" },
];

const getQRUrl = (amount) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(`${UPI_BASE}&am=${amount}`)}`;

export const QRPayment = () => {
  const [copied, setCopied] = useState(false);

  const copyUPI = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

        {/* UPI ID Info */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#D4AF37]/20 p-6 sm:p-8 max-w-2xl mx-auto shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#F5F2E8] rounded-full flex items-center justify-center">
                <QrCode className="w-6 h-6 text-[#641220]" />
              </div>
              <div>
                <p className="text-[10px] text-[#8A7E72] uppercase tracking-[0.2em] font-bold">UPI ID</p>
                <p className="text-lg font-bold text-[#2D0A0F] tracking-tight">{UPI_ID}</p>
              </div>
            </div>
            <button
              onClick={copyUPI}
              className="flex items-center gap-2 bg-[#641220] text-white px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-[#801B2E] transition-all shadow-md active:scale-95"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "ID Copied" : "Copy UPI ID"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
