
import React from 'react';
import BMICalculator from './calculators/BMICalculator';

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
                return <div className="p-4 text-red-500">Unknown calculator type: {calculatorType}</div>;
        }
    };

    return (
        <div className={`calcsuite-widget-container ${theme === 'dark' ? 'dark' : ''} font-sans antialiased text-gray-900 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden`}>
            <div className="p-4">
                {getCalculator()}
            </div>
            {showBrand && (
                <div className="px-4 py-2 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Powered by <strong>CalcSuite</strong></span>
                    <a href="https://calcsuite.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Get this widget
                    </a>
                </div>
            )}
        </div>
    );
};

export default WidgetApp;
