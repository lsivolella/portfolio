/**
 * A complete theme: its tokens plus the browser color scheme it belongs to.
 */
export interface ThemeDefinition {
    /** Whether this theme is light or dark, used for the system preference and native controls. */
    colorScheme: 'light' | 'dark';
    /** Color and font values for this theme. */
    tokens: ThemeTokens;
}

/**
 * Every label a theme must define. Both themes are typed against this
 * interface, so a missing label is a compile error.
 */
export interface ThemeTokens {
    /** Page background. */
    background: string;
    /** Cards, panels and other raised areas. */
    surface: string;
    /** Borders and divider lines. */
    border: string;
    /** Main text color. */
    foreground: string;
    /** Secondary text color. */
    muted: string;
    /** Brand color for links, highlights and primary buttons. */
    accent: string;
    /** Text color to use on top of `accent`. */
    accentForeground: string;
    /** Small attention elements such as badges. */
    highlight: string;
    /** Font family for headings and the name. */
    fontDisplay: string;
    /** Font family for navigation and small labels. */
    fontLabel: string;
}

/**
 * All available themes. To add a new one, add an entry here; the type, the
 * toggle and the initial-theme logic pick it up automatically.
 */
export const themes = {
    light: {
        colorScheme: 'light',
        tokens: {
            background: '#F4F4F2',
            surface: '#FFFFFF',
            border: '#111111',
            foreground: '#111111',
            muted: '#5C5C5C',
            accent: '#B3261E',
            accentForeground: '#F4F4F2',
            highlight: '#E3B01E',
            fontDisplay: '"Archivo Black", Arial, sans-serif',
            fontLabel: '"Barlow Condensed", Arial Narrow, sans-serif',
        },
    },
    dark: {
        colorScheme: 'dark',
        tokens: {
            background: '#0B0B0B',
            surface: '#161616',
            border: '#2A2A2A',
            foreground: '#F2F2F2',
            muted: '#A8A8A8',
            accent: '#E3B01E',
            accentForeground: '#0B0B0B',
            highlight: '#D63A2F',
            fontDisplay: '"Alfa Slab One", Georgia, serif',
            fontLabel: '"Oswald Variable", Arial Narrow, sans-serif',
        },
    },
} satisfies Record<string, ThemeDefinition>;

/**
 * Union of the theme names, derived from the keys of `themes`.
 */
export type ThemeName = keyof typeof themes;

/**
 * Theme names as a runtime array, in declaration order.
 */
export const themeNames = Object.keys(themes) as ThemeName[];

/**
 * Checks whether an unknown value is the name of an existing theme.
 *
 * @param value - Value to check, for example read from localStorage.
 * @returns True if `value` is a valid theme name.
 */
export function isThemeName(value: unknown): value is ThemeName {
    return typeof value === 'string' && Object.hasOwn(themes, value);
}