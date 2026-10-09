import React from 'react';
import { ArrowRight, Leaf, ShieldCheck } from 'lucide-react';
import { LADDU_COLLECTION, COMPANY_INFO } from '../data/companyData';

export default function ProductCollection() {
  return (
    <section
      id="products"
      className="py-20 sm:py-28 bg-roasted-brown text-ivory relative overflow-hidden border-y border-golden-amber/20"
    >
      {/* Ambient background glow accents */}
      <div
        className="absolute top-0 right-10 w-96 h-96 rounded-full bg-golden-amber/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-golden-amber/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle traditional geometric dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D99A16 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 border border-golden-amber/40 mb-3.5 backdrop-blur-sm">
            <Leaf className="w-3.5 h-3.5 text-golden-amber" />
            <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-golden-amber uppercase">
              100% Handcrafted • Authentic Laddus Only
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
            Our Signature Laddus.{' '}
            <span className="italic text-golden-amber-light block sm:inline">
              Crafted with Love, Made for Your Health.
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-golden-amber to-transparent mx-auto mt-4 mb-4" />

          <p className="text-xs sm:text-sm text-ivory/75 leading-relaxed max-w-2xl mx-auto">
            Discover our exclusive shop collection of artisanal handcrafted laddus and traditional healthy confections, prepared fresh with pure desi cow ghee, natural date sweetness, and zero preservatives.
          </p>
        </div>

        {/* =========================================================================
            ARTISANAL LADDUS COLLECTION (6 compact cards)
           ========================================================================= */}
        <div className="mb-6">
          {/* Row Subheader */}
          <div className="flex items-center justify-between mb-6 pb-2.5 border-b border-ivory/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-golden-amber" />
              <h3 className="font-serif text-xl sm:text-2xl text-golden-amber-light font-normal">
                Artisanal Laddus Collection
              </h3>
            </div>
            <span className="text-[0.7rem] uppercase tracking-wider text-ivory/50 font-medium hidden sm:inline">
              6 Authentic Varieties • Pure Desi Cow Ghee
            </span>
          </div>

          {/* Compact Grid: 6 items per line on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {LADDU_COLLECTION.map((item) => (
              <article
                key={item.id}
                className="group bg-[#482316]/90 backdrop-blur-sm rounded-xl overflow-hidden border border-golden-amber/25 hover:border-golden-amber/70 shadow-soft hover:shadow-gold-glow transition-all duration-300 flex flex-col transform hover:-translate-y-1"
              >
                {/* Compact Product Photography */}
                <div className="relative aspect-square overflow-hidden bg-roasted-brown">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/85 via-transparent to-transparent pointer-events-none" />

                  {/* Concise Accent Tag */}
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-roasted-brown/90 backdrop-blur-md text-[0.62rem] font-medium text-golden-amber-light border border-golden-amber/40 shadow-sm">
                    {item.accent}
                  </span>
                </div>

                {/* Compact Card Body */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h4 className="font-serif text-sm sm:text-base font-bold text-ivory group-hover:text-golden-amber transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-[0.65rem] uppercase tracking-wider text-golden-amber font-semibold mt-0.5 line-clamp-1">
                      {item.subName}
                    </p>
                    <p className="text-[0.7rem] text-ivory/65 mt-1.5 leading-snug line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Compact Inquiry Action */}
                  <div className="pt-2.5 mt-2.5 border-t border-ivory/10 flex items-center justify-between">
                    <span className="text-[0.65rem] text-ivory/50">Wholesale</span>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.7rem] font-semibold text-golden-amber-light hover:text-white transition-colors"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Reassurance footer note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-ivory/60 max-w-xl mx-auto">
            <ShieldCheck className="w-4 h-4 text-leaf-green shrink-0" />
            <span>Pure artisanal laddus handcrafted for domestic retail, festive corporate gifting, and international trade inquiries.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
