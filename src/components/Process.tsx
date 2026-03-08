import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lightbulb, Target, Hammer, Rocket } from "lucide-react";

const steps = [
  { titleKey: "process.1.title", descKey: "process.1.desc", icon: Lightbulb },
  { titleKey: "process.2.title", descKey: "process.2.desc", icon: Target },
  { titleKey: "process.3.title", descKey: "process.3.desc", icon: Hammer },
  { titleKey: "process.4.title", descKey: "process.4.desc", icon: Rocket },
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 section-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm mb-4 block">
            {t("process.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            {t("process.headline")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10 bg-[hsl(0,0%,100%)]">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">{t(step.titleKey)}</h3>
                <p className="text-[hsl(0,0%,45%)] leading-relaxed">{t(step.descKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
