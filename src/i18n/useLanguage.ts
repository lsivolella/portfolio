import { useContext } from 'react';

import { LanguageContext, type LanguageContextValue } from './LanguageContext';

/**
 * Reads the active language, its dictionary and the toggle function.
 *
 * @returns The language context value.
 * @throws If called outside LanguageProvider.
 */
export function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
}