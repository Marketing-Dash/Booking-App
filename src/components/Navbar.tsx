import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Zap, Menu, X } from "lucide-react";

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.portfolio", href: "#portfolio" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contact", href: "#contact" },
  ];

  const langs: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "bm", label: "BM" },
    { code: "zh", label: "中文" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <Zap className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-2xl font-heading font-black gradient-text">
              BrandSpeed
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[hsl(0,0%,80%)] hover:text-primary font-medium transition-colors duration-200"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-sm">
              {langs.map((l, i) => (
                <span key={l.code} className="flex items-center">
                  <button
                    onClick={() => setLang(l.code)}
                    className={`px-2 py-1 rounded transition-colors ${
                      lang === l.code
                        ? "text-primary font-bold"
                        : "text-[hsl(0,0%,60%)] hover:text-[hsl(0,0%,90%)]"
                    }`}
                  >
                    {l.label}
                  </button>
                  {i < langs.length - 1 && (
                    <span className="text-[hsl(0,0%,30%)]">|</span>
                  )}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-primary-gradient text-sm !px-6 !py-3 rounded-lg inline-block">
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[hsl(0,0%,90%)] p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-navbar border-t border-[hsl(0,0%,100%,0.05)]"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[hsl(0,0%,80%)] hover:text-primary font-medium py-2 transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-2">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-3 py-1 rounded text-sm ${
                      lang === l.code
                        ? "bg-primary text-primary-foreground"
                        : "text-[hsl(0,0%,60%)] border border-[hsl(0,0%,20%)]"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary-gradient text-center text-sm !py-3 rounded-lg">
                {t("nav.cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
