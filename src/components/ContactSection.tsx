import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال طلبك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body text-sm tracking-wider">تواصل معنا</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">احجز استشارتك المجانية</h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <Input
              placeholder="الاسم الكامل"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground font-body text-base"
            />
            <Input
              placeholder="رقم الهاتف"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground font-body text-base"
            />
            <Input
              placeholder="البريد الإلكتروني"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary/50 border-border h-14 text-foreground placeholder:text-muted-foreground font-body text-base"
            />
            <Textarea
              placeholder="كيف يمكننا مساعدتك؟"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground font-body text-base resize-none"
            />
            <Button variant="gold" size="lg" className="w-full text-base py-6 gap-2" type="submit">
              <Send className="w-5 h-5" />
              أرسل طلبك الآن
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">معلومات التواصل</h3>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                لا تتردد في التواصل معنا. فريقنا جاهز للإجابة على جميع استفساراتك وتقديم المشورة المناسبة.
              </p>
            </div>

            {[
              { icon: Phone, label: "الهاتف", value: "04-123-4567", href: "tel:041234567" },
              { icon: Mail, label: "البريد الإلكتروني", value: "info@accounting-firm.co.il", href: "mailto:info@accounting-firm.co.il" },
              { icon: MapPin, label: "العنوان", value: "حيفا، إسرائيل", href: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-muted-foreground text-sm font-body">{item.label}</div>
                  <div className="text-foreground font-body font-medium">{item.value}</div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
