import React, { useState } from 'react';
import { Currency, Language } from '../types';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, params?: any) => void;
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  language: Language;
  onLanguageChange: (language: Language) => void;
  onOpenConcierge: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  currency,
  onCurrencyChange,
  language,
  onLanguageChange,
  onOpenConcierge,
}) => {
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1UUslheAapryqjpFTV7sp8bvFldAZMEOXV9whNiNSANCdEUJZD1NJ-TdrlFfi6AJLxTLtUIwbNsGUp4I5sgoCvHo2llyTXJTX1ouRB6YMCaJFzy7TVeo97I_eexH7SVRWtOEgmFR3kd7GLJuYRvWUEaxLmToHNXiSY0iP-4nMDpV_EnfBqINdfMVfu9lLsVyZu6EEomc8f0HEoJsiOlnFXqKZWfHd3ayyQ9v-TNAGqY-TYv0XJB7ZuMESQ';

  const conciergeAvatar =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrKc6LbHJ_Spxldm3KWF2we8L_Xn-D76xBIId8eWPBWjY7qfdM1qr-zCiYFfNAvX7ekMXvx5h05QgS1cgkTufhl01wf33qnjM3ZmvF4NGNiJ9lWFdsTAwoAQ6BWZ6eTNr1Wn5elUwnQOfXpCmdnz0sZmeFxaDSNRCQ_mD2yHcFj7uN7wjUjpDt0TqhwC-_9-EaOfFjOhuDIWLVFV3ROKhc4TtWjuprPgGfn2sW236qSWii18AZf8D1A';

  const isCurrent = (path: string) => currentView === path;

  const handleNavClick = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    setDestinationsOpen(false);
    setMobileMenuOpen(false);
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f2fcf5]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(22,78,61,0.06)]">
      {/* Top Notification Ribbon */}
      <div className="w-full bg-[#003628] text-[#ffffff]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 h-10 flex items-center justify-between text-[0.6875rem] font-bold tracking-[0.05em]">
          <div className="flex items-center gap-4">
            <a
              href="tel:+94112345678"
              className="hidden sm:inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">support_agent</span>
              Emergency: +94 11 234 5678
            </a>
            <span className="hidden lg:inline text-white/40">•</span>
            <a
              href="mailto:info@lankatravellers.com"
              className="hidden lg:inline text-white/90 hover:text-white transition-colors"
            >
              info@lankatravellers.com
            </a>
            <span className="hidden lg:inline text-white/40">•</span>
            <span className="inline-flex items-center gap-1 bg-[#164e3d] text-white px-2 py-0.5 rounded-full">
              <span className="material-symbols-outlined text-[13px] text-[#89f5e7]">verified</span>
              SLTDA/SQA/TA/01482
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <label className="sr-only" htmlFor="header-currency-select">
                Currency
              </label>
              <select
                id="header-currency-select"
                value={currency}
                onChange={(e) => onCurrencyChange(e.target.value as Currency)}
                className="bg-transparent text-white font-bold text-[0.6875rem] py-0.5 focus:outline-none cursor-pointer"
              >
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="USD">
                  USD ($)
                </option>
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="EUR">
                  EUR (€)
                </option>
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="GBP">
                  GBP (£)
                </option>
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="LKR">
                  LKR (Rs)
                </option>
              </select>
            </div>

            <span className="text-white/40">|</span>

            <div className="flex items-center gap-1">
              <label className="sr-only" htmlFor="header-lang-select">
                Language
              </label>
              <select
                id="header-lang-select"
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-white font-bold text-[0.6875rem] py-0.5 focus:outline-none cursor-pointer"
              >
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="EN">
                  EN
                </option>
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="FR">
                  FR
                </option>
                <option className="text-[#151d1a] bg-[#f2fcf5]" value="DE">
                  DE
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', e)}
            className="flex items-center gap-2 py-1 group"
          >
            <img
              alt="Lanka Travellers Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src={logoUrl}
              onError={(e) => {
                // Fallback icon if hotlink blocked
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="flex flex-col">
              <span className="font-headline-sm text-[1.25rem] text-[#003628] tracking-tight leading-none font-semibold">
                Lanka Travellers
              </span>
              <span className="text-[0.6875rem] font-bold text-[#904d00] tracking-widest uppercase mt-0.5">
                Ceylon Journeys
              </span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#ecf6ef] rounded-full shadow-inner">
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', e)}
            className={`px-4 py-1.5 rounded-full text-base font-semibold transition-all ${
              isCurrent('home')
                ? 'bg-[#164e3d] text-white shadow-[0_2px_8px_rgba(22,78,61,0.15)]'
                : 'text-[#404944] hover:text-[#151d1a]'
            }`}
          >
            Home
          </a>

          {/* Destinations Dropdown */}
          <div className="relative group">
            <button
              type="button"
              onClick={() => setDestinationsOpen(!destinationsOpen)}
              onMouseEnter={() => setDestinationsOpen(true)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-base font-semibold transition-all ${
                currentView.startsWith('destination')
                  ? 'bg-[#164e3d] text-white shadow-[0_2px_8px_rgba(22,78,61,0.15)]'
                  : 'text-[#404944] hover:text-[#151d1a]'
              }`}
            >
              Destinations
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-180">
                expand_more
              </span>
            </button>

            <div
              onMouseLeave={() => setDestinationsOpen(false)}
              className={`absolute left-0 top-full mt-2 w-64 p-2 bg-white rounded-xl shadow-[0_12px_32px_rgba(22,78,61,0.14)] border border-[#e1ebe4] transition-all flex flex-col gap-1 z-50 ${
                destinationsOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible pointer-events-none -translate-y-1'
              }`}
            >
              <a
                href="#destination-sigiriya"
                onClick={(e) => handleNavClick('destination-sigiriya', e)}
                className="px-3 py-2 rounded-lg text-sm text-[#404944] hover:bg-[#e6f0ea] hover:text-[#003628] font-medium transition-all flex items-center justify-between"
              >
                <span>Sigiriya & Rock Fortress</span>
                <span className="text-[11px] text-[#904d00] font-bold">Heritage</span>
              </a>
              <a
                href="#destination-ella"
                onClick={(e) => handleNavClick('destination-ella', e)}
                className="px-3 py-2 rounded-lg text-sm text-[#404944] hover:bg-[#e6f0ea] hover:text-[#003628] font-medium transition-all flex items-center justify-between"
              >
                <span>Ella & Central Highlands</span>
                <span className="text-[11px] text-[#003628] font-bold">Rail & Peaks</span>
              </a>
              <a
                href="#destination-galle"
                onClick={(e) => handleNavClick('destination-galle', e)}
                className="px-3 py-2 rounded-lg text-sm text-[#404944] hover:bg-[#e6f0ea] hover:text-[#003628] font-medium transition-all flex items-center justify-between"
              >
                <span>Galle & Southern Coast</span>
                <span className="text-[11px] text-[#003530] font-bold">Ocean & Fort</span>
              </a>
              <a
                href="#destination-kandy"
                onClick={(e) => handleNavClick('destination-kandy', e)}
                className="px-3 py-2 rounded-lg text-sm text-[#404944] hover:bg-[#e6f0ea] hover:text-[#003628] font-medium transition-all flex items-center justify-between"
              >
                <span>Kandy & Sacred Valley</span>
                <span className="text-[11px] text-[#904d00] font-bold">Tooth Relic</span>
              </a>
            </div>
          </div>

          <a
            href="#travel-packages"
            onClick={(e) => handleNavClick('travel-packages', e)}
            className={`px-4 py-1.5 rounded-full text-base font-semibold transition-all ${
              isCurrent('travel-packages')
                ? 'bg-[#164e3d] text-white shadow-[0_2px_8px_rgba(22,78,61,0.15)]'
                : 'text-[#404944] hover:text-[#151d1a]'
            }`}
          >
            Travel Packages
          </a>

          <a
            href="#about-us"
            onClick={(e) => handleNavClick('about-us', e)}
            className={`px-4 py-1.5 rounded-full text-base font-semibold transition-all ${
              isCurrent('about-us')
                ? 'bg-[#164e3d] text-white shadow-[0_2px_8px_rgba(22,78,61,0.15)]'
                : 'text-[#404944] hover:text-[#151d1a]'
            }`}
          >
            About Us
          </a>

          <a
            href="#contact-us"
            onClick={(e) => handleNavClick('contact-us', e)}
            className={`px-4 py-1.5 rounded-full text-base font-semibold transition-all ${
              isCurrent('contact-us')
                ? 'bg-[#164e3d] text-white shadow-[0_2px_8px_rgba(22,78,61,0.15)]'
                : 'text-[#404944] hover:text-[#151d1a]'
            }`}
          >
            Contact Us
          </a>
        </nav>

        {/* Right CTA Area: Concierge + Plan Custom Trip */}
        <div className="flex items-center gap-3">
          {/* Travel Concierge Online Advisor Button */}
          <button
            type="button"
            onClick={onOpenConcierge}
            title="Chat with Ceylon Travel Concierge (Powered by Gemini Argon High Thinking)"
            className="hidden md:flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-[#e6f0ea] hover:bg-[#dbe5de] rounded-full transition-all cursor-pointer border border-[#c0c9c3]/40 group"
          >
            <div className="relative">
              <img
                alt="Chaminda Silva - Travel Concierge"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                src={conciergeAvatar}
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#003628] rounded-full ring-2 ring-[#f2fcf5] animate-pulse"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[0.6875rem] font-bold text-[#151d1a] leading-tight">
                Travel Concierge
              </span>
              <span className="text-[10px] text-[#164e3d] font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fe932c]"></span>
                Online Advisor
              </span>
            </div>
          </button>

          {/* Plan Custom Trip CTA Button */}
          <button
            type="button"
            onClick={(e) => handleNavClick('plan-custom-trip', e)}
            className="inline-flex items-center gap-2 bg-[#fe932c] text-[#663500] hover:bg-[#904d00] hover:text-white transition-all font-semibold text-base px-5 py-2.5 rounded-full shadow-[0_4px_16px_rgba(254,147,44,0.3)] hover:shadow-lg cursor-pointer"
          >
            <span>Plan Custom Trip</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-[#ecf6ef] text-[#003628] hover:bg-[#e6f0ea] transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f2fcf5] border-b border-[#c0c9c3]/50 px-6 py-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <a
            href="#home"
            onClick={(e) => handleNavClick('home', e)}
            className={`px-4 py-2.5 rounded-xl font-semibold text-base transition-colors ${
              isCurrent('home') ? 'bg-[#003628] text-white' : 'text-[#151d1a] hover:bg-[#e6f0ea]'
            }`}
          >
            Home
          </a>

          <div className="flex flex-col gap-1 pl-2">
            <span className="text-xs font-bold text-[#904d00] uppercase tracking-wider px-2 py-1">
              Destinations
            </span>
            <a
              href="#destination-sigiriya"
              onClick={(e) => handleNavClick('destination-sigiriya', e)}
              className="px-4 py-2 text-sm text-[#404944] hover:text-[#003628] rounded-lg hover:bg-[#e6f0ea]"
            >
              • Sigiriya & Rock Fortress
            </a>
            <a
              href="#destination-ella"
              onClick={(e) => handleNavClick('destination-ella', e)}
              className="px-4 py-2 text-sm text-[#404944] hover:text-[#003628] rounded-lg hover:bg-[#e6f0ea]"
            >
              • Ella & Central Highlands
            </a>
            <a
              href="#destination-galle"
              onClick={(e) => handleNavClick('destination-galle', e)}
              className="px-4 py-2 text-sm text-[#404944] hover:text-[#003628] rounded-lg hover:bg-[#e6f0ea]"
            >
              • Galle & Southern Coast
            </a>
            <a
              href="#destination-kandy"
              onClick={(e) => handleNavClick('destination-kandy', e)}
              className="px-4 py-2 text-sm text-[#404944] hover:text-[#003628] rounded-lg hover:bg-[#e6f0ea]"
            >
              • Kandy & Sacred Valley
            </a>
          </div>

          <a
            href="#travel-packages"
            onClick={(e) => handleNavClick('travel-packages', e)}
            className={`px-4 py-2.5 rounded-xl font-semibold text-base transition-colors ${
              isCurrent('travel-packages')
                ? 'bg-[#003628] text-white'
                : 'text-[#151d1a] hover:bg-[#e6f0ea]'
            }`}
          >
            Travel Packages
          </a>

          <a
            href="#about-us"
            onClick={(e) => handleNavClick('about-us', e)}
            className={`px-4 py-2.5 rounded-xl font-semibold text-base transition-colors ${
              isCurrent('about-us')
                ? 'bg-[#003628] text-white'
                : 'text-[#151d1a] hover:bg-[#e6f0ea]'
            }`}
          >
            About Us
          </a>

          <a
            href="#contact-us"
            onClick={(e) => handleNavClick('contact-us', e)}
            className={`px-4 py-2.5 rounded-xl font-semibold text-base transition-colors ${
              isCurrent('contact-us')
                ? 'bg-[#003628] text-white'
                : 'text-[#151d1a] hover:bg-[#e6f0ea]'
            }`}
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConcierge();
            }}
            className="w-full flex items-center justify-center gap-2 p-3 bg-[#e6f0ea] rounded-xl text-[#003628] font-bold text-sm mt-2 border border-[#b6eed7]"
          >
            <span className="material-symbols-outlined text-[20px] text-[#fe932c]">smart_toy</span>
            <span>Ask AI Travel Concierge (High Thinking)</span>
          </button>
        </div>
      )}
    </header>
  );
};
