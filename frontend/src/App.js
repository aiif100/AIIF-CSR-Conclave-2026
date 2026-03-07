import React, { useState, useEffect } from "react";
import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Vision } from "./components/sections/Vision";
import { Pricing } from "./components/sections/Pricing";
import { QRPayment } from "./components/sections/QRPayment";
import { Registration } from "./components/sections/Registration";
import { Community } from "./components/sections/Community";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { FloatingShare } from "./components/FloatingShare";
import { Dialog, DialogContent } from "./components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./components/ui/carousel";

function App() {
  const [showPoster, setShowPoster] = useState(false);
  const [isWomensDay, setIsWomensDay] = useState(false);

  useEffect(() => {
    // Check if today is Women's Day (March 8)
    const today = new Date();
    if (today.getMonth() === 2 && today.getDate() === 8) {
      setIsWomensDay(true);
    }

    // Show poster after a brief delay for better UX
    const timer = setTimeout(() => {
      setShowPoster(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const PosterImage = ({ src, alt }) => (
    <div className="relative p-1 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#B89628] rounded-sm shadow-2xl">
      <div className="bg-[#1A0505] p-0.5 rounded-sm relative overflow-hidden group">
        <div className="absolute inset-0 border-[1px] border-[#D4AF37]/30 pointer-events-none z-10" />
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-sm block shadow-inner"
        />
      </div>
    </div>
  );

  return (
    <div className="App">

      <Dialog open={showPoster} onOpenChange={setShowPoster}>
        <DialogContent className="w-[95vw] sm:w-[85vw] p-2 sm:p-6 border-none bg-transparent shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-in fade-in zoom-in duration-500">
          {isWomensDay ? (
            <div className="px-10"> {/* Extra padding for carousel buttons */}
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <PosterImage src="/Womens_Day.jpeg" alt="International Women's Day 2026" />
                  </CarouselItem>
                  <CarouselItem>
                    <PosterImage src="/Poster.jpeg" alt="AIIF CSR Conclave 2026" />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-[#D4AF37] hover:bg-[#B89628] text-[#1A0505] border-none -left-12" />
                <CarouselNext className="bg-[#D4AF37] hover:bg-[#B89628] text-[#1A0505] border-none -right-12" />
              </Carousel>
              <p className="text-center text-[#D4AF37] mt-4 font-medium tracking-widest uppercase text-xs">
                Happy International Women's Day
              </p>
            </div>
          ) : (
            <div className="px-10">
              <PosterImage src="/Poster.jpeg" alt="AIIF CSR Conclave 2026" />
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Navbar isWomensDay={isWomensDay} />
      <div className={isWomensDay ? "h-12 lg:h-32" : "hidden lg:block h-16"} />
      <Hero />
      <div id="vision">
        <Vision />
      </div>
      <div id="pricing" className="block md:hidden">
        {/* only for mobile view */}
        {isWomensDay && (
          <div className="bg-[#FFF5F7] py-1">
            <Pricing isWomensDay={true} />
          </div>
        )}
        <Pricing isWomensDay={false} />
      </div>

      <div id="qr-payment" className="hidden md:block">
        {/* only for desktop view */}
        {isWomensDay && (
          <div className="bg-[#FFF5F7] py-1 border-b border-[#C05780]/10">
            <QRPayment isWomensDay={true} />
          </div>
        )}
        <QRPayment isWomensDay={false} />
      </div>
      <div id="register">
        <Registration />
      </div>
      <Community />
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <FloatingShare />
    </div>
  );
}

export default App;