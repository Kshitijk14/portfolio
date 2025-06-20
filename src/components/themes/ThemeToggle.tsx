"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="rounded-md p-2 w-9 h-9 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-gray-400" />
            </div>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
        >
        {theme === "dark" ? (
            <Sun className="w-5 h-5" />
        ) : (
            <Moon className="w-5 h-5" />
        )}
        </button>
    );
}