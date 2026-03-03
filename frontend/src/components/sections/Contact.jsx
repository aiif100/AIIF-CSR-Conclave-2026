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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
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
            href="https://wa.me/918925889316"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-whatsapp"
            className="flex flex-col items-center gap-3 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-white text-sm font-medium">WhatsApp Us</span>
            <span className="text-white/50 text-xs">Chat Directly</span>
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
