import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const Blog = () => {
  const { lang } = useLanguage();
  const { data: posts, isLoading } = useBlogPosts();

  const getField = (post: any, field: string) => {
    const key = `${field}_${lang}`;
    return post[key] || post[`${field}_en`] || "";
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString(
      lang === "bm" ? "ms-MY" : lang === "zh" ? "zh-CN" : "en-MY",
      { year: "numeric", month: "long", day: "numeric" }
    );
  };

  const readTime = (content: string) => {
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <>
      <SEO
        title="Blog | Digital Marketing Tips Malaysia | BrandSpeed Marketing"
        description="Read the latest digital marketing tips, social media strategies, and SEO guides for Malaysian businesses. Expert insights from BrandSpeed Marketing."
        keywords="digital marketing blog Malaysia, social media tips, SEO guide Malaysia, marketing strategy"
        path="/blog"
      />
      <Navbar />
      <main className="pt-[72px]">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
                {lang === "bm" ? "BLOG" : lang === "zh" ? "博客" : "BLOG"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-foreground mb-4">
                {lang === "bm"
                  ? "Tips & Panduan Pemasaran Digital"
                  : lang === "zh"
                  ? "数字营销技巧与指南"
                  : "Digital Marketing Tips & Guides"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {lang === "bm"
                  ? "Panduan pakar untuk membantu perniagaan Malaysia berkembang secara digital."
                  : lang === "zh"
                  ? "帮助马来西亚企业数字化发展的专家指南。"
                  : "Expert insights to help Malaysian businesses grow digitally."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl border border-border overflow-hidden animate-pulse">
                    <div className="h-48 bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted rounded w-1/3" />
                      <div className="h-6 bg-muted rounded w-full" />
                      <div className="h-4 bg-muted rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card"
                    >
                      <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                        {post.cover_image_url ? (
                          <img
                            src={post.cover_image_url}
                            alt={getField(post, "title")}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="text-6xl font-heading font-black text-primary/10">BS</div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.published_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {readTime(getField(post, "content"))} min read
                          </span>
                        </div>
                        <h2 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {getField(post, "title")}
                        </h2>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {getField(post, "excerpt")}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                          {lang === "bm" ? "Baca Lagi" : lang === "zh" ? "阅读更多" : "Read More"}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {lang === "bm" ? "Tiada artikel lagi." : lang === "zh" ? "暂无文章。" : "No articles yet. Check back soon!"}
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Blog;
