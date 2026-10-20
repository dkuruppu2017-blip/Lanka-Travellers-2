import React, { useState } from 'react';
import { TourPackage, Currency } from '../types';
import { TOUR_PACKAGES, TESTIMONIALS, formatPrice } from '../data/travelData';

interface HomeViewProps {
  currency: Currency;
  onNavigate: (view: string, params?: any) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  onOpenConcierge: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currency,
  onNavigate,
  onSelectPackage,
  onOpenConcierge,
}) => {
  const [searchDestination, setSearchDestination] = useState('all');
  const [searchDuration, setSearchDuration] = useState('medium');
  const [searchStyle, setSearchStyle] = useState('luxury');

  const featuredPackages = TOUR_PACKAGES.filter((p) => p.featured).slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('travel-packages', {
      destination: searchDestination,
      duration: searchDuration,
      style: searchStyle,
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION WITH CINEMATIC BACKGROUND */}
      <section className="relative w-full -mt-[120px] pt-[140px] pb-10 md:pb-28 overflow-hidden min-h-[720px] lg:min-h-[820px] flex items-center justify-center">
        {/* Cinematic Background Image with Gradient Scrim */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt9Gb-ys8eS-bfEGu309S6FNkIfI0sGEtP8CHTgrzUsMrBPQgo8dacpuj9ih4h-a4fb1LL0R23gOSDTwX8B5jsDZ8yjzXCWZwdMv5YIqSn-aeubX1gTUUava1QWVa9BiXFEeFMjSGwl-n7OizHymJK3ksXmZbOF-HYrL370I4NgIhUErLI8W8oK91WCIQuUm0vtHrpCy0hJDOYLlRiZe7wgVuES9ONrkRgFK5nLAI-V7CcjJze7YNpHw')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#003628]/75 via-[#003628]/50 to-[#003628]/95"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 md:px-8 lg:px-12 flex flex-col items-center text-center">
          {/* Verified Distinction Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-[#b6eed7] mb-4 shadow-sm border border-white/10">
            <span className="material-symbols-outlined text-[16px] text-[#ffdcc3]">workspace_premium</span>
            <span className="text-[0.6875rem] font-bold tracking-wider uppercase">
              SLTDA Certified • Ceylon Heritage Escapes
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline-xl text-3xl sm:text-5xl lg:text-[3.5rem] lg:leading-[4rem] text-white font-semibold max-w-4xl tracking-tight leading-tight mb-4">
            Discover the Wonder of Sri Lanka — The Pearl of the Indian Ocean
          </h1>

          {/* Supporting Narrative */}
          <p className="font-body-lg text-base sm:text-lg text-white/90 max-w-2xl font-light leading-relaxed mb-8">
            Handcrafted itineraries, private chauffeur guides, authentic cultural heritage, and misty highland tea plantations curated by local specialists.
          </p>

          {/* Interactive Quick Trip Search Bar */}
          <div className="w-full max-w-4xl bg-white rounded-2xl md:rounded-full p-3 shadow-2xl backdrop-blur-md border border-white/40">
            <form
              onSubmit={handleSearchSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 items-center text-left"
            >
              {/* Destination Field */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ecf6ef]/80 hover:bg-[#ecf6ef] transition-colors">
                <span className="material-symbols-outlined text-[#003628] text-[22px]">explore</span>
                <div className="flex flex-col min-w-0 flex-1">
                  <label
                    htmlFor="search-dest"
                    className="text-[10px] uppercase text-[#404944] font-bold"
                  >
                    Destination
                  </label>
                  <select
                    id="search-dest"
                    value={searchDestination}
                    onChange={(e) => setSearchDestination(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm text-[#151d1a] font-semibold focus:outline-none cursor-pointer truncate"
                  >
                    <option value="all">All Island Tour</option>
                    <option value="sigiriya">Sigiriya & Cultural Triangle</option>
                    <option value="ella">Ella & Misty Highlands</option>
                    <option value="coast">Southern Coast & Mirissa</option>
                    <option value="safari">Yala & Wildlife Parks</option>
                    <option value="kandy">Kandy & Sacred Ceylon</option>
                  </select>
                </div>
              </div>

              {/* Duration Field */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ecf6ef]/80 hover:bg-[#ecf6ef] transition-colors">
                <span className="material-symbols-outlined text-[#003628] text-[22px]">calendar_month</span>
                <div className="flex flex-col min-w-0 flex-1">
                  <label
                    htmlFor="search-dur"
                    className="text-[10px] uppercase text-[#404944] font-bold"
                  >
                    Duration
                  </label>
                  <select
                    id="search-dur"
                    value={searchDuration}
                    onChange={(e) => setSearchDuration(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm text-[#151d1a] font-semibold focus:outline-none cursor-pointer truncate"
                  >
                    <option value="short">3 - 5 Days Escape</option>
                    <option value="medium">7 - 10 Days Grand Tour</option>
                    <option value="long">12 - 14 Days Explorer</option>
                    <option value="extended">14+ Days Comprehensive</option>
                  </select>
                </div>
              </div>

              {/* Travel Style Field */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ecf6ef]/80 hover:bg-[#ecf6ef] transition-colors">
                <span className="material-symbols-outlined text-[#003628] text-[22px]">style</span>
                <div className="flex flex-col min-w-0 flex-1">
                  <label
                    htmlFor="search-style"
                    className="text-[10px] uppercase text-[#404944] font-bold"
                  >
                    Travel Style
                  </label>
                  <select
                    id="search-style"
                    value={searchStyle}
                    onChange={(e) => setSearchStyle(e.target.value)}
                    className="bg-transparent text-xs sm:text-sm text-[#151d1a] font-semibold focus:outline-none cursor-pointer truncate"
                  >
                    <option value="luxury">Luxury & Tea Bungalows</option>
                    <option value="culture">Heritage & Ancient Sites</option>
                    <option value="wildlife">Wildlife Safari & Eco</option>
                    <option value="family">Family & Leisure Coast</option>
                  </select>
                </div>
              </div>

              {/* Find Journey CTA */}
              <div className="flex items-center">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#fe932c] hover:bg-[#904d00] text-[#663500] hover:text-white px-5 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-md cursor-pointer"
                >
                  <span>Find Journey</span>
                  <span className="material-symbols-outlined text-[18px]">search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Trust Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 max-w-4xl w-full">
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md rounded-full py-2 px-4 border border-white/10">
              <span className="material-symbols-outlined text-[#b6eed7] text-[18px]">tune</span>
              <span className="truncate">100% Tailor-made</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md rounded-full py-2 px-4 border border-white/10">
              <span className="material-symbols-outlined text-[#b6eed7] text-[18px]">verified_user</span>
              <span className="truncate">SLTDA Licensed Guides</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md rounded-full py-2 px-4 border border-white/10">
              <span className="material-symbols-outlined text-[#b6eed7] text-[18px]">headset_mic</span>
              <span className="truncate">24/7 On-Ground Support</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md rounded-full py-2 px-4 border border-white/10">
              <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">star</span>
              <span className="truncate">4.9/5 (1,400+ Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION & BRAND NARRATIVE SECTION */}
      <section className="w-full py-16 lg:py-24 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Editorial Storytelling Column */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 text-[#904d00] font-bold text-xs uppercase tracking-widest">
                <span className="w-8 h-0.5 bg-[#904d00]"></span>
                <span>Authentic Ceylon Exploration</span>
              </div>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold leading-tight">
                Your Trusted Gateway to the Unspoiled Spirit of Sri Lanka
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-[#404944] leading-relaxed">
                For more than 12 years, Lanka Travellers has brought discerning voyagers into deep communion with the Island of Jewels. Drawing inspiration from tropical modernist architecture and ancient Sinhalese water-gardens, we choreograph slow journeys that balance serene private comfort with spontaneous wonder.
              </p>
              <p className="font-body-md text-sm sm:text-base text-[#404944]/90 leading-relaxed">
                From the mist-crowned Nine Arch Viaduct in Ella to sacred dagobas in Anuradhapura and wild leopard sanctuaries in Yala, our hand-selected chauffeur guides provide seamless navigation, quiet insight, and deep respect for our delicate ecological landscape.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about-us')}
                  className="inline-flex items-center gap-2 bg-[#003628] text-white hover:bg-[#164e3d] px-6 py-3 rounded-full font-bold text-sm sm:text-base transition-all shadow-sm cursor-pointer"
                >
                  <span>Read Our Story</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#e6f0ea] text-[#151d1a]">
                  <span className="material-symbols-outlined text-[#003628] text-[20px]">eco</span>
                  <span className="font-semibold text-xs sm:text-sm">Zero Plastic & Community-First Tourism</span>
                </div>
              </div>
            </div>

            {/* Right Visual Mosaic & Certified Seal */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#e6f0ea] rounded-3xl p-4 sm:p-6 shadow-lg border border-[#c0c9c3]/30">
                <div
                  className="w-full h-80 rounded-2xl bg-cover bg-center overflow-hidden shadow-inner relative"
                  style={{
                    backgroundImage: `url('/assets/aistudio/Image_1_4f9ae6e0.jpeg')`,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-[#003628]/85 via-transparent to-transparent flex items-end p-5">
                    <span className="text-white font-headline-sm text-lg sm:text-xl font-bold">
                      Highland Scenic Railway, Ella
                    </span>
                  </div>
                </div>

                {/* Floating Architectural Badge */}
                <div className="mt-4 bg-white p-4 rounded-2xl shadow-md flex items-center justify-between gap-4 border border-[#e1ebe4]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#b6eed7] flex items-center justify-center text-[#003628]">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm text-[#003628]">Government Certified</span>
                      <span className="text-xs text-[#404944]">Sri Lanka Tourism Development Authority</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#e6f0ea] text-[#003628] uppercase">
                    A+ Grade
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats Strip Bento */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-6 border-t border-[#c0c9c3]/30">
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-xs">
              <span className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold">12+</span>
              <span className="text-xs font-bold text-[#904d00] uppercase mt-1">Years Curating</span>
              <span className="text-xs text-[#404944] mt-0.5">Bespoke Ceylon Travel</span>
            </div>
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-xs">
              <span className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold">15,000+</span>
              <span className="text-xs font-bold text-[#904d00] uppercase mt-1">Guests Hosted</span>
              <span className="text-xs text-[#404944] mt-0.5">From 48 Countries</span>
            </div>
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-xs">
              <span className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold">98%</span>
              <span className="text-xs font-bold text-[#904d00] uppercase mt-1">5-Star Ratings</span>
              <span className="text-xs text-[#404944] mt-0.5">Verified on TripAdvisor</span>
            </div>
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col justify-center items-center text-center shadow-xs">
              <span className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold">100+</span>
              <span className="text-xs font-bold text-[#904d00] uppercase mt-1">Chauffeur Guides</span>
              <span className="text-xs text-[#404944] mt-0.5">Multilingual & Licensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS & PACKAGES PREVIEW */}
      <section className="w-full py-16 lg:py-24 bg-[#ecf6ef]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col gap-1 max-w-2xl">
              <span className="text-xs font-bold text-[#904d00] uppercase tracking-widest">
                Signature Itineraries
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold">
                Featured Ceylon Expeditions
              </h2>
              <p className="text-sm sm:text-base text-[#404944]">
                Each itinerary is meticulously crafted with premier boutique accommodations, private air-conditioned vehicles, and cultural access.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('travel-packages')}
              className="inline-flex items-center gap-1.5 text-[#003628] hover:text-[#164e3d] font-bold text-sm sm:text-base transition-colors group cursor-pointer self-start md:self-auto"
            >
              <span>View All 8 Itineraries</span>
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          {/* 4 Highlight Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group border border-[#e1ebe4]"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-cover bg-center">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = pkg.fallbackImage;
                      }}
                    />
                    <span className="absolute top-3 left-3 bg-[#003628] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {pkg.badge}
                    </span>
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#003628] text-xs px-2.5 py-0.5 rounded-full font-bold">
                      {pkg.durationDays}D / {pkg.durationNights}N
                    </span>
                  </div>

                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#904d00] uppercase font-bold tracking-wider">
                        {pkg.region}
                      </span>
                      <div className="flex items-center gap-1 text-[#fe932c]">
                        <span className="material-symbols-outlined text-[14px]">star</span>
                        <span className="text-xs font-bold text-[#904d00]">{pkg.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-headline-sm text-base sm:text-lg text-[#003628] font-bold group-hover:text-[#904d00] transition-colors leading-snug">
                      {pkg.title}
                    </h3>

                    <ul className="flex flex-col gap-1.5 py-1 text-xs text-[#404944]">
                      {pkg.places.slice(0, 3).map((place, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 truncate">
                          <span className="material-symbols-outlined text-[15px] text-[#004e47] shrink-0">
                            check_circle
                          </span>
                          <span className="truncate">{place}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between mt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#707974] uppercase font-bold">From</span>
                    <span className="text-lg font-bold text-[#003628]">
                      {formatPrice(pkg.priceUsd, currency)}{' '}
                      <span className="text-xs font-normal text-[#404944]">/ person</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="bg-[#e6f0ea] hover:bg-[#003628] hover:text-white text-[#003628] px-4 py-2 rounded-full font-bold text-xs transition-all shadow-xs cursor-pointer"
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY TRAVEL WITH US FEATURE SECTION */}
      <section className="w-full py-16 lg:py-24 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#904d00] uppercase tracking-widest">
              The Lanka Travellers Standard
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold mt-2">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-sm sm:text-base text-[#404944] mt-2">
              We blend high-end boutique hospitality with intimate cultural access, giving you effortless security and authentic encounters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col items-start gap-4 shadow-xs border border-[#c0c9c3]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#003628] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[26px]">directions_car</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#003628] font-bold">
                Private A/C Vehicles & Expert Chauffeurs
              </h3>
              <p className="text-xs sm:text-sm text-[#404944] leading-relaxed">
                Travel without stress in premium air-conditioned hybrid sedans and vans with English-speaking, government-certified guides.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col items-start gap-4 shadow-xs border border-[#c0c9c3]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#904d00] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[26px]">villa</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#003628] font-bold">
                Handpicked Heritage Tea Bungalows
              </h3>
              <p className="text-xs sm:text-sm text-[#404944] leading-relaxed">
                Selected for architectural pedigree, sustainability practices, and breathtaking views, from colonial planters' estates to coastal havens.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col items-start gap-4 shadow-xs border border-[#c0c9c3]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#004e47] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[26px]">volunteer_activism</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#003628] font-bold">
                Sustainable & Community-First
              </h3>
              <p className="text-xs sm:text-sm text-[#404944] leading-relaxed">
                5% of all expedition proceeds directly fund rural village schools in Polonnaruwa and humane wild elephant corridor preservation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col items-start gap-4 shadow-xs border border-[#c0c9c3]/30">
              <div className="w-12 h-12 rounded-2xl bg-[#164e3d] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[26px]">price_check</span>
              </div>
              <h3 className="font-headline-sm text-lg text-[#003628] font-bold">
                Transparent Pricing & Zero Hidden Fees
              </h3>
              <p className="text-xs sm:text-sm text-[#404944] leading-relaxed">
                All entrance fees, highway tolls, taxes, chauffeur allowances, and hotel breakfasts are fully inclusive from quote day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE MAP & ROUTE HIGHLIGHTS */}
      <section className="w-full py-16 lg:py-20 bg-[#e1ebe4]/50">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-[#c0c9c3]/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 text-[#904d00] text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[20px]">map</span>
                  <span>Intelligent Route Planning</span>
                </div>
                <h2 className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold leading-tight">
                  An Island of Contrasts in One Seamless Loop
                </h2>
                <p className="text-sm sm:text-base text-[#404944] leading-relaxed">
                  Sri Lanka is uniquely compact. Within six hours of the golden Indian Ocean surf, you can stand amidst cool misty pine forests and ancient rock citadels. Our master planners ensure you spend your days soaking in wonder, not stuck in traffic.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#ecf6ef]">
                    <span className="material-symbols-outlined text-[#003628] mt-1">navigation</span>
                    <div>
                      <span className="text-sm font-bold text-[#003628]">Smart Transfers</span>
                      <p className="text-xs text-[#404944]">
                        Optimized travel windows avoiding monsoon rain belts and highway bottlenecks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#ecf6ef]">
                    <span className="material-symbols-outlined text-[#904d00] mt-1">flight_takeoff</span>
                    <div>
                      <span className="text-sm font-bold text-[#003628]">Door-to-Door Airport Concierge</span>
                      <p className="text-xs text-[#404944]">
                        VIP greeting at Bandaranaike International (CMB) with custom cold Ceylon king coconut.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenConcierge}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#003628] hover:text-[#164e3d] bg-[#e6f0ea] px-4 py-2 rounded-full cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#fe932c]">psychology</span>
                    <span>Ask AI Concierge to compute your custom transit timings</span>
                  </button>
                </div>
              </div>

              {/* Interactive Location Map Visual */}
              <div className="lg:col-span-7">
                <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-md">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYc8qHYsZA07K5SFGI1aQdSByiRklVlqp8QMc1VcOSBltk0IMOXORNrB06sro1ow0nNCnvr83tq1bDDoPVaWyKQ6YVTPhUIhUKcISq92qtQCN3mp_51XsS4fcWyXr4WlHFuyv8DUdTzE5Syd09aDCPt0YNtE46zgmvRlI8Wz4i7rLcmLT8E8afCLCloiqV7V8iloFSHzluxJ-IRpKPFB7j5XFWCjoD4aLLhkRNQrSnfo7mzoDOyMJ1fw')`,
                    }}
                  >
                    {/* Location Overlay Tags */}
                    <button
                      type="button"
                      onClick={() => onNavigate('destination-sigiriya')}
                      className="absolute top-8 left-10 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#904d00]"></span>
                      <span className="text-xs text-[#003628] font-bold">Sigiriya Rock</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('destination-kandy')}
                      className="absolute top-1/2 left-1/3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#003628]"></span>
                      <span className="text-xs text-[#003628] font-bold">Kandy & Tea Estates</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate('destination-galle')}
                      className="absolute bottom-10 right-14 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#004e47]"></span>
                      <span className="text-xs text-[#003628] font-bold">Yala Safari & Mirissa</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRAVELER TESTIMONIALS & REAL GUEST REVIEWS */}
      <section className="w-full py-16 lg:py-24 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="flex flex-col gap-1 max-w-2xl">
              <span className="text-xs font-bold text-[#904d00] uppercase tracking-widest">
                Real Guest Memories
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-4xl text-[#003628] font-bold">
                Loved by Travelers Worldwide
              </h2>
              <p className="text-sm sm:text-base text-[#404944]">
                Read genuine feedback from guests who experienced Sri Lanka with our private chauffeur guides.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start md:self-auto">
              <div className="flex text-[#fe932c]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[20px]">
                    star
                  </span>
                ))}
              </div>
              <span className="text-base text-[#003628] font-bold">4.9 / 5.0</span>
              <span className="text-xs text-[#404944]">(1,420+ Reviews)</span>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#ecf6ef] p-6 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow border border-[#c0c9c3]/30"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#fe932c]">
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <span key={rIdx} className="material-symbols-outlined text-[18px]">
                          star
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-[#707974]">{item.date}</span>
                  </div>
                  <p className="text-sm text-[#151d1a] leading-relaxed italic">
                    {item.quote}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#c0c9c3]/30">
                  <div className="w-10 h-10 rounded-full bg-[#e6f0ea] flex items-center justify-center text-sm text-[#003628] font-bold ring-1 ring-[#003628]/20">
                    {item.avatarInitials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-[#003628] font-bold">{item.name}</span>
                    <span className="text-xs text-[#404944] flex items-center gap-1">
                      <span>{item.location}</span> {item.countryFlag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IMMERSIVE CALL TO ACTION BANNER */}
      <section className="w-full py-16 lg:py-24 bg-[#f2fcf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="relative bg-[#003628] rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 shadow-2xl flex flex-col items-center text-center">
            <div
              className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
              style={{
                backgroundImage: `url('/assets/aistudio/Image_5_049c5baf.jpeg')`,
              }}
            ></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#164e3d]/60 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl flex flex-col items-center">
              <span className="text-xs font-bold text-[#ffdcc3] uppercase tracking-widest mb-2">
                Tailor-Made Ceylon Journeys
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-5xl text-white font-bold tracking-tight leading-tight mb-4">
                Ready to Experience Sri Lanka Your Way?
              </h2>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8 max-w-2xl">
                Whether you envision a serene honeymoon overlooking misty tea estates, an exhilarating wildlife safari, or a heritage road trip across ancient kingdoms, our destination designers are ready to bring it to life.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <button
                  type="button"
                  onClick={() => onNavigate('plan-custom-trip')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#fe932c] hover:bg-[#904d00] text-[#663500] hover:text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <span>Design a Custom Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">edit_calendar</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenConcierge}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all backdrop-blur-sm cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Speak to an Island Specialist (AI)</span>
                </button>
              </div>

              <div className="mt-6 flex items-center gap-2 text-white/70 text-xs">
                <span className="material-symbols-outlined text-[16px] text-[#89f5e7]">lock</span>
                <span>Free consultation • Custom quote within 24 hours • Zero obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
