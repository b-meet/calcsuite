import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function PWAPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            setDeferredPrompt(e as BeforeInstallPromptEvent);

            // Check if user has already dismissed it recently
            const lastDismissed = localStorage.getItem('pwa-prompt-dismissed');
            if (lastDismissed) {
                const timeSinceDismiss = Date.now() - parseInt(lastDismissed, 10);
                // If dismissed less than 3 days ago, don't show
                if (timeSinceDismiss < 3 * 24 * 60 * 60 * 1000) {
                    return;
                }
            }

            setIsVisible(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        await deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        // We've used the prompt, and can't use it again, throw it away
        setDeferredPrompt(null);
        setIsVisible(false);

        if (outcome === 'accepted') {
            localStorage.setItem('pwa-installed', 'true');
        }
    };

    const handleDismiss = () => {
        setIsVisible(false);
        // Remember dismissal for 3 days
        localStorage.setItem('pwa-prompt-dismissed', Date.now().toString());
    };

    if (!isVisible && !deferredPrompt) return null; // Only show if we have the event or it's forced

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-[100] w-[calc(100%-2rem)] md:max-w-sm animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 p-5 border border-slate-100 dark:border-slate-700 relative overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10">

                {/* Background Decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>

                <button
                    onClick={handleDismiss}
                    className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors z-10"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-xl text-blue-600 dark:text-blue-400 shadow-sm">
                            <Download size={24} />
                        </div>
                        <div className="pt-0.5">
                            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Install App</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                                Add <span className="font-semibold text-slate-900 dark:text-white">CalcSuite</span> to your home screen for instant offline access.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-2.5 pt-1">
                        <button
                            onClick={handleDismiss}
                            className="flex-1 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            Later
                        </button>
                        <button
                            onClick={handleInstallClick}
                            className="flex-[1.5] bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 component-focus-ring"
                        >
                            <Download size={16} />
                            Install Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
