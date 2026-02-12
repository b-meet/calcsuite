import { useState, useCallback } from 'react';
import { Copy, RefreshCw, Check, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

export default function PasswordGenerator() {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState(12);
    const [options, setOptions] = useState({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
    });
    const [copied, setCopied] = useState(false);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('password-generator');

    const generatePassword = useCallback(() => {
        const chars = {
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
        };

        let allowedChars = '';
        if (options.uppercase) allowedChars += chars.uppercase;
        if (options.lowercase) allowedChars += chars.lowercase;
        if (options.numbers) allowedChars += chars.numbers;
        if (options.symbols) allowedChars += chars.symbols;

        if (allowedChars === '') return;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
        }
        setPassword(newPassword);
        setCopied(false);

        addHistory(
            { length, options },
            newPassword,
            `Len: ${length}, ${Object.entries(options).filter(([_, v]) => v).map(([k]) => k[0].toUpperCase()).join('')}`
        );
    }, [length, options, addHistory]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleHistorySelect = (item: any) => {
        setLength(item.inputs.length);
        setOptions(item.inputs.options);
        setPassword(item.result);
    };

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <div className="flex-1 font-mono text-xl md:text-2xl text-slate-800 dark:text-white break-all">
                    {password || 'Click Generate'}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={generatePassword}
                        className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        title="Generate New"
                    >
                        <RefreshCw size={24} />
                    </button>
                    <button
                        onClick={copyToClipboard}
                        disabled={!password}
                        className={`p-2 rounded-lg transition-colors ${copied ? 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20' : 'text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800'}`}
                        title="Copy to Clipboard"
                    >
                        {copied ? <Check size={24} /> : <Copy size={24} />}
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
                <div>
                    <label className="flex items-center justify-between mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <span>Password Length</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold">{length}</span>
                    </label>
                    <input
                        type="range"
                        min="6"
                        max="32"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 block mb-2">Include Characters</label>

                    <div className="grid grid-cols-2 gap-4">
                        {Object.keys(options).map((key) => (
                            <label key={key} className="flex items-center space-x-3 cursor-pointer p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <input
                                    type="checkbox"
                                    checked={options[key as keyof typeof options]}
                                    onChange={() => setOptions(prev => ({ ...prev, [key]: !prev[key as keyof typeof options] }))}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300 dark:border-slate-600"
                                />
                                <span className="text-slate-700 dark:text-slate-300 capitalize">{key}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    onClick={generatePassword}
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-none"
                >
                    Generate Password
                </button>
            </div>

            <CalculationHistory
                history={history}
                onSelect={handleHistorySelect}
                onClear={clearHistory}
                onRemove={removeHistoryItem}
            />
        </div>
    );
}
