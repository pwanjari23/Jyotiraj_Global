import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, RotateCcw, Clock, ShieldCheck, Heart, Award } from 'lucide-react';

const PROCESS_STAGES = [
  {
    stage: 1,
    time: 0,
    shortName: "The Harvest",
    title: "1. Raw Nut Selection & Royal Dates",
    desc: "Whole California almonds, cashew halves, Turkish pistachios, and rich Medjool dates resting on charcoal slate with Kashmiri saffron threads.",
    tag: "Zero Refined Sugar",
    icon: Sparkles,
  },
  {
    stage: 2,
    time: 3,
    shortName: "Granulation",
    title: "2. Precision Nut Granulation",
    desc: "Coarse crunchy almond chunks and vibrant emerald pistachio slivers cracked to preserve inherent natural nut oils and crisp texture.",
    tag: "Nutrient Intact",
    icon: Award,
  },
  {
    stage: 3,
    time: 6,
    shortName: "Ghee Alchemy",
    title: "3. Simmering In Pure Desi Ghee",
    desc: "Warm date paste gently bubbling in copper pan with pure A2 cow ghee, naturally binding with roasted nut slivers with zero human touch.",
    tag: "Pure Desi Cow Ghee",
    icon: Heart,
  },
  {
    stage: 4,
    time: 9,
    shortName: "Spherical Rolling",
    title: "4. Natural Spherical Formation",
    desc: "Warm artisanal spheres rolling gently in a vibrant crust of chopped emerald pistachios and toasted almond flakes with zero manual handling.",
    tag: "Hygienic Shaping",
    icon: ShieldCheck,
  },
  {
    stage: 5,
    time: 12,
    shortName: "Royal Crown",
    title: "5. 24K Edible Gold Leaf Finish",
    desc: "Finished golden laddus crowned with 24K edible gold leaf on luxury textured stone, ready for festive gifting and international export.",
    tag: "24K Edible Gold",
    icon: Sparkles,
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
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-golden-amber/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-golden-amber/35 mb-4 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-golden-amber" />
            <span className="text-[0.68rem] sm:text-xs font-semibold tracking-[0.22em] text-brand-brown uppercase">
              3D Craft & Story • 15-Second Process Video
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-brown font-normal tracking-tight">
            How Pure Dry Fruits Become{' '}
            <span className="italic text-roasted-brown block sm:inline">
              Royal Artisanal Laddus.
            </span>
          </h2>

          <div className="w-16 h-0.5 bg-golden-amber/70 mx-auto mt-4 mb-4" />

          <p className="text-sm sm:text-base text-muted-taupe leading-relaxed max-w-2xl mx-auto">
            Experience our 15-second cinematic 3D visual journey tracing whole raw dry fruits transforming into golden spherical confections. Pure ingredient choreography with <span className="font-semibold text-brand-brown">zero human touch</span>.
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
                aria-label="15-second 3D video showing the process of making dry fruit laddus from raw nuts to golden spheres with zero humans visible"
              />

              {/* Gentle Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-roasted-brown/85 via-transparent to-black/25 pointer-events-none" />

              {/* Top Status Bar: 15s Timer & Stage indicator */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 pointer-events-none flex items-center gap-2">
                <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-roasted-brown/85 backdrop-blur-md border border-golden-amber/40 text-ivory text-xs shadow-soft">
                  <span className="w-2 h-2 rounded-full bg-golden-amber animate-pulse" />
                  <span className="font-serif tracking-wider text-[0.7rem] sm:text-xs">
                    3D Reel: {currentTime.toFixed(1)}s / 15.0s
                  </span>
                </div>
              </div>

              {/* Audio status hint pill in top right */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-roasted-brown/85 hover:bg-roasted-brown backdrop-blur-md border border-golden-amber/40 text-ivory text-[0.7rem] transition-colors"
                  title={isMuted ? "Click to unmute ambient soundtrack" : "Mute soundtrack"}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-golden-amber" /> : <Volume2 className="w-3.5 h-3.5 text-leaf-green" />}
                  <span className="hidden sm:inline font-mono text-[0.65rem]">{isMuted ? "Unmute Audio" : "Ambient Sound On"}</span>
                </button>
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
                <div
                  className="w-full h-2 bg-ivory/20 rounded-full overflow-hidden backdrop-blur-sm cursor-pointer relative"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    seekToStage(Math.max(0, Math.min(15, pos * 15)));
                  }}
                  title="Click to jump to any moment"
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
                  <p className="font-serif text-xs sm:text-sm text-ivory/90 mt-0.5 line-clamp-1">
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
                  className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    activeStage === idx
                      ? 'bg-golden-amber/25 border-golden-amber text-golden-amber-light font-semibold shadow-gold-glow/20'
                      : 'bg-[#2e150d] border-ivory/10 text-ivory/70 hover:text-ivory hover:border-ivory/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.62rem] opacity-75">{s.time}s - {s.time + 3}s</span>
                    <span className="text-[0.6rem] px-1.5 py-0.2 rounded bg-ivory/10 text-golden-amber font-sans">
                      {s.tag}
                    </span>
                  </div>
                  <span className="truncate block font-serif text-xs mt-1 text-ivory">
                    {s.shortName}
                  </span>
                </button>
              ))}
            </div>

          </div>

          {/* 3D Craft & Story — Interactive Chapter Cards */}
          <div className="mt-12">
            <div className="text-center mb-6">
              <span className="text-[0.72rem] uppercase tracking-[0.22em] text-golden-amber font-semibold">
                The Five Chapters of Culinary Alchemy
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-brand-brown mt-1">
                The Story Behind Every Sphere
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
              {PROCESS_STAGES.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStage === idx;
                return (
                  <div
                    key={step.stage}
                    onClick={() => seekToStage(step.time)}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      isActive
                        ? 'bg-ivory border-golden-amber shadow-premium ring-1 ring-golden-amber/50 -translate-y-1'
                        : 'bg-ivory/80 border-taupe-light/80 hover:bg-ivory hover:border-golden-amber/40 hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-serif font-bold ${
                        isActive ? 'bg-golden-amber text-roasted-brown' : 'bg-cream text-brand-brown border border-golden-amber/30'
                      }`}>
                        {step.stage}
                      </div>
                      <IconComponent className={`w-4 h-4 ${isActive ? 'text-golden-amber' : 'text-muted-taupe'}`} />
                    </div>

                    <h4 className="font-serif text-sm font-semibold text-brand-brown leading-snug">
                      {step.shortName}
                    </h4>

                    <p className="text-[0.78rem] text-muted-taupe leading-relaxed mt-1.5 line-clamp-3">
                      {step.desc}
                    </p>

                    <div className="mt-3 pt-2 border-t border-taupe-light/50 flex items-center justify-between text-[0.68rem]">
                      <span className="font-mono text-golden-amber font-semibold">{step.time}s mark</span>
                      <span className="text-muted-taupe font-medium">{step.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quality Standards Banner */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-ivory border border-golden-amber/25 shadow-soft">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-taupe-light/60">
              <div className="pt-2 sm:pt-0">
                <span className="block font-serif text-lg font-bold text-brand-brown">100% Date Bound</span>
                <span className="text-xs text-muted-taupe">Zero refined sugar or syrup</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-4">
                <span className="block font-serif text-lg font-bold text-brand-brown">0% Human Touch</span>
                <span className="text-xs text-muted-taupe">Fully hygienic automated process</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-4">
                <span className="block font-serif text-lg font-bold text-brand-brown">Pure Cow Ghee</span>
                <span className="text-xs text-muted-taupe">Slow-roasted golden aroma</span>
              </div>
              <div className="pt-2 sm:pt-0 sm:pl-4">
                <span className="block font-serif text-lg font-bold text-brand-brown">24K Gold Leaf</span>
                <span className="text-xs text-muted-taupe">Certified edible royal garnish</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
