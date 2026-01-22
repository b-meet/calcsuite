import { Link } from 'react-router-dom';
import { calculatorRegistry } from '../calculators/registry';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Group calculators by category
    const categories = {
        financial: calculatorRegistry.filter(c => c.category === 'financial'),
        health: calculatorRegistry.filter(c => c.category === 'health'),
        math: calculatorRegistry.filter(c => c.category === 'math'),
        other: calculatorRegistry.filter(c => c.category === 'other'),
        india: calculatorRegistry.filter(c => c.category === 'india'),
    };

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-20">
            <div className="container mx-auto px-4">

                {/* Top Section: Branding & Mission */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2 text-white mb-4">
                            <img src="/favicon.png" alt="CalcSuite" className="w-10 h-10 rounded-lg shadow-sm" />
                            <span className="text-xl font-bold tracking-tight">CalcSuite</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            CalcSuite is your go-to destination for accurate, free, and easy-to-use online calculators.
                            Whether you need to plan your mortgage, track your health, or solve complex math problems,
                            we have the right tool for you.
                        </p>
                    </div>

                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">India Tools</h4>
                            <ul className="space-y-2 text-sm">
                                {categories.india.map(calc => (
                                    <li key={calc.id}>
                                        <Link to={`/calculator/${calc.id}`} className="hover:text-amber-400 text-amber-100 transition-colors">
                                            {calc.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Financial</h4>
                            <ul className="space-y-2 text-sm">
                                {categories.financial.map(calc => (
                                    <li key={calc.id}>
                                        <Link to={`/calculator/${calc.id}`} className="hover:text-blue-400 transition-colors">
                                            {calc.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Health</h4>
                            <ul className="space-y-2 text-sm">
                                {categories.health.map(calc => (
                                    <li key={calc.id}>
                                        <Link to={`/calculator/${calc.id}`} className="hover:text-blue-400 transition-colors">
                                            {calc.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Math</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link to="/calculator/basic-math" className="hover:text-blue-400 transition-colors">Basic Calculator</Link>
                                </li>
                                <li>
                                    <Link to="/calculator/scientific" className="hover:text-blue-400 transition-colors">Scientific Calculator</Link>
                                </li>
                                {categories.math.map(calc => (
                                    <li key={calc.id}>
                                        <Link to={`/calculator/${calc.id}`} className="hover:text-blue-400 transition-colors">
                                            {calc.name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <Link to="/calculator/fraction" className="hover:text-blue-400 transition-colors">Fraction Calculator</Link>
                                </li>
                                <li>
                                    <Link to="/calculator/percentage" className="hover:text-blue-400 transition-colors">Percentage Calculator</Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Tools</h4>
                            <ul className="space-y-2 text-sm">
                                {categories.other.map(calc => (
                                    <li key={calc.id}>
                                        <Link to={`/calculator/${calc.id}`} className="hover:text-blue-400 transition-colors">
                                            {calc.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* SEO Content Section */}
                <div className="border-t border-slate-800 pt-8 space-y-6 text-sm text-slate-500">
                    <div>
                        <h5 className="text-slate-400 font-medium mb-2">About Our Calculators</h5>
                        <p>
                            Our suite of calculators is designed with precision and user experience in mind.
                            From the <strong>Investment Calculator</strong> that helps you predict compound growth to the
                            <strong>BMI Calculator</strong> for tracking health metrics, every tool is optimized for
                            accuracy and speed. All calculations are performed continuously in your browser for maximum privacy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h5 className="text-slate-400 font-medium mb-2">Financial Planning</h5>
                            <p>
                                Take control of your finances with our comprehensive financial tools.
                                Use the <strong>Mortgage Calculator</strong> to estimate monthly payments,
                                or the <strong>Salary Calculator</strong> to break down your earnings.
                                Our <strong>Auto Loan</strong> and <strong>Retirement Calculators</strong>
                                are essential for long-term financial health.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-slate-400 font-medium mb-2">India Specific Tools</h5>
                            <p>
                                We offer specialized tools for the Indian market, updated for FY 2025-26.
                                Calculate your <strong>HRA Exemption</strong>, check <strong>Home Loan Eligibility</strong> with FOIR,
                                or plan investments with our <strong>PPF</strong>, <strong>FD</strong>, and <strong>RD Calculators</strong>.
                                Navigate Indian tax laws with confidence.
                            </p>
                        </div>
                        <div>
                            <h5 className="text-slate-400 font-medium mb-2">Health & Wellness</h5>
                            <p>
                                Monitor your well-being with our health tools. The <strong>Body Fat</strong>,
                                <strong>BMR</strong>, and <strong>Calorie Calculators</strong> utilize
                                industry-standard formulas like Mifflin-St Jeor and U.S. Navy methods to
                                provide reliable estimates for your fitness journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar & Legal */}
                <div className="border-t border-slate-800 mt-12 pt-8">

                    {/* Global Disclaimer */}
                    <div className="bg-slate-800/50 rounded-xl p-6 mb-8 text-xs text-slate-500 leading-relaxed border border-slate-700/50">
                        <p className="font-semibold text-slate-400 mb-2">Disclaimer & Usage Agreement:</p>
                        <p className="mb-2">
                            The results provided by CalcSuite are for informational purposes only and should not be considered as professional financial, tax, or medical advice.
                            While we take updates seriously and strive to keep our formulas current with the latest regulations (including FY 2025-26 tax laws), there may be a lag in reflecting new changes.
                            We are not responsible for any decisions or losses incurred based on these calculations.
                        </p>
                        <p className="text-slate-400">
                            By performing any calculation on this site, you automatically agree to our <Link to="/terms" className="text-blue-400 hover:underline">Terms of Service</Link>. No further confirmation is required.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
                        <p>&copy; {currentYear} CalcSuite. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
