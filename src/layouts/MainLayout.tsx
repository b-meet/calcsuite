import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { TickerHub } from '../components/TickerHub';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import { KofiWidget } from '../components/KofiWidget';
import { AsideAds } from '../components/AsideAds';

import { ArenaHook } from '../components/ArenaHook';
import { PWAPrompt } from '../components/PWAPrompt';
import { PWAUpdatePrompt } from '../components/PWAUpdatePrompt';
import { JSMFloatingBanner } from '../components/JSMFloatingBanner';
import { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

export function MainLayout() {
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(() => {
        const saved = localStorage.getItem('sidebar-collapsed');
        return saved !== null ? JSON.parse(saved) : true;
    });

    useEffect(() => {
        localStorage.setItem('sidebar-collapsed', JSON.stringify(isCollapsed));
    }, [isCollapsed]);

    const excludedPaths = ['/terms', '/privacy', '/about', '/contact', '/kenken', '/brain-training', '/widget-generator'];
    const showAds = !excludedPaths.some(path => location.pathname.startsWith(path));

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
            <KofiWidget />
            <div className={cn(
                "min-h-screen flex flex-col transition-all duration-300 ease-in-out",
                isCollapsed ? "sm:ml-[72px]" : "sm:ml-64"
            )}>
                <TickerHub />

                <div className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto relative">
                    <main className="flex-1 min-w-0 px-2 py-4 sm:px-3 lg:px-4 lg:pb-6 lg:pt-4 w-full">
                        <Breadcrumbs />
                        <div>
                            <ArenaHook />
                            <Outlet />
                        </div>
                    </main>

                    {showAds && (
                        <div className="hidden lg:block lg:w-[296px] lg:px-4 lg:pl-0 lg:pb-6 lg:pt-4">
                            <AsideAds />
                        </div>
                    )}
                </div>

                <Footer />
            </div>
            <PWAPrompt />
            <PWAUpdatePrompt />
            <JSMFloatingBanner isCollapsed={isCollapsed} hasAside={showAds} />
        </div>
    );
}
