import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quoteKey: "testimonials.1.quote", nameKey: "testimonials.1.name", companyKey: "testimonials.1.company" },
  { quoteKey: "testimonials.2.quote", nameKey: "testimonials.2.name", companyKey: "testimonials.2.company" },
  { quoteKey: "testimonials.3.quote", nameKey: "testimonials.3.name", companyKey: "testimonials.3.company" },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding section-alt-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground text-center mb-16"
        >
          {t("testimonials.headline")}
        </motion.h2>

        <div className="max-w-3xl mx-auto relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="card-clean !p-10 text-center"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed italic">
                "{t(testimonials[current].quoteKey)}"
              </p>
              <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary font-bold">
                  {t(testimonials[current].nameKey).charAt(0)}
                </span>
              </div>
              <p className="font-heading font-bold text-foreground">{t(testimonials[current].nameKey)}</p>
              <p className="text-muted-foreground text-sm">{t(testimonials[current].companyKey)}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-border w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
