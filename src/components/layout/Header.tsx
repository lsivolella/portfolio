import { Link, NavLink } from 'react-router-dom';

import Container from '@/components/ui/Container';
import LanguageToggle from '@/components/ui/LanguageToggle';
import Logo from '@/components/ui/Logo';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { routeNames, routes } from '@/config/routes';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/useLanguage';

/**
 * Sticky top bar with the logo, the main navigation and the theme and
 * language toggles.
 */
function Header() {
    const { text } = useLanguage();

    return (
        <header className="sticky top-0 z-10 animate-fade-in border-b border-border bg-background motion-reduce:animate-none">
            <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3">
                <Link to={routes.home} aria-label={profile.name}>
                    <Logo />
                </Link>

                <nav
                    aria-label={text.accessibility.mainNavigation}
                    className="order-last flex w-full items-center justify-center gap-6 sm:order-0 sm:w-auto"
                >
                    {routeNames.map((name) => (
                        <NavLink
                            key={name}
                            to={routes[name]}
                            end
                            className={({ isActive }) =>
                                `font-label uppercase tracking-wide ${isActive ? 'text-accent' : 'text-muted hover:text-foreground'
                                }`
                            }
                        >
                            {text.nav[name]}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </Container>
        </header>
    );
}

export default Header;
