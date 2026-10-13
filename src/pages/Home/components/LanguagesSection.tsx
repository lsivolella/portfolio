import { spokenLanguages } from '@/data/spokenLanguages';
import { useLanguage } from '@/i18n/useLanguage';

/**
 * Spoken languages with proficiency.
 */
function LanguagesSection() {
    const { language } = useLanguage();

    return (
        <ul className="space-y-2">
            {spokenLanguages.map((entry) => (
                <li key={entry.language.en} className="flex gap-3">
                    <span>{entry.language[language]}</span>
                    <span className="text-muted">— {entry.proficiency[language]}</span>
                </li>
            ))}
        </ul>
    );
}

export default LanguagesSection;