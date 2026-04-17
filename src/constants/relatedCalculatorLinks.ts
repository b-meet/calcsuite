export interface RelatedCalculatorLinkDef {
    to: string;
    anchorText: string;
}

export const RELATED_CALCULATOR_LINKS: Record<string, RelatedCalculatorLinkDef[]> = {
    'basic-math': [
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/scientific', anchorText: 'scientific calculator' },
        { to: '/calculator/fraction', anchorText: 'fraction calculator' },
    ],
    scientific: [
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
        { to: '/calculator/triangle', anchorText: 'triangle calculator' },
        { to: '/calculator/fraction', anchorText: 'fraction calculator' },
    ],
    triangle: [
        { to: '/calculator/scientific', anchorText: 'scientific calculator' },
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/fraction', anchorText: 'fraction calculator' },
    ],
    fraction: [
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/scientific', anchorText: 'scientific calculator' },
    ],
    percentage: [
        { to: '/calculator/percentage-change', anchorText: 'percentage change calculator' },
        { to: '/calculator/discount', anchorText: 'discount calculator' },
        { to: '/calculator/tip', anchorText: 'tip calculator' },
    ],
    mortgage: [
        { to: '/calculator/loan', anchorText: 'loan calculator' },
        { to: '/calculator/auto-loan', anchorText: 'auto loan calculator' },
        { to: '/calculator/india-home-loan-eligibility', anchorText: 'home loan eligibility calculator' },
    ],
    loan: [
        { to: '/calculator/mortgage', anchorText: 'mortgage calculator' },
        { to: '/calculator/auto-loan', anchorText: 'auto loan calculator' },
        { to: '/calculator/india-emi', anchorText: 'EMI calculator' },
    ],
    'auto-loan': [
        { to: '/calculator/loan', anchorText: 'loan calculator' },
        { to: '/calculator/mortgage', anchorText: 'mortgage calculator' },
        { to: '/calculator/india-emi', anchorText: 'EMI calculator' },
    ],
    investment: [
        { to: '/calculator/compound-interest', anchorText: 'compound interest calculator' },
        { to: '/calculator/sip', anchorText: 'SIP calculator' },
        { to: '/calculator/retirement', anchorText: 'retirement calculator' },
    ],
    retirement: [
        { to: '/calculator/investment', anchorText: 'investment calculator' },
        { to: '/calculator/sip', anchorText: 'SIP calculator' },
        { to: '/calculator/compound-interest', anchorText: 'compound interest calculator' },
    ],
    salary: [
        { to: '/calculator/india-salary', anchorText: 'in-hand salary calculator' },
        { to: '/calculator/india-tax', anchorText: 'income tax calculator' },
        { to: '/calculator/india-hra', anchorText: 'HRA calculator' },
    ],
    bmi: [
        { to: '/calculator/calorie', anchorText: 'calorie calculator' },
        { to: '/calculator/body-fat', anchorText: 'body fat calculator' },
        { to: '/calculator/ideal-weight', anchorText: 'ideal weight calculator' },
    ],
    calorie: [
        { to: '/calculator/bmr', anchorText: 'BMR calculator' },
        { to: '/calculator/bmi', anchorText: 'BMI calculator' },
        { to: '/calculator/body-fat', anchorText: 'body fat calculator' },
    ],
    'body-fat': [
        { to: '/calculator/bmi', anchorText: 'BMI calculator' },
        { to: '/calculator/calorie', anchorText: 'calorie calculator' },
        { to: '/calculator/ideal-weight', anchorText: 'ideal weight calculator' },
    ],
    bmr: [
        { to: '/calculator/calorie', anchorText: 'calorie calculator' },
        { to: '/calculator/bmi', anchorText: 'BMI calculator' },
        { to: '/calculator/body-fat', anchorText: 'body fat calculator' },
    ],
    'ideal-weight': [
        { to: '/calculator/bmi', anchorText: 'BMI calculator' },
        { to: '/calculator/body-fat', anchorText: 'body fat calculator' },
        { to: '/calculator/calorie', anchorText: 'calorie calculator' },
    ],
    pregnancy: [
        { to: '/calculator/ovulation', anchorText: 'ovulation calculator' },
        { to: '/calculator/date-diff', anchorText: 'date calculator' },
        { to: '/calculator/age', anchorText: 'age calculator' },
    ],
    age: [
        { to: '/calculator/date-diff', anchorText: 'date calculator' },
        { to: '/calculator/pregnancy', anchorText: 'pregnancy calculator' },
        { to: '/calculator/ovulation', anchorText: 'ovulation calculator' },
    ],
    gpa: [
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
        { to: '/calculator/fraction', anchorText: 'fraction calculator' },
    ],
    password: [
        { to: '/calculator/random', anchorText: 'random number generator' },
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
        { to: '/calculator/converter', anchorText: 'unit converter' },
    ],
    converter: [
        { to: '/calculator/date-diff', anchorText: 'date calculator' },
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
        { to: '/calculator/random', anchorText: 'random number generator' },
    ],
    random: [
        { to: '/calculator/password', anchorText: 'password generator' },
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
        { to: '/calculator/date-diff', anchorText: 'date calculator' },
    ],
    ovulation: [
        { to: '/calculator/pregnancy', anchorText: 'pregnancy calculator' },
        { to: '/calculator/date-diff', anchorText: 'date calculator' },
        { to: '/calculator/age', anchorText: 'age calculator' },
    ],
    'date-diff': [
        { to: '/calculator/age', anchorText: 'age calculator' },
        { to: '/calculator/pregnancy', anchorText: 'pregnancy calculator' },
        { to: '/calculator/ovulation', anchorText: 'ovulation calculator' },
    ],
    inflation: [
        { to: '/calculator/investment', anchorText: 'investment calculator' },
        { to: '/calculator/compound-interest', anchorText: 'compound interest calculator' },
        { to: '/calculator/retirement', anchorText: 'retirement calculator' },
    ],
    tip: [
        { to: '/calculator/discount', anchorText: 'discount calculator' },
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/basic-math', anchorText: 'basic calculator' },
    ],
    'india-fd': [
        { to: '/calculator/india-rd', anchorText: 'RD calculator' },
        { to: '/calculator/india-ppf', anchorText: 'PPF calculator' },
        { to: '/calculator/compound-interest', anchorText: 'compound interest calculator' },
    ],
    'india-rd': [
        { to: '/calculator/india-fd', anchorText: 'FD calculator' },
        { to: '/calculator/india-ppf', anchorText: 'PPF calculator' },
        { to: '/calculator/sip', anchorText: 'SIP calculator' },
    ],
    'india-ppf': [
        { to: '/calculator/india-fd', anchorText: 'FD calculator' },
        { to: '/calculator/india-rd', anchorText: 'RD calculator' },
        { to: '/calculator/sip', anchorText: 'SIP calculator' },
    ],
    'india-home-loan-eligibility': [
        { to: '/calculator/india-emi', anchorText: 'EMI calculator' },
        { to: '/calculator/mortgage', anchorText: 'mortgage calculator' },
        { to: '/calculator/loan', anchorText: 'loan calculator' },
    ],
    'india-hra': [
        { to: '/calculator/india-tax', anchorText: 'income tax calculator' },
        { to: '/calculator/india-salary', anchorText: 'in-hand salary calculator' },
        { to: '/calculator/salary', anchorText: 'salary calculator' },
    ],
    'compound-interest': [
        { to: '/calculator/simple-interest', anchorText: 'simple interest calculator' },
        { to: '/calculator/investment', anchorText: 'investment calculator' },
        { to: '/calculator/sip', anchorText: 'SIP calculator' },
    ],
    'simple-interest': [
        { to: '/calculator/compound-interest', anchorText: 'compound interest calculator' },
        { to: '/calculator/loan', anchorText: 'loan calculator' },
        { to: '/calculator/india-emi', anchorText: 'EMI calculator' },
    ],
    'percentage-change': [
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/discount', anchorText: 'discount calculator' },
        { to: '/calculator/inflation', anchorText: 'inflation calculator' },
    ],
    discount: [
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
        { to: '/calculator/tip', anchorText: 'tip calculator' },
        { to: '/calculator/percentage-change', anchorText: 'percentage change calculator' },
    ],
    'india-gst': [
        { to: '/calculator/india-tax', anchorText: 'income tax calculator' },
        { to: '/calculator/discount', anchorText: 'discount calculator' },
        { to: '/calculator/percentage', anchorText: 'percentage calculator' },
    ],
    'india-emi': [
        { to: '/calculator/loan', anchorText: 'loan calculator' },
        { to: '/calculator/auto-loan', anchorText: 'auto loan calculator' },
        { to: '/calculator/india-home-loan-eligibility', anchorText: 'home loan eligibility calculator' },
    ],
    sip: [
        { to: '/calculator/compound-interest', anchorText: 'compound interest calculator' },
        { to: '/calculator/investment', anchorText: 'investment calculator' },
        { to: '/calculator/retirement', anchorText: 'retirement calculator' },
    ],
    'india-salary': [
        { to: '/calculator/india-tax', anchorText: 'income tax calculator' },
        { to: '/calculator/india-hra', anchorText: 'HRA calculator' },
        { to: '/calculator/salary', anchorText: 'salary calculator' },
    ],
    'india-tax': [
        { to: '/calculator/india-salary', anchorText: 'in-hand salary calculator' },
        { to: '/calculator/india-hra', anchorText: 'HRA calculator' },
        { to: '/calculator/india-gst', anchorText: 'GST calculator' },
    ],
};
