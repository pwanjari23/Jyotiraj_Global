import React, { useState, useRef, useMemo } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, RotateCcw } from 'lucide-react';

export default function LadooFeature() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Stable ambient floating gold shimmer particles
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: ((i * 19) % 95) + 2,
      y: ((i * 27) % 92) + 4,
      size: (i % 3) + 2.5,
    }));
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / (rect.height / 2)) * 8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="craft" className="py-24 sm:py-32 bg-cream/70 text-brand-brown relative overflow-hidden border-b border-taupe-light/70">
      
      {/* Delicate background illumination */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-golden-amber/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-golden-amber/35 mb-4 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-golden-amber" />
            <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-brand-brown uppercase">
              3D Confectionery Feature • No Human Touch
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-brown font-normal tracking-tight">
            From Finest Ingredients to{' '}
            <span className="italic text-roasted-brown block sm:inline">
              Little Moments of Delight.
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-golden-amber/70 mx-auto mt-4 mb-4" />

          <p className="text-sm sm:text-base text-muted-taupe leading-relaxed max-w-2xl mx-auto">
            Dry fruits bring natural texture, rich flavors, and a touch of tradition to familiar favourites. An impressive 3D cinematic showcase of pure artisanal dry fruit spheres on a luxury dark stone pedestal — zero human hands, only pure culinary excellence.
          </p>
        </div>

        {/* 3D Cinematic Gourmet Feature Panel */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="perspective-container relative rounded-3xl overflow-hidden bg-roasted-brown border border-golden-amber/40 shadow-premium p-3 sm:p-5 group cursor-pointer select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3D Render Screen with Interactive Camera Perspective */}
            <div
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#2a130c] via-roasted-brown to-[#1f0d07] shadow-inner preserve-3d transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Ultra-High-Definition 3D Dry Fruit Ladoo Render */}
              <img
                src="/images/products/dry-fruit-laddu-3d.jpg"
                alt="Cinematic 3D artisanal dry fruit ladoos encrusted with pistachios, cashews, almonds, and edible gold leaf"
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                  isPlaying ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Gentle Cinematic Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/90 via-transparent to-black/30 pointer-events-none" />

              {/* Shimmering Golden Floating Dust Particles */}
              {isPlaying && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {particles.map((p) => (
                    <span
                      key={p.id}
                      className="absolute rounded-full bg-golden-amber shadow-gold-glow animate-pulse"
                      style={{
                        top: `${p.y}%`,
                        left: `${p.x}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: 0.65,
                        transition: 'transform 3s ease',
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Top Status Tag: Pure 3D Visual - No Humans */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-roasted-brown/85 backdrop-blur-md border border-golden-amber/40 text-ivory text-xs shadow-soft">
                  <span className="w-2 h-2 rounded-full bg-golden-amber animate-ping" />
                  <span className="font-serif tracking-wider">3D Artisanal Presentation • Untouched</span>
                </div>
              </div>

              {/* Center Playback Indicator */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-golden-amber/90 text-roasted-brown flex items-center justify-center shadow-gold-glow transition-all duration-300 ${
                    isPlaying ? 'opacity-0 scale-75' : 'opacity-100 scale-100 pointer-events-auto cursor-pointer'
                  }`}
                  onClick={() => setIsPlaying(true)}
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Caption & Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-ivory">
                <div className="text-left">
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-golden-amber font-semibold block">
                    Gourmet Confectionery • 3D Showcase
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-ivory mt-0.5">
                    Pistachio Flakes • Cashew Kernels • Whole Almonds • Medjool Dates • Pure Ghee
                  </p>
                </div>

                {/* Media State Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className="p-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 backdrop-blur-md text-ivory border border-ivory/20 transition-colors"
                    aria-label={isPlaying ? 'Pause 3D cinematic showcase' : 'Play 3D cinematic showcase'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="p-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 backdrop-blur-md text-ivory border border-ivory/20 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Micro Interaction Prompt */}
            <div className="flex items-center justify-between mt-3 px-2 text-ivory/65 text-xs">
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-golden-amber" />
                <span>Move cursor across frame to interact in 3D perspective</span>
              </span>
              <span className="text-golden-amber font-mono hidden sm:inline">3D Gourmet Studio</span>
            </div>

          </div>

          {/* Editorial Process Story Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-ivory p-4 rounded-xl border border-golden-amber/25 text-left shadow-soft">
              <span className="text-xs font-mono font-bold text-golden-amber">01</span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-brand-brown mt-1">
                Choicest Nuts
              </h4>
              <p className="text-[0.72rem] text-muted-taupe mt-1 leading-snug">
                Cracked almonds, whole cashews, and Persian pistachios.
              </p>
            </div>

            <div className="bg-ivory p-4 rounded-xl border border-golden-amber/25 text-left shadow-soft">
              <span className="text-xs font-mono font-bold text-golden-amber">02</span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-brand-brown mt-1">
                Gentle Roast
              </h4>
              <p className="text-[0.72rem] text-muted-taupe mt-1 leading-snug">
                Slowly roasted to release rich natural oils and crisp aroma.
              </p>
            </div>

            <div className="bg-ivory p-4 rounded-xl border border-golden-amber/25 text-left shadow-soft">
              <span className="text-xs font-mono font-bold text-golden-amber">03</span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-brand-brown mt-1">
                Natural Binding
              </h4>
              <p className="text-[0.72rem] text-muted-taupe mt-1 leading-snug">
                Sweetened with luscious dates and a touch of pure desi ghee.
              </p>
            </div>

            <div className="bg-ivory p-4 rounded-xl border border-golden-amber/25 text-left shadow-soft">
              <span className="text-xs font-mono font-bold text-golden-amber">04</span>
              <h4 className="font-serif text-sm sm:text-base font-bold text-brand-brown mt-1">
                Artisanal Spheres
              </h4>
              <p className="text-[0.72rem] text-muted-taupe mt-1 leading-snug">
                Golden spherical ladoos garnished with gold foil for celebrations.
              </p>
            </div>
          </div>

          <p className="text-center text-[0.72rem] text-muted-taupe mt-6 italic">
            * Editorial presentation highlighting the natural culinary harmony of premium dry fruits in traditional Indian confectionery.
          </p>

        </div>

      </div>
    </section>
  );
}
