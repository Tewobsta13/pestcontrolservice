import React from "react";
import {
  Bug,
  ShieldCheck,
  Building2,
  PhoneCall,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface TrustIntroSectionProps {
  onOpenCallModal: () => void;
}

export const TrustIntroSection: React.FC<TrustIntroSectionProps> = ({
  onOpenCallModal,
}) => {
  const { language, t } = useLanguage();

  const isAmharic = language === "am";

  const serviceCards = [
    {
      icon: Bug,
      number: "01",
      title: isAmharic ? "የተባይ ቁጥጥር" : "Pest Control",
      description: isAmharic
        ? "የበረሮ፣ የአልጋ ትኋን፣ የምስጥ፣ የጉንዳን፣ የአይጥ፣ የሸረሪት እና ሌሎች ተባዮችን ለመቆጣጠር አገልግሎት።"
        : "Pest control for cockroaches, bed bugs, termites, ants, rats, spiders, and other common pest problems.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: isAmharic ? "የኬሚካል ርጭት" : "Chemical Spraying",
      description: isAmharic
        ? "ለተለያዩ የተባይ ችግሮች የኬሚካል ርጭት አገልግሎት።"
        : "Chemical spraying services for different pest-control needs.",
    },
    {
      icon: Building2,
      number: "03",
      title: isAmharic ? "ለቤቶች እና ተቋማት" : "Homes & Institutions",
      description: isAmharic
        ? "ቤቶችን፣ ሆቴሎችን፣ ፔንሲዮኖችን፣ ሆስፒታሎችን፣ ክሊኒኮችን፣ መደብሮችን፣ ፋብሪካዎችን፣ ዩኒቨርሲቲዎችን፣ ኩባንያዎችን እና ሌሎች ተቋማትን እናገለግላለን።"
        : "Services for homes, hotels, pensions, hospitals, clinics, shops, factories, universities, companies, and other institutions.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24"
      id="trust-intro-section"
    >
      {/* Decorative background */}{" "}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />{" "}
      <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main introduction */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0f4a36] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#d97706]" />
              {t.trustIntro.badge}
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.1]">
              {isAmharic
                ? "ለተባይ ችግርዎ ተገቢውን የቁጥጥር አገልግሎት ያግኙ"
                : "Practical Solutions for Your Pest Problems"}
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="text-base sm:text-lg leading-relaxed text-slate-600">
              {isAmharic
                ? "በባሕር ዳር እና አካባቢዋ ለመኖሪያ ቤቶች፣ ሆቴሎች፣ ፔንሲዮኖች፣ ሆስፒታሎች፣ ክሊኒኮች፣ መደብሮች፣ ፋብሪካዎች፣ ዩኒቨርሲቲዎች፣ ኩባንያዎች እና ሌሎች ተቋማት የተባይ ቁጥጥር እና የኬሚካል ርጭት አገልግሎት እንሰጣለን።"
                : "We provide pest control and chemical spraying services in Bahir Dar and surrounding areas for homes, hotels, pensions, hospitals, clinics, shops, factories, universities, companies, and other institutions."}
            </p>

            <div className="flex items-center gap-2 mt-5 text-sm font-semibold text-[#0f4a36]">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isAmharic
                  ? "በባሕር ዳር እና አካባቢዋ"
                  : "Bahir Dar & Surrounding Areas"}
              </span>
            </div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                {/* Number */}
                <div className="absolute top-5 right-6 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-emerald-50">
                  {card.number}
                </div>

                {/* Icon */}
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-[#0f4a36] border border-emerald-100 transition-all duration-300 group-hover:bg-[#0f4a36] group-hover:text-white group-hover:scale-105">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="relative mt-6">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {card.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#0f4a36]">
                    <span className="w-5 h-px bg-[#d97706]" />
                    {isAmharic ? "አገልግሎት" : "Service"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-8 overflow-hidden rounded-3xl bg-[#0b3b2c] px-6 py-7 sm:px-8 sm:py-8 shadow-lg">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-emerald-400/10 blur-2xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                {isAmharic ? "ቀጥታ ግንኙነት" : "Direct Contact"}
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-extrabold text-white">
                {isAmharic
                  ? "የተባይ ቁጥጥር አገልግሎት ይፈልጋሉ?"
                  : "Need Pest Control Service?"}
              </h3>

              <p className="mt-1.5 text-sm text-emerald-100/80">
                {isAmharic
                  ? "ስለሚፈልጉት አገልግሎት በቀጥታ ይደውሉልን።"
                  : "Call us directly to ask about the service you need."}
              </p>
            </div>

            <button
              onClick={onOpenCallModal}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#d97706] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#b45309] hover:shadow-lg active:scale-95"
              id="trust-section-call-btn"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.callUs}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
