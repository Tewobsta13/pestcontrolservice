import React from "react";
import { Phone } from "lucide-react";
import { COMPANY_PHONE_PRIMARY } from "../data/servicesData";
import { useLanguage } from "../context/LanguageContext";

interface MobileQuickBarProps {
  onOpenCallModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenCallModal,
}) => {
  const { language } = useLanguage();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-3 shadow-2xl md:hidden"
      id="mobile-quick-action-bar"
    >
      {" "}
      <div className="max-w-md mx-auto">
        {" "}
        <button
          onClick={onOpenCallModal}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-[#d97706] active:bg-[#b45309] text-white text-sm sm:text-base font-extrabold shadow-md active:scale-95 transition-all"
          id="mobile-bottom-call-btn"
        >
          {" "}
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white/20 shrink-0" />
          <span>{language === "am" ? "አሁኑኑ ይደውሉ" : "Call Now"}</span>
          <span className="hidden sm:inline font-semibold opacity-90" dir="ltr">
            {COMPANY_PHONE_PRIMARY}
          </span>
        </button>
      </div>
    </div>
  );
};
