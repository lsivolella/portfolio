/**
 * Sections of the Home page, in display order. Each id is also the anchor,
 * and the key of its title in `text.home`.
 */
export const homeSections = ['skills', 'experience', 'education', 'languages'] as const;

/**
 * Union of the Home section ids, derived from `homeSections`.
 */
export type HomeSectionId = (typeof homeSections)[number];

/**
 * Two-digit label for a section position, for example `01`.
 *
 * @param index - Zero-based position in `homeSections`.
 * @returns The padded, one-based number.
 */
export function getSectionNumber(index: number): string {
    return String(index + 1).padStart(2, '0');
}