import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  ShieldCheck,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  COMPANY_PHONE_PRIMARY,
  COMPANY_PHONE_SECONDARY,
  COMPANY_EMAIL,
} from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

interface ContactSectionProps {
  onOpenCallModal: () => void;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenCallModal,
  isStandalonePage = false,
}) => {
  const { language, t } = useLanguage();

  const primaryPhone = COMPANY_PHONE_PRIMARY.replace(/\s+/g, "");
  const secondaryPhone = COMPANY_PHONE_SECONDARY.replace(/\s+/g, "");
  const whatsappNumber = primaryPhone.replace("+", "");

  return (
    <section
      className={`py-16 sm:py-20 ${
        isStandalonePage
          ? "bg-[#f8faf9]"
          : "bg-gradient-to-b from-white via-slate-50 to-[#0b3b2c]/5"
      } border-t border-slate-200/80`}
      id="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f4a36]/10 text-[#0f4a36] text-xs sm:text-sm font-bold border border-[#0f4a36]/20">
            <ShieldCheck className="w-4 h-4 text-[#0f4a36] shrink-0" />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>

          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            {language === "am"
              ? "ለተባይ ቁጥጥር እና ለኬሚካል ርጭት አገልግሎት በስልክ፣ በWhatsApp ወይም በTelegram ያግኙን።"
              : "Contact us by phone, WhatsApp, or Telegram for pest control and chemical spraying services."}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0f4a36] text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-amber-300" />
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {language === "am" ? "በስልክ ያግኙን" : "Call Us"}
                </h3>

                <p className="text-sm text-emerald-200">
                  {language === "am" ? "በቀጥታ ይደውሉልን" : "Contact us directly"}
                </p>
              </div>
            </div>

            {/* Primary Phone */}
            <a
              href={`tel:${primaryPhone}`}
              className="block p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors mb-3"
              dir="ltr"
            >
              <div className="text-xs text-emerald-200 mb-1">
                {language === "am" ? "ዋና የስልክ ቁጥር" : "Primary Phone"}
              </div>

              <div className="text-xl sm:text-2xl font-bold text-white">
                {COMPANY_PHONE_PRIMARY}
              </div>
            </a>

            {/* Secondary Phone */}
            <a
              href={`tel:${secondaryPhone}`}
              className="block p-4 rounded-2xl bg-white/10 hover:bg-white/15 transition-colors"
              dir="ltr"
            >
              <div className="text-xs text-emerald-200 mb-1">
                {language === "am" ? "ተጨማሪ የስልክ ቁጥር" : "Secondary Phone"}
              </div>

              <div className="text-lg sm:text-xl font-bold text-white">
                {COMPANY_PHONE_SECONDARY}
              </div>
            </a>

            {/* Call Button */}
            <button
              onClick={onOpenCallModal}
              className="w-full mt-5 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-base font-bold shadow-md transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" />

              <span>{language === "am" ? "አሁኑኑ ይደውሉ" : "Call Now"}</span>
            </button>

            {/* WhatsApp & Telegram */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-green-600 hover:bg-green-500 text-white text-sm font-bold transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tg://resolve?phone=${whatsappNumber}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              {language === "am" ? "የመገኛ መረጃ" : "Contact Information"}
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0f4a36] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {t.contact.emailLabel}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-slate-800 break-all">
                    {COMPANY_EMAIL}
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0f4a36] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {language === "am" ? "አድራሻ" : "Address"}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
                    {language === "am"
                      ? "ቀበሌ 14፣ ቻይና ካምፕ፣ ፊት ለፊት ሰንደቅ የገበያ ማዕከል፣ ቢሮ ቁጥር 04"
                      : "Kebele 14, China Camp, infront of Sendek Shopping Center, Office No. 04"}
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#0f4a36] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {language === "am" ? "የአገልግሎት ክልል" : "Service Area"}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-slate-800">
                    {language === "am"
                      ? "ባሕር ዳር እና አካባቢዋ"
                      : "Bahir Dar and surrounding areas"}
                  </div>
                </div>
              </div>

              {/* Service Description */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
                <p className="text-sm text-emerald-900 leading-relaxed">
                  {language === "am"
                    ? "የተባይ ቁጥጥር፣ የኬሚካል ርጭት፣ የአይጥ ቁጥጥር እና ሌሎች ለቤቶች፣ ሆቴሎች፣ ሆስፒታሎች፣ ድርጅቶች እና ሌሎች ተቋማት የሚሰጡ የተባይ ቁጥጥር አገልግሎቶች።"
                    : "Pest control, chemical spraying, rat and rodent control, and other pest control services for homes, hotels, hospitals, companies, and other institutions."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
