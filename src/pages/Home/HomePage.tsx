import { useLanguage } from '@/i18n/useLanguage';
import { useTheme } from '@/theme/useTheme';

function HomePage() {
    const { theme, toggleTheme } = useTheme();
    const { text, toggleLanguage } = useLanguage();

    return (
        <div>
            <div className='bg-background text-foreground min-h-screen p-8'>
                <h1 className='font-display text-4xl'>{text.nav.home} ({theme})</h1>
                <div className='flex gap-8 mt-4'>
                    <button
                        className='bg-accent text-accent-foreground font-label px-4 py-2'
                        onClick={toggleTheme}
                    >
                        Toggle Theme
                    </button>
                    <button
                        className='bg-accent text-accent-foreground font-label px-4 py-2'
                        onClick={toggleLanguage}
                    >
                        Toggle Language
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;