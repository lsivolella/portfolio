import type { TranslatedText } from '@/i18n/language';

/**
 * A human language the person speaks.
 */
export interface SpokenLanguage {
    /** Name of the language. */
    language: TranslatedText;
    /** Proficiency description, for example "Fluent". */
    proficiency: TranslatedText;
}