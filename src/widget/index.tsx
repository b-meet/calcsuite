
import React from 'react';
import { createRoot } from 'react-dom/client';
import WidgetApp from './WidgetApp';
import styleString from './styles.css?inline';

const WIDGET_ID = 'calcsuite-widget-root';


function init() {
    const containers = document.querySelectorAll('.calcsuite-widget');

    containers.forEach((container) => {
        if (container.shadowRoot) return; // Already initialized

        // Create Shadow DOM and Root Container
        const shadow = container.attachShadow({ mode: 'open' });
        const rootElement = document.createElement('div');
        rootElement.id = WIDGET_ID;
        shadow.appendChild(rootElement);

        // Inject Styles
        const styleElement = document.createElement('style');
        styleElement.textContent = styleString;
        shadow.appendChild(styleElement);

        // Read Config
        const htmlContainer = container as HTMLElement;
        const type = htmlContainer.dataset.type || 'bmi';
        const theme = (htmlContainer.dataset.theme as 'light' | 'dark') || 'light';
        const branding = htmlContainer.dataset.branding !== 'false';

        // Use unique ID for root if needed, but not strictly necessary in Shadow DOM
        // rootElement.id = WIDGET_ID + '-' + Math.random().toString(36).substr(2, 9);

        const root = createRoot(rootElement);
        root.render(
            <React.StrictMode>
                <WidgetApp calculatorType={type} theme={theme} showBrand={branding} />
            </React.StrictMode>
        );
    });
}

// Ensure the DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
