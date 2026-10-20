import React, { useState } from 'react';
import { Currency } from '../types';
import { DESTINATIONS, formatPrice } from '../data/travelData';

interface PlanTripViewProps {
  currency: Currency;
  onNavigate: (view: string, params?: any) => void;
  onOpenConcierge: () => void;
  onBookSuccess: (details: any) => void;
}

export const PlanTripView: React.FC<PlanTripViewProps> = ({
  currency,
  onNavigate,
  onOpenConcierge,
  onBookSuccess,
}) => {
  const [nights, setNights] = useState<number>(10);
  const [partySize, setPartySize] = useState<number>(2);
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([
    'Sigiriya',
    'Kandy',
    'Nuwara Eliya',
    'Ella',
    'Yala National Park',
    'Galle Fort',
  ]);
  const [travelStyle, setTravelStyle] = useState<'luxury' | 'boutique' | 'adventure' | 'honeymoon'>('boutique');
  const [vehicleType, setVehicleType] = useState<'sedan' | 'van' | 'suv'>('van');
  const [guideLanguage, setGuideLanguage] = useState<'English' | 'French' | 'German'>('English');
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // Destination toggle helper
  const toggleDestination = (name: string) => {
    if (selectedDestinations.includes(name)) {
      if (selectedDestinations.length > 1) {
        setSelectedDestinations(selectedDestinations.filter((d) => d !== name));
      }
    } else {
      setSelectedDestinations([...selectedDestinations, name]);
    }
  };

  // Base calculation
  const styleMultiplier = travelStyle === 'luxury' ? 260 : travelStyle === 'honeymoon' ? 240 : travelStyle === 'boutique' ? 175 : 135;
  const vehicleDayRate = vehicleType === 'suv' ? 95 : vehicleType === 'van' ? 75 : 55;
  
  const totalPerPersonUsd = Math.round(
    nights * styleMultiplier + (vehicleDayRate * nights) / partySize + selectedDestinations.length * 35
  );
  const totalPriceUsd = totalPerPersonUsd * partySize;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = 'LT-' + Math.floor(100000 + Math.random() * 900000);
    onBookSuccess({
      bookingId: reference,
      packageName: `Custom ${nights}-Night Ceylon Private Expedition`,
      nights,
      travelers: partySize,
      destinations: selectedDestinations,
      travelStyle,
      vehicleType,
      guideLanguage,
      guestName: guestName || 'Esteemed Guest',
      guestEmail: guestEmail || 'guest@example.com',
      guestPhone: guestPhone || '+94 77 123 4567',
      totalUsd: totalPriceUsd,
      formattedPrice: formatPrice(totalPriceUsd, currency),
      notes: specialRequests,
    });
  };

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Editorial Header */}
      <section className="relative w-full -mt-[120px] pt-[150px] pb-16 bg-primary text-on-primary overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay scale-105"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAt9Gb-ys8eS-bfEGu309S6FNkIfI0sGEtP8CHTgrzUsMrBPQgo8dacpuj9ih4h-mY3h8qNqE5oFf4z4s3_J1sCgN7_8F4s_8g0K2aA9s1')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-surface" />

        <div className="relative max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin z-10">
          <div className="flex flex-wrap items-center gap-space-xs text-on-primary/80 font-label-sm text-label-sm uppercase tracking-widest mb-space-sm">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary-fixed transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-secondary-fixed font-bold">Custom Trip Builder</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl">
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-[0.2em] font-bold">
                100% Tailored Private Travel
              </span>
              <h1 className="font-headline-xl text-headline-xl md:text-[3.25rem] md:leading-[3.75rem] text-on-primary mt-2">
                Co-Design Your Private <br className="hidden sm:inline" />
                <span className="italic font-light text-primary-fixed">Ceylon Itinerary</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary/85 mt-2 max-w-2xl">
                Choose your destinations, travel tempo, private vehicle class, and comfort level. Our dynamic calculator computes real-time pricing backed by certified chauffeur guides.
              </p>
            </div>

            <button
              onClick={onOpenConcierge}
              className="inline-flex items-center gap-space-xs bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 border border-white/20 text-on-primary px-space-lg py-3 rounded-full font-title-md text-title-md transition-all self-start lg:self-auto cursor-pointer shadow-lg"
            >
              <span className="material-symbols-outlined text-tertiary-fixed text-[20px]">neurology</span>
              <span>Need Inspiration? Ask AI Concierge</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Builder Form & Real-Time Price Sticky Sidebar */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin -mt-6 relative z-20 w-full">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Builder Controls (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            {/* Step 1: Duration & Travelers */}
            <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-space-sm pb-space-sm border-b border-surface-container">
                <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-sm">
                  1
                </span>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary">Duration &amp; Party Size</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    How many nights and who will be exploring the island?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xl mt-space-lg">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="duration-slider" className="font-title-md text-title-md text-on-surface font-semibold">
                      Trip Duration
                    </label>
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                      {nights} Nights / {nights + 1} Days
                    </span>
                  </div>
                  <input
                    id="duration-slider"
                    type="range"
                    min={3}
                    max={21}
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[11px] font-label-sm text-on-surface-variant mt-1.5">
                    <span>3 Nights (Quick escape)</span>
                    <span>10 Nights (Classic Ceylon)</span>
                    <span>21 Nights (Grand In-Depth)</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="travelers-count" className="font-title-md text-title-md text-on-surface font-semibold block mb-2">
                    Number of Travelers
                  </label>
                  <div className="flex items-center gap-space-sm">
                    {[1, 2, 3, 4, 6].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPartySize(num)}
                        className={`flex-1 py-2.5 rounded-xl font-title-md text-title-md transition-all cursor-pointer ${
                          partySize === num
                            ? 'bg-primary text-on-primary shadow-sm'
                            : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                        }`}
                      >
                        {num === 6 ? '6+' : num}
                      </button>
                    ))}
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-2 block">
                    {partySize === 1 ? 'Solo private journey' : partySize === 2 ? 'Couple / Twin share' : 'Family or small private group'}
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2: Choose Destination Stops */}
            <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-sm">
                    2
                  </span>
                  <div>
                    <h2 className="font-title-lg text-title-lg text-primary">Select Desired Destinations</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Choose which iconic regions to include in your bespoke loop
                    </p>
                  </div>
                </div>
                <span className="text-secondary font-bold font-label-sm text-label-sm">
                  {selectedDestinations.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-space-md mt-space-lg">
                {DESTINATIONS.map((dest) => {
                  const isSelected = selectedDestinations.includes(dest.name);
                  return (
                    <div
                      key={dest.name}
                      onClick={() => toggleDestination(dest.name)}
                      className={`relative p-space-md rounded-xl cursor-pointer transition-all border ${
                        isSelected
                          ? 'border-primary bg-primary-container/10 ring-1 ring-primary shadow-sm'
                          : 'border-outline-variant/40 bg-surface hover:border-outline-variant'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-title-md text-title-md text-primary font-bold">
                            {dest.name}
                          </h3>
                          <span className="font-label-sm text-label-sm text-secondary block">
                            {dest.tagline}
                          </span>
                        </div>
                        <span
                          className={`material-symbols-outlined text-[20px] ${
                            isSelected ? 'text-primary' : 'text-outline-variant'
                          }`}
                        >
                          {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                        </span>
                      </div>
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-2 line-clamp-2">
                        {dest.highlights.join(' • ')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Travel Style & Accommodation Tier */}
            <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-space-sm pb-space-sm border-b border-surface-container">
                <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-sm">
                  3
                </span>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary">Accommodation &amp; Travel Style</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    From tranquil heritage tea estates to boutique oceanfront villas
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-md mt-space-lg">
                {[
                  {
                    id: 'boutique',
                    title: 'Boutique Eco (4*)',
                    desc: 'Hand-picked eco-lodges, stylish colonial bungalows, and authentic service.',
                    tag: 'Most Popular',
                  },
                  {
                    id: 'luxury',
                    title: 'Luxury Signature (5*)',
                    desc: 'Geoffrey Bawa architectural gems, Ceylon Tea Trails, and Aman-tier stays.',
                    tag: 'Ultra Luxury',
                  },
                  {
                    id: 'honeymoon',
                    title: 'Romance & Seclusion',
                    desc: 'Private plunge pool villas, candlelit beach dinners, and couple wellness.',
                    tag: 'Couples',
                  },
                  {
                    id: 'adventure',
                    title: 'Active & Wildlife',
                    desc: 'Glamping safari tents, scenic highland trekking, and surf retreats.',
                    tag: 'Active',
                  },
                ].map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => setTravelStyle(tier.id as any)}
                    className={`p-space-md rounded-xl cursor-pointer transition-all border flex flex-col justify-between ${
                      travelStyle === tier.id
                        ? 'border-primary bg-primary-container/10 ring-1 ring-primary shadow-sm'
                        : 'border-outline-variant/40 bg-surface hover:border-outline-variant'
                    }`}
                  >
                    <div>
                      <span className="font-label-sm text-[10px] uppercase font-bold text-secondary tracking-wider block mb-1">
                        {tier.tag}
                      </span>
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {tier.title}
                      </h3>
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-relaxed">
                        {tier.desc}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        {travelStyle === tier.id ? 'Selected' : 'Select'}
                      </span>
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        {travelStyle === tier.id ? 'check_circle' : 'add'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Chauffeur Guide & Vehicle Class */}
            <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-space-sm pb-space-sm border-b border-surface-container">
                <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-sm">
                  4
                </span>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary">Private Chauffeur &amp; Vehicle</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    SLTDA-certified chauffeur guide dedicated to your private party throughout
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-lg">
                {[
                  {
                    id: 'sedan',
                    title: 'Executive Sedan',
                    capacity: '1 - 2 Passengers',
                    desc: 'Toyota Camry / Prius Hybrid with air conditioning, onboard WiFi, and fresh coconut water.',
                  },
                  {
                    id: 'van',
                    title: 'Luxury KDH High-Roof Van',
                    capacity: '3 - 6 Passengers',
                    desc: 'Spacious reclining captain seats, panoramic tinted windows, large luggage capacity.',
                  },
                  {
                    id: 'suv',
                    title: 'Land Cruiser 4x4 Luxury',
                    capacity: '1 - 4 Passengers',
                    desc: 'Heavy-duty off-road capability for rugged safari trails, highland passes, and tea estates.',
                  },
                ].map((veh) => (
                  <div
                    key={veh.id}
                    onClick={() => setVehicleType(veh.id as any)}
                    className={`p-space-md rounded-xl cursor-pointer transition-all border flex flex-col justify-between ${
                      vehicleType === veh.id
                        ? 'border-primary bg-primary-container/10 ring-1 ring-primary shadow-sm'
                        : 'border-outline-variant/40 bg-surface hover:border-outline-variant'
                    }`}
                  >
                    <div>
                      <span className="font-label-sm text-[11px] font-bold text-secondary">
                        {veh.capacity}
                      </span>
                      <h3 className="font-title-md text-title-md text-primary font-bold mt-0.5">
                        {veh.title}
                      </h3>
                      <p className="font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-relaxed">
                        {veh.desc}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-outline-variant/20 flex items-center justify-between text-primary font-label-sm text-label-sm">
                      <span className="font-semibold">{vehicleType === veh.id ? 'Included' : 'Choose'}</span>
                      <span className="material-symbols-outlined text-[18px]">
                        {vehicleType === veh.id ? 'check_circle' : 'arrow_forward'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chauffeur Guide Language Choice */}
              <div className="mt-space-md pt-space-md border-t border-surface-container flex flex-wrap items-center justify-between gap-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">translate</span>
                  <span className="font-title-md text-title-md text-primary">Preferred Guide Language:</span>
                </div>
                <div className="flex gap-2">
                  {(['English', 'French', 'German'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setGuideLanguage(lang)}
                      className={`px-4 py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer ${
                        guideLanguage === lang
                          ? 'bg-primary text-on-primary font-bold'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5: Guest Details & Special Requests */}
            <div className="p-space-xl bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30">
              <div className="flex items-center gap-space-sm pb-space-sm border-b border-surface-container">
                <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-sm">
                  5
                </span>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary">Lead Explorer Information</h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Where should we send your full custom itinerary breakdown and quote?
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-lg">
                <div>
                  <label htmlFor="lead-name" className="font-label-lg text-label-lg text-on-surface block mb-1">
                    Your Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="lead-email" className="font-label-lg text-label-lg text-on-surface block mb-1">
                    Email Address <span className="text-error">*</span>
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    required
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="lead-phone" className="font-label-lg text-label-lg text-on-surface block mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    id="lead-phone"
                    type="tel"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    placeholder="+44 7911 123456"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary"
                  />
                </div>
              </div>

              <div className="mt-space-md">
                <label htmlFor="lead-notes" className="font-label-lg text-label-lg text-on-surface block mb-1">
                  Special Interests or Requests
                </label>
                <textarea
                  id="lead-notes"
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Tell us if you want scenic blue train tickets reserved, specific dietary requests (vegan, halal, gluten-free), anniversary surprises, or photography stops..."
                  className="w-full p-3 rounded-xl bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary resize-y border border-transparent focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Sticky Live Quote & Action Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-surface-container-lowest rounded-2xl p-space-lg shadow-xl border border-outline-variant/30 flex flex-col gap-space-md">
              <div className="pb-space-sm border-b border-surface-container">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                  Live Custom Estimate
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mt-0.5">
                  Your Bespoke Itinerary
                </h3>
              </div>

              {/* Price Display */}
              <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Estimated Total ({partySize} Travelers):</span>
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">
                    {formatPrice(totalPriceUsd, currency)}
                  </span>
                </div>
                <div className="flex items-baseline justify-between text-secondary font-title-md text-title-md">
                  <span>Per Person Share:</span>
                  <span className="font-bold">{formatPrice(totalPerPersonUsd, currency)}</span>
                </div>
                <span className="text-[11px] font-label-sm text-on-surface-variant italic mt-1">
                  * Includes luxury AC transport, fuel, highway tolls, licensed chauffeur guide, breakfasts, &amp; boutique accommodations.
                </span>
              </div>

              {/* Breakdown List */}
              <div className="flex flex-col gap-2 font-body-sm text-body-sm">
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Duration:</span>
                  <span className="font-semibold text-primary">{nights} Nights / {nights + 1} Days</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Party:</span>
                  <span className="font-semibold text-primary">{partySize} Explorer{partySize > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Style:</span>
                  <span className="font-semibold text-primary capitalize">{travelStyle}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Vehicle:</span>
                  <span className="font-semibold text-primary uppercase">{vehicleType} Class</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-container">
                  <span className="text-on-surface-variant">Guide Language:</span>
                  <span className="font-semibold text-primary">{guideLanguage} Chauffeur</span>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-on-surface-variant">Selected Stops:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedDestinations.map((name) => (
                      <span
                        key={name}
                        className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-label-sm text-[11px]"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-space-sm pt-space-sm">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary font-title-md text-title-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Custom Itinerary</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenConcierge}
                  className="w-full py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container font-title-md text-title-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">neurology</span>
                  <span>Review with AI Concierge</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-space-sm border-t border-surface-container flex flex-col gap-1 text-[11px] font-label-sm text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[15px]">verified</span>
                  <span>SLTDA Certified DMC #SLTDA/SQA/TA/01482</span>
                </div>
                <div className="flex items-center gap-1.5 text-secondary">
                  <span className="material-symbols-outlined text-[15px]">security</span>
                  <span>Free Cancellation up to 14 days before arrival</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
