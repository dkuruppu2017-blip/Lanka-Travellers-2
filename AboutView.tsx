import React from 'react';
import { TEAM_MEMBERS } from '../data/travelData';

interface AboutViewProps {
  onNavigate: (view: string, params?: any) => void;
  onOpenConcierge: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenConcierge }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Immersive Editorial Top Banner / Hero */}
      <section className="relative w-full -mt-[120px] pt-[140px] pb-24 md:pb-32 bg-primary text-on-primary overflow-hidden">
        {/* Atmospheric Ambient Scenic Background with Soft Botanical Scrim */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-soft-light opacity-35 scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiSai4hMgmWcYwhUoFVb85y_5DxyVy4mo6uFh_3Jpos3tR0FVcFkgfIsHfBaa3NgG9ksF8D3-mYcGfm7ybFIlAd-HHbjMIj2ERKrWkxiNqq2Y61Zz3QSCj6ugwNHC5g6lSvWnXLkrIZrpG2eSsSmA7jZAptsV9yogSVsQ0O5LDbzG9sVVqJZsqP_2vv9nY4K5pj_0O-XUfxWNv4mWm5AXOqvLhFD-WKomwc-6Ch5mTv2-24TKMrrHl-w')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-surface" />

        <div className="relative max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          {/* Breadcrumb & Licensing Ribbon */}
          <div className="flex flex-wrap items-center gap-space-xs text-on-primary/80 font-label-sm text-label-sm uppercase tracking-widest mb-space-md">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary-fixed transition-colors cursor-pointer"
            >
              Ceylon Journeys
            </button>
            <span>•</span>
            <span className="text-tertiary-fixed font-semibold">About Our Heritage</span>
            <span className="ml-auto inline-flex items-center gap-1.5 px-space-sm py-1 bg-primary-container text-on-primary rounded-full shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              SLTDA Licensed DMC #SLTDA/SQA/TA/01482
            </span>
          </div>

          {/* Hero Header & Narrative Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end pt-4 pb-8">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-[0.25em] font-bold">
                Rooted in Colombo • Inspired by Ceylon
              </span>
              <h1 className="font-headline-xl text-headline-xl md:text-[3.25rem] md:leading-[3.75rem] text-on-primary font-normal tracking-tight">
                Weaving Unforgettable <br className="hidden sm:inline" />
                <span className="italic font-light text-primary-fixed">Ceylon Journeys</span> With Soul.
              </h1>
              <p className="font-body-lg text-body-lg text-on-primary/90 max-w-2xl leading-relaxed">
                Founded in Colombo by passionate local travel custodians, Lanka Travellers is an officially certified Sri Lankan destination management agency dedicated to revealing the true heart, soul, and timeless heritage of our paradise island.
              </p>
            </div>

            {/* Metric Accent Column */}
            <div className="lg:col-span-4 flex flex-col gap-space-md bg-surface-container-lowest/10 backdrop-blur-md p-space-lg rounded-xl text-on-primary shadow-lg border border-white/10">
              <div className="flex items-center justify-between pb-space-sm border-b-0">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-semibold">
                  Island Footprint
                </span>
                <span className="material-symbols-outlined text-secondary-container">spa</span>
              </div>
              <div className="grid grid-cols-2 gap-space-md">
                <div>
                  <div className="font-display-lg-mobile text-display-lg-mobile text-secondary-fixed leading-none font-headline-sm">
                    15+
                  </div>
                  <div className="font-body-sm text-body-sm text-on-primary/80 mt-1">Years of Local Mastery</div>
                </div>
                <div>
                  <div className="font-display-lg-mobile text-display-lg-mobile text-secondary-fixed leading-none font-headline-sm">
                    100%
                  </div>
                  <div className="font-body-sm text-body-sm text-on-primary/80 mt-1">Bespoke Customization</div>
                </div>
              </div>
              <p className="font-label-sm text-label-sm text-on-primary/75 italic">
                &ldquo;Tropical Modernism meets warm, unscripted Sri Lankan hospitality.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission Split Showcase with Bawa-Inspired Warm Architecture */}
      <section className="w-full py-16 md:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          {/* Asymmetric Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                Our Guiding Compass
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-1 font-headline-sm">
                Ecosystem Custodians &amp; Culture Keepers
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Guided by sustainable eco-hospitality, each itinerary honours ancient irrigation works, rainforest biodiversity, and regional village livelihoods.
            </p>
          </div>

          {/* Vision & Mission Dual Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Vision Statement Card */}
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-outline-variant/30">
              <div className="absolute -right-8 -top-8 w-40 h-40 bg-primary-fixed/30 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="relative z-10 flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    visibility
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                    Our Vision
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1">
                    Safeguarding Sri Lanka’s Sanctity
                  </h3>
                </div>
                <blockquote className="font-body-lg text-body-lg text-on-surface leading-relaxed italic relative pl-4 border-l-2 border-primary/20">
                  &ldquo;To be the most trusted, sustainable, and culturally immersive travel company in Sri Lanka, creating lifelong memories while safeguarding our natural ecosystems and heritage.&rdquo;
                </blockquote>
              </div>
              <div className="relative z-10 mt-space-lg pt-space-md flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-secondary text-[18px]">nature_people</span>
                <span>Committed to Zero Trace wilderness exploration</span>
              </div>
            </div>

            {/* Mission Statement Card */}
            <div className="group relative flex flex-col justify-between p-space-xl rounded-xl bg-surface-container-low shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-outline-variant/30">
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-secondary-fixed/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
              <div className="relative z-10 flex flex-col gap-space-md">
                <div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">flag</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                    Our Mission
                  </span>
                  <h3 className="font-headline-md text-headline-md text-primary mt-1">
                    Heartfelt Hospitality &amp; Ethical Value
                  </h3>
                </div>
                <blockquote className="font-body-lg text-body-lg text-on-surface leading-relaxed italic relative pl-4 border-l-2 border-secondary/30">
                  &ldquo;To deliver tailored, safe, and authentic journeys through unmatched local hospitality, certified chauffeur guides, fair pricing, and active community enrichment.&rdquo;
                </blockquote>
              </div>
              <div className="relative z-10 mt-space-lg pt-space-md flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm border-t border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                <span>100% transparent pricing with direct villager benefit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Lanka Travellers? (Core Pillars & Differentiators) */}
      <section className="w-full py-16 md:py-24 bg-surface-container-high/40">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] font-bold">
              The Ceylon Standard
            </span>
            <h2 className="font-headline-xl text-headline-xl text-primary mt-2">
              Why Discerning Explorers Trust Us
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
              From tranquil high-altitude tea trails to sun-drenched colonial bastions, explore our unwavering pillars of boutique safety, authenticity, and ethics.
            </p>
          </div>

          {/* 6 Pillars Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* Pillar 1 */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">explore</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold mb-1">
                01. Unrivaled Local Expertise
              </span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">Native Island Intuition</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Born and raised on the island, our regional specialists know every hidden waterfall, off-the-radar spice garden, and secluded golden cove that guidebooks miss.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  shield
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold mb-1">
                02. Fully Licensed &amp; Insured
              </span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">Government Endorsed</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Registered with the Sri Lanka Tourism Development Authority (SLTDA License #SLTDA/SQA/TA/01482) with full public liability coverage for complete peace of mind.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">person_pin_circle</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold mb-1">
                03. Private Chauffeur Guides
              </span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">First-Class Companions</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Government-certified English and multilingual chauffeur guides rigorously trained in wilderness first aid, defensive hill driving, and deep historical narration.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">tune</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold mb-1">
                04. 100% Tailor-Made Flexibility
              </span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">Your Pacing, Your Rhythm</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Every itinerary is personalized around your wellness preferences, culinary dietary requirements, photography goals, and family travel requirements.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">loyalty</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold mb-1">
                05. Fair Price Guarantee
              </span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">Direct Local Value</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Direct relationships with premier eco-resorts and village artisans eliminate costly international intermediaries, passing genuine value directly to you.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300 border border-outline-variant/30">
              <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">volunteer_activism</span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold mb-1">
                06. Responsible &amp; Eco-Conscious
              </span>
              <h3 className="font-title-lg text-title-lg text-primary mb-2">5% For Nature &amp; Schools</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                5% of all booking profits directly fund local rural schools and wild elephant corridor conservation initiatives across Polonnaruwa and Udawalawe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Comprehensive Services Offered Mosaic */}
      <section className="w-full py-16 md:py-24 bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                Curated Portfolios
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-1">
                Our Signature Travel Offerings
              </h2>
            </div>
            <button
              onClick={() => onNavigate('travel-packages')}
              className="inline-flex items-center gap-space-xs text-primary font-title-md text-title-md hover:text-primary-container transition-colors cursor-pointer"
            >
              <span>View All Available Packages</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* Service Card 1 */}
            <div
              onClick={() => onNavigate('plan-custom-trip')}
              className="group relative rounded-xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-outline-variant/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuARZCvZYb5mRYWKEjabXlCY0Y7mis7hmpfoCZoDCKGJIaMQHG3NaVHSYMnM9sXbv3OVgop-DcwI5I-uztTD3kxMeCjR9_g1IQjgVvUbq1nuX-N3zenlXMJDWAilMk_wPp0q3fArrUiuSHfH9F4YR6enAkfBHh_gXiOf0BCG4-pFGfpE6JbFoKw1URLKQEZdZD2Y8pDiUuAzd9Diw1WAvnp3sGMkPWCdTnJdl55rK0xaW17Pt6f7b7CISA')`,
                  }}
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                  Bespoke
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Tailor-Made Private Tours &amp; Family Holidays
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Effortless multi-generational travel with kid-friendly wildlife reserves, spacious luxury vans, and relaxed schedules tailored to your loved ones.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-primary font-title-md text-title-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Private &amp; Self-Paced
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              onClick={() => onNavigate('travel-packages', { category: 'cultural' })}
              className="group relative rounded-xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-outline-variant/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzeqzolPd69hzLQXxNiTi6t084gzPflqHL73bNkhYDKEVho65QJmHkVEmSwdm2_988piGWyosssb8N9DtbF_e2psZgXYqEKko3VwbN9mvYUymG4FSC67wtnxIUTpeNU0d9HvX9P9yEBzkCCdBbTG92kQIFvylgmbLhz7Lw3gyr5EszgWRagoesMR-To5YtzL7mHqo-mUb9CEC2U5zR8DUXqn6RIskVbEE6_IQ4anQvQxz_JNfjm1CZbA')`,
                  }}
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                  Wilderness
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Luxury Wildlife Safaris &amp; Leopard Expeditions
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Custom open-top 4x4 Land Cruisers driven by veteran naturalists through Yala, Wilpattu, and Minneriya for ethical big-game tracking.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-primary font-title-md text-title-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Big Cat Expeditions
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              onClick={() => onNavigate('travel-packages', { category: 'honeymoon' })}
              className="group relative rounded-xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-outline-variant/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8JB7MDhYfA9H8pDndpUablYDW4tMoIgXBXJCs6GPIiJs-_8QSSVjuqXJsJFXnzNTk9A4oSD89Qd94RkyfMBUSa_YjDztrWNYZbnkA-n5K3Yrbwub-vscTPkBnQGGinqdiNH4mJ2oNyY_xz0OEeG1SNSUMaGeEve4s0L1R5tFILtOf4-rv7FpN2sD2xKzbuO-w0kX8Spl1WuyU9irLUBWhA_1cEWjO9AWI2jurXU-eMBh0czYlyjtITw')`,
                  }}
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                  Romance
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Honeymoon &amp; Romance Packages
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Private pool villas along the southern coast, private candlelight dinners on secluded cliff edges, and candlelit Ayurvedic couple's spa rituals.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-primary font-title-md text-title-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Secluded Sanctuaries
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 4 */}
            <div
              onClick={() => onNavigate('travel-packages', { category: 'cultural' })}
              className="group relative rounded-xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-outline-variant/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCloX0RNB5PLDbt51SoC3o4kI9KMeLxeji9AQa7yYT2rNl43k2jAg39NK7py2XWab1J9719FPDQxODeOsRhbZdBNsl-87PJkyr-j-NZqqBjiU6K6-V9mJWHVqk5pFozegoCIFcg_-7QjR350DBVZg2iXNnJDl27tIsu_FismzcFWHnpAhKD64LrNk7Ty8hc55Pd0AT-Q3JQRp_KS3EQYiYV0O98ujMDzKBjQwPXrYjDbjmmXzeHpgZ_jQ')`,
                  }}
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                  Heritage
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Cultural &amp; UNESCO Heritage Pilgrimages
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    VIP access to Sigiriya, the Temple of the Sacred Tooth Relic, and the Dutch Fort of Galle accompanied by esteemed university archaeologists.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-primary font-title-md text-title-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Living History
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 5 */}
            <div
              onClick={() => onNavigate('contact-us')}
              className="group relative rounded-xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-outline-variant/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD7qmzRNu0ctRlaBlLFEo_hy2YJCyBwfnRIM-SRX__dtEe3K7MQExoBIxgO3pLmrCikM1KmbdfjZczGaJilHuSm6MI90zM2dNqHUfhbhTicYmk0sM5X1llLxW8yKEJoH9cvVgH1QxJ7cR_Zvfu2L1vz8dtBSzUMRS1TDXX7HkiOkQZUacWLkxoL-xWj5yO9NrvQcnHMutha68d39JVDfEIzadapKLcsP9arZccvRkND-SBGjcNKlaNkA')`,
                  }}
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                  Mobility
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Airport Transfers &amp; Chauffeur Rentals
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    24/7 Colombo BIA meet-and-greet with air-conditioned luxury sedans, SUVs, and high-roof executive vans equipped with onboard chilled king coconut water.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-primary font-title-md text-title-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Premier Fleet
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>

            {/* Service Card 6 */}
            <div
              onClick={() => onNavigate('contact-us')}
              className="group relative rounded-xl bg-surface-container-lowest shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-outline-variant/20"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1G_99oCH1cknOmaa5jlejTT_GLl0JM_yl0hqgKcyW7c1y9DCCA6qbxBd9_oCMGtHFMzbCSr54f5WRMbl_2FLN7anDCBvjpaaUf3i6eNUPP6t5Uukh7aAokguZ0NqY6l8tU-oolribcLDkbGhHGdxmegGZWRxEUDr_O61CqGYRGBQoc5-yu4ZFANst-_-MkKZfjYIOyVtuF8eh7XVZwItsacyxSBnTW7DVloGNhY9BNqq1M79ODP6LlA')`,
                  }}
                />
                <div className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-sm text-label-sm text-primary font-bold">
                  Corporate &amp; Learning
                </div>
              </div>
              <div className="p-space-lg flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-2">
                    Corporate Retreats &amp; Group Excursions
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Rejuvenating team off-sites, architectural expeditions following Geoffrey Bawa's masterworks, and botanical research trips with seamless logistics.
                  </p>
                </div>
                <div className="mt-space-md pt-space-sm flex items-center justify-between text-primary font-title-md text-title-md">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                    Executive Group Care
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    east
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Leadership & Island Guides Team Spotlight */}
      <section className="w-full py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                Human Touch
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary mt-1">
                Our Leadership &amp; Island Guides
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              A cohesive team of native navigators, certified naturalists, and heritage conservationists committed to your comfort.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/30"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-surface-container">
                  <img
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={member.image}
                  />
                  <div className="absolute bottom-3 left-3 bg-primary/90 text-on-primary text-[11px] font-label-sm px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                    {member.badge}
                  </div>
                </div>
                <div className="p-space-md flex flex-col flex-grow">
                  <h3 className="font-title-lg text-title-lg text-primary">{member.name}</h3>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold mb-2">
                    {member.role}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Official Certifications, Affiliations & Accreditations */}
      <section className="w-full py-16 bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="bg-surface-container rounded-2xl p-space-xl shadow-sm border border-outline-variant/20">
            <div className="text-center max-w-2xl mx-auto mb-space-lg">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                Strict Compliance &amp; Integrity
              </span>
              <h2 className="font-headline-sm text-headline-sm text-primary mt-1">
                Certified by Sri Lanka’s Highest Tourism Authorities
              </h2>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
              <div className="flex flex-col items-center justify-center p-space-md bg-surface-container-lowest rounded-xl text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[26px]">account_balance</span>
                </div>
                <span className="font-title-md text-title-md text-primary font-bold">SLTPB Member</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Sri Lanka Tourism Promotion Bureau
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-md bg-surface-container-lowest rounded-xl text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-secondary-container/15 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                </div>
                <span className="font-title-md text-title-md text-primary font-bold">SLAITO Certified</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Sri Lanka Inbound Tour Operators
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-md bg-surface-container-lowest rounded-xl text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-primary-container/10 text-primary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    military_tech
                  </span>
                </div>
                <span className="font-title-md text-title-md text-primary font-bold">TripAdvisor Choice</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  Winner 2023 &amp; 2024 (Top 1%)
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-md bg-surface-container-lowest rounded-xl text-center shadow-xs">
                <div className="w-12 h-12 rounded-full bg-secondary-container/15 text-secondary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    health_and_safety
                  </span>
                </div>
                <span className="font-title-md text-title-md text-primary font-bold">Safe Travels Stamp</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                  World Travel &amp; Tourism Council
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Custom Trip CTA Banner */}
      <section className="w-full pb-20 bg-surface">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <div className="relative rounded-2xl bg-primary text-on-primary p-space-xl md:p-14 overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-space-xl">
            <div className="relative z-10 max-w-xl flex flex-col gap-space-sm text-center md:text-left">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-tertiary-fixed font-bold">
                Start Co-Designing Your Journey
              </span>
              <h2 className="font-headline-xl text-headline-xl leading-tight">
                Ready to Experience Ceylon Through Local Eyes?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/80">
                Connect directly with our senior destination designers. Free personalized proposal within 24 hours with custom routes and accommodations.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-space-md w-full md:w-auto">
              <button
                onClick={() => onNavigate('plan-custom-trip')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-secondary-container text-on-secondary-container hover:bg-secondary hover:text-on-secondary font-title-md text-title-md px-space-xl py-3 rounded-full transition-all shadow-lg cursor-pointer"
              >
                <span>Design Custom Itinerary</span>
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </button>
              <button
                onClick={onOpenConcierge}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-title-md text-title-md px-space-lg py-3 rounded-full transition-all border border-white/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">neurology</span>
                <span>Ask AI Concierge</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
