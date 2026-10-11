import { createContext } from 'react';

import type { ThemeName } from './themes';

/**
 * Value exposed to the component tree by ThemeProvider.
 */
export interface ThemeContextValue {
    /** Currently active theme. */
    theme: ThemeName;
    /** Switches between light and dark. */
    toggleTheme: () => void;
}

/**
 * Holds the theme state. It is `undefined` outside ThemeProvider, which
 * `useTheme` turns into an explicit error.
 */
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);