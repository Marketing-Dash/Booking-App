import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import heroLaptop from "@/assets/hero-laptop.png";

const About = () => {
  const { t } = useLanguage();
  const tags = ["about.tag1", "about.tag2", "about.tag3", "about.tag4"];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
              {t("nav.about")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-6">
              {t("about.headline")}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {t("about.desc")}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-semibold border border-primary/20 text-primary bg-primary/5"
                >
                  {t(tag)}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary inline-block">
              {t("about.team")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
              <img
                src={heroLaptop}
                alt="BrandSpeed Marketing team at work"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
