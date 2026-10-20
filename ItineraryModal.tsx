import React from 'react';
import { TourPackage, Currency } from '../types';
import { formatPrice } from '../data/travelData';

interface ItineraryModalProps {
  pkg: TourPackage | null;
  currency: Currency;
  onClose: () => void;
  onBookNow: (pkg: TourPackage) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  pkg,
  currency,
  onClose,
  onBookNow,
}) => {
  if (!pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#f2fcf5] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-[#b6eed7]/40">
        {/* Modal Header with Hero Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = pkg.fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003628] via-[#003628]/60 to-transparent"></div>

          {/* Top Row Badges & Close Button */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#003628] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {pkg.region}
              </span>
              <span className="px-3 py-1 bg-[#fe932c] text-[#663500] rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                {pkg.durationDays} Days / {pkg.durationNights} Nights
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Bottom Title & Price */}
          <div className="absolute bottom-4 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div>
              <span className="text-xs font-bold text-[#ffdcc3] uppercase tracking-wider">
                {pkg.route}
              </span>
              <h2 className="font-headline-sm text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                {pkg.title}
              </h2>
            </div>

            <div className="flex items-baseline gap-1.5 shrink-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
              <span className="text-xs text-[#b6eed7] uppercase font-bold">From</span>
              <span className="text-2xl font-bold text-white">
                {formatPrice(pkg.priceUsd, currency)}
              </span>
              <span className="text-xs text-white/80">/ person</span>
            </div>
          </div>
        </div>

        {/* Scrollable Itinerary Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 flex flex-col gap-8">
          {/* Overview Statement */}
          <div className="bg-white p-5 rounded-2xl border border-[#e1ebe4] shadow-xs">
            <h3 className="font-headline-sm text-lg text-[#003628] font-bold mb-2">
              Curated Journey Overview
            </h3>
            <p className="text-sm sm:text-base text-[#404944] leading-relaxed">
              {pkg.detailedDescription}
            </p>

            <div className="mt-4 pt-4 border-t border-[#e1ebe4] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#151d1a]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#003628] text-[18px]">verified</span>
                <span>SLTDA Certified Guide</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#003628] text-[18px]">directions_car</span>
                <span>Private Luxury A/C Vehicle</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#003628] text-[18px]">hotel</span>
                <span>Boutique 4-5 Star Stays</span>
              </div>
            </div>
          </div>

          {/* Day-by-Day Schedule */}
          <div>
            <h3 className="font-headline-sm text-xl text-[#003628] font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#904d00]">calendar_month</span>
              <span>Day-by-Day Expedition Itinerary</span>
            </h3>

            <div className="flex flex-col gap-4">
              {pkg.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="bg-white p-5 rounded-2xl border border-[#e1ebe4] shadow-xs flex flex-col gap-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#e1ebe4]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-full bg-[#164e3d] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        D{day.day}
                      </span>
                      <h4 className="font-headline-sm text-base text-[#003628] font-bold">
                        {day.title}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#904d00] bg-[#ffdcc3] px-2.5 py-0.5 rounded-full">
                      {day.location}
                    </span>
                  </div>

                  <p className="text-sm text-[#404944] leading-relaxed">
                    {day.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {day.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#ecf6ef] text-[#003628] text-xs font-medium"
                      >
                        <span className="material-symbols-outlined text-[13px] text-[#004e47]">check</span>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 text-xs text-[#707974] flex flex-wrap items-center justify-between gap-2 border-t border-[#f2fcf5]">
                    <span><strong>Meals:</strong> {day.meals}</span>
                    <span><strong>Accommodations:</strong> {day.stay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Included Summary */}
          <div className="bg-[#ecf6ef] p-6 rounded-2xl border border-[#b6eed7]/50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#003628] mb-3">
              All Included Landmarks & Fast-Track Tickets:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#151d1a]">
              {pkg.places.map((place, pIdx) => (
                <div key={pIdx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-[#004e47]">
                    check_circle
                  </span>
                  <span>{place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="p-4 sm:p-6 bg-white border-t border-[#e1ebe4] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs text-[#707974]">Twin sharing base quote</span>
            <span className="text-lg font-bold text-[#003628]">
              {formatPrice(pkg.priceUsd, currency)}{' '}
              <span className="text-xs font-normal text-[#404944]">/ person all-inclusive</span>
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#c0c9c3] text-[#404944] hover:bg-[#f2fcf5] text-sm font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#003628] hover:bg-[#164e3d] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Book This Package</span>
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
