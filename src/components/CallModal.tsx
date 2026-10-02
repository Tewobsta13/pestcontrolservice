import React from "react";
import { Phone, X, MapPin, ShieldCheck } from "lucide-react";
import {
  COMPANY_PHONE_PRIMARY,
  COMPANY_PHONE_SECONDARY,
} from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceInterest?: string;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  serviceInterest,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-sm animate-fade-in"
      id="call-modal-overlay"
    >
      {" "}
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden relative"
        id="call-modal-content"
      >
        {/* Header */}{" "}
        <div className="bg-[#0f4a36] text-white p-6 relative">
          {" "}
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 text-emerald-100 hover:text-white p-1 rounded-full hover:bg-emerald-800/60 transition-colors"
            id="close-modal-btn"
          >
            {" "}
            <X className="w-5 h-5" />{" "}
          </button>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />

            <span>
              {language === "am"
                ? "በባሕር ዳር እና አካባቢዋ የሚሰጥ የተባይ ቁጥጥር አገልግሎት"
                : "Pest Control Services in Bahir Dar and Surrounding Areas"}
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {language === "am" ? "ያግኙን" : "Contact Us"}
          </h3>
          <p className="text-sm text-emerald-100/90 mt-1">
            {serviceInterest
              ? `${
                  language === "am" ? "ስለ አገልግሎቱ፡" : "Service:"
                } ${serviceInterest}`
              : language === "am"
                ? "ለተባይ ቁጥጥር እና የኬሚካል ርጭት አገልግሎት በቀጥታ ይደውሉልን።"
                : "Call us directly for pest control and chemical spraying services."}
          </p>
        </div>
        <div className="p-6 space-y-5">
          {/* Primary Phone */}
          <a
            href={`tel:${COMPANY_PHONE_PRIMARY.replace(/\s+/g, "")}`}
            className="flex items-center justify-between p-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white transition-all shadow-md group"
            id="modal-primary-phone-btn"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/20">
                <Phone className="w-5 h-5" />
              </div>

              <div>
                <div className="text-xs text-amber-100 font-medium">
                  {language === "am" ? "ዋና የስልክ መስመር" : "Primary Phone"}
                </div>

                <div className="text-lg font-bold tracking-wide" dir="ltr">
                  {COMPANY_PHONE_PRIMARY}
                </div>
              </div>
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1.5 rounded-md">
              {t.callUs}
            </span>
          </a>

          {/* Secondary Phone */}
          <a
            href={`tel:${COMPANY_PHONE_SECONDARY.replace(/\s+/g, "")}`}
            className="flex items-center justify-between p-3.5 rounded-xl border-2 border-emerald-900/20 hover:border-emerald-900/40 bg-emerald-50/40 text-slate-800 transition-all group"
            id="modal-secondary-phone-btn"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-100 text-[#0f4a36]">
                <Phone className="w-4 h-4" />
              </div>

              <div>
                <div className="text-xs text-slate-500">
                  {language === "am" ? "ተጨማሪ የስልክ መስመር" : "Secondary Phone"}
                </div>

                <div className="text-base font-semibold" dir="ltr">
                  {COMPANY_PHONE_SECONDARY}
                </div>
              </div>
            </div>

            <span className="text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded">
              {language === "am" ? "ይደውሉ" : "Call"}
            </span>
          </a>

          {/* Service Area */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />

            <div>
              <div className="text-sm font-bold text-slate-800">
                {language === "am" ? "የአገልግሎት ክልል" : "Service Area"}
              </div>

              <p className="text-xs text-slate-500 mt-1">
                {language === "am"
                  ? "ባሕር ዳር እና አካባቢዋ"
                  : "Bahir Dar and surrounding areas"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
