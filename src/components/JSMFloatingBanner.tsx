import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const banners = [
  { title: "AI IS REPLACING JOBS IN 2026", sub: "How safe is YOUR job? Find out in 60 seconds — free." },
  { title: "YOUR ROLE. YOUR RISK. YOUR SCORE.", sub: "Get your personalized AI Job Security Score before it's too late." },
  { title: "73% OF DESK JOBS ARE AT RISK", sub: "Is yours one of them? Check your AI job safety score — free." },
  { title: "FUTURE-PROOF YOUR CAREER", sub: "See how AI-proof your job is and what skills to build next." },
];

interface JSMFloatingBannerProps {
  isCollapsed: boolean;
}

export function JSMFloatingBanner({ isCollapsed }: JSMFloatingBannerProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeBanner, setActiveBanner] = useState(banners[0]);
  const location = useLocation();

  useEffect(() => {
    // Reset state and pick a new banner on every route change
    setClosing(false);
    setVisible(false);

    const randomBanner = banners[Math.floor(Math.random() * banners.length)];
    setActiveBanner(randomBanner);

    // Re-trigger entrance delay
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleDismiss = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",
        isCollapsed ? "left-4 sm:left-[88px]" : "left-4 sm:left-[272px]",
        closing ? "translate-y-[120%] opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <a
        href="https://jobsecuritymeter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-between gap-3 pl-4 pr-10 py-2.5 sm:pl-8 sm:pr-14 sm:py-3 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#2D5F4F]/30 rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.35)] overflow-hidden"
      >
        {/* Animated accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2D5F4F] to-transparent opacity-60" />

        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-16 bg-[#2D5F4F]/10 rounded-full blur-3xl" />

        {/* Left content */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-10 min-w-0">
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300">
            <img src="/jsm-logo.png" alt="JSM Logo" className="w-full h-full object-cover" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] sm:text-[11px] font-black text-emerald-400 uppercase tracking-[0.15em] leading-none mb-0.5">
              {activeBanner.title}
            </p>
            <p className="text-sm sm:text-[15px] font-semibold text-white leading-tight truncate">
              {activeBanner.sub}
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="shrink-0 flex items-center gap-1.5 bg-[#2D5F4F] hover:bg-[#3a7c67] text-white py-2 px-4 sm:px-5 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all group-hover:translate-x-0.5 shadow-lg shadow-[#2D5F4F]/25 relative z-10">
          <span className="hidden sm:inline">Check Now</span>
          <span className="sm:hidden">Check</span>
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </div>

        {/* Close button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDismiss();
          }}
          className="absolute top-1/2 -translate-y-1/2 right-1.5 sm:right-3 w-6 h-6 rounded-full bg-slate-700/80 hover:bg-slate-600 text-slate-500 hover:text-white flex items-center justify-center transition-all z-20"
          aria-label="Dismiss banner"
        >
          <X size={12} />
        </button>
      </a>
    </div>
  );
}

