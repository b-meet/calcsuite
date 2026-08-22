import { Trophy, ArrowRight, Zap, ChevronLeft, ChevronRight, TrendingDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getEffectiveStreak } from '../utils/streak';
import { useState, useEffect, useCallback, useRef } from 'react';

// Per-slide durations: JSM gets more airtime
const SLIDE_DURATIONS = [7000, 4000, 7000]; // [JSM, Arena, Autofill]

const banners = [
  { title: "AI IS REPLACING JOBS IN 2026", sub: "How safe is YOUR job? Find out in 60 seconds — free.", danger: "2026 LAYOFFS", href: "https://jobsecuritymeter.com", cta: "Check Now" },
  { title: "YOUR ROLE. YOUR RISK. YOUR SCORE.", sub: "Get your personalized AI Job Security Score before it's too late.", danger: "RISK ALERT", href: "https://jobsecuritymeter.com", cta: "Check Now" },
  { title: "73% OF DESK JOBS ARE AT RISK", sub: "Is yours one of them? Check your AI job safety score — free.", danger: "CRITICAL", href: "https://jobsecuritymeter.com", cta: "Check Now" },
  { title: "FUTURE-PROOF YOUR CAREER", sub: "See how AI-proof your job is and what skills to build next.", danger: "UPGRADE", href: "https://jobsecuritymeter.com", cta: "Check Now" },
];

function JSMSlide({ banner }: { banner: typeof banners[0] }) {
  return (
    <a
      href={banner.href || "https://jobsecuritymeter.com"}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col sm:flex-row items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-gradient-to-r from-[#2D5F4F]/10 via-emerald-500/10 to-teal-500/10 dark:from-[#2D5F4F]/10 dark:via-emerald-500/5 dark:to-teal-500/5 border border-emerald-200/60 dark:border-emerald-800/30 hover:border-[#2D5F4F] dark:hover:border-[#2D5F4F] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md group/jsm"
    >
      {/* Animated background pulses */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#2D5F4F]/10 rounded-full blur-3xl group-hover/jsm:bg-[#2D5F4F]/20 transition-all duration-700 animate-pulse" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-emerald-500/8 rounded-full blur-3xl group-hover/jsm:bg-emerald-500/15 transition-all duration-700" />

      <div className="flex items-center gap-2.5 relative z-10 w-full sm:w-auto">
        <div className="shrink-0 w-8 h-8 rounded-lg overflow-hidden shadow group-hover/jsm:scale-105 group-hover/jsm:-rotate-3 transition-transform duration-500">
          <img src="/jsm-logo.png" alt="JSM Logo" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[8px] font-black text-[#2D5F4F] dark:text-emerald-400 uppercase tracking-widest italic leading-none">AI-Powered</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-emerald-500/10 rounded">
              <TrendingDown size={9} className="text-emerald-500 animate-pulse" />
              <span className="text-[7px] font-bold text-[#2D5F4F] dark:text-emerald-400">{banner.danger}</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-none tracking-tight mb-1">
            {banner.title}
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0">
            {banner.sub}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 relative z-10 w-full sm:w-auto justify-end">
        <div className="hidden md:flex flex-col items-end mr-1">
          <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">Free Analysis</span>
          <span className="text-[11px] font-black text-slate-700 dark:text-slate-200">Before It's Too Late</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 text-[#2D5F4F] dark:text-emerald-400 py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800 shadow-sm group-hover/jsm:bg-[#2D5F4F] group-hover/jsm:text-white group-hover/jsm:border-[#2D5F4F] transition-all transform group-hover/jsm:translate-x-1">
          {banner.cta || "Check Now"}
          <ArrowRight size={10} className="transition-transform group-hover/jsm:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

function AutofillSlide() {
  return (
    <a
      href="https://chromewebstore.google.com/detail/job-autofill-by-job-secur/hadjcomlmkhgmhoaocbpaphpgceffbck"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col sm:flex-row items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-gradient-to-r from-purple-600/10 via-fuchsia-500/10 to-pink-500/10 dark:from-purple-500/5 dark:via-fuchsia-500/5 dark:to-pink-500/5 border border-purple-200/50 dark:border-purple-800/30 hover:border-purple-400 dark:hover:border-purple-700 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md group/autofill"
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover/autofill:bg-purple-500/20 transition-all duration-700" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl group-hover/autofill:bg-fuchsia-500/20 transition-all duration-700" />

      <div className="flex items-center gap-2.5 relative z-10 w-full sm:w-auto">
        <div className="shrink-0 w-8 h-8 rounded-lg overflow-hidden shadow group-hover/autofill:scale-105 group-hover/autofill:rotate-3 transition-transform duration-500">
          <img src="/jsm-logo.png" alt="JSM Logo" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[8px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest italic leading-none">Job Extension</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-purple-500/10 rounded">
              <Zap size={9} className="text-purple-500 fill-purple-500 animate-pulse" />
              <span className="text-[7px] font-bold text-purple-600 dark:text-purple-400">AUTOMATE</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-none tracking-tight mb-1">
            APPLY TO JOBS 10X FASTER
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0">
            Automate job applications with our free AI Job Autofill extension.
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 relative z-10 w-full sm:w-auto justify-end">
        <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-lg text-[9px] font-black uppercase tracking-widest border border-purple-100 dark:border-purple-800 shadow-sm group-hover/autofill:bg-purple-600 group-hover/autofill:text-white group-hover/autofill:border-purple-600 transition-all transform group-hover/autofill:translate-x-1">
          Get Extension
          <ArrowRight size={10} className="transition-transform group-hover/autofill:translate-x-1" />
        </div>
      </div>
    </a>
  );
}

function ArenaSlide() {
  return (
    <Link
      to="/brain-training/"
      className="relative flex flex-col sm:flex-row items-center justify-between gap-2.5 p-2 sm:p-2.5 rounded-2xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-500/5 dark:to-indigo-500/5 border border-blue-200/50 dark:border-blue-800/30 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md group/hook"
    >
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover/hook:bg-blue-500/20 transition-all duration-700" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover/hook:bg-indigo-500/20 transition-all duration-700" />

      <div className="flex items-center gap-2.5 relative z-10 w-full sm:w-auto">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow group-hover/hook:scale-105 group-hover/hook:rotate-3 transition-transform duration-500">
          <Trophy size={16} className="stroke-[2.5]" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[8px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest italic">Daily Challenge</span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-blue-500/10 rounded">
              <Zap size={9} className="text-blue-500 fill-blue-500 animate-pulse" />
              <span className="text-[7px] font-bold text-blue-600 dark:text-blue-400">LIVE</span>
            </div>
          </div>
          <div className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-none italic uppercase tracking-tight mb-1">
            Brain Arena <span className="text-blue-600 dark:text-blue-400">is Waiting</span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-0">
            Daily 5x5 logic puzzles. Fresh levels every midnight.
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2.5 relative z-10 w-full sm:w-auto justify-end">
        <div className="hidden md:flex flex-col items-end mr-1">
          <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Current Streak</span>
          <span className="text-[11px] font-black text-slate-700 dark:text-slate-200 italic">{getEffectiveStreak()} Days</span>
        </div>

        <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-lg text-[9px] font-black uppercase italic tracking-widest border border-blue-100 dark:border-blue-800 shadow-sm group-hover/hook:bg-blue-600 group-hover/hook:text-white group-hover/hook:border-blue-600 transition-all transform group-hover/hook:translate-x-1">
          Enter Arena
          <ArrowRight size={10} className="transition-transform group-hover/hook:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export function ArenaHook() {
  const location = useLocation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeBanner, setActiveBanner] = useState(banners[0]);
  const [progress, setProgress] = useState(0);
  const isPausedRef = useRef(false);
  const elapsedRef = useRef(0);
  const lastTickRef = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const totalSlides = 3;

  useEffect(() => {
    // Pick a new banner on every route change
    const randomBanner = banners[Math.floor(Math.random() * banners.length)];
    setActiveBanner(randomBanner);
  }, [location.pathname]);

  const advanceSlide = useCallback(() => {
    elapsedRef.current = 0;
    setProgress(0);
    setActiveSlide(prev => (prev + 1) % totalSlides);
  }, []);

  const goToSlide = useCallback((index: number) => {
    const normalized = ((index % totalSlides) + totalSlides) % totalSlides;
    elapsedRef.current = 0;
    setProgress(0);
    setActiveSlide(normalized);
  }, []);

  // Core animation loop — tracks real elapsed ms, pauses/resumes seamlessly
  useEffect(() => {
    lastTickRef.current = Date.now();

    const tick = () => {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      lastTickRef.current = now;

      if (!isPausedRef.current) {
        elapsedRef.current += delta;
        const duration = SLIDE_DURATIONS[activeSlide] || 5000;
        const pct = Math.min(elapsedRef.current / duration, 1);
        setProgress(pct);

        if (pct >= 1) {
          advanceSlide();
          return;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeSlide, advanceSlide]);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
    lastTickRef.current = Date.now();
  }, []);

  const slides = [<JSMSlide key="jsm" banner={activeBanner} />, <ArenaSlide key="arena" />, <AutofillSlide key="autofill" />];
  const slideGradients = [
    'linear-gradient(90deg, #2D5F4F, #10b981)',
    'linear-gradient(90deg, #2563eb, #6366f1)',
    'linear-gradient(90deg, #9333ea, #d946ef)',
  ];

  // Don't show on the arena pages themselves
  if (location.pathname.startsWith('/brain-training') || location.pathname.startsWith('/kenken')) {
    return null;
  }

  return (
    <div
      className="mb-4 relative group/carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slide container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.preventDefault(); goToSlide(activeSlide - 1); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={14} />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); goToSlide(activeSlide + 1); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
        aria-label="Next slide"
      >
        <ChevronRight size={14} />
      </button>

      {/* Dot indicators with live progress */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className="relative h-1.5 rounded-full overflow-hidden transition-all duration-500 bg-slate-200 dark:bg-slate-700"
            style={{ width: activeSlide === i ? '32px' : '12px' }}
            aria-label={`Go to slide ${i + 1}`}
          >
            {activeSlide === i && (
              <span
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  width: `${progress * 100}%`,
                  background: slideGradients[i],
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
