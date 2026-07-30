"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const { lang, setLang } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 shadow-xl flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Call */}
      <a
        href="tel:4252802915"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950 flex items-center justify-center transition-all hover:scale-110"
        title="Call (425) 280-2915"
      >
        <Phone className="w-5 h-5 animate-pulse" />
      </a>

      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/14252802915?text=Hello%20GreenHaul!"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110"
        title="WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
