
import React from 'react';

const intros: Record<string, React.ReactNode> = {
    'age': (
        <>
            <p className="lead">
                Time flies, but exactly how much? The <strong>Age Calculator</strong> is a fun and precise tool that calculates your chronological age down to the minute.
            </p>
            <p>
                While you know your age in years, seeing it broken down into 10,000+ days or 800,000+ hours offers a new perspective. It helps calculate the exact age difference between two people, find out what day of the week you were born on, or celebrate unique milestones like your "10,000th day" birthday.
            </p>
        </>
    ),
    'gpa': (
        <>
            <p className="lead">
                Your Grade Point Average (GPA) is the most critical metric for college admissions and academic scholarships. This <strong>GPA Calculator</strong> helps high school and college students track their academic performance accurately.
            </p>
            <p>
                It supports both weighted and unweighted scales (4.0 and 5.0). By inputting your course grades and credit hours, you can calculate your semester GPA and see how it impacts your cumulative GPA. Use it to scenario plan: "What grades do I need this semester to raise my GPA to a 3.5?"
            </p>
        </>
    ),
    'password': (
        <>
            <p className="lead">
                In an era of data breaches, your digital security is only as strong as your weakest password. Our <strong>Password Generator</strong> creates cryptographically strong, random passwords that are virtually uncrackable.
            </p>
            <p>
                Avoid using "Password123" or pet names. This tool lets you control the length and complexity (symbols, numbers, uppercase) to generate secure credentials for your banking, email, and social media accounts. Strong entropy is your first line of defense against cyber threats.
            </p>
        </>
    ),
    'converter': (
        <>
            <p className="lead">
                The world is divided by two major measurement systems, but this <strong>Unit Converter</strong> bridges the gap. It is an all-in-one tool for converting between Metric (SI) and Imperial/US Customary units.
            </p>
            <p>
                Whether you are cooking a recipe that uses grams instead of ounces, traveling to a country that uses Celsius instead of Fahrenheit, or working on a DIY project requiring precise length conversions, this tool handles it all. It supports Length, Weight, Volume, Temperature, and more.
            </p>
        </>
    ),
    'random': (
        <>
            <p className="lead">
                Need to make unbiased decision? The <strong>Random Number Generator (RNG)</strong> produces truly unpredictable numbers within a range you define.
            </p>
            <p>
                It's perfect for picking lottery numbers, determining a winner for a contest, rolling dice for board games, or scientific sampling. Unlike a human, who might subconsciously pick "favorite" numbers, this algorithm ensures mathematical randomness for fair and impartial results.
            </p>
        </>
    ),
    'date-diff': (
        <>
            <p className="lead">
                "How many days until..." is a question we ask constantly. The <strong>Date Calculator</strong> provides the precise duration between any two calendar dates.
            </p>
            <p>
                Use it to count down to a wedding, calculate project timelines, determine legal deadlines, or simply find out how many days correspond to "6 weeks from now." It accounts for leap years and varying month lengths to give you an exact count in years, months, and days.
            </p>
        </>
    ),
};

export default function OtherContent({ calculatorId }: { calculatorId?: string; calculatorName?: string }) {
    const specificIntro = calculatorId ? intros[calculatorId] : null;

    return (
        <article className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
            {specificIntro && (
                <div className="mb-10 p-6 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-100 dark:border-purple-800 not-prose">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        {specificIntro}
                    </div>
                </div>
            )}

            <h2 className="text-slate-900 dark:text-white">Essential Utilities for Everyday Life</h2>
            <p className="text-slate-600 dark:text-slate-200">
                Not every calculation involves complex calculus or finance. Sometimes, you just need a reliable tool to handle life's daily logistics.
                Our "Other" category encompasses these essential utilities that help organize, secure, and quantify your day-to-day activities.
            </p>

            <h3 className="text-slate-900 dark:text-white">Digital Security & Entropy</h3>
            <p className="text-slate-600 dark:text-slate-200">
                Randomness is the core of digital security. Humans are notably bad at being random—we tend to pick patterns (1234, qwerty) or personal dates.
                A <strong>Password Generator</strong> relies on high math entropy (disorder) to create strings that would take a supercomputer millions of years to guess through brute force.
                Length is often more important than complexity; a 20-character password is exponentially stronger than an 8-character one.
            </p>

            <h3 className="text-slate-900 dark:text-white">The Metric vs. Imperial Divide</h3>
            <p className="text-slate-600 dark:text-slate-200">
                The United States, Liberia, and Myanmar are the only countries that primarily use the Imperial system. The rest of the world uses Metric.
                This creates a constant need for conversion, especially in:
            </p>
            <ul className="text-slate-600 dark:text-slate-200">
                <li><strong>Cooking:</strong> Grams vs. Cups/Ounces.</li>
                <li><strong>Travel:</strong> Kilometers vs. Miles and Celsius vs. Fahrenheit.</li>
                <li><strong>Science:</strong> The scientific community exclusively uses Metric (SI units) for consistency.</li>
            </ul>

            <h3 className="text-slate-900 dark:text-white">Academic Success Metrics</h3>
            <p className="text-slate-600 dark:text-slate-200">
                GPA (Grade Point Average) serves as a standardized measurement of varying levels of achievement in a course.
                Most colleges use a 4.0 scale, where an 'A' is 4 points. Honors and AP classes often use a "weighted" 5.0 scale to reward the difficulty of the curriculum.
                Tracking this continuously prevents end-of-semester surprises.
            </p>
        </article>
    );
}
