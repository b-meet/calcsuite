import { Dices, CheckCircle, Trophy, Gamepad2, FlaskConical, MousePointerClick } from 'lucide-react';

const RandomNumberGeneratorContent = () => {
    return (
        <div className="space-y-12">

            {/* Intro Section */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 m-0">Random Number Generator: Fast & Fair</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-1 space-y-4">
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Generate truly random numbers instantly with this free Random Number Generator. Choose any range, control how many numbers you need, and allow or disable duplicates with one click.
                        </p>
                        <p className="font-medium text-slate-700 dark:text-slate-300">
                            Perfect for games, lotteries, simulations, giveaways, statistics, and quick decision-making.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2 m-0">
                    <CheckCircle className="w-6 h-6 text-indigo-500" />
                    Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <MousePointerClick className="w-4 h-4 text-emerald-500" /> Set minimum and maximum values
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <Dices className="w-4 h-4 text-emerald-500" /> Generate one or multiple random numbers
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500" /> Option to allow or prevent duplicates
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                <CheckCircle className="w-4 h-4 text-emerald-500" /> Instant, unbiased results
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Common Uses */}
            <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                    <Trophy className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Contests & Raffles</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Picking winners fairly</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                    <Gamepad2 className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Games & Fun</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Dice rolls & simulations</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                    <FlaskConical className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Statistics</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Random sampling</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center hover:shadow-md transition-shadow">
                    <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-900 dark:text-white text-sm">Classroom</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Quizzes & activities</p>
                </div>
            </section>

            {/* CTA */}
            <div className="bg-indigo-50 dark:bg-indigo-900/10 p-8 rounded-2xl text-center border border-indigo-100 dark:border-indigo-900/30">
                <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-2 m-0">Fast, fair, and reliable.</h3>
                <p className="text-indigo-700 dark:text-indigo-300 m-0">
                    Use this Random Number Generator whenever you need randomness you can trust.
                </p>
            </div>

        </div>
    );
};

export default RandomNumberGeneratorContent;
