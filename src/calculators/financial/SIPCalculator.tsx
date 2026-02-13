
import { useState, useMemo } from 'react';
import { TrendingUp, Target, Briefcase } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

type CalculationMode = 'INVESTMENT' | 'GOAL';

export default function SIPCalculator() {
    const [mode, setMode] = useState<CalculationMode>('INVESTMENT');

    // Investment Mode Inputs
    const [monthlyInvestment, setMonthlyInvestment] = useState<number | ''>(5000);

    // Goal Mode Inputs
    const [targetAmount, setTargetAmount] = useState<number | ''>(10000000); // 1 Crore

    // Common Inputs
    const [rate, setRate] = useState<number | ''>(12);
    const [years, setYears] = useState<number | ''>(10);
    const [stepUp, setStepUp] = useState<number>(0); // Annual Step Up %

    // Advanced Settings
    const [showInflation, setShowInflation] = useState(false);
    const [inflationRate] = useState<number>(6);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('sip');

    // Real-time Calculation Effect
    const result = useMemo(() => {
        const r = Number(rate);
        const t = Number(years);
        const s = Number(stepUp);
        const inf = Number(inflationRate);
        const monthlyRate = r / 1200;
        const totalMonths = t * 12;

        if (!r || !t) return null;

        let calculatedInvested = 0;
        let calculatedMaturity = 0;
        let requiredSIP = 0;

        if (mode === 'INVESTMENT') {
            const p = Number(monthlyInvestment);
            if (!p) return null;

            let currentSIP = p;
            let corpus = 0;
            let totalInv = 0;

            for (let i = 1; i <= totalMonths; i++) {
                corpus = (corpus + currentSIP) * (1 + monthlyRate);
                totalInv += currentSIP;

                // Annual Step Up
                if (i % 12 === 0 && s > 0) {
                    currentSIP = currentSIP * (1 + s / 100);
                }
            }
            calculatedMaturity = corpus;
            calculatedInvested = totalInv;

        } else {
            // GOAL MODE: Find required SIP using Binary Search
            const target = Number(targetAmount);
            if (!target) return null;

            let low = 100;
            let high = target; // Max possible SIP wouldn't exceed target
            let guess = 0;

            // Precision up to ₹1
            for (let iter = 0; iter < 50; iter++) {
                guess = (low + high) / 2;
                let currentSIP = guess;
                let corpus = 0;

                for (let i = 1; i <= totalMonths; i++) {
                    corpus = (corpus + currentSIP) * (1 + monthlyRate);
                    if (i % 12 === 0 && s > 0) {
                        currentSIP = currentSIP * (1 + s / 100);
                    }
                }

                if (Math.abs(corpus - target) < 100) break;
                if (corpus < target) low = guess;
                else high = guess;
            }

            requiredSIP = Math.round(guess);

            // Recalculate totals for display based on found SIP
            let currentSIP = requiredSIP;
            let totalInv = 0;
            for (let i = 1; i <= totalMonths; i++) {
                totalInv += currentSIP;
                if (i % 12 === 0 && s > 0) currentSIP *= (1 + s / 100);
            }
            calculatedInvested = totalInv;
            calculatedMaturity = target;
        }

        // Inflation Adjustment
        const wealthGain = calculatedMaturity - calculatedInvested;
        let realMaturity = calculatedMaturity;

        if (showInflation) {
            // PV = FV / (1 + inf)^n
            realMaturity = calculatedMaturity / Math.pow(1 + inf / 100, t);
        }

        return {
            monthlySIP: mode === 'GOAL' ? requiredSIP : Number(monthlyInvestment),
            invested: calculatedInvested,
            maturity: calculatedMaturity,
            wealthGain,
            realMaturity
        };
    }, [mode, monthlyInvestment, targetAmount, rate, years, stepUp, showInflation, inflationRate]);

    const handleSave = () => {
        if (!result) return;
        const mainValue = mode === 'INVESTMENT' ? `₹ ${formatCurrency(result.maturity)}` : `₹ ${formatCurrency(result.monthlySIP)}/mo`;
        const subValue = mode === 'INVESTMENT' ? `SIP: ₹${monthlyInvestment}/mo` : `Goal: ₹${formatCurrency(Number(targetAmount))}`;

        addHistory(
            { mode, monthlyInvestment, targetAmount, rate, years, stepUp },
            mainValue,
            subValue
        );
    };

    const handleHistorySelect = (item: any) => {
        setMode(item.inputs.mode || 'INVESTMENT');
        setMonthlyInvestment(item.inputs.monthlyInvestment);
        setTargetAmount(item.inputs.targetAmount);
        setRate(item.inputs.rate);
        setYears(item.inputs.years);
        setStepUp(item.inputs.stepUp || 0);
    };

    const formatCurrency = (num: number) => {
        return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Mode Switcher */}
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl flex">
                <button
                    onClick={() => setMode('INVESTMENT')}
                    className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${mode === 'INVESTMENT'
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                >
                    <WalletIcon /> I want to Invest
                </button>
                <button
                    onClick={() => setMode('GOAL')}
                    className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 ${mode === 'GOAL'
                        ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-sm'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                        }`}
                >
                    <Target className="w-4 h-4" /> I have a Goal
                </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Inputs Section */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">

                    {mode === 'INVESTMENT' ? (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Monthly Investment (₹)</label>
                            <input
                                type="number"
                                value={monthlyInvestment}
                                onChange={(e) => setMonthlyInvestment(e.target.value === '' ? '' : Number(e.target.value))}
                                className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                            <input
                                type="range"
                                min="500"
                                max="100000"
                                step="500"
                                value={Number(monthlyInvestment) || 0}
                                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                                className="w-full mt-3 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>
                    ) : (
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Target Goal Amount (₹)</label>
                            <input
                                type="number"
                                value={targetAmount}
                                onChange={(e) => setTargetAmount(e.target.value === '' ? '' : Number(e.target.value))}
                                className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-purple-500 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                            <div className="flex gap-2 mt-2">
                                <button onClick={() => setTargetAmount(10000000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400">1 Cr</button>
                                <button onClick={() => setTargetAmount(50000000)} className="text-xs bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400">5 Cr</button>
                            </div>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Exp. Return (%)</label>
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(e.target.value === '' ? '' : Number(e.target.value))}
                                className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Time Period (Years)</label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(e.target.value === '' ? '' : Number(e.target.value))}
                                className="block w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                        </div>
                    </div>

                    {/* Step Up SIP Section */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-green-500" /> Annual Step-Up
                            </label>
                            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">Wealth Booster</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="0"
                                max="20"
                                step="1"
                                value={stepUp}
                                onChange={(e) => setStepUp(Number(e.target.value))}
                                className="flex-1 h-2 bg-green-100 dark:bg-green-900/30 rounded-lg appearance-none cursor-pointer accent-green-600"
                            />
                            <div className="w-16 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-center font-bold text-slate-900 dark:text-white text-sm">
                                {stepUp}%
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-2">
                            Increase your monthly investment by {stepUp}% every year to catch up with income growth.
                        </p>
                    </div>

                    <button
                        onClick={handleSave}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
                    >
                        Save Calculation
                    </button>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    {result ? (
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 relative overflow-hidden">

                            {/* Result Header */}
                            <div className="text-center">
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-1">
                                    {mode === 'INVESTMENT' ? 'Expected Maturity Value' : 'Monthly SIP Required'}
                                </p>
                                <h3 className={`text-4xl font-bold ${mode === 'INVESTMENT' ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'}`}>
                                    ₹ {formatCurrency(mode === 'INVESTMENT' ? (showInflation ? result.realMaturity : result.maturity) : result.monthlySIP)}
                                </h3>
                                {showInflation && mode === 'INVESTMENT' && (
                                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-0.5 rounded-full inline-block mt-2">
                                        Inflation Adjusted (Real Value)
                                    </span>
                                )}
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Invested</p>
                                    <p className="font-bold text-slate-900 dark:text-white">₹ {formatCurrency(result.invested)}</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Wealth Gained</p>
                                    <p className="font-bold text-green-600 dark:text-green-400">₹ {formatCurrency(result.wealthGain)}</p>
                                </div>
                            </div>

                            {/* Inflation Toggle */}
                            {mode === 'INVESTMENT' && (
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Adjust for Inflation</span>
                                    </div>
                                    <div
                                        onClick={() => setShowInflation(!showInflation)}
                                        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${showInflation ? 'bg-orange-500' : 'bg-slate-300 dark:bg-slate-600'}`}
                                    >
                                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${showInflation ? 'translate-x-6' : ''}`} />
                                    </div>
                                </div>
                            )}

                            {/* Step Up Insight */}
                            {Number(stepUp) > 0 && (
                                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl text-sm border border-green-100 dark:border-green-800 mt-4">
                                    <strong className="block text-green-800 dark:text-green-300 mb-1 flex items-center gap-1">
                                        <TrendingUp className="w-3 h-3" /> Step-Up Power
                                    </strong>
                                    <p className="text-green-700 dark:text-green-400 text-xs">
                                        By increasing your SIP by {stepUp}% annually, you've supercharged your corpus!
                                        Result based on {(Number(rate) - (showInflation ? Number(inflationRate) : 0)).toFixed(1)}% {showInflation ? 'real' : 'nominal'} returns.
                                    </p>
                                </div>
                            )}

                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                            Enter details to calculate
                        </div>
                    )}
                </div>
            </div>

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}

function WalletIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </svg>
    )
}

