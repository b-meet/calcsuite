import React from 'react';
import { SITE_URL } from '../config/site';

/** Shown in place of the calculator when the credit link cannot be kept on the page. */
const CreditRemoved: React.FC<{ calculatorType: string }> = ({ calculatorType }) => (
    <div className="p-4 text-sm text-gray-600 dark:text-gray-300 text-center">
        <p className="font-semibold text-gray-800 dark:text-gray-100">This calculator is disabled</p>
        <p className="mt-1 text-[13px]">
            CalcSuite widgets are free as long as the credit link stays visible.{' '}
            <a
                href={`${SITE_URL}/widget-generator/?calculator=${encodeURIComponent(calculatorType)}`}
                target="_blank"
                rel="noopener"
                className="text-blue-600 dark:text-blue-400 underline"
            >
                Get a working embed
            </a>
            .
        </p>
    </div>
);

export default CreditRemoved;
