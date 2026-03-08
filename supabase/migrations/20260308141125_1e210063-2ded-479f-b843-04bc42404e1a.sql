
-- Clear existing empty/placeholder data
DELETE FROM services;
DELETE FROM portfolio_items;
DELETE FROM testimonials;
DELETE FROM site_content;

-- ============ SEED SERVICES ============
INSERT INTO services (slug, title_en, title_bm, title_zh, description_en, description_bm, description_zh, icon, features, pricing, portfolio, sort_order, is_active) VALUES
(
  'social-media-marketing',
  'Social Media Marketing',
  'Pemasaran Media Sosial',
  '社交媒体营销',
  'Facebook, Instagram, TikTok management, content creation & paid ads',
  'Pengurusan Facebook, Instagram, TikTok, penciptaan kandungan & iklan berbayar',
  'Facebook、Instagram、TikTok管理、内容创作和付费广告',
  'BarChart3',
  '[{"en":"Facebook, Instagram & TikTok account management","bm":"Pengurusan akaun Facebook, Instagram & TikTok","zh":"Facebook、Instagram和TikTok账户管理"},{"en":"Content calendar planning & scheduling","bm":"Perancangan & penjadualan kalendar kandungan","zh":"内容日历规划和排程"},{"en":"Professional graphic design for posts & stories","bm":"Reka bentuk grafik profesional untuk siaran & cerita","zh":"帖子和故事的专业图形设计"},{"en":"Paid advertising campaign management (Meta Ads, TikTok Ads)","bm":"Pengurusan kempen iklan berbayar (Meta Ads, TikTok Ads)","zh":"付费广告活动管理（Meta Ads、TikTok Ads）"},{"en":"Community engagement & comment management","bm":"Penglibatan komuniti & pengurusan komen","zh":"社区互动和评论管理"},{"en":"Monthly performance reports & analytics","bm":"Laporan prestasi & analitik bulanan","zh":"每月绩效报告和分析"},{"en":"Competitor analysis & benchmarking","bm":"Analisis & penanda aras pesaing","zh":"竞争对手分析和基准测试"},{"en":"Influencer collaboration coordination","bm":"Penyelarasan kerjasama influencer","zh":"网红合作协调"}]'::jsonb,
  '[{"name_en":"Basic","name_bm":"Asas","name_zh":"基础","price":"RM 1,500/mo","description_en":"2 platforms, 12 posts/mo, basic design, monthly report","description_bm":"2 platform, 12 siaran/bulan, reka bentuk asas, laporan bulanan","description_zh":"2个平台，每月12篇帖子，基础设计，月度报告"},{"name_en":"Professional","name_bm":"Profesional","name_zh":"专业","price":"RM 3,000/mo","description_en":"3 platforms, 20 posts/mo, paid ads (up to RM2k), community management","description_bm":"3 platform, 20 siaran/bulan, iklan berbayar (sehingga RM2k), pengurusan komuniti","description_zh":"3个平台，每月20篇帖子，付费广告（最高RM2k），社区管理"},{"name_en":"Enterprise","name_bm":"Perusahaan","name_zh":"企业","price":"RM 5,500/mo","description_en":"All platforms, 30+ posts/mo, unlimited ads, influencer coordination, dedicated manager","description_bm":"Semua platform, 30+ siaran/bulan, iklan tanpa had, penyelarasan influencer, pengurus khusus","description_zh":"所有平台，每月30+篇帖子，无限广告，网红协调，专属经理"}]'::jsonb,
  '[]'::jsonb,
  0, true
),
(
  'website-development',
  'Website Development',
  'Pembangunan Laman Web',
  '网站开发',
  'Professional business websites, landing pages & e-commerce stores',
  'Laman web perniagaan profesional, halaman pendaratan & kedai e-dagang',
  '专业商业网站、着陆页和电子商务商店',
  'Code',
  '[{"en":"Custom responsive website design & development","bm":"Reka bentuk & pembangunan laman web responsif tersuai","zh":"定制响应式网站设计与开发"},{"en":"E-commerce store setup (WooCommerce, Shopify)","bm":"Persediaan kedai e-dagang (WooCommerce, Shopify)","zh":"电子商务商店搭建（WooCommerce、Shopify）"},{"en":"Landing page design for marketing campaigns","bm":"Reka bentuk halaman pendaratan untuk kempen pemasaran","zh":"营销活动的着陆页设计"},{"en":"CMS integration (WordPress, Webflow)","bm":"Integrasi CMS (WordPress, Webflow)","zh":"CMS集成（WordPress、Webflow）"},{"en":"SSL certificate & security setup","bm":"Sijil SSL & persediaan keselamatan","zh":"SSL证书和安全设置"},{"en":"Mobile-first optimization","bm":"Pengoptimuman utamakan mudah alih","zh":"移动优先优化"},{"en":"Website hosting & maintenance packages","bm":"Pakej pengehosan & penyelenggaraan laman web","zh":"网站托管和维护套餐"},{"en":"Domain registration & DNS management","bm":"Pendaftaran domain & pengurusan DNS","zh":"域名注册和DNS管理"}]'::jsonb,
  '[{"name_en":"Landing Page","name_bm":"Halaman Pendaratan","name_zh":"着陆页","price":"From RM 2,000","description_en":"Single page, mobile responsive, contact form, basic SEO","description_bm":"Satu halaman, responsif mudah alih, borang hubungan, SEO asas","description_zh":"单页设计，移动响应，联系表单，基础SEO"},{"name_en":"Business Website","name_bm":"Laman Web Perniagaan","name_zh":"商业网站","price":"From RM 5,000","description_en":"Up to 10 pages, CMS, blog, Google Analytics, 1 month maintenance","description_bm":"Sehingga 10 halaman, CMS, blog, Google Analytics, 1 bulan penyelenggaraan","description_zh":"最多10页，CMS，博客，Google Analytics，1个月维护"},{"name_en":"E-Commerce Store","name_bm":"Kedai E-Dagang","name_zh":"电商商店","price":"From RM 10,000","description_en":"Full e-commerce, payment gateway, inventory, order tracking, 3 months maintenance","description_bm":"E-dagang penuh, gerbang pembayaran, inventori, penjejakan pesanan, 3 bulan penyelenggaraan","description_zh":"完整电商，支付网关，库存，订单跟踪，3个月维护"}]'::jsonb,
  '[]'::jsonb,
  1, true
),
(
  'app-development',
  'App Development',
  'Pembangunan Aplikasi',
  '应用开发',
  'Custom mobile & web applications built for your business needs',
  'Aplikasi mudah alih & web tersuai untuk keperluan perniagaan anda',
  '为您的业务需求定制移动和网络应用程序',
  'Smartphone',
  '[{"en":"iOS & Android mobile app development","bm":"Pembangunan aplikasi mudah alih iOS & Android","zh":"iOS和Android移动应用开发"},{"en":"Cross-platform development (React Native, Flutter)","bm":"Pembangunan merentas platform (React Native, Flutter)","zh":"跨平台开发（React Native、Flutter）"},{"en":"Progressive Web Apps (PWA)","bm":"Aplikasi Web Progresif (PWA)","zh":"渐进式网络应用（PWA）"},{"en":"Backend API development & integration","bm":"Pembangunan & integrasi API backend","zh":"后端API开发与集成"},{"en":"UI/UX design & prototyping","bm":"Reka bentuk & prototaip UI/UX","zh":"UI/UX设计和原型制作"},{"en":"App Store & Play Store publishing","bm":"Penerbitan App Store & Play Store","zh":"App Store和Play Store发布"},{"en":"Push notifications & analytics integration","bm":"Integrasi pemberitahuan tolak & analitik","zh":"推送通知和分析集成"},{"en":"Ongoing maintenance & updates","bm":"Penyelenggaraan & kemas kini berterusan","zh":"持续维护和更新"}]'::jsonb,
  '[{"name_en":"MVP / Starter App","name_bm":"Aplikasi MVP / Permulaan","name_zh":"MVP/入门应用","price":"From RM 15,000","description_en":"Core features, single platform, basic UI, app store submission","description_bm":"Ciri teras, satu platform, UI asas, penghantaran app store","description_zh":"核心功能，单平台，基础UI，应用商店提交"},{"name_en":"Professional App","name_bm":"Aplikasi Profesional","name_zh":"专业应用","price":"From RM 35,000","description_en":"Cross-platform, custom UI/UX, backend API, push notifications, 3 months support","description_bm":"Merentas platform, UI/UX tersuai, API backend, pemberitahuan tolak, 3 bulan sokongan","description_zh":"跨平台，定制UI/UX，后端API，推送通知，3个月支持"},{"name_en":"Enterprise App","name_bm":"Aplikasi Perusahaan","name_zh":"企业应用","price":"From RM 80,000","description_en":"Full-featured, advanced integrations, admin dashboard, scalable cloud, 6 months support","description_bm":"Berfitur penuh, integrasi lanjutan, papan pemuka pentadbir, awan berskala, 6 bulan sokongan","description_zh":"全功能，高级集成，管理员仪表板，可扩展云，6个月支持"}]'::jsonb,
  '[]'::jsonb,
  2, true
),
(
  'seo-google-ads',
  'SEO & Google Ads',
  'SEO & Google Ads',
  'SEO和Google广告',
  'Rank higher on Google and drive targeted traffic to your business',
  'Capai kedudukan lebih tinggi di Google dan tarik trafik sasaran',
  '在Google上排名更高，为您的业务带来目标流量',
  'Search',
  '[{"en":"Technical SEO audit & optimization","bm":"Audit & pengoptimuman SEO teknikal","zh":"技术SEO审计和优化"},{"en":"Keyword research & content strategy","bm":"Penyelidikan kata kunci & strategi kandungan","zh":"关键词研究和内容策略"},{"en":"On-page & off-page SEO optimization","bm":"Pengoptimuman SEO pada halaman & luar halaman","zh":"页面内和页面外SEO优化"},{"en":"Google Ads campaign setup & management","bm":"Persediaan & pengurusan kempen Google Ads","zh":"Google Ads活动设置和管理"},{"en":"Local SEO for Malaysian businesses (Google My Business)","bm":"SEO tempatan untuk perniagaan Malaysia (Google My Business)","zh":"马来西亚企业本地SEO（Google My Business）"},{"en":"Link building & domain authority improvement","bm":"Pembinaan pautan & peningkatan autoriti domain","zh":"链接建设和域名权威提升"},{"en":"Monthly ranking reports & competitor tracking","bm":"Laporan kedudukan bulanan & penjejakan pesaing","zh":"每月排名报告和竞争对手跟踪"}]'::jsonb,
  '[{"name_en":"Local SEO","name_bm":"SEO Tempatan","name_zh":"本地SEO","price":"RM 1,200/mo","description_en":"Google My Business optimization, 5 keywords, monthly report, basic on-page SEO","description_bm":"Pengoptimuman Google My Business, 5 kata kunci, laporan bulanan, SEO pada halaman asas","description_zh":"Google My Business优化，5个关键词，月度报告，基础页面SEO"},{"name_en":"SEO + Google Ads","name_bm":"SEO + Google Ads","name_zh":"SEO + Google广告","price":"RM 3,500/mo","description_en":"Full SEO, 15 keywords, Google Ads (up to RM3k), bi-weekly reports","description_bm":"SEO penuh, 15 kata kunci, Google Ads (sehingga RM3k), laporan dwi-mingguan","description_zh":"完整SEO，15个关键词，Google Ads（最高RM3k），双周报告"},{"name_en":"Full Search Domination","name_bm":"Penguasaan Carian Penuh","name_zh":"全面搜索主导","price":"RM 7,000/mo","description_en":"Aggressive SEO, unlimited keywords, unlimited ads, link building, dedicated specialist","description_bm":"SEO agresif, kata kunci tanpa had, iklan tanpa had, pembinaan pautan, pakar khusus","description_zh":"积极SEO，无限关键词，无限广告，链接建设，专属专家"}]'::jsonb,
  '[]'::jsonb,
  3, true
),
(
  'branding-design',
  'Branding & Design',
  'Penjenamaan & Reka Bentuk',
  '品牌与设计',
  'Logo design, brand identity, creative design & visual storytelling',
  'Reka bentuk logo, identiti jenama, reka bentuk kreatif & penceritaan visual',
  '标志设计、品牌标识、创意设计和视觉叙事',
  'Palette',
  '[{"en":"Logo design & brand identity creation","bm":"Reka bentuk logo & penciptaan identiti jenama","zh":"标志设计和品牌标识创建"},{"en":"Brand guidelines & style guide development","bm":"Pembangunan garis panduan jenama & panduan gaya","zh":"品牌指南和风格指南开发"},{"en":"Business card, letterhead & stationery design","bm":"Reka bentuk kad perniagaan, kepala surat & alat tulis","zh":"名片、信笺和文具设计"},{"en":"Packaging design","bm":"Reka bentuk pembungkusan","zh":"包装设计"},{"en":"Brand naming & tagline creation","bm":"Penamaan jenama & penciptaan slogan","zh":"品牌命名和口号创作"},{"en":"Social media branding kit","bm":"Kit penjenamaan media sosial","zh":"社交媒体品牌工具包"},{"en":"Brand audit & refresh services","bm":"Perkhidmatan audit & penyegaran jenama","zh":"品牌审计和刷新服务"}]'::jsonb,
  '[{"name_en":"Logo Package","name_bm":"Pakej Logo","name_zh":"Logo套餐","price":"From RM 1,500","description_en":"3 logo concepts, 3 revisions, all file formats, basic brand colors","description_bm":"3 konsep logo, 3 semakan, semua format fail, warna jenama asas","description_zh":"3个Logo概念，3轮修改，所有文件格式，基础品牌颜色"},{"name_en":"Brand Identity","name_bm":"Identiti Jenama","name_zh":"品牌标识","price":"From RM 5,000","description_en":"Logo + brand guidelines, business card & stationery, social media kit","description_bm":"Logo + garis panduan jenama, kad perniagaan & alat tulis, kit media sosial","description_zh":"Logo + 品牌指南，名片和文具，社交媒体工具包"},{"name_en":"Full Brand Suite","name_bm":"Pakej Jenama Penuh","name_zh":"完整品牌套件","price":"From RM 12,000","description_en":"Complete brand identity, packaging, signage, brand strategy, all marketing collateral","description_bm":"Identiti jenama lengkap, pembungkusan, papan tanda, strategi jenama, semua cagaran pemasaran","description_zh":"完整品牌标识，包装，标牌，品牌策略，所有营销材料"}]'::jsonb,
  '[]'::jsonb,
  4, true
),
(
  'content-creation',
  'Content Creation',
  'Penciptaan Kandungan',
  '内容创作',
  'Copywriting, photography, videography & content strategy',
  'Penulisan salinan, fotografi, videografi & strategi kandungan',
  '文案撰写、摄影、摄像和内容策略',
  'Camera',
  '[{"en":"Professional copywriting (English, BM, Chinese)","bm":"Penulisan salinan profesional (Bahasa Inggeris, BM, Cina)","zh":"专业文案撰写（英语、马来语、中文）"},{"en":"Product & food photography","bm":"Fotografi produk & makanan","zh":"产品和食品摄影"},{"en":"Video production & editing (Reels, TikTok, YouTube)","bm":"Penerbitan & penyuntingan video (Reels, TikTok, YouTube)","zh":"视频制作和编辑（Reels、TikTok、YouTube）"},{"en":"Blog & article writing for SEO","bm":"Penulisan blog & artikel untuk SEO","zh":"SEO博客和文章撰写"},{"en":"Email marketing content & newsletters","bm":"Kandungan pemasaran e-mel & surat berita","zh":"电子邮件营销内容和新闻通讯"},{"en":"Script writing for ads & brand videos","bm":"Penulisan skrip untuk iklan & video jenama","zh":"广告和品牌视频脚本撰写"},{"en":"Content strategy & editorial planning","bm":"Strategi kandungan & perancangan editorial","zh":"内容策略和编辑规划"}]'::jsonb,
  '[{"name_en":"Content Starter","name_bm":"Kandungan Permulaan","name_zh":"内容入门","price":"RM 1,800/mo","description_en":"8 social posts, 2 blog articles, 1 photo session","description_bm":"8 siaran sosial, 2 artikel blog, 1 sesi fotografi","description_zh":"8篇社交帖子，2篇博客文章，1次摄影"},{"name_en":"Content Pro","name_bm":"Kandungan Pro","name_zh":"内容专业","price":"RM 4,000/mo","description_en":"20 social posts, 4 blogs, 2 short videos, 2 photo sessions, email newsletter","description_bm":"20 siaran sosial, 4 blog, 2 video pendek, 2 sesi fotografi, surat berita e-mel","description_zh":"20篇社交帖子，4篇博客，2个短视频，2次摄影，电子邮件通讯"},{"name_en":"Full Content Suite","name_bm":"Pakej Kandungan Penuh","name_zh":"完整内容套件","price":"RM 8,000/mo","description_en":"Unlimited social content, 8 blogs, 4 pro videos, full photography, content strategy, dedicated manager","description_bm":"Kandungan sosial tanpa had, 8 blog, 4 video profesional, fotografi penuh, strategi kandungan, pengurus khusus","description_zh":"无限社交内容，8篇博客，4个专业视频，完整摄影，内容策略，专属经理"}]'::jsonb,
  '[]'::jsonb,
  5, true
);

-- ============ SEED PORTFOLIO ITEMS ============
INSERT INTO portfolio_items (title_en, title_bm, title_zh, description_en, description_bm, description_zh, category, link, sort_order, is_active) VALUES
('FashionKL Social Campaign', 'Kempen Sosial FashionKL', 'FashionKL社交活动', 'Grew Instagram following by 15K in 3 months with targeted content strategy', 'Menambah pengikut Instagram sebanyak 15K dalam 3 bulan', '3个月内Instagram粉丝增长15K', 'social', null, 0, true),
('SpiceRoute F&B TikTok', 'SpiceRoute F&B TikTok', 'SpiceRoute餐饮TikTok', 'Viral food content reaching 2M+ views across campaigns', 'Kandungan makanan viral mencapai 2M+ tontonan', '病毒式美食内容达到200万+浏览量', 'social', null, 1, true),
('TechMalaysia Corporate Site', 'Laman Korporat TechMalaysia', 'TechMalaysia企业网站', 'Modern corporate website with CMS, blog, and lead generation forms', 'Laman web korporat moden dengan CMS, blog, dan borang penjanaan petunjuk', '带有CMS、博客和潜在客户生成表单的现代企业网站', 'websites', null, 2, true),
('StyleKL E-Commerce', 'E-Dagang StyleKL', 'StyleKL电商', 'Fashion e-commerce store with 500+ products and integrated payment', 'Kedai e-dagang fesyen dengan 500+ produk dan pembayaran bersepadu', '拥有500+产品和集成支付的时尚电商商店', 'websites', null, 3, true),
('FoodKL Delivery App', 'Aplikasi Penghantaran FoodKL', 'FoodKL配送应用', 'Food delivery app with real-time tracking, 50K+ downloads', 'Aplikasi penghantaran makanan dengan penjejakan masa nyata, 50K+ muat turun', '实时追踪的食品配送应用，50K+下载', 'apps', null, 4, true),
('HealthPlus Wellness App', 'Aplikasi Kesihatan HealthPlus', 'HealthPlus健康应用', 'Health & fitness app with appointment booking and telemedicine', 'Aplikasi kesihatan & kecergasan dengan tempahan temujanji dan telemedisin', '带有预约和远程医疗的健康健身应用', 'apps', null, 5, true),
('PropertyHub SEO Campaign', 'Kempen SEO PropertyHub', 'PropertyHub SEO活动', 'Achieved page 1 ranking for 25+ competitive keywords in 6 months', 'Mencapai kedudukan halaman 1 untuk 25+ kata kunci kompetitif dalam 6 bulan', '6个月内25+竞争关键词排名第一页', 'branding', null, 6, true),
('MYBatik Brand Identity', 'Identiti Jenama MYBatik', 'MYBatik品牌标识', 'Complete brand identity for Malaysian batik fashion label', 'Identiti jenama lengkap untuk label fesyen batik Malaysia', '马来西亚蜡染时装品牌的完整品牌标识', 'branding', null, 7, true),
('KopiBrew Café Branding', 'Penjenamaan Kafe KopiBrew', 'KopiBrew咖啡馆品牌', 'Full branding package including logo, packaging and store design', 'Pakej penjenamaan penuh termasuk logo, pembungkusan dan reka bentuk kedai', '包括Logo、包装和商店设计的完整品牌包', 'branding', null, 8, true),
('MakanBest Food Content', 'Kandungan Makanan MakanBest', 'MakanBest美食内容', 'Mouth-watering food photography and viral video content for restaurant chain', 'Fotografi makanan dan kandungan video viral untuk rangkaian restoran', '令人垂涎的美食摄影和餐厅连锁病毒视频内容', 'social', null, 9, true);

-- ============ SEED TESTIMONIALS ============
INSERT INTO testimonials (name, quote_en, quote_bm, quote_zh, company_en, company_bm, company_zh, sort_order, is_active) VALUES
('Ahmad Razali', 'BrandSpeed transformed our online presence. Our sales increased by 300% within 3 months!', 'BrandSpeed mengubah kehadiran dalam talian kami. Jualan kami meningkat 300% dalam 3 bulan!', 'BrandSpeed改变了我们的在线形象。我们的销售额在3个月内增长了300%！', 'CEO, TechMalaysia Sdn Bhd', 'CEO, TechMalaysia Sdn Bhd', 'CEO, TechMalaysia Sdn Bhd', 0, true),
('Sarah Lim', 'Professional team with incredible results. They truly understand Malaysian market dynamics.', 'Pasukan profesional dengan hasil yang luar biasa. Mereka benar-benar memahami dinamik pasaran Malaysia.', '专业团队，成果斐然。他们真正了解马来西亚市场动态。', 'Founder, StyleKL', 'Pengasas, StyleKL', '创始人, StyleKL', 1, true),
('Raj Kumar', 'From website to social media, BrandSpeed handles everything. Best decision we made for our business.', 'Dari laman web hingga media sosial, BrandSpeed menguruskan semuanya. Keputusan terbaik untuk perniagaan kami.', '从网站到社交媒体，BrandSpeed处理一切。这是我们为业务做出的最佳决定。', 'Director, Spice Route F&B', 'Pengarah, Spice Route F&B', '总监, Spice Route F&B', 2, true);

-- ============ SEED SITE CONTENT ============
INSERT INTO site_content (key, category, value) VALUES
('hero.headline', 'hero', '{"en": "We Build Brands That Move Fast", "bm": "Kami Membina Jenama Yang Bergerak Pantas", "zh": "我们打造快速发展的品牌"}'::jsonb),
('hero.subtext', 'hero', '{"en": "Helping Malaysian businesses grow online with cutting-edge digital solutions", "bm": "Membantu perniagaan Malaysia berkembang dalam talian dengan penyelesaian digital terkini", "zh": "以前沿数字解决方案帮助马来西亚企业在线发展"}'::jsonb),
('about.headline', 'about', '{"en": "We Are BrandSpeed Marketing", "bm": "Kami Adalah BrandSpeed Marketing", "zh": "我们是BrandSpeed Marketing"}'::jsonb),
('about.desc', 'about', '{"en": "Founded with a passion for digital excellence, BrandSpeed Marketing is a Malaysian-born agency dedicated to helping businesses of all sizes thrive in the digital landscape. We combine creativity with data-driven strategies to deliver results that matter.", "bm": "Diasaskan dengan semangat untuk kecemerlangan digital, BrandSpeed Marketing adalah agensi kelahiran Malaysia yang berdedikasi untuk membantu perniagaan semua saiz berkembang maju dalam landskap digital. Kami menggabungkan kreativiti dengan strategi berasaskan data untuk menyampaikan hasil yang bermakna.", "zh": "BrandSpeed Marketing怀着对数字卓越的热情而创立，是一家马来西亚本土机构，致力于帮助各种规模的企业在数字化环境中蓬勃发展。我们将创意与数据驱动策略相结合，交付有意义的成果。"}'::jsonb),
('contact.info.email', 'contact', '{"en": "hello@brandspeed.com.my", "bm": "hello@brandspeed.com.my", "zh": "hello@brandspeed.com.my"}'::jsonb),
('contact.info.phone', 'contact', '{"en": "+60 12-345 6789", "bm": "+60 12-345 6789", "zh": "+60 12-345 6789"}'::jsonb),
('contact.info.address', 'contact', '{"en": "Kuala Lumpur, Malaysia", "bm": "Kuala Lumpur, Malaysia", "zh": "马来西亚吉隆坡"}'::jsonb),
('footer.tagline', 'footer', '{"en": "Building brands that move fast.", "bm": "Membina jenama yang bergerak pantas.", "zh": "打造快速发展的品牌。"}'::jsonb),
('footer.copyright', 'footer', '{"en": "© 2025 BrandSpeed Marketing Sdn Bhd. All Rights Reserved.", "bm": "© 2025 BrandSpeed Marketing Sdn Bhd. Hak Cipta Terpelihara.", "zh": "© 2025 BrandSpeed Marketing Sdn Bhd. 版权所有。"}'::jsonb);
