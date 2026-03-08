import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import heroLaptop from "@/assets/hero-laptop.png";

const cycleKeys = ["hero.cycle.1", "hero.cycle.2", "hero.cycle.3", "hero.cycle.4"];

const Hero = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = t(cycleKeys[currentIndex]);
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % cycleKeys.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, t]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-[72px] bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-primary leading-[1.1] mb-6">
              BRANDSPEED
            </h1>

            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">
              {t("hero.headline")}
            </h2>

            <div className="text-lg md:text-xl text-primary font-semibold mb-4 h-8">
              {displayText}<span className="animate-pulse">|</span>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {t("hero.subtext")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-base">
                {t("hero.cta1")}
              </a>
              <a href="#portfolio" className="btn-outline text-base">
                {t("hero.cta2")}
              </a>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10">
              <img
                src={heroLaptop}
                alt="BrandSpeed Marketing digital solutions dashboard"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
