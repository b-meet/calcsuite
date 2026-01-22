import { Lock, Server, Eye, Cookie } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 px-8 py-10 text-white">
                    <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <Lock className="w-8 h-8 text-green-400" />
                        Privacy Policy
                    </h1>
                    <p className="text-slate-300">
                        At CalcSuite, we prioritize your privacy. Most of our calculations happen right in your browser.
                    </p>
                </div>

                <div className="p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed">

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Server className="w-6 h-6 text-blue-500" /> 1. Data Processing
                        </h2>
                        <p>
                            We fundamentally believe in privacy by design.
                        </p>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100 mt-4">
                            <h3 className="font-bold text-green-900 mb-2">Zero-Server Storage for Calculations</h3>
                            <p className="text-green-800">
                                When you enter your salary, age, or financial details into our calculators, that data remains on your device.
                                It is processed locally using JavaScript and is <strong>not sent to our servers</strong> for storage.
                                Once you close the tab, that data is wiped.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Eye className="w-6 h-6 text-blue-500" /> 2. Analytics & Tracking
                        </h2>
                        <p>
                            We use anonymous analytics tracking to understand how our visitors interact with the website. This helps us identify which calculators are popular and where we need to improve the user experience.
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                            <li>We track page views and interactions.</li>
                            <li>We do not link this data to your personal identity.</li>
                            <li>We do not sell your data to third parties.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Cookie className="w-6 h-6 text-blue-500" /> 3. Local Storage / Cookies
                        </h2>
                        <p>
                            Some complex calculators may use your browser's "Local Storage" to temporarily save your inputs so you don't lose your work if you accidentally refresh the page. You can clear this at any time by clearing your browser cache.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time. We encourage you to review this page periodically for any changes.
                        </p>
                    </section>

                    <section className="border-t border-slate-200 pt-8">
                        <p className="text-sm text-slate-500 text-center">
                            Last Updated: {new Date().toLocaleDateString()}
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
