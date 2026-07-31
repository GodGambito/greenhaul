"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { PHONE_DISPLAY, TEL_HREF } from "@/lib/config";
import { Leaf, Clock, DollarSign, Award, CheckCircle } from "lucide-react";

export default function WhyUs() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const icons = [Leaf, Clock, DollarSign, Award];

  return (
    <section
      id="why-us"
      className={`py-20 relative transition-colors duration-300 ${
        isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span
            className={`font-extrabold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border inline-block ${
              isDark
                ? "text-emerald-400 bg-emerald-950/80 border-emerald-800/50"
                : "text-emerald-700 bg-emerald-50 border-emerald-200"
            }`}
          >
            {t.whyUs.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.whyUs.title}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {t.whyUs.points.map((pt, idx) => {
            const IconComp = icons[idx] || CheckCircle;

            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 group ${
                  isDark
                    ? "bg-slate-950 border-slate-800 hover:border-emerald-500/40"
                    : "bg-slate-50 border-slate-200 hover:border-emerald-400 shadow-sm"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                    isDark
                      ? "bg-emerald-950 border-emerald-700/50 text-emerald-400"
                      : "bg-emerald-100 border-emerald-200 text-emerald-700"
                  }`}
                >
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>{pt.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{pt.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Availability Announcement Banner */}
        <div
          className={`mt-16 rounded-2xl p-8 border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left ${
            isDark
              ? "bg-slate-950 border-slate-800"
              : "bg-slate-50 border-slate-200 shadow-sm"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                Full Availability Operating Schedule
              </h4>
              <p className={`text-sm mt-0.5 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                <strong className="text-emerald-600 dark:text-emerald-400">Monday to Saturday:</strong> 24 Hours Available &bull;{" "}
                <strong className="text-emerald-600 dark:text-emerald-400">Sunday:</strong> By Appointment
              </p>
            </div>
          </div>

          <a
            href={TEL_HREF}
            className={`shrink-0 font-bold text-sm px-6 py-3 rounded-xl border transition-all ${
              isDark
                ? "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
                : "bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm"
            }`}
          >
            Call Dispatch {PHONE_DISPLAY}
          </a>
        </div>

      </div>
    </section>
  );
}
