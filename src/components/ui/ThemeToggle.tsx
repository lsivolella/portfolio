import type { IconType } from 'react-icons';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useLanguage } from '@/i18n/useLanguage';
import { themeNames, themes, type ColorScheme } from '@/theme/themes';
import { useTheme } from '@/theme/useTheme';

import SegmentedToggle from './SegmentedToggle';

/**
 * Icon representing each color scheme. Typed against ColorScheme, so a new
 * scheme must add an entry.
 */
const schemeIcons: Record<ColorScheme, IconType> = {
    light: FiSun,
    dark: FiMoon,
};

/**
 * Sliding selector for the theme, with one icon per theme.
 */
function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const { text } = useLanguage();

    const options = themeNames.map((name) => {
        const scheme = themes[name].colorScheme;
        const Icon = schemeIcons[scheme];

        return {
            value: name,
            content: <Icon size={16} aria-hidden="true" />,
            label: text.colorSchemes[scheme],
        };
    });

    return (
        <SegmentedToggle
            options={options}
            value={theme}
            onChange={setTheme}
            label={text.accessibility.toggleTheme}
        />
    );
}

export default ThemeToggle;