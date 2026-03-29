import { motion } from "framer-motion";
import { Scale, Calculator, FileText, Shield, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "خدمات المحاسبة",
    desc: "إدارة حسابات شاملة، إعداد تقارير مالية، وتقديم إقرارات ضريبية بدقة واحترافية.",
  },
  {
    icon: Scale,
    title: "المطالبات القانونية",
    desc: "تمثيل قانوني متميز لاسترداد حقوقك المالية والتعويضات المستحقة لك.",
  },
  {
    icon: FileText,
    title: "الاستشارات الضريبية",
    desc: "تخطيط ضريبي ذكي لتقليل الأعباء الضريبية وتحقيق أقصى استفادة مالية.",
  },
  {
    icon: Shield,
    title: "تأمين حقوقك",
    desc: "حماية أصولك وممتلكاتك من خلال استراتيجيات قانونية محكمة.",
  },
  {
    icon: TrendingUp,
    title: "تعويضات العمل",
    desc: "مطالبات تعويضات إصابات العمل والحقوق العمالية بمتابعة دقيقة.",
  },
  {
    icon: Users,
    title: "استشارات الأعمال",
    desc: "دعم كامل لتأسيس وإدارة الشركات مع التوجيه المالي والقانوني.",
  },
];

const ServicesSection = () => {
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
          <span className="text-gold font-body text-sm tracking-wider">ما نقدمه لك</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">خدماتنا المتخصصة</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
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
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
