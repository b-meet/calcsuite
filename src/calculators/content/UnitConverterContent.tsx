import { Ruler, Scale, Thermometer, CheckCircle, Globe, Zap, Users, Search, ArrowRightLeft } from 'lucide-react';

const UnitConverterContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Unit Converter. Fast, Accurate, Universal</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <p>
                        Looking for a unit converter that is instant, accurate, and easy to use? This online unit conversion calculator helps you convert length, weight, temperature, and more in seconds. No formulas. No confusion. Just clean, precise results.
                    </p>
                    <p>
                        Whether you are a student, engineer, traveler, fitness enthusiast, or professional, this universal unit converter is built to save time and eliminate mistakes.
                    </p>
                </div>
            </section>

            {/* What Is Unit Conversion */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 m-0">What Is Unit Conversion and Why It Matters</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Unit conversion is the process of converting a measurement from one unit to another. For example, converting meters to kilometers, kilograms to pounds, or Celsius to Fahrenheit.
                </p>

                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Small conversion errors can cause:</h4>
                <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600 dark:text-slate-400">
                    <li>Academic mistakes</li>
                    <li>Engineering miscalculations</li>
                    <li>Incorrect fitness tracking</li>
                    <li>Travel and navigation confusion</li>
                </ul>
                <p className="font-medium text-slate-800 dark:text-slate-300">
                    This tool removes guesswork and gives 100% reliable conversions instantly.
                </p>
            </section>

            {/* All-in-One Unit Converter */}
            <section className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <Ruler className="w-8 h-8 text-blue-500 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 m-0">Length Conversion</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Convert between:</p>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                        <li>Meters</li>
                        <li>Kilometers</li>
                        <li>Centimeters</li>
                        <li>Feet</li>
                        <li>Inches</li>
                        <li>Miles</li>
                    </ul>
                    <p className="mt-4 text-xs text-slate-400">Perfect for academics, construction, travel, and everyday use.</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <Scale className="w-8 h-8 text-emerald-500 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 m-0">Weight Conversion</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Convert between:</p>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                        <li>Kilograms</li>
                        <li>Grams</li>
                        <li>Pounds</li>
                        <li>Ounces</li>
                    </ul>
                    <p className="mt-4 text-xs text-slate-400">Ideal for fitness tracking, nutrition, shipping, and health calculations.</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
                    <Thermometer className="w-8 h-8 text-rose-500 mb-4" />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 m-0">Temperature Conversion</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Convert instantly between:</p>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                        <li>Celsius</li>
                        <li>Fahrenheit</li>
                        <li>Kelvin</li>
                    </ul>
                    <p className="mt-4 text-xs text-slate-400">Essential for science, weather, cooking, and international travel.</p>
                </div>
            </section>

            {/* Why Ranks Above Others */}
            <section className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-900/30">
                <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-6 flex items-center gap-2 m-0">
                    <Zap className="w-6 h-6" />
                    Why This Unit Converter Ranks Above Others
                </h2>
                <p className="text-indigo-800 dark:text-indigo-300 mb-6">
                    This is not just another converter. It is designed for speed, accuracy, and usability.
                </p>

                <h3 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Key Benefits</h3>
                <ul className="grid md:grid-cols-2 gap-3 mb-6">
                    <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                        <CheckCircle className="w-4 h-4" /> Real-time conversion as you type
                    </li>
                    <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                        <CheckCircle className="w-4 h-4" /> Metric to Imperial and Imperial to Metric
                    </li>
                    <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                        <CheckCircle className="w-4 h-4" /> Clean interface with zero distractions
                    </li>
                    <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                        <CheckCircle className="w-4 h-4" /> No sign-up, no ads interruption
                    </li>
                    <li className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 text-sm">
                        <CheckCircle className="w-4 h-4" /> Works perfectly on mobile and desktop
                    </li>
                </ul>
                <p className="text-indigo-800 dark:text-indigo-300 text-sm italic">
                    Unlike outdated tools, this calculator is optimized for modern search behavior and real user needs.
                </p>
            </section>

            {/* Who Should Use */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <Users className="w-6 h-6 text-purple-500" />
                    Who Should Use This Unit Converter
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">This tool is perfect for:</p>
                <ul className="space-y-2 mb-6 text-slate-700 dark:text-slate-300 pl-4 border-l-2 border-purple-200 dark:border-purple-800">
                    <li>Students and teachers</li>
                    <li>Engineers and architects</li>
                    <li>Gym members and trainers</li>
                    <li>Travelers and pilots</li>
                    <li>Scientists and researchers</li>
                    <li>Everyday users who need fast answers</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400">
                    If you ever search <span className="font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-1 rounded">“convert meters to kilometers”</span> or <span className="font-mono text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-1 rounded">“unit conversion calculator”</span>, this is the exact tool you need.
                </p>
            </section>

            {/* Popular Examples */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <ArrowRightLeft className="w-5 h-5 text-orange-500" />
                    Popular Unit Conversion Examples
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-700 dark:text-slate-300">
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">1 meter to kilometers</div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">Kilograms to pounds</div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">Feet to meters</div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">Inches to centimeters</div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">Celsius to Fahrenheit</div>
                    <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">Miles to kilometers</div>
                </div>
                <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
                    All conversions are mathematically accurate and standardized.
                </p>
            </section>

            {/* Why Better Than Manual Math */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 m-0">Why Online Unit Conversion Is Better Than Manual Math</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Manual conversion is slow and error-prone. Online unit conversion offers:</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl text-center">
                        <span className="block font-bold text-emerald-700 dark:text-emerald-300">Instant results</span>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl text-center">
                        <span className="block font-bold text-emerald-700 dark:text-emerald-300">Zero mistakes</span>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl text-center">
                        <span className="block font-bold text-emerald-700 dark:text-emerald-300">Time savings</span>
                    </div>
                    <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-xl text-center">
                        <span className="block font-bold text-emerald-700 dark:text-emerald-300">Consistency</span>
                    </div>
                </div>
                <p className="mt-6 text-slate-600 dark:text-slate-400 font-medium text-center">
                    This unit converter online ensures you always get the correct value, every time.
                </p>
            </section>

            {/* SEO & CTA */}
            <section className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-600 dark:text-slate-400">
                    <Globe className="w-4 h-4" /> Built for Search. Built for Users.
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 max-w-3xl mx-auto">
                    <p className="text-slate-600 dark:text-slate-400 mb-4 m-0">This calculator is optimized for:</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono">"unit converter"</span>
                        <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono">"unit conversion calculator"</span>
                        <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono">"metric to imperial converter"</span>
                        <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono">"length weight temperature converter"</span>
                        <span className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-mono">"online unit conversion tool"</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <Search className="w-4 h-4" /> Search engines love it because users love it. Fast load time. Clear intent. High usability.
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white m-0">Convert Anything. Anytime. Anywhere.</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        From classrooms to construction sites, kitchens to laboratories, this universal unit converter bridges the gap between measurement systems effortlessly.
                    </p>
                    <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                        Stop searching multiple sites. Stop second-guessing formulas.<br />
                        Use one powerful tool that does it all.
                    </p>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg animate-pulse">
                        Try the Unit Converter now and get accurate conversions instantly.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default UnitConverterContent;
