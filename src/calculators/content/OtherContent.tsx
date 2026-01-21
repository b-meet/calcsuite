
export default function OtherContent() {
    return (
        <div className="prose prose-slate max-w-none mt-12 text-left">
            <h2>Essential Utilities for Everyday Life</h2>
            <p>
                In the digital age, efficiency is king. Our collection of utility tools—from password generation to unit conversion—is
                built to handle the specific, practical tasks that pop up in daily life, saving you time and ensuring accuracy.
            </p>

            <h3>Digital Security & Privacy</h3>
            <div className="my-4">
                <h4 className="mt-0">The Importance of Strong Passwords</h4>
                <p>
                    With cyber threats on the rise, your first line of defense is a strong password. A secure password should represent
                    high <strong>entropy</strong> (randomness). Humans are notoriously bad at being random; we pick birthdays, pet names,
                    or patterns like "123456".
                </p>
                <p><strong>A strong password should be:</strong></p>
                <ul className="mt-2">
                    <li>At least 12-16 characters long</li>
                    <li>A mix of uppercase, lowercase, numbers, and symbols</li>
                    <li>Unique (never used on another site)</li>
                </ul>
            </div>

            <h3>Universal Standards: Unit Conversion</h3>
            <p>
                Whether you are following an international recipe, traveling abroad, or working on a science project,
                dealing with different measurement systems (Metric vs. Imperial) is inevitable.
            </p>
            <ul>
                <li><strong>Metric System</strong>: Based on powers of 10. Used by almost the entire world and the scientific community. (Meters, Liters, Grams)</li>
                <li><strong>Imperial System</strong>: Used primarily in the United States. (Inches, Gallons, Pounds)</li>
            </ul>
            <p>
                Accurate conversion is vital. In 1999, a NASA Mars orbiter was lost in space because one team used metric units and another used imperial!
            </p>

            <h3>Academic Success</h3>
            <p>
                Tools like our GPA Calculator help students visualize their academic standing. Tracking your Grade Point Average allows you to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Set realistic semester goals</li>
                <li>Understand requirements for scholarships and honors</li>
                <li>Plan course loads effectively</li>
            </ul>
        </div>
    );
}
