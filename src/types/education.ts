import type { TranslatedText } from '@/i18n/language';

import type { TimePeriod } from './period';

/**
 * Whether a degree is still being pursued.
 */
export type EducationStatus = 'inProgress' | 'completed';

/**
 * A degree or course.
 */
export interface Education {
    /** Stable identifier, used as the React key. */
    id: string;
    /** Kind of degree, for example Bachelor's or Postgraduate. */
    type: TranslatedText;
    /** Course name. */
    course: TranslatedText;
    /** Institution name. Proper noun, not translated. */
    institution: string;
    /** City of the institution. */
    location: TranslatedText;
    /** When the course started and ended (or is expected to end). */
    period: TimePeriod;
    /** Current status; the visible label comes from the dictionary. */
    status: EducationStatus;
}