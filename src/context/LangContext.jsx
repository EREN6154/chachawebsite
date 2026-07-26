import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "es", setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("vip_lang") || "es");

  useEffect(() => {
    localStorage.setItem("vip_lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

// Helper: pass a {es, en} pair (or a plain string, returned as-is) and get
// back the string for the currently active language.
export function useT() {
  const { lang } = useLang();
  return function t(pair) {
    if (pair == null) return "";
    if (typeof pair === "string") return pair;
    return pair[lang] ?? pair.es ?? "";
  };
}
