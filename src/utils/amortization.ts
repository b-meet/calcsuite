export interface AmortizationRow {
    paymentNumber: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

export interface AmortizationResult {
    periodicPayment: number;
    totalPayment: number;
    totalInterest: number;
    schedule: AmortizationRow[];
    numberOfPayments: number;
}

interface AmortizationInput {
    principal: number;
    annualRate: number;
    numberOfPayments: number;
}

export function calculateAmortizationSchedule({
    principal,
    annualRate,
    numberOfPayments,
}: AmortizationInput): AmortizationResult | null {
    if (principal <= 0 || annualRate < 0 || numberOfPayments <= 0 || !Number.isFinite(principal) || !Number.isFinite(annualRate) || !Number.isFinite(numberOfPayments)) {
        return null;
    }

    const monthlyRate = annualRate / 100 / 12;
    const periodicPayment = monthlyRate === 0
        ? principal / numberOfPayments
        : (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const schedule: AmortizationRow[] = [];
    let balance = principal;
    let totalPayment = 0;
    let totalInterest = 0;

    for (let paymentNumber = 1; paymentNumber <= numberOfPayments; paymentNumber += 1) {
        const interest = monthlyRate === 0 ? 0 : balance * monthlyRate;
        let payment = periodicPayment;
        let principalPayment = payment - interest;

        if (paymentNumber === numberOfPayments || principalPayment > balance) {
            principalPayment = balance;
            payment = principalPayment + interest;
        }

        balance = Math.max(0, balance - principalPayment);
        totalPayment += payment;
        totalInterest += interest;

        schedule.push({
            paymentNumber,
            payment,
            principal: principalPayment,
            interest,
            balance,
        });
    }

    return {
        periodicPayment,
        totalPayment,
        totalInterest,
        schedule,
        numberOfPayments,
    };
}

function escapeCsvValue(value: string | number) {
    const stringValue = String(value);

    if (/[",\n]/.test(stringValue)) {
        return `"${stringValue.replace(/"/g, '""')}"`;
    }

    return stringValue;
}

export function buildAmortizationCsv(rows: AmortizationRow[]) {
    const headers = ['Payment Number', 'Payment Amount', 'Principal', 'Interest', 'Remaining Balance'];
    const body = rows.map((row) => [
        row.paymentNumber,
        row.payment.toFixed(2),
        row.principal.toFixed(2),
        row.interest.toFixed(2),
        row.balance.toFixed(2),
    ]);

    return [headers, ...body]
        .map((line) => line.map(escapeCsvValue).join(','))
        .join('\r\n');
}
