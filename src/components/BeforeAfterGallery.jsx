"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { PHONE_DISPLAY } from "@/lib/config";
import { Maximize2, X, Sparkles, CheckCircle, Phone } from "lucide-react";

export default function BeforeAfterGallery() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [filter, setFilter] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const galleryItems = t.gallery.items;

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  return (
    <section
      id="gallery"
      className={`py-20 relative transition-colors duration-300 ${isDark ? "bg-slate-950 text-white" : "bg-slate-50 text-slate-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span
            className={`font-extrabold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border inline-block ${isDark
              ? "text-emerald-400 bg-emerald-950/80 border-emerald-800/50"
              : "text-emerald-700 bg-emerald-100 border-emerald-300"
              }`}
          >
            {t.gallery.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.gallery.title}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {[
            { id: "all", label: t.gallery.all },
            { id: "yard", label: t.gallery.yard },
            { id: "cleaning", label: t.gallery.cleaning },
            { id: "hauling", label: t.gallery.hauling },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${filter === btn.id
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/30"
                : isDark
                  ? "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-300 shadow-sm"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={`rounded-2xl overflow-hidden border transition-all cursor-pointer group shadow-xl ${isDark
                ? "bg-slate-900 border-slate-800 hover:border-emerald-500/50 hover:shadow-emerald-950/40"
                : "bg-white border-slate-200 hover:border-emerald-400 shadow-md hover:shadow-lg"
                }`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-emerald-950/90 text-emerald-300 text-xs font-bold px-3 py-1 rounded-md border border-emerald-700/50 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real Work Photo</span>
                </div>

                {/* Zoom Icon Overlay */}
                <div className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-5 h-5" />
                </div>

                {/* Phone Text Overlay over image (bottom right) */}
                <div className="absolute bottom-1 right-2 sm:bottom-4 sm:right-4 z-20 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-black px-3 py-1.5 rounded-lg border border-emerald-400/60 shadow-xl flex items-center gap-1.5 pointer-events-none">
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>{PHONE_DISPLAY}</span>
                </div>

                {/* Bottom Overlay Title & Description */}
                <div className="absolute bottom-4 left-4 right-36 text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={`text-center text-xs mt-8 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          🔍 {t.gallery.clickToZoom}
        </p>

      </div>

      {/* Lightbox Zoom Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className={`relative max-w-4xl w-full rounded-2xl overflow-hidden border shadow-2xl flex flex-col max-h-[90vh] ${isDark ? "bg-slate-900 border-slate-700" : "bg-slate-900 border-slate-800 text-white"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">{activeModalItem.title}</h3>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image View */}
            <div className="relative w-full aspect-[4/3] max-h-[60vh] bg-black overflow-hidden flex items-center justify-center shrink min-h-0">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
              {/* Phone Overlay over zoomed photo - Bottom Right */}
              <div className="absolute sm:bottom-5 bottom-1 right-8 sm:right-48 z-30 text-white font-black text-sm sm:text-2xl px-2 py-2 pointer-events-none whitespace-nowrap drop-shadow-md">

                <span>{PHONE_DISPLAY}</span>
              </div>
            </div>

            {/* Modal Footer Details */}
            <div className="p-6 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <div>
                <p className="text-sm text-slate-300">{activeModalItem.desc}</p>
                <p className="text-xs text-emerald-400 font-semibold mt-1">
                  📞 Call {PHONE_DISPLAY} for similar results at your location
                </p>
              </div>

              <a
                href="#contact"
                onClick={() => setActiveModalItem(null)}
                className="shrink-0 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all"
              >
                Get Quote For This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
