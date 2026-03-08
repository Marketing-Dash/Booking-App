import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";

const services = servicesData.map((s) => ({
  titleKey: s.titleKey,
  descKey: s.descKey,
  icon: s.icon,
  slug: s.slug,
}));

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding section-alt-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            {t("services.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground">
            {t("services.headline")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.titleKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-clean group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(service.descKey)}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
