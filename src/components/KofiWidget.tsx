import { useState } from 'react';
import { Coffee, X } from 'lucide-react';
import { cn } from '../utils/cn';

export function KofiWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start gap-4">
            {/* Iframe Container */}
            <div
                className={cn(
                    "transition-all duration-300 ease-in-out origin-bottom-left overflow-hidden bg-white rounded-xl shadow-2xl",
                    isOpen
                        ? "w-[320px] h-[650px] opacity-100 scale-100"
                        : "w-0 h-0 opacity-0 scale-95 Pointer-events-none"
                )}
            >
                {isOpen && (
                    <iframe
                        id="kofiframe"
                        src="https://ko-fi.com/bmeet/?hidefeed=true&widget=true&embed=true&preview=true"
                        className="border-none w-full h-full"
                        title="bmeet"
                        allow="payment; fullscreen; clipboard-read; clipboard-write"
                    />
                )}
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "group flex items-center justify-center gap-2",
                    "h-12 px-5 min-w-[50px]",
                    "bg-[#00b9fe] text-white hover:bg-[#009ee0]",
                    "rounded-full shadow-lg hover:shadow-xl",
                    "transition-all duration-300 transform hover:-translate-y-1",
                    "font-medium text-sm sm:text-base"
                )}
                aria-label={isOpen ? "Close donation widget" : "Support me on Ko-fi"}
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <Coffee
                        className={cn(
                            "w-6 h-6 absolute transition-all duration-300",
                            isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100 animate-pulse"
                        )}
                    />
                    <X
                        className={cn(
                            "w-6 h-6 absolute transition-all duration-300",
                            isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                        )}
                    />
                </div>
                <span className={cn(
                    "whitespace-nowrap overflow-hidden transition-all duration-300",
                    isOpen ? "w-0 opacity-0 px-0" : "w-auto opacity-100"
                )}>
                    Support me
                </span>
            </button>
        </div>
    );
}
