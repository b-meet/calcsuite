
import React from 'react';

const intros: Record<string, React.ReactNode> = {
    'basic-math': (
        <>
            <p className="lead">
                Sometimes you just need a simple, reliable tool without the clutter. This <strong>Basic Calculator</strong> is designed for speed and simplicity, perfect for balancing a checkbook, splitting a grocery bill, or helping with elementary homework.
            </p>
            <p>
                It handles the four fundamental arithmetic operations—addition, subtraction, multiplication, and division—with a clean, large interface that works great on mobile. No complex functions or confusing buttons, just the math you need to get done, done quickly.
            </p>
        </>
    ),
    'scientific': (
        <>
            <p className="lead">
                For students, engineers, and professionals, standard arithmetic isn't enough. Our <strong>Scientific Calculator</strong> brings the power of a handheld scientific device to your browser.
            </p>
            <p>
                It supports advanced functions including trigonometry (Sin, Cos, Tan), logarithms (Log, Ln), exponents, and roots. Whether you're solving for <em>x</em> in algebra, calculating angles in physics, or working with scientific notation in chemistry, this tool provides the precision and functionality required for higher-level mathematics.
            </p>
        </>
    ),
    'triangle': (
        <>
            <p className="lead">
                Triangles are the building blocks of geometry. This <strong>Triangle Calculator</strong> is a powerful solver that finds missing angles, side lengths, area, and perimeter instantly.
            </p>
            <p>
                Whether you are working with a Right Triangle (using Pythagorean theorem) or an oblique triangle (using Law of Sines/Cosines), simply input any three known variables (like two sides and an angle), and the calculator will derive the rest. It's an indispensable tool for geometry students, carpenters, architects, and designers.
            </p>
        </>
    ),
    'fraction': (
        <>
            <p className="lead">
                Fractions are notoriously difficult to calculate in your head. This <strong>Fraction Calculator</strong> takes the frustration out of adding, subtracting, multiplying, and dividing fractions.
            </p>
            <p>
                It automatically handles common denominators, simplifies the final result to its lowest terms, and can convert between mixed numbers and improper fractions. It's a lifesaver for woodworkers measuring cuts, bakers doubling recipes, or students checking their math homework.
            </p>
        </>
    ),
    'percentage': (
        <>
            <p className="lead">
                Percentages are used everywhere, from shopping malls to stock markets. The <strong>Percentage Calculator</strong> is a versatile 3-in-1 tool designed to solve the most common percent problems.
            </p>
            <p>
                Needing to find "X is what percent of Y"? Or "What is X% off of Y price"? Or "What is the percentage increase from A to B"? This calculator handles all these scenarios instantly. It's perfect for calculating discounts during sales, determining tax amounts, or figuring out your grade on a test.
            </p>
        </>
    ),
    'tip': (
        <>
            <p className="lead">
                Dining out should be relaxing, not a math test. This <strong>Tip Calculator</strong> ensures you leave the right amount of gratuity every time, adhering to social etiquette without overpaying.
            </p>
            <p>
                It features a dual mode: choose between a standard <strong>Percentage Tip</strong> (15%, 18%, 20%) or a <strong>Fixed Amount</strong> tip. It also splits the total bill instantly for groups, telling you exactly what each person owes. Use it for restaurants, salons, delivery drivers, and hospitality services.
            </p>
        </>
    ),
};

export default function MathContent({ calculatorId }: { calculatorId?: string; calculatorName?: string }) {
    const specificIntro = calculatorId ? intros[calculatorId] : null;

    return (
        <article className="prose prose-slate dark:prose-invert max-w-none">
            {specificIntro && (
                <div className="mb-10 p-6 bg-blue-50 dark:bg-blue-900/30 rounded-2xl border border-blue-100 dark:border-blue-800 not-prose">
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        {specificIntro}
                    </div>
                </div>
            )}

            <h2 className="text-slate-900 dark:text-white">Mathematics: The Language of the Universe</h2>
            <p className="text-slate-600 dark:text-slate-200">
                Mathematics is more than just numbers on a page; it is the fundamental language used to describe the world around us.
                From the symmetry of a flower to the orbit of planets, math provides the structure for understanding reality.
                Our suite of math calculators provides the precision you need for both academic and real-world problem solving.
            </p>

            <h3 className="text-slate-900 dark:text-white">Core Concepts</h3>

            <h4 className="text-slate-900 dark:text-white">Trigonometry</h4>
            <p className="text-slate-600 dark:text-slate-200">
                Trigonometry deals with the relationships between the sides and angles of triangles. It has vast applications in fields like architecture, astronomy, video game development, and navigation.
                The primary functions—Sine, Cosine, and Tangent—are ratios that define these relationships.
            </p>

            <h4 className="text-slate-900 dark:text-white">Percentages and Ratios</h4>
            <p className="text-slate-600 dark:text-slate-200">
                A percentage is simply a ratio expressed as a fraction of 100. It is the universal standard for comparing quantities.
                Understanding percentages is vital for financial literacy (interest rates), shopping (discounts), and analyzing statistics (polls and data).
            </p>

            <h3 className="text-slate-900 dark:text-white">Tips for Calculation Accuracy</h3>
            <ul className="text-slate-700 dark:text-slate-300">
                <li><strong>Order of Operations (PEMDAS):</strong> Always remember the order: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Most errors come from doing these out of sequence.</li>
                <li><strong>Significant Figures:</strong> In science and engineering, precision matters. Don't simply write down every decimal point your calculator gives you; consider the precision of your input data.</li>
                <li><strong>Estimation:</strong> Before reaching for the calculator, estimate the answer in your head. If you're multiplying 98 by 5, the answer should be close to 500. If your calculator says 4500, you know you made a typo.</li>
            </ul>

            <h3 className="text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 open:ring-1 open:ring-blue-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-white">
                        Why does 0.1 + 0.2 not equal 0.3 on some computers?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                        This is a classic floating-point error. Computers store numbers in binary (base 2). Some fractions like 1/10 (0.1) cannot be represented perfectly in binary, resulting in tiny component errors that can accumulate. High-precision calculators use special logic to correct for this.
                    </p>
                </details>

                <details className="group p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 open:ring-1 open:ring-blue-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-white">
                        What is the difference between odds and probability?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-300">
                        Probability is the ratio of favorable outcomes to <em>total</em> outcomes (e.g., rolling a six is 1/6). Odds are the ratio of favorable outcomes to <em>unfavorable</em> outcomes (e.g., odds of rolling a six are 1:5).
                    </p>
                </details>
            </div>
        </article>
    );
}
