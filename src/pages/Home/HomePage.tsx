import { useTheme } from '@/theme/useTheme';

function HomePage() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <div className='bg-background text-foregound min-h-screen p-8'>
                <h1 className='font-display text-4xl'>Home ({theme})</h1>
                <button
                    className='bg-accent text-accent-foreground font-label mt-4 px-4 py-2'
                    onClick={toggleTheme}
                >
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}

export default HomePage;