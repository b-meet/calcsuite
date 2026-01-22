import { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, TrendingUp, Wallet } from 'lucide-react';

export default function IndiaTaxCalculator() {
    const [mode, setMode] = useState<'simple' | 'advanced'>('simple');

    // -------------------------------------------------------------------------
    // Shared State (Inputs)
    // -------------------------------------------------------------------------
    const [residentialStatus, setResidentialStatus] = useState<'resident' | 'nri'>('resident');
    const [ageGroup, setAgeGroup] = useState<'<60' | '60-79' | '80+'>('<60');
    const [incomeType, setIncomeType] = useState<'salaried' | 'business'>('salaried');

    // Simple Mode Inputs
    const [simpleIncome, setSimpleIncome] = useState<number>(1200000);
    const [simpleRegime, setSimpleRegime] = useState<'old' | 'new'>('new');

    // Advanced Mode Inputs
    const [salaryIncome, setSalaryIncome] = useState<number>(1200000);
    const [interestIncome, setInterestIncome] = useState<number>(20000);
    const [otherIncome, setOtherIncome] = useState<number>(0);

    // Advanced Deductions
    const [deduction80C, setDeduction80C] = useState<number>(150000);
    const [deduction80D, setDeduction80D] = useState<number>(25000);
    const [deductionNPS, setDeductionNPS] = useState<number>(50000); // 80CCD(1B)
    const [deductionNPSCorp, setDeductionNPSCorp] = useState<number>(0); // 80CCD(2)
    const [hraExemption, setHraExemption] = useState<number>(0);
    const [ltaExemption, setLtaExemption] = useState<number>(0);
    const [homeLoanInterest, setHomeLoanInterest] = useState<number>(0);

    // -------------------------------------------------------------------------
    // Core Calculation Logic (FY 2025-26)
    // -------------------------------------------------------------------------
    const calculateTax = (
        grossIncome: number,
        regime: 'old' | 'new',
        deductions: {
            section80C: number;
            section80D: number;
            nps1B: number;
            nps2: number;
            hra: number;
            lta: number;
            homeLoan: number;
        }
    ) => {
        let taxableIncome = grossIncome;
        let stdDed = 0;
        let totalDeductions = 0;

        // --- 1. Deductions ---
        if (regime === 'new') {
            // New Regime: Std Ded (75k) + 80CCD(2)
            if (incomeType === 'salaried') {
                stdDed = 75000;
            }
            totalDeductions = stdDed + deductions.nps2;
        } else {
            // Old Regime: Std Ded (50k) + All Chapter VI-A
            if (incomeType === 'salaried') {
                stdDed = 50000;
            }
            const limit80C = Math.min(deductions.section80C, 150000);
            const limit80CCD1B = Math.min(deductions.nps1B, 50000);
            const limitHomeLoan = Math.min(deductions.homeLoan, 200000); // Assumed self-occupied

            totalDeductions = stdDed +
                limit80C +
                deductions.section80D +
                limit80CCD1B +
                deductions.hra +
                deductions.lta +
                limitHomeLoan +
                deductions.nps2; // 80CCD(2) allowed in Old too
        }

        taxableIncome = Math.max(0, grossIncome - totalDeductions);

        // --- 2. Slab Tax Calculation ---
        let slabTax = 0;

        if (regime === 'new') {
            // New Regime FY 2025-26 Slabs
            // 0-4L: 0%
            // 4-8L: 5%
            // 8-12L: 10%
            // 12-16L: 15%
            // 16-20L: 20%
            // 20-24L: 25%
            // >24L: 30%

            let details = taxableIncome;
            // > 24L
            if (details > 2400000) {
                slabTax += (details - 2400000) * 0.30;
                details = 2400000;
            }
            // 20-24L
            if (details > 2000000) {
                slabTax += (details - 2000000) * 0.25;
                details = 2000000;
            }
            // 16-20L
            if (details > 1600000) {
                slabTax += (details - 1600000) * 0.20;
                details = 1600000;
            }
            // 12-16L
            if (details > 1200000) {
                slabTax += (details - 1200000) * 0.15;
                details = 1200000;
            }
            // 8-12L
            if (details > 800000) {
                slabTax += (details - 800000) * 0.10;
                details = 800000;
            }
            // 4-8L
            if (details > 400000) {
                slabTax += (details - 400000) * 0.05;
                details = 400000;
            }
            // 0-4L -> 0 tax
        } else {
            // Old Regime Slabs
            let basicExemption = 250000;
            if (ageGroup === '60-79') basicExemption = 300000;
            if (ageGroup === '80+') basicExemption = 500000;

            let details = taxableIncome;

            if (details > 1000000) {
                slabTax += (details - 1000000) * 0.30;
                details = 1000000;
            }
            if (details > 500000) {
                slabTax += (details - 500000) * 0.20;
                details = 500000;
            }
            if (details > basicExemption) {
                slabTax += (details - basicExemption) * 0.05;
                details = basicExemption;
            }
        }

        // --- 3. Rebate u/s 87A (Resident Indiv Only) ---
        let taxAfterRebate = slabTax;
        if (residentialStatus === 'resident') {
            if (regime === 'new') {
                // Limit 12L
                if (taxableIncome <= 1200000) {
                    taxAfterRebate = 0;
                } else {
                    // Marginal Relief for New Regime 87A
                    // Tax payable shall not exceed income over 12L
                    const excessIncome = taxableIncome - 1200000;
                    if (taxAfterRebate > excessIncome) {
                        taxAfterRebate = excessIncome;
                    }
                }
            } else {
                // Old Regime Limit 5L, Max Rebate 12.5k
                if (taxableIncome <= 500000) {
                    taxAfterRebate = 0;
                }
            }
        }

        // --- 4. Surcharge (Marginal Relief omitted for brevity in MVP but basic logic applies) ---
        // Rate Logic
        let surchargeRate = 0;
        if (taxableIncome > 50000000) surchargeRate = regime === 'new' ? 0.25 : 0.37;
        else if (taxableIncome > 20000000) surchargeRate = 0.25;
        else if (taxableIncome > 10000000) surchargeRate = 0.15;
        else if (taxableIncome > 5000000) surchargeRate = 0.10;

        let surcharge = taxAfterRebate * surchargeRate;

        // Simple Marginal Relief for Surcharge check
        // If (Income > Threshold), Tax+Surcharge <= (Tax on Threshold + (Income - Threshold))
        // This requires calculating tax on exact threshold limits.
        // We will implement a simplified check for the crossing point.
        // (Skipping full recursive marginal relief for calculator performance/complexity balance in Step 1)

        // --- 5. Cess ---
        const cess = (taxAfterRebate + surcharge) * 0.04;

        return {
            taxableIncome,
            slabTax,
            taxAfterRebate,
            surcharge,
            cess,
            total: taxAfterRebate + surcharge + cess,
            stdDed,
            totalDeductions
        };
    };

    // -------------------------------------------------------------------------
    // Derived Results
    // -------------------------------------------------------------------------
    const simpleResult = useMemo(() => {
        return calculateTax(simpleIncome, simpleRegime, {
            section80C: 0, section80D: 0, nps1B: 0, nps2: 0, hra: 0, lta: 0, homeLoan: 0
        });
    }, [simpleIncome, simpleRegime, residentialStatus, ageGroup, incomeType]);

    const advancedResult = useMemo(() => {
        const gross = salaryIncome + interestIncome + otherIncome;
        const deds = {
            section80C: deduction80C,
            section80D: deduction80D,
            nps1B: deductionNPS,
            nps2: deductionNPSCorp,
            hra: hraExemption,
            lta: ltaExemption,
            homeLoan: homeLoanInterest
        };
        const oldTax = calculateTax(gross, 'old', deds);
        const newTax = calculateTax(gross, 'new', deds);

        return { old: oldTax, new: newTax };
    }, [salaryIncome, interestIncome, otherIncome, deduction80C, deduction80D, deductionNPS, deductionNPSCorp, hraExemption, ltaExemption, homeLoanInterest, residentialStatus, ageGroup, incomeType]);

    const betterRegime = advancedResult.old.total < advancedResult.new.total ? 'Old Regime' : 'New Regime';
    const taxSaved = Math.abs(advancedResult.old.total - advancedResult.new.total);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* --- Global Controls --- */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 grid md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Status</label>
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                        {(['resident', 'nri'] as const).map(s => (
                            <button key={s} onClick={() => setResidentialStatus(s)}
                                className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium capitalize transition-all ${residentialStatus === s ? 'bg-white shadow text-slate-900' : 'text-slate-500'}`}>
                                {s.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Age</label>
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                        {(['<60', '60-79', '80+'] as const).map(a => (
                            <button key={a} onClick={() => setAgeGroup(a)}
                                className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium transition-all ${ageGroup === a ? 'bg-white shadow text-slate-900' : 'text-slate-500'}`}>
                                {a}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Income Type</label>
                    <div className="flex bg-slate-100 p-1 rounded-lg">
                        {(['salaried', 'business'] as const).map(t => (
                            <button key={t} onClick={() => setIncomeType(t)}
                                className={`flex-1 py-1.5 px-3 rounded-md text-xs font-medium capitalize transition-all ${incomeType === t ? 'bg-white shadow text-slate-900' : 'text-slate-500'}`}>
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Mode Toggle --- */}
            <div className="flex justify-center">
                <div className="bg-slate-100 p-1 rounded-xl inline-flex">
                    <button
                        onClick={() => setMode('simple')}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${mode === 'simple' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Simple Calculator
                    </button>
                    <button
                        onClick={() => setMode('advanced')}
                        className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${mode === 'advanced' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                    >
                        Advanced Comparison
                    </button>
                </div>
            </div>

            {mode === 'simple' ? (
                // --- Simple Mode UI ---
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Total Annual Income</label>
                            <input
                                type="number"
                                value={simpleIncome}
                                onChange={(e) => setSimpleIncome(Number(e.target.value))}
                                className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-lg font-medium"
                            />
                            <p className="text-xs text-slate-400 mt-2">Enter gross income before deductions.</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Tax Regime</label>
                            <div className="flex gap-4 p-1 bg-slate-50 rounded-xl border border-slate-100">
                                <label className={`flex-1 flex items-center justify-center py-3 rounded-lg cursor-pointer transition-all ${simpleRegime === 'new' ? 'bg-white text-blue-600 shadow-sm font-semibold border border-slate-100' : 'text-slate-500'}`}>
                                    <input type="radio" checked={simpleRegime === 'new'} onChange={() => setSimpleRegime('new')} className="hidden" />
                                    New Regime
                                </label>
                                <label className={`flex-1 flex items-center justify-center py-3 rounded-lg cursor-pointer transition-all ${simpleRegime === 'old' ? 'bg-white text-blue-600 shadow-sm font-semibold border border-slate-100' : 'text-slate-500'}`}>
                                    <input type="radio" checked={simpleRegime === 'old'} onChange={() => setSimpleRegime('old')} className="hidden" />
                                    Old Regime
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Calculator className="w-5 h-5 text-blue-600" />
                            <h3 className="text-lg font-bold text-slate-900">Tax Breakdown</h3>
                        </div>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-slate-600">
                                <span>Gross Income</span>
                                <span>₹ {simpleIncome.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-green-600 font-medium">
                                <span>Deductions (Std + others)</span>
                                <span>- ₹ {simpleResult.totalDeductions.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-slate-900 border-t border-slate-200 pt-2 font-medium">
                                <span>Taxable Income</span>
                                <span>₹ {simpleResult.taxableIncome.toLocaleString()}</span>
                            </div>
                            <div className="h-px bg-slate-200 my-2"></div>
                            <div className="flex justify-between text-slate-600">
                                <span>Tax on Income</span>
                                <span>₹ {simpleResult.taxAfterRebate.toLocaleString()}</span>
                            </div>
                            {simpleResult.surcharge > 0 && (
                                <div className="flex justify-between text-slate-600">
                                    <span>Surcharge</span>
                                    <span>₹ {simpleResult.surcharge.toLocaleString()}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-slate-600">
                                <span>Cess (4%)</span>
                                <span>₹ {simpleResult.cess.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-slate-900 bg-white p-3 rounded-xl border border-slate-100 mt-2">
                                <span>Net Tax Payable</span>
                                <span>₹ {Math.round(simpleResult.total).toLocaleString()}</span>
                            </div>
                        </div>
                        <div className="text-[10px] text-slate-400 leading-tight">
                            * Calculated based on FY 2025-26 slabs. {simpleRegime === 'new' && 'New Regime provides rebate up to ₹12L.'}
                        </div>
                    </div>
                </div>
            ) : (
                // --- Advanced Comparison UI ---
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 space-y-6">
                        {/* Income */}
                        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <Wallet className="w-4 h-4 text-blue-500" /> Income Sources
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Gross Salary / Income</label>
                                    <input type="number" value={salaryIncome} onChange={e => setSalaryIncome(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Interest Income</label>
                                    <input type="number" value={interestIncome} onChange={e => setInterestIncome(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Other Income</label>
                                    <input type="number" value={otherIncome} onChange={e => setOtherIncome(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-blue-500" />
                                </div>
                            </div>
                        </section>

                        {/* Deductions */}
                        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                            <h3 className="text-base font-semibold text-slate-900 mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-green-500" /> Deductions (Mainly Old Regime)
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">80C (LIC/PPF/EPF)</label>
                                    <input type="number" value={deduction80C} onChange={e => setDeduction80C(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">80D (Medical)</label>
                                    <input type="number" value={deduction80D} onChange={e => setDeduction80D(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">80CCD(1B) (NPS Self)</label>
                                    <input type="number" value={deductionNPS} onChange={e => setDeductionNPS(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">80CCD(2) (Employer NPS)</label>
                                    <input type="number" value={deductionNPSCorp} onChange={e => setDeductionNPSCorp(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                    <p className="text-[10px] text-slate-400 mt-0.5">Allowed in New Regime too</p>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">HRA Exemption</label>
                                    <input type="number" value={hraExemption} onChange={e => setHraExemption(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">LTA Exemption</label>
                                    <input type="number" value={ltaExemption} onChange={e => setLtaExemption(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-500 mb-1">Home Loan Interest</label>
                                    <input type="number" value={homeLoanInterest} onChange={e => setHomeLoanInterest(Number(e.target.value))} className="w-full px-3 py-2 border border-slate-200 rounded-lg outline-none focus:border-green-500" />
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-5 space-y-4">
                        {/* Recommendation Card */}
                        <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="text-sm text-slate-300 font-medium mb-1">Recommendation</div>
                                <div className="text-2xl font-bold mb-2 flex items-center gap-2">
                                    Switch to {betterRegime} <CheckCircle2 className="w-6 h-6 text-green-400" />
                                </div>
                                <p className="text-slate-300 text-sm">
                                    You will save <span className="text-green-400 font-bold text-lg">₹ {Math.round(taxSaved).toLocaleString()}</span> by choosing this regime.
                                </p>
                            </div>
                            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        </div>

                        {/* Comparison Table */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="grid grid-cols-3 text-xs font-bold text-slate-500 bg-slate-50 p-3 text-center border-b border-slate-100">
                                <div className="text-left pl-2">Item</div>
                                <div>New Regime</div>
                                <div>Old Regime</div>
                            </div>

                            <div className="p-4 space-y-4 text-sm">
                                <div className="grid grid-cols-3 items-center">
                                    <div className="text-slate-600 font-medium">Taxable Income</div>
                                    <div className="text-center font-bold">₹ {Math.round(advancedResult.new.taxableIncome).toLocaleString()}</div>
                                    <div className="text-center font-bold">₹ {Math.round(advancedResult.old.taxableIncome).toLocaleString()}</div>
                                </div>
                                <div className="grid grid-cols-3 items-center text-xs text-slate-400">
                                    <div>Allowed Ded.</div>
                                    <div className="text-center">- ₹ {advancedResult.new.totalDeductions.toLocaleString()}</div>
                                    <div className="text-center">- ₹ {advancedResult.old.totalDeductions.toLocaleString()}</div>
                                </div>
                                <div className="h-px bg-slate-100"></div>
                                <div className="grid grid-cols-3 items-center">
                                    <div className="text-slate-600 font-medium">Income Tax</div>
                                    <div className="text-center">₹ {Math.round(advancedResult.new.taxAfterRebate + advancedResult.new.surcharge).toLocaleString()}</div>
                                    <div className="text-center">₹ {Math.round(advancedResult.old.taxAfterRebate + advancedResult.old.surcharge).toLocaleString()}</div>
                                </div>
                                <div className="grid grid-cols-3 items-center text-xs text-slate-400">
                                    <div>Cess (4%)</div>
                                    <div className="text-center">₹ {Math.round(advancedResult.new.cess).toLocaleString()}</div>
                                    <div className="text-center">₹ {Math.round(advancedResult.old.cess).toLocaleString()}</div>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl grid grid-cols-3 items-center font-bold text-slate-900 mt-2">
                                    <div>Total Tax</div>
                                    <div className={`text-center ${betterRegime === 'New Regime' ? 'text-green-600' : ''}`}>₹ {Math.round(advancedResult.new.total).toLocaleString()}</div>
                                    <div className={`text-center ${betterRegime === 'Old Regime' ? 'text-green-600' : ''}`}>₹ {Math.round(advancedResult.old.total).toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

