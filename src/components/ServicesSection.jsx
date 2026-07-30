"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Truck, Home, Sparkles, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const serviceIcons = {
    "junk-removal": Truck,
    "house-cleaning": Home,
    "move-out": Sparkles,
    "pressure-washing": Droplets,
  };

  return (
    <section
      id="services"
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
            {t.services.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.services.title}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {t.services.items.map((item) => {
            const IconComponent = serviceIcons[item.id] || Truck;

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 border transition-all hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden ${
                  isDark
                    ? "bg-slate-950 border-slate-800 hover:border-emerald-500/50 shadow-lg hover:shadow-emerald-950/40"
                    : "bg-slate-50 border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Highlight Badge */}
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider border px-2.5 py-1 rounded-full ${
                    isDark
                      ? "bg-emerald-950 text-emerald-400 border-emerald-800/60"
                      : "bg-emerald-100 text-emerald-800 border-emerald-200"
                  }`}
                >
                  {item.badge}
                </span>

                <div>
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                      isDark
                        ? "bg-emerald-950/90 text-emerald-400 border-emerald-700/50"
                        : "bg-emerald-100 text-emerald-700 border-emerald-200"
                    }`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {item.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className={`space-y-2 border-t pt-4 mb-6 ${isDark ? "border-slate-900" : "border-slate-200"}`}>
                    {item.features.map((feature, idx) => (
                      <li key={idx} className={`flex items-center gap-2 text-xs ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Request Button */}
                <a
                  href="#contact"
                  className={`w-full font-bold text-xs py-3 px-4 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                    isDark
                      ? "bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white border-slate-800 hover:border-emerald-500"
                      : "bg-white hover:bg-emerald-600 text-slate-800 hover:text-white border-slate-300 hover:border-emerald-500 shadow-sm"
                  }`}
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom Combination CTA Banner */}
        <div
          className={`mt-16 rounded-2xl p-8 border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left ${
            isDark
              ? "bg-gradient-to-r from-emerald-950 via-slate-900 to-green-950 border-emerald-800/40"
              : "bg-gradient-to-r from-emerald-50 via-white to-green-50 border-emerald-200 shadow-sm"
          }`}
        >
          <div>
            <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t.services.cta}</h3>
            <p className={`text-sm mt-1 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Combine junk removal with house cleaning or pressure washing for extra savings!
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <span>{t.services.ctaBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
