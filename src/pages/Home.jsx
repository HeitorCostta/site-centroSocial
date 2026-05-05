import Hero from "../components/Hero/Hero";
import Areas from "../components/Areas/Areas";
import InstitutionalVideo from "../components/InstitutionalVideo/index";
import Projects from "../components/Projects/Projects";
import CTA from "../components/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Areas />
      <InstitutionalVideo />
      <Projects />
      <CTA />
    </>
  );
}