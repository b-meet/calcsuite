
import React from 'react';
import BMICalculator from './calculators/BMICalculator';
import { WidgetProvider } from '../context/WidgetContext';
import { SITE_URL } from '../config/site';

interface WidgetAppProps {
    calculatorType: string;
    theme?: 'light' | 'dark';
    showBrand?: boolean;
}

const WidgetApp: React.FC<WidgetAppProps> = ({ calculatorType, theme = 'light', showBrand = true }) => {
    const getCalculator = () => {
        switch (calculatorType.toLowerCase()) {
            case 'bmi':
                return <BMICalculator />;
            default:
                // Never dump a raw error onto someone else's page: the embed
                // generator offers every calculator, but only a subset ships in
                // this bundle. Degrade to a working link instead.
                return (
                    <div className="p-4 text-sm text-gray-600 dark:text-gray-300">
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
        <div className={`calcsuite-widget-container ${theme === 'dark' ? 'dark' : ''} font-sans antialiased text-gray-900 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden`}>
            <div className="p-4">
                <WidgetProvider isWidget={true}>
                    {getCalculator()}
                </WidgetProvider>
            </div>
            {showBrand && (
                <div className="px-4 py-2 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
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
