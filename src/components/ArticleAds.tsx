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
            <div className={`my-12 p-6 md:p-8 rounded-3xl bg-gradient-to-br ${promo.color} text-white shadow-xl relative overflow-hidden group max-h-[250px]`}>
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110 duration-1000" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 h-full">
                    <div className="flex items-center gap-6">
                        <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md border border-white/30 shadow-lg">
                            <Icon size={32} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{promo.title}</h3>
                            <p className="text-white/80 text-sm md:text-base max-w-xl line-clamp-2">{promo.subtitle}</p>
                        </div>
                    </div>
                    <a 
                        href={promo.link}
                        className="bg-white text-slate-900 py-3 px-8 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 shrink-0"
                    >
                        {promo.ctaText}
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="my-12 w-full max-h-[250px] overflow-hidden flex flex-col items-center">
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
