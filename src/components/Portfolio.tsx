import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

type Category = "all" | "websites" | "apps" | "social" | "branding";

interface PortfolioItem {
  id: string;
  title_en: string;
  title_bm: string;
  title_zh: string;
  description_en: string;
  category: string;
  image_url: string | null;
  link: string | null;
  is_active: boolean;
  sort_order: number;
}

const gradients = [
  "from-primary/20 to-secondary/20",
  "from-secondary/20 to-primary/20",
  "from-brand-gold/20 to-primary/20",
  "from-primary/20 to-brand-gold/20",
  "from-secondary/15 to-brand-gold/20",
  "from-primary/15 to-secondary/25",
];

const Portfolio = () => {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState<Category>("all");
  const [projects, setProjects] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from("portfolio_items")
        .select("*")
        .eq("is_active", true)
        .order("sort_order");
      if (data) setProjects(data as PortfolioItem[]);
    };
    fetchProjects();
  }, []);

  const filterKeys: { key: string; value: Category }[] = [
    { key: "portfolio.all", value: "all" },
    { key: "portfolio.websites", value: "websites" },
    { key: "portfolio.apps", value: "apps" },
    { key: "portfolio.social", value: "social" },
    { key: "portfolio.branding", value: "branding" },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const getTitle = (p: PortfolioItem) => {
    if (language === "bm") return p.title_bm || p.title_en;
    if (language === "zh") return (p as any).title_zh || p.title_en;
    return p.title_en;
  };

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
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] border border-border bg-card hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-300"
              >
                {project.image_url ? (
                  <img src={project.image_url} alt={getTitle(project)} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                )}
                <div className="absolute inset-0 flex items-end p-6">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{getTitle(project)}</h3>
                    <span className="text-sm text-primary capitalize font-medium">{project.category}</span>
                  </div>
                </div>
                {project.link && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm !py-2.5 !px-6 inline-block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t("portfolio.view")}
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No portfolio items yet.</p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
