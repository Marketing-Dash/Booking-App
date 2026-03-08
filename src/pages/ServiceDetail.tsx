import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";
import { servicesData } from "@/data/services";
import { ArrowLeft, Check, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
            <Link to="/" className="btn-primary inline-block">Back to Home</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;
  const tl = (obj: Record<Language, string>) => obj[lang];

  const serviceMetaMap: Record<string, { title: string; description: string; keywords: string }> = {
    "social-media-marketing": {
      title: "Social Media Marketing Malaysia | BrandSpeed Marketing",
      description: "Expert social media marketing services in Malaysia. Facebook, Instagram & TikTok management, content creation and paid ads to grow your brand online.",
      keywords: "social media marketing Malaysia, Facebook marketing, Instagram marketing, TikTok marketing, social media agency",
    },
    "website-development": {
      title: "Website Development Malaysia | BrandSpeed Marketing",
      description: "Professional website development services in Malaysia. Custom responsive websites, e-commerce, WordPress and modern web apps for Malaysian businesses.",
      keywords: "website development Malaysia, web design Malaysia, e-commerce website, WordPress development, responsive website",
    },
    "app-development": {
      title: "App Development Malaysia | BrandSpeed Marketing",
      description: "Mobile and web app development in Malaysia. iOS, Android and cross-platform apps built with modern technology for startups and enterprises.",
      keywords: "app development Malaysia, mobile app development, iOS app, Android app, cross-platform app",
    },
    "seo-google-ads": {
      title: "SEO & Google Ads Malaysia | BrandSpeed Marketing",
      description: "SEO and Google Ads management in Malaysia. Boost your search rankings and drive targeted traffic with our proven digital marketing strategies.",
      keywords: "SEO Malaysia, Google Ads Malaysia, search engine optimization, PPC advertising, SEM Malaysia",
    },
    "branding-design": {
      title: "Branding & Design Malaysia | BrandSpeed Marketing",
      description: "Professional branding and graphic design services in Malaysia. Logo design, brand identity, packaging and marketing collateral for Malaysian businesses.",
      keywords: "branding Malaysia, logo design, graphic design, brand identity, packaging design Malaysia",
    },
    "content-creation": {
      title: "Content Creation Malaysia | BrandSpeed Marketing",
      description: "Professional content creation services in Malaysia. Photography, videography, copywriting and visual content for social media and marketing campaigns.",
      keywords: "content creation Malaysia, photography, videography, copywriting, visual content marketing",
    },
  };

  const meta = serviceMetaMap[slug || ""] || {
    title: `${t(service.titleKey)} | BrandSpeed Marketing`,
    description: t(service.descKey),
    keywords: "digital marketing Malaysia, BrandSpeed Marketing",
  };

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        path={`/services/${slug}`}
      />
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === "bm" ? "Kembali ke Perkhidmatan" : lang === "zh" ? "返回服务" : "Back to Services"}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-4">
                {t(service.titleKey)}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                {lang === "bm" ? "APA YANG DISERTAKAN" : lang === "zh" ? "包含内容" : "WHAT'S INCLUDED"}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">
                {lang === "bm" ? "Ciri & Faedah" : lang === "zh" ? "功能与优势" : "Features & Benefits"}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {service.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-[15px]">{tl(feature)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding section-alt-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                {lang === "bm" ? "HARGA" : lang === "zh" ? "价格" : "PRICING"}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">
                {lang === "bm" ? "Pilih Pakej Anda" : lang === "zh" ? "选择您的套餐" : "Choose Your Package"}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.pricing.map((tier, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                    i === 1
                      ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20 ring-2 ring-primary"
                      : "bg-card border border-border hover:shadow-xl hover:shadow-primary/5"
                  }`}
                >
                  <h3 className={`text-lg font-heading font-bold mb-2 ${i === 1 ? "text-primary-foreground" : "text-foreground"}`}>
                    {tl(tier.label)}
                  </h3>
                  <p className={`text-3xl font-heading font-black mb-6 ${i === 1 ? "text-primary-foreground" : "text-primary"}`}>
                    {tier.price}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${i === 1 ? "text-primary-foreground/80" : "text-primary"}`} />
                        <span className={`text-sm ${i === 1 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                          {tl(f)}
                          {f.starred && <span className="text-primary font-bold ml-0.5">*</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/#contact"
                    className={`block text-center py-3 rounded-full font-heading font-bold text-sm transition-all ${
                      i === 1
                        ? "bg-primary-foreground text-primary hover:opacity-90"
                        : "btn-outline"
                    }`}
                  >
                    {t("pricing.cta")}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Footnote for starred features */}
            {service.pricing.some((tier) => tier.features.some((f) => f.starred)) && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center text-muted-foreground text-xs mt-8 max-w-2xl mx-auto"
              >
                <span className="text-primary font-bold">*</span> Additional charges apply for domain registration, hosting, and other third-party services.
              </motion.p>
            )}
          </div>
        </section>

        {/* Portfolio Examples */}
        {service.portfolio.length > 0 && (
          <section className="section-padding">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                  {lang === "bm" ? "HASIL KERJA" : lang === "zh" ? "案例展示" : "CASE STUDIES"}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">
                  {lang === "bm" ? "Projek Berkaitan" : lang === "zh" ? "相关项目" : "Related Projects"}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {service.portfolio.map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <Icon className="w-16 h-16 text-white/30" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {tl(project.title)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tl(project.desc)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding section-alt-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
                {lang === "bm" ? "Bersedia Untuk Bermula?" : lang === "zh" ? "准备开始了吗？" : "Ready To Get Started?"}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {lang === "bm"
                  ? "Hubungi kami hari ini untuk konsultasi percuma dan lihat bagaimana kami boleh membantu perniagaan anda."
                  : lang === "zh"
                  ? "立即联系我们获取免费咨询，了解我们如何帮助您的业务发展。"
                  : "Contact us today for a free consultation and see how we can help grow your business."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-bold text-primary-foreground bg-green-600 hover:bg-green-700 transition-all hover:scale-[1.03]"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a href="/#contact" className="btn-primary inline-flex items-center gap-2">
                  {t("nav.cta")}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServiceDetail;
