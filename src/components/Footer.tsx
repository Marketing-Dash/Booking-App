import { useLanguage } from "@/i18n/LanguageContext";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const Footer = () => {
  const { t } = useLanguage();
  const { get } = useSiteContent();

  return (
    <footer className="bg-foreground text-background border-t-2 border-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-heading font-black">
                <span className="text-[hsl(217,60%,22%)]">BRAND</span><span className="text-primary">SPEED</span>
              </span>
            </div>
            <p className="text-background/60 text-sm mb-6">{t("footer.tagline")}</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg border border-background/20 flex items-center justify-center text-background/60 hover:border-primary hover:text-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-background">{t("footer.quicklinks")}</h4>
            <ul className="space-y-2.5">
              {["nav.home", "nav.services", "nav.portfolio", "nav.about", "nav.contact"].map((key) => (
                <li key={key}>
                  <a href={`#${key.split(".")[1]}`} className="text-background/50 hover:text-primary transition-colors text-sm">{t(key)}</a>
                </li>
              ))}
              <li>
                <a href="/blog" className="text-background/50 hover:text-primary transition-colors text-sm">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-background">{t("footer.services")}</h4>
            <ul className="space-y-2.5">
              {["services.1.title", "services.2.title", "services.3.title", "services.4.title", "services.5.title", "services.6.title"].map((key) => (
                <li key={key}>
                  <a href="#services" className="text-background/50 hover:text-primary transition-colors text-sm">{t(key)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-background">{t("footer.contact")}</h4>
            <ul className="space-y-2.5 text-background/50 text-sm">
              <li>{get("contact.info.email", "hello@brandspeed.com.my")}</li>
              <li>{get("contact.info.phone", "+601127340380")}</li>
              <li>{get("contact.info.address", "Kuala Lumpur, Malaysia")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-xs">{t("footer.copyright")}</p>
          <div className="flex gap-6 text-background/40 text-xs">
            <a href="#" className="hover:text-primary transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
