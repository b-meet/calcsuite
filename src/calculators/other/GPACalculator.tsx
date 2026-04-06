import { useState } from 'react';
import { GraduationCap, Plus, Trash2, TrendingUp, BookOpen } from 'lucide-react';
import { useCalculatorHistory, type HistoryItem } from '../../hooks/useCalculatorHistory';
import { CalculationHistory } from '../../components/CalculationHistory';
import { useWidget } from '../../context/WidgetContext';

type GradeScale = 'letter4' | 'points10';

interface GradeOption {
    label: string;
    value: string;
    points: number;
}

interface Course {
    id: number;
    name: string;
    grade: string;
    credits: string;
}

interface GPAHistoryItem {
    inputs: {
        courses: Course[];
        scale?: GradeScale;
    };
}

const letterGradeOptions: GradeOption[] = [
    { label: 'A', value: 'A', points: 4.0 },
    { label: 'A-', value: 'A-', points: 3.7 },
    { label: 'B+', value: 'B+', points: 3.3 },
    { label: 'B', value: 'B', points: 3.0 },
    { label: 'B-', value: 'B-', points: 2.7 },
    { label: 'C+', value: 'C+', points: 2.3 },
    { label: 'C', value: 'C', points: 2.0 },
    { label: 'C-', value: 'C-', points: 1.7 },
    { label: 'D+', value: 'D+', points: 1.3 },
    { label: 'D', value: 'D', points: 1.0 },
    { label: 'F', value: 'F', points: 0.0 }
];

const pointGradeOptions: GradeOption[] = [
    { label: '10', value: '10', points: 10 },
    { label: '9', value: '9', points: 9 },
    { label: '8', value: '8', points: 8 },
    { label: '7', value: '7', points: 7 },
    { label: '6', value: '6', points: 6 },
    { label: '5', value: '5', points: 5 },
    { label: '4', value: '4', points: 4 },
    { label: '0', value: '0', points: 0 }
];

const gradeOptionsByScale: Record<GradeScale, GradeOption[]> = {
    letter4: letterGradeOptions,
    points10: pointGradeOptions
};

const defaultGradeByScale: Record<GradeScale, string> = {
    letter4: 'A',
    points10: '10'
};

const createCourse = (id: number, courseNumber: number, scale: GradeScale): Course => ({
    id,
    name: `Course ${courseNumber}`,
    grade: defaultGradeByScale[scale],
    credits: '3'
});

const getPointsForGrade = (scale: GradeScale, grade: string) => {
    const option = gradeOptionsByScale[scale].find((item) => item.value === grade);
    return option?.points || 0;
};

export default function GPACalculator() {
    const { isWidget } = useWidget();
    const [scale, setScale] = useState<GradeScale>('letter4');
    const [courses, setCourses] = useState<Course[]>([
        { id: 1, name: 'Course 1', grade: 'A', credits: '3' },
        { id: 2, name: 'Course 2', grade: 'B', credits: '3' },
        { id: 3, name: 'Course 3', grade: 'A-', credits: '4' }
    ]);

    const { history, addHistory, clearHistory, removeHistoryItem } = useCalculatorHistory('gpa');

    const gradeOptions = gradeOptionsByScale[scale];
    const totalCredits = courses.reduce((sum, course) => sum + (parseFloat(course.credits) || 0), 0);

    const addCourse = () => {
        setCourses((current) => [
            ...current,
            createCourse(Date.now(), current.length + 1, scale)
        ]);
    };

    const removeCourse = (id: number) => {
        setCourses((current) => current.filter((course) => course.id !== id));
    };

    const updateCourse = (id: number, field: keyof Course, value: string) => {
        setCourses((current) => current.map((course) => course.id === id ? { ...course, [field]: value } : course));
    };

    const handleScaleChange = (nextScale: GradeScale) => {
        if (nextScale === scale) return;

        setScale(nextScale);
        setCourses((current) => current.map((course, index) => ({
            ...course,
            grade: defaultGradeByScale[nextScale],
            name: course.name || `Course ${index + 1}`
        })));
    };

    const calculate = () => {
        let totalPoints = 0;
        let weightedCredits = 0;

        courses.forEach((course) => {
            const credits = parseFloat(course.credits) || 0;
            if (credits > 0) {
                totalPoints += getPointsForGrade(scale, course.grade) * credits;
                weightedCredits += credits;
            }
        });

        return weightedCredits > 0 ? totalPoints / weightedCredits : 0;
    };

    const gpa = calculate();

    const handleSave = () => {
        addHistory(
            { courses, scale },
            gpa.toFixed(2),
            `${courses.length} Courses, ${totalCredits} Credits`
        );
    };

    const handleHistorySelect = (item: HistoryItem) => {
        const inputs = item.inputs as GPAHistoryItem['inputs'];
        const historyScale = (inputs.scale || 'letter4') as GradeScale;
        setScale(historyScale);
        setCourses(inputs.courses.map((course: Course, index: number) => ({
            ...course,
            grade: course.grade || defaultGradeByScale[historyScale],
            name: course.name || `Course ${index + 1}`
        })));
    };

    const scoreLabel = scale === 'points10' ? 'SGPA / CGPA' : 'GPA';
    const scoreScale = scale === 'points10' ? '10.0' : '4.0';

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-6">
                <div className="space-y-6 order-2 xl:order-1">
                    <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <div>
                                <h3 className="font-semibold text-slate-800 dark:text-white m-0">Courses</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 mb-0">
                                    Add subjects, choose your grading scale, and update credits on mobile without horizontal scrolling.
                                </p>
                            </div>
                            <button
                                onClick={addCourse}
                                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                <Plus size={16} />
                                Add Course
                            </button>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Grade Scale</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <button
                                    onClick={() => handleScaleChange('letter4')}
                                    className={`rounded-2xl border p-4 text-left transition-colors ${scale === 'letter4'
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                                        }`}
                                >
                                    <div className="font-semibold text-slate-900 dark:text-white">4.0 Letter Scale</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Common GPA format with A, B, C grades.</div>
                                </button>
                                <button
                                    onClick={() => handleScaleChange('points10')}
                                    className={`rounded-2xl border p-4 text-left transition-colors ${scale === 'points10'
                                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'
                                        }`}
                                >
                                    <div className="font-semibold text-slate-900 dark:text-white">10.0 Grade Points</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Useful for many Indian SGPA and CGPA systems.</div>
                                </button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {courses.map((course, index) => (
                                <div
                                    key={course.id}
                                    className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                            Course {index + 1}
                                        </span>
                                        <button
                                            onClick={() => removeCourse(course.id)}
                                            className="rounded-lg p-2 text-slate-400 hover:text-red-500 hover:bg-white dark:hover:bg-slate-700 transition-colors"
                                            aria-label={`Remove course ${index + 1}`}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>

                                    <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_160px_110px]">
                                        <label className="block">
                                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Course Name</span>
                                            <input
                                                type="text"
                                                value={course.name}
                                                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                                                className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Subject name"
                                            />
                                        </label>

                                        <label className="block">
                                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Grade</span>
                                            <select
                                                value={course.grade}
                                                onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                                                className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                {gradeOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>

                                        <label className="block">
                                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Credits</span>
                                            <input
                                                type="number"
                                                min="0"
                                                step="0.5"
                                                value={course.credits}
                                                onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                                                className="mt-1 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {!isWidget && (
                        <button
                            onClick={handleSave}
                            className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center justify-center gap-2"
                        >
                            <TrendingUp size={18} />
                            Save to History
                        </button>
                    )}
                </div>

                <div className="order-1 xl:order-2">
                    <div className="bg-slate-900 dark:bg-slate-800 text-white p-6 rounded-3xl shadow-lg xl:sticky xl:top-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-white/10 rounded-2xl mb-4">
                                <GraduationCap size={32} className="text-yellow-400" />
                            </div>
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">{scoreLabel}</span>
                            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight">{gpa.toFixed(2)}</div>
                            <p className="mt-4 text-slate-400 text-xs text-center max-w-[18rem]">
                                Based on {courses.length} courses, {totalCredits} credits, and the {scoreScale} scale.
                            </p>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                                <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wide mb-2">
                                    <BookOpen size={14} />
                                    Courses
                                </div>
                                <div className="text-2xl font-bold text-white">{courses.length}</div>
                            </div>
                            <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                                <div className="flex items-center gap-2 text-slate-300 text-xs uppercase tracking-wide mb-2">
                                    <TrendingUp size={14} />
                                    Credits
                                </div>
                                <div className="text-2xl font-bold text-white">{totalCredits}</div>
                            </div>
                        </div>

                        {scale === 'points10' && (
                            <p className="mt-4 text-xs leading-relaxed text-slate-400">
                                Many Indian universities use their own SGPA, CGPA, and percentage conversion rules. Use this as a weighted grade-point estimate unless your college publishes a different formula.
                            </p>
                        )}
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
