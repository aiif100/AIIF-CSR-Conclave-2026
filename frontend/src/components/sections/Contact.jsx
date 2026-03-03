import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin, Linkedin, Instagram } from "lucide-react";
import { Separator } from "../ui/separator";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_aiif-csr-conclave/artifacts/v3dquimv_AIIF%20LOGO%20og%20without%20ajk%20mountain-01.png";

export const Contact = () => {
  return (
    <footer
      data-testid="contact-section"
      className="relative py-20 md:py-24 px-6 md:px-12 overflow-hidden"
      style={{ background: "linear-gradient(45deg, #1A0505 0%, #641220 100%)" }}
    >
      {/* Kolam pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(212,175,55,0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37]/70 font-medium mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#D4AF37]">Us</span>
          </h2>
          <p className="text-base text-white/70 mb-12 max-w-md mx-auto">
            For group bookings or sponsorship inquiries
          </p>
        </motion.div>

        {/* Contact Items */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <a
            href="mailto:info@aiif.in"
            data-testid="contact-email"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          >
            <Mail className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="text-white text-sm font-medium">info@aiif.in</span>
          </a>

          <a
            href="tel:+918925889316"
            data-testid="contact-phone"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          >
            <Phone className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="text-white text-sm font-medium">+91 8925889316</span>
            <span className="text-white/50 text-xs">WhatsApp Available</span>
          </a>

          <a
            href="https://www.aiif.in"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-website"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          >
            <Globe className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
            <span className="text-white text-sm font-medium">www.aiif.in</span>
          </a>

          <div
            data-testid="contact-location"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5"
          >
            <MapPin className="w-6 h-6 text-[#D4AF37]" strokeWidth={1.5} />
            <span className="text-white text-sm font-medium text-center">
              AIIF, Navakkarai,<br />Coimbatore
            </span>
          </div>
        </motion.div>

        <Separator className="bg-[#D4AF37]/20 mb-10" />

        {/* Footer bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="AIIF Logo"
              className="h-10 w-auto object-contain bg-[#1A0505] rounded p-1"
            />
            <div>
              <p className="text-white text-sm font-semibold">AJK Innovation Incubator Foundation</p>
              <p className="text-white/50 text-xs">Curating Sustainable Communities</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4" data-testid="social-links">
            <a
              href="https://in.linkedin.com/company/ajkinnovationincubatorfoundation"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-linkedin"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/aiif.innovation/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-instagram"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>

          <p className="text-white/40 text-xs text-center sm:text-right">
            &copy; 2026 AIIF. All rights reserved.
            <br />
            CSR Conclave 2026 | #InnovateWithPurpose
          </p>
        </div>
      </div>
    </footer>
  );
};
