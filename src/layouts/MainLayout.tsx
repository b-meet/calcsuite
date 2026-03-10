import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { TopicHub } from '../components/TopicHub';
import { KofiWidget } from '../components/KofiWidget';

import { HistoryPromoModal } from '../components/HistoryPromoModal';
import { PWAPrompt } from '../components/PWAPrompt';

export function MainLayout() {
    const location = useLocation();
    const isArticlePage = location.pathname.includes('/resources/') && location.pathname !== '/resources';

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
            <Sidebar />
            <KofiWidget />
            <HistoryPromoModal />
            <div className="lg:ml-64 min-h-screen flex flex-col transition-all duration-300">

                <main className="flex-1 max-w-7xl mx-auto px-2 py-4 sm:px-4 lg:p-8 w-full">
                    <Breadcrumbs />
                    {!isArticlePage && <TopicHub />}
                    <Outlet />
                </main>
                <Footer />
            </div>
            <PWAPrompt />
        </div>
    );
}
