"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section
      className={`py-20 relative border-t transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 text-white border-slate-800"
          : "bg-slate-50 text-slate-900 border-slate-200"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span
            className={`font-extrabold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border inline-block ${
              isDark
                ? "text-emerald-400 bg-emerald-950/80 border-emerald-800/50"
                : "text-emerald-700 bg-emerald-100 border-emerald-300"
            }`}
          >
            {t.faq.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.faq.title}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all ${
                  isDark
                    ? "bg-slate-900 border-slate-800"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className={`w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base transition-colors ${
                    isDark
                      ? "text-white hover:text-emerald-400"
                      : "text-slate-900 hover:text-emerald-600"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-500" : isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${
                      isDark
                        ? "text-slate-300 border-slate-800/60"
                        : "text-slate-600 border-slate-100"
                    }`}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
