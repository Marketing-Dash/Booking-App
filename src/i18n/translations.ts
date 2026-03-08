export type Language = "en" | "bm" | "zh";

export const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.home": { en: "Home", bm: "Utama", zh: "首页" },
  "nav.services": { en: "Services", bm: "Perkhidmatan", zh: "服务" },
  "nav.portfolio": { en: "Portfolio", bm: "Portfolio", zh: "作品集" },
  "nav.about": { en: "About", bm: "Tentang Kami", zh: "关于我们" },
  "nav.contact": { en: "Contact", bm: "Hubungi", zh: "联系我们" },
  "nav.cta": { en: "Get Free Consultation", bm: "Dapatkan Konsultasi Percuma", zh: "获取免费咨询" },

  // Hero
  "hero.headline": { en: "We Build Brands That Move Fast", bm: "Kami Membina Jenama Yang Bergerak Pantas", zh: "我们打造快速发展的品牌" },
  "hero.cycle.1": { en: "Digital Marketing Agency", bm: "Agensi Pemasaran Digital", zh: "数字营销机构" },
  "hero.cycle.2": { en: "Website Builders", bm: "Pembina Laman Web", zh: "网站建设者" },
  "hero.cycle.3": { en: "App Developers", bm: "Pembangun Aplikasi", zh: "应用开发者" },
  "hero.cycle.4": { en: "Social Media Experts", bm: "Pakar Media Sosial", zh: "社交媒体专家" },
  "hero.subtext": { en: "Helping Malaysian businesses grow online with cutting-edge digital solutions", bm: "Membantu perniagaan Malaysia berkembang dalam talian dengan penyelesaian digital terkini", zh: "以前沿数字解决方案帮助马来西亚企业在线发展" },
  "hero.cta1": { en: "Start Your Project", bm: "Mulakan Projek Anda", zh: "启动您的项目" },
  "hero.cta2": { en: "View Our Work", bm: "Lihat Hasil Kerja Kami", zh: "查看我们的作品" },

  // Services
  "services.label": { en: "WHAT WE DO", bm: "APA YANG KAMI LAKUKAN", zh: "我们的服务" },
  "services.headline": { en: "Complete Digital Solutions For Your Business", bm: "Penyelesaian Digital Lengkap Untuk Perniagaan Anda", zh: "为您的企业提供完整的数字解决方案" },
  "services.1.title": { en: "Social Media Marketing", bm: "Pemasaran Media Sosial", zh: "社交媒体营销" },
  "services.1.desc": { en: "Facebook, Instagram, TikTok management, content creation & paid ads", bm: "Pengurusan Facebook, Instagram, TikTok, penciptaan kandungan & iklan berbayar", zh: "Facebook、Instagram、TikTok管理、内容创作和付费广告" },
  "services.2.title": { en: "Website Development", bm: "Pembangunan Laman Web", zh: "网站开发" },
  "services.2.desc": { en: "Professional business websites, landing pages & e-commerce stores", bm: "Laman web perniagaan profesional, halaman pendaratan & kedai e-dagang", zh: "专业商业网站、着陆页和电子商务商店" },
  "services.3.title": { en: "App Development", bm: "Pembangunan Aplikasi", zh: "应用开发" },
  "services.3.desc": { en: "Custom mobile & web applications built for your business needs", bm: "Aplikasi mudah alih & web tersuai untuk keperluan perniagaan anda", zh: "为您的业务需求定制移动和网络应用程序" },
  "services.4.title": { en: "SEO & Google Ads", bm: "SEO & Google Ads", zh: "SEO和Google广告" },
  "services.4.desc": { en: "Rank higher on Google and drive targeted traffic to your business", bm: "Capai kedudukan lebih tinggi di Google dan tarik trafik sasaran", zh: "在Google上排名更高，为您的业务带来目标流量" },
  "services.5.title": { en: "Branding & Design", bm: "Penjenamaan & Reka Bentuk", zh: "品牌与设计" },
  "services.5.desc": { en: "Logo design, brand identity, creative design & visual storytelling", bm: "Reka bentuk logo, identiti jenama, reka bentuk kreatif & penceritaan visual", zh: "标志设计、品牌标识、创意设计和视觉叙事" },
  "services.6.title": { en: "Content Creation", bm: "Penciptaan Kandungan", zh: "内容创作" },
  "services.6.desc": { en: "Copywriting, photography, videography & content strategy", bm: "Penulisan salinan, fotografi, videografi & strategi kandungan", zh: "文案撰写、摄影、摄像和内容策略" },

  // Stats
  "stats.projects": { en: "Projects Completed", bm: "Projek Selesai", zh: "已完成项目" },
  "stats.clients": { en: "Happy Clients", bm: "Pelanggan Gembira", zh: "满意客户" },
  "stats.years": { en: "Years Experience", bm: "Tahun Pengalaman", zh: "年经验" },
  "stats.satisfaction": { en: "Client Satisfaction", bm: "Kepuasan Pelanggan", zh: "客户满意度" },
  "stats.desc": { en: "BrandSpeed Marketing is a full-service digital agency helping Malaysian SMEs and startups grow their online presence with creative strategies and cutting-edge technology.", bm: "BrandSpeed Marketing adalah agensi digital perkhidmatan penuh yang membantu PKS dan syarikat permulaan Malaysia mengembangkan kehadiran dalam talian dengan strategi kreatif dan teknologi terkini.", zh: "BrandSpeed Marketing是一家全方位数字营销机构，通过创意策略和前沿技术帮助马来西亚中小企业和初创公司发展在线业务。" },

  // Portfolio
  "portfolio.label": { en: "OUR WORK", bm: "HASIL KERJA KAMI", zh: "我们的作品" },
  "portfolio.headline": { en: "Projects We're Proud Of", bm: "Projek Yang Kami Banggakan", zh: "我们引以为豪的项目" },
  "portfolio.all": { en: "All", bm: "Semua", zh: "全部" },
  "portfolio.websites": { en: "Websites", bm: "Laman Web", zh: "网站" },
  "portfolio.apps": { en: "Apps", bm: "Aplikasi", zh: "应用" },
  "portfolio.social": { en: "Social Media", bm: "Media Sosial", zh: "社交媒体" },
  "portfolio.branding": { en: "Branding", bm: "Penjenamaan", zh: "品牌" },
  "portfolio.view": { en: "View Project", bm: "Lihat Projek", zh: "查看项目" },

  // Process
  "process.label": { en: "HOW WE WORK", bm: "CARA KAMI BEKERJA", zh: "我们的流程" },
  "process.headline": { en: "Our Proven Process", bm: "Proses Terbukti Kami", zh: "我们久经验证的流程" },
  "process.1.title": { en: "Discovery", bm: "Penemuan", zh: "发现" },
  "process.1.desc": { en: "We understand your business & goals", bm: "Kami memahami perniagaan & matlamat anda", zh: "我们了解您的业务和目标" },
  "process.2.title": { en: "Strategy", bm: "Strategi", zh: "策略" },
  "process.2.desc": { en: "We plan the best digital approach", bm: "Kami merancang pendekatan digital terbaik", zh: "我们规划最佳数字方案" },
  "process.3.title": { en: "Build", bm: "Pembinaan", zh: "构建" },
  "process.3.desc": { en: "We design and develop your solution", bm: "Kami mereka bentuk dan membangunkan penyelesaian anda", zh: "我们设计和开发您的解决方案" },
  "process.4.title": { en: "Launch & Grow", bm: "Lancar & Berkembang", zh: "发布与成长" },
  "process.4.desc": { en: "We launch and continuously improve", bm: "Kami melancarkan dan terus menambah baik", zh: "我们发布并持续改进" },

  // Testimonials
  "testimonials.headline": { en: "What Our Clients Say", bm: "Apa Kata Pelanggan Kami", zh: "客户评价" },
  "testimonials.1.quote": { en: "BrandSpeed transformed our online presence. Our sales increased by 300% within 3 months!", bm: "BrandSpeed mengubah kehadiran dalam talian kami. Jualan kami meningkat 300% dalam 3 bulan!", zh: "BrandSpeed改变了我们的在线形象。我们的销售额在3个月内增长了300%！" },
  "testimonials.1.name": { en: "Ahmad Razali", bm: "Ahmad Razali", zh: "Ahmad Razali" },
  "testimonials.1.company": { en: "CEO, TechMalaysia Sdn Bhd", bm: "CEO, TechMalaysia Sdn Bhd", zh: "CEO, TechMalaysia Sdn Bhd" },
  "testimonials.2.quote": { en: "Professional team with incredible results. They truly understand Malaysian market dynamics.", bm: "Pasukan profesional dengan hasil yang luar biasa. Mereka benar-benar memahami dinamik pasaran Malaysia.", zh: "专业团队，成果斐然。他们真正了解马来西亚市场动态。" },
  "testimonials.2.name": { en: "Sarah Lim", bm: "Sarah Lim", zh: "Sarah Lim" },
  "testimonials.2.company": { en: "Founder, StyleKL", bm: "Pengasas, StyleKL", zh: "创始人, StyleKL" },
  "testimonials.3.quote": { en: "From website to social media, BrandSpeed handles everything. Best decision we made for our business.", bm: "Dari laman web hingga media sosial, BrandSpeed menguruskan semuanya. Keputusan terbaik untuk perniagaan kami.", zh: "从网站到社交媒体，BrandSpeed处理一切。这是我们为业务做出的最佳决定。" },
  "testimonials.3.name": { en: "Raj Kumar", bm: "Raj Kumar", zh: "Raj Kumar" },
  "testimonials.3.company": { en: "Director, Spice Route F&B", bm: "Pengarah, Spice Route F&B", zh: "总监, Spice Route F&B" },

  // About
  "about.headline": { en: "We Are BrandSpeed Marketing", bm: "Kami Adalah BrandSpeed Marketing", zh: "我们是BrandSpeed Marketing" },
  "about.desc": { en: "Founded with a passion for digital excellence, BrandSpeed Marketing is a Malaysian-born agency dedicated to helping businesses of all sizes thrive in the digital landscape. We combine creativity with data-driven strategies to deliver results that matter.", bm: "Diasaskan dengan semangat untuk kecemerlangan digital, BrandSpeed Marketing adalah agensi kelahiran Malaysia yang berdedikasi untuk membantu perniagaan semua saiz berkembang maju dalam landskap digital. Kami menggabungkan kreativiti dengan strategi berasaskan data untuk menyampaikan hasil yang bermakna.", zh: "BrandSpeed Marketing怀着对数字卓越的热情而创立，是一家马来西亚本土机构，致力于帮助各种规模的企业在数字化环境中蓬勃发展。我们将创意与数据驱动策略相结合，交付有意义的成果。" },
  "about.tag1": { en: "Fast Delivery", bm: "Penghantaran Pantas", zh: "快速交付" },
  "about.tag2": { en: "Creative Solutions", bm: "Penyelesaian Kreatif", zh: "创意解决方案" },
  "about.tag3": { en: "Honest Pricing", bm: "Harga Jujur", zh: "诚实定价" },
  "about.tag4": { en: "Long-term Support", bm: "Sokongan Jangka Panjang", zh: "长期支持" },
  "about.team": { en: "Meet The Team", bm: "Kenali Pasukan Kami", zh: "认识团队" },

  // Pricing
  "pricing.headline": { en: "Transparent & Affordable Pricing", bm: "Harga Telus & Berpatutan", zh: "透明实惠的价格" },
  "pricing.starter": { en: "Starter", bm: "Permulaan", zh: "入门" },
  "pricing.starter.desc": { en: "Website or Social Media Management", bm: "Laman Web atau Pengurusan Media Sosial", zh: "网站或社交媒体管理" },
  "pricing.growth": { en: "Growth", bm: "Pertumbuhan", zh: "成长" },
  "pricing.growth.desc": { en: "Website + Social Media + SEO", bm: "Laman Web + Media Sosial + SEO", zh: "网站 + 社交媒体 + SEO" },
  "pricing.enterprise": { en: "Enterprise", bm: "Perusahaan", zh: "企业" },
  "pricing.enterprise.desc": { en: "Full Digital Suite + App Development", bm: "Pakej Digital Penuh + Pembangunan Aplikasi", zh: "全数字套件 + 应用开发" },
  "pricing.from": { en: "From", bm: "Dari", zh: "起价" },
  "pricing.popular": { en: "Most Popular", bm: "Paling Popular", zh: "最受欢迎" },
  "pricing.cta": { en: "Get Started", bm: "Mula Sekarang", zh: "立即开始" },
  "pricing.feature.website": { en: "Professional Website", bm: "Laman Web Profesional", zh: "专业网站" },
  "pricing.feature.social": { en: "Social Media Management", bm: "Pengurusan Media Sosial", zh: "社交媒体管理" },
  "pricing.feature.seo": { en: "SEO Optimization", bm: "Pengoptimuman SEO", zh: "SEO优化" },
  "pricing.feature.ads": { en: "Google & Social Ads", bm: "Google & Iklan Sosial", zh: "Google和社交广告" },
  "pricing.feature.app": { en: "Custom App Development", bm: "Pembangunan Aplikasi Tersuai", zh: "定制应用开发" },
  "pricing.feature.branding": { en: "Full Branding Package", bm: "Pakej Penjenamaan Penuh", zh: "完整品牌包" },
  "pricing.feature.support": { en: "24/7 Priority Support", bm: "Sokongan Keutamaan 24/7", zh: "24/7优先支持" },
  "pricing.feature.analytics": { en: "Monthly Analytics Report", bm: "Laporan Analitik Bulanan", zh: "每月分析报告" },

  // Contact
  "contact.headline": { en: "Let's Work Together", bm: "Jom Bekerjasama", zh: "让我们一起合作" },
  "contact.name": { en: "Full Name", bm: "Nama Penuh", zh: "全名" },
  "contact.email": { en: "Email Address", bm: "Alamat Emel", zh: "电子邮箱" },
  "contact.phone": { en: "Phone Number", bm: "Nombor Telefon", zh: "电话号码" },
  "contact.service": { en: "Service Needed", bm: "Perkhidmatan Diperlukan", zh: "所需服务" },
  "contact.budget": { en: "Budget Range", bm: "Julat Bajet", zh: "预算范围" },
  "contact.message": { en: "Project Description", bm: "Penerangan Projek", zh: "项目描述" },
  "contact.submit": { en: "Send Message", bm: "Hantar Mesej", zh: "发送消息" },
  "contact.info.email": { en: "Email Us", bm: "Emel Kami", zh: "电子邮件" },
  "contact.info.phone": { en: "Call Us", bm: "Hubungi Kami", zh: "致电我们" },
  "contact.info.address": { en: "Visit Us", bm: "Lawati Kami", zh: "拜访我们" },

  // Footer
  "footer.tagline": { en: "Building brands that move fast.", bm: "Membina jenama yang bergerak pantas.", zh: "打造快速发展的品牌。" },
  "footer.quicklinks": { en: "Quick Links", bm: "Pautan Pantas", zh: "快速链接" },
  "footer.services": { en: "Services", bm: "Perkhidmatan", zh: "服务" },
  "footer.contact": { en: "Contact", bm: "Hubungi", zh: "联系" },
  "footer.copyright": { en: "© 2025 BrandSpeed Marketing Sdn Bhd. All Rights Reserved.", bm: "© 2025 BrandSpeed Marketing Sdn Bhd. Hak Cipta Terpelihara.", zh: "© 2025 BrandSpeed Marketing Sdn Bhd. 版权所有。" },
  "footer.privacy": { en: "Privacy Policy", bm: "Dasar Privasi", zh: "隐私政策" },
  "footer.terms": { en: "Terms of Service", bm: "Terma Perkhidmatan", zh: "服务条款" },
};
