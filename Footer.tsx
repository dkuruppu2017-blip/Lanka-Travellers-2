import React from 'react';

interface FooterProps {
  onNavigate: (view: string, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (view: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#ecf6ef] text-[#151d1a] pt-10 pb-6 border-t border-[#c0c9c3]/30">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          {/* Column 1: Brand & Credentials */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-headline-sm text-[1.35rem] text-[#003628] font-bold tracking-tight">
                Lanka Travellers
              </span>
            </div>
            <p className="text-sm text-[#404944] leading-relaxed">
              Curating conscious, high-touch journeys through Sri Lanka's emerald highlands, ancient fortresses, and coastal sanctuaries inspired by Geoffrey Bawa's timeless architectural ethos.
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e6f0ea] rounded-lg text-xs font-bold text-[#003628] border border-[#b6eed7]/50">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span>SLTDA Certified: #SLTDA/SQA/TA/01482</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e6f0ea] rounded-lg text-xs font-semibold text-[#404944]">
                <span className="material-symbols-outlined text-[16px] text-[#004e47]">eco</span>
                <span>Zero Carbon & Heritage Pledge</span>
              </div>
            </div>
          </div>

          {/* Column 2: Popular Tours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-sm text-lg text-[#003628] font-semibold">
              Popular Tours
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#003628]">chevron_right</span>
                <a
                  href="#travel-packages"
                  onClick={(e) => handleLink('travel-packages', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Sigiriya & Cultural Triangle
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#003628]">chevron_right</span>
                <a
                  href="#travel-packages"
                  onClick={(e) => handleLink('travel-packages', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Ella & Hill Country Adventure
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#003628]">chevron_right</span>
                <a
                  href="#travel-packages"
                  onClick={(e) => handleLink('travel-packages', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Southern Coast Safari & Beaches
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px] text-[#003628]">chevron_right</span>
                <a
                  href="#travel-packages"
                  onClick={(e) => handleLink('travel-packages', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Ceylon Tea Trails & Wildlife
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-sm text-lg text-[#003628] font-semibold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => handleLink('about-us', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#plan-custom-trip"
                  onClick={(e) => handleLink('plan-custom-trip', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Custom Itinerary Planning
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => handleLink('about-us', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Responsible Travel Policy
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  onClick={(e) => handleLink('contact-us', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  onClick={(e) => handleLink('contact-us', e)}
                  className="text-[#404944] hover:text-[#003628] transition-colors"
                >
                  Traveler Safety Guarantee
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters */}
          <div className="flex flex-col gap-4">
            <h3 className="font-headline-sm text-lg text-[#003628] font-semibold">
              Headquarters
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#404944]">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#003628] mt-0.5 shrink-0">
                  location_on
                </span>
                <span>No. 42, Galle Face Court, Colombo 03, Sri Lanka</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#003628] shrink-0">
                  call
                </span>
                <a href="tel:+94112345678" className="hover:text-[#003628] font-medium">
                  +94 11 234 5678
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#003628] shrink-0">
                  mail
                </span>
                <a href="mailto:bookings@lankatravellers.com" className="hover:text-[#003628] font-medium">
                  bookings@lankatravellers.com
                </a>
              </p>
            </div>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-xs border border-[#c0c9c3]/40">
                <span className="material-symbols-outlined text-[16px] text-[#904d00]">military_tech</span>
                <span className="text-xs text-[#151d1a] font-bold">
                  TripAdvisor 5-Star Certificate of Excellence
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-[#404944] uppercase tracking-wider font-bold">
                Follow:
              </span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#e6f0ea] flex items-center justify-center text-[#003628] hover:bg-[#003628] hover:text-white transition-all text-xs font-bold"
              >
                FB
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#e6f0ea] flex items-center justify-center text-[#003628] hover:bg-[#003628] hover:text-white transition-all text-xs font-bold"
              >
                IG
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#e6f0ea] flex items-center justify-center text-[#003628] hover:bg-[#003628] hover:text-white transition-all text-xs font-bold"
              >
                YT
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#e6f0ea] flex items-center justify-center text-[#003628] hover:bg-[#003628] hover:text-white transition-all text-xs font-bold"
              >
                TA
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 border-t border-[#c0c9c3]/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#404944]">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p>© 2025 Lanka Travellers Ceylon Ltd. All rights reserved.</p>
            <p className="text-[11px] text-[#707974]">
              lankatravellers.wordpress.com — AI & WordPress Compatible Agency Template • WCAG 2.1 AA Compliant
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 font-bold text-[11px]">
            <span className="px-2.5 py-1 bg-white rounded border border-[#c0c9c3]/30">VISA</span>
            <span className="px-2.5 py-1 bg-white rounded border border-[#c0c9c3]/30">Mastercard</span>
            <span className="px-2.5 py-1 bg-white rounded border border-[#c0c9c3]/30">AMEX</span>
            <span className="px-2.5 py-1 bg-white rounded border border-[#c0c9c3]/30">LankaPay</span>
            <span className="px-2.5 py-1 bg-white rounded border border-[#c0c9c3]/30 flex items-center gap-1 text-[#003628]">
              <span className="material-symbols-outlined text-[13px]">lock</span>
              Secure SSL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
