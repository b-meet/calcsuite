import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { AdPlaceholder } from '../components/AdPlaceholder';
import { KofiWidget } from '../components/KofiWidget';

export function MainLayout() {
    const location = useLocation();

    // Hide sidebar ads on legal pages to maintain compliance/focus
    const isLegalPage = ['/privacy', '/terms'].includes(location.pathname);

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Sidebar />
            <KofiWidget />
            <div className="lg:ml-64 min-h-screen flex flex-col transition-all duration-300">
                <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 lg:p-8 flex items-start gap-8">
                    {/* Main Content Area */}
                    <div className="flex-1 w-full min-w-0">
                        <Breadcrumbs />
                        <Outlet />
                    </div>

                    {/* Right Rails Ad - Desktop Only & Not on Legal Pages */}
                    {!isLegalPage && (
                        <aside className="hidden xl:block w-[300px] flex-shrink-0 space-y-6 sticky top-8">
                            <AdPlaceholder variant="sidebar" label="Sidebar Ad" />
                            <AdPlaceholder variant="rectangle" label="Sticky Ad" className="sticky top-8" />
                        </aside>
                    )}
                </main>
                <Footer />
            </div>
        </div>
    );
}
