import { useEffect } from 'react';

declare global {
    interface Window {
        kofiWidgetOverlay: {
            draw: (username: string, options: Record<string, string>) => void;
        };
    }
}

export function KofiWidget() {
    useEffect(() => {
        // Check if script is already present
        const scriptId = 'kofi-widget-script';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
        script.async = true;

        script.onload = () => {
            if (window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('bmeet', {
                    'type': 'floating-chat',
                    'floating-chat.donateButton.text': 'Support me',
                    'floating-chat.donateButton.background-color': '#00b9fe',
                    'floating-chat.donateButton.text-color': '#fff'
                });
            }
        };

        document.body.appendChild(script);

        // Cleanup not fully possible as the widget injects DOM elements outside our control,
        // but strict mode might trigger double load, so the check at the top is important.
    }, []);

    return null;
}
