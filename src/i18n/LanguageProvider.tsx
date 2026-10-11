import { useLayoutEffect, useState, type ReactNode } from 'react';

import { nextOf } from '@/lib/nextOf';
import { readStorage, writeStorage } from '@/lib/storage';

import { LanguageContext } from './LanguageContext';
import {
    getBrowserLanguage,
    isLanguageName,
    languageNames,
    translations,
    type LanguageName,
} from './language';

/**
 * localStorage key under which the user's explicit choice is saved.
 */
const STORAGE_KEY = 'language';

/**
 * Props for LanguageProvider.
 */
interface LanguageProviderProps {
    /** Application tree that will have access to the language. */
    children: ReactNode;
}

/**
 * Resolves the language to start with: the saved choice if it is still a
 * valid language, otherwise the browser language if supported, otherwise the
 * first language declared.
 *
 * @returns The initial language code.
 */
function getInitialLanguage(): LanguageName {
    const saved = readStorage(STORAGE_KEY);
    if (isLanguageName(saved)) {
        return saved;
    }

    return getBrowserLanguage() ?? languageNames[0];
}

/**
 * Owns the language state and keeps `<html lang>` and localStorage in sync
 * with it.
 */
function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<LanguageName>(getInitialLanguage);

    useLayoutEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    /**
     * Advances to the next language in declaration order and remembers the choice.
     */
    function toggleLanguage(): void {
        const next = nextOf(languageNames, language);
        setLanguage(next);
        writeStorage(STORAGE_KEY, next);
    }

    return (
        <LanguageContext value={{ language, text: translations[language], toggleLanguage }}>
            {children}
        </LanguageContext>
    );
}

export default LanguageProvider;