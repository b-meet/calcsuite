import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../utils/cn';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    className?: string;
    position?: 'right' | 'top' | 'bottom' | 'left';
    enabled?: boolean;
}

export function Tooltip({ 
    content, 
    children, 
    className, 
    position = 'right',
    enabled = true 
}: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const targetRef = useRef<HTMLDivElement>(null);

    const updateCoords = () => {
        if (targetRef.current) {
            const rect = targetRef.current.getBoundingClientRect();
            let top = 0;
            let left = 0;

            switch (position) {
                case 'right':
                    top = rect.top + rect.height / 2;
                    left = rect.right + 8;
                    break;
                case 'left':
                    top = rect.top + rect.height / 2;
                    left = rect.left - 8;
                    break;
                case 'top':
                    top = rect.top - 8;
                    left = rect.left + rect.width / 2;
                    break;
                case 'bottom':
                    top = rect.bottom + 8;
                    left = rect.left + rect.width / 2;
                    break;
            }
            setCoords({ top, left });
        }
    };

    const handleMouseEnter = () => {
        if (targetRef.current) {
            updateCoords();
            setIsVisible(true);
        }
    };

    useEffect(() => {
        if (isVisible) {
            window.addEventListener('scroll', updateCoords, true);
            window.addEventListener('resize', updateCoords);
            return () => {
                window.removeEventListener('scroll', updateCoords, true);
                window.removeEventListener('resize', updateCoords);
            };
        }
    }, [isVisible]);

    if (!enabled) return <>{children}</>;

    const positionClasses = {
        right: "-translate-y-1/2",
        left: "-translate-x-full -translate-y-1/2",
        top: "-translate-x-1/2 -translate-y-full",
        bottom: "-translate-x-1/2",
    };

    return (
        <div 
            ref={targetRef}
            className="flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && coords.top !== 0 && (
                <div 
                    style={{ 
                        top: `${coords.top}px`, 
                        left: `${coords.left}px` 
                    }}
                    className={cn(
                        "fixed z-[9999] px-2 py-1 text-xs font-medium text-white bg-slate-900 dark:bg-slate-800 rounded-md shadow-lg whitespace-nowrap pointer-events-none animate-in fade-in zoom-in duration-200",
                        positionClasses[position],
                        className
                    )}
                >
                    {content}
                    {/* Arrow */}
                    <div className={cn(
                        "absolute w-2 h-2 bg-slate-900 dark:bg-slate-800 rotate-45",
                        position === 'right' && "-left-1 top-1/2 -translate-y-1/2",
                        position === 'left' && "-right-1 top-1/2 -translate-y-1/2",
                        position === 'top' && "-bottom-1 left-1/2 -translate-x-1/2",
                        position === 'bottom' && "-top-1 left-1/2 -translate-x-1/2",
                    )} />
                </div>
            )}
        </div>
    );
}

