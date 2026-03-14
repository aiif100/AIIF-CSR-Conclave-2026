import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/1.png", id: 1 },
  { src: "/2.png", id: 2 },
  { src: "/3.png", id: 3 },
  { src: "/4.png", id: 4 },
  { src: "/5.png", id: 5 },
];

const Speckers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // changes image every 3.5 seconds

    return () => clearInterval(timer);
  }, []);

  // Calculate the style for each image based on its distance from the active index
  const getPositionStyles = (index) => {
    const diff = (index - currentIndex + images.length) % images.length;

    if (diff === 0) {
      // Center (Active/Elevated) Image
      return { zIndex: 30, scale: 1, x: "0%", opacity: 1, isCenter: true };
    } else if (diff === 1) {
      // Right Image (Hidden side by side)
      return { zIndex: 20, scale: 0.8, x: "70%", opacity: 0.5, isCenter: false };
    } else if (diff === images.length - 1) {
      // Left Image (Hidden side by side)
      return { zIndex: 20, scale: 0.8, x: "-70%", opacity: 0.5, isCenter: false };
    } else {
      // Far Left / Far Right (Completely off-screen/Hidden)
      return { zIndex: 10, scale: 0.6, x: diff === 2 ? "120%" : "-120%", opacity: 0, isCenter: false };
    }
  };

  return (
    <section
      data-testid="speckers-section"
      className="relative h-[85vh] md:h-[125vh] flex items-center justify-center overflow-hidden w-full py-20"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #FFFFFF 50%)" }}>
      {/* Corner ornaments */}
      <div className="corner-ornament corner-tl absolute top-6 left-6" />
      <div className="corner-ornament corner-tr absolute top-6 right-6" />
      {/* Header Container */}
      <div className="absolute top-16 md:top-24 left-0 w-full text-center z-20 px-4">
        <p className="text-sm tracking-[0.3em] uppercase text-[#8A7E72] font-medium mb-3">
          For Your Information
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D0A0F]">
          Speckers <span className="text-[#641220]">Line up!</span>
        </h2>
      </div>
      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl mx-auto h-[60vh] md:h-[70vh] flex items-center justify-center z-10 mt-20">
        {images.map((item, index) => {
          const { zIndex, scale, x, opacity, isCenter } = getPositionStyles(index);
          return (
            <motion.div
              key={item.id}
              className="absolute w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] aspect-[3/4] md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer bg-neutral-900 border-[1px] border-white/10"
              initial={{ opacity: 0, y: 30 }}

              animate={{
                zIndex,
                scale,
                x,
                opacity,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1], // Smooth snappy animation curve
              }}
              onClick={() => setCurrentIndex(index)}
            >

              {/* Background Image Wrapper */}
              <motion.div
                className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out"
                style={{ backgroundImage: `url(${item.src})` }}
                animate={{
                  scale: isCenter ? 1.05 : 1 // Slight zoom on hover/center effect
                }}
              />

              {/* Dim effect for non-centered/side items */}
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                initial={false}
                animate={{ opacity: isCenter ? 0 : 0.6 }}
                transition={{ duration: 0.8 }}
              />

              {/* Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default Speckers;
