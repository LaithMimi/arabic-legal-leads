import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="font-display text-lg font-bold text-gradient-gold mb-3">{t("footer.brand")}</div>
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} {t("footer.copy")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
