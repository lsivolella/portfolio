import { useLayoutEffect, useState, type ReactNode } from 'react';

import { readStorage, writeStorage } from '@/lib/storage';
import { toKebabCase } from '@/lib/toKebabCase';
import { ThemeContext } from './ThemeContext';
import { colorSchemes, isThemeName, themeNames, themes, type ColorScheme, type ThemeName } from './themes';

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
 * Finds the color scheme the operating system currently prefers.
 *
 * @returns The preferred scheme, or `undefined` if the system expresses none.
 */
function getSystemColorScheme(): ColorScheme | undefined {
    return colorSchemes.find(
        (scheme) => window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches,
    );
}

/**
 * Resolves the theme to start with: the saved choice if it is still a valid
 * theme, otherwise the first theme matching the system preference, otherwise
 * the first theme declared.
 *
 * @returns The initial theme name.
 */
function getInitialTheme(): ThemeName {
    const saved = readStorage(STORAGE_KEY);
    if (isThemeName(saved)) {
        return saved;
    }

    const scheme = getSystemColorScheme();
    return themeNames.find((name) => themes[name].colorScheme === scheme) ?? themeNames[0];
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
    const [theme, setThemeState] = useState<ThemeName>(getInitialTheme);

    useLayoutEffect(() => {
        applyTheme(theme);
    }, [theme]);

    /**
     * Selects a theme and remembers the choice.
     *
     * @param theme - Theme to activate.
     */
    function setTheme(theme: ThemeName): void {
        setThemeState(theme);
        writeStorage(STORAGE_KEY, theme);
    }

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    );
}

export default ThemeProvider;