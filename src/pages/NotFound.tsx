import { Link } from 'react-router-dom';
import { Home, Calculator } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <div className="bg-blue-50 p-6 rounded-full mb-6">
                <Calculator size={48} className="text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
            <p className="text-slate-500 mb-8 max-w-md">
                The calculator or page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors mb-12"
            >
                <Home size={20} />
                Back to Home
            </Link>

            <div className="w-full max-w-lg">
                <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                    Popular Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <Link to="/calculator/compound-interest" className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                        <span className="font-medium text-slate-700 group-hover:text-blue-600 block">Compound Interest</span>
                        <span className="text-xs text-slate-500">Grow your wealth</span>
                    </Link>
                    <Link to="/calculator/bmi" className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                        <span className="font-medium text-slate-700 group-hover:text-blue-600 block">BMI Calculator</span>
                        <span className="text-xs text-slate-500">Check your health</span>
                    </Link>
                    <Link to="/calculator/mortgage" className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                        <span className="font-medium text-slate-700 group-hover:text-blue-600 block">Mortgage Calculator</span>
                        <span className="text-xs text-slate-500">Plan home loans</span>
                    </Link>
                    <Link to="/calculator/percentage" className="p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                        <span className="font-medium text-slate-700 group-hover:text-blue-600 block">Percentage Calculator</span>
                        <span className="text-xs text-slate-500">Quick math</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
