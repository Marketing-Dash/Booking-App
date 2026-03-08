import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { Menu, X } from "lucide-react";
import brandspeedLogo from "@/assets/brandspeed-logo.png";

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
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img src={brandspeedLogo} alt="BrandSpeed Marketing" className="h-10 md:h-12 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-foreground/70 hover:text-primary font-medium text-[15px] transition-colors duration-200"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm border border-border rounded-full px-1 py-0.5">
              {langs.map((l, i) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    lang === l.code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <a
              href="https://brandspeedmarketing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-6 py-2.5 rounded-full border-2 border-foreground text-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
            >
              Client Login
            </a>
            <a href="#contact" className="btn-primary text-sm !px-6 !py-2.5">
              {t("nav.cta")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground p-2"
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
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-foreground/70 hover:text-primary font-medium py-2.5 transition-colors border-b border-border/50"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="flex items-center gap-2 pt-3">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      lang === l.code
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground border border-border"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
              <a
                href="https://brandspeedmarketing.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-center px-6 py-2.5 rounded-full border-2 border-foreground text-foreground hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                Client Login
              </a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary text-center text-sm mt-2">
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
