import { Calculator, ShieldCheck, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About CalcSuite</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We believe that powerful tools should be free, accessible, and easy to use.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                            <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Our mission is to simplify complex calculations for everyone. Whether you are a student, professional, or just planning your personal finances, CalcSuite provides the precision you need without the clutter.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                            <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Privacy First</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We stand apart by prioritizing your privacy. Unlike other tools that harvest data, our calculators run client-side in your browser. Your sensitive financial and health data never leaves your device.
                        </p>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700">
                    <div className="p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                            <Heart className="w-6 h-6 text-red-500" />
                            Built for You
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                            CalcSuite is developed and maintained by a passionate team of developers who were tired of cluttered, slow, and confusing calculator sites. We wanted to build something better—a suite of tools that we would want to use ourselves.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We are constantly updating our algorithms to ensure they align with the latest standards, such as the 2025 Tax Regime updates for India or the latest WHO health guidelines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
