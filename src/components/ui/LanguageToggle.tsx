import { getLanguageCode, languageNames, translations } from '@/i18n/language';
import { useLanguage } from '@/i18n/useLanguage';

import SegmentedToggle from './SegmentedToggle';

/**
 * Sliding selector for the language, labelled with the short language code.
 */
function LanguageToggle() {
    const { language, setLanguage, text } = useLanguage();

    const options = languageNames.map((name) => ({
        value: name,
        content: getLanguageCode(name),
        label: translations[name].languageName,
        lang: name,
    }));

    return (
        <SegmentedToggle
            options={options}
            value={language}
            onChange={setLanguage}
            label={text.accessibility.toggleLanguage}
        />
    );
}

export default LanguageToggle;