"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Truck, Home, Sparkles, Droplets, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const { t } = useLanguage();

  const serviceIcons = {
    "junk-removal": Truck,
    "house-cleaning": Home,
    "move-out": Sparkles,
    "pressure-washing": Droplets,
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 inline-block">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
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
                className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all hover:-translate-y-1 shadow-lg hover:shadow-emerald-950/40 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Highlight Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-emerald-950/90 text-emerald-400 border border-emerald-700/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-emerald-400" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2 border-t border-slate-900 pt-4 mb-6">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Request Button */}
                <a
                  href="#contact"
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold text-xs py-3 px-4 rounded-lg border border-slate-800 hover:border-emerald-500 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Custom Combination CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-green-950 rounded-2xl p-8 border border-emerald-800/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">{t.services.cta}</h3>
            <p className="text-sm text-slate-300 mt-1">
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
