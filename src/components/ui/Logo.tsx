import logoBlack from '@/assets/images/ls_logo_black.png';
import logoWhite from '@/assets/images/ls_logo_white.png';
import { themes, type ColorScheme } from '@/theme/themes';
import { useTheme } from '@/theme/useTheme';

/**
 * Logo image for each color scheme: dark logo on light themes, light logo on
 * dark themes. Typed against ColorScheme, so a new scheme must add an entry.
 */
const logos: Record<ColorScheme, string> = {
    light: logoBlack,
    dark: logoWhite,
};

/**
 * Site logo, switching variant with the active theme.
 */
function Logo() {
    const { theme } = useTheme();

    /** The logo is decorative: its link carries the accessible name. */
    return <img src={logos[themes[theme].colorScheme]} alt="" className="h-8 w-auto" />;
}

export default Logo;