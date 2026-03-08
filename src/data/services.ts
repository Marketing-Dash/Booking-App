import { BarChart3, Code, Smartphone, Search, Palette, Camera, Briefcase } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: typeof BarChart3;
  titleKey: string;
  descKey: string;
  features: { en: string; bm: string; zh: string }[];
  pricing: {
    label: { en: string; bm: string; zh: string };
    price: string;
    features: { en: string; bm: string; zh: string }[];
  }[];
  portfolio: {
    title: { en: string; bm: string; zh: string };
    desc: { en: string; bm: string; zh: string };
    color: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "social-media-marketing",
    icon: BarChart3,
    titleKey: "services.1.title",
    descKey: "services.1.desc",
    features: [
      { en: "Facebook, Instagram & TikTok account management", bm: "Pengurusan akaun Facebook, Instagram & TikTok", zh: "Facebook、Instagram和TikTok账户管理" },
      { en: "Content calendar planning & scheduling", bm: "Perancangan & penjadualan kalendar kandungan", zh: "内容日历规划和排程" },
      { en: "Professional graphic design for posts & stories", bm: "Reka bentuk grafik profesional untuk siaran & cerita", zh: "帖子和故事的专业图形设计" },
      { en: "Paid advertising campaign management (Meta Ads, TikTok Ads)", bm: "Pengurusan kempen iklan berbayar (Meta Ads, TikTok Ads)", zh: "付费广告活动管理（Meta Ads、TikTok Ads）" },
      { en: "Community engagement & comment management", bm: "Penglibatan komuniti & pengurusan komen", zh: "社区互动和评论管理" },
      { en: "Monthly performance reports & analytics", bm: "Laporan prestasi & analitik bulanan", zh: "每月绩效报告和分析" },
      { en: "Competitor analysis & benchmarking", bm: "Analisis & penanda aras pesaing", zh: "竞争对手分析和基准测试" },
      { en: "Influencer collaboration coordination", bm: "Penyelarasan kerjasama influencer", zh: "网红合作协调" },
    ],
    pricing: [
      {
        label: { en: "Basic", bm: "Asas", zh: "基础" },
        price: "RM 1,500/mo",
        features: [
          { en: "2 platforms managed", bm: "2 platform diurus", zh: "管理2个平台" },
          { en: "12 posts per month", bm: "12 siaran sebulan", zh: "每月12篇帖子" },
          { en: "Basic graphic design", bm: "Reka bentuk grafik asas", zh: "基础图形设计" },
          { en: "Monthly report", bm: "Laporan bulanan", zh: "月度报告" },
        ],
      },
      {
        label: { en: "Professional", bm: "Profesional", zh: "专业" },
        price: "RM 3,000/mo",
        features: [
          { en: "3 platforms managed", bm: "3 platform diurus", zh: "管理3个平台" },
          { en: "20 posts per month", bm: "20 siaran sebulan", zh: "每月20篇帖子" },
          { en: "Paid ads management (up to RM 2k ad spend)", bm: "Pengurusan iklan berbayar (sehingga RM 2k belanja iklan)", zh: "付费广告管理（最高RM 2k广告支出）" },
          { en: "Community management", bm: "Pengurusan komuniti", zh: "社区管理" },
          { en: "Bi-weekly reports", bm: "Laporan dwi-mingguan", zh: "双周报告" },
        ],
      },
      {
        label: { en: "Enterprise", bm: "Perusahaan", zh: "企业" },
        price: "RM 5,500/mo",
        features: [
          { en: "All platforms managed", bm: "Semua platform diurus", zh: "管理所有平台" },
          { en: "30+ posts per month", bm: "30+ siaran sebulan", zh: "每月30+篇帖子" },
          { en: "Full ads management (unlimited budget)", bm: "Pengurusan iklan penuh (bajet tanpa had)", zh: "完整广告管理（无限预算）" },
          { en: "Influencer coordination", bm: "Penyelarasan influencer", zh: "网红协调" },
          { en: "Dedicated account manager", bm: "Pengurus akaun khusus", zh: "专属客户经理" },
          { en: "Weekly reports & strategy calls", bm: "Laporan mingguan & panggilan strategi", zh: "每周报告和策略通话" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "FashionKL Social Campaign", bm: "Kempen Sosial FashionKL", zh: "FashionKL社交活动" }, desc: { en: "Grew Instagram following by 15K in 3 months with targeted content strategy", bm: "Menambah pengikut Instagram sebanyak 15K dalam 3 bulan", zh: "3个月内Instagram粉丝增长15K" }, color: "from-orange-500 to-amber-500" },
      { title: { en: "SpiceRoute F&B TikTok", bm: "SpiceRoute F&B TikTok", zh: "SpiceRoute餐饮TikTok" }, desc: { en: "Viral food content reaching 2M+ views across campaigns", bm: "Kandungan makanan viral mencapai 2M+ tontonan", zh: "病毒式美食内容达到200万+浏览量" }, color: "from-rose-500 to-pink-500" },
    ],
  },
  {
    slug: "website-development",
    icon: Code,
    titleKey: "services.2.title",
    descKey: "services.2.desc",
    features: [
      { en: "Custom responsive website design & development", bm: "Reka bentuk & pembangunan laman web responsif tersuai", zh: "定制响应式网站设计与开发" },
      { en: "E-commerce store setup (WooCommerce, Shopify)", bm: "Persediaan kedai e-dagang (WooCommerce, Shopify)", zh: "电子商务商店搭建（WooCommerce、Shopify）" },
      { en: "Landing page design for marketing campaigns", bm: "Reka bentuk halaman pendaratan untuk kempen pemasaran", zh: "营销活动的着陆页设计" },
      { en: "CMS integration (WordPress, Webflow)", bm: "Integrasi CMS (WordPress, Webflow)", zh: "CMS集成（WordPress、Webflow）" },
      { en: "SSL certificate & security setup", bm: "Sijil SSL & persediaan keselamatan", zh: "SSL证书和安全设置" },
      { en: "Mobile-first optimization", bm: "Pengoptimuman utamakan mudah alih", zh: "移动优先优化" },
      { en: "Website hosting & maintenance packages", bm: "Pakej pengehosan & penyelenggaraan laman web", zh: "网站托管和维护套餐" },
      { en: "Domain registration & DNS management", bm: "Pendaftaran domain & pengurusan DNS", zh: "域名注册和DNS管理" },
    ],
    pricing: [
      {
        label: { en: "Landing Page", bm: "Halaman Pendaratan", zh: "着陆页" },
        price: "From RM 2,000",
        features: [
          { en: "Single page design", bm: "Reka bentuk satu halaman", zh: "单页设计" },
          { en: "Mobile responsive", bm: "Responsif mudah alih", zh: "移动响应" },
          { en: "Contact form integration", bm: "Integrasi borang hubungan", zh: "联系表单集成" },
          { en: "Basic SEO setup", bm: "Persediaan SEO asas", zh: "基础SEO设置" },
        ],
      },
      {
        label: { en: "Business Website", bm: "Laman Web Perniagaan", zh: "商业网站" },
        price: "From RM 5,000",
        features: [
          { en: "Up to 10 pages", bm: "Sehingga 10 halaman", zh: "最多10页" },
          { en: "CMS for easy content editing", bm: "CMS untuk penyuntingan kandungan mudah", zh: "CMS方便内容编辑" },
          { en: "Blog integration", bm: "Integrasi blog", zh: "博客集成" },
          { en: "Google Analytics setup", bm: "Persediaan Google Analytics", zh: "Google Analytics设置" },
          { en: "1 month free maintenance", bm: "1 bulan penyelenggaraan percuma", zh: "1个月免费维护" },
        ],
      },
      {
        label: { en: "E-Commerce Store", bm: "Kedai E-Dagang", zh: "电商商店" },
        price: "From RM 10,000",
        features: [
          { en: "Full e-commerce functionality", bm: "Fungsi e-dagang penuh", zh: "完整电商功能" },
          { en: "Payment gateway integration", bm: "Integrasi gerbang pembayaran", zh: "支付网关集成" },
          { en: "Inventory management system", bm: "Sistem pengurusan inventori", zh: "库存管理系统" },
          { en: "Order tracking & notifications", bm: "Penjejakan pesanan & pemberitahuan", zh: "订单跟踪和通知" },
          { en: "3 months free maintenance", bm: "3 bulan penyelenggaraan percuma", zh: "3个月免费维护" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "TechMalaysia Corporate Site", bm: "Laman Korporat TechMalaysia", zh: "TechMalaysia企业网站" }, desc: { en: "Modern corporate website with CMS, blog, and lead generation forms", bm: "Laman web korporat moden dengan CMS, blog, dan borang penjanaan petunjuk", zh: "带有CMS、博客和潜在客户生成表单的现代企业网站" }, color: "from-blue-500 to-cyan-500" },
      { title: { en: "StyleKL E-Commerce", bm: "E-Dagang StyleKL", zh: "StyleKL电商" }, desc: { en: "Fashion e-commerce store with 500+ products and integrated payment", bm: "Kedai e-dagang fesyen dengan 500+ produk dan pembayaran bersepadu", zh: "拥有500+产品和集成支付的时尚电商商店" }, color: "from-purple-500 to-violet-500" },
    ],
  },
  {
    slug: "app-development",
    icon: Smartphone,
    titleKey: "services.3.title",
    descKey: "services.3.desc",
    features: [
      { en: "iOS & Android mobile app development", bm: "Pembangunan aplikasi mudah alih iOS & Android", zh: "iOS和Android移动应用开发" },
      { en: "Cross-platform development (React Native, Flutter)", bm: "Pembangunan merentas platform (React Native, Flutter)", zh: "跨平台开发（React Native、Flutter）" },
      { en: "Progressive Web Apps (PWA)", bm: "Aplikasi Web Progresif (PWA)", zh: "渐进式网络应用（PWA）" },
      { en: "Backend API development & integration", bm: "Pembangunan & integrasi API backend", zh: "后端API开发与集成" },
      { en: "UI/UX design & prototyping", bm: "Reka bentuk & prototaip UI/UX", zh: "UI/UX设计和原型制作" },
      { en: "App Store & Play Store publishing", bm: "Penerbitan App Store & Play Store", zh: "App Store和Play Store发布" },
      { en: "Push notifications & analytics integration", bm: "Integrasi pemberitahuan tolak & analitik", zh: "推送通知和分析集成" },
      { en: "Ongoing maintenance & updates", bm: "Penyelenggaraan & kemas kini berterusan", zh: "持续维护和更新" },
    ],
    pricing: [
      {
        label: { en: "MVP / Starter App", bm: "Aplikasi MVP / Permulaan", zh: "MVP/入门应用" },
        price: "From RM 15,000",
        features: [
          { en: "Core features only", bm: "Ciri teras sahaja", zh: "仅核心功能" },
          { en: "Single platform (iOS or Android)", bm: "Satu platform (iOS atau Android)", zh: "单平台（iOS或Android）" },
          { en: "Basic UI design", bm: "Reka bentuk UI asas", zh: "基础UI设计" },
          { en: "App store submission", bm: "Penghantaran app store", zh: "应用商店提交" },
        ],
      },
      {
        label: { en: "Professional App", bm: "Aplikasi Profesional", zh: "专业应用" },
        price: "From RM 35,000",
        features: [
          { en: "Cross-platform (iOS + Android)", bm: "Merentas platform (iOS + Android)", zh: "跨平台（iOS + Android）" },
          { en: "Custom UI/UX design", bm: "Reka bentuk UI/UX tersuai", zh: "定制UI/UX设计" },
          { en: "Backend API development", bm: "Pembangunan API backend", zh: "后端API开发" },
          { en: "Push notifications", bm: "Pemberitahuan tolak", zh: "推送通知" },
          { en: "3 months support", bm: "3 bulan sokongan", zh: "3个月支持" },
        ],
      },
      {
        label: { en: "Enterprise App", bm: "Aplikasi Perusahaan", zh: "企业应用" },
        price: "From RM 80,000",
        features: [
          { en: "Full-featured cross-platform app", bm: "Aplikasi merentas platform berfitur penuh", zh: "全功能跨平台应用" },
          { en: "Advanced integrations (payment, maps, AI)", bm: "Integrasi lanjutan (pembayaran, peta, AI)", zh: "高级集成（支付、地图、AI）" },
          { en: "Admin dashboard", bm: "Papan pemuka pentadbir", zh: "管理员仪表板" },
          { en: "Scalable cloud infrastructure", bm: "Infrastruktur awan berskala", zh: "可扩展云基础设施" },
          { en: "6 months support & updates", bm: "6 bulan sokongan & kemas kini", zh: "6个月支持和更新" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "FoodKL Delivery App", bm: "Aplikasi Penghantaran FoodKL", zh: "FoodKL配送应用" }, desc: { en: "Food delivery app with real-time tracking, 50K+ downloads", bm: "Aplikasi penghantaran makanan dengan penjejakan masa nyata, 50K+ muat turun", zh: "实时追踪的食品配送应用，50K+下载" }, color: "from-green-500 to-emerald-500" },
      { title: { en: "HealthPlus Wellness App", bm: "Aplikasi Kesihatan HealthPlus", zh: "HealthPlus健康应用" }, desc: { en: "Health & fitness app with appointment booking and telemedicine", bm: "Aplikasi kesihatan & kecergasan dengan tempahan temujanji dan telemedisin", zh: "带有预约和远程医疗的健康健身应用" }, color: "from-teal-500 to-cyan-500" },
    ],
  },
  {
    slug: "seo-google-ads",
    icon: Search,
    titleKey: "services.4.title",
    descKey: "services.4.desc",
    features: [
      { en: "Technical SEO audit & optimization", bm: "Audit & pengoptimuman SEO teknikal", zh: "技术SEO审计和优化" },
      { en: "Keyword research & content strategy", bm: "Penyelidikan kata kunci & strategi kandungan", zh: "关键词研究和内容策略" },
      { en: "On-page & off-page SEO optimization", bm: "Pengoptimuman SEO pada halaman & luar halaman", zh: "页面内和页面外SEO优化" },
      { en: "Google Ads campaign setup & management", bm: "Persediaan & pengurusan kempen Google Ads", zh: "Google Ads活动设置和管理" },
      { en: "Local SEO for Malaysian businesses (Google My Business)", bm: "SEO tempatan untuk perniagaan Malaysia (Google My Business)", zh: "马来西亚企业本地SEO（Google My Business）" },
      { en: "Link building & domain authority improvement", bm: "Pembinaan pautan & peningkatan autoriti domain", zh: "链接建设和域名权威提升" },
      { en: "Monthly ranking reports & competitor tracking", bm: "Laporan kedudukan bulanan & penjejakan pesaing", zh: "每月排名报告和竞争对手跟踪" },
    ],
    pricing: [
      {
        label: { en: "Local SEO", bm: "SEO Tempatan", zh: "本地SEO" },
        price: "RM 1,200/mo",
        features: [
          { en: "Google My Business optimization", bm: "Pengoptimuman Google My Business", zh: "Google My Business优化" },
          { en: "5 target keywords", bm: "5 kata kunci sasaran", zh: "5个目标关键词" },
          { en: "Monthly ranking report", bm: "Laporan kedudukan bulanan", zh: "月度排名报告" },
          { en: "Basic on-page SEO", bm: "SEO pada halaman asas", zh: "基础页面SEO" },
        ],
      },
      {
        label: { en: "SEO + Google Ads", bm: "SEO + Google Ads", zh: "SEO + Google广告" },
        price: "RM 3,500/mo",
        features: [
          { en: "Full SEO optimization", bm: "Pengoptimuman SEO penuh", zh: "完整SEO优化" },
          { en: "15 target keywords", bm: "15 kata kunci sasaran", zh: "15个目标关键词" },
          { en: "Google Ads management (up to RM 3k spend)", bm: "Pengurusan Google Ads (sehingga RM 3k belanja)", zh: "Google Ads管理（最高RM 3k支出）" },
          { en: "Bi-weekly reports", bm: "Laporan dwi-mingguan", zh: "双周报告" },
          { en: "Content recommendations", bm: "Cadangan kandungan", zh: "内容建议" },
        ],
      },
      {
        label: { en: "Full Search Domination", bm: "Penguasaan Carian Penuh", zh: "全面搜索主导" },
        price: "RM 7,000/mo",
        features: [
          { en: "Aggressive SEO strategy", bm: "Strategi SEO agresif", zh: "积极的SEO策略" },
          { en: "Unlimited keywords", bm: "Kata kunci tanpa had", zh: "无限关键词" },
          { en: "Google Ads (unlimited budget)", bm: "Google Ads (bajet tanpa had)", zh: "Google Ads（无限预算）" },
          { en: "Link building campaign", bm: "Kempen pembinaan pautan", zh: "链接建设活动" },
          { en: "Dedicated SEO specialist", bm: "Pakar SEO khusus", zh: "专属SEO专家" },
          { en: "Weekly strategy calls", bm: "Panggilan strategi mingguan", zh: "每周策略通话" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "PropertyHub SEO Campaign", bm: "Kempen SEO PropertyHub", zh: "PropertyHub SEO活动" }, desc: { en: "Achieved page 1 ranking for 25+ competitive keywords in 6 months", bm: "Mencapai kedudukan halaman 1 untuk 25+ kata kunci kompetitif dalam 6 bulan", zh: "6个月内25+竞争关键词排名第一页" }, color: "from-amber-500 to-yellow-500" },
    ],
  },
  {
    slug: "branding-design",
    icon: Palette,
    titleKey: "services.5.title",
    descKey: "services.5.desc",
    features: [
      { en: "Logo design & brand identity creation", bm: "Reka bentuk logo & penciptaan identiti jenama", zh: "标志设计和品牌标识创建" },
      { en: "Brand guidelines & style guide development", bm: "Pembangunan garis panduan jenama & panduan gaya", zh: "品牌指南和风格指南开发" },
      { en: "Business card, letterhead & stationery design", bm: "Reka bentuk kad perniagaan, kepala surat & alat tulis", zh: "名片、信笺和文具设计" },
      { en: "Packaging design", bm: "Reka bentuk pembungkusan", zh: "包装设计" },
      { en: "Brand naming & tagline creation", bm: "Penamaan jenama & penciptaan slogan", zh: "品牌命名和口号创作" },
      { en: "Social media branding kit", bm: "Kit penjenamaan media sosial", zh: "社交媒体品牌工具包" },
      { en: "Brand audit & refresh services", bm: "Perkhidmatan audit & penyegaran jenama", zh: "品牌审计和刷新服务" },
    ],
    pricing: [
      {
        label: { en: "Logo Package", bm: "Pakej Logo", zh: "Logo套餐" },
        price: "From RM 1,500",
        features: [
          { en: "3 logo concepts", bm: "3 konsep logo", zh: "3个Logo概念" },
          { en: "3 revision rounds", bm: "3 pusingan semakan", zh: "3轮修改" },
          { en: "All file formats", bm: "Semua format fail", zh: "所有文件格式" },
          { en: "Basic brand colors", bm: "Warna jenama asas", zh: "基础品牌颜色" },
        ],
      },
      {
        label: { en: "Brand Identity", bm: "Identiti Jenama", zh: "品牌标识" },
        price: "From RM 5,000",
        features: [
          { en: "Logo design + brand guidelines", bm: "Reka bentuk logo + garis panduan jenama", zh: "Logo设计 + 品牌指南" },
          { en: "Business card & stationery", bm: "Kad perniagaan & alat tulis", zh: "名片和文具" },
          { en: "Social media branding kit", bm: "Kit penjenamaan media sosial", zh: "社交媒体品牌工具包" },
          { en: "Typography & color palette", bm: "Tipografi & palet warna", zh: "字体和色彩方案" },
        ],
      },
      {
        label: { en: "Full Brand Suite", bm: "Pakej Jenama Penuh", zh: "完整品牌套件" },
        price: "From RM 12,000",
        features: [
          { en: "Complete brand identity", bm: "Identiti jenama lengkap", zh: "完整品牌标识" },
          { en: "Packaging design", bm: "Reka bentuk pembungkusan", zh: "包装设计" },
          { en: "Signage & environmental design", bm: "Papan tanda & reka bentuk persekitaran", zh: "标牌和环境设计" },
          { en: "Brand strategy document", bm: "Dokumen strategi jenama", zh: "品牌策略文档" },
          { en: "All marketing collateral", bm: "Semua cagaran pemasaran", zh: "所有营销材料" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "MYBatik Brand Identity", bm: "Identiti Jenama MYBatik", zh: "MYBatik品牌标识" }, desc: { en: "Complete brand identity for Malaysian batik fashion label", bm: "Identiti jenama lengkap untuk label fesyen batik Malaysia", zh: "马来西亚蜡染时装品牌的完整品牌标识" }, color: "from-fuchsia-500 to-pink-500" },
      { title: { en: "KopiBrew Café Branding", bm: "Penjenamaan Kafe KopiBrew", zh: "KopiBrew咖啡馆品牌" }, desc: { en: "Full branding package including logo, packaging and store design", bm: "Pakej penjenamaan penuh termasuk logo, pembungkusan dan reka bentuk kedai", zh: "包括Logo、包装和商店设计的完整品牌包" }, color: "from-amber-600 to-orange-500" },
    ],
  },
  {
    slug: "content-creation",
    icon: Camera,
    titleKey: "services.6.title",
    descKey: "services.6.desc",
    features: [
      { en: "Professional copywriting (English, BM, Chinese)", bm: "Penulisan salinan profesional (Bahasa Inggeris, BM, Cina)", zh: "专业文案撰写（英语、马来语、中文）" },
      { en: "Product & food photography", bm: "Fotografi produk & makanan", zh: "产品和食品摄影" },
      { en: "Video production & editing (Reels, TikTok, YouTube)", bm: "Penerbitan & penyuntingan video (Reels, TikTok, YouTube)", zh: "视频制作和编辑（Reels、TikTok、YouTube）" },
      { en: "Blog & article writing for SEO", bm: "Penulisan blog & artikel untuk SEO", zh: "SEO博客和文章撰写" },
      { en: "Email marketing content & newsletters", bm: "Kandungan pemasaran e-mel & surat berita", zh: "电子邮件营销内容和新闻通讯" },
      { en: "Script writing for ads & brand videos", bm: "Penulisan skrip untuk iklan & video jenama", zh: "广告和品牌视频脚本撰写" },
      { en: "Content strategy & editorial planning", bm: "Strategi kandungan & perancangan editorial", zh: "内容策略和编辑规划" },
    ],
    pricing: [
      {
        label: { en: "Content Starter", bm: "Kandungan Permulaan", zh: "内容入门" },
        price: "RM 1,800/mo",
        features: [
          { en: "8 social media posts (copy + design)", bm: "8 siaran media sosial (salinan + reka bentuk)", zh: "8篇社交媒体帖子（文案+设计）" },
          { en: "2 blog articles", bm: "2 artikel blog", zh: "2篇博客文章" },
          { en: "Basic photography (1 session)", bm: "Fotografi asas (1 sesi)", zh: "基础摄影（1次）" },
        ],
      },
      {
        label: { en: "Content Pro", bm: "Kandungan Pro", zh: "内容专业" },
        price: "RM 4,000/mo",
        features: [
          { en: "20 social media posts", bm: "20 siaran media sosial", zh: "20篇社交媒体帖子" },
          { en: "4 blog articles", bm: "4 artikel blog", zh: "4篇博客文章" },
          { en: "2 short-form videos (Reels/TikTok)", bm: "2 video bentuk pendek (Reels/TikTok)", zh: "2个短视频（Reels/TikTok）" },
          { en: "Photography (2 sessions)", bm: "Fotografi (2 sesi)", zh: "摄影（2次）" },
          { en: "Email newsletter content", bm: "Kandungan surat berita e-mel", zh: "电子邮件通讯内容" },
        ],
      },
      {
        label: { en: "Full Content Suite", bm: "Pakej Kandungan Penuh", zh: "完整内容套件" },
        price: "RM 8,000/mo",
        features: [
          { en: "Unlimited social media content", bm: "Kandungan media sosial tanpa had", zh: "无限社交媒体内容" },
          { en: "8 blog articles", bm: "8 artikel blog", zh: "8篇博客文章" },
          { en: "4 professional videos", bm: "4 video profesional", zh: "4个专业视频" },
          { en: "Full photography coverage", bm: "Liputan fotografi penuh", zh: "完整摄影覆盖" },
          { en: "Content strategy & calendar", bm: "Strategi kandungan & kalendar", zh: "内容策略和日历" },
          { en: "Dedicated content manager", bm: "Pengurus kandungan khusus", zh: "专属内容经理" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "MakanBest Food Content", bm: "Kandungan Makanan MakanBest", zh: "MakanBest美食内容" }, desc: { en: "Mouth-watering food photography and viral video content for restaurant chain", bm: "Fotografi makanan dan kandungan video viral untuk rangkaian restoran", zh: "令人垂涎的美食摄影和餐厅连锁病毒视频内容" }, color: "from-red-500 to-orange-500" },
    ],
  },
  {
    slug: "business-solution",
    icon: Briefcase,
    titleKey: "services.7.title",
    descKey: "services.7.desc",
    features: [
      { en: "Social media management across FB, IG, TikTok, GMB & YouTube", bm: "Pengurusan media sosial merentasi FB, IG, TikTok, GMB & YouTube", zh: "跨FB、IG、TikTok、GMB和YouTube的社交媒体管理" },
      { en: "Professional post & reel content creation", bm: "Penciptaan kandungan siaran & reel profesional", zh: "专业帖子和短视频内容创作" },
      { en: "Portal access for real-time project tracking", bm: "Akses portal untuk penjejakan projek masa nyata", zh: "实时项目跟踪的门户访问" },
      { en: "Weekly, bi-weekly & monthly performance reports", bm: "Laporan prestasi mingguan, dwi-mingguan & bulanan", zh: "每周、双周和月度绩效报告" },
      { en: "Staff attendance web app with location tracking", bm: "Aplikasi web kehadiran kakitangan dengan penjejakan lokasi", zh: "带位置追踪的员工考勤网络应用" },
      { en: "Custom app or web development & maintenance", bm: "Pembangunan & penyelenggaraan aplikasi atau web tersuai", zh: "定制应用或网站开发与维护" },
      { en: "Extra add-on tasks (design, editing & more)", bm: "Tugas tambahan (reka bentuk, penyuntingan & lain-lain)", zh: "额外附加任务（设计、编辑等）" },
      { en: "Monthly strategy meetings", bm: "Mesyuarat strategi bulanan", zh: "每月策略会议" },
    ],
    pricing: [
      {
        label: { en: "Essential", bm: "Asas", zh: "基础" },
        price: "RM 500/mo",
        features: [
          { en: "8 Posts", bm: "8 Siaran", zh: "8篇帖子" },
          { en: "4 Reels", bm: "4 Reels", zh: "4个短视频" },
          { en: "FB, IG, TikTok, GMB", bm: "FB, IG, TikTok, GMB", zh: "FB、IG、TikTok、GMB" },
          { en: "Portal Access", bm: "Akses Portal", zh: "门户访问" },
          { en: "Weekly, 2 Weeks, 1 Month Reports", bm: "Laporan Mingguan, 2 Minggu, 1 Bulan", zh: "每周、两周、一月报告" },
          { en: "1 Extra Add-on Task", bm: "1 Tugas Tambahan", zh: "1项额外任务" },
          { en: "Monthly 2 Meetings", bm: "2 Mesyuarat Bulanan", zh: "每月2次会议" },
        ],
      },
      {
        label: { en: "Growth", bm: "Pertumbuhan", zh: "成长" },
        price: "RM 800/mo",
        features: [
          { en: "10 Posts", bm: "10 Siaran", zh: "10篇帖子" },
          { en: "5 Reels", bm: "5 Reels", zh: "5个短视频" },
          { en: "FB, IG, TikTok, GMB, YouTube", bm: "FB, IG, TikTok, GMB, YouTube", zh: "FB、IG、TikTok、GMB、YouTube" },
          { en: "Portal Access", bm: "Akses Portal", zh: "门户访问" },
          { en: "Weekly, 2 Weeks, 1 Month Reports", bm: "Laporan Mingguan, 2 Minggu, 1 Bulan", zh: "每周、两周、一月报告" },
          { en: "2 Extra Add-on Tasks", bm: "2 Tugas Tambahan", zh: "2项额外任务" },
          { en: "Staff Attendance Web App with Real-time & Location Tracking + Reporting", bm: "Aplikasi Web Kehadiran Kakitangan dengan Penjejakan Masa Nyata & Lokasi + Laporan", zh: "带实时和位置跟踪+报告的员工考勤网络应用" },
          { en: "Monthly 2 Meetings", bm: "2 Mesyuarat Bulanan", zh: "每月2次会议" },
        ],
      },
      {
        label: { en: "Premium", bm: "Premium", zh: "高级" },
        price: "RM 1,499/mo",
        features: [
          { en: "10 Posts", bm: "10 Siaran", zh: "10篇帖子" },
          { en: "5 Reels", bm: "5 Reels", zh: "5个短视频" },
          { en: "FB, IG, TikTok, GMB, YouTube", bm: "FB, IG, TikTok, GMB, YouTube", zh: "FB、IG、TikTok、GMB、YouTube" },
          { en: "Portal Access", bm: "Akses Portal", zh: "门户访问" },
          { en: "Weekly, 2 Weeks, 1 Month Reports", bm: "Laporan Mingguan, 2 Minggu, 1 Bulan", zh: "每周、两周、一月报告" },
          { en: "3 Extra Add-on Tasks", bm: "3 Tugas Tambahan", zh: "3项额外任务" },
          { en: "Staff Attendance Web App with Real-time & Location Tracking + Reporting", bm: "Aplikasi Web Kehadiran Kakitangan dengan Penjejakan Masa Nyata & Lokasi + Laporan", zh: "带实时和位置跟踪+报告的员工考勤网络应用" },
          { en: "Custom App or Web Development & Maintenance", bm: "Pembangunan & Penyelenggaraan Aplikasi atau Web Tersuai", zh: "定制应用或网站开发与维护" },
          { en: "Monthly 2 Meetings", bm: "2 Mesyuarat Bulanan", zh: "每月2次会议" },
        ],
      },
    ],
    portfolio: [
      { title: { en: "RetailPro Business Suite", bm: "Suite Perniagaan RetailPro", zh: "RetailPro商业套件" }, desc: { en: "Complete business solution with attendance tracking, social media management & custom app", bm: "Penyelesaian perniagaan lengkap dengan penjejakan kehadiran, pengurusan media sosial & aplikasi tersuai", zh: "包括考勤追踪、社交媒体管理和自定义应用的完整商业解决方案" }, color: "from-indigo-500 to-blue-500" },
    ],
  },
];
