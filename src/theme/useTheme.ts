import { useContext } from 'react';

import { ThemeContext, type ThemeContextValue } from './ThemeContext';

/**
 * Reads the current theme and the toggle function.
 *
 * @returns The theme context value.
 * @throws If called outside ThemeProvider.
 */
export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}