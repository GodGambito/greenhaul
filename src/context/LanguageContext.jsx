"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es"); // Default to Spanish as requested, with instant EN toggle

  useEffect(() => {
    const saved = localStorage.getItem("greenhaul_lang");
    if (saved && (saved === "en" || saved === "es")) {
      setLang(saved);
    }
  }, []);

  const switchLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("greenhaul_lang", newLang);
  };

  const t = translations[lang] || translations["es"];

  return (
    <LanguageContext.Provider value={{ lang, setLang: switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
