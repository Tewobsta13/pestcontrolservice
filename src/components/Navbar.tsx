import React, { useState } from "react";
import { Phone, Shield, Menu, X, ChevronRight, Globe } from "lucide-react";
import { PageView } from "../types";
import { COMPANY_PHONE_PRIMARY } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenCallModal: (serviceInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenCallModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems: { id: PageView; label: string }[] = [
    { id: "home", label: t.nav.home },
    { id: "services", label: t.nav.services },
    { id: "how-it-works", label: t.nav.howItWorks },
    { id: "about", label: t.nav.about },
    { id: "contact", label: t.nav.contact },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
      id="site-header"
    >
      {/* Top Utility Bar */}{" "}
      <div className="bg-[#0b3b2c] text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900">
        {" "}
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

              {language === "am"
                ? "በባሕር ዳር እና አካባቢዋ የተባይ ቁጥጥር አገልግሎት"
                : "Pest Control Services in Bahir Dar and Surrounding Areas"}
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Language Switcher */}
            <div className="inline-flex items-center bg-emerald-950/80 rounded-full p-0.5 border border-emerald-700/80 text-xs shadow-inner">
              <button
                onClick={() => setLanguage("am")}
                className={`px-2.5 py-1 rounded-full font-bold transition-all ${
                  language === "am"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-emerald-300 hover:text-white"
                }`}
                title="አማርኛ ይምረጡ"
              >
                አማርኛ
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full font-semibold transition-all ${
                  language === "en"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-emerald-300 hover:text-white"
                }`}
                title="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Direct Phone */}
            <a
              href={`tel:${COMPANY_PHONE_PRIMARY.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-300 font-bold transition-colors"
              title="Call us"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_PHONE_PRIMARY}</span>
            </a>
          </div>
        </div>
      </div>
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Business Logo / Name */}
          <button
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 text-left group focus:outline-none min-w-0"
            id="brand-logo-btn"
          >
            <div className="w-11 h-11 rounded-xl bg-[#0f4a36] flex items-center justify-center text-white shadow-sm ring-2 ring-emerald-600/20 group-hover:bg-[#135d44] transition-all shrink-0">
              <Shield className="w-6 h-6 text-emerald-300 fill-emerald-400/20" />
            </div>

            <div className="min-w-0">
              <div className="text-base sm:text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {language === "am"
                  ? "ባሕር ዳር ጸረ ተባይ ርጭት እና ማእጠንት"
                  : "Bahirdar Pest Control"}
              </div>

              <p className="text-xs text-slate-500 font-medium tracking-normal mt-0.5">
                {language === "am"
                  ? "የተባይ ቁጥጥር እና የኬሚካል ርጭት"
                  : "Pest Control & Chemical Spraying"}
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  currentPage === item.id
                    ? "text-[#0f4a36] bg-emerald-50 font-bold border-b-2 border-emerald-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenCallModal()}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
              id="nav-call-now-btn"
            >
              <Phone className="w-4 h-4 fill-white/20" />
              <span>{t.callUs}</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenCallModal()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d97706] text-white text-xs font-bold shadow-xs active:scale-95"
              id="mobile-header-call-btn"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.callUs}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              id="mobile-hamburger-btn"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t border-slate-200 bg-white shadow-xl animate-fade-in"
          id="mobile-menu-drawer"
        >
          <div className="px-4 pt-3 pb-6 space-y-2">
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl mb-3 border border-slate-200">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>
                  {language === "am" ? "ቋንቋ ይምረጡ" : "Choose Language"}
                </span>
              </span>

              <div className="inline-flex items-center bg-white rounded-lg p-0.5 border border-slate-300 text-xs shadow-xs">
                <button
                  onClick={() => setLanguage("am")}
                  className={`px-3 py-1 rounded-md font-bold transition-all ${
                    language === "am"
                      ? "bg-[#0f4a36] text-white"
                      : "text-slate-600"
                  }`}
                >
                  አማርኛ
                </button>

                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-md font-semibold transition-all ${
                    language === "en"
                      ? "bg-[#0f4a36] text-white"
                      : "text-slate-600"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition-all ${
                  currentPage === item.id
                    ? "bg-emerald-50 text-[#0f4a36] font-bold border border-emerald-200/60"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallModal();
                }}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#d97706] text-white font-bold text-base shadow-md"
                id="mobile-drawer-call-btn"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">
                  {t.callUs}: {COMPANY_PHONE_PRIMARY}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
