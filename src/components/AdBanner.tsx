import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { SHOWCASE_FEATURES } from './HouseAdsData';
import type { ShowcaseFeature } from './HouseAdsData';
import { usePWAInstall } from '../hooks/usePWAInstall';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function AdBanner() {
  const [isBlocked, setIsBlocked] = useState(false);
  const [showcase, setShowcase] = useState<ShowcaseFeature | null>(null);
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Pick a random showcase feature on mount
    const randomFeature = SHOWCASE_FEATURES[Math.floor(Math.random() * SHOWCASE_FEATURES.length)];
    setShowcase(randomFeature);

    const checkAdBlock = () => {
      // Check if AdSense pushed anything or if the element has height
      const hasContent = adRef.current && adRef.current.innerHTML.trim().length > 0;
      const hasHeight = adRef.current && adRef.current.offsetHeight > 0;

      if (!hasContent || !hasHeight) {
        setIsBlocked(true);
      }
    };

    // First try immediately (some blockers fail fast)
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("AdSense blocked by extension:", e);
      setIsBlocked(true);
    }

    // Wait 2.5s for Google to actually render before declaring it blocked
    const timer = setTimeout(checkAdBlock, 2500);

    return () => clearTimeout(timer);
  }, []);

  const { canInstall, install } = usePWAInstall();

  if (isBlocked && showcase) {
    const Icon = showcase.icon;
    const isPWA = showcase.id === 'pwa' && canInstall;

    const handleBannerClick = async (e: React.MouseEvent) => {
      if (isPWA) {
        e.preventDefault();
        await install();
      }
    };

    return (
      <a
        href={showcase.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBannerClick}
        className="group relative flex flex-row items-center justify-between w-full my-4 overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 sm:p-4 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
      >
        {/* Aesthetic Background Effect */}
        <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${showcase.color} opacity-[0.03] dark:opacity-[0.07] blur-2xl -mr-10 -mt-10 group-hover:opacity-10 transition-opacity`} />

        <div className="flex items-center gap-2 sm:gap-3 z-10 min-w-0">
          <div className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${showcase.color} text-white`}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-none m-0 p-0 truncate">
              {showcase.title}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-none m-0 p-0 truncate mt-0.5">
              {showcase.subtitle}
            </div>
          </div>
        </div>

        <div className="ml-2 sm:ml-3 shrink-0 z-10 hidden sm:block">
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold transition-all group-hover:gap-2 hover:opacity-90"
          >
            {showcase.ctaText}
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center w-full my-4 overflow-hidden rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-3 justify-center">
      {import.meta.env.DEV && (
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
          Google AdSense Area
        </span>
      )}
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', minHeight: '90px' }}
        data-ad-client="ca-pub-5586908237640960"
        data-ad-slot="2978514211"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
