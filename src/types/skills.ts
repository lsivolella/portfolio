import type { TranslatedText } from '@/i18n/language';

/**
 * One technology or tool.
 */
export interface Skill {
    /** Technology name, written as it is normally spelled. */
    name: string;
    /** Years of hands-on experience, shown when present. */
    years?: number;
}

/**
 * A titled group of skills, such as "Languages" or "Frameworks".
 */
export interface SkillGroup {
    /** Stable identifier, used as the React key. */
    id: string;
    /** Group heading. */
    title: TranslatedText;
    /** Skills that belong to this group. */
    items: Skill[];
}

/**
 * Professional competency, written as a short statement.
 */
export type Competency = TranslatedText;