import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Portfolio />
        <Process />
        <Testimonials />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
