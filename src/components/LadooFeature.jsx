import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, RotateCcw, Clock } from 'lucide-react';

const PROCESS_STAGES = [
  {
    stage: 1,
    time: 0,
    title: "1. Premium Nuts & Dates",
    desc: "Whole almonds, cashews, pistachios, and Medjool dates gathering on dark slate with saffron.",
  },
  {
    stage: 2,
    time: 3,
    title: "2. Precision Cracking",
    desc: "Coarse crunchy almond chunks, broken cashews, and emerald pistachio slivers.",
  },
  {
    stage: 3,
    time: 6,
    title: "3. Pure Desi Ghee Blend",
    desc: "Toasted nut slivers gently blending into warm date caramel with aromatic cow ghee.",
  },
  {
    stage: 4,
    time: 9,
    title: "4. Rolling Artisanal Spheres",
    desc: "Perfect spheres rolling in a bed of sliced emerald pistachios and toasted almond flakes.",
  },
  {
    stage: 5,
    time: 12,
    title: "5. Gold Leaf Garnish",
    desc: "Finished golden laddus crowned with edible gold foil on a luxury stone pedestal.",
  },
];

export default function LadooFeature() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const t = video.currentTime;
      setCurrentTime(t);
      // Determine stage (each stage is 3 seconds)
      const stageIdx = Math.min(4, Math.floor(t / 3));
      setActiveStage(stageIdx);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const seekToStage = (timeInSec) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = timeInSec;
    if (!isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section id="craft" className="py-24 sm:py-32 bg-cream/70 text-brand-brown relative overflow-hidden border-b border-taupe-light/70">
      
      {/* Background illumination aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-golden-amber/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-golden-amber/35 mb-4 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-golden-amber" />
            <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-brand-brown uppercase">
              15-Second 3D Culinary Process • Zero Human Touch
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
            Experience our 15-second cinematic 3D visual journey tracing whole raw dry fruits transforming into artisanal golden ladoos. Pure ingredient choreography without human presence.
          </p>
        </div>

        {/* Main 15-Second Video Player Feature */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-roasted-brown border border-golden-amber/40 shadow-premium p-3 sm:p-5 group">
            
            {/* The 15-Second 3D Process Video */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-roasted-brown shadow-inner">
              <video
                ref={videoRef}
                src="/videos/dry-fruit-ladoo-craft.mp4"
                poster="/images/products/dry-fruit-laddu-3d.jpg"
                autoPlay
                playsInline
                muted={isMuted}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-cover"
                aria-label="15-second 3D video showing the process of making dry fruit laddus from raw nuts to golden spheres"
              />

              {/* Gentle Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/90 via-transparent to-black/30 pointer-events-none" />

              {/* Top Status Bar: 15s Timer & Stage indicator */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 pointer-events-none flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-roasted-brown/85 backdrop-blur-md border border-golden-amber/40 text-ivory text-xs shadow-soft">
                  <span className="w-2 h-2 rounded-full bg-golden-amber animate-pulse" />
                  <span className="font-serif tracking-wider">3D Culinary Reel: {currentTime.toFixed(1)}s / 15.0s</span>
                </div>
              </div>

              {/* Center Play Button Overlay when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-golden-amber text-roasted-brown flex items-center justify-center shadow-gold-glow transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Play 15-second video"
                  >
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </button>
                </div>
              )}

              {/* Bottom Custom Timeline Progress Bar */}
              <div className="absolute bottom-16 sm:bottom-20 left-4 right-4 sm:left-6 sm:right-6">
                <div className="w-full h-1.5 bg-ivory/20 rounded-full overflow-hidden backdrop-blur-sm cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    seekToStage(pos * 15);
                  }}
                >
                  <div
                    className="h-full bg-gradient-to-r from-golden-amber to-golden-amber-light transition-all duration-150"
                    style={{ width: `${(currentTime / 15) * 100}%` }}
                  />
                </div>
              </div>

              {/* Bottom Control Bar & Stage Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-ivory">
                <div className="text-left">
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-golden-amber font-semibold block">
                    {PROCESS_STAGES[activeStage]?.title}
                  </span>
                  <p className="font-serif text-sm sm:text-base text-ivory mt-0.5 line-clamp-1">
                    {PROCESS_STAGES[activeStage]?.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2 sm:p-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 backdrop-blur-md text-ivory border border-ivory/20 transition-colors"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 sm:p-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 backdrop-blur-md text-ivory border border-ivory/20 transition-colors"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleRestart}
                    className="p-2 sm:p-2.5 rounded-full bg-ivory/15 hover:bg-ivory/25 backdrop-blur-md text-ivory border border-ivory/20 transition-colors"
                    title="Replay from start"
                    aria-label="Replay 15-second video"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Stage Quick-Jump Tabs below video */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-4 text-xs">
              {PROCESS_STAGES.map((s, idx) => (
                <button
                  key={s.stage}
                  type="button"
                  onClick={() => seekToStage(s.time)}
                  className={`p-2 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    activeStage === idx
                      ? 'bg-golden-amber/20 border-golden-amber text-golden-amber-light font-semibold shadow-soft'
                      : 'bg-[#3e1c12] border-ivory/10 text-ivory/60 hover:text-ivory hover:border-ivory/30'
                  }`}
                >
                  <span className="font-mono text-[0.65rem] block opacity-75">{s.time}s - {s.time + 3}s</span>
                  <span className="truncate block font-serif text-xs mt-0.5">{s.title.split('. ')[1]}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Editorial Note */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs text-muted-taupe max-w-xl mx-auto">
              <Clock className="w-4 h-4 text-golden-amber shrink-0" />
              <span>Full 15-second 3D process sequence from raw harvest kernels to festive 24K gold-garnished confections.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
