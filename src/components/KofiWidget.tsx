import { Coffee } from 'lucide-react';
import { cn } from '../utils/cn';

export function KofiWidget() {
    return (
        <a
            href="https://ko-fi.com/bmeet"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-4 no-underline"
            aria-label="Support me on Ko-fi"
        >
            <div
                className={cn(
                    "group flex items-center justify-center gap-2",
                    "h-12 px-5 min-w-[50px]",
                    "bg-[#00b9fe] text-white hover:bg-[#009ee0]",
                    "rounded-full shadow-lg hover:shadow-xl",
                    "transition-all duration-300 transform hover:-translate-y-1",
                    "font-medium text-sm sm:text-base cursor-pointer"
                )}
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Coffee className="w-6 h-6 animate-pulse" />
                </div>
                <span className="whitespace-nowrap transition-all duration-300 w-auto opacity-100">
                    Support me
                </span>
            </div>
        </a>
    );
}
