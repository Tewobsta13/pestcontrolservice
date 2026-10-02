import React from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { PEST_SERVICES } from "../data/servicesData";
import { PestService } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface ServicesSectionProps {
  onSelectService: (service: PestService) => void;
  onOpenCallModal: (serviceName?: string) => void;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenCallModal,
  isStandalonePage = false,
}) => {
  const { language, t } = useLanguage();

  return (
    <section
      className={`py-16 ${isStandalonePage ? "bg-[#f8faf9]" : "bg-white"}`}
      id="services-section"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}{" "}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          {" "}
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f4a36] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            {t.services.badge}{" "}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {PEST_SERVICES.map((service, index) => {
            const displayName =
              language === "am" ? service.nameAm : service.nameEn;

            const secondaryName =
              language === "am" ? service.nameEn : service.nameAm;

            const displayTagline =
              language === "am" ? service.taglineAm : service.taglineEn;

            const displayShortDesc =
              language === "am"
                ? service.shortDescriptionAm
                : service.shortDescriptionEn;

            return (
              <article
                key={service.id}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                id={`service-card-${service.id}`}
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={`${displayName} - Bahir Dar pest control service`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Service Number */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-xs font-extrabold text-[#0f4a36] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Image Text */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="text-xs font-semibold text-emerald-200 uppercase tracking-wider mb-1">
                      {displayTagline}
                    </p>

                    <h3 className="text-lg font-extrabold text-white leading-tight">
                      {displayName}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-emerald-700 mb-2">
                      {secondaryName}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {displayShortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-[#0f4a36] text-slate-700 text-sm font-bold transition-all"
                      id={`btn-learn-more-${service.id}`}
                    >
                      <span>{t.learnMore}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onOpenCallModal(displayName)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0f4a36] hover:bg-[#135d44] text-white text-sm font-bold shadow-sm transition-all active:scale-95"
                      id={`btn-call-service-${service.id}`}
                    >
                      <Phone className="w-4 h-4" />
                      <span>{t.callUs}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-[#0b3b2c] px-6 py-8 sm:px-10 sm:py-9 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-emerald-200 text-sm font-semibold mb-1">
              {language === "am" ? "የተባይ ችግር አለዎት?" : "Have a pest problem?"}
            </p>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {language === "am"
                ? "ለአገልግሎት ቀጥታ ይደውሉልን"
                : "Contact us directly for pest control service"}
            </h3>
          </div>

          <button
            onClick={() => onOpenCallModal()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0b3b2c] hover:bg-emerald-50 text-sm font-bold transition-all active:scale-95 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>{t.callUs}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
