import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useBlogPost } from "@/hooks/useBlogPosts";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEO from "@/components/SEO";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  const getField = (field: string) => {
    if (!post) return "";
    const key = `${field}_${lang}` as keyof typeof post;
    return (post[key] as string) || (post[`${field}_en` as keyof typeof post] as string) || "";
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString(
      lang === "bm" ? "ms-MY" : lang === "zh" ? "zh-CN" : "en-MY",
      { year: "numeric", month: "long", day: "numeric" }
    );
  };

  const readTime = (content: string) => Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

  // Simple markdown-to-HTML renderer
  const renderMarkdown = (md: string) => {
    return md
      .split("\n\n")
      .map((block, i) => {
        if (block.startsWith("### ")) {
          return <h3 key={i} className="text-xl font-heading font-bold text-foreground mt-8 mb-3">{block.slice(4)}</h3>;
        }
        if (block.startsWith("## ")) {
          return <h2 key={i} className="text-2xl font-heading font-bold text-foreground mt-10 mb-4">{block.slice(3)}</h2>;
        }
        if (block.startsWith("- ")) {
          const items = block.split("\n").filter(l => l.startsWith("- "));
          return (
            <ul key={i} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: item.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
              ))}
            </ul>
          );
        }
        // Regular paragraph
        return (
          <p
            key={i}
            className="text-muted-foreground leading-relaxed mb-4"
            dangerouslySetInnerHTML={{
              __html: block.replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>"),
            }}
          />
        );
      });
  };

  if (isLoading) {
    return (
      <>
        <Navbar />
        <main className="pt-[72px] min-h-screen">
          <div className="container mx-auto px-4 py-16 max-w-3xl animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Navbar />
        <main className="pt-[72px] min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
              {lang === "bm" ? "Artikel Tidak Dijumpai" : lang === "zh" ? "文章未找到" : "Article Not Found"}
            </h1>
            <Link to="/blog" className="btn-primary inline-block">
              {lang === "bm" ? "Kembali ke Blog" : lang === "zh" ? "返回博客" : "Back to Blog"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${getField("title")} | BrandSpeed Marketing`}
        description={getField("meta_description") || getField("excerpt")}
        keywords={post.meta_keywords}
        path={`/blog/${slug}`}
      />
      <Navbar />
      <main className="pt-[72px]">
        <article>
          {/* Header */}
          <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-background">
            <div className="container mx-auto px-4 max-w-3xl">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium text-sm mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                {lang === "bm" ? "Kembali ke Blog" : lang === "zh" ? "返回博客" : "Back to Blog"}
              </Link>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.published_at)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {readTime(getField("content"))} min read
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground mb-4 leading-tight">
                  {getField("title")}
                </h1>
                <p className="text-lg text-muted-foreground">{getField("excerpt")}</p>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Content */}
          <section className="section-padding">
            <div className="container mx-auto px-4 max-w-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose-custom"
              >
                {renderMarkdown(getField("content"))}
              </motion.div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding section-alt-bg">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-black text-foreground mb-4">
                  {lang === "bm"
                    ? "Perlukan Bantuan Pemasaran Digital?"
                    : lang === "zh"
                    ? "需要数字营销帮助？"
                    : "Need Help With Digital Marketing?"}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {lang === "bm"
                    ? "Hubungi kami untuk konsultasi percuma."
                    : lang === "zh"
                    ? "联系我们获取免费咨询。"
                    : "Contact us for a free consultation and let's grow your business together."}
                </p>
                <Link to="/#contact" className="btn-primary inline-block">
                  {lang === "bm" ? "Hubungi Kami" : lang === "zh" ? "联系我们" : "Get Free Consultation"}
                </Link>
              </motion.div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogPost;
