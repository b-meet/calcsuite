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
        <aside className="hidden lg:block w-[320px] shrink-0 sticky top-4 self-start">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-5 shadow-sm h-fit">
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mb-4 text-center">
                    {adStatus === 'failed' ? 'Internal Promotions' : 'Advertisement'}
                </p>
                
                <div className="relative transition-all duration-500 custom-scrollbar">
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
                        <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {PROMOTIONS.map((promo) => (
                                <div key={promo.id} className={cn(
                                    "rounded-[1.5rem] p-5 bg-gradient-to-br text-white shadow-lg relative overflow-hidden group transition-all hover:-translate-y-1 hover:shadow-xl",
                                    promo.color
                                )}>
                                    {/* Abstract pattern background */}
                                    <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl transition-transform group-hover:scale-125 duration-700" />
                                    
                                    <div className="bg-white/15 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 shadow-lg transition-transform group-hover:rotate-12">
                                        <promo.icon size={24} className="text-white" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 leading-tight tracking-tight">
                                        {promo.title}
                                    </h3>
                                    <p className="text-xs text-white/80 mb-6 leading-relaxed font-medium">
                                        {promo.subtitle}
                                    </p>
                                    <a 
                                        href={promo.link}
                                        target={promo.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-white text-slate-900 py-2.5 px-5 rounded-xl text-xs font-extrabold hover:bg-slate-50 transition-all transform hover:scale-[1.02] active:scale-95 shadow-md group/btn"
                                    >
                                        {promo.ctaText}
                                        <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}

