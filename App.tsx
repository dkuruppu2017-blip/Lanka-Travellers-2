import React, { useState, useEffect } from 'react';
import { Currency, Language, TourPackage } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { PackagesView } from './views/PackagesView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { PlanTripView } from './views/PlanTripView';
import { DestinationView } from './views/DestinationView';
import { ConciergeModal } from './components/ConciergeModal';
import { ItineraryModal } from './components/ItineraryModal';
import { BookingSuccessModal } from './components/BookingSuccessModal';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewParams, setViewParams] = useState<any>(null);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [language, setLanguage] = useState<Language>('EN');
  
  // Modals state
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [bookingSuccessDetails, setBookingSuccessDetails] = useState<any | null>(null);

  // Handle URL hash or back/forward if needed
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentView(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string, params?: any) => {
    setCurrentView(view);
    setViewParams(params || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'home') {
      window.history.pushState(null, '', ' ');
    } else {
      window.history.pushState(null, '', `#${view}`);
    }
  };

  const handleBookPackage = (pkg: TourPackage) => {
    // Generate instant booking reference
    const bookingRef = 'LT-' + Math.floor(100000 + Math.random() * 900000);
    setBookingSuccessDetails({
      bookingId: bookingRef,
      packageName: pkg.title,
      nights: pkg.durationNights || 7,
      travelers: 2,
      destinations: pkg.places,
      guestName: 'Eleanor Vance',
      formattedPrice: `$${pkg.priceUsd.toLocaleString()}`,
      vehicleType: 'Luxury Chauffeur Van',
    });
    setSelectedPackage(null);
  };

  // Render view router
  const renderView = () => {
    if (currentView.startsWith('destination-')) {
      return (
        <DestinationView
          destinationId={currentView}
          currency={currency}
          onNavigate={handleNavigate}
          onSelectPackage={(pkg) => setSelectedPackage(pkg)}
          onOpenConcierge={() => setIsConciergeOpen(true)}
        />
      );
    }

    switch (currentView) {
      case 'travel-packages':
        return (
          <PackagesView
            currency={currency}
            onNavigate={handleNavigate}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenConcierge={() => setIsConciergeOpen(true)}
            initialCategory={viewParams?.category || 'all'}
          />
        );
      case 'about-us':
        return (
          <AboutView
            onNavigate={handleNavigate}
            onOpenConcierge={() => setIsConciergeOpen(true)}
          />
        );
      case 'contact-us':
        return (
          <ContactView
            onNavigate={handleNavigate}
            onOpenConcierge={() => setIsConciergeOpen(true)}
          />
        );
      case 'plan-custom-trip':
        return (
          <PlanTripView
            currency={currency}
            onNavigate={handleNavigate}
            onOpenConcierge={() => setIsConciergeOpen(true)}
            onBookSuccess={(details) => setBookingSuccessDetails(details)}
          />
        );
      case 'home':
      default:
        return (
          <HomeView
            currency={currency}
            onNavigate={handleNavigate}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenConcierge={() => setIsConciergeOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        currency={currency}
        onCurrencyChange={setCurrency}
        language={language}
        onLanguageChange={setLanguage}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />

      {/* Main Content Body */}
      <main className="w-full pt-[120px] bg-surface flex-grow min-h-[calc(100vh-120px)]">
        {renderView()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Persistent Floating AI Concierge Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        <button
          onClick={() => setIsConciergeOpen(true)}
          className="group relative flex items-center gap-2.5 bg-primary text-on-primary pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-primary-container transition-all hover:scale-105 active:scale-95 border border-white/20 cursor-pointer"
          aria-label="Open AI Travel Concierge"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed" />
          </span>
          <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">neurology</span>
          <div className="flex flex-col text-left">
            <span className="font-title-md text-title-md font-semibold leading-tight">Ceylon AI Concierge</span>
            <span className="text-[10px] text-primary-fixed-dim uppercase tracking-wider font-mono">Gemini 4 Argon · Thinking</span>
          </div>
        </button>
      </div>

      {/* Modals */}
      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        currency={currency}
        onApplyToPlanner={() => {
          setIsConciergeOpen(false);
          handleNavigate('plan-custom-trip');
        }}
      />

      <ItineraryModal
        pkg={selectedPackage}
        currency={currency}
        onClose={() => setSelectedPackage(null)}
        onBookNow={handleBookPackage}
      />

      <BookingSuccessModal
        details={bookingSuccessDetails}
        currency={currency}
        onClose={() => setBookingSuccessDetails(null)}
        onOpenConcierge={() => setIsConciergeOpen(true)}
      />
    </div>
  );
}
