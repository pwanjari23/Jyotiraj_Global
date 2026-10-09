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
                {COMPANY_INFO.eyebrow}
              </span>
            </div>

            {/* Main Headline matching the client's mockup design */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.1] text-brand-brown font-normal tracking-tight">
              <span className="text-[#1E3A2B] font-bold block sm:inline">Dry Fruits </span>
              <span className="text-golden-amber-dark font-serif italic block sm:inline">Laddu.</span>{' '}
              <span className="text-roasted-brown block mt-1 text-2xl sm:text-3xl lg:text-4xl font-normal">
                Crafted with Care.
              </span>
            </h1>

            {/* Refined subtle gold accent line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-golden-amber to-golden-amber/20 mt-6 mb-5" />

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-muted-taupe leading-relaxed max-w-xl font-normal">
              A healthy treat, packed with nature's best ingredients. Discover our handcrafted selection of authentic laddus and traditional wellness confections made with pure desi cow ghee.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-8 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => scrollTo('products')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E3A2B] hover:bg-[#15291E] text-ivory font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-soft hover:shadow-elevated active:scale-95"
              >
                <span>View Products</span>
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

            {/* Credible Brand Badges (Restrained & Informational) */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-10 border-t border-taupe-light w-full max-w-lg">
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                  Pure Cow Ghee
                </span>
                <span className="text-[0.7rem] text-muted-taupe mt-0.5">
                  Slow-Roasted Aroma
                </span>
              </div>
              <div className="flex flex-col border-l border-taupe-light pl-4">
                <span className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                  No Added Sugar
                </span>
                <span className="text-[0.7rem] text-muted-taupe mt-0.5">
                  Natural Date Sweetness
                </span>
              </div>
              <div className="flex flex-col border-l border-taupe-light pl-4">
                <span className="font-serif text-lg sm:text-xl font-bold text-brand-brown">
                  B2B Ready
                </span>
                <span className="text-[0.7rem] text-muted-taupe mt-0.5">
                  Gifting &amp; Trade Inquiries
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Product Composition with 3D Depth */}
          <div className="lg:col-span-6">
            <div
              className="perspective-container relative mx-auto max-w-md lg:max-w-none"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Outer decorative golden ring inspired by the logo */}
              <div
                className="relative rounded-3xl p-3 sm:p-4 bg-gradient-to-br from-ivory via-cream to-ivory border border-golden-amber/40 shadow-premium transition-transform duration-300 ease-out preserve-3d"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* Main Gourmet Food Photography from the shop owner's capture */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-cream shadow-inner group">
                  <img
                    src="/images/products/hero-laddu-platter.jpg"
                    alt="Handcrafted dry fruits laddu platter in brass thali captured by Jyotiraj Global"
                    className="w-full h-full object-cover object-center transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  
                  {/* Gentle warm gradient vignette overlay for editorial lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/70 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom caption overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 text-ivory text-left">
                    <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.22em] text-golden-amber font-semibold">
                      Signature Handcrafted Platter
                    </p>
                    <p className="font-serif text-base sm:text-lg text-ivory mt-0.5">
                      Dry Fruits Laddu • Pure Desi Cow Ghee
                    </p>
                  </div>
                </div>

                {/* Layered Floating Card 1: Botanical quality tag */}
                <div
                  className="absolute -top-4 -left-3 sm:-left-6 bg-ivory/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-golden-amber/35 shadow-soft flex items-center gap-2.5 animate-subtle-float"
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <div className="w-7 h-7 rounded-full bg-leaf-green-light flex items-center justify-center text-leaf-green shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[0.62rem] uppercase tracking-wider text-muted-taupe font-semibold">
                      Authentic Quality
                    </p>
                    <p className="text-xs font-bold text-brand-brown font-serif">
                      Pure Desi Ghee Laddus
                    </p>
                  </div>
                </div>

                {/* Layered Floating Card 2: Trade Vision */}
                <div
                  className="absolute -bottom-4 -right-2 sm:-right-4 bg-ivory/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-golden-amber/40 shadow-soft flex items-center gap-2.5"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className="w-7 h-7 rounded-full bg-cream border border-golden-amber/40 flex items-center justify-center text-golden-amber shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[0.62rem] uppercase tracking-wider text-muted-taupe font-semibold">
                      Business Forward
                    </p>
                    <p className="text-xs font-bold text-brand-brown font-serif">
                      Domestic &amp; Export Reach
                    </p>
                  </div>
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
