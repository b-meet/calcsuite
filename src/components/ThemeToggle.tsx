import { Moon, Sun } from "lucide-react"

import { useTheme } from "../context/ThemeContext"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!document.startViewTransition) {
            setTheme(theme === "light" ? "dark" : "light")
            return
        }

        const x = e.clientX
        const y = e.clientY
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y)
        )

        const transition = document.startViewTransition(() => {
            setTheme(theme === "light" ? "dark" : "light")
        })

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ]

            document.documentElement.animate(
                {
                    clipPath: clipPath,
                },
                {
                    duration: 400,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            )
        })
    }

    return (
        <button
            onClick={toggleTheme}
            className="group relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative z-10">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute top-0 left-0 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
