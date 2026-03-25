import { useState, useEffect } from 'react';

let deferredPrompt: any = null;
const listeners = new Set<(prompt: any) => void>();

export function usePWAInstall() {
  const [canInstall, setCanInstall] = useState(!!deferredPrompt);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      deferredPrompt = e;
      setCanInstall(true);
      listeners.forEach(l => l(e));
    };

    window.addEventListener('beforeinstallprompt', handler);
    
    const listener = (prompt: any) => setCanInstall(!!prompt);
    listeners.add(listener);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      listeners.delete(listener);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    deferredPrompt = null;
    setCanInstall(false);
    listeners.forEach(l => l(null));
    
    return outcome;
  };

  return { canInstall, install };
}

