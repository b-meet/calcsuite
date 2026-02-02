import { Calendar, Heart, Search, Clock, Info, HelpCircle, CheckCircle } from 'lucide-react';

const OvulationCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Ovulation Calculator: Track Your Fertile Window Accurately</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The Ovulation Calculator helps you identify your most fertile days and estimate your ovulation date based on your menstrual cycle. It is designed for cycle tracking, pregnancy planning, and better understanding of reproductive health.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            This tool uses medically accepted fertility timing principles to give clear, easy-to-understand results.
                        </p>
                        <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-900/30">
                            <h3 className="font-semibold text-purple-900 dark:text-purple-200 mb-2 flex items-center gap-2 m-0">
                                <Search className="w-5 h-5" />
                                What Is Ovulation?
                            </h3>
                            <p className="text-sm text-purple-800 dark:text-purple-300">
                                Ovulation is the process where an ovary releases an egg. The egg survives for about 12-24 hours, while sperm can survive for up to 5 days. This creates a fertile window where pregnancy is most likely.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <Heart className="w-5 h-5 text-indigo-500" />
                            Who Is This For?
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> People trying to conceive
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Tracking menstrual cycles
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Understanding fertility patterns
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-indigo-500" /> Natural family planning
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">How This Calculator Works</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    This calculator estimates ovulation by using the first day of your last period and your average cycle length.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2 m-0">
                            <Clock className="w-4 h-4 text-slate-500" /> Timing Logic
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>Ovulation usually occurs ~14 days before the next period.</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-1.5 flex-shrink-0"></span>
                                <span>The fertile window begins ~5 days before ovulation.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-100 dark:border-slate-700">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2 text-sm m-0">
                            <Info className="w-4 h-4 text-indigo-500" /> Important Distinction
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                            <strong>Ovulation Date:</strong> Single estimated day of egg release.
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            <strong>Fertile Window:</strong> The 5-6 day span where conception is possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signs & Accuracy */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Search className="w-5 h-5 text-indigo-500" />
                        Common Signs
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Physical changes often accompany ovulation:
                    </p>
                    <ul className="space-y-3">
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Clear, stretchy cervical mucus
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Mild pelvic discomfort (Mittelschmerz)
                        </li>
                        <li className="bg-indigo-50 dark:bg-indigo-900/10 p-2 rounded text-sm text-indigo-900 dark:text-indigo-200">
                            Increased libido
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-indigo-500" />
                        Accuracy & Limitations
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                        Accuracy depends on cycle regularity and lifestyle factors.
                    </p>
                    <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/30">
                        <strong className="block text-amber-900 dark:text-amber-200 text-xs uppercase mb-1">Disclaimer</strong>
                        <p className="text-xs text-amber-800 dark:text-amber-300">
                            This calculator provides estimates. For precise medical decisions or contraception, consult a healthcare provider.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Can I ovulate at different times each cycle?", a: "Yes. Stress and hormones can shift timing." },
                        { q: "Does ovulation always happen on day 14?", a: "No. It depends on your unique cycle length." },
                        { q: "Is this calculator free?", a: "Yes. Completely free to use." },
                        { q: "Does this replace a doctor?", a: "No. Always consult a professional." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm m-0">
                                <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section className="bg-purple-700 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Supporting Your Reproductive Health</h2>
                <p className="text-purple-100 max-w-2xl mx-auto mb-6">
                    Every body and cycle is unique. Understanding ovulation helps you stay informed, prepared, and confident in your reproductive health decisions.
                </p>
            </section>
        </div>
    );
};

export default OvulationCalculatorContent;
