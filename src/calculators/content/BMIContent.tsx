
export default function BMIContent() {
    return (
        <div className="prose prose-slate dark:prose-invert max-w-none mt-12 text-left">
            <h2 className="text-slate-900 dark:text-white">Understanding Body Mass Index (BMI)</h2>
            <p className="text-slate-600 dark:text-slate-200">
                The Body Mass Index (BMI) is a scientifically recognized measure used globally to assess whether a person has a healthy weight for their height.
                It acts as a screening tool to categorize individuals into underweight, healthy weight, overweight, and obesity groups.
                While it does not directly measure body fat, it is strongly correlated with metabolic disease risks.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/30 my-8 not-prose">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-200 mb-4">How to Use This BMI Calculator</h3>
                <ol className="list-decimal pl-5 space-y-2 text-blue-800 dark:text-blue-200">
                    <li><strong>Select Unit System:</strong> Toggle between Metric (kg/cm) or Imperial (lbs/in) based on your preference.</li>
                    <li><strong>Input Accurate Details:</strong> Enter your exact current weight and height.</li>
                    <li><strong>Analyze Result:</strong> Instantaneously view your BMI score, health category, and Ponderal Index.</li>
                </ol>
            </div>

            <h3 className="text-slate-900 dark:text-white">BMI Ranges & Health Categories</h3>
            <p className="text-slate-600 dark:text-slate-200">
                The World Health Organization (WHO) defines the following standard BMI categories for adults (20+ years):
            </p>
            <div className="overflow-x-auto my-6">
                <table className="w-full text-sm text-left border-collapse">
                    <thead className="text-xs text-slate-700 dark:text-slate-200 uppercase bg-slate-100 dark:bg-slate-800">
                        <tr>
                            <th className="px-6 py-3 border border-slate-200 dark:border-slate-700">BMI Range (kg/m²)</th>
                            <th className="px-6 py-3 border border-slate-200 dark:border-slate-700">Weight Status</th>
                            <th className="px-6 py-3 border border-slate-200 dark:border-slate-700">Health Risk</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Below 18.5</td>
                            <td className="px-6 py-4 text-blue-600 dark:text-blue-300 font-semibold">Underweight</td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">Moderate (Nutritional deficiency)</td>
                        </tr>
                        <tr className="bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">18.5 – 24.9</td>
                            <td className="px-6 py-4 text-green-600 dark:text-green-300 font-semibold">Normal Weight</td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">Low Risk</td>
                        </tr>
                        <tr className="bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">25.0 – 29.9</td>
                            <td className="px-6 py-4 text-yellow-600 dark:text-yellow-300 font-semibold">Overweight</td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">Increased</td>
                        </tr>
                        <tr className="bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">30.0 – 34.9</td>
                            <td className="px-6 py-4 text-orange-600 dark:text-orange-300 font-semibold">Obesity Class I</td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">High</td>
                        </tr>
                        <tr className="bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                            <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">35.0 and Above</td>
                            <td className="px-6 py-4 text-red-600 dark:text-red-300 font-semibold">Obesity Class II/III</td>
                            <td className="px-6 py-4 text-slate-600 dark:text-slate-200">Very High</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-slate-900 dark:text-white">Health Risks Associated with Weight</h3>
            <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                    <h4 className="text-red-700 dark:text-red-300 font-bold mb-2">Risks of Being Overweight</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-200">
                        <li><strong>Cardiovascular Disease:</strong> Increased risk of high blood pressure, stroke, and heart attacks.</li>
                        <li><strong>Type 2 Diabetes:</strong> Excess weight is a primary contributor to insulin resistance.</li>
                        <li><strong>Joint Issues:</strong> Conditions like Osteoarthritis due to excess stress on joints.</li>
                        <li><strong>Sleep Apnea:</strong> Breathing difficulties during sleep.</li>
                        <li><strong>Mental Health:</strong> Higher correlation with clinical depression and anxiety.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-blue-700 dark:text-blue-300 font-bold mb-2">Risks of Being Underweight</h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-200">
                        <li><strong>Malnutrition:</strong> Deficiency in vitamins, minerals, and anemia.</li>
                        <li><strong>Weakened Immunity:</strong> Reduced body ability to fight infections.</li>
                        <li><strong>Osteoporosis:</strong> Weak bones and increased risk of fractures.</li>
                        <li><strong>Hormonal Imbalance:</strong> Potential reproductive issues and irregular cycles.</li>
                        <li><strong>Development Issues:</strong> Especially critical in children and teenagers.</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-slate-900 dark:text-white">Mathematical Formula</h3>
            <p className="text-slate-600 dark:text-slate-200">
                The standard formula used to calculate BMI varies by unit system:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-slate-700 dark:text-white text-center mb-2">Metric System</p>
                    <p className="font-mono text-center text-lg text-slate-600 dark:text-slate-200">BMI = weight (kg) / height² (m)</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-slate-700 dark:text-white text-center mb-2">Imperial System</p>
                    <p className="font-mono text-center text-lg text-slate-600 dark:text-slate-200">BMI = 703 × weight (lbs) / height² (in)</p>
                </div>
            </div>

            <h3 className="text-slate-900 dark:text-white">Limitations of BMI</h3>
            <p className="text-slate-600 dark:text-slate-200">
                While valuable, BMI is not a flawless diagnostic tool. It measures excess weight rather than excess fat.
                It fails to distinguish between muscle mass, bone density, and fat mass.
            </p>
            <ul className="text-slate-600 dark:text-slate-200">
                <li><strong>Athletes vs. Non-Athletes:</strong> A bodybuilder may have a "Obese" BMI due to muscle weight, despite having low body fat.</li>
                <li><strong>Age Factor:</strong> Older adults tend to have more body fat than younger adults for the same BMI.</li>
                <li><strong>Gender Differences:</strong> Women naturally possess more body fat than men at the same BMI.</li>
            </ul>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-100 dark:border-green-900/30 my-8">
                <h3 className="text-green-900 dark:text-green-200 mt-0">Steps to Maintain Optimum Health</h3>
                <ul className="space-y-2 mb-0 text-slate-600 dark:text-green-100">
                    <li><strong>Balanced Diet:</strong> Focus on whole grains, proteins, and plenty of vegetables. Avoid processed sugars.</li>
                    <li><strong>Regular Physics Activity:</strong> Aim for at least 150 minutes of moderate aerobic activity per week.</li>
                    <li><strong>Hydration:</strong> Drink adequate water to maintain metabolic function.</li>
                    <li><strong>Regular Screening:</strong> Use tools like this BMI calculator and consult doctors for comprehensive checkups.</li>
                </ul>
            </div>

            <h3 className="text-slate-900 dark:text-white">What is Ponderal Index?</h3>
            <p className="text-slate-600 dark:text-slate-200">
                The Ponderal Index (PI) is similar to BMI but provides a more accurate assessment for taller or shorter individuals.
                While BMI divides weight by height squared, the Ponderal Index divides weight by height <strong>cubed</strong>.
                This makes it less biased towards height extremes.
            </p>
        </div>
    );
}
