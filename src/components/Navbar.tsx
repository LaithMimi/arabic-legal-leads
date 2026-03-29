import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { type Language, languageConfig } from "@/i18n/translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { label: t("nav.home"), id: "top" },
    { label: t("nav.services"), id: "services" },
    { label: t("nav.about"), id: "about" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-display text-xl font-bold text-gradient-gold cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {t("nav.brand")}
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => item.id === "top" ? window.scrollTo({ top: 0, behavior: "smooth" }) : scrollTo(item.id)}
              className="text-muted-foreground hover:text-gold transition-colors font-body text-sm"
            >
              {item.label}
            </button>
          ))}
          <Button variant="gold" size="sm" onClick={() => scrollTo("contact")}>
            {t("nav.contact")}
          </Button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-gold transition-colors text-sm"
            >
              <Globe className="w-4 h-4" />
              <span>{languageConfig[lang].label}</span>
            </button>
            {langMenuOpen && (
              <div className="absolute top-full mt-2 end-0 bg-card border border-border rounded-xl shadow-card py-1 min-w-[120px] z-50">
                {(Object.keys(languageConfig) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangMenuOpen(false); }}
                    className={`block w-full px-4 py-2 text-sm text-start hover:bg-secondary/50 transition-colors ${l === lang ? "text-gold font-bold" : "text-foreground"}`}
                  >
                    {languageConfig[l].label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="relative">
            <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="text-foreground">
              <Globe className="w-5 h-5" />
            </button>
            {langMenuOpen && (
              <div className="absolute top-full mt-2 end-0 bg-card border border-border rounded-xl shadow-card py-1 min-w-[120px] z-50">
                {(Object.keys(languageConfig) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangMenuOpen(false); }}
                    className={`block w-full px-4 py-2 text-sm text-start hover:bg-secondary/50 transition-colors ${l === lang ? "text-gold font-bold" : "text-foreground"}`}
                  >
                    {languageConfig[l].label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border p-4 space-y-3">
          {[...navItems, { label: t("nav.contact"), id: "contact" }].map((item) => (
            <button
              key={item.id}
              onClick={() => item.id === "top" ? (window.scrollTo({ top: 0, behavior: "smooth" }), setOpen(false)) : scrollTo(item.id)}
              className="block w-full text-start text-foreground font-body py-2 hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
