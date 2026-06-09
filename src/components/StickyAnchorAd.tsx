import { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

/**
 * Mobile-only sticky anchor ad that appears at the bottom of the viewport.
 * - Only renders on screens < 768px
 * - Appears after a 3s delay to avoid CLS and obtrusive ad penalties
 * - Has a dismiss button that hides it for the session
 * - Uses a separate ad slot for tracking
 */
export function StickyAnchorAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check if already dismissed this session
    if (sessionStorage.getItem('anchor-ad-dismissed') === 'true') {
      setIsDismissed(true);
      return () => window.removeEventListener('resize', checkMobile);
    }

    // Delay showing by 3s to avoid CLS
    const showTimer = setTimeout(() => {
      setIsVisible(true);

      // Push ad after rendering
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // AdSense blocked — anchor will just not show
      }
    }, 3000);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    sessionStorage.setItem('anchor-ad-dismissed', 'true');
  };

  if (!isMobile || isDismissed || !isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.4)] safe-bottom"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute -top-8 right-2 flex items-center gap-1 px-2 py-1 rounded-t-lg bg-white dark:bg-slate-900 border border-b-0 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-xs transition-colors"
        aria-label="Close ad"
      >
        <X className="w-3 h-3" />
        Close
      </button>

      <div className="px-2 py-1 max-h-[100px] overflow-hidden flex items-center justify-center">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '50px' }}
          data-ad-client="ca-pub-5586908237640960"
          data-ad-slot="2978514211"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
