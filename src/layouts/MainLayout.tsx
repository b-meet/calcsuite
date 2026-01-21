import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';

export function MainLayout() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Sidebar />
            <div className="lg:ml-64 min-h-screen flex flex-col transition-all duration-300">
                <main className="flex-1 max-w-7xl mx-auto p-4 lg:p-8 w-full">
                    <Breadcrumbs />
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
}
