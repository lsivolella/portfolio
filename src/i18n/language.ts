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
 * Finds the first browser-preferred language that the site supports.
 * Region subtags are ignored, so `pt-BR` matches `pt`.
 *
 * @returns The matching language, or `undefined` if none is supported.
 */
export function getBrowserLanguage(): LanguageName | undefined {
    for (const locale of navigator.languages) {
        const code = locale.split('-')[0];
        if (isLanguageName(code)) {
            return code;
        }
    }
    return undefined;
}