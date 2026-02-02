import { Baby, Clock, Heart, Info, HelpCircle, CheckCircle } from 'lucide-react';

const PregnancyCalculatorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Pregnancy Calculator: Estimate Your Due Date Accurately</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The Pregnancy Calculator helps you estimate your Expected Due Date (EDD) and track your pregnancy timeline with clarity and confidence. By using medically accepted calculation methods, it provides a reliable overview of your pregnancy progress.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Whether you are planning, newly pregnant, or already tracking milestones, this tool helps you understand what to expect at every stage.
                        </p>
                        <div className="mt-4 p-4 bg-pink-50 dark:bg-pink-900/10 rounded-xl border border-pink-100 dark:border-pink-900/30">
                            <h3 className="font-semibold text-pink-900 dark:text-pink-200 mb-2 flex items-center gap-2 m-0  ">
                                <Baby className="w-5 h-5" />
                                What Is a Due Date?
                            </h3>
                            <p className="text-sm text-pink-800 dark:text-pink-300">
                                A pregnancy due date is an estimated date when childbirth is most likely to occur. Most pregnancies last about 40 weeks (280 days). The date is best viewed as a guide rather than a fixed deadline.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Why Track Your Timeline?
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Heart className="w-4 h-4 text-pink-500" /> Prenatal appointment planning
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Heart className="w-4 h-4 text-pink-500" /> Medical screenings
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Heart className="w-4 h-4 text-pink-500" /> Nutrition adjustments
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Heart className="w-4 h-4 text-pink-500" /> Emotional preparedness
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Calculation Methods Explained</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    This calculator allows you to estimate your due date using multiple trusted medical methods.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        { title: "Last Menstrual Period (LMP)", desc: "Assumes ovulation occurs ~2 weeks after period start." },
                        { title: "Conception Date", desc: "Useful if ovulation or conception date is known." },
                        { title: "Ultrasound Dating", desc: "Based on precise fetal measurements (CRL/BPD)." },
                        { title: "IVF Transfer Date", desc: "Designed for assisted reproduction pregnancies." }
                    ].map((method, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm  m-0">{method.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{method.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trimester Section */}
            <section className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-indigo-500" />
                        Trimester Breakdown
                    </h3>
                    <ul className="space-y-4">
                        <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 list-none">
                            <strong className="block text-slate-900 dark:text-white text-sm mb-1">First Trimester (Weeks 1–12)</strong>
                            <span className="text-xs text-slate-600 dark:text-slate-400">Major organ development begins. Early symptoms common.</span>
                        </li>
                        <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 list-none">
                            <strong className="block text-slate-900 dark:text-white text-sm mb-1">Second Trimester (Weeks 13–26)</strong>
                            <span className="text-xs text-slate-600 dark:text-slate-400">Often most comfortable. Growth accelerates, movement felt.</span>
                        </li>
                        <li className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 list-none">
                            <strong className="block text-slate-900 dark:text-white text-sm mb-1">Third Trimester (Weeks 27–40)</strong>
                            <span className="text-xs text-slate-600 dark:text-slate-400">Rapid growth. Body prepares for labor and delivery.</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-blue-500" />
                        Accuracy & Disclaimer
                    </h3>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-900/30 mb-6">
                        <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
                            <strong>Accuracy:</strong> Pregnancy calculators provide estimates. Actual delivery depends on cycle regularity and individual factors.
                        </p>
                        <p className="text-xs text-blue-700 dark:text-blue-400 italic">
                            "Only a small percentage of babies are born exactly on their due date."
                        </p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border border-amber-100 dark:border-amber-900/30">
                        <strong className="block text-amber-900 dark:text-amber-200 text-xs uppercase mb-1">Important</strong>
                        <p className="text-xs text-amber-800 dark:text-amber-300">
                            This calculator is for educational purposes only. It does not replace professional medical advice. Always consult a healthcare provider.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { q: "Is the due date exact?", a: "No. Most births occur within 2 weeks of the date." },
                        { q: "Can my due date change?", a: "Yes. Doctors may update it based on ultrasound." },
                        { q: "Is this calculator free?", a: "Yes. Completely free to use." },
                        { q: "Does this replace a doctor?", a: "No. Always consult a professional." }
                    ].map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                            <h3 className="flex items-start gap-3 font-semibold text-slate-900 dark:text-white mb-2 text-sm test m-0">
                                <HelpCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                {faq.q}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 ml-7 text-sm m-0">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <section className="bg-pink-700 rounded-3xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4 m-0">Supporting You Through Every Step</h2>
                <p className="text-pink-100 max-w-2xl mx-auto mb-6">
                    Pregnancy is a personal journey. Having accurate information empowers you to make informed choices while staying connected to your healthcare provider.
                </p>
            </section>
        </div>
    );
};

export default PregnancyCalculatorContent;
