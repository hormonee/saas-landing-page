"use client";

import React from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    // Ensure we don't render until we know the theme to avoid hydration mismatch
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="size-10 shrink-0"></div>;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
        >
            <span className="material-symbols-outlined">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
        </button>
    );
}
