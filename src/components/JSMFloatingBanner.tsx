import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const banners = [
  { title: "AI IS REPLACING JOBS IN 2026", sub: "How safe is YOUR job? Find out in 60 seconds — free.", href: "https://jobsecuritymeter.com", cta: "Check Now", ctaShort: "Check" },
  { title: "YOUR ROLE. YOUR RISK. YOUR SCORE.", sub: "Get your personalized AI Job Security Score before it's too late.", href: "https://jobsecuritymeter.com", cta: "Check Now", ctaShort: "Check" },
  { title: "73% OF DESK JOBS ARE AT RISK", sub: "Is yours one of them? Check your AI job safety score — free.", href: "https://jobsecuritymeter.com", cta: "Check Now", ctaShort: "Check" },
  { title: "FUTURE-PROOF YOUR CAREER", sub: "See how AI-proof your job is and what skills to build next.", href: "https://jobsecuritymeter.com", cta: "Check Now", ctaShort: "Check" },
];

interface JSMFloatingBannerProps {
  isCollapsed: boolean;
  hasAside?: boolean;
}

export function JSMFloatingBanner({ isCollapsed, hasAside = false }: JSMFloatingBannerProps) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeBanner, setActiveBanner] = useState(banners[0]);
  const location = useLocation();

  useEffect(() => {
    // Check if dismissed within the last 24 hours
    const dismissedAt = localStorage.getItem('jsm-banner-dismissed-at');
    if (dismissedAt) {
      const dismissedTime = parseInt(dismissedAt, 10);
      const hoursSinceDismiss = (Date.now() - dismissedTime) / (1000 * 60 * 60);
      if (hoursSinceDismiss < 24) {
        return;
      }
    }

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
    localStorage.setItem('jsm-banner-dismissed-at', Date.now().toString());
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex flex-col justify-end pb-2">
      {/* Sidebar offset wrapper */}
      <div className={cn(
        "w-full transition-all duration-300 ease-in-out",
        isCollapsed ? "sm:pl-[72px]" : "sm:pl-64"
      )}>
        {/* Main centered container matching MainLayout */}
        <div className="flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto relative">
          
          {/* Main content area boundary */}
          <div className="flex-1 px-2 sm:px-3 lg:px-4 w-full min-w-0">
            {/* The actual banner */}
            <div
              className={cn(
                "w-full pointer-events-auto transition-all duration-300 ease-in-out origin-bottom",
                closing ? "translate-y-[120%] opacity-0" : "translate-y-0 opacity-100"
              )}
            >
              <a
                href={activeBanner.href || "https://jobsecuritymeter.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-3 pl-4 pr-10 py-1.5 sm:pl-6 sm:pr-12 sm:py-2 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-[#2D5F4F]/30 rounded-xl sm:rounded-2xl shadow-[0_4px_40px_rgba(0,0,0,0.35)] overflow-hidden w-full"
              >
                {/* Animated accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2D5F4F] to-transparent opacity-60" />

                {/* Subtle glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-16 bg-[#2D5F4F]/10 rounded-full blur-3xl" />

                {/* Left content */}
                <div className="flex items-center gap-3 relative z-10 min-w-0">
                  <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-300">
                    <img src="/jsm-logo.png" alt="JSM Logo" className="w-full h-full object-cover" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] sm:text-[10px] font-black text-emerald-400 uppercase tracking-[0.15em] leading-none mb-0.5">
                      {activeBanner.title}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-tight truncate">
                      {activeBanner.sub}
                    </p>
                  </div>
                </div>

                {/* CTA button */}
                <div className="shrink-0 flex items-center gap-1.5 bg-[#2D5F4F] hover:bg-[#3a7c67] text-white py-1 px-2.5 sm:py-1.5 sm:px-3 rounded-lg sm:rounded-xl text-[10px] sm:text-[11px] font-black uppercase tracking-wider transition-all group-hover:translate-x-0.5 shadow-lg shadow-[#2D5F4F]/25 relative z-10">
                  <span className="hidden sm:inline">{activeBanner.cta}</span>
                  <span className="sm:hidden">{activeBanner.ctaShort}</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
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
          </div>

          {/* Aside placeholder to reserve space on the right */}
          {hasAside && (
            <div className="hidden lg:block lg:w-[296px] shrink-0 pointer-events-none" />
          )}

        </div>
      </div>
    </div>
  );
}

