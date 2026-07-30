"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Share2,
} from "lucide-react";

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function ContactSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    details: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: t.contact.successMsg,
        });
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          location: "",
          details: "",
        });
      } else {
        throw new Error(data.error || "Server error");
      }
    } catch (err) {
      console.warn("API submission error, initiating mailto fallback:", err);

      const subject = encodeURIComponent(`Quote Request: ${formData.service || "General"} - ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nLocation: ${formData.location}\n\nDetails:\n${formData.details}`
      );
      window.location.href = `mailto:greenhaul.removal@gmail.com?subject=${subject}&body=${body}`;

      setStatus({
        loading: false,
        success: false,
        error: true,
        message: t.contact.errorMsg,
      });
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 relative transition-colors duration-300 ${
        isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span
            className={`font-extrabold text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border inline-block ${
              isDark
                ? "text-emerald-400 bg-emerald-950/80 border-emerald-800/50"
                : "text-emerald-700 bg-emerald-50 border-emerald-200"
            }`}
          >
            {t.contact.badge}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            {t.contact.title}
          </h2>
          <p className={`text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Card */}
          <div
            className={`lg:col-span-5 p-8 rounded-3xl border space-y-8 shadow-xl ${
              isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-md"
            }`}
          >
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                {t.contact.infoTitle}
              </h3>
              <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                Contact us directly via call, email, or social media for immediate response.
              </p>
            </div>

            {/* Direct Info List */}
            <div className="space-y-6 text-sm">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.contact.phoneLabel}
                  </span>
                  <a
                    href="tel:4252802915"
                    className={`text-lg font-bold transition-colors ${
                      isDark ? "text-white hover:text-emerald-400" : "text-slate-900 hover:text-emerald-600"
                    }`}
                  >
                    (425) 280-2915
                  </a>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">Call or Text Anytime</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.contact.emailLabel}
                  </span>
                  <a
                    href="mailto:greenhaul.removal@gmail.com"
                    className={`text-base font-bold transition-colors break-all ${
                      isDark ? "text-white hover:text-emerald-400" : "text-slate-900 hover:text-emerald-600"
                    }`}
                  >
                    greenhaul.removal@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours / Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.contact.hoursLabel}
                  </span>
                  <p className={`text-sm font-semibold mt-1 ${isDark ? "text-white" : "text-slate-900"}`}>
                    🗓️ {t.contact.hoursTextMonSat}
                  </p>
                  <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    🗓️ {t.contact.hoursTextSun}
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.contact.socialLabel}
                  </span>
                  <div className="flex flex-col gap-2 mt-2 font-medium text-sm">
                    <a
                      href="https://facebook.com/search/top?q=greenhaul%20removal"
                      target="_blank"
                      rel="noreferrer"
                      className={`transition-colors flex items-center gap-2 ${
                        isDark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"
                      }`}
                    >
                      <FacebookIcon className="w-4 h-4 text-blue-500" />
                      <span>Facebook: <strong>greenhaul removal</strong></span>
                    </a>
                    <a
                      href="https://instagram.com/greenhaul.removal"
                      target="_blank"
                      rel="noreferrer"
                      className={`transition-colors flex items-center gap-2 ${
                        isDark ? "text-slate-300 hover:text-emerald-400" : "text-slate-700 hover:text-emerald-600"
                      }`}
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-500" />
                      <span>Instagram: <strong>greenhaul.removal</strong></span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className={`flex items-start gap-4 border-t pt-6 ${isDark ? "border-slate-900" : "border-slate-200"}`}>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 border border-emerald-300 dark:border-emerald-700/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-semibold uppercase tracking-wider block ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t.contact.areaLabel}
                  </span>
                  <p className={`text-sm font-semibold mt-1 ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    {t.contact.areaText}
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="tel:4252802915"
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-3 px-4 rounded-xl text-center shadow transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/14252802915?text=Hello%20GreenHaul!"
                target="_blank"
                rel="noreferrer"
                className={`text-xs font-bold py-3 px-4 rounded-xl text-center border transition-all flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
                    : "bg-white hover:bg-slate-100 text-slate-900 border-slate-300 shadow-sm"
                }`}
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Quote Form */}
          <div
            className={`lg:col-span-7 p-8 sm:p-10 rounded-3xl border shadow-2xl ${
              isDark ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200 shadow-lg"
            }`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t.contact.formTitle}</h3>
            <p className={`text-sm mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{t.contact.formSubtitle}</p>

            {/* Notification Messages */}
            {status.success && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            {status.error && (
              <div className="mb-6 p-4 rounded-xl bg-amber-950/80 border border-amber-500/50 text-amber-200 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>{status.message}</span>
              </div>
            )}

            {/* Form Elements */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className={`w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className={`w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className={`w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                    Service *
                  </label>
                  <select
                    id="service-select"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                      isDark
                        ? "bg-slate-900 border-slate-800 text-white"
                        : "bg-white border-slate-300 text-slate-900"
                    }`}
                  >
                    <option value="">{t.contact.serviceSelect}</option>
                    <option value="Junk Removal & Hauling">Junk Removal & Hauling</option>
                    <option value="House Cleaning">House Cleaning</option>
                    <option value="Move-Out Cleaning">Move-Out Cleaning</option>
                    <option value="Pressure Washing">Pressure Washing</option>
                    <option value="Multiple / Combination Services">Multiple / Combination Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  City / ZIP Code *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={t.contact.locationPlaceholder}
                  className={`w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  Job Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder={t.contact.detailsPlaceholder}
                  className={`w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-y ${
                    isDark
                      ? "bg-slate-900 border-slate-800 text-white placeholder-slate-500"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-extrabold text-base py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{status.loading ? t.contact.submitting : t.contact.submitBtn}</span>
              </button>

              <p className="text-center text-[11px] text-slate-500">
                🔒 We respect your privacy. Your information is sent securely to GreenHaul Removal Services.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
