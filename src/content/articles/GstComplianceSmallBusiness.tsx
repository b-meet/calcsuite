import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GstComplianceSmallBusiness = () => {
    return (
        <>
            <h2 id="three-tier-shift">The 3-Tier Shift: Simplification or Struggle?</h2>
            <p>
                Small business owners in 2026 are witnessing a massive transition. There is an active transition toward a simplified **5%, 18%, and 40% structure**. This move aims to reduce classification disputes, but it requires immediate billing updates.
            </p>

            <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800 my-8">
                <h3 className="text-rose-900 dark:text-rose-200 font-bold flex items-center gap-2 m-0">
                    <AlertCircle className="w-5 h-5" /> Input Tax Credit (ITC) "Hard Rule"
                </h3>
                <p className="mt-3 mb-0">
                    In 2026, automated validation is mandatory. **If your supplier hasn't filed their GSTR-2B, you cannot claim credit**, even if you have the physical invoice and have paid the tax.
                </p>
            </div>

            <h2 id="composition-vs-regular">Composition vs. Regular Scheme: The ROI Battle</h2>
            <p>
                Choosing the wrong GST scheme can bleed your margins. While the Composition scheme offers lower rates, the loss of ITC often makes it more expensive for B2B businesses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">Composition Scheme</h4>
                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 p-0 list-none">
                        <li>• 1% for Traders/Manufacturers</li>
                        <li>• Less Compliance (Quarterly)</li>
                        <li>• **No Input Tax Credit claim**</li>
                        <li>• Best for: Small local B2C retailers</li>
                    </ul>
                </div>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-3">Regular Scheme</h4>
                    <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 p-0 list-none">
                        <li>• Standard Rates (5%, 12%, 18%)</li>
                        <li>• Full Input Tax Credit (ITC)</li>
                        <li>• Monthly intensive compliance</li>
                        <li>• Best for: B2B and high-cost service providers</li>
                    </ul>
                </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 my-10 not-prose">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2 m-0">
                    Math in Action: The "Hidden" Cost of Composition
                </h3>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm">
                    <p className="m-0">Business Turnover: ₹50 Lakh</p>
                    <p className="m-0">Purchases: ₹30 Lakh (+ 18% GST = ₹5.4L)</p>
                    <p className="m-0 mt-2">**Composition Cost:** ₹50,000 tax + ₹5.4L (Loss of ITC) = **₹5.9 Lakh**</p>
                    <p className="m-0">**Regular Cost:** ₹9 Lakh (Output) - ₹5.4L (ITC) = **₹3.6 Lakh**</p>
                    <p className="m-0 text-emerald-600 dark:text-emerald-400 font-bold mt-2">Winner: Regular Scheme saves ₹2.3 Lakh!</p>
                </div>
            </div>

            <div className="bg-blue-600/5 dark:bg-blue-900/10 border-2 border-blue-600/20 dark:border-blue-500/20 p-8 rounded-3xl my-10 text-center shadow-lg hover:shadow-xl transition-shadow not-prose">
                <h4 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 tracking-tight">Need to Calculate GST Margins?</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base max-w-lg mx-auto">Make sure your pricing includes the new 2026 effective GST rates. Use our exclusive GST Calculator to determine exact Input Tax Credit offsets and output liability.</p>
                <Link to="/calculator/india-gst/" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 !text-white font-bold rounded-xl hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-md">
                    Open GST Calculator
                </Link>
            </div>

            <h2 id="ecommerce-relaxation">E-commerce Relaxation for Local Sellers</h2>
            <p>
                There is silver lining for micro-entrepreneurs. Intra-state online sellers with turnover under **₹40 Lakh** no longer need full GST registration—they can operate using a simple Enrollment ID, opening doors for millions on platforms like ONDC.
            </p>
        </>
    );
};
