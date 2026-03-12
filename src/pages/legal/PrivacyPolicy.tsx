import { Lock, Server, Eye, Cookie } from 'lucide-react';
import { EXTERNAL_LINKS } from '../../constants/links';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-8 px-2 sm:px-4 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 px-4 sm:px-8 py-8 sm:py-10 text-white">
                    <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <Lock className="w-8 h-8 text-green-400" />
                        Privacy Policy
                    </h1>
                    <p className="text-slate-300">
                        At CalcSuite, we prioritize your privacy. Most of our calculations happen right in your browser.
                    </p>
                </div>

                <div className="p-4 sm:p-8 md:p-12 space-y-8 text-slate-700 leading-relaxed">

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
                            We use <strong>Google Analytics 4 (GA4)</strong> and <strong>Google Tag Manager</strong> to understand how users interact with CalcSuite. These tools collect information such as:
                        </p>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                            <li>Anonymized IP addresses and general geographic location.</li>
                            <li>Page views, session duration, and click behavior across our calculators.</li>
                            <li>Device type, browser information, and operating system.</li>
                        </ul>
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4 text-sm text-blue-800">
                            <p className="m-0">
                                This data is used solely to improve our tools and user experience. It is processed by Google and is subject to their privacy policies. If available you can opt out of Google Analytics tracking by using the <a href={EXTERNAL_LINKS.GA_OPT_OUT} target="_blank" rel="noopener noreferrer" className="underline font-medium">Google Analytics Opt-out Browser Add-on</a>.
                            </p>
                        </div>
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
