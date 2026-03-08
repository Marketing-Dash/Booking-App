import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Check } from "lucide-react";

const packages = [
  {
    nameKey: "pricing.starter",
    descKey: "pricing.starter.desc",
    price: "RM 1,500",
    features: ["pricing.feature.website", "pricing.feature.social"],
    popular: false,
  },
  {
    nameKey: "pricing.growth",
    descKey: "pricing.growth.desc",
    price: "RM 3,500",
    features: ["pricing.feature.website", "pricing.feature.social", "pricing.feature.seo", "pricing.feature.analytics"],
    popular: true,
  },
  {
    nameKey: "pricing.enterprise",
    descKey: "pricing.enterprise.desc",
    price: "RM 8,000",
    features: ["pricing.feature.website", "pricing.feature.social", "pricing.feature.seo", "pricing.feature.ads", "pricing.feature.app", "pricing.feature.branding", "pricing.feature.support", "pricing.feature.analytics"],
    popular: false,
  },
];

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding section-alt-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black gradient-text-orange">
            {t("pricing.headline")}
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
            Pick a plan that fits your business needs — from simple automation to full-scale marketing and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-8 relative transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? "card-clean-orange shadow-xl shadow-primary/10"
                  : "card-clean"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold py-1.5 px-5 rounded-full">
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{t(pkg.nameKey)}</h3>
              <p className="text-muted-foreground text-sm mb-6">{t(pkg.descKey)}</p>
              <div className="mb-6">
                <span className="text-xs text-muted-foreground">{t("pricing.from")}</span>
                <p className="text-3xl font-heading font-black text-primary">{pkg.price}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{t(f)}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center rounded-full font-bold transition-all duration-300 ${
                  pkg.popular
                    ? "btn-primary w-full"
                    : "btn-outline w-full"
                }`}
              >
                {t("pricing.cta")}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
