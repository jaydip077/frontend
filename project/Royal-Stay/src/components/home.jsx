import React, { useState } from 'react'
import { MapPinIcon, CalendarIcon, UserGroupIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon,ShieldCheckIcon,SparklesIcon,FireIcon,StarIcon } from '@heroicons/react/24/solid'
import cards from './CardData'
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  
  const prev = () => setActiveCard((c) => (c - 1 + cards.length) % cards.length)
  const next = () => setActiveCard((c) => (c + 1) % cards.length)

  return (
    <div className="font-sans antialiased bg-[#fff8f1]">

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <a href="#" className="text-2xl font-bold tracking-tight text-[#0b1c39] shrink-0">
              Royal<span className="text-amber-400">Stay</span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {['Rooms', 'Banquets', 'Dining', 'About', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-[#44474d] hover:text-[#0b1c39] hover:bg-amber-50 rounded-lg transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button className="px-5 py-2 text-sm font-semibold text-[#0b1c39] hover:bg-amber-50 rounded-lg transition-colors duration-200">
                Login
              </button>
              <button className="px-5 py-2 text-sm font-semibold bg-[#0b1c39] text-white rounded-xl hover:bg-[#162d54] transition-colors duration-200 shadow-md">
                Sign Up
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-[#0b1c39] hover:bg-amber-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-amber-100 px-4 pb-6 pt-2 shadow-lg">
            <div className="flex flex-col gap-1">
              {['Rooms', 'Banquets', 'Dining', 'About', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-4 py-3 text-base font-medium text-[#44474d] hover:text-[#0b1c39] hover:bg-amber-50 rounded-lg transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="flex gap-3 mt-4 pt-4 border-t border-amber-100">
                <button className="flex-1 py-2.5 text-sm font-semibold text-[#0b1c39] border-2 border-[#0b1c39] rounded-xl hover:bg-[#0b1c39] hover:text-white transition-colors">
                  Login
                </button>
                <button className="flex-1 py-2.5 text-sm font-semibold bg-[#0b1c39] text-white rounded-xl hover:bg-[#162d54] transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Hotel Lobby"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT9sz9t4RaZy6OJAMd2TZ3E6JjmGv1SaJhPNSz-05VOZXxaaAX3uTL2OfUgdW3l1A0K3ACkixigEnfEYdbVGk8s9LucUOBzw0SzPmGuqGt0k_-ribX4AZ-Tn1ORzegwqVx6M0K6FoDFlX1RB13shRhegNM19uXjPp2Wzup96uMzijsCvZnVAAI_VlXUXVzmOyIYHoI1UpLamon9U34JcForybbreJNUL9SdhIN3rBjKVLPxm0wgNPXA2v0byuroUN_aybMWdpt8vM"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          <span className="text-amber-400 font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 block">
            The Digital Concierge Experience
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-8 leading-tight drop-shadow-lg">
            Experience Luxury &amp; Comfort
          </h1>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col lg:flex-row items-stretch gap-2 max-w-5xl mx-auto">

            {/* Destination */}
            <div className="flex-1 px-4 sm:px-6 py-3 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-gray-100">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Destination</span>
              <div className="flex items-center gap-2 w-full">
                <MapPinIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <input
                  className="bg-transparent border-none outline-none p-0 w-full text-[#0b1c39] font-semibold placeholder:text-slate-400 text-sm sm:text-base"
                  placeholder="Where to next?"
                  type="text"
                />
              </div>
            </div>

            {/* Stay Dates */}
            <div className="flex-1 px-4 sm:px-6 py-3 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-gray-100">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Stay Dates</span>
              <div className="flex items-center gap-2 w-full">
                <CalendarIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <input
                  className="bg-transparent border-none outline-none p-0 w-full text-[#0b1c39] font-semibold placeholder:text-slate-400 text-sm sm:text-base"
                  placeholder="Check in – Out"
                  type="text"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex-1 px-4 sm:px-6 py-3 flex flex-col items-start">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Guests</span>
              <div className="flex items-center gap-2 w-full">
                <UserGroupIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <input
                  className="bg-transparent border-none outline-none p-0 w-full text-[#0b1c39] font-semibold placeholder:text-slate-400 text-sm sm:text-base"
                  placeholder="2 Adults, 0 Children"
                  type="text"
                />
              </div>
            </div>

            {/* CTA */}
            <button className="bg-amber-400 text-[#0b1c39] px-8 py-4 rounded-xl font-bold text-base hover:bg-amber-500 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap">
              <span>Explore</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ── ECOSYSTEM SECTION ── */}
      <main className="bg-[#fff8f1]">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b1c39] mb-4">
                Our Redefined Ecosystem
              </h2>
              <p className="text-base sm:text-lg text-[#44474d] leading-relaxed">
                From private sanctuaries to grand celebrations, RoyalStay provides an
                unparalleled backdrop for life's most meaningful moments.
              </p>
            </div>

            {/* Nav arrows */}
            <div className="flex gap-3 shrink-0">
              <button
                onClick={prev}
                className="p-3 border-2 border-gray-300 rounded-2xl hover:border-amber-400 hover:bg-amber-50 transition-colors duration-200"
                aria-label="Previous"
              >
                <ChevronLeftIcon className="w-5 h-5 text-[#0b1c39]" />
              </button>
              <button
                onClick={next}
                className="p-3 border-2 border-gray-300 rounded-2xl hover:border-amber-400 hover:bg-amber-50 transition-colors duration-200"
                aria-label="Next"
              >
                <ChevronRightIcon className="w-5 h-5 text-[#0b1c39]" />
              </button>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 ${
                  i === activeCard ? 'ring-2 ring-amber-400 ring-offset-2' : ''
                }`}
                onClick={() => setActiveCard(i)}
              >
                <div className="aspect-[4/5] sm:aspect-[3/4]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Card content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-serif mb-2">{card.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    <span>{card.cta}</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile dot indicators */}
          <div className="flex justify-center gap-2 mt-8 sm:hidden">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === activeCard ? 'bg-amber-400 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* OFFER SECTION */}
          <section className="bg-[#faf2ea] py-12 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
    <div className="text-center mb-10 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-serif text-[#0b1c39] mb-4">
        Curated Offers
      </h2>
      <div className="w-20 h-1 bg-[#cca830] mx-auto" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
      {/* Offer 1 */}
      <div className="bg-[#ffffff] p-6 md:p-8 rounded-xl shadow-[0_10px_30px_rgba(11,28,57,0.04)] border-b-4 border-[#ffffff] hover:border-[#cca830] transition-all">
        <div className="text-tertiary-container mb-5 md:mb-6">
          <span
            className="material-symbols-outlined text-4xl"
            data-weight="fill"
          >
            <ShieldCheckIcon className="w-6 h-6 text-amber-400" />
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-serif font-bold text-[#0b1c39] mb-3 md:mb-4">
          The Royal Weekend
        </h3>
        <p className="text-[#44474d] mb-6 md:mb-8 text-sm leading-relaxed">
          Book a 3-night weekend stay and receive a complimentary private dinner
          at our rooftop garden.
        </p>
        <button className="text-[#0b1c39] font-bold flex items-center gap-2 group">
          <span>Claim Offer</span>
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Offer 2 — Featured */}
      <div className="bg-[#ffffff] p-6 md:p-8 rounded-xl shadow-[0_10px_30px_rgba(11,28,57,0.04)] border-b-4 border-[#ffffff] hover:border-[#cca830] transition-all relative lg:scale-105 lg:z-10 md:col-span-2 lg:col-span-1">
        <div className="absolute -top-4 right-6 md:right-8 bg-[#cca830] text-ainer px-4 py-1 text-[10px] font-bold uppercase tracking-tighter rounded-full">
          Most Exclusive
        </div>
        <div className="text-tertiary-container mb-5 md:mb-6">
          <span
            className="material-symbols-outlined text-4xl"
            data-weight="fill"
          >
            <SparklesIcon className="w-6 h-6 text-amber-400" />
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-serif font-bold text-[#0b1c39] mb-3 md:mb-4">
          Wellness Retreat
        </h3>
        <p className="text-[#44474d] mb-6 md:mb-8 text-sm leading-relaxed">
          Unlimited access to our Olympic-sized pool and 50% off all spa
          treatments throughout your stay.
        </p>
        <button className="text-[#0b1c39] font-bold flex items-center gap-2 group">
          <span>Claim Offer</span>
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </button>
      </div>

      {/* Offer 3 */}
      <div className="bg-[#ffffff] p-6 md:p-8 rounded-xl shadow-[0_10px_30px_rgba(11,28,57,0.04)] border-b-4 border-[#ffffff] hover:border-[#cca830] transition-all">
        <div className="text-[#cca830] mb-5 md:mb-6">
          <span
            className="material-symbols-outlined text-4xl"
            data-weight="fill"
          >
            <FireIcon className="w-6 h-6 text-amber-400" />
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-serif font-bold text-[#0b1c39] mb-3 md:mb-4">
          Anniversary Special
        </h3>
        <p className="text-[#44474d] mb-6 md:mb-8 text-sm leading-relaxed">
          Let us celebrate you. Complimentary champagne and suite upgrade for
          milestone events.
        </p>
        <button className="text-[#0b1c39] font-bold flex items-center gap-2 group">
          <span>Claim Offer</span>
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  </div>
</section>

{/* Premium Layout */}

<section className="py-12 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">

    {/* Left — Testimonial */}
    <div className="relative">
      <div className="absolute -top-6 -left-4 md:-top-10 md:-left-10 text-[120px] md:text-[200px] font-serif text-primary-container/5 leading-none select-none">
        
      </div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-primary-container mb-6 md:mb-8">
          Voices of the <br />
          Digital Concierge
        </h2>
        <div className="flex gap-1 mb-6 md:mb-8">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="material-symbols-outlined text-amber-400"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              <StarIcon className="w-5 h-5" />
            </span>
          ))}
        </div>
        <p className="text-lg md:text-2xl font-serif italic text-primary-container leading-relaxed mb-8 md:mb-12">
          "The attention to detail was startling. It felt as though the hotel
          knew what I needed before I even thought to ask for it. A truly modern
          luxury experience."
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden shrink-0">
            <img
              alt="Guest"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz5Zs5uAapy_39qzIptKIJSqJvIGRz9sJM1e2nK3PoJh5s5hqZbXbgYLtliYigezKx1mwIipvcfG1qRZE4VIAshYhGVxrQobXlSgrh0I25cQkCNTOGUykYdVbhfBAje7YHUW2pWDByKs2ccMznRAMVg7AkZwInmgxq1kvTAWls8ReohKF0foRsnbQUikqM9dw2XtkdGMEP16uy2GD-qth0KGHDP6D0yMZVtuEUELT0lRFxsXzfwvdl_Mo-9hnNOM0XAhQnW5HTabs"
            />
          </div>
          <div>
            <div className="font-bold text-primary-container">Marcus Thorne</div>
            <div className="text-xs uppercase tracking-widest text-on-surface-variant">
              Global Logistics CEO
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Right — Image Grid */}
    <div className="grid grid-cols-2 gap-3 md:gap-4">
      <img
        alt="Room View"
        className="rounded-xl h-40 sm:h-52 md:h-64 w-full object-cover shadow-lg"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUz9whmH-hTATwLgf_OPtJRprU6GaDoZQ2n9FrUiyl6Kfp2LkfXypJAYEHEQ9dz_mF3lR74lv1r1vTFnPkyvMaZQIfnXkHkawS37JpqYgPXi3WcbAxPKE-Z0CDvakTjF_d7KLwqW3LVHiTCzhK_oRx2iP8PS6CEEqURzBej2TztRF99DqTO0IKCHFWW6WOTfO7UflxCIKFTaU7zKP8ZLMaOrXtlPLbUAYkQxj1QqIjmWoi3JQsi19abq3D7PP4QMDkZlfWyNj95k4"
      />
      <img
        alt="Poolside"
        className="rounded-xl h-40 sm:h-52 md:h-64 w-full object-cover shadow-lg md:mt-12"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUwWSywbJb6HsOp6nowwiwakQLjeFnqDueh-mAzsFB2bfWi_7U9wte_8ITXIbhW8tYf77Y2wDeN1uFkZEgSOkcSCv-lqSHlEHuJlvCQVfPRINVrikjwfYUYlAc0-7hFg4Sx27JbY0vzzENux8h6OW6xiXl0VnZlr9bHGvvTQb9CUkt5H8lmWywKfbb9AUtyBjp6LWGYrhb4xEujLGVGt6Fv1UAz_J_Lik1WejoPZESp6uNyQmTsslwpkIhLmBVc3dbllfc5VJhtto"
      />
      <img
        alt="Spa"
        className="rounded-xl h-40 sm:h-52 md:h-64 w-full object-cover shadow-lg md:-mt-12"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9rWgw-yeqsPtPp4RdaoyTc12jDZsiobYp_i4J21izrJ3vlZCGQIJ7DSZ6Zg225hvEoSmnJZQ2vYhKLfeWP6lGjT6643N3gC6WuwNTag-ZwGDtoQ1A1SoedfnfjzXlOtaYcoLPdx40gbLmbsQNXexWXGyU3cFiKKFg0qOvfcJbZ7phYaD7znTA-jdpuyaGplkxmj3fPq4Y3AQerofam_aEz6SmmnSvk2m2WJGXUzjY32IG1OV1_lMNse36yHpAfg4jOOA7cT-Jt1k"
      />
      <img
        alt="Exterior"
        className="rounded-xl h-40 sm:h-52 md:h-64 w-full object-cover shadow-lg"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc9mV6loV7bua87f61vxeX2kTY1TkA6UIYa9vToc5NKdndob0oHwHDuRon-dyOMBynIETJQOqkeRWYpLa2tbapBv1LIaJV0u1iiMbCm_himMfTsfOFIj_P1r0XQZEDKM8L_JB_SJ9h0paHS4KfoSMmtKdhu0Z91TTliBxGP3zxZVC28cuPpZ_FCT5zxHETJD0uNY4-tXGdS1SH5zucQt_sqJBbmq4prHPWSAEShSFfRL3xKRi60UXoCrX6rdUg8_QKl3WSg-o7NQQ"
      />
    </div>

  </div>
</section>
      </main>
      <footer className="w-full py-10 md:py-12 px-4 sm:px-6 md:px-8 mt-auto bg-[#FAF2EA] dark:bg-slate-950 text-[#0B1C39] dark:text-slate-200">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-7xl mx-auto">

    {/* Brand — full width on mobile */}
    <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:gap-6">
      <div className="font-serif text-xl font-bold text-[#0B1C39] dark:text-white">
        RoyalStay
      </div>
      <p className="text-slate-500 dark:text-slate-400 font-sans text-sm tracking-wide">
        Defining the new standard of premium hospitality through digital
        elegance and timeless comfort.
      </p>
      <div className="flex gap-4">
        <a className="text-[#0B1C39] hover:text-[#D4AF37] transition-colors" href="#">
          <span className="material-symbols-outlined">public</span>
        </a>
        <a className="text-[#0B1C39] hover:text-[#D4AF37] transition-colors" href="#">
          <span className="material-symbols-outlined">share</span>
        </a>
        <a className="text-[#0B1C39] hover:text-[#D4AF37] transition-colors" href="#">
          <span className="material-symbols-outlined">contact_support</span>
        </a>
      </div>
    </div>

    {/* Destinations */}
    <div className="flex flex-col gap-3 md:gap-4">
      <h4 className="font-bold text-[#0B1C39] uppercase text-xs tracking-[0.2em]">
        Destinations
      </h4>
      {["London Suites", "Paris Manor", "Dubai Heights", "New York Penthouse"].map((d) => (
        <a key={d} className="text-slate-500 hover:text-[#D4AF37] transition-colors text-sm underline-offset-4 hover:underline" href="#">
          {d}
        </a>
      ))}
    </div>

    {/* Quick Links */}
    <div className="flex flex-col gap-3 md:gap-4">
      <h4 className="font-bold text-[#0B1C39] uppercase text-xs tracking-[0.2em]">
        Quick Links
      </h4>
      {["Privacy Policy", "Terms of Service", "Sustainability", "Careers"].map((l) => (
        <a key={l} className="text-slate-500 hover:text-[#D4AF37] transition-colors text-sm underline-offset-4 hover:underline" href="#">
          {l}
        </a>
      ))}
    </div>

    {/* Newsletter — full width on mobile */}
    <div className="col-span-2 md:col-span-1 flex flex-col gap-4 md:gap-6">
      <h4 className="font-bold text-[#0B1C39] uppercase text-xs tracking-[0.2em]">
        Newsletter
      </h4>
      <p className="text-slate-500 text-xs">
        Stay informed about our latest properties and member-only events.
      </p>
      <div className="flex gap-0">
        <input
          className="bg-white/50 border-none rounded-l-lg p-3 text-sm focus:ring-0 w-full min-w-0"
          placeholder="Email Address"
          type="email"
        />
        <button className="bg-[#0B1C39] text-white px-4 rounded-r-lg hover:bg-[#D4AF37] transition-colors shrink-0">
          <span className="material-symbols-outlined"><ChevronRightIcon  className='w-5 h-5'/></span>
        </button>
      </div>
    </div>

  </div>

  <div className="max-w-7xl mx-auto mt-10 md:mt-16 pt-6 md:pt-8 border-t border-slate-200 text-center text-slate-500 text-xs tracking-widest font-sans">
    © 2024 RoyalStay Hotels. The Digital Concierge Experience.
  </div>
</footer>

    </div>
  )
}