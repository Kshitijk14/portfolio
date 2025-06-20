"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Prevents SSR mismatch
    }

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
        >
        {theme === "light" ? (
            <Moon className="w-5 h-5" />
        ) : (
            <Sun className="w-5 h-5" />
        )}
        </button>
    );
}