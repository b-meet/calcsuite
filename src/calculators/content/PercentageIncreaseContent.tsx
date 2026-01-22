import { TrendingUp, ArrowUpRight, HelpCircle } from 'lucide-react';

export default function PercentageIncreaseContent() {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    How to Calculate Percentage Increase/Decrease
                </h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p>
                        Calculating percentage change helps you understand how much a value has grown or shrunk relative to its original size. It is widely used in finance (stock growth), retail (discounts), and statistics.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ArrowUpRight className="w-6 h-6 text-blue-600" />
                    The Formula
                </h2>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 font-mono text-sm overflow-x-auto">
                    Percentage Change = ((New Value - Original Value) / Original Value) × 100
                </div>
                <div className="mt-4 prose prose-slate max-w-none text-slate-600">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>If the result is <strong>positive</strong>, it is an increase.</li>
                        <li>If the result is <strong>negative</strong>, it is a decrease.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                    Examples
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                        <h3 className="font-semibold text-green-800 mb-2">Price Increase</h3>
                        <p className="text-sm text-green-700">
                            Gas price went from $3.50 to $4.00.<br />
                            Change = $0.50.<br />
                            $0.50 / $3.50 = 0.1428...<br />
                            <strong>14.29% Increase</strong>
                        </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <h3 className="font-semibold text-red-800 mb-2">Price Decrease (Discount)</h3>
                        <p className="text-sm text-red-700">
                            Shirt price went from $50 to $40.<br />
                            Change = -$10.<br />
                            -$10 / $50 = -0.20<br />
                            <strong>20% Decrease</strong>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
