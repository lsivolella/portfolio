import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/useLanguage';

/**
 * Top block of the Home page: portrait, name, role, location and summary.
 */
function Hero() {
    const { language } = useLanguage();

    return (
        <section className="grid items-center gap-8 md:grid-cols-[14rem_1fr]">
            <img
                src={profile.picture}
                alt={profile.name}
                className="aspect-square w-full max-w-56 animate-fade-up border-2 border-border object-cover motion-reduce:animate-none"
            />

            <div>
                <h1
                    className="animate-fade-up font-display text-4xl motion-reduce:animate-none md:text-5xl"
                    style={{ animationDelay: '100ms' }}
                >
                    {profile.name}
                </h1>
                <p
                    className="mt-2 animate-fade-up font-label uppercase tracking-wide text-accent motion-reduce:animate-none"
                    style={{ animationDelay: '200ms' }}
                >
                    {profile.role[language]}
                    <span className="text-muted"> / {profile.location[language]}</span>
                </p>
                <p
                    className="mt-4 max-w-prose animate-fade-up text-lg motion-reduce:animate-none"
                    style={{ animationDelay: '300ms' }}
                >
                    {profile.summary[language]}
                </p>
            </div>
        </section>
    );
}

export default Hero;
