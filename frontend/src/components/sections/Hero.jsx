import { motion } from "framer-motion";
import { CountdownTimer } from "../CountdownTimer";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Badge } from "../ui/badge";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_aiif-csr-conclave/artifacts/htln73kv_AIIF%20LOGO%20og%20without%20ajk%20mountain-01.png";
const POSTER_URL = "https://customer-assets.emergentagent.com/job_28ecf3e1-f28a-43be-b903-d15aa75a831a/artifacts/s8o74pvb_AIIF%27S%20CSR%20CONCLAVE.png";

export const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #FDFCF5 0%, #F5F2E8 100%)" }}
    >
      {/* Kolam dot pattern overlay */}
      <div className="absolute inset-0 kolam-pattern pointer-events-none" />

      {/* Corner ornaments */}
      <div className="corner-ornament corner-tl absolute top-6 left-6" />
      <div className="corner-ornament corner-tr absolute top-6 right-6" />
      <div className="corner-ornament corner-bl absolute bottom-6 left-6" />
      <div className="corner-ornament corner-br absolute bottom-6 right-6" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Left content */}
          <motion.div
            className="md:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo */}
            <div className="flex items-center gap-4">
              <img
                src={LOGO_URL}
                alt="AIIF Logo"
                data-testid="aiif-logo"
                className="h-16 sm:h-20 w-auto object-contain bg-[#1A0505] rounded-md p-2"
              />
            </div>

            {/* Proudly Presents */}
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-medium mb-3">
                Proudly Presents
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D0A0F] leading-[1.1]">
                The CSR<br />
                <span className="gold-shimmer">Conclave 2026</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#5C4033] leading-relaxed max-w-md">
              Role of CSR in Curating{" "}
              <span className="font-semibold text-[#641220]">
                "Sustainable Communities Through Innovation"
              </span>
            </p>

            {/* Event Details */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[#5C4033]">
                <CalendarDays className="w-5 h-5 text-[#641220]" strokeWidth={1.5} />
                <span className="text-sm sm:text-base font-medium">20th March 2026 | 10:00 AM - 12:30 PM</span>
              </div>
              <div className="flex items-center gap-3 text-[#5C4033]">
                <MapPin className="w-5 h-5 text-[#641220]" strokeWidth={1.5} />
                <span className="text-sm sm:text-base font-medium">AJK Innovation Incubator Foundation, Navakkarai, Coimbatore</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#641220]" strokeWidth={1.5} />
                <Badge
                  data-testid="invite-only-badge"
                  className="bg-[#641220]/10 text-[#641220] border-[#641220]/20 hover:bg-[#641220]/15 text-xs tracking-wider uppercase"
                >
                  Invite-Only | Limited Seats
                </Badge>
              </div>
            </div>

            {/* Countdown */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#8A7E72] mb-3 font-medium">Event Begins In</p>
              <CountdownTimer />
            </div>

            {/* CTA */}
            <motion.a
              href="#pricing"
              data-testid="hero-cta-button"
              className="inline-block bg-[#641220] text-white px-10 py-4 rounded-sm font-medium tracking-wide hover:bg-[#801B2E] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Secure Your Presence
            </motion.a>
          </motion.div>

          {/* Right - Poster */}
          <motion.div
            className="md:col-span-7 relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Gold frame */}
            <div className="relative p-3 sm:p-4 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] rounded-lg shadow-2xl">
              <div className="bg-white rounded-md overflow-hidden">
                <img
                  src={POSTER_URL}
                  alt="CSR Conclave 2026 Event Poster"
                  data-testid="event-poster"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 bg-[#641220] text-white px-5 py-3 rounded-sm shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs tracking-widest uppercase font-medium">#InnovateWithPurpose</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
