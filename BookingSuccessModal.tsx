import React from 'react';
import { Currency } from '../types';

interface BookingSuccessModalProps {
  details: any;
  currency: Currency;
  onClose: () => void;
  onOpenConcierge: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({
  details,
  currency,
  onClose,
  onOpenConcierge,
}) => {
  if (!details) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/30 max-h-[90vh] flex flex-col">
        {/* Header Ribbon */}
        <div className="bg-primary text-on-primary p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          <div className="flex items-center gap-2 mb-2 text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest font-bold">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            <span>Booking Request Registered</span>
          </div>

          <h2 className="font-headline-sm text-headline-sm text-surface-container-lowest">
            Ayubowan! Your Ceylon Journey Is Being Prepared
          </h2>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim mt-1">
            Reference Code: <strong className="text-secondary-fixed font-mono text-base">{details.bookingId}</strong>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
          {/* Card Summary */}
          <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/20 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase font-bold text-secondary tracking-wider">
                  Confirmed Selection
                </span>
                <h3 className="font-title-lg text-title-lg text-primary font-bold">
                  {details.packageName}
                </h3>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                {details.formattedPrice}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-surface-container text-xs">
              <div>
                <span className="text-on-surface-variant block">Traveler</span>
                <strong className="text-primary">{details.guestName}</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">Party Size</span>
                <strong className="text-primary">{details.travelers} Guests</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">Duration</span>
                <strong className="text-primary">{details.nights} Nights</strong>
              </div>
              <div>
                <span className="text-on-surface-variant block">Vehicle</span>
                <strong className="text-primary uppercase">{details.vehicleType || 'Luxury Van'}</strong>
              </div>
            </div>

            {details.destinations && (
              <div className="pt-2">
                <span className="text-xs text-on-surface-variant block mb-1">Route Waypoints:</span>
                <div className="flex flex-wrap gap-1">
                  {details.destinations.map((d: string) => (
                    <span
                      key={d}
                      className="px-2 py-0.5 rounded-full bg-surface-container text-primary text-[11px] font-medium"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Next Steps Timeline */}
          <div>
            <h4 className="font-title-md text-title-md text-primary font-bold mb-3">
              What Happens Next?
            </h4>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </span>
                <p>
                  <strong>Within 2 Hours:</strong> Your dedicated Sri Lankan chauffeur guide and travel director review your dates and confirm room availability at our partner eco-villas.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </span>
                <p>
                  <strong>WhatsApp &amp; Email Dossier:</strong> You will receive a detailed PDF day-by-day briefing with exact villa choices, road timing, and private contact for your driver.
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </span>
                <p>
                  <strong>Zero-Risk Guarantee:</strong> No deposit is required today. You can modify any day of the route without penalty up to 14 days before your arrival in Colombo.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Support Ribbon */}
          <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">support_agent</span>
              <span className="text-on-surface">
                Need urgent changes? Call Colombo Desk: <strong>+94 11 234 5678</strong>
              </span>
            </div>
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>WhatsApp Us</span>
              <span className="material-symbols-outlined text-[14px]">open_in_new</span>
            </a>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 md:p-6 bg-surface-container-low border-t border-surface-container flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-full bg-surface-container-lowest text-primary font-title-md text-title-md hover:bg-surface-container border border-outline-variant/30 flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Print Itinerary Voucher</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenConcierge();
              }}
              className="px-5 py-2.5 rounded-full bg-primary-container text-on-primary font-title-md text-title-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">neurology</span>
              <span>Ask Concierge Question</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-title-md text-title-md transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
