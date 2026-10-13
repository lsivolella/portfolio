import { education } from '@/data/education';
import { useLanguage } from '@/i18n/useLanguage';
import { formatPeriod, sortByStartDesc } from '@/lib/period';

/**
 * Formal education, most recent first. A degree in progress marks its end
 * date as expected.
 */
function EducationSection() {
    const { language, text } = useLanguage();

    return (
        <ul className="space-y-8">
            {sortByStartDesc(education).map((entry) => {
                const period = formatPeriod(entry.period, language, text.time.present);
                const showExpected = entry.status === 'inProgress' && entry.period.end !== null;

                return (
                    <li key={entry.id}>
                        <h3 className="font-display text-xl">{entry.course[language]}</h3>
                        <p className="mt-1">
                            {entry.type[language]}
                            <span className="text-muted">
                                {' '}· {entry.institution} · {entry.location[language]}
                            </span>
                        </p>
                        <p className="font-label uppercase tracking-wide text-accent">
                            {period}
                            {showExpected && ` (${text.time.expected})`}
                        </p>
                        <p className="text-muted">{text.education.status[entry.status]}</p>
                    </li>
                );
            })}
        </ul>
    );
}

export default EducationSection;