import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { BarChart3, Code, Smartphone, Search, Palette, Camera, ArrowRight } from "lucide-react";

const services = [
  { titleKey: "services.1.title", descKey: "services.1.desc", icon: BarChart3 },
  { titleKey: "services.2.title", descKey: "services.2.desc", icon: Code },
  { titleKey: "services.3.title", descKey: "services.3.desc", icon: Smartphone },
  { titleKey: "services.4.title", descKey: "services.4.desc", icon: Search },
  { titleKey: "services.5.title", descKey: "services.5.desc", icon: Palette },
  { titleKey: "services.6.title", descKey: "services.6.desc", icon: Camera },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm mb-4 block">
            {t("services.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
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
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-gradient-border p-8 rounded-xl bg-[hsl(0,0%,7%)] group cursor-pointer transition-shadow duration-300 hover:glow-orange"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-[hsl(0,0%,55%)] mb-4 leading-relaxed">
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
