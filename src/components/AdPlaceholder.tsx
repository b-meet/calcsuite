import type { ComponentProps } from 'react';

type AdVariant = 'banner' | 'sidebar' | 'rectangle';

interface AdPlaceholderProps extends ComponentProps<'div'> {
    variant?: AdVariant;
    label?: string;
}

export function AdPlaceholder({ variant = 'banner', label = 'Ad Space', className = '', ...props }: AdPlaceholderProps) {
    // Dimensions based on common ad unit sizes
    const dimensions = {
        banner: 'h-24 w-full max-w-[728px]', // Leaderboard 728x90 approx
        sidebar: 'w-full h-[600px] max-w-[300px]', // Skyscraper
        rectangle: 'w-full h-[250px] max-w-[300px]' // Medium Rectangle
    };

    return (
        <div
            className={`
                bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg 
                flex items-center justify-center 
                opacity-50 hover:opacity-100 transition-opacity select-none
                ${dimensions[variant]} 
                ${className}
            `}
            {...props}
        >
            <span className="text-slate-400 font-medium text-xs uppercase tracking-widest">
                {label}
            </span>
        </div>
    );
}
