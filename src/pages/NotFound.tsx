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
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
                <Home size={20} />
                Back to Home
            </Link>
        </div>
    );
}
