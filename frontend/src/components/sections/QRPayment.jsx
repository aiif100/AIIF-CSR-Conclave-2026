import { motion } from "framer-motion";
import { QrCode, Smartphone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";

const UPI_ID = "ajk01@fbl";
const UPI_BASE = `upi://pay?pa=${UPI_ID}&pn=AJK%20INNOVATION%20INCUBATOR%20FOUNDATION&cu=INR&tn=CSR%20Conclave%202026`;

const tiers = [
  { label: "CSR Leaders & Corporates", amount: 2999, price: "2,999" },
  { label: "NGOs & Institutions", amount: 2499, price: "2,499" },
  { label: "Students & Researchers", amount: 499, price: "499" },
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
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #F5F2E8 0%, #FDFCF5 100%)" }}
    >
      {/* Subtle kolam pattern */}
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
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-medium mb-3">
            Desktop Payment
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0F]">
            Pay via <span className="text-[#641220]">QR Code</span>
          </h2>
          <p className="text-base md:text-lg text-[#5C4033] mt-4 max-w-2xl mx-auto">
            Scan the QR code below with any UPI app (Google Pay, PhonePe, Paytm, etc.) to complete your payment.
          </p>
        </motion.div>

        {/* QR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.label}
              data-testid={`qr-card-${tier.amount}`}
              className="bg-white rounded-lg border border-[#D4AF37]/20 p-8 text-center hover:shadow-xl transition-all duration-500 hover:border-[#D4AF37] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <h3 className="text-base font-semibold text-[#2D0A0F] mb-1">{tier.label}</h3>
              <p className="text-3xl font-bold text-[#641220] mb-5">
                <span className="text-sm text-[#8A7E72] font-normal">INR </span>{tier.price}
              </p>

              {/* QR Code */}
              <div className="inline-block p-3 bg-white border-2 border-[#D4AF37]/30 rounded-lg group-hover:border-[#D4AF37] transition-colors mb-5">
                <img
                  src={getQRUrl(tier.amount)}
                  alt={`UPI QR Code for ₹${tier.price}`}
                  data-testid={`qr-image-${tier.amount}`}
                  className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px]"
                  loading="lazy"
                />
              </div>

              <p className="text-xs text-[#8A7E72]">
                Scan with any UPI app
              </p>
            </motion.div>
          ))}
        </div>

        {/* UPI ID Copy + Alternate Methods */}
        <motion.div
          className="bg-white rounded-lg border border-[#D4AF37]/20 p-6 sm:p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-[#2D0A0F] mb-4 text-center">Other Payment Options</h3>

          {/* UPI ID Copy */}
          <div className="flex items-center justify-between bg-[#F5F2E8] rounded-md p-4 mb-4">
            <div className="flex items-center gap-3">
              <QrCode className="w-5 h-5 text-[#641220]" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-[#8A7E72] uppercase tracking-wider">UPI ID</p>
                <p className="text-base font-semibold text-[#2D0A0F]">{UPI_ID}</p>
              </div>
            </div>
            <button
              data-testid="copy-upi-id-button"
              onClick={copyUPI}
              className="flex items-center gap-1.5 bg-[#641220] text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-[#801B2E] transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          {/* Direct UPI button for mobile fallback */}
          <a
            href={`${UPI_BASE}&am=`}
            data-testid="direct-upi-pay-button"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05] py-3 rounded-sm font-semibold hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg mb-4"
          >
            <Smartphone className="w-4 h-4" />
            Pay Directly via UPI App (Mobile)
          </a>

          <div className="text-center space-y-2">
            <p className="text-xs text-[#8A7E72]">
              You can also send payment directly to <span className="font-semibold text-[#5C4033]">{UPI_ID}</span> via any UPI app
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Badge className="bg-[#F5F2E8] text-[#5C4033] border-[#D4AF37]/20 text-xs">Google Pay</Badge>
              <Badge className="bg-[#F5F2E8] text-[#5C4033] border-[#D4AF37]/20 text-xs">PhonePe</Badge>
              <Badge className="bg-[#F5F2E8] text-[#5C4033] border-[#D4AF37]/20 text-xs">Paytm</Badge>
              <Badge className="bg-[#F5F2E8] text-[#5C4033] border-[#D4AF37]/20 text-xs">BHIM</Badge>
              <Badge className="bg-[#F5F2E8] text-[#5C4033] border-[#D4AF37]/20 text-xs">Amazon Pay</Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
