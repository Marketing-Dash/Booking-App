import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Lightbulb, Target, Hammer, Rocket } from "lucide-react";

const steps = [
  { titleKey: "process.1.title", descKey: "process.1.desc", icon: Lightbulb, num: "01" },
  { titleKey: "process.2.title", descKey: "process.2.desc", icon: Target, num: "02" },
  { titleKey: "process.3.title", descKey: "process.3.desc", icon: Hammer, num: "03" },
  { titleKey: "process.4.title", descKey: "process.4.desc", icon: Rocket, num: "04" },
];

const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            {t("process.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground">
            {t("process.headline")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-5 relative z-10 bg-background">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest mb-2 block">{step.num}</span>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{t(step.titleKey)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(step.descKey)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
