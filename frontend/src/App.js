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

function App() {
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    // Show poster after a brief delay for better UX
    const timer = setTimeout(() => {
      setShowPoster(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Dialog open={showPoster} onOpenChange={setShowPoster}>
        <DialogContent className="w-[95vw] sm:w-[85vw] p-2 sm:p-6 md:p-12 border-none bg-transparent shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-in fade-in zoom-in duration-500">
          <div className="relative p-1 bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#B89628] rounded-sm shadow-2xl">
            <div className="bg-[#1A0505] p-0.5 rounded-sm relative overflow-hidden group">
              {/* Subtle inner gold border */}
              <div className="absolute inset-0 border-[1px] border-[#D4AF37]/30 pointer-events-none z-10" />
              <img
                src="/Poster.jpeg"
                alt="AIIF CSR Conclave 2026"
                className="w-full h-auto rounded-sm block shadow-inner"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Navbar />
      <div className="hidden lg:block h-16" />
      <Hero />
      <div id="vision">
        <Vision />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <QRPayment />
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