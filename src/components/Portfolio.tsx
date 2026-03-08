import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

type Category = "all" | "websites" | "apps" | "social" | "branding";

const projects = [
  { name: "TechMY Portal", category: "websites" as const, gradient: "from-primary/20 to-secondary/20" },
  { name: "FoodKL App", category: "apps" as const, gradient: "from-secondary/20 to-primary/20" },
  { name: "StyleKL Campaign", category: "social" as const, gradient: "from-brand-gold/20 to-primary/20" },
  { name: "Batik House Identity", category: "branding" as const, gradient: "from-primary/20 to-brand-gold/20" },
  { name: "EduMalaysia Platform", category: "websites" as const, gradient: "from-secondary/15 to-brand-gold/20" },
  { name: "HealthPlus App", category: "apps" as const, gradient: "from-primary/15 to-secondary/25" },
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
    <section id="portfolio" className="section-padding section-alt-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            {t("portfolio.label")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground">
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
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{project.name}</h3>
                    <span className="text-sm text-primary capitalize font-medium">{project.category}</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#contact"
                    className="btn-primary text-sm !py-2.5 !px-6 inline-block"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    {t("portfolio.view")}
                  </a>
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
