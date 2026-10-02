import React from "react";
import {
  Phone,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Home,
  Check,
} from "lucide-react";
import { PestService } from "../types";
import { PEST_SERVICES, COMPANY_PHONE_PRIMARY } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

interface ServiceDetailViewProps {
  service: PestService;
  onBack: () => void;
  onSelectService: (service: PestService) => void;
  onOpenCallModal: (serviceName?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBack,
  onSelectService,
  onOpenCallModal,
}) => {
  const { language, t } = useLanguage();

  const displayName = language === "am" ? service.nameAm : service.nameEn;

  const secondaryName = language === "am" ? service.nameEn : service.nameAm;

  const displayTagline =
    language === "am" ? service.taglineAm : service.taglineEn;

  const displayFullDesc =
    language === "am" ? service.fullDescriptionAm : service.fullDescriptionEn;

  const displayBadge = language === "am" ? service.badgeAm : service.badgeEn;

  const displaySigns =
    language === "am" ? service.commonSignsAm : service.commonSignsEn;

  const displayAreas =
    language === "am"
      ? service.targetAreasInHomeAm
      : service.targetAreasInHomeEn;

  const displayApproach =
    language === "am"
      ? service.treatmentApproachAm
      : service.treatmentApproachEn;

  const displayPrepTips =
    language === "am"
      ? service.homeownerPrepTipsAm
      : service.homeownerPrepTipsEn;

  const displaySafetyNotes =
    language === "am" ? service.safetyNotesAm : service.safetyNotesEn;

  return (
    <div className="bg-[#f8faf9] min-h-screen py-10" id="service-detail-view">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button and Other Services */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#0f4a36] hover:border-emerald-700/40 text-sm font-semibold transition-all shadow-2xs"
            id="back-to-services-btn"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{t.backToServices}</span>
          </button>

          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <span className="text-slate-400 font-medium mr-1">
              {language === "am" ? "ሌሎች አገልግሎቶች፦" : "Other services:"}
            </span>

            {PEST_SERVICES.filter((item) => item.id !== service.id)
              .slice(0, 3)
              .map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0f4a36] hover:bg-emerald-50 text-xs font-medium transition-colors"
                >
                  {language === "am" ? item.nameAm : item.nameEn}
                </button>
              ))}
          </div>
        </div>

        {/* Service Hero */}
        <div className="bg-[#0f4a36] text-white rounded-3xl overflow-hidden shadow-xl mb-10 border border-emerald-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />

                <span>
                  {language === "am"
                    ? "የተባይ ቁጥጥር አገልግሎት"
                    : "Pest Control Service"}
                </span>

                <span className="text-emerald-400">•</span>

                <span className="text-amber-300 font-bold">{displayBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {displayName}
              </h1>

              <div className="text-sm sm:text-base font-semibold text-emerald-200">
                {secondaryName}
              </div>

              <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
                {displayTagline}
              </p>

              <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-2xl">
                {language === "am"
                  ? "በባሕር ዳር እና አካባቢዋ ስለሚፈልጉት የተባይ ቁጥጥር እና ርጭት አገልግሎት በቀጥታ ያነጋግሩን።"
                  : "Contact us directly to discuss the pest control or spraying service you need in Bahir Dar and surrounding areas."}
              </p>

              {/* Call To Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onOpenCallModal(displayName)}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-base font-bold shadow-lg transition-all active:scale-95"
                  id="detail-call-btn"
                >
                  <Phone className="w-4 h-4" />

                  <span>{t.callUs}</span>
                </button>

                <a
                  href={`tel:${COMPANY_PHONE_PRIMARY.replace(/\s+/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 text-sm font-semibold transition-colors"
                  id="detail-phone-btn"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-emerald-300" />

                  <span>{COMPANY_PHONE_PRIMARY}</span>
                </a>
              </div>

              <div className="text-xs text-emerald-200/90 pt-1">
                {language === "am"
                  ? "ቀጥታ ስልክ ጥሪ በመጠቀም አገልግሎቱን ይጠይቁ።"
                  : "Call directly to discuss the service you need."}
              </div>
            </div>

            {/* Relevant Service Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-4/3">
                <img
                  src={service.image}
                  alt={`${displayName} - Bahir Dar pest control`}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium bg-black/50 backdrop-blur-xs p-2.5 rounded-xl">
                  {language === "am"
                    ? "የባለሙያ የተባይ ቁጥጥር እና ርጭት አገልግሎት"
                    : "Professional pest control and spraying service"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {language === "am"
                  ? "ስለ አገልግሎቱ አጠቃላይ ማብራሪያ"
                  : "Service Overview"}
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {displayFullDesc}
              </p>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {t.services.targetAreasTitle}:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {displayAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <Home className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />

                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Common Signs */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-amber-700">
                <AlertTriangle className="w-5 h-5 shrink-0" />

                <h2 className="text-xl font-bold text-slate-900">
                  {t.services.symptomsTitle}
                </h2>
              </div>

              <p className="text-sm text-slate-600">
                {language === "am"
                  ? "ከታች ከተጠቀሱት የተባይ መኖር ምልክቶች አንዱን ካዩ ለተጨማሪ ምክር በስልክ ያነጋግሩን፦"
                  : "If you notice any of the following signs, contact us by phone to discuss the pest problem:"}
              </p>

              <ul className="space-y-3">
                {displaySigns.map((sign, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      !
                    </span>

                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatment Approach */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {language === "am" ? "የአገልግሎት አቀራረብ" : "Our Treatment Approach"}
              </h2>

              <p className="text-sm text-slate-600">
                {language === "am"
                  ? "የአገልግሎቱ አቀራረብ በሚያስፈልገው የተባይ ቁጥጥር ላይ ተመስርቶ ይከናወናል፦"
                  : "The treatment approach is based on the pest problem and the area requiring service:"}
              </p>

              <div className="space-y-3 pt-2">
                {displayApproach.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8faf9] border border-slate-200"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#0f4a36] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>

                    <div className="text-sm font-medium text-slate-800 leading-snug">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-[#0f4a36]">
                <CheckCircle2 className="w-5 h-5 shrink-0" />

                <h2 className="text-xl font-bold text-slate-900">
                  {t.services.prepTipsTitle}
                </h2>
              </div>

              <p className="text-sm text-slate-600">
                {language === "am"
                  ? "አገልግሎቱ ከመጀመሩ በፊት ሊደረጉ የሚችሉ የቅድመ ዝግጅት እርምጃዎች፦"
                  : "Simple preparation steps that may help before the service begins:"}
              </p>

              <ul className="space-y-2.5">
                {displayPrepTips.map((tip, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />

                    <span>{tip}</span>
                  </li>
                ))}
              </ul>

              {/* Safety Notice */}
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
                <div className="font-bold flex items-center gap-1.5 mb-1 text-[#0f4a36]">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />

                  <span>{t.services.safetyNoticeTitle}:</span>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  {displaySafetyNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-2xl p-6 border-2 border-emerald-800/30 shadow-lg space-y-5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                {language === "am" ? "የአገልግሎት ጥያቄ" : "Service Request"}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {displayName}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {language === "am"
                    ? "ስለሚፈልጉት አገልግሎት በቀጥታ በስልክ ያነጋግሩን።"
                    : "Call us directly to discuss the service you need."}
                </p>
              </div>

              <button
                onClick={() => onOpenCallModal(displayName)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-sm shadow-md transition-all active:scale-98"
                id="sticky-call-btn"
              >
                <Phone className="w-4 h-4" />

                <span dir="ltr">
                  {t.callUs} ({COMPANY_PHONE_PRIMARY})
                </span>
              </button>

              <a
                href={`tel:${COMPANY_PHONE_PRIMARY.replace(/\s+/g, "")}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-[#0f4a36] font-semibold text-sm transition-all"
                id="direct-phone-btn"
                dir="ltr"
              >
                <Phone className="w-4 h-4" />

                <span>{COMPANY_PHONE_PRIMARY}</span>
              </a>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-3">
                <div className="flex items-start gap-2">
                  <Home className="w-3.5 h-3.5 text-[#0f4a36] shrink-0 mt-0.5" />

                  <span>
                    {language === "am"
                      ? "አገልግሎቱ በባሕር ዳር እና አካባቢዋ ይገኛል።"
                      : "Services are available in Bahir Dar and surrounding areas."}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0f4a36] shrink-0 mt-0.5" />

                  <span>
                    {language === "am"
                      ? "ስለሚፈልጉት የተባይ ቁጥጥር አገልግሎት በቀጥታ ይጠይቁን።"
                      : "Contact us directly to discuss the pest control service you need."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
