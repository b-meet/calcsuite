import { Download } from 'lucide-react';
import type { AmortizationRow } from '../utils/amortization';
import { buildAmortizationCsv } from '../utils/amortization';

interface AmortizationScheduleProps {
    schedule: AmortizationRow[];
    title?: string;
    fileName: string;
    currency?: string;
}

function formatCurrency(value: number, currency: string) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
}

export default function AmortizationSchedule({
    schedule,
    title = 'Amortization Schedule',
    fileName,
    currency = 'USD',
}: AmortizationScheduleProps) {
    const downloadCsv = () => {
        const csv = buildAmortizationCsv(schedule);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h3 className="m-0 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Full repayment breakdown for each monthly payment.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={downloadCsv}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
                >
                    <Download size={16} />
                    Download CSV
                </button>
            </div>

            <div className="max-h-[28rem] overflow-auto rounded-2xl border border-slate-200 dark:border-slate-800">
                <table className="min-w-full text-sm">
                    <thead className="sticky top-0 bg-slate-100 dark:bg-slate-950">
                        <tr className="text-left text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                            <th className="px-4 py-3 font-semibold">Payment</th>
                            <th className="px-4 py-3 font-semibold">Amount</th>
                            <th className="px-4 py-3 font-semibold">Principal</th>
                            <th className="px-4 py-3 font-semibold">Interest</th>
                            <th className="px-4 py-3 font-semibold">Balance</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                        {schedule.map((row) => (
                            <tr key={row.paymentNumber} className="bg-white dark:bg-slate-900">
                                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.paymentNumber}</td>
                                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{formatCurrency(row.payment, currency)}</td>
                                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{formatCurrency(row.principal, currency)}</td>
                                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{formatCurrency(row.interest, currency)}</td>
                                <td className="px-4 py-3 text-slate-700 dark:text-slate-200">{formatCurrency(row.balance, currency)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
