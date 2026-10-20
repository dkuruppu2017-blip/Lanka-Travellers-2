import React, { useState } from 'react';

interface ContactViewProps {
  onNavigate: (view: string, params?: any) => void;
  onOpenConcierge: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate, onOpenConcierge }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneWhatsApp: '',
    countryResidence: '',
    preferredTour: 'custom',
    travelDates: '',
    numAdults: '2',
    numChildren: '0',
    tourMessage: '',
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Immersive Sub-Header Canvas */}
      <section className="relative w-full overflow-hidden bg-primary text-on-primary">
        {/* Ambient Tropical Depth Layers */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 left-1/4 w-80 h-80 rounded-full bg-tertiary-container/30 blur-2xl pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-14 pb-20 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
            <div className="max-w-3xl flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-primary-container text-primary-fixed-dim rounded-full w-fit">
                <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
                  travel_explore
                </span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase">
                  Colombo Headquarters &amp; Global Concierge
                </span>
              </div>
              <h1 className="font-headline-xl text-headline-xl md:text-[3rem] md:leading-[3.5rem] tracking-tight text-surface-container-lowest font-medium">
                Contact Lanka Travellers — <br className="hidden sm:inline" />
                <span className="font-serif italic text-secondary-fixed">Let’s Plan Your Dream</span> Sri Lankan Vacation
              </h1>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 max-w-2xl leading-relaxed">
                Have a question about our tour packages or need a personalized itinerary? Our Colombo travel specialists are here to assist you 24/7 with bespoke route planning and insider sanctuary access.
              </p>
            </div>

            {/* Quick Response Indicator Metric Card */}
            <div className="flex items-center gap-space-md p-space-md bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg text-on-primary shrink-0 self-start lg:self-auto">
              <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-fixed">
                <span className="material-symbols-outlined text-[28px]">schedule</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-title-lg text-title-lg text-surface-container-lowest">&lt; 4 Hours</span>
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping" />
                </div>
                <span className="font-label-sm text-label-sm text-primary-fixed-dim">
                  Average Concierge Reply Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Two-Column Form & Direct Contact */}
      <section className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin -mt-8 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column: Comprehensive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-10 shadow-xl shadow-primary/5 flex flex-col justify-between border border-outline-variant/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-surface-container-high">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Personalized Itinerary Request
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-primary mt-1">
                    Tell Us About Your Ceylon Journey
                  </h2>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">lock</span>
                  <span>100% Confidential</span>
                </div>
              </div>

              {submitted ? (
                <div className="mt-8 p-6 rounded-2xl bg-primary-fixed/30 border border-primary text-on-surface flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[32px] text-primary">check_circle</span>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      Ayubowan! We have received your inquiry.
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Thank you, <strong>{formData.fullName || 'Valued Traveller'}</strong>. A dedicated Ceylon travel concierge has been assigned to your request and will contact you at <strong>{formData.emailAddress}</strong> within 4 hours with an initial route outline and bespoke options.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-full bg-surface-container text-primary font-title-md text-title-md hover:bg-surface-container-high transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <button
                      onClick={onOpenConcierge}
                      className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-title-md text-title-md hover:bg-primary-container transition-colors cursor-pointer inline-flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">neurology</span>
                      <span>Talk with AI Concierge Now</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface flex items-center justify-between" htmlFor="fullName">
                        <span>Full Name <span className="text-error">*</span></span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[20px]">person</span>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-transparent focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface flex items-center justify-between" htmlFor="emailAddress">
                        <span>Email Address <span className="text-error">*</span></span>
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[20px]">mail</span>
                        <input
                          id="emailAddress"
                          type="email"
                          required
                          value={formData.emailAddress}
                          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-transparent focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone/WhatsApp & Country of Residence */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="phoneWhatsApp">
                        Phone / WhatsApp Number
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[20px]">phone_iphone</span>
                        <input
                          id="phoneWhatsApp"
                          type="tel"
                          value={formData.phoneWhatsApp}
                          onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                          placeholder="+44 7911 123456"
                          className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-transparent focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="countryResidence">
                        Country of Residence
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[20px]">public</span>
                        <input
                          id="countryResidence"
                          type="text"
                          value={formData.countryResidence}
                          onChange={(e) => setFormData({ ...formData, countryResidence: e.target.value })}
                          placeholder="e.g. United Kingdom"
                          className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-transparent focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Preferred Tour Package Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="preferredTour">
                      Preferred Tour Package / Travel Interest
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[20px]">explore</span>
                      <select
                        id="preferredTour"
                        value={formData.preferredTour}
                        onChange={(e) => setFormData({ ...formData, preferredTour: e.target.value })}
                        className="w-full pl-11 pr-10 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-body-md appearance-none focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all cursor-pointer border border-transparent focus:border-primary"
                      >
                        <option value="custom">Custom Tailored Tour (Design from scratch with an Advisor)</option>
                        <option value="kandy">Kandy &amp; Nuwara Eliya Escape (Tea Hills &amp; Sacred Temples)</option>
                        <option value="southern">Southern Coast Adventure (Mirissa Whales, Galle Fort &amp; Surf)</option>
                        <option value="sigiriya">Sigiriya &amp; Cultural Triangle (Ancient Fortresses &amp; Polonnaruwa)</option>
                        <option value="ella">Ella &amp; Hill Country (Scenic Nine Arches, Peaks &amp; Waterfalls)</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3.5 top-3.5 text-on-surface-variant pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  {/* Row 4: Travel Dates & Party Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md">
                    <div className="sm:col-span-6 flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="travelDates">
                        Estimated Travel Dates &amp; Duration
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[20px]">calendar_month</span>
                        <input
                          id="travelDates"
                          type="text"
                          value={formData.travelDates}
                          onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                          placeholder="e.g. Oct 2025 • Approx. 10 Days"
                          className="w-full pl-11 pr-4 py-3 bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all border border-transparent focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3 flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="numAdults">
                        Adults (12+y)
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[18px]">group</span>
                        <select
                          id="numAdults"
                          value={formData.numAdults}
                          onChange={(e) => setFormData({ ...formData, numAdults: e.target.value })}
                          className="w-full pl-10 pr-6 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary cursor-pointer"
                        >
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4 Adults</option>
                          <option value="5+">5+ Group</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-3 flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="numChildren">
                        Children (0-11y)
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-on-surface-variant text-[18px]">child_care</span>
                        <select
                          id="numChildren"
                          value={formData.numChildren}
                          onChange={(e) => setFormData({ ...formData, numChildren: e.target.value })}
                          className="w-full pl-10 pr-6 py-3 bg-surface-container-low text-on-surface rounded-xl font-body-md text-body-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary border border-transparent focus:border-primary cursor-pointer"
                        >
                          <option value="0">0</option>
                          <option value="1">1 Child</option>
                          <option value="2">2 Children</option>
                          <option value="3+">3+ Children</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Message & Special Requests */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="tourMessage">
                      Message &amp; Special Requirements
                    </label>
                    <textarea
                      id="tourMessage"
                      rows={4}
                      value={formData.tourMessage}
                      onChange={(e) => setFormData({ ...formData, tourMessage: e.target.value })}
                      placeholder="Tell us your preferences: boutique heritage villas, wildlife safari focus, scenic train tickets, dietary needs, or anniversary celebrations..."
                      className="w-full p-4 bg-surface-container-low text-on-surface placeholder:text-outline rounded-xl font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-y border border-transparent focus:border-primary"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant bg-surface-container-low cursor-pointer"
                    />
                    <label className="font-body-sm text-body-sm text-on-surface-variant select-none cursor-pointer" htmlFor="consent">
                      I agree to Lanka Travellers processing my contact details to generate my personalized holiday proposal in accordance with their <a className="text-primary underline font-medium hover:text-secondary" href="#privacy">Privacy Policy</a>. No spam, ever.
                    </label>
                  </div>

                  {/* Submission Area */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-space-sm bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md px-8 py-4 rounded-full transition-all shadow-lg shadow-primary/20 group cursor-pointer"
                    >
                      <span>Send Tour Inquiry</span>
                      <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                        arrow_forward
                      </span>
                    </button>
                    <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                      <span>No commitment required. We reply within 4 hours.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Verified Details & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Primary Contact Card */}
            <div className="bg-surface-container-low rounded-2xl p-6 sm:p-8 flex flex-col gap-space-md shadow-sm border border-outline-variant/30">
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-high">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                    Direct Channels
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Head Office Colombo</h3>
                </div>
                <span className="material-symbols-outlined text-[28px] text-primary">domain</span>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Registered Address
                  </span>
                  <p className="font-body-md text-body-md text-on-surface mt-0.5 leading-snug">
                    Lanka Travellers Pvt Ltd,<br />
                    No. 42, Galle Face Court, Galle Road,<br />
                    Colombo 03, Sri Lanka.
                  </p>
                </div>
              </div>

              {/* Contact Numbers */}
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Telephone Hotlines
                  </span>
                  <div className="flex flex-col gap-1 mt-0.5 font-body-md text-body-md">
                    <a className="text-on-surface hover:text-primary font-medium flex items-center justify-between group" href="tel:+94112345678">
                      <span>General: +94 11 234 5678</span>
                      <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary">call</span>
                    </a>
                    <a
                      className="text-on-surface hover:text-primary font-medium flex items-center justify-between group bg-surface-container-lowest/80 px-3 py-1.5 rounded-lg border border-outline-variant/30"
                      href="https://wa.me/94771234567"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="flex items-center gap-1.5 text-primary font-semibold">
                        <span className="w-2 h-2 rounded-full bg-secondary-container" />
                        WhatsApp 24/7: +94 77 123 4567
                      </span>
                      <span className="material-symbols-outlined text-[16px] text-primary">chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Department Emails */}
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                </div>
                <div className="flex flex-col gap-1.5 w-full">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Department Inboxes
                  </span>
                  <div className="flex flex-col gap-1 font-body-sm text-body-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">General Bookings:</span>
                      <a className="text-primary font-medium hover:underline" href="mailto:bookings@lankatravellers.com">
                        bookings@lankatravellers.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Custom Itineraries:</span>
                      <a className="text-primary font-medium hover:underline" href="mailto:info@lankatravellers.com">
                        info@lankatravellers.com
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-on-surface-variant">Agency Partnerships:</span>
                      <a className="text-primary font-medium hover:underline" href="mailto:partners@lankatravellers.com">
                        partners@lankatravellers.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Timings */}
              <div className="flex items-start gap-space-sm pt-2 border-t border-surface-container-high">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Working Hours
                  </span>
                  <div className="mt-1 flex flex-col gap-0.5 font-body-sm text-body-sm text-on-surface">
                    <p><span className="font-semibold text-primary">Colombo Desk:</span> Mon – Sat: 8:30 AM – 6:30 PM <span className="text-on-surface-variant text-[11px]">(SLST, GMT+5:30)</span></p>
                    <p><span className="font-semibold text-primary">WhatsApp On-Trip Desk:</span> 24 Hours / 7 Days a Week</p>
                  </div>
                </div>
              </div>

              {/* Official Social Channels */}
              <div className="flex flex-col gap-2 pt-2 border-t border-surface-container-high">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Connect on Social Channels
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <a className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-xl font-label-sm text-label-sm text-on-surface hover:text-primary transition-all shadow-sm" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                    <span className="w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center text-[11px] font-bold">f</span>
                    <span className="truncate">FB /LankaTravellers</span>
                  </a>
                  <a className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-xl font-label-sm text-label-sm text-on-surface hover:text-primary transition-all shadow-sm" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                    <span className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[11px] font-bold">ig</span>
                    <span className="truncate">@lankatravellers</span>
                  </a>
                  <a className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-xl font-label-sm text-label-sm text-on-surface hover:text-primary transition-all shadow-sm" href="https://youtube.com" rel="noopener noreferrer" target="_blank">
                    <span className="w-6 h-6 rounded-full bg-error text-on-error flex items-center justify-center text-[10px] font-bold">YT</span>
                    <span className="truncate">YouTube Tour</span>
                  </a>
                  <a className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-xl font-label-sm text-label-sm text-on-surface hover:text-primary transition-all shadow-sm" href="https://tripadvisor.com" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
                    <span className="truncate">TripAdvisor 5.0</span>
                  </a>
                  <a className="flex items-center gap-2 p-2 bg-surface-container-lowest rounded-xl font-label-sm text-label-sm text-on-surface hover:text-primary transition-all shadow-sm col-span-2 sm:col-span-2" href="https://wa.me/94771234567" rel="noopener noreferrer" target="_blank">
                    <span className="material-symbols-outlined text-[16px] text-tertiary-container">forum</span>
                    <span>Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Curated Local Highlight Card with Image */}
            <div className="relative overflow-hidden rounded-2xl bg-primary text-on-primary p-6 shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl6M9GGqGLg1Bfzl3SXex7WCgeW_7roVeVWJ_xrQ7kP4M9J2nMO8lnUjqtqMC8jY0yd-jfvDoR_Wx4vX7ojT0DSQOFNSxUF5HycThg6Aj6I-BKquMGSBbg7gSSQAjJmC2AmdtW8eD-20MQbM-Q0-DxcxoUDfB1raSCQR0npvZcGPHJRtZ5Mps-6OqoXjo_gSt1kjayNeLeWIC347tZY3m4CYwGQ3YUMFSPg9_4amWr4PcBJoylgt_WRw')`,
                }}
              />
              <div className="relative z-10 flex flex-col gap-3">
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
                  Visiting Colombo?
                </span>
                <h4 className="font-headline-sm text-headline-sm text-surface-container-lowest">
                  Drop In for Ceylon White Tea
                </h4>
                <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
                  Our travel salon overlooks the Indian Ocean along Galle Face Green. Stop by for hand-picked single estate tea while our travel directors map your private journey across Sri Lanka.
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified_user</span>
                  <span className="font-label-sm text-label-sm text-surface-container-lowest">
                    Licensed SLTDA Tour Operator &amp; Concierge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
