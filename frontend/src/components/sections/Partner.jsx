import React from "react";
import { motion } from "framer-motion";

const partners = [
    { name: "INNOVATION PARTNER", src: "/INNOVATION PARTNER.png" },
    { name: "GIFTING PARTNER", src: "/GIFTING PARTNER.png" },
    { name: "TECH PARTNER", src: "/TECH PARTNER.jpeg" },
    { name: "STARTUP MEDIA PARTNER", src: "/STARTUP MEDIA PARTNER.jpeg" },
    { name: "COMMUNITY RADIO PARTNER", src: "/COMMUNITY RADIO PARTNER.png" },
];

const Partner = () => {
    // Duplicate the array to create an infinite, seamless scrolling marquee loop
    const duplicatedPartners = [...partners, ...partners, ...partners];

    return (
        <section
            id="partner"
            className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden flex flex-col items-center justify-center w-full"
            style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F2E8 50%)" }}>


            {/* Corner ornaments - match the overarching theme */}
            <div className="corner-ornament corner-tl absolute top-6 left-6" />
            <div className="corner-ornament corner-tr absolute top-6 right-6" />

            {/* Header Container */}
            <div className="text-center z-20 px-4 mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#2D0A0F] mb-4">
                    #ROOTED <span className="text-[#641220]">WITH PURPOSE</span>
                </h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-4 opacity-70" />
            </div>

            {/* Marquee Carousel Container */}
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden flex items-center">

                {/* Left and Right fade transparent gradients for smooth entry/exit */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#F5F2E8] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#F5F2E8] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex items-center gap-10 md:gap-20 w-max"
                    animate={{ x: ["0%", "-33.333%"] }}
                    transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                    }}
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-5 shrink-0 px-2"
                        >
                            {/* Image Frame */}
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center p-6 border border-[#8A7E72]/10 overflow-hidden group hover:shadow-[0_8px_30px_rgba(100,18,32,0.15)] transition-all duration-300">
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain grayscale-[50%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Partner Title */}
                            <span className="text-xs md:text-sm font-bold tracking-widest text-[#2D0A0F]/80 uppercase text-center max-w-[180px] md:max-w-full border-b border-transparent">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Partner;
