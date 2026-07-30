"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Phone, Sparkles, Clock, ShieldCheck, Leaf, ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className={`relative overflow-hidden py-16 lg:py-24 transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tagline Badge */}
            <div
              className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full font-semibold text-xs tracking-wide ${
                isDark
                  ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-400"
                  : "bg-emerald-100 border-emerald-300 text-emerald-800"
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.hero.tagline}</span>
            </div>

            {/* Headline */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t.hero.titleStart}{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 dark:from-emerald-400 dark:via-green-300 dark:to-lime-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl max-w-2xl font-normal leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t.hero.description}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all flex items-center justify-center gap-3 group"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:4252802915"
                className={`w-full sm:w-auto border font-bold text-base px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-slate-900 hover:bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm"
                }`}
              >
                <Phone className="w-5 h-5 text-emerald-500" />
                <span>(425) 280-2915</span>
              </a>

              <a
                href="https://wa.me/14252802915?text=Hello%20GreenHaul,%20I'd%20like%20to%20get%20a%20free%20quote!"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold text-base px-5 py-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-green-500/40 shadow-sm"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 border-t text-left ${
                isDark ? "border-slate-800/80" : "border-slate-200"
              }`}
            >
              <div
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800/40"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t.hero.trust1Title}
                  </h4>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.hero.trust1Sub}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800/40"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t.hero.trust2Title}
                  </h4>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.hero.trust2Sub}
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  isDark
                    ? "bg-slate-900/40 border-slate-800/40"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t.hero.trust3Title}
                  </h4>
                  <p className={`text-xs mt-0.5 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.hero.trust3Sub}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Circular Logo Hero Visual */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 sm:w-96 lg:w-[420px] aspect-square rounded-full p-2 bg-gradient-to-tr from-emerald-500 via-green-600 to-lime-400 shadow-2xl shadow-emerald-900/30">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-950">
                <Image
                  src="/images/logo.jpeg"
                  alt="GreenHaul Junk Removal and Cleaning Services"
                  fill
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 420px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Floating Highlight Tag */}
              <div
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md border px-5 py-2.5 rounded-full text-xs font-bold shadow-xl flex items-center gap-2 whitespace-nowrap ${
                  isDark
                    ? "bg-slate-900/90 border-emerald-500/50 text-emerald-300"
                    : "bg-white/95 border-emerald-400 text-emerald-800"
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Call or Text: (425) 280-2915</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
