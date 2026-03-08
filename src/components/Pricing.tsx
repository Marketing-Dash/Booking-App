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
    <section className="py-24 section-light">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-black text-center mb-16"
        >
          {t("pricing.headline")}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl p-8 relative ${
                pkg.popular
                  ? "border-2 border-primary shadow-[0_0_40px_-10px_hsl(25,100%,50%,0.3)] bg-[hsl(0,0%,100%)]"
                  : "border border-[hsl(0,0%,90%)] bg-[hsl(0,0%,100%)]"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 btn-primary-gradient !py-1 !px-4 text-xs rounded-full">
                  {t("pricing.popular")}
                </span>
              )}
              <h3 className="text-2xl font-heading font-bold mb-2">{t(pkg.nameKey)}</h3>
              <p className="text-[hsl(0,0%,50%)] text-sm mb-6">{t(pkg.descKey)}</p>
              <div className="mb-6">
                <span className="text-sm text-[hsl(0,0%,50%)]">{t("pricing.from")}</span>
                <p className="text-4xl font-heading font-black gradient-text">{pkg.price}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{t(f)}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-bold transition-all duration-300 ${
                  pkg.popular
                    ? "btn-primary-gradient !py-3"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-[hsl(0,0%,100%)]"
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
