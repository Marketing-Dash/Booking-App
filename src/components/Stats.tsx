import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const stats = [
  { value: 100, suffix: "+", key: "stats.projects" },
  { value: 50, suffix: "+", key: "stats.clients" },
  { value: 5, suffix: "", key: "stats.years" },
  { value: 98, suffix: "%", key: "stats.satisfaction" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-black text-primary">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {stats.map((stat) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-muted-foreground font-medium text-sm">{t(stat.key)}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          {t("stats.desc")}
        </motion.p>
      </div>
    </section>
  );
};

export default Stats;
