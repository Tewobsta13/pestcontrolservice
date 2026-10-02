import React from "react";
import { Heart, ArrowRight, Phone, ShieldCheck, Target } from "lucide-react";
import { PageView } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface AboutUsSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenCallModal: () => void;
  isStandalonePage?: boolean;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({
  onNavigate,
  onOpenCallModal,
  isStandalonePage = false,
}) => {
  const { language, t } = useLanguage();

  return (
    <section
      className={`py-16 ${isStandalonePage ? "bg-[#f8faf9]" : "bg-slate-50"}`}
      id="about-us-section"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}{" "}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          {" "}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f4a36] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            {t.about.badge}{" "}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.about.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* About Story */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#0f4a36]" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {t.about.storyTitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.about.storyParagraph1}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.about.storyParagraph2}
              </p>

              {/* Values */}
              <div className="pt-5 border-t border-slate-100">
                <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{t.about.valuesTitle}</span>
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {t.about.valuesText}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 mt-8 border-t border-slate-100 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0f4a36] hover:bg-[#135d44] text-white text-sm font-bold shadow-sm transition-all active:scale-95"
                id="about-contact-btn"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCallModal}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#d97706] hover:text-[#b45309] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{t.callUs}</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {/* Different Control Approaches */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#0f4a36]" />
                </div>

                <h4 className="text-lg font-bold text-slate-900">
                  {language === "am"
                    ? "የተለያዩ የቁጥጥር አማራጮች"
                    : "Different Control Approaches"}
                </h4>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {language === "am"
                  ? "የተባይ አይነቱን፣ የችግሩን ሁኔታ እና የሚፈለገውን አገልግሎት በመመልከት ተገቢውን የቁጥጥር ወይም የኬሚካል ርጭት አቀራረብ እንመርጣለን።"
                  : "The control approach can vary depending on the type of pest, the nature of the problem, and the service required."}
              </p>

              <div className="mt-6 space-y-3">
                {[
                  language === "am"
                    ? "የችግሩን አይነት መለየት"
                    : "Identify the pest problem",
                  language === "am"
                    ? "ተገቢውን የቁጥጥር አቀራረብ መወሰን"
                    : "Determine the appropriate control approach",
                  language === "am"
                    ? "የርጭት አገልግሎት ሲያስፈልግ መተግበር"
                    : "Apply spraying when required",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Philosophy */}
            <div className="bg-[#0b3b2c] text-white rounded-3xl p-7 sm:p-8 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-amber-400" />
                </div>

                <h4 className="text-lg font-bold">
                  {language === "am" ? "የአገልግሎት አቀራረባችን" : "Our Approach"}
                </h4>
              </div>

              <p className="text-sm text-emerald-100/90 leading-relaxed">
                {language === "am"
                  ? "የተባይ ችግሩን በመረዳት ተገቢውን የቁጥጥር እና የርጭት አገልግሎት ለመስጠት እንተጋለን።"
                  : "We focus on understanding the pest problem and providing an appropriate control and spraying service."}
              </p>

              <button
                onClick={onOpenCallModal}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0b3b2c] hover:bg-emerald-50 text-sm font-bold transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{language === "am" ? "አሁኑኑ ይደውሉ" : "Call Now"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
