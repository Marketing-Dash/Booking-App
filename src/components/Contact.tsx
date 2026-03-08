import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", budget: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,18%)] text-[hsl(0,0%,90%)] placeholder-[hsl(0,0%,40%)] focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="py-24 section-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-heading font-black text-center mb-16"
        >
          {t("contact.headline")}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-5"
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
              <span className="flex items-center px-4 bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,18%)] rounded-lg text-[hsl(0,0%,50%)] text-sm">+60</span>
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
            <button type="submit" className="btn-primary-gradient w-full text-lg !py-4">
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold mb-1">{t("contact.info.email")}</p>
                  <p className="text-[hsl(0,0%,50%)]">hello@brandspeedmarketing.com.my</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold mb-1">{t("contact.info.phone")}</p>
                  <p className="text-[hsl(0,0%,50%)]">+60 12-345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold mb-1">{t("contact.info.address")}</p>
                  <p className="text-[hsl(0,0%,50%)]">Selangor, Malaysia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-lg border border-[hsl(0,0%,18%)] flex items-center justify-center text-[hsl(0,0%,50%)] hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden h-48 bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,18%)] flex items-center justify-center">
              <span className="text-[hsl(0,0%,30%)]">Google Maps</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
