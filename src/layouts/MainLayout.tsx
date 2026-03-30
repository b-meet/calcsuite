import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { TickerHub } from '../components/TickerHub';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { KofiWidget } from '../components/KofiWidget';
import { FeedbackButton } from '../components/FeedbackButton';
import { AsideAds } from '../components/AsideAds';

import { ArenaHook } from '../components/ArenaHook';
import { PWAPrompt } from '../components/PWAPrompt';
import { PWAUpdatePrompt } from '../components/PWAUpdatePrompt';
import { useState } from 'react';
import { cn } from '../utils/cn';

export function MainLayout() {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(true);

    const excludedPaths = ['/terms', '/privacy', '/about', '/contact', '/kenken', '/brain-training'];
    const showAds = !excludedPaths.some(path => location.pathname.startsWith(path));

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-colors duration-300">
            <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
            <TickerHub />
            <KofiWidget />
            <div className={cn(
                "min-h-screen flex flex-col transition-all duration-300 ease-in-out",
                isCollapsed ? "sm:ml-[72px]" : "sm:ml-64"
            )}>

                <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto relative">
                    <main className="flex-1 min-w-0 px-2 py-4 sm:px-4 lg:p-8 w-full">
                        <Breadcrumbs />
                        <div className="mt-4">
                            <ArenaHook />
                            <Outlet />
                        </div>
                    </main>

                    {showAds && (
                        <div className="hidden lg:block lg:w-[360px] lg:p-8 lg:pl-0">
                            <AsideAds />
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

