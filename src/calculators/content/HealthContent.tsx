
export default function HealthContent() {
    return (
        <div className="prose prose-slate max-w-none mt-12 text-left">
            <h2>Complete Health & Wellness Guide</h2>
            <p>
                Your health is your most valuable asset. Understanding the numbers behind your body's performance is the first
                step toward a healthier, happier life. Our health calculators—covering BMI, BMR, Body Fat, and more—are
                designed to give you a clear, data-driven picture of your physical status.
            </p>

            <h3>The Science of Health Metrics</h3>
            <p>
                Modern wellness relies on quantifiable data to track progress. Whether you are looking to lose weight, build muscle,
                or simply maintain a healthy lifestyle, knowing your baselines is crucial.
            </p>

            <h3>Deep Dive: Understanding Your Numbers</h3>
            <div className="my-6">
                <h4 className="text-blue-600">BMI (Body Mass Index)</h4>
                <p>
                    A widely used metric for categorizing weight. While simple, it correlates well with health risks at the population level.
                    However, it does not distinguish between muscle and fat.
                </p>

                <h4 className="text-blue-600">BMR (Basal Metabolic Rate)</h4>
                <p>
                    This represents the number of calories your body burns just to exist—breathing, circulating blood, and maintaining cell production.
                    Knowing your BMR is the foundation of any effective diet plan.
                </p>

                <h4 className="text-blue-600">TDEE (Total Daily Energy Expenditure)</h4>
                <p>
                    Your TDEE is your BMR plus the calories you burn through daily activity and exercise.
                    To lose weight, you must consume fewer calories than your TDEE (a caloric deficit).
                </p>
            </div>

            <h3>Pillars of a Healthy Lifestyle</h3>
            <ol>
                <li>
                    <strong>Nutrient-Dense Nutrition</strong>: Focus on whole foods—vegetables, fruits, lean proteins, and healthy fats.
                    Avoid processed sugars and empty calories.
                </li>
                <li>
                    <strong>Active Living</strong>: The CDC recommends at least 150 minutes of moderate-intensity aerobic activity
                    or 75 minutes of vigorous activity every week, plus muscle-strengthening activities on 2 or more days.
                </li>
                <li>
                    <strong>Rest & Recovery</strong>: Sleep is when your body repairs itself. Chronic sleep deprivation is linked to
                    weight gain, heart disease, and depression.
                </li>
            </ol>

            <h3>Common Questions</h3>
            <details className="group">
                <summary className="font-bold cursor-pointer list-none flex items-center">
                    <span className="mr-2">▶</span> Can I rely solely on BMI?
                </summary>
                <p className="pl-6 mt-2">
                    No. BMI is a screening tool. For a full picture of your health, consider body fat percentage, waist circumference,
                    blood pressure, and cholesterol levels.
                </p>
            </details>
            <details className="group mt-4">
                <summary className="font-bold cursor-pointer list-none flex items-center">
                    <span className="mr-2">▶</span> How often should I check these metrics?
                </summary>
                <p className="pl-6 mt-2">
                    Health takes time to change. Checking your weight or measurements once a week is usually sufficient and helps avoid
                    obsessing over daily fluctuations caused by water retention.
                </p>
            </details>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-8">
                <p className="text-amber-700 text-sm m-0">
                    <strong>Medical Disclaimer:</strong> The results provided by these calculators are estimates based on standard formulas
                    and population averages. They should not be used for medical diagnosis or treatment. Always consult with a qualified
                    healthcare professional before making major changes to your diet or exercise routine.
                </p>
            </div>
        </div>
    );
}
