import { PiggyBank, Target, Clock } from 'lucide-react';

const IndiaRDContent = () => {
    return (
        <div className="space-y-12">
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Recurring Deposits (RD): The Discipline Builder
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    A Recurring Deposit (RD) helps you save small amounts regularly to build a substantial corpus.
                    Unlike an FD where you invest a lump sum, an RD allows you to deposit a fixed amount every month, making it ideal for salaried professionals and students.
                </p>
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-green-900 mb-3">
                        <PiggyBank className="w-5 h-5" />
                        Ideal for Short-Term Goals
                    </h3>
                    <p className="text-green-800 mb-3">
                        RDs are perfect for planned expenses occurring in 1-3 years:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-green-800">
                        <li>Paying for an annual insurance premium.</li>
                        <li>Funding a vacation or buying a gadget.</li>
                        <li>Saving for a down payment on a bike or car.</li>
                        <li>Creating an emergency fund buffer.</li>
                    </ul>
                </div>
            </section>

            <section className="bg-white rounded-2xl p-6">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Role of RD in Building an Emergency Fund
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    While Fixed Deposits safeguard your lump sum emergency fund, <strong>Recurring Deposits are the tool to build it</strong>.
                    If you don't have ₹5 Lakhs lying around to put into an FD, you start an RD of ₹20,000/month.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-600" />
                            Automated Saving
                        </h3>
                        <p className="text-sm text-slate-600">
                            Set up a standing instruction for your RD to deduct a day after your salary credit. This "pay yourself first" approach ensures your emergency fund grows automatically before you can spend the money.
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-purple-600" />
                            Convert to FD on Maturity
                        </h3>
                        <p className="text-sm text-slate-600">
                            The Smart Cycle: Run an RD for 12 months. When it matures, take the entire maturity proceeds and move it into a Fixed Deposit (FD) to lock in the interest and liquidity. Then, restart the RD.
                        </p>
                    </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">RD vs SIP: Which is better?</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                    For an <strong>Emergency Fund</strong>, RD is superior to Mutual Fund SIPs because:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Capital Protection</strong>: RD returns are guaranteed. SIPs depend on market performance. You cannot risk your emergency fund shrinking during a market crash.</li>
                    <li><strong>Predictability</strong>: You know exactly how much you will have after X months.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    Key RD Rules in India
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-slate-700">
                    <li><strong>Minimum Tenure</strong>: Usually 6 months.</li>
                    <li><strong>Maximum Tenure</strong>: Typically 10 years (120 months).</li>
                    <li><strong>TDS</strong>: Similar to FDs, interest on RD is taxable and subject to TDS if it crosses ₹40,000/₹50,000 per year.</li>
                    <li><strong>Late Penalties</strong>: Banks may charge a small penalty (e.g., ₹10 per ₹1000) if the monthly installment is missed.</li>
                </ul>
            </section>
        </div>
    );
};

export default IndiaRDContent;
