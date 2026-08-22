import { useEffect, useState, useRef } from 'react';
import { PROMOTIONS } from './HouseAdsData';
import { ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';

declare global {
    interface Window {
        adsbygoogle: any[];
    }
}

export function AsideAds() {
    const [adStatus, setAdStatus] = useState<'loading' | 'filled' | 'failed'>('loading');
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});

            // Check if ad filled after a delay
            const timer = setTimeout(() => {
                if (adRef.current) {
                    const status = adRef.current.getAttribute('data-ad-status');
                    if (status === 'unfilled' || adRef.current.offsetHeight < 20) {
                        setAdStatus('failed');
                    } else if (status === 'filled') {
                        setAdStatus('filled');
                    }
                }
            }, 3000);

            return () => clearTimeout(timer);
        } catch (e) {
            console.error('AdSense Error:', e);
            setAdStatus('failed');
        }
    }, []);

    return (
        <aside className="hidden lg:block w-[280px] shrink-0 sticky top-10 self-start">
            <div 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-sm flex flex-col overflow-hidden w-full"
                style={{ height: 'calc(100vh - 130px)' }}
            >
                {adStatus !== 'failed' && (
                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-4 text-center shrink-0">
                        Advertisement
                    </p>
                )}

                <div className="relative transition-all duration-500 overflow-y-auto custom-scrollbar pr-1 flex-1">
                    <ins
                        ref={adRef}
                        className={cn(
                            "adsbygoogle",
                            adStatus === 'failed' ? 'hidden' : 'block'
                        )}
                        style={{ display: 'block' }}
                        data-ad-format="autorelaxed"
                        data-ad-client="ca-pub-5586908237640960"
                        data-ad-slot="1357314939"
                    />

                    {adStatus === 'failed' && (
                        <div className="flex flex-col gap-2 h-full animate-in fade-in slide-in-from-bottom-4 duration-700 py-1">
                            {PROMOTIONS.map((promo) => (
                                <div key={promo.id} className={cn(
                                    "rounded-xl p-3 bg-gradient-to-br text-white shadow-lg relative overflow-hidden flex flex-col flex-1 justify-between min-h-[130px]",
                                    promo.color
                                )}>
                                    {/* Abstract pattern background */}
                                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                                    <div className="flex flex-col flex-1 z-10 relative">
                                        <div className="flex items-center gap-3 mb-2.5">
                                            <div className="bg-white/15 w-10 h-10 shrink-0 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                                                <promo.icon size={20} className="text-white" />
                                            </div>
                                            <h3 className="font-bold text-base leading-tight tracking-tight line-clamp-2">
                                                {promo.title}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-[11px] text-white/80 mb-3 leading-relaxed font-medium line-clamp-2">
                                            {promo.subtitle}
                                        </p>

                                        <a
                                            href={promo.link}
                                            target={promo.link.startsWith('http') ? '_blank' : '_self'}
                                            rel="noopener noreferrer"
                                            className="mt-auto flex items-center justify-center gap-2 bg-white text-slate-900 py-2 px-4 rounded-xl text-[11px] font-extrabold hover:bg-slate-50 transition-all shadow-md group/btn w-full"
                                        >
                                            {promo.ctaText}
                                            <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}

