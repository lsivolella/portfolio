import { type Dictionary, en } from './dictionaries/en';
import { pt } from './dictionaries/pt';

/**
 * All available dictionaries, keyed by language code. The first one declared
 * is the fallback language. To add a language, create its dictionary and add
 * an entry here.
 */
export const translations = {
    en,
    pt,
} satisfies Record<string, Dictionary>;

/**
 * Union of the language codes, derived from the keys of `translations`.
 */
export type LanguageName = keyof typeof translations;

/**
 * Language codes as a runtime array, in declaration order.
 */
export const languageNames = Object.keys(translations) as LanguageName[];

/**
 * A piece of content written once per language. Used by the CV data
 * (experience, education, project descriptions).
 */
export type TranslatedText = Record<LanguageName, string>;

/**
 * Checks whether an unknown value is the code of an existing language.
 *
 * @param value - Value to check, for example read from localStorage.
 * @returns True if `value` is a valid language code.
 */
export function isLanguageName(value: unknown): value is LanguageName {
    return typeof value === 'string' && Object.hasOwn(translations, value);
}

/**
 * Extracts the lowercase primary language subtag from a language tag.
 *
 * @param tag - Language tag such as `pt-BR`.
 * @returns The primary subtag, for example `pt`.
 */
function getPrimaryTag(tag: string): string {
    return tag.split('-')[0].toLowerCase();
}

/**
 * Short uppercase code used as the label in the language switch.
 *
 * @param name - Supported language tag.
 * @returns The short code, for example `PT`.
 */
export function getLanguageCode(name: LanguageName): string {
    return getPrimaryTag(name).toUpperCase();
}

/**
 * Finds the first browser-preferred language that the site supports. An exact
 * tag match wins; otherwise the primary subtag is compared, so `pt-PT` falls
 * back to `pt-BR` and `en-GB` to `en-US`.
 *
 * @returns The matching language, or `undefined` if none is supported.
 */
export function getBrowserLanguage(): LanguageName | undefined {
    for (const locale of navigator.languages) {
        if (isLanguageName(locale)) {
            return locale;
        }

        const primary = getPrimaryTag(locale);
        const match = languageNames.find((name) => getPrimaryTag(name) === primary);
        if (match) {
            return match;
        }
    }

    return undefined;
}