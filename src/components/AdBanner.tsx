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
        onClick={handleBannerClick}
        className="group relative flex flex-col md:flex-row items-center justify-between w-full my-8 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 cursor-pointer"
      >
        {/* Aesthetic Background Effect */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${showcase.color} opacity-[0.03] dark:opacity-[0.07] blur-3xl -mr-20 -mt-20 group-hover:opacity-10 transition-opacity`} />
        
        <div className="flex items-center gap-5 z-10">
          <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${showcase.color} text-white shadow-lg shadow-indigo-500/20`}>
            <Icon className="w-7 h-7" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {showcase.title}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
              {showcase.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 z-10">
          <button 
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold transition-all group-hover:gap-4 hover:opacity-90"
          >
            {showcase.ctaText}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center w-full my-8 overflow-hidden rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 p-4 min-h-[120px] justify-center">
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
