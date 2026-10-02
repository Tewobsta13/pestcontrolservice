import React from "react";
import {
  SearchCheck,
  Settings2,
  ShieldCheck,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface WhyChooseUsSectionProps {
  onOpenCallModal?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onOpenCallModal,
}) => {
  const { language, t } = useLanguage();

  const steps =
    language === "am"
      ? [
          {
            number: "01",
            icon: <SearchCheck className="w-5 h-5" />,
            title: "ችግሩን መለየት",
            text: "የተባይ ችግሩን እና ሁኔታውን በመጀመሪያ ለመረዳት እንጀምራለን።",
          },
          {
            number: "02",
            icon: <Settings2 className="w-5 h-5" />,
            title: "አቀራረብ መወሰን",
            text: "እንደ ችግሩ አይነት የሚፈለገውን የቁጥጥር ወይም የርጭት አገልግሎት እንወስናለን።",
          },
          {
            number: "03",
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "አገልግሎቱን መስጠት",
            text: "በቦታው ሁኔታ ላይ በማተኮር አገልግሎቱን በጥንቃቄ እንሰጣለን።",
          },
        ]
      : [
          {
            number: "01",
            icon: <SearchCheck className="w-5 h-5" />,
            title: "Identify the Problem",
            text: "We begin by understanding the pest problem and the situation.",
          },
          {
            number: "02",
            icon: <Settings2 className="w-5 h-5" />,
            title: "Choose the Approach",
            text: "The control or spraying service is determined according to the problem.",
          },
          {
            number: "03",
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Provide the Service",
            text: "We focus on the condition of the location while providing the service.",
          },
        ];

  return (
    <section className="py-20 bg-white" id="why-choose-us-section">
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}{" "}
        <div className="max-w-3xl mx-auto text-center mb-14">
          {" "}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f4a36] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200 mb-4">
            {t.whyChooseUs.badge}{" "}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.whyChooseUs.title}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {language === "am"
              ? "እያንዳንዱ የተባይ ችግር የራሱ የሆነ ሁኔታ አለው። ከችግሩ መለየት ጀምሮ እስከ አገልግሎቱ አሰጣጥ ድረስ በተደራጀ አቀራረብ እንሰራለን።"
              : "Every pest problem has its own situation. We follow a clear approach from understanding the problem to providing the service."}
          </p>
        </div>
        {/* Main Visual Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Large Statement Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-[#0b3b2c] p-8 sm:p-10 text-white min-h-[380px] flex flex-col justify-between">
            {/* Decorative shapes */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full border border-white/10" />
            <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full border border-white/10" />

            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-7">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>

              <p className="text-xs uppercase tracking-[0.18em] text-emerald-200/80 font-bold mb-4">
                {language === "am" ? "የአገልግሎት አቀራረባችን" : "OUR APPROACH"}
              </p>

              <h3 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                {language === "am"
                  ? "ችግሩን ይረዱ። ተገቢውን አቀራረብ ይምረጡ።"
                  : "Understand the problem. Choose the approach."}
              </h3>
            </div>

            <div className="relative mt-10">
              <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-md">
                {language === "am"
                  ? "የተባይ አይነት፣ የችግሩ ሁኔታ እና የቦታው ሁኔታ በአገልግሎቱ አቀራረብ ላይ ሊካተቱ ይችላሉ።"
                  : "The type of pest, the nature of the problem, and the service location can all be considered when determining the approach."}
              </p>

              <div className="mt-7 h-px bg-white/10" />

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-100">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                {language === "am"
                  ? "ተገቢውን መፍትሄ መፈለግ"
                  : "Finding the right solution"}
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="lg:col-span-7 bg-[#f8faf9] rounded-3xl border border-slate-200 p-7 sm:p-9">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] font-bold text-[#0f4a36]">
                  {language === "am" ? "ሂደቱ" : "THE PROCESS"}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {language === "am"
                    ? "ከችግር ወደ አገልግሎት"
                    : "From Problem to Service"}
                </h3>
              </div>

              <div className="hidden sm:flex w-11 h-11 rounded-full bg-white border border-slate-200 items-center justify-center">
                <ArrowRight className="w-5 h-5 text-[#0f4a36]" />
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex gap-4 sm:gap-5 p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-700/30 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#0f4a36] flex items-center justify-center group-hover:bg-[#0f4a36] group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-extrabold tracking-wider text-emerald-700">
                        {step.number}
                      </span>

                      <h4 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.text}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="absolute left-[35px] top-[76px] h-4 w-px bg-slate-200 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>

            {onOpenCallModal && (
              <div className="mt-7 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-slate-600">
                  {language === "am"
                    ? "ስለ ተባይ ችግርዎ በቀጥታ ያነጋግሩን።"
                    : "Talk to us directly about your pest problem."}
                </p>

                <button
                  onClick={onOpenCallModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0b3b2c] hover:bg-[#0f4a36] text-white text-sm font-bold shadow-sm transition-all active:scale-95"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.callUs}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
