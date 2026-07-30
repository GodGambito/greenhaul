"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Check } from "lucide-react";

export default function EstimateCalculator() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [service, setService] = useState("junk");
  const [volume, setVolume] = useState("medium");

  const pricingMatrix = {
    junk: {
      small: "$95 - $160",
      medium: "$180 - $340",
      large: "$360 - $650+",
    },
    house: {
      small: "$120 - $180",
      medium: "$190 - $290",
      large: "$300 - $480+",
    },
    moveout: {
      small: "$180 - $260",
      medium: "$270 - $420",
      large: "$430 - $680+",
    },
    pressure: {
      small: "$110 - $190",
      medium: "$200 - $350",
      large: "$360 - $590+",
    },
  };

  const currentEstimate = pricingMatrix[service]?.[volume] || "$150 - $300";

  const handleTransferToForm = () => {
    const serviceName = t.calculator.services[service];
    const volumeName = t.calculator.volume[volume];
    const detailsText = `[Calculated Estimate: ${currentEstimate}]\nService: ${serviceName}\nScope: ${volumeName}\n`;

    const detailsEl = document.getElementById("details");
    const serviceEl = document.getElementById("service-select");

    if (detailsEl) {
      detailsEl.value = detailsText;
    }
    if (serviceEl) {
      serviceEl.value = serviceName;
    }

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="calculator"
      className={`py-20 relative border-t border-b transition-colors duration-300 ${
        isDark
          ? "bg-slate-950 text-white border-slate-800"
          : "bg-slate-50 text-slate-900 border-slate-200"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span
            className={`font-extrabold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border inline-block ${
              isDark
                ? "text-emerald-400 bg-emerald-950/80 border-emerald-800/50"
                : "text-emerald-700 bg-emerald-100 border-emerald-300"
            }`}
          >
            {t.calculator.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.calculator.title}
          </h2>
          <p className={`text-base ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Panel */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border shadow-2xl space-y-8 ${
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200 shadow-lg"
          }`}
        >
          
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
              {t.calculator.step1}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.keys(t.calculator.services).map((key) => (
                <button
                  key={key}
                  onClick={() => setService(key)}
                  className={`p-4 rounded-xl text-left border transition-all text-xs font-bold flex items-center justify-between ${
                    service === key
                      ? isDark
                        ? "bg-emerald-950/90 border-emerald-500 text-white shadow-md"
                        : "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm"
                      : isDark
                      ? "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span>{t.calculator.services[key]}</span>
                  {service === key && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Volume */}
          <div>
            <label className="block text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-4">
              {t.calculator.step2}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["small", "medium", "large"].map((volKey) => (
                <button
                  key={volKey}
                  onClick={() => setVolume(volKey)}
                  className={`p-4 rounded-xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                    volume === volKey
                      ? isDark
                        ? "bg-emerald-950/90 border-emerald-500 text-white shadow-md"
                        : "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-sm"
                      : isDark
                      ? "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span>{t.calculator.volume[volKey]}</span>
                  {volume === volKey && <Check className="w-4 h-4 text-emerald-500 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Estimate Display Box */}
          <div
            className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left ${
              isDark
                ? "bg-slate-950 border-emerald-500/30"
                : "bg-emerald-50/60 border-emerald-200"
            }`}
          >
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {t.calculator.estimatedCost}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                {currentEstimate}
              </div>
              <p className={`text-[11px] mt-1 ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                {t.calculator.note}
              </p>
            </div>

            <button
              onClick={handleTransferToForm}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span>{t.calculator.sendToForm}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
