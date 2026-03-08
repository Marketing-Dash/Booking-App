import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Star } from "lucide-react";
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

  const businessSolution = services.find((s) => s.slug === "business-solution");
  const otherServices = services.filter((s) => s.slug !== "business-solution");

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

        {/* Featured: Business Solution */}
        {businessSolution && (() => {
          const Icon = businessSolution.icon;
          return (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Link to={`/services/${businessSolution.slug}`}>
                <div className="relative overflow-hidden rounded-3xl bg-[hsl(var(--brand-dark))] p-8 md:p-12 group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 border-2 border-primary/30">
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[hsl(var(--brand-gold))]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
                    {/* Icon & Badge */}
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors border border-primary/20">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 bg-[hsl(var(--brand-gold))] text-[hsl(var(--brand-dark))] text-[10px] font-black uppercase tracking-widest py-1 px-3 rounded-full whitespace-nowrap">
                        <Star className="w-3 h-3" />
                        Core Service
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl md:text-3xl font-heading font-black text-white">
                          {t(businessSolution.titleKey)}
                        </h3>
                        <span className="hidden md:inline-flex bg-primary/20 text-primary text-xs font-bold py-1 px-3 rounded-full">
                          Limited Slots
                        </span>
                      </div>
                      <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mb-4">
                        {t(businessSolution.descKey)}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        <span>Explore this solution</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Price hint */}
                    <div className="hidden lg:flex flex-col items-end text-right">
                      <span className="text-white/40 text-xs uppercase tracking-wider mb-1">Starting from</span>
                      <span className="text-3xl font-heading font-black text-primary">RM 500</span>
                      <span className="text-white/50 text-sm">/month</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })()}

        {/* Other Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.titleKey}
                to={`/services/${service.slug}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-clean group cursor-pointer h-full"
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
