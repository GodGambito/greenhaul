"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Leaf, Clock, DollarSign, Award, CheckCircle } from "lucide-react";

export default function WhyUs() {
  const { t } = useLanguage();

  const icons = [Leaf, Clock, DollarSign, Award];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-widest bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-800/50 inline-block">
            {t.whyUs.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.whyUs.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
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
                className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-emerald-700/50 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pt.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pt.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Availability Announcement Banner */}
        <div className="mt-16 bg-slate-950 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Full Availability Operating Schedule</h4>
              <p className="text-sm text-slate-300 mt-0.5">
                <strong className="text-emerald-400">Monday to Saturday:</strong> 24 Hours Available &bull;{" "}
                <strong className="text-emerald-400">Sunday:</strong> By Appointment
              </p>
            </div>
          </div>

          <a
            href="tel:4252802915"
            className="shrink-0 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-6 py-3 rounded-xl border border-slate-700 transition-all"
          >
            Call Dispatch (425) 280-2915
          </a>
        </div>

      </div>
    </section>
  );
}
