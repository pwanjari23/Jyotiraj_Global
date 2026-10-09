import React, { useState, useRef } from 'react';
import { ArrowUpRight, Building2, Package, Globe2, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, TRADE_HIGHLIGHTS } from '../data/companyData';

export default function GlobalTradeSection() {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const highlightsContainerRef = useRef(null);

  const scrollToHighlight = (index) => {
    setActiveHighlight(index);
    if (highlightsContainerRef.current) {
      const container = highlightsContainerRef.current;
      const card = container.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  const handleHighlightsScroll = (e) => {
    const el = e.currentTarget;
    if (window.innerWidth >= 1024) return;
    const cardWidth = el.scrollWidth / TRADE_HIGHLIGHTS.length;
    const newIdx = Math.round(el.scrollLeft / cardWidth);
    if (newIdx >= 0 && newIdx < TRADE_HIGHLIGHTS.length && newIdx !== activeHighlight) {
      setActiveHighlight(newIdx);
    }
  };

  return (
    <section id="trade" className="py-24 sm:py-32 bg-roasted-brown text-ivory relative overflow-hidden border-t border-golden-amber/20">
      
      {/* Ambient background glow accents */}
      <div
        className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-golden-amber/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-golden-amber/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle traditional grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D99A16 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Business Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 border border-golden-amber/40 mb-4 backdrop-blur-sm">
              <Globe2 className="w-3.5 h-3.5 text-golden-amber" />
              <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-golden-amber uppercase">
                International Vision &amp; Trade
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
              Rooted in Quality.{' '}
              <span className="italic block text-golden-amber-light mt-1">
                Looking Toward Global Markets.
              </span>
            </h2>

            <div className="w-16 h-0.5 bg-gradient-to-r from-golden-amber to-transparent mt-5 mb-5" />

            <p className="text-sm sm:text-base text-ivory/75 leading-relaxed mb-8">
              Jyotiraj Global Company is building its vision for wider markets, business partnerships, and international trade.
            </p>

            {/* Three Restrained Visual Highlights: Single-line Carousel on small screens, Vertical stack on desktop (lg:) */}
            <div className="w-full">
              {/* Mobile Carousel Header & Navigation Controls */}
              <div className="flex lg:hidden items-center justify-between mb-3 px-1">
                <span className="text-[0.68rem] uppercase tracking-wider text-golden-amber font-semibold">
                  Trade Pillars ({activeHighlight + 1} / {TRADE_HIGHLIGHTS.length})
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollToHighlight(Math.max(0, activeHighlight - 1))}
                    disabled={activeHighlight === 0}
                    aria-label="Previous trade pillar"
                    className="w-7 h-7 rounded-full border border-golden-amber/40 bg-[#482316] flex items-center justify-center text-ivory disabled:opacity-35 disabled:cursor-not-allowed active:scale-95 transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToHighlight(Math.min(TRADE_HIGHLIGHTS.length - 1, activeHighlight + 1))}
                    disabled={activeHighlight === TRADE_HIGHLIGHTS.length - 1}
                    aria-label="Next trade pillar"
                    className="w-7 h-7 rounded-full border border-golden-amber/40 bg-[#482316] flex items-center justify-center text-ivory disabled:opacity-35 disabled:cursor-not-allowed active:scale-95 transition-all shadow-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Cards Container: Single-line Carousel on small screens, vertical column on desktop */}
              <div
                ref={highlightsContainerRef}
                onScroll={handleHighlightsScroll}
                className="flex lg:flex-col overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar gap-3.5 pb-2 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 lg:space-y-4"
              >
                {TRADE_HIGHLIGHTS.map((item, index) => {
                  const isActive = activeHighlight === index;
                  return (
                    <div
                      key={item.title}
                      onClick={() => scrollToHighlight(index)}
                      className={`w-[85%] sm:w-[65%] lg:w-full shrink-0 lg:shrink snap-center bg-[#482316]/85 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 text-left cursor-pointer lg:cursor-default ${
                        isActive
                          ? 'border-golden-amber shadow-gold-glow/20 ring-1 ring-golden-amber/40 lg:ring-0'
                          : 'border-golden-amber/25 hover:border-golden-amber/60 shadow-soft'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-full bg-golden-amber/15 border border-golden-amber/40 flex items-center justify-center text-golden-amber shrink-0 mt-0.5">
                        {index === 0 && <Package className="w-4 h-4" />}
                        {index === 1 && <Building2 className="w-4 h-4" />}
                        {index === 2 && <Globe2 className="w-4 h-4" />}
                      </div>
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-ivory">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-ivory/70 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Carousel Indicators (3 Dots) */}
              <div className="flex lg:hidden items-center justify-center gap-1.5 mt-3">
                {TRADE_HIGHLIGHTS.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => scrollToHighlight(dotIdx)}
                    aria-label={`Go to highlight ${dotIdx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeHighlight === dotIdx
                        ? 'w-6 bg-golden-amber'
                        : 'w-2 bg-ivory/30 hover:bg-ivory/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Business Call to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mt-9 w-full sm:w-auto">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-golden-amber hover:bg-golden-amber-dark text-roasted-brown font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-gold-glow hover:shadow-elevated active:scale-95"
              >
                <span>Let's Explore Business Opportunities</span>
                <ArrowUpRight className="w-4 h-4 text-roasted-brown" />
              </a>
            </div>

          </div>

          {/* Right Column: Tasteful Packaging & Trade Logistics Imagery */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Framed Panel */}
              <div className="relative rounded-3xl overflow-hidden border border-golden-amber/35 bg-[#482316]/90 backdrop-blur-md shadow-premium p-3 sm:p-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-roasted-brown group">
                  <img
                    src="/images/products/dry-fruit-laddu-3d.jpg"
                    alt="Artisanal dry fruit laddus crafted for institutional supply and trade distribution"
                    className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/85 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 text-ivory text-left">
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-golden-amber font-semibold">
                      Trade &amp; Institutional Supply
                    </p>
                    <p className="font-serif text-base sm:text-lg text-ivory mt-0.5">
                      Standardized Quality &amp; Reliable Sourcing
                    </p>
                  </div>
                </div>

                {/* Lower Information Strip */}
                <div className="p-4 sm:p-5 grid grid-cols-2 gap-4 text-left">
                  <div className="border-r border-ivory/10 pr-2">
                    <span className="text-[0.68rem] uppercase tracking-wider text-golden-amber font-semibold block">
                      Partner Alignment
                    </span>
                    <span className="font-serif text-sm font-bold text-ivory mt-0.5 block">
                      Wholesale &amp; Direct Inquiries
                    </span>
                  </div>
                  <div>
                    <span className="text-[0.68rem] uppercase tracking-wider text-golden-amber font-semibold block">
                      Communication
                    </span>
                    <span className="font-serif text-sm font-bold text-ivory mt-0.5 block">
                      Prompt Domestic &amp; Global Responses
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-golden-amber/70 pointer-events-none rounded-tr-xl" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-golden-amber/70 pointer-events-none rounded-bl-xl" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
