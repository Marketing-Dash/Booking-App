import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(25,100%,50%,0.08)] via-transparent to-[hsl(264,100%,50%,0.08)]" />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-20 h-20 rounded-2xl border border-primary/20 bg-primary/5"
        />
        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[15%] w-32 h-32 rounded-full border border-secondary/20 bg-secondary/5"
        />
        <motion.div
          animate={{ y: [-10, 25, -10], rotate: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] left-[20%] w-16 h-16 rounded-lg border border-brand-gold/20 bg-brand-gold/5 rotate-45"
        />
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [45, 90, 45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] right-[10%] w-24 h-24 rounded-xl border border-primary/15 bg-primary/5"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-tight mb-6"
        >
          {t("hero.headline")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-4xl font-heading font-bold mb-8 h-12 md:h-14"
        >
          <span className="gradient-text">{displayText}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-[hsl(0,0%,60%)] max-w-2xl mx-auto mb-12"
        >
          {t("hero.subtext")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary-gradient text-lg">
            {t("hero.cta1")}
          </a>
          <a href="#portfolio" className="btn-outline-white text-lg">
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-[hsl(0,0%,40%)]" />
      </motion.div>
    </section>
  );
};

export default Hero;
