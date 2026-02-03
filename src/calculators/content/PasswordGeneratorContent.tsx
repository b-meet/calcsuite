import { ShieldCheck, Lock, RefreshCw, CheckCircle, Key, EyeOff } from 'lucide-react';

const PasswordGeneratorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Password Generator: Create Strong, Secure Passwords</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Create strong, secure passwords instantly with this free Password Generator. Generate random, uncrackable passwords using uppercase letters, lowercase letters, numbers, and symbols.
                        </p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Perfect for protecting online accounts, emails, banking apps, social media, and work tools.
                        </p>

                        <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                            <h3 className="font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2 m-0">
                                <ShieldCheck className="w-5 h-5" />
                                Why Use a Password Generator?
                            </h3>
                            <p className="text-sm text-emerald-800 dark:text-emerald-300">
                                Weak passwords are the #1 cause of account hacks. This tool helps you create high-strength passwords in seconds, avoiding reused or predictable patterns.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2 m-0">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            Key Features
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <RefreshCw className="w-4 h-4 text-emerald-500" /> Adjustable password length
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Key className="w-4 h-4 text-emerald-500" /> Supports uppercase, lowercase, numbers, symbols
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500" /> One-click copy for instant use
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <EyeOff className="w-4 h-4 text-emerald-500" /> No data storage. 100% secure
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Best Practices for Strong Passwords</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                        <ul className="space-y-4 p-0">
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                                <span className="text-slate-700 dark:text-slate-300 text-sm">Use at least 12–16 characters. Longer is stronger.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                                <span className="text-slate-700 dark:text-slate-300 text-sm">Include a mix of symbols, numbers, and case letters.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                                <span className="text-slate-700 dark:text-slate-300 text-sm">Never reuse passwords across different sites.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold mt-0.5">4</span>
                                <span className="text-slate-700 dark:text-slate-300 text-sm">Change important passwords regularly (e.g., every 3-6 months).</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center p-6">
                        <Lock className="w-16 h-16 text-emerald-500 mb-4 opacity-80" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Did you know?</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
                            A 12-character password with mixed types can take millions of years to crack, whereas an 8-character simple password can be cracked in seconds.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PasswordGeneratorContent;
