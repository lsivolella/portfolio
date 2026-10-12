import type { TranslatedText } from '@/i18n/language';

import type { TimePeriod } from './period';

/**
 * A job, internship or other professional role.
 */
export interface Experience {
    /** Stable identifier, used as the React key. */
    id: string;
    /** Company or institution name. Proper noun, not translated. */
    company: string;
    /** Job title. */
    role: TranslatedText;
    /** City and work arrangement, for example "Rio de Janeiro, Remote". */
    location: TranslatedText;
    /** When the role started and ended. */
    period: TimePeriod;
    /** Bullet points describing the work. */
    description: TranslatedText[];
}