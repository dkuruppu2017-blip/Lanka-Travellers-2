import React from 'react';
import { DESTINATIONS, TOUR_PACKAGES, formatPrice } from '../data/travelData';
import { Currency, TourPackage } from '../types';

interface DestinationViewProps {
  destinationId: string;
  currency: Currency;
  onNavigate: (view: string, params?: any) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  onOpenConcierge: () => void;
}

export const DestinationView: React.FC<DestinationViewProps> = ({
  destinationId,
  currency,
  onNavigate,
  onSelectPackage,
  onOpenConcierge,
}) => {
  // Find destination matching id or slug
  const cleanId = destinationId.replace('destination-', '').toLowerCase();
  const dest =
    DESTINATIONS.find((d) => d.id === cleanId || d.name.toLowerCase().includes(cleanId)) ||
    DESTINATIONS[0];

  // Find tour packages that include this destination in their places
  const relevantPackages = TOUR_PACKAGES.filter((pkg) =>
    pkg.places.some((place) =>
      place.toLowerCase().includes(dest.name.toLowerCase()) ||
      dest.name.toLowerCase().includes(place.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Immersive Destination Hero */}
      <section className="relative w-full -mt-[120px] pt-[150px] pb-24 md:pb-32 bg-primary text-on-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('${dest.heroImage || dest.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-surface" />

        <div className="relative max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin z-10">
          <div className="flex flex-wrap items-center gap-space-xs text-on-primary/80 font-label-sm text-label-sm uppercase tracking-widest mb-space-sm">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary-fixed transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => onNavigate('travel-packages')}
              className="hover:text-primary-fixed transition-colors cursor-pointer"
            >
              Destinations
            </button>
            <span>/</span>
            <span className="text-secondary-fixed font-bold">{dest.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end pt-4">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-[0.2em] font-bold">
                {dest.region}
              </span>
              <h1 className="font-headline-xl text-headline-xl md:text-[3.5rem] md:leading-[4rem] text-on-primary">
                {dest.name}
              </h1>
              <p className="font-title-lg text-title-lg text-primary-fixed font-medium">
                {dest.tagline}
              </p>
              <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl leading-relaxed mt-2">
                {dest.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-surface-container-lowest/15 backdrop-blur-md p-space-lg rounded-2xl border border-white/10 text-on-primary shadow-xl">
              <div className="flex items-center justify-between pb-space-sm border-b border-white/10">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">
                  Travel Briefing
                </span>
                <span className="material-symbols-outlined text-secondary-container">thermostat</span>
              </div>
              <div className="flex flex-col gap-2 mt-space-sm font-body-sm text-body-sm">
                <div className="flex justify-between">
                  <span className="text-on-primary/70">Transit Time:</span>
                  <span className="font-bold text-on-primary">{dest.travelTimeFromColombo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-primary/70">Best Season:</span>
                  <span className="font-bold text-on-primary">{dest.bestSeason}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-primary/70">Climate:</span>
                  <span className="font-bold text-on-primary">{dest.climate}</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('plan-custom-trip')}
                className="mt-space-md w-full py-2.5 rounded-full bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-title-md text-title-md transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Include in Custom Trip</span>
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights & Top Experiences */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin -mt-8 relative z-20 w-full">
        <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md border border-outline-variant/30">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                Unmissable Experiences
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-1">
                Signature Moments in {dest.name}
              </h2>
            </div>
            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-2 text-primary font-title-md text-title-md hover:underline cursor-pointer"
            >
              <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">neurology</span>
              <span>Ask Concierge for Secret Spots</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {dest.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-space-sm"
              >
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 font-bold text-label-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-title-md text-title-md text-primary font-bold">{highlight}</h3>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mt-1">
                    Guided by private English chauffeur with skip-the-line VIP permits.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tour Packages that visit this Destination */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mt-16 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              Itineraries Including {dest.name}
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-1">
              Curated Private Tours
            </h2>
          </div>
          <button
            onClick={() => onNavigate('travel-packages')}
            className="inline-flex items-center gap-1.5 text-primary font-title-md text-title-md hover:text-primary-container transition-colors cursor-pointer"
          >
            <span>View All Packages</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {relevantPackages.length > 0
            ? relevantPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                      {pkg.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-primary/90 text-on-primary px-3 py-1 rounded-full font-label-sm text-label-sm">
                      {pkg.durationNights} Nights / {pkg.durationDays} Days
                    </div>
                  </div>

                  <div className="p-space-lg flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                        {pkg.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mb-3">
                        {pkg.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {pkg.places.slice(0, 4).map((p) => (
                          <span
                            key={p}
                            className={`px-2 py-0.5 rounded-full text-[11px] font-label-sm ${
                              p.toLowerCase().includes(dest.name.toLowerCase())
                                ? 'bg-secondary-container text-on-secondary-container font-bold'
                                : 'bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-space-md border-t border-surface-container flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-label-sm text-on-surface-variant block">From</span>
                        <span className="font-headline-sm text-headline-sm text-primary font-bold">
                          {formatPrice(pkg.priceUsd, currency)}
                        </span>
                      </div>
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="px-4 py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container font-title-md text-title-md transition-all cursor-pointer"
                      >
                        View Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : TOUR_PACKAGES.slice(0, 3).map((pkg) => (
                <div
                  key={pkg.id}
                  className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/30"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                      {pkg.badge}
                    </div>
                  </div>
                  <div className="p-space-lg flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                        {pkg.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                        {pkg.subtitle}
                      </p>
                    </div>
                    <div className="pt-space-md border-t border-surface-container flex items-center justify-between mt-4">
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        {formatPrice(pkg.priceUsd, currency)}
                      </span>
                      <button
                        onClick={() => onSelectPackage(pkg)}
                        className="px-4 py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container font-title-md text-title-md cursor-pointer"
                      >
                        View Itinerary
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </div>
  );
};
