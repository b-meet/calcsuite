import { useState, useEffect } from 'react';
import { Tag, ShoppingBag } from 'lucide-react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DiscountCalculator() {
    const [price, setPrice] = useState(1000);
    const [discountDetails, setDiscountDetails] = useState(25); // Percent
    const [quantity, setQuantity] = useState(1);
    const [taxRate, setTaxRate] = useState(0);
    const [flatDiscount, setFlatDiscount] = useState(0);

    const [result, setResult] = useState<{
        totalMRP: number;
        totalDiscount: number;
        priceAfterDiscount: number;
        taxAmount: number;
        finalPayable: number;
        totalSaved: number;
    } | null>(null);

    const calculate = () => {
        const mrp = price * quantity;

        let discountAmt = (mrp * discountDetails) / 100;
        let priceAfterPercent = mrp - discountAmt;

        // Apply flat discount
        let finalPriceBeforeTax = priceAfterPercent - flatDiscount;
        if (finalPriceBeforeTax < 0) finalPriceBeforeTax = 0;

        // Add flat discount to total discount tracking
        const totalDiscountAmt = mrp - finalPriceBeforeTax;

        // Apply Tax
        const taxAmt = (finalPriceBeforeTax * taxRate) / 100;
        const payable = finalPriceBeforeTax + taxAmt;

        setResult({
            totalMRP: mrp,
            totalDiscount: totalDiscountAmt,
            priceAfterDiscount: finalPriceBeforeTax,
            taxAmount: taxAmt,
            finalPayable: payable,
            totalSaved: totalDiscountAmt
        });
    };

    useEffect(() => {
        calculate();
    }, [price, discountDetails, quantity, taxRate, flatDiscount]);

    const chartData = {
        labels: ['Net Price', 'Tax'],
        datasets: [
            {
                data: result ? [result.priceAfterDiscount, result.taxAmount] : [1, 1],
                backgroundColor: ['#3b82f6', '#ef4444'],
                borderColor: ['#2563eb', '#dc2626'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <Tag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Product Details
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Original Price (per item)</label>
                                <input
                                    type="number"
                                    value={price || ''}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                    placeholder="0"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Discount (%)</label>
                                    <input
                                        type="number"
                                        value={discountDetails || ''}
                                        onChange={(e) => setDiscountDetails(Number(e.target.value))}
                                        className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                        placeholder="0"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Quantity</label>
                                    <input
                                        type="number"
                                        value={quantity || ''}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                        placeholder="1"
                                    />
                                </div>
                            </div>

                            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                                <h3 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3">Optional Extras</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Tax / VAT (%)</label>
                                        <input
                                            type="number"
                                            value={taxRate || ''}
                                            onChange={(e) => setTaxRate(Number(e.target.value))}
                                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                            placeholder="0"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Extra Flat Discount</label>
                                        <input
                                            type="number"
                                            value={flatDiscount || ''}
                                            onChange={(e) => setFlatDiscount(Number(e.target.value))}
                                            className="block w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800">
                        <h3 className="text-lg font-medium text-slate-300 mb-6">Final Bill</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-slate-400 text-sm mb-1">You Pay</p>
                                <p className="text-4xl font-bold text-white">
                                    {result?.finalPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </p>
                            </div>
                            <div className="pt-6 border-t border-slate-800/50">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400">Total Savings</span>
                                    <span className="text-xl font-bold text-green-400">
                                        -{result?.totalSaved.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>
                                {result && result.taxAmount > 0 && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-500">Tax Included</span>
                                        <span className="text-slate-300">
                                            +{result.taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            Price Summary
                        </h3>
                        <div className="flex justify-between items-end border-b border-slate-50 dark:border-slate-800 pb-4 mb-4">
                            <div className="text-left">
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">Original Price</p>
                                <p className="text-lg font-medium text-slate-900 dark:text-slate-300 line-through decoration-red-400 decoration-2">
                                    {result?.totalMRP.toLocaleString()}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase">Discount</p>
                                <p className="text-lg font-medium text-green-600 dark:text-green-400">
                                    {discountDetails}% Off
                                </p>
                            </div>
                        </div>
                        <div className="h-48 flex items-center justify-center">
                            <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: false, cutout: '70%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
