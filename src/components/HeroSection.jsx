import React, { useState } from 'react';
import { ArrowRight, MessageSquareCheck, ShieldCheck, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Gentle, restrained tilt (max 4.5 degrees)
    setTilt({
      x: -(y / (rect.height / 2)) * 4.5,
      y: (x / (rect.width / 2)) * 4.5,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-18 sm:pt-36 sm:pb-26 lg:pt-42 lg:pb-32 overflow-hidden bg-gradient-to-b from-ivory via-[#FCF8EE] to-[#F7F0E2]"
    >
      {/* Subtle organic background aura inspired by gold & ivory */}
      <div
        className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-golden-amber/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-cream blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle geometric dot grid pattern at 3.5% opacity */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#6D2D12 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Narrative & Clear CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-golden-amber/35 mb-5 shadow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-golden-amber animate-pulse" />
              <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-brand-brown uppercase">
                Healthy Bites • Happy Life • Pure Cow Ghee
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.65rem] leading-[1.12] text-brand-brown font-normal tracking-tight">
              Artisanal Dry Fruit{' '}
              <span className="italic block mt-1 text-golden-amber-dark">
                Laddus.
              </span>
            </h1>

            {/* Refined subtle gold accent line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-golden-amber to-golden-amber/20 mt-6 mb-5" />

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-taupe leading-relaxed max-w-xl font-normal">
              Healthy Bites, Happy Life. Discover our handcrafted selection of authentic dry fruit laddus, loaded with whole almonds, walnuts, cashews, and pure desi cow ghee for lasting daily energy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollTo('products')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#15291E] text-ivory font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-soft hover:shadow-elevated active:scale-95"
              >
                <span>Explore Laddus</span>
                <ArrowRight className="w-4 h-4 text-golden-amber" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => scrollTo('trade')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-ivory hover:bg-cream text-brand-brown border border-golden-amber/40 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-golden-amber active:scale-95 shadow-soft"
              >
                <span>Discuss Business</span>
                <MessageSquareCheck className="w-4 h-4 text-brand-brown/70" />
              </button>
            </div>

            {/* Credible Brand Badges Echoing the 4 Pillars in the Image */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-taupe-light w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                  100% Natural
                </span>
                <span className="text-[0.7rem] text-muted-taupe mt-0.5">
                  No Preservatives
                </span>
              </div>
              <div className="flex flex-col border-l border-taupe-light pl-4">
                <span className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                  Pure Cow Ghee
                </span>
                <span className="text-[0.7rem] text-muted-taupe mt-0.5">
                  Rich in Nutrition
                </span>
              </div>
              <div className="flex flex-col border-l border-taupe-light pl-4">
                <span className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                  Good for Energy
                </span>
                <span className="text-[0.7rem] text-muted-taupe mt-0.5">
                  Whole Nuts &amp; Dates
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Artisanal Photography from Client */}
          <div className="lg:col-span-6">
            <div
              className="perspective-container relative mx-auto max-w-lg lg:max-w-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer decorative golden ring inspired by the brand */}
              <div
                className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-ivory via-cream to-ivory border border-golden-amber/40 shadow-premium transition-transform duration-300 ease-out preserve-3d"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* Clean, Unobstructed Square Framing displaying 100% of the image */}
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#3A1F14] shadow-inner group">
                  <img
                    src="/images/products/hero-healthy-bites.jpg"
                    alt="Healthy Bites, Happy Life - Handcrafted dry fruits laddu pyramid with almonds and walnuts"
                    className="w-full h-full object-cover object-center transform duration-700 group-hover:scale-102"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Logo-inspired delicate corner bracket accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-golden-amber/70 pointer-events-none rounded-tl-xl" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-golden-amber/70 pointer-events-none rounded-br-xl" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
