import React from "react";
import {
  MapPin,
  Phone,
  ShieldCheck,
  Home,
  Building2,
  Hospital,
  Hotel,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ServiceAreasSectionProps {
  onOpenCallModal: () => void;
}

export const ServiceAreasSection: React.FC<ServiceAreasSectionProps> = ({
  onOpenCallModal,
}) => {
  const { language } = useLanguage();

  const serviceLocations = [
    {
      icon: Home,
      titleAm: "ቤቶች እና መኖሪያዎች",
      titleEn: "Homes & Residences",
      descriptionAm: "ለቤቶች እና ለመኖሪያ ቦታዎች የተባይ ቁጥጥር አገልግሎት።",
      descriptionEn:
        "Pest control services for homes and residential properties.",
    },
    {
      icon: Hotel,
      titleAm: "ሆቴሎች እና ፔንሲዮኖች",
      titleEn: "Hotels & Pensions",
      descriptionAm: "ለሆቴሎች፣ ፔንሲዮኖች እና የመስተንግዶ ቦታዎች ሕክምና።",
      descriptionEn:
        "Pest treatment for hotels, pensions, and hospitality facilities.",
    },
    {
      icon: Hospital,
      titleAm: "ሆስፒታሎች እና ክሊኒኮች",
      titleEn: "Hospitals & Clinics",
      descriptionAm: "ለሆስፒታሎች እና ለክሊኒኮች የተባይ ቁጥጥር እና ርጭት።",
      descriptionEn:
        "Pest control and spraying services for hospitals and clinics.",
    },
    {
      icon: Building2,
      titleAm: "ኩባንያዎች እና ተቋማት",
      titleEn: "Companies & Institutions",
      descriptionAm: "ለኩባንያዎች፣ ፋብሪካዎች፣ ዩኒቨርሲቲዎች እና ሌሎች ተቋማት።",
      descriptionEn:
        "For companies, factories, universities, and other institutions.",
    },
  ];

  return (
    <section
      className="py-16 bg-white border-t border-slate-100"
      id="service-areas-section"
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0f4a36] bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            <MapPin className="w-3.5 h-3.5" />

            {language === "am" ? "የአገልግሎት አካባቢ" : "Service Area"}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {language === "am"
              ? "በባሕር ዳር እና አካባቢዋ"
              : "Bahir Dar and Surrounding Areas"}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            {language === "am"
              ? "ለቤቶች፣ ሆቴሎች፣ ሆስፒታሎች፣ ኩባንያዎች እና ሌሎች ተቋማት የተባይ ቁጥጥር እና የኬሚካል ርጭት አገልግሎት እንሰጣለን።"
              : "We provide pest control and chemical spraying services for homes, hotels, hospitals, companies, and other facilities in Bahir Dar and surrounding areas."}
          </p>
        </div>

        {/* Service Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceLocations.map((location, index) => {
            const Icon = location.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8faf9] border border-slate-200 hover:border-emerald-700/30 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0f4a36]" />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {language === "am" ? location.titleAm : location.titleEn}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {language === "am"
                    ? location.descriptionAm
                    : location.descriptionEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Facilities */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#0f4a36]" />

                <h3 className="text-base font-bold text-slate-900">
                  {language === "am"
                    ? "ለተለያዩ የስራ እና የህዝብ ተቋማት"
                    : "For Various Commercial & Public Facilities"}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {language === "am"
                  ? "ሱቆች፣ የስራ ቦታዎች፣ የማምረቻ ቦታዎች፣ ዩኒቨርሲቲዎች እና ሌሎች ተቋማት ለሚፈልጉት የተባይ ቁጥጥር እና ርጭት አገልግሎት ያግኙን።"
                  : "We also provide pest control and spraying services for shops, workplaces, manufacturing facilities, universities, and other institutions."}
              </p>
            </div>

            <button
              onClick={onOpenCallModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 shrink-0"
            >
              <Phone className="w-4 h-4" />

              <span>{language === "am" ? "አሁን ይደውሉ" : "Call Now"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
