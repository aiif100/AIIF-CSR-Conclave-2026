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

function App() {
  return (
    <div className="App">
      <Navbar />
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
