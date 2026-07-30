"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Calculator, ArrowRight, Check } from "lucide-react";

export default function EstimateCalculator() {
  const { t } = useLanguage();
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
    <section id="calculator" className="py-20 bg-slate-950 text-white relative border-t border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 inline-block">
            {t.calculator.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.calculator.title}
          </h2>
          <p className="text-slate-400 text-base">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Panel */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
          
          {/* Step 1: Select Service */}
          <div>
            <label className="block text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">
              {t.calculator.step1}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {Object.keys(t.calculator.services).map((key) => (
                <button
                  key={key}
                  onClick={() => setService(key)}
                  className={`p-4 rounded-xl text-left border transition-all text-xs font-bold flex items-center justify-between ${
                    service === key
                      ? "bg-emerald-950/90 border-emerald-500 text-white shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span>{t.calculator.services[key]}</span>
                  {service === key && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Volume */}
          <div>
            <label className="block text-sm font-bold text-emerald-400 uppercase tracking-wider mb-4">
              {t.calculator.step2}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["small", "medium", "large"].map((volKey) => (
                <button
                  key={volKey}
                  onClick={() => setVolume(volKey)}
                  className={`p-4 rounded-xl text-left border transition-all text-xs font-semibold flex items-center justify-between ${
                    volume === volKey
                      ? "bg-emerald-950/90 border-emerald-500 text-white shadow-md"
                      : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                  }`}
                >
                  <span>{t.calculator.volume[volKey]}</span>
                  {volume === volKey && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Estimate Display Box */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {t.calculator.estimatedCost}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                {currentEstimate}
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
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
