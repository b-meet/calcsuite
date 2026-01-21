import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

export function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar />
            <main className="lg:ml-64 min-h-screen transition-all duration-300">
                <div className="max-w-7xl mx-auto p-4 lg:p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
