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
                className="aspect-square w-full max-w-56 border-2 border-border object-cover"
            />

            <div>
                <h1 className="font-display text-4xl md:text-5xl">{profile.name}</h1>
                <p className="mt-2 font-label uppercase tracking-wide text-accent">
                    {profile.role[language]}
                    <span className="text-muted"> / {profile.location[language]}</span>
                </p>
                <p className="mt-4 max-w-prose text-lg">{profile.summary[language]}</p>
            </div>
        </section>
    );
}

export default Hero;