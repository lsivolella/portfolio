import { experience } from '@/data/experience';
import { useLanguage } from '@/i18n/useLanguage';
import { formatPeriod, sortByStartDesc } from '@/lib/period';

/**
 * Professional experience, most recent first.
 */
function ExperienceSection() {
    const { language, text } = useLanguage();

    return (
        <ul className="space-y-10">
            {sortByStartDesc(experience).map((entry) => (
                <li key={entry.id}>
                    <h3 className="font-display text-xl">{entry.role[language]}</h3>
                    <p className="mt-1">
                        {entry.company}
                        <span className="text-muted"> · {entry.location[language]}</span>
                    </p>
                    <p className="font-label uppercase tracking-wide text-accent">
                        {formatPeriod(entry.period, language, text.time.present)}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                        {entry.description.map((bullet) => (
                            <li key={bullet.en}>{bullet[language]}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    );
}

export default ExperienceSection;