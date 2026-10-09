import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { PRODUCT_CATEGORIES, COMPANY_INFO } from '../data/companyData';

export default function ProductCollection() {
  return (
    <section
      id="products"
      className="py-24 sm:py-32 bg-roasted-brown text-ivory relative overflow-hidden border-y border-golden-amber/20"
    >
      {/* Ambient background glow accents matching brand gold & roasted brown */}
      <div
        className="absolute top-0 right-10 w-96 h-96 rounded-full bg-golden-amber/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-golden-amber/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Subtle traditional geometric pattern at 4% opacity */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D99A16 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory/10 border border-golden-amber/40 mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-golden-amber" />
            <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-golden-amber uppercase">
              Pure Origin Selection
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ivory font-normal tracking-tight">
            Naturally Good.{' '}
            <span className="italic text-golden-amber-light block sm:inline">
              Beautifully Presented.
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-golden-amber to-transparent mx-auto mt-5 mb-5" />

          <p className="text-sm sm:text-base text-ivory/75 leading-relaxed max-w-2xl mx-auto">
            A distinct, hand-graded selection of premium dry fruits and wholesome ingredients for everyday enjoyment, gifting, and commercial requirements.
          </p>
        </div>

        {/* Informational Product Grid (Each item has its OWN distinct photograph) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCT_CATEGORIES.map((item) => (
            <article
              key={item.id}
              className="group bg-[#482316]/85 backdrop-blur-sm rounded-2xl overflow-hidden border border-golden-amber/25 hover:border-golden-amber/70 shadow-elevated hover:shadow-gold-glow transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
            >
              {/* Distinct High-Resolution Product Photography */}
              <div className="relative aspect-[4/3] overflow-hidden bg-roasted-brown">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Subtle dark gradient overlay to frame the image */}
                <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/80 via-transparent to-transparent pointer-events-none" />

                {/* Botanical Tag */}
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-roasted-brown/90 backdrop-blur-md text-[0.68rem] font-medium text-golden-amber-light border border-golden-amber/40 shadow-sm">
                  {item.accent}
                </span>
              </div>

              {/* Informational Details */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-golden-amber transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-golden-amber font-semibold mt-1">
                    {item.subName}
                  </p>
                  <p className="text-xs sm:text-sm text-ivory/70 mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Inquiry Link */}
                <div className="pt-5 mt-5 border-t border-ivory/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[0.72rem] text-ivory/60">
                    <ShieldCheck className="w-3.5 h-3.5 text-leaf-green" />
                    <span>Graded &amp; Sorted</span>
                  </div>

                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-golden-amber/15 hover:bg-golden-amber text-golden-amber-light hover:text-roasted-brown text-xs font-semibold tracking-wide transition-all duration-200"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quality assurance footer note */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-ivory/60 max-w-xl mx-auto">
            Every category represents verified single-origin or select-blend kernels inspected for moisture integrity, natural oils, and crisp texture.
          </p>
        </div>

      </div>
    </section>
  );
}
