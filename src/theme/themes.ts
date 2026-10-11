/**
 * Color schemes the browser understands. Single source for the type and for
 * the system-preference lookup.
 */
export const colorSchemes = ['light', 'dark'] as const;

/**
 * Union of the color schemes, derived from `colorSchemes`.
 */
export type ColorScheme = (typeof colorSchemes)[number];

/**
 * A complete theme: its tokens plus the browser color scheme it belongs to.
 */
export interface ThemeDefinition {
    /** Color scheme this theme belongs to, used for system preference and native controls. */
    colorScheme: ColorScheme;
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
 * Raw colors, named by what they are. Themes reference these instead of
 * repeating hex values.
 */
const palette = {
    paper: '#F4F4F2',
    white: '#FFFFFF',
    ink: '#111111',
    graphite: '#5C5C5C',
    crimson: '#B3261E',
    gold: '#E3B01E',
    black: '#0B0B0B',
    charcoal: '#161616',
    steel: '#2A2A2A',
    snow: '#F2F2F2',
    silver: '#A8A8A8',
    red: '#D63A2F',
} as const;

/**
 * Font stacks.
 */
const fonts = {
    archivo: '"Archivo Black", Arial, sans-serif',
    barlowCondensed: '"Barlow Condensed", Arial Narrow, sans-serif',
    alfaSlab: '"Alfa Slab One", Georgia, serif',
    oswaldVariable: '"Oswald Variable", Arial Narrow, sans-serif',
} as const;

/**
 * All available themes. To add a new one, add an entry here; the type, the
 * toggle and the initial-theme logic pick it up automatically.
 */
export const themes = {
    light: {
        colorScheme: colorSchemes[0],
        tokens: {
            background: palette.paper,
            surface: palette.white,
            border: palette.ink,
            foreground: palette.ink,
            muted: palette.graphite,
            accent: palette.crimson,
            accentForeground: palette.paper,
            highlight: palette.gold,
            fontDisplay: fonts.archivo,
            fontLabel: fonts.barlowCondensed,
        },
    },
    dark: {
        colorScheme: colorSchemes[1],
        tokens: {
            background: palette.black,
            surface: palette.charcoal,
            border: palette.steel,
            foreground: palette.snow,
            muted: palette.silver,
            accent: palette.gold,
            accentForeground: palette.black,
            highlight: palette.red,
            fontDisplay: fonts.alfaSlab,
            fontLabel: fonts.oswaldVariable,
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