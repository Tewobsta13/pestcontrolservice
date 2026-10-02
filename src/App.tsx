import React, { useState } from 'react';
import { PageView, PestService } from './types';
import { PEST_SERVICES } from './data/servicesData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustIntroSection } from './components/TrustIntroSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailView } from './components/ServiceDetailView';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CallModal } from './components/CallModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Smartphone, Monitor } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { language, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedService, setSelectedService] = useState<PestService>(PEST_SERVICES[0]);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [modalServiceInterest, setModalServiceInterest] = useState<string | undefined>(undefined);
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  // Open call modal with optional context
  const handleOpenCallModal = (serviceInterest?: string) => {
    setModalServiceInterest(serviceInterest);
    setIsCallModalOpen(true);
  };

  const handleCloseCallModal = () => {
    setIsCallModalOpen(false);
    setModalServiceInterest(undefined);
  };

  // Select service and navigate to dedicated detail page
  const handleSelectService = (service: PestService) => {
    setSelectedService(service);
    setCurrentPage('service-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the core page content based on current view
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection
              onOpenCallModal={() => handleOpenCallModal()}
              onNavigate={handleNavigate}
            />
            <TrustIntroSection
              onOpenCallModal={() => handleOpenCallModal()}
            />
            <ServicesSection
              onSelectService={handleSelectService}
              onOpenCallModal={handleOpenCallModal}
            />
            <HowItWorksSection
              onOpenCallModal={() => handleOpenCallModal()}
            />
            <WhyChooseUsSection />
            <AboutUsSection
              onNavigate={handleNavigate}
              onOpenCallModal={() => handleOpenCallModal()}
            />
            <ServiceAreasSection
              onOpenCallModal={() => handleOpenCallModal(language === 'am' ? 'የአገልግሎት ክልል ጥያቄ' : 'Service Area Inquiries')}
            />
            <TestimonialsSection />
            <ContactSection
              onOpenCallModal={() => handleOpenCallModal()}
            />
          </>
        );

      case 'services':
        return (
          <div className="pt-2">
            {/* Services Page Header */}
            <div className="bg-[#0f4a36] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200 bg-emerald-800/80 px-3 py-1 rounded-full">
                  {t.services.badge}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {t.services.title}
                </h1>
                <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto">
                  {t.services.subtitle}
                </p>
              </div>
            </div>

            <ServicesSection
              onSelectService={handleSelectService}
              onOpenCallModal={handleOpenCallModal}
              isStandalonePage={true}
            />
            <TrustIntroSection onOpenCallModal={() => handleOpenCallModal()} />
            <ContactSection onOpenCallModal={() => handleOpenCallModal()} />
          </div>
        );

      case 'service-detail':
        return (
          <ServiceDetailView
            service={selectedService}
            onBack={() => handleNavigate('services')}
            onSelectService={handleSelectService}
            onOpenCallModal={handleOpenCallModal}
          />
        );

      case 'how-it-works':
        return (
          <div className="pt-2">
            <div className="bg-[#0f4a36] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200 bg-emerald-800/80 px-3 py-1 rounded-full">
                  {t.howItWorks.badge}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {t.howItWorks.title}
                </h1>
                <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto">
                  {t.howItWorks.subtitle}
                </p>
              </div>
            </div>
            <HowItWorksSection onOpenCallModal={() => handleOpenCallModal()} isStandalonePage={true} />
            <WhyChooseUsSection />
            <ContactSection onOpenCallModal={() => handleOpenCallModal()} />
          </div>
        );

      case 'about':
        return (
          <div className="pt-2">
            <div className="bg-[#0f4a36] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200 bg-emerald-800/80 px-3 py-1 rounded-full">
                  {t.about.badge}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {t.about.title}
                </h1>
                <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto">
                  {t.about.subtitle}
                </p>
              </div>
            </div>
            <AboutUsSection
              onNavigate={handleNavigate}
              onOpenCallModal={() => handleOpenCallModal()}
              isStandalonePage={true}
            />
            <ServiceAreasSection onOpenCallModal={() => handleOpenCallModal()} />
            <ContactSection onOpenCallModal={() => handleOpenCallModal()} />
          </div>
        );

      case 'contact':
        return (
          <div className="pt-2">
            <div className="bg-[#0f4a36] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-200 bg-emerald-800/80 px-3 py-1 rounded-full">
                  {t.contact.badge}
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {t.contact.title}
                </h1>
                <p className="text-emerald-100/90 text-sm sm:text-base max-w-xl mx-auto">
                  {t.contact.subtitle}
                </p>
              </div>
            </div>
            <ContactSection onOpenCallModal={() => handleOpenCallModal()} isStandalonePage={true} />
            <ServiceAreasSection onOpenCallModal={() => handleOpenCallModal()} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] text-slate-900 flex flex-col selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* If Mobile Device Preview Mode is active, render inside a smartphone frame simulator */}
      {isMobilePreview ? (
        <div className="bg-slate-900 min-h-screen py-6 px-2 sm:px-6 flex flex-col items-center justify-start">
          
          {/* Top Preview Control Bar */}
          <div className="max-w-md w-full mb-4 bg-slate-800 text-white rounded-2xl p-3 flex items-center justify-between shadow-xl border border-slate-700">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <Smartphone className="w-4 h-4 text-amber-400" />
              <span>{language === 'am' ? 'የሞባይል ዕይታ ቅድመ እይታ (390px)' : 'Simulated Mobile View (390px)'}</span>
            </div>
            <button
              onClick={() => setIsMobilePreview(false)}
              className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{language === 'am' ? 'ወደ ዴስክቶፕ መልስ' : 'Back to Full Desktop'}</span>
            </button>
          </div>

          {/* Smartphone Hardware Frame */}
          <div className="w-full max-w-[390px] bg-slate-950 rounded-[48px] p-3 shadow-2xl border-4 border-slate-700 ring-1 ring-slate-600">
            {/* Phone Speaker & Dynamic Island */}
            <div className="h-5 w-full flex items-center justify-center mb-1">
              <div className="w-24 h-4 bg-black rounded-full"></div>
            </div>

            {/* Phone Screen Container */}
            <div className="bg-white rounded-[36px] overflow-y-auto max-h-[800px] border border-slate-200 shadow-inner flex flex-col relative text-slate-900">
              <Navbar
                currentPage={currentPage}
                onNavigate={handleNavigate}
                onOpenCallModal={handleOpenCallModal}
                isMobilePreview={isMobilePreview}
                onToggleMobilePreview={() => setIsMobilePreview(!isMobilePreview)}
              />

              <main className="flex-1 pb-20">
                {renderPageContent()}
              </main>

              <Footer
                onNavigate={handleNavigate}
                onSelectService={handleSelectService}
                onOpenCallModal={() => handleOpenCallModal()}
              />

              <MobileQuickBar onOpenCallModal={() => handleOpenCallModal()} />
            </div>
          </div>
        </div>
      ) : (
        /* Standard Full Responsive View (Desktop + Tablet + Mobile) */
        <div className="flex-1 flex flex-col">
          <Navbar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            onOpenCallModal={handleOpenCallModal}
            isMobilePreview={isMobilePreview}
            onToggleMobilePreview={() => setIsMobilePreview(!isMobilePreview)}
          />

          <main className="flex-1 pb-16 md:pb-0">
            {renderPageContent()}
          </main>

          <Footer
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            onOpenCallModal={() => handleOpenCallModal()}
          />

          {/* Persistent mobile bar for actual mobile screens */}
          <MobileQuickBar onOpenCallModal={() => handleOpenCallModal()} />
        </div>
      )}

      {/* Direct Call & Booking Modal */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={handleCloseCallModal}
        serviceInterest={modalServiceInterest}
      />
    </div>
  );
}
