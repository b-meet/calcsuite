import { Tag, ShoppingBag, DollarSign } from 'lucide-react';

export default function DiscountContent() {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    How to Calculate Discounts
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        Calculating the final price after a discount is essential for smart shopping and sales strategy. Whether it's a "20% Off" sale or a complex "Buy One Get One" deal, understand exactly what you pay.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <ShoppingBag className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Discount Formula
                </h2>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm overflow-x-auto text-slate-900 dark:text-slate-200">
                    Discount Amount = (Original Price × Discount Rate) / 100
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm overflow-x-auto mt-2 text-slate-900 dark:text-slate-200">
                    Final Price = Original Price - Discount Amount
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Double Discounts
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                    <p>
                        Stores often offer "extra 20% off" on already discounted items. Be careful: you don't just add the percentages (e.g., 50% + 20% = 70%). Instead, apply the first discount, then apply the second discount to the <em>new</em> lower price.
                    </p>
                    <p>
                        For example, a $100 item with 50% off becomes $50. An extra 20% off $50 takes off another $10, making the final price $40 (which is a total of 60% off, not 70%).
                    </p>
                </div>
            </section>
        </div>
    );
}
