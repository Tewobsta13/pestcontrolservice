import React from "react";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { COMPANY_PHONE_PRIMARY } from "../data/servicesData";
import { PageView } from "../types";
import { useLanguage } from "../context/LanguageContext";

interface HeroSectionProps {
  onOpenCallModal: () => void;
  onNavigate: (page: PageView) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCallModal,
  onNavigate,
}) => {
  const { language } = useLanguage();

  const primaryPhone = COMPANY_PHONE_PRIMARY.replace(/\s+/g, "");
  const whatsappNumber = primaryPhone.replace("+", "");
  const telegramNumber = primaryPhone.replace("+", "");

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#0b3b2c] via-[#0f4a36] to-[#0b3b2c] text-white pt-10 pb-16 lg:pt-16 lg:pb-24"
      id="hero-section"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left side */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/40 text-emerald-200 text-xs sm:text-sm font-semibold shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />

              <span>
                {language === "am"
                  ? "በባሕር ዳር እና አካባቢዋ"
                  : "Bahir Dar & Surrounding Areas"}
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-white leading-[1.2]">
              {language === "am" ? (
                <>
                  ለቤትዎ እና ለተቋምዎ
                  <br className="hidden sm:block" />
                  <span className="text-emerald-300">የባለሙያ የተባይ ቁጥጥር</span>
                  <br className="hidden sm:block" />
                  እና የኬሚካል ርጭት አገልግሎት
                </>
              ) : (
                <>
                  Professional Pest Control
                  <br className="hidden sm:block" />
                  <span className="text-emerald-300">
                    & Chemical Spraying Services
                  </span>
                  <br className="hidden sm:block" />
                  in Bahir Dar
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
              {language === "am"
                ? "የነፍሳት፣ የአይጥ፣ የበረሮ፣ የምስጥ፣ የነቀዝ፣ የጉንዳን እና ሌሎች የተባይ ችግሮችን ለመቆጣጠር ለቤቶች፣ ሆቴሎች፣ ሆስፒታሎች፣ ክሊኒኮች፣ መደብሮች፣ ፋብሪካዎች፣ ዩኒቨርሲቲዎች፣ ኩባንያዎች እና ሌሎች ተቋማት የተባይ ቁጥጥር እና የኬሚካል ርጭት አገልግሎት እንሰጣለን።"
                : "We provide pest control and chemical spraying services for homes, hotels, hospitals, clinics, shops, factories, universities, companies, and other institutions in Bahir Dar and surrounding areas."}
            </p>

            {/* CTA buttons */}
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onOpenCallModal}
                  className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white text-base sm:text-lg font-bold shadow-xl hover:shadow-amber-600/25 transition-all transform active:scale-98 group"
                  id="hero-call-now-btn"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform shrink-0" />

                  <span>{language === "am" ? "አሁኑኑ ይደውሉ" : "Call Now"}</span>
                </button>

                <button
                  onClick={() => onNavigate("services")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base font-semibold transition-all backdrop-blur-xs"
                  id="hero-view-services-btn"
                >
                  <span>
                    {language === "am" ? "አገልግሎቶቻችንን ይመልከቱ" : "View Services"}
                  </span>

                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

              {/* Phone */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-5 text-sm text-emerald-100">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">
                  {language === "am" ? "የቀጥታ ስልክ መስመር፡" : "Direct Phone Line:"}
                </span>

                <a
                  href={`tel:${primaryPhone}`}
                  className="font-extrabold text-white text-lg tracking-wide hover:text-amber-300 underline underline-offset-4 decoration-amber-400 transition-colors"
                  dir="ltr"
                >
                  {COMPANY_PHONE_PRIMARY}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-4 text-sm text-emerald-100 max-w-2xl">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />

                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-emerald-300 mb-1">
                    {language === "am" ? "አድራሻ" : "Address"}
                  </div>

                  <p className="leading-relaxed">
                    {language === "am"
                      ? "ቀበሌ 14፣ ቻይና ካምፕ፣ ፊት ለፊት ሰንደቅ የገበያ ማዕከል፣ ቢሮ ቁጥር 04"
                      : "Kebele 14, China Camp, infront of Sendek Shopping Center, Office No. 04"}
                  </p>
                </div>
              </div>

              {/* WhatsApp & Telegram */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600/90 hover:bg-green-600 text-white text-sm font-bold transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`https://t.me/+${telegramNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/90 hover:bg-sky-500 text-white text-sm font-bold transition-all shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-emerald-950">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt={
                    language === "am"
                      ? "የተባይ ቁጥጥር ባለሙያ አገልግሎት ሲሰጥ"
                      : "Professional pest control technician providing service"
                  }
                  className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Floating service-area badge */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-white text-slate-900 p-3.5 rounded-2xl shadow-xl border border-slate-100 items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div>
                  <div className="text-xs text-slate-500 font-semibold">
                    {language === "am" ? "የአገልግሎት ክልል" : "Service Area"}
                  </div>

                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />

                    <span>
                      {language === "am"
                        ? "ባሕር ዳር እና አካባቢዋ"
                        : "Bahir Dar & Surrounding Areas"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
