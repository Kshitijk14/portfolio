"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider 
            {...props}
            enableSystem={true}
            disableTransitionOnChange={false}
            storageKey="theme"
        >
                {children}
        </NextThemesProvider>
    );
}