import React from "react";
import {
  PhoneCall,
  Bug,
  SprayCan,
  Sparkles,
  Check,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HowItWorksSectionProps {
  onOpenCallModal: () => void;
  isStandalonePage?: boolean;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenCallModal,
  isStandalonePage = false,
}) => {
  const { language, t } = useLanguage();

  const steps =
    language === "am"
      ? [
          {
            title: "ይደውሉልን",
            subtitle: "በቀጥታ ያግኙን",
            description: "ለተባይ ቁጥጥር ወይም ለኬሚካል ርጭት አገልግሎት በስልክ ያግኙን።",
            points: ["በቀጥታ በስልክ ይገናኙ", "የሚያስቸግርዎትን ችግር ይንገሩን"],
          },
          {
            title: "ችግሩን ይግለጹ",
            subtitle: "የተባይ አይነት ይንገሩን",
            description: "ነፍሳት፣ ጉንዳን፣ ሸረሪት፣ አይጥ፣ በረሮ፣ ምስጥ፣ ነቀዝ እና ሌሎችን ይንገሩን።",
            points: ["የተባይ አይነት", "የችግሩ አይነት"],
          },
          {
            title: "አገልግሎት ያግኙ",
            subtitle: "ተገቢው አገልግሎት",
            description: "በችግሩ መሠረት የተባይ ቁጥጥር እና የኬሚካል ርጭት አገልግሎት ይሰጣል።",
            points: ["የተባይ ቁጥጥር", "የኬሚካል ርጭት"],
          },
          {
            title: "ችግሩን ይቆጣጠሩ",
            subtitle: "ንጹህ እና ምቹ አካባቢ",
            description: "ለመኖሪያ ቤቶች እና ሌሎች ቦታዎች የተባይ ቁጥጥር አገልግሎት።",
            points: ["የተባይ ቁጥጥር አገልግሎት", "የተባይ መከላከያ"],
          },
        ]
      : [
          {
            title: "Call Us",
            subtitle: "Contact Us Directly",
            description:
              "Call us directly for pest control or chemical spraying services.",
            points: ["Speak directly by phone", "Tell us about the problem"],
          },
          {
            title: "Describe the Problem",
            subtitle: "Tell Us About the Pest",
            description:
              "Tell us about insects, ants, spiders, rodents, cockroaches, termites, bedbugs, or other problems.",
            points: ["Type of pest", "Type of problem"],
          },
          {
            title: "Get the Service",
            subtitle: "Appropriate Treatment",
            description:
              "We provide pest control and chemical spraying services based on the problem.",
            points: ["Pest control", "Chemical spraying"],
          },
          {
            title: "Control the Problem",
            subtitle: "A Cleaner Environment",
            description:
              "Professional pest control services for homes and other service locations.",
            points: ["Residential treatment", "Pest prevention"],
          },
        ];

  const stepIcons = [
    <PhoneCall key="1" className="w-6 h-6" />,
    <Bug key="2" className="w-6 h-6" />,
    <SprayCan key="3" className="w-6 h-6" />,
    <Sparkles key="4" className="w-6 h-6" />,
  ];

  return (
    <section
      className={`py-16 ${
        isStandalonePage ? "bg-[#f8faf9]" : "bg-slate-50"
      } border-y border-slate-200/70`}
      id="how-it-works-section"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f4a36] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            {t.howItWorks.badge}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === "am" ? "እንዴት እንረዳዎታለን?" : "How Our Service Works"}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            {language === "am"
              ? "በቀጥታ በስልክ ያግኙን፣ የተባይ ችግርዎን ይንገሩን እና ተገቢውን የተባይ ቁጥጥር አገልግሎት ያግኙ።"
              : "Call us directly, tell us about your pest problem, and get the appropriate pest control service."}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              id={`how-it-works-step-${idx + 1}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0f4a36] text-white flex items-center justify-center shadow-xs group-hover:bg-[#135d44] transition-colors shrink-0">
                  {stepIcons[idx]}
                </div>

                <span className="text-xs font-extrabold text-[#0f4a36] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  {language === "am" ? `ደረጃ 0${idx + 1}` : `Step 0${idx + 1}`}
                </span>
              </div>

              <div className="space-y-2 flex-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {step.title}
                </h3>

                <div className="text-xs font-semibold text-emerald-800">
                  {step.subtitle}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 mt-4">
                  {step.points.map((point, pointIndex) => (
                    <div
                      key={pointIndex}
                      className="flex items-start gap-2 text-xs text-slate-600"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-center">
                <span className="text-[11px] font-medium text-slate-500">
                  {idx === 0 &&
                    (language === "am" ? "በቀጥታ በስልክ ይደውሉ" : "Call us directly")}

                  {idx === 1 &&
                    (language === "am"
                      ? "የተባይ ችግርዎን ይንገሩን"
                      : "Describe your pest problem")}

                  {idx === 2 &&
                    (language === "am"
                      ? "ተገቢውን አገልግሎት ያግኙ"
                      : "Get the appropriate service")}

                  {idx === 3 &&
                    (language === "am"
                      ? "የተባይ ችግሩን ይቆጣጠሩ"
                      : "Control the pest problem")}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCallModal}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-base font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
            id="how-it-works-cta-btn"
          >
            <span>{language === "am" ? "አሁኑኑ ይደውሉ" : "Call Now"}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>

          <div className="text-xs text-slate-500 mt-2">
            {language === "am"
              ? "ምንም የመመዝገቢያ ወይም የመሙያ ቅጽ አያስፈልግም — በቀጥታ ይደውሉልን።"
              : "No registration or forms required — simply call us directly."}
          </div>
        </div>
      </div>
    </section>
  );
};
