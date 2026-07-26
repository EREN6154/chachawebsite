import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("vip_lang") || "es"; } catch { return "es"; }
  });

  useEffect(() => {
    try { localStorage.setItem("vip_lang", lang); } catch { /* ignore */ }
    document.documentElement.lang = lang;
  }, [lang]);

  // Pick the right string/value out of a {es, en} object. Falls back to
  // Spanish (or the value itself) if a field wasn't given both languages.
  function t(field) {
    if (field == null) return field;
    if (typeof field === "object" && ("es" in field || "en" in field)) {
      return field[lang] || field.es || field.en || "";
    }
    return field;
  }

  const value = {
    lang,
    setLang,
    toggle: () => setLang(l => (l === "es" ? "en" : "es")),
    t
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
