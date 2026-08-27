import React from 'react';
import BMICalculator from './calculators/BMICalculator';
import { WidgetProvider } from '../context/WidgetContext';
import { SITE_URL } from '../config/site';
import type { WidgetAppearance } from './appearance';
import { DEFAULT_APPEARANCE } from './appearance';

interface WidgetAppProps {
    calculatorType: string;
    appearance?: WidgetAppearance;
    showBrand?: boolean;
}

const WidgetApp: React.FC<WidgetAppProps> = ({
    calculatorType,
    appearance = DEFAULT_APPEARANCE,
    showBrand = true,
}) => {
    const { theme, fontSize, padding, radius, border, shadow } = appearance;
    const isDark = theme === 'dark';

    // Every id handled here must also appear in WIDGET_SUPPORTED_CALCULATORS,
    // which is what the generator reads to decide what it can offer as an embed.
    const getCalculator = () => {
        switch (calculatorType.toLowerCase()) {
            case 'bmi':
                return <BMICalculator />;
            default:
                // Never dump a raw error onto someone else's page: the embed
                // generator offers every calculator, but only a subset ships in
                // this bundle. Degrade to a working link instead.
                return (
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                        This calculator isn't available as an embed yet.{' '}
                        <a
                            href={`${SITE_URL}/calculator/${encodeURIComponent(calculatorType)}/`}
                            target="_blank"
                            rel="noopener"
                            className="text-blue-600 dark:text-blue-400 underline"
                        >
                            Open it on CalcSuite
                        </a>
                        .
                    </div>
                );
        }
    };

    return (
        <div
            className={[
                'calcsuite-widget-container font-sans antialiased overflow-hidden',
                isDark ? 'dark bg-slate-900 text-gray-100' : 'bg-white text-gray-900',
                border ? (isDark ? 'border border-gray-700' : 'border border-gray-200') : '',
                shadow ? 'shadow-lg' : '',
            ].filter(Boolean).join(' ')}
            style={{ borderRadius: `${radius}px`, fontSize: `${fontSize}px` }}
        >
            <div style={{ padding: `${padding}px` }}>
                <WidgetProvider isWidget={true}>
                    {getCalculator()}
                </WidgetProvider>
            </div>
            {showBrand && (
                <div
                    className={[
                        'flex justify-between items-center border-t',
                        isDark
                            ? 'bg-slate-800 border-gray-700 text-gray-400'
                            : 'bg-gray-50 border-gray-200 text-gray-500',
                    ].join(' ')}
                    style={{
                        paddingLeft: `${padding}px`,
                        paddingRight: `${padding}px`,
                        paddingTop: `${Math.max(6, padding * 0.4)}px`,
                        paddingBottom: `${Math.max(6, padding * 0.4)}px`,
                        fontSize: `${Math.max(10, fontSize - 4)}px`,
                    }}
                >
                    <span>
                        Powered by{' '}
                        <a
                            href={SITE_URL}
                            target="_blank"
                            rel="noopener"
                            title="CalcSuite - Free Online Calculators"
                            className="font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            CalcSuite
                        </a>
                    </span>
                    <a
                        href={`${SITE_URL}/widget-generator/`}
                        target="_blank"
                        rel="noopener"
                        title="Free calculator widgets for your website"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        Get this widget
                    </a>
                </div>
            )}
        </div>
    );
};

export default WidgetApp;
