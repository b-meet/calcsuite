import { useState, useEffect } from 'react';
import { X, Copy, Check, Share2, Twitter, Link as LinkIcon } from 'lucide-react';
import { cn } from '../utils/cn';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    calculatorName: string;
    calculatorId: string;
}

export function ShareModal({ isOpen, onClose, calculatorName, calculatorId }: ShareModalProps) {
    const [copied, setCopied] = useState(false);
    const [shareType, setShareType] = useState<'calculator' | 'calculation'>('calculator');

    const baseUrl = `${window.location.origin}/calculator/${calculatorId}`;
    const fullUrl = window.location.href;
    const currentUrl = shareType === 'calculator' ? baseUrl : fullUrl;

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    if (!isOpen) return null;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const shareSocial = (platform: 'whatsapp' | 'twitter' | 'telegram') => {
        const text = `Check out this ${calculatorName} on CalcSuite!`;
        const url = encodeURIComponent(currentUrl);

        const shareUrls = {
            whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + currentUrl)}`,
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`,
            telegram: `https://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`,
        };

        window.open(shareUrls[platform], '_blank');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                            <Share2 size={24} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Share Calculator</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 space-y-8">
                    {/* Share Type Toggle */}
                    <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                        <button
                            onClick={() => setShareType('calculator')}
                            className={cn(
                                "flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all",
                                shareType === 'calculator'
                                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                            )}
                        >
                            Only Calculator
                        </button>
                        <button
                            onClick={() => setShareType('calculation')}
                            className={cn(
                                "flex-1 px-4 py-2.5 text-sm font-semibold rounded-xl transition-all",
                                shareType === 'calculation'
                                    ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm"
                                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                            )}
                        >
                            Current Calculation
                        </button>
                    </div>

                    {/* Link Display */}
                    <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Sharable Link
                        </label>
                        <div className="flex gap-2">
                            <div className="relative flex-1">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input
                                    type="text"
                                    readOnly
                                    value={currentUrl}
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm text-slate-600 dark:text-slate-300 focus:outline-none"
                                />
                            </div>
                            <button
                                onClick={copyToClipboard}
                                className={cn(
                                    "px-6 rounded-2xl font-bold transition-all flex items-center gap-2",
                                    copied
                                        ? "bg-green-500 text-white shadow-green-500/20"
                                        : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 shadow-lg"
                                )}
                            >
                                {copied ? <Check size={20} /> : <Copy size={20} />}
                                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                            </button>
                        </div>
                    </div>

                    {/* Quick Share */}
                    <div className="space-y-4">
                        <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                            Quick Share
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            <button
                                onClick={() => shareSocial('whatsapp')}
                                className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white rounded-2xl shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">WhatsApp</span>
                            </button>
                            <button
                                onClick={() => shareSocial('twitter')}
                                className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-2xl shadow-lg shadow-black/20 group-hover:scale-110 transition-transform">
                                    <Twitter size={24} />
                                </div>
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">X (Twitter)</span>
                            </button>
                            <button
                                onClick={() => shareSocial('telegram')}
                                className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-[#0088cc] text-white rounded-2xl shadow-lg shadow-blue-400/20 group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M11.944 0C5.346 0 0 5.346 0 12s5.346 12 12 12 12-5.346 12-12S18.542 0 11.944 0zm5.83 8.133l-2.002 9.445c-.15.676-.554.842-1.12.523l-3.04-2.24-1.468 1.412c-.162.162-.3.298-.616.298l.218-3.097L15.39 8.842c.245-.218-.053-.339-.38-.12l-6.973 4.39-3.002-.938c-.652-.204-.666-.652.136-.964l11.724-4.52c.54-.204 1.015.116.88.843z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Telegram</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                        Sharing calculations helps others get to your same results instantly.
                    </p>
                </div>
            </div>
        </div>
    );
}
