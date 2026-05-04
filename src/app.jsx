import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Areas from "./components/Areas/Areas";
import Projects from "./components/Projects/Projects";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import InstitutionalVideo from "./components/InstitutionalVideo";
import Transparency from "./components/Transparency";

import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Areas />
      <InstitutionalVideo />
      <Projects />
      <Transparency />
      <CTA />
      <Footer />
    </>
  );
}

export default App;