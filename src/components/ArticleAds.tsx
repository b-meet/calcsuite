import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { ARTICLE_PROMOTIONS } from './HouseAdsData';
import type { ShowcaseFeature } from './HouseAdsData';

export function ArticleAds() {
    const [adStatus, setAdStatus] = useState<'loading' | 'filled' | 'failed'>('loading');
    const adRef = useRef<HTMLModElement>(null);
    const [promo, setPromo] = useState<ShowcaseFeature | null>(null);

    useEffect(() => {
        // Randomly pick an article promotion for fallback
        setPromo(ARTICLE_PROMOTIONS[Math.floor(Math.random() * ARTICLE_PROMOTIONS.length)]);

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});

            const timer = setTimeout(() => {
                if (adRef.current) {
                    const status = adRef.current.getAttribute('data-ad-status');
                    if (status === 'unfilled' || adRef.current.offsetHeight < 20) {
                        setAdStatus('failed');
                    } else {
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

    if (adStatus === 'failed' && promo) {
        const Icon = promo.icon;
        return (
            <div className={`my-6 p-3 sm:p-4 rounded-xl bg-gradient-to-br ${promo.color} text-white shadow-md relative overflow-hidden group`}>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl transition-transform group-hover:scale-110 duration-1000" />
                
                <div className="relative z-10 flex flex-row items-center justify-between gap-2 sm:gap-3 h-full w-full">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center shrink-0 backdrop-blur-md border border-white/30 shadow-sm hidden sm:flex">
                            <Icon size={20} className="text-white" />
                        </div>
                        <div className="min-w-0 flex flex-col">
                            <div className="text-base sm:text-lg font-bold tracking-tight leading-none m-0 p-0 truncate">{promo.title}</div>
                            <div className="text-white/80 text-xs sm:text-sm max-w-xl leading-none m-0 p-0 truncate">{promo.subtitle}</div>
                        </div>
                    </div>
                    <a 
                        href={promo.link}
                        className="bg-white text-slate-900 py-1.5 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-1.5 shadow-sm hover:shadow-md active:scale-95 shrink-0"
                    >
                        <span className="hidden sm:block">{promo.ctaText}</span>
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="my-12 w-full overflow-hidden flex flex-col items-center">
             <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Advertisement</p>
             <ins className="adsbygoogle"
                ref={adRef}
                style={{ display: 'block', textAlign: 'center' }}
                data-ad-layout="in-article"
                data-ad-format="fluid"
                data-ad-client="ca-pub-5586908237640960"
                data-ad-slot="6574816745"
             />
        </div>
    );
}
