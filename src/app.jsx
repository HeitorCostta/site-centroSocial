import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Areas from "./components/Areas/Areas";
import Projects from "./components/Projects/Projects";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Impact from "./components/Impact/Impact";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Areas />
      <Impact />
      <Projects />
      <CTA />
      <Footer />
    </>
  );
}

export default App;