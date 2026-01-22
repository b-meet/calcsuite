import { ShieldCheck, TrendingUp, AlertTriangle, Wallet } from 'lucide-react';

const IndiaFDContent = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Changes in FD Rates (India 2025)
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Fixed Deposits (FDs) remain one of the most trusted investment avenues in India.
                    In FY 2025-26, banks have adjusted their interest rates to stay competitive.
                    Senior citizens typically continue to enjoy an additional <strong>0.50% to 0.75%</strong> interest rate over standard rates.
                </p>
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-blue-900 mb-3">
                        <TrendingUp className="w-5 h-5" />
                        Why choose FD?
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-blue-800">
                        <li>Guaranteed returns unaffected by market fluctuations.</li>
                        <li>Flexible tenure ranging from 7 days to 10 years.</li>
                        <li>Higher interest rates for senior citizens.</li>
                        <li><strong>Loan against FD</strong> facility available for emergencies.</li>
                        <li>Tax-saving FDs (5-year lock-in) offer deduction u/s 80C.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white rounded-2xl p-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Building an Emergency Fund with FDs
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    An emergency fund is your financial safety net, designed to cover unexpected expenses like medical bills, job loss, or urgent home repairs without disrupting your long-term investments.
                    Financial planners recommend keeping <strong>6 to 12 months of living expenses</strong> in an emergency fund.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-600" />
                            Capital Protection
                        </h3>
                        <p className="text-sm text-slate-600">
                            Unlike stocks or mutual funds, your principal in an FD is safe. In an emergency, you need certainty that your money is exactly where you expect it to be.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Wallet className="w-5 h-5 text-blue-600" />
                            High Liquidity
                        </h3>
                        <p className="text-sm text-slate-600">
                            While FDs have a lock-in, they can be broken instantly via net banking (usually with a small 1% penalty). This is far quicker than redeeming mutual funds which take T+1 or T+3 days.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">The "FD Laddering" Strategy</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Don't lock all your emergency money in one single FD. Use the <strong>Laddering Strategy</strong> to balance high returns with liquidity:
                </p>
                <ol className="list-decimal pl-5 space-y-4 text-slate-700">
                    <li>
                        <strong>Divide your fund</strong>: If you have ₹3 Lakhs, split it into 3 FDs of ₹1 Lakh each.
                    </li>
                    <li>
                        <strong>Stagger tenures</strong>: Open FD 1 for 1 year, FD 2 for 2 years, and FD 3 for 3 years.
                    </li>
                    <li>
                        <strong>Rotate</strong>: When FD 1 matures after a year, renew it for 3 years. Eventually, you will have one FD maturing every year, giving you liquidity without breaking deposits prematurely.
                    </li>
                </ol>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    TDS on Fixed Deposits
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Interest earned on FD is fully taxable as per your income tax slab. Banks deduct <strong>TDS @ 10%</strong> if the interest exceeds:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
                    <li>₹40,000 for regular individuals.</li>
                    <li>₹50,000 for senior citizens.</li>
                </ul>
                <div className="flex items-start gap-4 bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                        <strong>Tip:</strong> If your total income is below the taxable limit, you can submit <strong>Form 15G (or 15H for Seniors)</strong> to the bank to prevent TDS deduction.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default IndiaFDContent;
