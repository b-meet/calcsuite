
export const categoryContent: Record<string, { title: string; description: string; longDescription: string; features: string[]; faqs?: { question: string; answer: string }[] }> = {
    financial: {
        title: "Financial Calculators",
        description: "Plan your financial future with our comprehensive suite of free financial tools.",
        longDescription: "Navigate the complex world of personal finance with confidence. Our Financial Calculators are designed to help you make informed decisions about mortgages, loans, investments, and retirement planning. Whether you're calculating monthly EMI payments, projecting compound interest growth, or estimating tax liabilities, these tools provide the clarity you need to achieve your financial goals.",
        features: [
            "Loan & Mortgage Planning",
            "Investment & Retirement Projections",
            "Salary & Tax Estimations",
            "Inflation & Interest Analysis"
        ],
        faqs: [
            {
                question: "What are the best free financial calculators?",
                answer: "CalcSuite offers a wide range of free financial tools including Mortgage, Loan, Investment, and Retirement calculators."
            },
            {
                question: "How accurate are online loan calculators?",
                answer: "Our calculators use standard financial formulas to provide highly accurate estimates for monthly payments and interest costs."
            },
            {
                question: "Can I use these calculators for business planning?",
                answer: "Yes, tools like ROI, Margin, and Loan calculators are perfect for small business financial planning."
            }
        ]
    },
    health: {
        title: "Health & Fitness Calculators",
        description: "Track your wellness journey with accurate health insights and metrics.",
        longDescription: "Take control of your well-being with our scientifically-backed Health & Fitness Calculators. From tracking Body Mass Index (BMI) and daily calorie needs to estimating body fat percentage and ideal weight, these tools offer valuable insights to support your fitness journey. Perfect for athletes, health enthusiasts, and anyone looking to lead a healthier lifestyle.",
        features: [
            "BMI, BMR & TDEE Calculation",
            "Body Fat & Ideal Weight Estimation",
            "Pregnancy & Ovulation Tracking",
            "Personalized Calorie Targets"
        ],
        faqs: [
            {
                question: "How do I calculate my daily calorie needs?",
                answer: "Use our Calorie Calculator to find your TDEE based on your age, weight, height, and activity level."
            },
            {
                question: "Is BMI a good indicator of health?",
                answer: "BMI is a useful screening tool, but it's best used alongside other metrics like Body Fat percentage and waist circumference."
            },
            {
                question: "Are these health calculators medically approved?",
                answer: "These tools use standard medical formulas but should remain informational. Always consult a healthcare professional for medical advice."
            }
        ]
    },
    math: {
        title: "Mathematics Calculators",
        description: "Solve complex math problems instantly with our powerful computational tools.",
        longDescription: "From basic arithmetic to advanced trigonometry and geometry, our Mathematics Calculators are here to simplify your studies and work. Designed for students, teachers, and professionals, these tools handle everything from fraction arithmetic to triangle properties and scientific calculations, ensuring accuracy and saving you time.",
        features: [
            "Scientific & Basic Computation",
            "Geometry & Triangle Solvers",
            "Fraction & Percentage Operations",
            "Random Number Generation"
        ],
        faqs: [
            {
                question: "Can I solve geometry problems online?",
                answer: "Yes, our Triangle and specialized geometry calculators can solve for area, perimeter, and missing angles instantly."
            },
            {
                question: "Is the scientific calculator free?",
                answer: "Yes, our full-featured scientific calculator is completely free to use directly in your browser."
            },
            {
                question: "Do you have a fraction calculator?",
                answer: "Yes, we have a dedicated Fraction Calculator that handles addition, subtraction, multiplication, and division of fractions."
            }
        ]
    },
    other: {
        title: "Utility Tools",
        description: "Essential everyday tools for conversions, dates, and random generation.",
        longDescription: "Simplify daily tasks with our versatile collection of Utility Tools. Whether you need to convert units, calculate age, generate secure passwords, or determine the duration between dates, these practical calculators are designed for efficiency and ease of use in your everyday life.",
        features: [
            "Unit Conversions",
            "Age & Date Calculations",
            "Secure Password Generation",
            "GPA & Grade Calculation"
        ],
        faqs: [
            {
                question: "How do I generate a strong password?",
                answer: "Our Password Generator creates strong, random passwords using a mix of characters, numbers, and symbols to ensure security."
            },
            {
                question: "Can I calculate the days between two dates?",
                answer: "Yes, the Date Calculator precisely counts the number of days, weeks, and months between any two dates."
            },
            {
                question: "Is the detailed age calculator accurate?",
                answer: "Yes, it calculates your exact age in years, months, and days, accounting for leap years."
            }
        ]
    },
    india: {
        title: "India-Specific Financial Tools",
        description: "Specialized calculators for Indian taxation, investments, and banking schemes.",
        longDescription: "Tailored specifically for the Indian financial landscape, these calculators help you navigate taxes, investments, and government schemes with ease. Calculate GST, income tax, HRA exemptions, and returns on popular schemes like PPF, FD, and RD. Essential for Indian taxpayers and investors planning their portfolio.",
        features: [
            "GST & Income Tax Calculation",
            "PPF, FD, & RD Returns",
            "HRA Exemption & Salary Planning",
            "Home Loan Eligibility Check"
        ],
        faqs: [
            {
                question: "How is GST calculated in India?",
                answer: "GST is calculated as a percentage of the product price. Our tool handles standard rates of 5%, 12%, 18%, and 28%."
            },
            {
                question: "What is the PPF interest rate?",
                answer: "PPF interest rates are set by the government quarterly. Our calculator uses the latest rates for accurate projections."
            },
            {
                question: "How to check home loan eligibility?",
                answer: "Our Home Loan Eligibility calculator estimates your borrowing power based on your income and existing EMIs."
            }
        ]
    }
};
