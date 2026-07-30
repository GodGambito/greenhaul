"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Menu, X, Globe, Sparkles, MessageSquare } from "lucide-react";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs py-2 px-4 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
              Seattle & Everett
            </span>
            <span>{t.topbar.serving}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-emerald-400 font-medium">
              ⚡ {t.topbar.availability}
            </span>
            
            {/* Language Selector */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-0.5">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  lang === "en"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🇺🇸 EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold transition-all ${
                  lang === "es"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                🇲🇽 ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500/60 shadow-md shadow-emerald-950 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.jpeg"
                  alt="GreenHaul Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  GREEN<span className="text-emerald-400">HAUL</span>
                </span>
                <span className="text-[10px] font-semibold text-emerald-400/90 tracking-widest uppercase">
                  Removal & Cleaning
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-slate-300">
              <a href="#services" className="hover:text-emerald-400 transition-colors">
                {t.nav.services}
              </a>
              <a href="#gallery" className="hover:text-emerald-400 transition-colors">
                {t.nav.gallery}
              </a>
              <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                {t.nav.calculator}
              </a>
              <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                {t.nav.whyUs}
              </a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">
                {t.nav.contact}
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:4252802915"
                className="flex items-center gap-2 text-slate-200 hover:text-emerald-400 font-semibold text-sm px-3 py-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>(425) 280-2915</span>
              </a>

              <a
                href="#contact"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-emerald-950 hover:shadow-emerald-900/50 transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.getQuote}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
            <nav className="flex flex-col space-y-3 pt-2 font-medium text-slate-200">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 py-1 border-b border-slate-800/50"
              >
                {t.nav.services}
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 py-1 border-b border-slate-800/50"
              >
                {t.nav.gallery}
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 py-1 border-b border-slate-800/50"
              >
                {t.nav.calculator}
              </a>
              <a
                href="#why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 py-1 border-b border-slate-800/50"
              >
                {t.nav.whyUs}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-emerald-400 py-1 border-b border-slate-800/50"
              >
                {t.nav.contact}
              </a>
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="tel:4252802915"
                className="flex items-center justify-center gap-2 bg-slate-800 text-white font-bold py-3 rounded-lg border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call (425) 280-2915</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-3 rounded-lg shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.nav.getQuote}</span>
              </a>

              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <span>Select Language:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLang("en")}
                    className={`px-3 py-1 rounded ${
                      lang === "en" ? "bg-emerald-600 text-white font-bold" : "bg-slate-800"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLang("es")}
                    className={`px-3 py-1 rounded ${
                      lang === "es" ? "bg-emerald-600 text-white font-bold" : "bg-slate-800"
                    }`}
                  >
                    Español
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
