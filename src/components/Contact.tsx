import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { useSiteContent } from "@/hooks/useSiteContent";

const Contact = () => {
  const { t } = useLanguage();
  const { get } = useSiteContent();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground text-center mb-16"
        >
          {t("contact.headline")}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder={t("contact.name")}
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
              maxLength={100}
            />
            <input
              type="email"
              placeholder={t("contact.email")}
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
              maxLength={255}
            />
            <div className="flex gap-2">
              <span className="flex items-center px-4 bg-accent border border-border rounded-xl text-muted-foreground text-sm font-medium">+60</span>
              <input
                type="tel"
                placeholder={t("contact.phone")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                maxLength={15}
              />
            </div>
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className={inputClass}
              required
            >
              <option value="">{t("contact.service")}</option>
              <option value="social">{t("services.1.title")}</option>
              <option value="website">{t("services.2.title")}</option>
              <option value="app">{t("services.3.title")}</option>
              <option value="seo">{t("services.4.title")}</option>
              <option value="branding">{t("services.5.title")}</option>
              <option value="content">{t("services.6.title")}</option>
            </select>
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              className={inputClass}
              required
            >
              <option value="">{t("contact.budget")}</option>
              <option value="below1k">Below RM1,000</option>
              <option value="1k-5k">RM1,000 - RM5,000</option>
              <option value="5k-10k">RM5,000 - RM10,000</option>
              <option value="above10k">Above RM10,000</option>
            </select>
            <textarea
              placeholder={t("contact.message")}
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass}
              maxLength={1000}
            />
            <button type="submit" className="btn-primary w-full text-base">
              {t("contact.submit")}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: "contact.info.email", value: get("contact.info.email", "hello@brandspeed.com.my") },
                { icon: Phone, label: "contact.info.phone", value: get("contact.info.phone", "+601127340380") },
                { icon: MapPin, label: "contact.info.address", value: get("contact.info.address", "Kuala Lumpur, Malaysia") },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-0.5">{t(label)}</p>
                    <p className="text-muted-foreground text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden h-48 bg-accent border border-border flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Google Maps</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
