import { useState } from 'react';
import { Briefcase } from 'lucide-react';

export default function IndiaSalaryCalculator() {
    const [ctc, setCtc] = useState<number>(1200000); // Yearly CTC in Rupees
    const [bonus, setBonus] = useState<number>(0);
    const [professionalTax, setProfessionalTax] = useState<number>(200); // Monthly

    const calculateSalary = () => {
        const monthlyCTC = ctc / 12;

        // Basic Assumption: Basic is 50% of CTC
        const basic = monthlyCTC * 0.5;
        const hra = basic * 0.4; // Assuming Metro 40% (Simplified)
        const specialAllowance = monthlyCTC - basic - hra - (bonus / 12);

        // Deductions
        // PF is 12% of Basic (capped at 1800 if basic > 15000 usually, but let's take flat 12% for simplicity or max cap)
        // actually standard practice often limits employer contribution
        // Let's keep it simple: Employee PF 12% of Basic
        const pf = basic * 0.12;

        const totalDeductions = pf + professionalTax;
        const inHand = monthlyCTC - totalDeductions - (bonus / 12); // Bonus is usually paid separately or part of monthly, assuming yearly bonus excluded from monthly in-hand for this calc logic if strictly variable

        return {
            monthly: {
                basic,
                hra,
                specialAllowance,
                pf,
                professionalTax,
                inHand
            },
            yearly: {
                ctc,
                inHand: inHand * 12
            }
        };
    };

    const result = calculateSalary();

    return (
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Yearly CTC (₹)
                    </label>
                    <input
                        type="number"
                        value={ctc}
                        onChange={(e) => setCtc(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Yearly Bonus / Variable (₹)
                    </label>
                    <input
                        type="number"
                        value={bonus}
                        onChange={(e) => setBonus(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                    />
                    <p className="text-xs text-slate-500 mt-1"> deducted from fixed monthly pay calculation</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Monthly Professional Tax (₹)
                    </label>
                    <input
                        type="number"
                        value={professionalTax}
                        onChange={(e) => setProfessionalTax(Number(e.target.value))}
                        className="block w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 hover:bg-white"
                    />
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-6">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Monthly Breakdown
                </h3>

                <div className="space-y-3">
                    <div className="flex justify-between items-center text-slate-600">
                        <span>Basic Salary</span>
                        <span className="font-medium">₹ {Math.round(result.monthly.basic).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                        <span>HRA (40% of Basic)</span>
                        <span className="font-medium">₹ {Math.round(result.monthly.hra).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-600">
                        <span>Special Allowance</span>
                        <span className="font-medium">₹ {Math.round(result.monthly.specialAllowance).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="border-t border-slate-200 my-2"></div>

                    <div className="flex justify-between items-center text-red-500">
                        <span>PF (12% of Basic)</span>
                        <span className="font-medium">- ₹ {Math.round(result.monthly.pf).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-red-500">
                        <span>Professional Tax</span>
                        <span className="font-medium">- ₹ {Math.round(result.monthly.professionalTax).toLocaleString('en-IN')}</span>
                    </div>

                    <div className="pt-3 border-t border-slate-200 flex justify-between items-center text-slate-900 font-bold text-lg">
                        <span>Net In-Hand Salary</span>
                        <span>₹ {Math.round(result.monthly.inHand).toLocaleString('en-IN')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
