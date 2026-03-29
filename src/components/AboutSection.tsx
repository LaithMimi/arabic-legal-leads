import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [t("about.f1"), t("about.f2"), t("about.f3"), t("about.f4")];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold font-body text-sm tracking-wider">{t("about.subtitle")}</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              {t("about.title1")}<span className="text-gradient-gold">{t("about.title2")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              {t("about.desc")}
            </p>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground font-body">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-10 border border-border shadow-card">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: t("about.stat1.val"), label: t("about.stat1.label") },
                  { value: t("about.stat2.val"), label: t("about.stat2.label") },
                  { value: t("about.stat3.val"), label: t("about.stat3.label") },
                  { value: t("about.stat4.val"), label: t("about.stat4.label") },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="text-gold font-display text-3xl md:text-4xl font-bold">{stat.value}</div>
                    <div className="text-muted-foreground text-sm mt-2 font-body">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
