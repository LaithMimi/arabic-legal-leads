import { motion } from "framer-motion";
import { Scale, Calculator, FileText, Shield, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceKeys = [
  { icon: Calculator, titleKey: "service1.title", descKey: "service1.desc" },
  { icon: Scale, titleKey: "service2.title", descKey: "service2.desc" },
  { icon: FileText, titleKey: "service3.title", descKey: "service3.desc" },
  { icon: Shield, titleKey: "service4.title", descKey: "service4.desc" },
  { icon: TrendingUp, titleKey: "service5.title", descKey: "service5.desc" },
  { icon: Users, titleKey: "service6.title", descKey: "service6.desc" },
];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-wider">{t("services.subtitle")}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">{t("services.title")}</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-secondary/50 border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{t(service.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
