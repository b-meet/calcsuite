
export default function BMIContent() {
    return (
        <div className="prose prose-slate max-w-none mt-12 text-left">
            <h2>Body Mass Index (BMI) Guide</h2>
            <p>
                The Body Mass Index (BMI) is a measure used to determine whether a person has a healthy weight for their height.
                It applies to most adult men and women aged 20 and over. For children and teens, BMI is interpreted differently.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8 not-prose">
                <h3 className="text-lg font-bold text-blue-900 mb-4">How to Use This BMI Calculator</h3>
                <ol className="list-decimal pl-5 space-y-2 text-blue-800">
                    <li><strong>Select your unit system:</strong> Choose Metric (kg/cm) or Imperial (lbs/in).</li>
                    <li><strong>Enter your weight:</strong> Input your current body weight.</li>
                    <li><strong>Enter your height:</strong> Input your height accurately.</li>
                    <li><strong>View your result:</strong> The calculator instantly shows your BMI score and category.</li>
                </ol>
            </div>

            <h3>How is BMI Calculated?</h3>
            <p>
                BMI is calculated by dividing a person's weight in kilograms by the square of their height in meters.
                The formula is as follows:
            </p>
            <div className="bg-slate-100 p-4 rounded-lg my-4 font-mono">
                BMI = kg / m²
            </div>
            <p>
                Where:
            </p>
            <ul>
                <li><strong>kg</strong> is a person's weight in kilograms</li>
                <li><strong>m²</strong> is their height in meters squared</li>
            </ul>
            <p>
                For Imperial units (pounds and inches), the formula is:
            </p>
            <div className="bg-slate-100 p-4 rounded-lg my-4 font-mono">
                BMI = (lbs / in²) x 703
            </div>

            <h3>BMI Categories</h3>
            <p>The standard weight status categories associated with BMI ranges for adults are:</p>
            <ul>
                <li><strong>Underweight</strong>: Below 18.5</li>
                <li><strong>Normal weight</strong>: 18.5 – 24.9</li>
                <li><strong>Overweight</strong>: 25.0 – 29.9</li>
                <li><strong>Obesity</strong>: 30.0 and Above</li>
            </ul>

            <h3>Limitations of BMI</h3>
            <p>
                While BMI is a useful screening tool, it is not a perfect measure of body fatness or health.
                It does not take into account factors such as muscle mass, bone density, overall body composition,
                and racial and sex differences.
            </p>
            <ul>
                <li>
                    <strong>Athletes</strong>: Athletes with high muscle mass may have a high BMI but not have excess body fat.
                </li>
                <li>
                    <strong>Aging</strong>: Older adults may have more body fat than younger adults with the same BMI.
                </li>
            </ul>

            <h3>Why is BMI Important?</h3>
            <p>
                Maintaining a BMI within the normal range is associated with a lower risk of chronic diseases such as:
            </p>
            <ul>
                <li>Type 2 diabetes</li>
                <li>Cardiovascular disease</li>
                <li>High blood pressure</li>
                <li>Certain cancers</li>
            </ul>
        </div>
    );
}
