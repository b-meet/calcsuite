import { ShoppingCart, Tag, Calculator, AlertCircle, Briefcase, TrendingDown, HelpCircle, Package, Receipt } from 'lucide-react';

const DiscountCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro - Wide layout as requested */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">What Is a Discount and How Does It Work?</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1">
                        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                            A discount is a reduction applied to the original price of a product or service. Discounts are usually expressed as a percentage, but they can also be applied as flat amounts.
                        </p>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Common discount types include:</h3>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li className="flex items-center gap-2"><Tag className="w-4 h-4 text-indigo-500" /> Percentage-based discounts</li>
                            <li className="flex items-center gap-2"><Tag className="w-4 h-4 text-indigo-500" /> Flat amount reductions</li>
                            <li className="flex items-center gap-2"><Tag className="w-4 h-4 text-indigo-500" /> Seasonal or promotional offers</li>
                            <li className="flex items-center gap-2"><Tag className="w-4 h-4 text-indigo-500" /> Bulk purchase discounts</li>
                        </ul>
                    </div>
                    <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <p className="text-indigo-900 dark:text-indigo-200 font-medium">
                            This calculator supports real-world discount scenarios where multiple adjustments affect the final price, including taxes and stacked discounts.
                        </p>
                    </div>
                </div>
            </section>

            {/* What it calculate */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">What This Discount Calculator Can Calculate</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-green-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Final Price After Discount</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">See exactly how much you need to pay after applying discounts and taxes.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-blue-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Total Savings</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Instantly know how much money you saved compared to the original price.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-purple-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Quantity-Based Pricing</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Calculate totals correctly when buying more than one item.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-orange-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Tax and VAT Adjustments</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Include optional tax percentages to get a realistic final bill.</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border-t-4 border-pink-500 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Extra Flat Discounts</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Apply coupon-style flat reductions on top of percentage discounts.</p>
                    </div>
                </div>
            </section>

            {/* How to Use */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How to Use the Discount Calculator</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 mx-auto mb-3">1</div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">Enter Original Price</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 mx-auto mb-3">2</div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">Add Discount %</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 mx-auto mb-3">3</div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">Select Quantity</p>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl text-center">
                        <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 mx-auto mb-3">4</div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">View Final Price</p>
                    </div>
                </div>
                <p className="text-center text-slate-500 text-sm mt-6">Optionally include tax or a flat discount. All calculations update dynamically.</p>
            </section>

            {/* Why Manual Wrong */}
            <section>
                <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-100 dark:border-red-900/20">
                    <h2 className="text-xl font-bold text-red-900 dark:text-red-200 mb-4 m-0 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Why Manual Discount Calculations Often Go Wrong
                    </h2>
                    <p className="text-red-800 dark:text-red-300 mb-4">Discount math becomes confusing when more than one factor is involved.</p>
                    <ul className="space-y-2 text-sm text-red-700 dark:text-red-400 list-disc ml-5">
                        <li>Applying tax before discount instead of after</li>
                        <li>Miscalculating discounts on multiple quantities</li>
                        <li>Forgetting flat coupons</li>
                        <li>Incorrect percentage math</li>
                    </ul>
                </div>
            </section>

            {/* Real World Uses */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Real-World Uses of a Discount Calculator</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { icon: ShoppingCart, title: "Online Shopping", text: "Compare prices and verify sales." },
                        { icon: Package, title: "Retail & Wholesale", text: "Calculate bulk order savings." },
                        { icon: Receipt, title: "Budget Planning", text: "Understand total spending impact." },
                        { icon: Briefcase, title: "Business & Sales", text: "Estimate offer pricing quickly." },
                        { icon: Tag, title: "Seasonal Sales", text: "Evaluate stacked discounts." }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-600 dark:text-slate-300">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white text-sm m-0">{item.title}</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0 mt-1">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Understanding Percentages */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 m-0">Understanding Discount Percentages Clearly</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">A percentage discount reduces the original price by a specific portion.</p>
                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border-l-4 border-indigo-500">
                    <p className="text-sm font-mono text-slate-600 dark:text-slate-400 mb-2">Example Scenario:</p>
                    <p className="text-lg text-slate-900 dark:text-white">
                        If an item costs <span className="font-bold">1,000</span> and has a <span className="font-bold">25%</span> discount:
                    </p>
                    <ul className="mt-4 space-y-2">
                        <li className="flex justify-between text-slate-600 dark:text-slate-400">
                            <span>Discount Amount:</span>
                            <span className="font-medium text-red-500">-250</span>
                        </li>
                        <li className="flex justify-between text-lg font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-700 pt-2">
                            <span>Final Price:</span>
                            <span className="text-green-600 dark:text-green-400">750</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Comparisons */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-indigo-500" />
                        Discount vs Final Price
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Many shoppers focus only on the discount percentage, but the final price is what actually matters. This calculator emphasizes the final payable amount so users can make informed purchase decisions. Seeing savings alongside the final price improves clarity.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-indigo-500" />
                        Discount vs % Calculator
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        A percentage calculator only finds a percentage of a number. A discount calculator applies that percentage in a real pricing context, including quantities, taxes, and flat reductions. For shopping, this is the practical choice.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 m-0">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {[
                        { q: "Can this calculator handle multiple items?", a: "Yes. Quantity input allows accurate total price calculation." },
                        { q: "Does it support tax and VAT?", a: "Yes. Optional tax fields help calculate realistic final bills." },
                        { q: "Can I apply a flat discount along with a percentage discount?", a: "Yes. Both can be combined in the same calculation." },
                        { q: "Is this calculator free to use?", a: "Yes. There are no limits or restrictions." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 m-0">
                                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-8 mb-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Accurate Matters */}
            <section className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Why Accurate Discount Calculation Matters</h2>
                <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
                    Small pricing mistakes add up, especially when buying in bulk or during sales. Knowing the real final price helps avoid overspending, misleading discounts, and checkout surprises.
                </p>
                <div className="inline-block bg-white/20 px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Designed for Smart Buyers
                </div>
            </section>

        </div>
    );
};

export default DiscountCalculatorContent;
