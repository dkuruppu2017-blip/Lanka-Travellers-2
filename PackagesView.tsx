import React, { useState } from 'react';
import { TourPackage, Currency, PackageCategory } from '../types';
import { TOUR_PACKAGES, formatPrice } from '../data/travelData';

interface PackagesViewProps {
  currency: Currency;
  onNavigate: (view: string, params?: any) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  onBookPackage?: (pkg: TourPackage) => void;
  onOpenConcierge?: () => void;
  initialFilter?: string;
  initialCategory?: string;
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  currency,
  onNavigate,
  onSelectPackage,
  onBookPackage,
  onOpenConcierge,
  initialFilter,
  initialCategory,
}) => {
  const [activeFilter, setActiveFilter] = useState<PackageCategory>(
    (initialCategory as PackageCategory) || (initialFilter as PackageCategory) || 'all'
  );

  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    if (activeFilter === 'all') return true;
    return pkg.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. Top Breadcrumb & Hero Header */}
      <section className="w-full bg-[#ecf6ef] py-10 sm:py-14 border-b border-[#c0c9c3]/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          {/* Breadcrumb Bar */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#404944] mb-4 font-semibold"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="hover:text-[#003628] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#c0c9c3]">/</span>
            <span className="text-[#003628] font-bold">Travel Packages</span>
          </nav>

          {/* Editorial Intro Block */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b6eed7] text-[#002117] text-xs font-bold mb-3">
              <span className="material-symbols-outlined text-[15px]">eco</span>
              <span>Bespoke Journeys · SLTDA Certified</span>
            </div>
            <h1 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl text-[#003628] mb-3 tracking-tight font-semibold">
              Curated Sri Lanka Travel Packages & Tour Itineraries
            </h1>
            <p className="font-body-lg text-sm sm:text-base text-[#404944] leading-relaxed">
              Discover our most sought-after journeys across the island. Every package includes a private air-conditioned vehicle, licensed English-speaking chauffeur-guide, luxury accommodation, daily breakfast, and all landmark entrance tickets.
            </p>
          </div>

          {/* Filter / Category Tabs */}
          <div className="mt-8 flex flex-wrap items-center gap-2" id="package-filter-group">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#003628] text-white shadow-sm'
                  : 'bg-white text-[#404944] hover:text-[#151d1a] hover:bg-[#e6f0ea] border border-[#c0c9c3]/40'
              }`}
            >
              All Packages ({TOUR_PACKAGES.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cultural')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'cultural'
                  ? 'bg-[#003628] text-white shadow-sm'
                  : 'bg-white text-[#404944] hover:text-[#151d1a] hover:bg-[#e6f0ea] border border-[#c0c9c3]/40'
              }`}
            >
              Cultural & Heritage
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('hill-country')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'hill-country'
                  ? 'bg-[#003628] text-white shadow-sm'
                  : 'bg-white text-[#404944] hover:text-[#151d1a] hover:bg-[#e6f0ea] border border-[#c0c9c3]/40'
              }`}
            >
              Hill Country & Nature
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('coastal')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'coastal'
                  ? 'bg-[#003628] text-white shadow-sm'
                  : 'bg-white text-[#404944] hover:text-[#151d1a] hover:bg-[#e6f0ea] border border-[#c0c9c3]/40'
              }`}
            >
              Coastal & Wildlife
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('honeymoon')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'honeymoon'
                  ? 'bg-[#003628] text-white shadow-sm'
                  : 'bg-white text-[#404944] hover:text-[#151d1a] hover:bg-[#e6f0ea] border border-[#c0c9c3]/40'
              }`}
            >
              Luxury Honeymoon
            </button>
          </div>
        </div>
      </section>

      {/* 2. Comprehensive Package Cards Grid */}
      <section className="w-full py-12 sm:py-16 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-[#e1ebe4]"
              >
                {/* Card Image & Overlay Badges */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = pkg.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003628]/80 via-transparent to-transparent pointer-events-none"></div>

                  {/* Region Badge Top-Left */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#003628]">
                      <span className="material-symbols-outlined text-[14px]">pin_drop</span>
                      {pkg.region}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#b6eed7] text-[#002117] rounded-full text-xs font-semibold">
                      <span className="material-symbols-outlined text-[13px]">eco</span>
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Duration Tag Top-Right */}
                  <div className="absolute top-4 right-4 bg-[#fe932c] text-[#663500] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {pkg.durationDays} Days / {pkg.durationNights} Nights
                  </div>

                  {/* Price Floating Bottom-Left */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#e1ebe4] font-semibold">
                        Twin Sharing
                      </p>
                      <p className="font-headline-sm text-2xl font-bold text-white leading-none">
                        {formatPrice(pkg.priceUsd, currency)}{' '}
                        <span className="text-xs font-normal text-white/80">/ person</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium">
                      <span className="material-symbols-outlined text-[13px]">{pkg.tagIcon}</span>
                      {pkg.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-[#904d00] font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-[16px]">route</span>
                      <span>{pkg.route}</span>
                    </div>

                    <h2 className="font-headline-sm text-xl sm:text-2xl text-[#003628] font-bold">
                      {pkg.title}
                    </h2>

                    <p className="text-sm text-[#404944] leading-relaxed">
                      {pkg.shortDescription}
                    </p>

                    {/* Inclusions Checkmarks */}
                    <div className="bg-[#ecf6ef] p-4 rounded-xl mt-2 border border-[#b6eed7]/50">
                      <p className="text-xs uppercase tracking-wider text-[#003628] font-bold mb-2">
                        Places & Activities Included:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#151d1a]">
                        {pkg.places.map((place, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[15px] text-[#004e47] shrink-0">
                              check_circle
                            </span>
                            <span className="truncate">{place}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => (onBookPackage ? onBookPackage(pkg) : onSelectPackage(pkg))}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#003628] text-white hover:bg-[#164e3d] px-5 py-3 rounded-full font-bold text-sm transition-all shadow-sm cursor-pointer"
                    >
                      <span>Book Now</span>
                      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e6f0ea] hover:bg-[#dbe5de] text-[#003628] px-5 py-3 rounded-full font-bold text-sm transition-all cursor-pointer"
                    >
                      <span>View Full Itinerary</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What Every Lanka Travellers Package Includes (Inclusions vs Exclusions) */}
      <section className="w-full bg-[#e6f0ea] py-16 border-y border-[#c0c9c3]/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#904d00] font-bold">
              Uncompromising Transparency
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-[#003628] mt-1 mb-2 font-bold">
              What Every Package Includes
            </h2>
            <p className="text-sm sm:text-base text-[#404944]">
              We pride ourselves on 100% price transparency. No hidden fuel surcharges, driver tipping disputes, or surprise gate fees.
            </p>
          </div>

          {/* Inclusions vs Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guaranteed Inclusions Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between border border-[#b6eed7]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#b6eed7] flex items-center justify-center text-[#003628]">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg sm:text-xl text-[#003628] font-bold">
                      Always Included with Lanka Travellers
                    </h3>
                    <p className="text-xs text-[#404944]">Guaranteed on all private bookings</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#151d1a]">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004e47] text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-bold text-[#003628]">Private Luxury A/C Vehicle: </strong>
                      <span className="text-[#404944]">
                        Unlimited mileage, highway toll fees, parking, and vehicle fuel throughout your entire route.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004e47] text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-bold text-[#003628]">Dedicated Chauffeur-Guide: </strong>
                      <span className="text-[#404944]">
                        Government SLTDA-licensed English-speaking personal guide with all guide accommodations and meals covered.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004e47] text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-bold text-[#003628]">All Landmark & National Park Entry Tickets: </strong>
                      <span className="text-[#404944]">
                        Full admission passes to Sigiriya, Dambulla, safari 4x4 jeeps, and botanical gardens pre-purchased.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004e47] text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-bold text-[#003628]">4-Star & Boutique Heritage Hotels: </strong>
                      <span className="text-[#404944]">
                        Handpicked boutique tea bungalows, colonial estates, and coastal resorts with premium ocean/mountain views.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004e47] text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-bold text-[#003628]">Daily Organic Breakfast & Tea Tastings: </strong>
                      <span className="text-[#404944]">
                        Fresh farm-to-table breakfast spreads featuring tropical fruits, artisanal Ceylon tea, and traditional curries.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#004e47] text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-bold text-[#003628]">24/7 On-Ground Concierge Hotline: </strong>
                      <span className="text-[#404944]">
                        Direct WhatsApp lifeline to our Colombo headquarter team for instant itinerary shifts or doctor on call.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 bg-[#ecf6ef] p-3 rounded-xl flex items-center justify-between text-xs">
                <span className="text-[#404944] font-medium">SLTDA Guarantee Standard</span>
                <span className="text-[#003628] font-bold">100% Insured Fleet</span>
              </div>
            </div>

            {/* Exclusions & Optional Additions Box */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-between border border-[#ffdad6]">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#ffdad6] flex items-center justify-center text-[#ba1a1a]">
                    <span className="material-symbols-outlined text-[24px]">info</span>
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg sm:text-xl text-[#151d1a] font-bold">
                      Exclusions & Traveler Extras
                    </h3>
                    <p className="text-xs text-[#404944]">Items not covered in the package base price</p>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[#151d1a]">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#707974] text-[20px] mt-0.5 shrink-0">
                      cancel
                    </span>
                    <div>
                      <strong className="font-bold text-[#151d1a]">International Flights & Transit: </strong>
                      <span className="text-[#404944]">
                        Arrival flights into Bandaranaike International Airport (CMB) or Mattala Rajapaksa Airport (HRI).
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#707974] text-[20px] mt-0.5 shrink-0">
                      cancel
                    </span>
                    <div>
                      <strong className="font-bold text-[#151d1a]">Sri Lanka Tourist Visa (ETA): </strong>
                      <span className="text-[#404944]">
                        Electronic Travel Authorization fee (we provide free step-by-step application assistance).
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#707974] text-[20px] mt-0.5 shrink-0">
                      cancel
                    </span>
                    <div>
                      <strong className="font-bold text-[#151d1a]">Personal Expenses & Souvenirs: </strong>
                      <span className="text-[#404944]">
                        Spices, gem purchases, laundry, alcoholic beverages, and discretionary tips for hotel porters.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#707974] text-[20px] mt-0.5 shrink-0">
                      cancel
                    </span>
                    <div>
                      <strong className="font-bold text-[#151d1a]">Commercial Drone / Camera Permits: </strong>
                      <span className="text-[#404944]">
                        Special video production permits at selected UNESCO archaeological sites and religious shrines.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#707974] text-[20px] mt-0.5 shrink-0">
                      cancel
                    </span>
                    <div>
                      <strong className="font-bold text-[#151d1a]">Travel & Medical Insurance: </strong>
                      <span className="text-[#404944]">
                        We strongly advise obtaining comprehensive international travel medical and luggage insurance.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 bg-[#e1ebe4] p-3 rounded-xl flex items-center justify-between text-xs">
                <span className="text-[#404944] font-medium">Add-on Option</span>
                <span className="text-[#904d00] font-bold">All-Inclusive Meal Plan Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Visual Element: Ceylon Travel Map & Route Highlights */}
      <section className="w-full py-16 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="bg-[#003628] text-white rounded-3xl overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#164e3d] text-[#89f5e7] text-xs font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[15px]">explore</span>
                Interactive Island Coverage
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl tracking-tight text-white font-bold leading-tight">
                Traverse From Foggy Tea Estates to Warm Indian Ocean Reefs
              </h2>
              <p className="text-sm sm:text-base text-[#b6eed7] leading-relaxed">
                Every route is engineered around Geoffrey Bawa's principles of tropical spatial movement. Seamless road transitions, panoramic train crossings over the Nine Arches Viaduct, and private boat transfers maximize relaxation.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#164e3d]/60 p-3 rounded-xl text-center border border-white/10">
                  <span className="block font-headline-sm text-xl sm:text-2xl text-[#fe932c] font-bold">
                    98%
                  </span>
                  <span className="text-[11px] text-white/80">5-Star Reviews</span>
                </div>
                <div className="bg-[#164e3d]/60 p-3 rounded-xl text-center border border-white/10">
                  <span className="block font-headline-sm text-xl sm:text-2xl text-[#fe932c] font-bold">
                    14+
                  </span>
                  <span className="text-[11px] text-white/80">Years Operating</span>
                </div>
                <div className="bg-[#164e3d]/60 p-3 rounded-xl text-center border border-white/10">
                  <span className="block font-headline-sm text-xl sm:text-2xl text-[#fe932c] font-bold">
                    100%
                  </span>
                  <span className="text-[11px] text-white/80">Customizable</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div
                className="w-full h-80 bg-cover bg-center rounded-2xl shadow-inner relative overflow-hidden border border-white/20"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPw5BAuk8hq2zaHTHz2zCospJ77ekxkL1RGTPvC77sJgqhfJ_ue3Jk6QkOpeAIY4Ha5wqFK0iRQA2ovFw0jlMWsNHqDrH4x2K-uK5hNMgijLlS36AsS7s6Ur-Q6TYbWsHdvLqUKtzEbNNCFWoc38b1t1JH1Gs6pVC5HUgY6Oc0XnHMg5PN-86HaHV5r3fF-uQK4pQnhNSpIVzjTcmIdOK2outv4JHYusCw8eT8ImwrB-F1ydtGS6QZiw')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#003628]/70 via-transparent to-transparent flex items-end p-4">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[#003628] flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[#904d00] text-[18px]">pin_drop</span>
                    <span className="text-xs font-bold">Ella · Central Highlands Hub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Customization Callout Box */}
      <section className="w-full pb-16 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#ecf6ef] via-white to-[#e1ebe4] rounded-2xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-[#b6eed7]/50">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-12 h-12 rounded-full bg-[#fe932c] flex items-center justify-center text-[#663500] shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[28px]">design_services</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-headline-sm text-xl text-[#003628] font-bold">
                  Looking for a Tailored Route?
                </h3>
                <p className="text-sm text-[#404944] leading-relaxed">
                  Customize any package with extra days, beach extensions, or safari add-ons. Our Sri Lankan travel designers craft unique itineraries tailored to your pace, preferences, and style.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('plan-custom-trip')}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#fe932c] text-[#663500] hover:bg-[#904d00] hover:text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-[0_4px_16px_rgba(254,147,44,0.35)] cursor-pointer"
              >
                <span>Plan Custom Trip</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
