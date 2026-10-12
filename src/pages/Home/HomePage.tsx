import { useLanguage } from '@/i18n/useLanguage';
import { useTheme } from '@/theme/useTheme';

function HomePage() {
    const { theme, } = useTheme();
    const { text } = useLanguage();

    return (
        <div className='bg-background text-foreground min-h-screen p-8'>
            <h1 className='font-display text-4xl'>{text.nav.home} ({theme})</h1>
            <div className='flex gap-8 mt-4'>
            </div>
        </div >
    );
}

export default HomePage;