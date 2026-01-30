
import React from 'react';

const intros: Record<string, React.ReactNode> = {
    'calorie': (
        <>
            <p className="lead">
                Weight management essentially boils down to energy balance. This <strong>Calorie Calculator</strong> helps you find your "maintenance calories"—the exact amount of food you need to eat to stay the same weight.
            </p>
            <p>
                Whether your goal is to lose fat, gain muscle, or improve athletic performance, this tool serves as your baseline. It uses the Mifflin-St Jeor equation (the gold standard for accuracy) to calculate your Total Daily Energy Expenditure (TDEE). From there, it suggests specific calorie targets for safe, sustainable weight loss or lean bulking, ensuring you fuel your body correctly for your specific lifestyle.
            </p>
        </>
    ),
    'body-fat': (
        <>
            <p className="lead">
                Your scale weight doesn't tell the whole story. The <strong>Body Fat Calculator</strong> gives you a clearer picture of your health by estimating your body composition—specifically, the ratio of lean mass to fat mass.
            </p>
            <p>
                Using the U.S. Navy Method, this tool requires only a tape measure and provides results comparable to calipers. Tracking body fat percentage is a far superior metric for fitness progress than weight alone; dropping two pounds of fat while gaining two pounds of muscle won't change the scale, but it will drastically change your health and appearance.
            </p>
        </>
    ),
    'bmr': (
        <>
            <p className="lead">
                Your body burns calories just to keep you alive, even if you sleep all day. This is your <strong>Basal Metabolic Rate (BMR)</strong>, and knowing this number is the foundation of any nutrition plan.
            </p>
            <p>
                This calculator reveals the minimum energy requiremenr for your vital organs—heart, lungs, brain—to function. It's crucial not to eat below this number for extended periods, as it can slow down your metabolism. Use this BMR figure as the starting point to calculate your total daily needs based on your activity level.
            </p>
        </>
    ),
    'ideal-weight': (
        <>
            <p className="lead">
                "How much should I weigh?" is a common question with a complex answer. Our <strong>Ideal Weight Calculator</strong> provides a healthy weight range tailored to your height, gender, and frame size.
            </p>
            <p>
                Instead of a single unrealistic number, we present results from four major medical formulas (Robinson, Miller, Devine, and Hamwi) to give you a consensus range. This helps you set realistic, healthy goals that prioritize longevity and well-being over arbitrary aesthetic standards.
            </p>
        </>
    ),
    'pregnancy': (
        <>
            <p className="lead">
                The journey of pregnancy is full of milestones. This <strong>Pregnancy Calculator</strong> (or Due Date Calculator) helps you estimate when your baby will arrive and tracks exactly how far along you are.
            </p>
            <p>
                By calculating from the first day of your last menstrual period (LMP), we can determine your Estimated Due Date (EDD) and breakdown your pregnancy into First, Second, and Third Trimesters. Use this timeline to plan for prenatal appointments, tests, and the exciting arrival of your little one.
            </p>
        </>
    ),
    'ovulation': (
        <>
            <p className="lead">
                Timing is everything when trying to conceive. This <strong>Ovulation Calculator</strong> identifies your most fertile days of the month, maximizing your chances of pregnancy.
            </p>
            <p>
                Sperm can survive for up to 5 days, but an egg is viable for only 12-24 hours. This calculator identifies your "Fertile Eindow"—the days leading up to and including ovulation—so you can time intercourse effectively. Tracking your cycle with this tool can remove the guesswork and help you understand your body's natural rhythm.
            </p>
        </>
    ),
};

export default function HealthContent({ calculatorId }: { calculatorId?: string; calculatorName?: string }) {
    const specificIntro = calculatorId ? intros[calculatorId] : null;

    return (
        <article className="prose prose-slate dark:prose-invert max-w-none">
            {specificIntro && (
                <div className="mb-10 p-6 bg-pink-50 dark:bg-pink-900/20 rounded-2xl border border-pink-100 dark:border-pink-900/30 not-prose">
                    <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-200">
                        {specificIntro}
                    </div>
                </div>
            )}

            <h2 className="text-slate-900 dark:text-white">Complete Health & Wellness Guide</h2>
            <p className="text-slate-600 dark:text-slate-200">
                Understanding your body's metrics is the first step toward a healthier life.
                While no calculator can replace a doctor's advice, these tools provide valuable baselines for
                nutrition, fitness, and general well-being.
            </p>

            <h3 className="text-slate-900 dark:text-white">Key Health Metrics Explained</h3>

            <h4 className="text-slate-900 dark:text-white">BMI (Body Mass Index)</h4>
            <p className="text-slate-600 dark:text-slate-200">
                BMI is a screening tool used worldwide to categorize weight. It's a simple calculation of weight divided by height squared.
                While useful for general population studies, it has limitations—it doesn't distinguish between muscle and fat.
                Athletes may test as "overweight" despite having low body fat.
            </p>

            <h4 className="text-slate-900 dark:text-white">BMR vs. TDEE</h4>
            <p className="text-slate-600 dark:text-slate-200">
                These are the two most important acronyms in weight management:
            </p>
            <ul className="text-slate-600 dark:text-slate-200">
                <li><strong>BMR (Basal Metabolic Rate):</strong> Calories burned at complete rest (coma state).</li>
                <li><strong>TDEE (Total Daily Energy Expenditure):</strong> BMR + calories burned from movement, exercise, and digestion.</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-200">To lose weight, you generally need to eat below your TDEE calculated limit.</p>

            <h3 className="text-slate-900 dark:text-white">Pillars of a Healthy Lifestyle</h3>
            <ol className="text-slate-600 dark:text-slate-200">
                <li><strong>Nutrition:</strong> Focus on whole foods, adequate protein, and hydration. Calories allow for weight control; macronutrients allow for body composition control.</li>
                <li><strong>Sleep:</strong> Often overlooked, 7-9 hours of sleep is critical for hormonal balance, recovery, and mental health.</li>
                <li><strong>Activity:</strong> A mix of cardiovascular exercise (for heart health) and resistance training (for bone density and metabolic health) is ideal.</li>
            </ol>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-500 p-4 my-8">
                <p className="text-red-700 dark:text-red-300 font-bold mb-1">Medical Disclaimer</p>
                <p className="text-red-600 dark:text-red-200 text-sm m-0">
                    The results from these calculators are estimates based on population averages and standard formulas.
                    They are for informational purposes only and should not be considered medical advice or a diagnosis.
                    Always consult with a qualified healthcare professional before starting any new diet or exercise program.
                </p>
            </div>

            <h3 className="text-slate-900 dark:text-white">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-pink-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        How accurate are online health calculators?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200">
                        They are usually accurate within 10-15% for most people. However, individual variations in metabolism, muscle mass, and genetics mean that these numbers are just starting points. The best approach is to start with the calculator's suggestion, track your weight for 2-3 weeks, and adjust up or down based on real-world results.
                    </p>
                </details>

                <details className="group p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 open:ring-1 open:ring-pink-500">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-slate-800 dark:text-slate-100">
                        What is a safe rate of weight loss?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-2 text-slate-600 dark:text-slate-200">
                        The CDC and most health organizations recommend losing 1-2 pounds (0.5-1 kg) per week. Losing weight faster than this often results in muscle loss and can lead to gallstones, nutritional deficiencies, and a "rebound" effect where weight is gained back quickly.
                    </p>
                </details>
            </div>
        </article>
    );
}
