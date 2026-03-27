import { useState, useCallback } from 'react';
import { X, Share2, Download, Loader2 } from 'lucide-react';
import { cn } from '../utils/cn';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    size: number;
    elapsed: string;
    streak: number;
    date: string;
}

// ── Canvas-based image generation (pixel-perfect, no html2canvas) ────
// Render emoji as a color image via SVG foreignObject (works on Linux too)
function emojiToImage(emoji: string, sizePx: number): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${sizePx}" height="${sizePx}">
            <foreignObject width="100%" height="100%">
                <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:${sizePx * 0.75}px;line-height:${sizePx}px;text-align:center;">${emoji}</div>
            </foreignObject>
        </svg>`;
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    });
}

async function generateShareImage(
    size: number,
    elapsed: string,
    streak: number,
    date: string
): Promise<Blob | null> {
    try {
        const W = 600;
        const H = 320; // Reduced height
        const canvas = document.createElement('canvas');
        canvas.width = W * 2;
        canvas.height = H * 2;
        const ctx = canvas.getContext('2d');
        if (!ctx) return null;
        ctx.scale(2, 2);

        // ── Background gradient ──
        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, '#2563eb');
        grad.addColorStop(0.5, '#1d4ed8');
        grad.addColorStop(1, '#4338ca');
        ctx.fillStyle = grad;
        roundRect(ctx, 0, 0, W, H, 24);
        ctx.fill();

        // Decorative circles
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.beginPath();
        ctx.arc(-20, -20, 100, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(W + 30, H + 30, 130, 0, Math.PI * 2);
        ctx.fill();

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // ── Trophy emoji (color) ──
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.beginPath();
        ctx.arc(W / 2, 50, 28, 0, Math.PI * 2);
        ctx.fill();
        try {
            const trophyImg = await emojiToImage('🏆', 40);
            ctx.drawImage(trophyImg, W / 2 - 20, 50 - 20, 40, 40);
        } catch {
            ctx.fillStyle = '#FBBF24';
            ctx.font = 'bold 24px system-ui, sans-serif';
            ctx.fillText('★', W / 2, 50);
        }

        // ── Title ──
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold italic 20px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PUZZLE COMPLETE!', W / 2, 100);

        // Date
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.font = '500 12px system-ui, -apple-system, sans-serif';
        ctx.fillText(date, W / 2, 122);

        // ── Stats row ──
        const statsY = 180;
        const colWidth = W / 3;

        // Grid
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold italic 32px system-ui, -apple-system, sans-serif';
        ctx.fillText(`${size}×${size}`, colWidth * 0.5, statsY);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = 'bold 9px system-ui, -apple-system, sans-serif';
        ctx.fillText('GRID', colWidth * 0.5, statsY + 25);

        // Divider 1
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(colWidth - 0.5, statsY - 20, 1, 45);

        // Time
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold italic 32px ui-monospace, monospace';
        ctx.fillText(elapsed, colWidth * 1.5, statsY);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = 'bold 9px system-ui, -apple-system, sans-serif';
        ctx.fillText('TIME', colWidth * 1.5, statsY + 25);

        // Divider 2
        ctx.fillStyle = 'rgba(255,255,255,0.2)';
        ctx.fillRect(colWidth * 2 - 0.5, statsY - 20, 1, 45);

        // Streak — ⚡ emoji (color)
        try {
            const boltImg = await emojiToImage('⚡', 22);
            ctx.drawImage(boltImg, colWidth * 2.5 - 24, statsY - 13, 22, 22);
        } catch {
            ctx.fillStyle = '#FBBF24';
            ctx.font = 'bold 16px system-ui, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('⚡', colWidth * 2.5 - 12, statsY);
        }
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold italic 32px system-ui, -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(String(streak), colWidth * 2.5 + 8, statsY);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = 'bold 9px system-ui, -apple-system, sans-serif';
        ctx.fillText('STREAK', colWidth * 2.5, statsY + 25);

        // ── Branding pill ──
        const pillText = 'CalcSuite Brain Arena';
        ctx.font = 'bold 12px system-ui, -apple-system, sans-serif';
        const pillW = ctx.measureText(pillText).width + 30;
        const pillX = (W - pillW) / 2;
        const pillY = 245;

        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        roundRect(ctx, pillX, pillY, pillW, 30, 15);
        ctx.fill();

        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        ctx.textAlign = 'center';
        ctx.fillText(pillText, W / 2, pillY + 16);

        // ── URL line ──
        ctx.fillStyle = 'rgba(255,255,255,0.35)';
        ctx.font = '10px system-ui, -apple-system, sans-serif';
        ctx.fillText('calcsuite.xyz/kenken', W / 2, H - 15);

        // Export
        return new Promise(resolve => {
            canvas.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    } catch {
        return null;
    }
}

function roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
}

// ── Component ────────────────────────────────────────────────────────
export function KenKenShareModal({ isOpen, onClose, size, elapsed, streak, date }: ShareModalProps) {
    const [copied, setCopied] = useState(false);
    const [generating, setGenerating] = useState(false);

    if (!isOpen) return null;

    const shareText = `🧠 I solved today's ${size}×${size} KenKen in ${elapsed}!\n🔥 Streak: ${streak} day${streak !== 1 ? 's' : ''}\n\nTrain your brain: ${window.location.origin}/kenken?size=${size}`;
    const shareUrl = `${window.location.origin}/kenken?size=${size}`;

    const getBlob = useCallback(async () => {
        setGenerating(true);
        const blob = await generateShareImage(size, elapsed, streak, date);
        setGenerating(false);
        return blob;
    }, [size, elapsed, streak, date]);

    // Download image
    const handleDownload = async () => {
        const blob = await getBlob();
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `kenken-${size}x${size}-${date.replace(/\s/g, '-')}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    // Share with image via Web Share API
    const shareWithImage = async (fallbackUrl?: string) => {
        const blob = await getBlob();
        if (blob && navigator.canShare) {
            const file = new File([blob], `kenken-${size}x${size}.png`, { type: 'image/png' });
            const shareData = { text: shareText, files: [file] };
            if (navigator.canShare(shareData)) {
                try {
                    await navigator.share(shareData);
                    return;
                } catch (err) {
                    if ((err as Error).name === 'AbortError') return;
                }
            }
        }
        if (fallbackUrl) window.open(fallbackUrl, '_blank');
    };

    const shareWhatsApp = () => {
        shareWithImage(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`);
    };

    const shareTwitter = () => {
        const fallback = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`🧠 I solved today's ${size}×${size} KenKen in ${elapsed}! 🔥 Streak: ${streak} days`)}&url=${encodeURIComponent(shareUrl)}`;
        shareWithImage(fallback);
    };

    const handleCopy = async () => {
        const blob = await getBlob();
        if (blob) {
            try {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'image/png': blob,
                        'text/plain': new Blob([shareText], { type: 'text/plain' }),
                    }),
                ]);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                return;
            } catch { /* fallback to text */ }
        }
        try {
            await navigator.clipboard.writeText(shareText);
        } catch {
            const ta = document.createElement('textarea');
            ta.value = shareText;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/40 dark:bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />

            <div className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[24px] shadow-2xl relative overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-5 duration-500 border border-slate-200 dark:border-slate-800">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full z-10">
                    <X size={20} />
                </button>

                {/* Visual Preview Card (CSS-rendered, not captured) */}
                <div className="mx-4 mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-4 text-white text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 rounded-full -translate-x-8 -translate-y-8" />
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-x-10 translate-y-10" />

                        <div className="relative">
                            <div className="w-12 h-12 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-2">
                                <span className="text-2xl leading-none">🏆</span>
                            </div>
                            <h3 className="text-base font-black uppercase italic tracking-wide mb-0.5">Puzzle Complete!</h3>
                            <p className="text-white/60 text-[10px] font-medium mb-3">{date}</p>

                            <div className="flex items-center justify-center gap-5 mb-3">
                                <div className="text-center">
                                    <p className="text-2xl font-black italic">{size}×{size}</p>
                                    <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Grid</p>
                                </div>
                                <div className="w-px h-8 bg-white/20" />
                                <div className="text-center">
                                    <p className="text-2xl font-black italic font-mono">{elapsed}</p>
                                    <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Time</p>
                                </div>
                                <div className="w-px h-8 bg-white/20" />
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-sm leading-none">⚡</span>
                                        <p className="text-2xl font-black italic">{streak}</p>
                                    </div>
                                    <p className="text-[9px] text-white/50 font-bold uppercase tracking-widest">Streak</p>
                                </div>
                            </div>

                            <div className="bg-white/10 px-3 py-1.5 rounded-full inline-block">
                                <span className="text-[10px] font-bold tracking-wider">CalcSuite Brain Arena</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Share Buttons */}
                <div className="p-4 space-y-3">
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-center">
                        {generating ? 'Generating image…' : 'Share to'}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={shareWhatsApp} disabled={generating}
                            className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 border border-green-200/50 dark:border-green-800 transition-all active:scale-95 group disabled:opacity-50">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-600 group-hover:scale-110 transition-transform">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span className="text-sm font-bold text-green-700 dark:text-green-400">WhatsApp</span>
                        </button>

                        <button onClick={shareTwitter} disabled={generating}
                            className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all active:scale-95 group disabled:opacity-50">
                            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-slate-900 dark:fill-white group-hover:scale-110 transition-transform">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Post on X</span>
                        </button>
                    </div>

                    {/* Copy + Download row */}
                    <div className="grid grid-cols-2 gap-2">
                        <button onClick={handleCopy} disabled={generating}
                            className={cn(
                                "py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border disabled:opacity-50",
                                copied
                                    ? "bg-green-50 dark:bg-green-900/20 text-green-600 border-green-200 dark:border-green-800"
                                    : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700"
                            )}>
                            {generating ? <Loader2 size={16} className="animate-spin" /> : <Share2 size={16} />}
                            {copied ? '✓ Copied!' : 'Copy'}
                        </button>

                        <button onClick={handleDownload} disabled={generating}
                            className="py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 border bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 border-blue-200 dark:border-blue-800 disabled:opacity-50">
                            {generating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                            Save Image
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
