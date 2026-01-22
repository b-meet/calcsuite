import { useState, useEffect } from 'react';
import { Building2, CheckCircle, XCircle } from 'lucide-react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export default function HRACalculator() {
    const [basicSalary, setBasicSalary] = useState(600000); // Yearly
    const [hraReceived, setHraReceived] = useState(240000); // Yearly
    const [rentPaid, setRentPaid] = useState(180000); // Yearly
    const [isMetro, setIsMetro] = useState(true);

    const [result, setResult] = useState<{
        exemptHRA: number;
        taxableHRA: number;
        conditions: {
            condition1: number; // Actual HRA Received
            condition2: number; // Rent Paid - 10% of Basic
            condition3: number; // 50% or 40% of Basic
        }
    } | null>(null);

    const calculateHRA = () => {
        // Inputs are annual

        // Condition 1: Actual HRA Received
        const c1 = hraReceived;

        // Condition 2: Rent Paid - 10% of Basic
        const c2 = Math.max(0, rentPaid - (0.10 * basicSalary));

        // Condition 3: 50% of Basic (Metro) or 40% (Non-Metro)
        const c3 = (isMetro ? 0.50 : 0.40) * basicSalary;

        // Exempt HRA is the Minimum of the three
        const exempt = Math.min(c1, c2, c3);

        // Taxable HRA = Received - Exempt
        const taxable = Math.max(0, hraReceived - exempt);

        setResult({
            exemptHRA: Math.round(exempt),
            taxableHRA: Math.round(taxable),
            conditions: {
                condition1: Math.round(c1),
                condition2: Math.round(c2),
                condition3: Math.round(c3)
            }
        });
    };

    useEffect(() => {
        calculateHRA();
    }, [basicSalary, hraReceived, rentPaid, isMetro]);



    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-blue-600" />
                            Salary & Rent Details (Annual)
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Basic Salary (+ DA if applicable)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={basicSalary}
                                        onChange={(e) => setBasicSalary(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Enter annual amount</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    HRA Received
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={hraReceived}
                                        onChange={(e) => setHraReceived(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">As per salary slip (Annual)</p>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Total Rent Paid
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <span className="text-slate-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        value={rentPaid}
                                        onChange={(e) => setRentPaid(Number(e.target.value))}
                                        className="block w-full pl-8 pr-4 py-2 text-slate-900 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-slate-500 mt-1">Total rent paid in the financial year</p>
                                </div>
                            </div>

                            <div>
                                <span className="block text-sm font-medium text-slate-700 mb-2">City Type</span>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsMetro(true)}
                                        className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${isMetro
                                            ? 'bg-blue-50 border-blue-200 text-blue-700'
                                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        Metro (50%)
                                        <span className="block text-xs font-normal mt-0.5 text-slate-500">Delhi, Mumbai, Kolkata, Chennai</span>
                                    </button>
                                    <button
                                        onClick={() => setIsMetro(false)}
                                        className={`flex-1 py-2 px-4 rounded-lg border text-sm font-medium transition-colors ${!isMetro
                                            ? 'bg-blue-50 border-blue-200 text-blue-700'
                                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                            }`}
                                    >
                                        Non-Metro (40%)
                                        <span className="block text-xs font-normal mt-0.5 text-slate-500">Other Cities</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <p className="text-sm font-medium text-green-800">Exempt HRA</p>
                            </div>
                            <p className="text-2xl font-bold text-green-700">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.exemptHRA || 0)}
                            </p>
                        </div>
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                            <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-5 h-5 text-red-600" />
                                <p className="text-sm font-medium text-red-800">Taxable HRA</p>
                            </div>
                            <p className="text-2xl font-bold text-red-700">
                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.taxableHRA || 0)}
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider text-xs">Exemption Calculation Logic</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50">
                                <span className="text-slate-600">1. Actual HRA Received</span>
                                <span className="font-medium text-slate-900">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.conditions.condition1 || 0)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50">
                                <span className="text-slate-600">2. Rent Paid - 10% Basic</span>
                                <span className="font-medium text-slate-900">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.conditions.condition2 || 0)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50">
                                <span className="text-slate-600">3. {isMetro ? '50%' : '40%'} of Basic Salary</span>
                                <span className="font-medium text-slate-900">
                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(result?.conditions.condition3 || 0)}
                                </span>
                            </div>
                            <div className="pt-2 flex justify-end">
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                                    Exempt Amount = Minimum of (1, 2, 3)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
