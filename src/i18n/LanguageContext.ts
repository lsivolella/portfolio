import { createContext } from 'react';

import type { Dictionary } from './dictionaries/en';
import type { LanguageName } from './language';

/**
 * Value exposed to the component tree by LanguageProvider.
 */
export interface LanguageContextValue {
    /** Currently active language. */
    language: LanguageName;
    /** Dictionary of the active language, used for interface text. */
    text: Dictionary;
    /** Selects a language and remembers the choice. */
    setLanguage: (langugae: LanguageName) => void;
}

/**
 * Holds the language state. It is `undefined` outside LanguageProvider, which
 * `useLanguage` turns into an explicit error.
 */
export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);