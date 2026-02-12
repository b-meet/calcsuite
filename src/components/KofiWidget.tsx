import { Coffee } from 'lucide-react';
import { cn } from '../utils/cn';

export function KofiWidget() {
    return (
        <a
            href="https://ko-fi.com/bmeet"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-4 no-underline lg:hidden"
            aria-label="Support me on Ko-fi"
        >
            <div
                className={cn(
                    "group flex items-center gap-2",
                    "h-8 sm:h-10 w-8 sm:w-10 hover:w-36 px-[6px] sm:px-3 overflow-hidden",
                    "bg-[#00b9fe] text-white hover:bg-[#009ee0]",
                    "rounded-full shadow-lg hover:shadow-xl",
                    "transition-all duration-500 ease-in-out transform hover:-translate-y-1",
                    "font-medium text-sm sm:text-base cursor-pointer"
                )}
            >
                <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                    <Coffee className="animate-pulse" />
                </div>
                <span className="whitespace-nowrap transition-all duration-500 opacity-0 group-hover:opacity-100">
                    Support me
                </span>
            </div>
        </a>
    );
}
