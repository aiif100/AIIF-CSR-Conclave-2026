import { motion } from "framer-motion";
import { MessageCircle, ImagePlus } from "lucide-react";

const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/F7xC1snbP6gFXEe9PE7FXl?mode=gi_t";
const GET_DP_URL = "https://getdp.co/aiifcsrconclave";

export const Community = () => {
  return (
    <section
      data-testid="community-section"
      className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden"
      style={{ background: "linear-gradient(45deg, #1A0505 0%, #641220 100%)" }}
    >
      {/* Kolam pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(212,175,55,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Partnership & Community Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-20 relative">
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent -translate-x-1/2" />

          {/* Partner With Us */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37]/70 font-medium mb-3">
              Partner With Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Interested in <span className="text-[#D4AF37]">Partnering</span>?
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-sm">
              Explore partnership opportunities and join hands with AIIF to make a meaningful impact at the CSR Conclave 2026.
            </p>
            <motion.a
              href="https://wa.me/918925889316?text=Hi!%20I%20am%20interested%20in%20partnering%20for%20the%20AIIF%20CSR%20Conclave%202026.%20Please%20share%20the%20details."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="sponsor-whatsapp-button"
              className="mt-auto inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Click Here to Partner
            </motion.a>
          </motion.div>

          {/* Mobile Divider */}
          <div className="md:hidden flex items-center gap-4 w-full">
            <div className="flex-1 h-px bg-[#D4AF37]/20" />
            <span className="text-[#D4AF37]/50 text-xs tracking-widest uppercase italic">and</span>
            <div className="flex-1 h-px bg-[#D4AF37]/20" />
          </div>

          {/* Stay Connected */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37]/70 font-medium mb-3">
              Stay Connected
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join the <span className="text-[#D4AF37]">Community</span>
            </h2>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-sm">
              Get real-time updates and connect with fellow attendees before the conclave begins.
            </p>

            <motion.a
              href={WHATSAPP_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-group-button"
              className="mt-auto inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join Official Group
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16 max-w-xs mx-auto">
          <div className="flex-1 h-px bg-[#D4AF37]/20" />
          <span className="text-[#D4AF37]/50 text-xs tracking-widest uppercase">and</span>
          <div className="flex-1 h-px bg-[#D4AF37]/20" />
        </div>

        {/* I Am Attending Poster */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Create Your <span className="text-[#D4AF37]">"I Am Attending"</span> Poster
          </h3>
          <p className="text-base text-white/70 leading-relaxed mb-8 max-w-lg mx-auto">
            Show the world you're part of this exclusive conclave. Generate your personalised poster and share it across your network.
          </p>

          <motion.a
            href={GET_DP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="create-poster-button"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#2C1A05] px-8 py-4 rounded-full font-bold text-base shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <ImagePlus className="w-5 h-5" strokeWidth={2} />
            Create Your Poster Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
