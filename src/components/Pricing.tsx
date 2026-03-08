import { motion } from "framer-motion";
import { Check, Trophy, Flame } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "RM 500",
    period: "/month",
    badge: null,
    highlight: "border",
    features: [
      "8 Posts",
      "4 Reels",
      "FB, IG, TikTok, GMB",
      "Portal Access",
      "Weekly, 2 Weeks, 1 Month Reports",
      "1 Extra Add-on Task (Design, Editing, Others)",
      "Monthly 2 Meetings",
    ],
    cta: "Get Started",
    popular: false,
    exclusive: false,
  },
  {
    name: "Growth",
    price: "RM 800",
    period: "/month",
    badge: "Most Popular",
    highlight: "popular",
    features: [
      "10 Posts",
      "5 Reels",
      "FB, IG, TikTok, GMB, YouTube",
      "Portal Access",
      "Weekly, 2 Weeks, 1 Month Reports",
      "2 Extra Add-on Tasks (Design, Editing, Others)",
      "Staff Attendance Web App with Real-time & Location Tracking + Reporting",
      "Monthly 2 Meetings",
    ],
    cta: "Upgrade to this plan",
    popular: true,
    exclusive: false,
  },
  {
    name: "Premium",
    price: "RM 1,499",
    period: "/month",
    badge: "Limited Clients Only",
    highlight: "exclusive",
    features: [
      "10 Posts",
      "5 Reels",
      "FB, IG, TikTok, GMB, YouTube",
      "Portal Access",
      "Weekly, 2 Weeks, 1 Month Reports",
      "3 Extra Add-on Tasks (Design, Editing, Others)",
      "Staff Attendance Web App with Real-time & Location Tracking + Reporting",
      "Custom App or Web Development & Maintenance",
      "Monthly 2 Meetings",
    ],
    cta: "Upgrade to this plan",
    popular: false,
    exclusive: true,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">
            PRICING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-foreground">
            Choose Your Growth Plan
          </h2>
          <p className="text-muted-foreground mt-4 text-base max-w-lg mx-auto">
            Flexible packages designed for Malaysian businesses — from startups to enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "bg-[hsl(var(--brand-dark))] text-white shadow-2xl shadow-primary/20 scale-[1.03] z-10 border-2 border-primary"
                  : pkg.exclusive
                  ? "bg-card border-2 border-[hsl(var(--brand-gold))] shadow-xl shadow-[hsl(var(--brand-gold))]/10"
                  : "bg-card border-2 border-primary/40 shadow-lg"
              } hover:-translate-y-1`}
            >
              {/* Badge */}
              {pkg.badge && (
                <span
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-xs font-bold py-1.5 px-5 rounded-full whitespace-nowrap ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-[hsl(var(--brand-gold))] text-[hsl(var(--brand-dark))]"
                  }`}
                >
                  {pkg.popular && <Trophy className="w-3.5 h-3.5" />}
                  {pkg.exclusive && <Flame className="w-3.5 h-3.5" />}
                  {pkg.badge}
                </span>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3
                  className={`text-xl font-heading font-bold mb-1 ${
                    pkg.popular ? "text-white" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>
                <div className="mt-3">
                  <span
                    className={`text-4xl font-heading font-black ${
                      pkg.popular
                        ? "text-primary"
                        : pkg.exclusive
                        ? "text-[hsl(var(--brand-gold))]"
                        : "text-primary"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      pkg.popular ? "text-white/60" : "text-muted-foreground"
                    }`}
                  >
                    {pkg.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-sm ${
                      pkg.popular ? "text-white/85" : "text-foreground/80"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        pkg.popular
                          ? "text-primary"
                          : pkg.exclusive
                          ? "text-[hsl(var(--brand-gold))]"
                          : "text-primary"
                      }`}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center rounded-full font-bold py-3.5 px-8 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:shadow-[0_8px_24px_-6px_hsl(25,100%,50%,0.5)] hover:scale-[1.03]"
                    : pkg.exclusive
                    ? "bg-[hsl(var(--brand-gold))] text-[hsl(var(--brand-dark))] font-bold hover:shadow-[0_8px_24px_-6px_hsl(43,100%,55%,0.4)] hover:scale-[1.03]"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
