import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { TopicHub } from '../components/TopicHub';
import { KofiWidget } from '../components/KofiWidget';
import { FeedbackButton } from '../components/FeedbackButton';
import { AdsBanner } from '../components/AdsBanner';

import { PWAPrompt } from '../components/PWAPrompt';
import { PWAUpdatePrompt } from '../components/PWAUpdatePrompt';
import { useState } from 'react';
import { cn } from '../utils/cn';

export function MainLayout() {
    const location = useLocation();
    const isArticlePage = location.pathname.includes('/resources/') && location.pathname !== '/resources';
    const [isCollapsed, setIsCollapsed] = useState(true);

    const excludedPaths = ['/terms', '/privacy', '/about', '/contact'];
    const showAds = !excludedPaths.includes(location.pathname);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
            <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
            <KofiWidget />
            <div className={cn(
                "min-h-screen flex flex-col transition-all duration-300 ease-in-out",
                isCollapsed ? "lg:ml-[72px]" : "lg:ml-64"
            )}>

                <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto relative">
                    <main className="flex-1 min-w-0 px-2 py-4 sm:px-4 lg:p-8 w-full">
                        <Breadcrumbs />
                        {!isArticlePage && <TopicHub />}
                        <div className="mt-4">
                            <Outlet />
                        </div>
                    </main>

                    {showAds && (
                        <div className="hidden lg:block lg:w-[340px] lg:p-8 lg:pl-0">
                            <AdsBanner />
                        </div>
                    )}
                </div>
                
                <Footer />
            </div>
            <PWAPrompt />
            <PWAUpdatePrompt />
            <FeedbackButton />
        </div>
    );
}

