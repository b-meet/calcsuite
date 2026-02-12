import { useState } from 'react';
import { GraduationCap, Plus, Trash2, TrendingUp } from 'lucide-react';
import { useCalculatorHistory } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';

type Grade = 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'F';

interface Course {
    id: number;
    name: string;
    grade: Grade;
    credits: string;
}

const gradePoints: Record<Grade, number> = {
    'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0,
    'F': 0.0
};

export default function GPACalculator() {
    const [courses, setCourses] = useState<Course[]>([
        { id: 1, name: 'Course 1', grade: 'A', credits: '3' },
        { id: 2, name: 'Course 2', grade: 'B', credits: '3' },
        { id: 3, name: 'Course 3', grade: 'A-', credits: '4' }
    ]);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('gpa');

    const addCourse = () => {
        setCourses([...courses, { id: Date.now(), name: `Course ${courses.length + 1}`, grade: 'A', credits: '3' }]);
    };

    const removeCourse = (id: number) => {
        setCourses(courses.filter(c => c.id !== id));
    };

    const updateCourse = (id: number, field: keyof Course, value: string) => {
        setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
    };

    const calculate = () => {
        let totalPoints = 0;
        let totalCredits = 0;

        courses.forEach(c => {
            const cred = parseFloat(c.credits) || 0;
            if (cred > 0) {
                totalPoints += gradePoints[c.grade] * cred;
                totalCredits += cred;
            }
        });

        return totalCredits > 0 ? totalPoints / totalCredits : 0;
    };

    const gpa = calculate();

    const handleSave = () => {
        addHistory(
            { courses },
            gpa.toFixed(2),
            `${courses.length} Courses, ${courses.reduce((a, b) => a + (parseFloat(b.credits) || 0), 0)} Credits`
        );
    };

    const handleHistorySelect = (item: any) => {
        setCourses(item.inputs.courses);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-semibold text-slate-800 dark:text-white">Courses</h3>
                            <button onClick={addCourse} className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                                <Plus size={16} /> Add Course
                            </button>
                        </div>

                        <div className="space-y-4">
                            {courses.map(course => (
                                <div key={course.id} className="flex gap-3 items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                                    <input type="text" value={course.name} onChange={e => updateCourse(course.id, 'name', e.target.value)} className="flex-1 bg-transparent border-none text-sm font-medium focus:ring-0 p-0 text-slate-900 dark:text-white" placeholder="Course Name" />
                                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-600"></div>
                                    <select value={course.grade} onChange={e => updateCourse(course.id, 'grade', e.target.value)} className="bg-transparent border-none text-sm font-bold text-slate-700 dark:text-slate-200 focus:ring-0 cursor-pointer">
                                        {Object.keys(gradePoints).map(g => (
                                            <option key={g} value={g} className="text-slate-900">{g}</option>
                                        ))}
                                    </select>
                                    <div className="w-px h-6 bg-slate-200 dark:bg-slate-600"></div>
                                    <div className="flex items-center gap-1">
                                        <input type="number" value={course.credits} onChange={e => updateCourse(course.id, 'credits', e.target.value)} className="w-10 bg-transparent border-none text-sm text-right font-medium focus:ring-0 p-0 text-slate-900 dark:text-white" />
                                        <span className="text-xs text-slate-400">cr</span>
                                    </div>
                                    <button onClick={() => removeCourse(course.id)} className="text-slate-400 hover:text-red-500 ml-2">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleSave}
                            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center justify-center gap-2"
                        >
                            <TrendingUp size={18} />
                            Save to History
                        </button>
                    </div>
                </div>

                <div className="md:col-span-1">
                    <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-3xl shadow-lg sticky top-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-white/10 rounded-2xl mb-4">
                                <GraduationCap size={32} className="text-yellow-400" />
                            </div>
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Your GPA</span>
                            <div className="text-6xl font-black text-white tracking-tight">{gpa.toFixed(2)}</div>
                            <p className="mt-4 text-slate-400 text-xs text-center">
                                Based on {courses.length} courses and {courses.reduce((a, b) => a + (parseFloat(b.credits) || 0), 0)} credits.
                            </p>
                        </div>
                    </div>
                </div>
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
