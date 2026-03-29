import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-navy opacity-70" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-gold/30 bg-gold/5"
          >
            <span className="text-gold font-body text-sm">مكتب محاسبة ومطالبات قانونية في إسرائيل</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-foreground">شريكك الموثوق في</span>
            <br />
            <span className="text-gradient-gold">المحاسبة والمطالبات القانونية</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 font-body leading-relaxed">
            نقدم خدمات محاسبية واستشارات قانونية احترافية تساعدك على تحقيق حقوقك المالية واسترداد مستحقاتك بأعلى معايير الجودة والسرية.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="gold" size="lg" className="text-base px-8 py-6" onClick={scrollToContact}>
              احجز استشارة مجانية
            </Button>
            <Button variant="goldOutline" size="lg" className="text-base px-8 py-6" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              خدماتنا
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { num: "+١٥", label: "سنة خبرة" },
              { num: "+٥٠٠٠", label: "عميل راضٍ" },
              { num: "٩٨%", label: "نسبة النجاح" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-gold font-display text-2xl md:text-3xl font-bold">{stat.num}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
