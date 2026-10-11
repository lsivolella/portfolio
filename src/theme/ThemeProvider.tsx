import { useLayoutEffect, useState, type ReactNode } from 'react';

import { toKebabCase } from '@/lib/toKebabCase';

import { ThemeContext } from './ThemeContext';
import { isThemeName, themeNames, themes, type ThemeName } from './themes';

/**
 * localStorage key under which the user's explicit choice is saved.
 */
const STORAGE_KEY = 'theme';

/**
 * Props for ThemeProvider.
 */
interface ThemeProviderProps {
    /** Application tree that will have access to the theme. */
    children: ReactNode;
}

/**
 * Resolves the theme to start with: the saved choice if it is still a valid
 * theme, otherwise the first theme matching the system color scheme,
 * otherwise the first theme declared.
 *
 * @returns The initial theme name.
 */
function getInitialTheme(): ThemeName {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (isThemeName(saved)) {
            return saved;
        }
    } catch {
        /** localStorage can throw in private windows or when blocked; ignore it. */
    }

    const systemScheme = window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark';

    const match = themeNames.find((name) => themes[name].colorScheme === systemScheme);
    return match ?? themeNames[0];
}

/**
 * Writes every token of a theme as a `--theme-*` CSS variable on `<html>`
 * and tells the browser which color scheme is active.
 *
 * @param name - Theme to apply.
 */
function applyTheme(name: ThemeName): void {
    const root = document.documentElement;
    const { colorScheme, tokens } = themes[name];

    for (const [key, value] of Object.entries(tokens)) {
        root.style.setProperty(`--theme-${toKebabCase(key)}`, value);
    }

    root.style.colorScheme = colorScheme;
}

/**
 * Owns the theme state and keeps the page, the CSS variables and
 * localStorage in sync with it.
 */
function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<ThemeName>(getInitialTheme);

    useLayoutEffect(() => {
        applyTheme(theme);
    }, [theme]);

    /**
     * Advances to the next theme in declaration order, wrapping around,
     * and remembers the choice. With two themes this is a plain toggle.
     */
    function toggleTheme(): void {
        const next = themeNames[(themeNames.indexOf(theme) + 1) % themeNames.length];
        setTheme(next);

        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            /** Persistence is a convenience; the switch still works without it. */
        }
    }

    return (
        <ThemeContext value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext>
    );
}

export default ThemeProvider;