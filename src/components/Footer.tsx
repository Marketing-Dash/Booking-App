import { useLanguage } from "@/i18n/LanguageContext";
import { Zap, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="section-dark border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-7 h-7 text-primary" />
              <span className="text-xl font-heading font-black gradient-text">BrandSpeed</span>
            </div>
            <p className="text-[hsl(0,0%,45%)] mb-6">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg border border-[hsl(0,0%,18%)] flex items-center justify-center text-[hsl(0,0%,50%)] hover:border-primary hover:text-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t("footer.quicklinks")}</h4>
            <ul className="space-y-2">
              {["nav.home", "nav.services", "nav.portfolio", "nav.about", "nav.contact"].map((key) => (
                <li key={key}>
                  <a href={`#${key.split(".")[1]}`} className="text-[hsl(0,0%,45%)] hover:text-primary transition-colors text-sm">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2">
              {["services.1.title", "services.2.title", "services.3.title", "services.4.title", "services.5.title", "services.6.title"].map((key) => (
                <li key={key}>
                  <a href="#services" className="text-[hsl(0,0%,45%)] hover:text-primary transition-colors text-sm">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-[hsl(0,0%,45%)] text-sm">
              <li>hello@brandspeedmarketing.com.my</li>
              <li>+60 12-345 6789</li>
              <li>Selangor, Malaysia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[hsl(0,0%,15%)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[hsl(0,0%,35%)] text-sm">{t("footer.copyright")}</p>
          <div className="flex gap-6 text-[hsl(0,0%,35%)] text-sm">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
