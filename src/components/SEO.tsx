import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/i18n/LanguageContext";

const SITE_URL = "https://brandspeedweb.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  ogType?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = "BrandSpeed Marketing | Digital Marketing Agency Malaysia",
  description = "BrandSpeed Marketing is a full-service digital marketing agency in Malaysia. We build websites, apps, social media campaigns & SEO strategies for Malaysian businesses.",
  keywords = "digital marketing Malaysia, social media marketing, website development Malaysia, SEO Malaysia, branding agency, app development, content creation, Google Ads Malaysia",
  path = "/",
  ogType = "website",
  noIndex = false,
}: SEOProps) => {
  const { lang } = useLanguage();
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang="en-MY" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="BrandSpeed Marketing" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ms" href={canonicalUrl} />
      <link rel="alternate" hrefLang="zh" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
