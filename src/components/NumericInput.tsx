import React from 'react';

interface NumericInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type'> {
    value: number;
    onValueChange: (val: number) => void;
    label?: string;
}

/**
 * A numeric input that shows an empty field instead of "0" when the value is 0.
 * This allows users to clear the field naturally with backspace.
 * When the field is blurred while empty, it resets to 0 internally.
 */
export function NumericInput({ value, onValueChange, label, className = '', ...props }: NumericInputProps) {
    const displayValue = value === 0 ? '' : String(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        if (raw === '' || raw === '-') {
            onValueChange(0);
            return;
        }
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) {
            onValueChange(parsed);
        }
    };

    return (
        <input
            type="number"
            value={displayValue}
            onChange={handleChange}
            placeholder={props.placeholder || '0'}
            className={className}
            {...props}
        />
    );
}
