import { AlertTriangle, FileText } from 'lucide-react';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 px-8 py-10 text-white">
                    <h1 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <FileText className="w-8 h-8 text-blue-400" />
                        Terms of Service & Disclaimer
                    </h1>
                    <p className="text-slate-300">
                        Please read these terms carefully before using our calculators. By using CalcSuite, you agree to be bound by these terms.
                    </p>
                </div>

                <div className="p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed">

                    {/* Critical Disclaimer Block */}
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                        <h2 className="text-red-800 font-bold text-lg mb-2 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" />
                            CRITICAL DISCLAIMER - READ THIS FIRST
                        </h2>
                        <p className="text-red-700 font-medium mb-4">
                            THE INFORMATION AND CALCULATIONS PROVIDED BY CALCSUITE ARE FOR EDUCATIONAL AND INFORMATIONAL PURPOSES ONLY.
                        </p>
                        <p className="text-red-700/80 text-sm mb-0">
                            WE ARE NOT FINANCIAL ADVISORS, TAX EXPERTS, OR HEALTH PROFESSIONALS. YOU ACKNOWLEDGE AND AGREE THAT WE ARE NOT RESPONSIBLE FOR ANY DECISION, FINANCIAL LOSS, HEALTH COMPLICATION, OR CRITICAL OUTCOME RESULTING FROM YOUR USE OF THESE TOOLS. ALWAYS CONSULT A QUALIFIED PROFESSIONAL BEFORE MAKING IMPORTANT DECISIONS.
                        </p>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            <strong> Usage of any calculator on this site constitutes your immediate agreement to these terms without requiring further confirmation.</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Accuracy of Information</h2>
                        <p className="mb-4">
                            While we strive to keep our calculators up-to-date with the latest regulations, tax laws, and scientific formulas, we cannot guarantee consistent accuracy.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600">
                            <li><strong>Regulatory Changes:</strong> Tax rates, financial rules, and health guidelines change frequently. We take these changes seriously and work to update our tools as soon as possible, but there may be a lag between official announcements and our updates.</li>
                            <li><strong>Calculation Variance:</strong> Results may vary slightly from official government or bank calculations due to rounding differences or specific institutional formulas.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Limitation of Liability</h2>
                        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
                            <p className="uppercase text-xs font-bold text-slate-500 mb-2 tracking-wider">Legal Binding</p>
                            <p className="font-medium">
                                TO THE FULLEST EXTENT PERMITTED BY LAW, CALCSUITE AND ITS CREATORS SHALL NOT BE LIABLE FOR ANY DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING FINANCIAL LOSS, BUSINESS INTERRUPTION, OR DATA LOSS) ARISING OUT OF THE USE OR INABILITY TO USE OUR SERVICES.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. No Professional Advice</h2>
                        <p>
                            The content on this site is not intended to be a substitute for professional advice.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-900 mb-1">Financial & Tax</h3>
                                <p className="text-sm text-blue-800">Use these results as estimates only. Consult a Chartered Accountant or Financial Advisor for filings.</p>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="font-bold text-green-900 mb-1">Health & Medical</h3>
                                <p className="text-sm text-green-800">Calculators like BMI or BMR are screening tools, not diagnostic instruments. Consult a doctor for medical advice.</p>
                            </div>
                        </div>
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

export default TermsOfService;
