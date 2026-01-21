import mixpanel from 'mixpanel-browser';

// Replace with your actual Mixpanel Token
const MEASUREMENT_ID = 'YOUR_MIXPANEL_TOKEN';

export const initAnalytics = () => {
    try {
        mixpanel.init(MEASUREMENT_ID, {
            debug: import.meta.env.DEV,
            track_pageview: true,
            persistence: 'localStorage',
        });
    } catch (error) {
        console.error('Mixpanel init failed', error);
    }
};

export const trackEvent = (eventName: string, props: Record<string, any> = {}) => {
    try {
        if (import.meta.env.DEV) {
            console.log(`[Analytics] ${eventName}`, props);
        }
        mixpanel.track(eventName, props);
    } catch (error) {
        console.error('Mixpanel track failed', error);
    }
};

export const trackPageView = (path: string) => {
    trackEvent('Page View', { path });
};

export const trackCalculatorUse = (calculatorId: string, calculatorName: string) => {
    trackEvent('Calculator View', { calculatorId, calculatorName });
};
