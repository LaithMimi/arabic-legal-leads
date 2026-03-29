import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Language, translations, languageConfig } from "./translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("lang") as Language;
    return saved && translations[saved] ? saved : "ar";
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  }, []);

  const t = useCallback((key: string) => translations[lang][key] || key, [lang]);

  const config = languageConfig[lang];

  useEffect(() => {
    document.documentElement.dir = config.dir;
    document.documentElement.lang = lang;
    document.documentElement.style.setProperty("--font-display", config.fontDisplay);
    document.documentElement.style.setProperty("--font-body", config.fontBody);
  }, [lang, config]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir: config.dir, isRtl: config.dir === "rtl" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
