
export default function MathContent() {
    return (
        <div className="prose prose-slate max-w-none mt-12 text-left">
            <h2>Mathematics: The Language of the Universe</h2>
            <p>
                Mathematics is more than just numbers on a page; it is the fundamental logic that governs everything from the
                structure of a seashell to the orbit of planets. Our mathematical tools are designed to simplify these complex
                operations, making accurate calculation accessible for students, professionals, and enthusiasts.
            </p>

            <h3>Why Math Matters</h3>
            <p>
                In an increasingly data-driven world, mathematical literacy is a superpower. It enhances critical thinking,
                problem-solving abilities, and logical reasoning.
            </p>
            <ul>
                <li><strong>Everyday Utility</strong>: Calculating tips, understanding discounts during sales, and measuring ingredients for recipes.</li>
                <li><strong>Professional Necessity</strong>: Engineering, coding, economics, and architecture all rely heavily on precise mathematical foundations.</li>
                <li><strong>Academic Excellence</strong>: Mastering these concepts is crucial for standardized testing and higher education in STEM fields.</li>
            </ul>

            <h3>Core Concepts Explained</h3>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="mt-0">Trigonometry</h4>
                    <p className="text-sm m-0">
                        The study of relationships between side lengths and angles of triangles. Essential for navigation, astronomy, and building construction.
                    </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="mt-0">Percentage & Ratios</h4>
                    <p className="text-sm m-0">
                        Expressing a number as a fraction of 100. Crucial for understanding interest rates, tax, probability, and statistics.
                    </p>
                </div>
            </div>

            <h3>Tips for Mathematical Accuracy</h3>
            <ul>
                <li>
                    <strong>Order of Operations (PEMDAS)</strong>: Always remember the sequence: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction.
                </li>
                <li>
                    <strong>Unit Consistency</strong>: Ensure all your measurements are in the same units (e.g., don't add inches to centimeters) before calculating.
                </li>
                <li>
                    <strong>Estimation</strong>: Before using a calculator, make a rough estimate. If your calculator says 1000 and you expected 10, check your input.
                </li>
            </ul>

            <h3>Common Questions</h3>
            <details className="group">
                <summary className="font-bold cursor-pointer list-none flex items-center">
                    <span className="mr-2">▶</span> Why do I need a scientific calculator?
                </summary>
                <p className="pl-6 mt-2">
                    Standard calculators handle basic arithmetic (`+, -, *, /`). Scientific calculators handle advanced functions like
                    trigonometry (`sin, cos, tan`), logarithms (`log`), and exponents, which are required for algebra, geometry, and physics.
                </p>
            </details>
        </div>
    );
}
