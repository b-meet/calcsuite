import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

interface FormulaBlockProps {
    formula: string;
}

export default function FormulaBlock({ formula }: FormulaBlockProps) {
    return <BlockMath math={formula} />;
}
