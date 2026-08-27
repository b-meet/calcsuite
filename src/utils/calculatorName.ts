/**
 * Registry names are long SEO titles ("EMI Calculator India — Home, Car &
 * Personal Loan EMI (2026)"). Anything a human reads in passing — a share
 * message, a credit link, a picker row — wants the short half.
 */
export function shortCalculatorName(name: string): string {
    return name.split(/\s+[-–—:|]\s+/)[0].trim();
}
