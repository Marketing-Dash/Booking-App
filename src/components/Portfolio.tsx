import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type Category = "all" | "websites" | "apps" | "social" | "branding";

const projects = [
  { name: "TechMY Portal", category: "websites" as const, color: "from-primary/30 to-secondary/30" },
  { name: "FoodKL App", category: "apps" as const, color: "from-secondary/30 to-primary/30" },
  { name: "StyleKL Campaign", category: "social" as const, color: "from-brand-gold/30 to-primary/30" },
  { name: "Batik House Identity", category: "branding" as const, color: "from-primary/30 to-brand-gold/30" },
  { name: "EduMalaysia Platform", category: "websites" as const, color: "from-secondary/30 to-brand-gold/30" },
  { name: "HealthPlus App", category: "apps" as const, color: "from-primary/20 to-secondary/40" },
];

const Portfolio = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Category>("all");

  const filterKeys: { key: string; value: Category }[] = [
    { key: "portfolio.all", value: "all" },
    { key: "portfolio.websites", value: "websites" },
    { key: "portfolio.apps", value: "apps" },
    { key: "portfolio.social", value: "social" },
    { key: "portfolio.branding", value: "branding" },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-widest text-sm mb-4 block">
            {t("portfolio.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black">
            {t("portfolio.headline")}
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterKeys.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filter === f.value
                  ? "btn-primary-gradient !py-2 !px-5"
                  : "border border-[hsl(0,0%,20%)] text-[hsl(0,0%,60%)] hover:border-primary hover:text-primary"
              }`}
            >
              {t(f.key)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[hsl(0,0%,4%,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-heading font-bold mb-2">{project.name}</h3>
                  <span className="text-sm text-primary capitalize mb-4">{project.category}</span>
                  <button className="btn-primary-gradient !py-2 !px-6 text-sm">
                    {t("portfolio.view")}
                  </button>
                </div>
                <div className="absolute inset-0 flex items-end p-6 group-hover:opacity-0 transition-opacity">
                  <div>
                    <h3 className="text-lg font-heading font-bold">{project.name}</h3>
                    <span className="text-sm text-primary capitalize">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
