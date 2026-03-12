import { useRegisterSW } from 'virtual:pwa-register/react';
import { RefreshCw, X } from 'lucide-react';

export function PWAUpdatePrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r: ServiceWorkerRegistration | undefined) {
      console.log('SW Registered: ', r);
    },
    onRegisterError(error: any) {
      console.error('SW registration error', error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  if (!offlineReady && !needRefresh) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-[110] md:max-w-sm animate-in slide-in-from-bottom-5 fade-in duration-500">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-5 border border-slate-100 dark:border-slate-700 relative overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10">
        
        {/* Background Decoration */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>

        <button
          onClick={close}
          className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors z-10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-xl text-blue-600 dark:text-blue-400 shadow-sm">
              <RefreshCw className={`size-6 ${needRefresh ? 'animate-spin' : ''}`} />
            </div>
            <div className="pt-0.5">
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                {needRefresh ? 'Update Available' : 'Ready for Offline'}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                {needRefresh 
                  ? 'A new version of CalcSuite is available! Click reload to update.' 
                  : 'CalcSuite is ready to work offline.'}
              </p>
            </div>
          </div>

          {needRefresh && (
            <div className="flex gap-2.5 pt-1">
              <button
                onClick={close}
                className="flex-1 px-4 py-2.5 rounded-xl font-medium text-sm text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Later
              </button>
              <button
                onClick={() => updateServiceWorker(true)}
                className="flex-[1.5] bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 component-focus-ring"
              >
                <RefreshCw size={16} />
                Reload to Update
              </button>
            </div>
          )}
          
          {offlineReady && !needRefresh && (
             <button
                onClick={close}
                className="w-full bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 py-2.5 rounded-xl font-bold text-sm transition-all"
              >
                Got it
              </button>
          )}
        </div>
      </div>
    </div>
  );
}
