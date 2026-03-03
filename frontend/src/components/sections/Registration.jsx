import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/fLC7vH53Tw47WfVR6";

export const Registration = () => {
  return (
    <section
      data-testid="registration-section"
      className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "#F5F2E8" }}
    >
      {/* Corner ornaments */}
      <div className="corner-ornament corner-tl absolute top-6 left-6" />
      <div className="corner-ornament corner-tr absolute top-6 right-6" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-medium mb-3">
            Confirm Your Seat
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0F] mb-6">
            Register <span className="text-[#641220]">Now</span>
          </h2>
          <p className="text-base md:text-lg text-[#5C4033] leading-relaxed mb-10 max-w-xl mx-auto">
            Complete your registration to confirm your presence at the CSR Conclave 2026. 
            Limited seats available — don't miss this opportunity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="register-google-form-button"
              className="pulse-gold inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05] px-10 py-4 rounded-full font-bold shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-1 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Register via Google Form
              <ExternalLink className="w-5 h-5" strokeWidth={1.5} />
            </motion.a>

            <motion.a
              href="#pricing"
              data-testid="view-pricing-button"
              className="inline-flex items-center gap-2 border-2 border-[#641220] text-[#641220] px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#641220] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              View Pricing
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </motion.a>
          </div>

          <p className="text-xs text-[#8A7E72] mt-6">
            After registration, complete payment via UPI to confirm your seat.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
