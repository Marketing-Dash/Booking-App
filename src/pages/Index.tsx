import SEO from "@/components/SEO";
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
      <SEO
        title="BrandSpeed Marketing | Digital Marketing Agency Malaysia"
        description="BrandSpeed Marketing is a full-service digital marketing agency in Malaysia. We build websites, apps, social media campaigns & SEO strategies for Malaysian businesses."
        keywords="digital marketing Malaysia, social media marketing, website development Malaysia, SEO Malaysia, branding agency, app development, content creation, Google Ads Malaysia"
        path="/"
      />
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
