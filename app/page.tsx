import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Preamble from "@/components/Preamble";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Values from "@/components/Values";
import Actions from "@/components/Actions";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Preamble />
      <Mission />
      <Values />
      <Actions />
      <Testimonials />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
