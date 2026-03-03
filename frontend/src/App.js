import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Vision } from "./components/sections/Vision";
import { Pricing } from "./components/sections/Pricing";
import { Registration } from "./components/sections/Registration";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";

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
      <div id="register">
        <Registration />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
