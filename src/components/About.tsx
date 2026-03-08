import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const tags = ["about.tag1", "about.tag2", "about.tag3", "about.tag4"];

  return (
    <section id="about" className="py-24 section-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
              {t("about.headline")}
            </h2>
            <p className="text-lg text-[hsl(0,0%,40%)] leading-relaxed mb-8">
              {t("about.desc")}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full text-sm font-semibold border border-primary/30 text-primary bg-primary/5"
                >
                  {t(tag)}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary-gradient inline-block">
              {t("about.team")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-brand-gold/20 flex items-center justify-center">
              <div className="w-3/4 h-3/4 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-8xl font-heading font-black gradient-text">BS</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-primary/10 border border-primary/20 animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
