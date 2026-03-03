import { motion } from "framer-motion";
import { Separator } from "../ui/separator";

export const Vision = () => {
  return (
    <section
      data-testid="vision-section"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(45deg, #1A0505 0%, #641220 100%)" }}
    >
      {/* Kolam pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(212,175,55,0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Tamil Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-[#D4AF37] text-lg sm:text-xl md:text-2xl tracking-wide mb-4 italic">
            "Yathum Oore Yavarum Kelir"
          </p>
          <p className="text-[#D4AF37]/70 text-sm sm:text-base max-w-xl mx-auto mb-10">
            To us, all towns are one, and all people are kin.
            <br />
            <span className="font-semibold text-[#D4AF37]">This is your invitation to belong to the movement.</span>
          </p>
        </motion.div>

        <Separator className="bg-[#D4AF37]/20 mb-10 max-w-xs mx-auto" />

        {/* The Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            The <span className="text-[#D4AF37]">Vision</span>
          </h2>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto">
            In the heart of Coimbatore, we aren't just discussing Corporate Social Responsibility; we are{" "}
            <span className="font-semibold text-[#D4AF37]">curating a legacy.</span>{" "}
            The world is changing. Sustainability is no longer a choice — it is the new currency of leadership.
          </p>

          <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mt-6">
            Join <span className="font-semibold text-white">AIIF</span> for an exclusive, high-intensity gathering
            where we bridge the gap between grassroots needs and technological breakthroughs.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "250+", label: "Attendees Expected" },
            { number: "20+", label: "Industry Leaders" },
            { number: "1", label: "Shared Mission" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">{stat.number}</p>
              <p className="text-xs sm:text-sm text-white/60 mt-1 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
