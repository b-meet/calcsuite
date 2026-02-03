
export const categoryContent: Record<string, { title: string; description: string; longDescription: string; features: string[] }> = {
    financial: {
        title: "Financial Calculators",
        description: "Plan your financial future with our comprehensive suite of free financial tools.",
        longDescription: "Navigate the complex world of personal finance with confidence. Our Financial Calculators are designed to help you make informed decisions about mortgages, loans, investments, and retirement planning. Whether you're calculating monthly EMI payments, projecting compound interest growth, or estimating tax liabilities, these tools provide the clarity you need to achieve your financial goals.",
        features: [
            "Loan & Mortgage Planning",
            "Investment & Retirement Projections",
            "Salary & Tax Estimations",
            "Inflation & Interest Analysis"
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
        ]
    }
};
