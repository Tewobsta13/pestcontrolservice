import React from "react";
import {
  Shield,
  Phone,
  MapPin,
  Globe,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { PageView, PestService } from "../types";
import {
  COMPANY_PHONE_PRIMARY,
  COMPANY_PHONE_SECONDARY,
  COMPANY_EMAIL,
  PEST_SERVICES,
} from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectService: (service: PestService) => void;
  onOpenCallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectService,
  onOpenCallModal,
}) => {
  const currentYear = new Date().getFullYear();
  const { language, setLanguage, t } = useLanguage();

  const primaryPhone = COMPANY_PHONE_PRIMARY.replace(/\s+/g, "");
  const secondaryPhone = COMPANY_PHONE_SECONDARY.replace(/\s+/g, "");
  const whatsappNumber = primaryPhone.replace("+", "");

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleServiceClick = (service: PestService) => {
    onSelectService(service);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#0b291e] text-slate-300 border-t border-emerald-950"
      id="main-footer"
    >
      {/* Quick Call Banner */}
      <div className="bg-[#061d15] py-6 px-4 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>

            <div>
              <div className="text-white font-bold text-sm sm:text-base">
                {language === "am"
                  ? "የተባይ ቁጥጥር አገልግሎት ይፈልጋሉ?"
                  : "Need professional pest control service?"}
              </div>

              <div className="text-xs text-emerald-300" dir="ltr">
                {language === "am" ? "የስልክ ቁጥር፦" : "Phone:"}{" "}
                <strong className="text-white">{COMPANY_PHONE_PRIMARY}</strong>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenCallModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 shrink-0"
            id="footer-strip-call-btn"
          >
            <Phone className="w-4 h-4" />

            <span>{t.callUs}</span>
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0f4a36] flex items-center justify-center text-white ring-2 ring-emerald-600/30 shrink-0">
                <Shield className="w-5 h-5 text-emerald-300" />
              </div>

              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  {language === "am"
                    ? "ባሕር ዳር ጸረ ተባይ ርጭት እና ማህጥንት"
                    : "Bahirdar Tseretebay Ercht Ena Mahitent"}
                </span>

                <span className="text-xs block text-emerald-400 font-medium">
                  {language === "am"
                    ? "የተባይ ቁጥጥር እና የኬሚካል ርጭት"
                    : "Pest Control & Chemical Spraying"}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-sm">
              {language === "am"
                ? "በባሕር ዳር እና አካባቢዋ ለቤቶች፣ ሆቴሎች፣ ሆስፒታሎች፣ ድርጅቶች እና ሌሎች ተቋማት የባለሙያ የተባይ ቁጥጥር እና የኬሚካል ርጭት አገልግሎት እንሰጣለን።"
                : "Professional pest control and chemical spraying services for homes, hotels, hospitals, companies, and other institutions in Bahir Dar and surrounding areas."}
            </p>

            {/* Language Switcher */}
            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" />

                <span>{language === "am" ? "ቋንቋ፦" : "Language:"}</span>
              </span>

              <div className="inline-flex rounded-lg bg-emerald-950 p-0.5 border border-emerald-800 text-xs">
                <button
                  onClick={() => setLanguage("am")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    language === "am"
                      ? "bg-emerald-700 text-white font-bold"
                      : "text-emerald-300 hover:text-white"
                  }`}
                >
                  አማርኛ
                </button>

                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    language === "en"
                      ? "bg-emerald-700 text-white font-bold"
                      : "text-emerald-300 hover:text-white"
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "am" ? "ገጾች" : "Navigation"}
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNav("home")}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  {t.nav.home}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav("services")}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  {t.nav.services}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav("how-it-works")}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  {t.nav.howItWorks}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav("about")}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNav("contact")}
                  className="hover:text-emerald-300 transition-colors text-left"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "am"
                ? "የተባይ ቁጥጥር አገልግሎቶች"
                : "Pest Control Services"}
            </h4>

            <ul className="space-y-2 text-xs sm:text-sm">
              {PEST_SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleServiceClick(service)}
                    className="hover:text-emerald-300 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="text-emerald-500 text-xs">›</span>

                    <span>
                      {language === "am" ? service.nameAm : service.nameEn}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 space-y-3.5 text-left text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === "am" ? "ያግኙን" : "Contact Us"}
            </h4>

            <div className="space-y-3">
              {/* Primary Phone */}
              <a
                href={`tel:${primaryPhone}`}
                className="flex items-center gap-2.5 text-white hover:text-amber-400 font-bold"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_PHONE_PRIMARY}</span>
              </a>

              {/* Secondary Phone */}
              <a
                href={`tel:${secondaryPhone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_PHONE_SECONDARY}</span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-start gap-2.5 text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                <span className="break-all">{COMPANY_EMAIL}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-2.5 text-slate-300 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                <span className="leading-relaxed">
                  {language === "am"
                    ? "ቀበሌ 14፣ ቻይና ካምፕ፣ ፊት ለፊት ሰንደቅ የገበያ ማዕከል፣ ቢሮ ቁጥር 04"
                    : "Kebele 14, China Camp, infront of Sendek Shopping Center, Office No. 04"}
                </span>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-2.5 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />

                <span>
                  {language === "am"
                    ? "ባሕር ዳር እና አካባቢዋ"
                    : "Bahir Dar and surrounding areas"}
                </span>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* Telegram */}
              <a
                href={`tg://resolve?phone=${whatsappNumber}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Send className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-900/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear}{" "}
            {language === "am"
              ? "ባሕር ዳር ጸረ ተባይ ርጭት እና ማህጥንት።"
              : "Bahirdar Tseretebay Ercht Ena Mahitent."}
          </div>

          <div className="text-center">
            {language === "am"
              ? "ባሕር ዳር እና አካባቢዋ"
              : "Bahir Dar and surrounding areas"}
          </div>
        </div>
      </div>
    </footer>
  );
};
