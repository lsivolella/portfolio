import type { TranslatedText } from '@/i18n/language';

/**
 * Personal information shown in the Home hero and across the site.
 */
export interface Profile {
    /** Full name. Proper noun, not translated. */
    name: string;
    /** Resolved URL of the profile picture, imported from `src/assets/images`. */
    picture: string;
    /** Professional title. */
    role: TranslatedText;
    /** City and country where the person is based. */
    location: TranslatedText;
    /** Short professional summary used in the hero. */
    summary: TranslatedText;
}