/**
 * English dictionary. It is the reference: every other dictionary must have
 * exactly the same keys.
 */
export const en = {
    /** Name of this language in its own language, shown in the language toggle. */
    languageName: 'English',
    nav: {
        home: 'Home',
        projects: 'Projects',
        contact: 'Contact',
    },
    home: {
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        languages: 'Languages',
    },
    contact: {
        name: 'Name',
        email: 'E-mail',
        message: 'Message',
        send: 'Send message',
    },
    accessibility: {
        mainNavigation: 'Main navigation',
        toggleTheme: 'Switch theme',
        toggleLanguage: 'Switch language',
        sectionIndex: 'Page sections',
    },
    footer: {
        rights: 'All rights reserved.',
    },
    colorSchemes: {
        light: 'Light',
        dark: 'Dark',
    },
    time: {
        present: 'Present',
        expected: 'expected',
    },
    education: {
        status: {
            inProgress: 'In progress',
            completed: 'Completed',
        },
    },
};

/**
 * Shape every dictionary must follow, derived from the English one.
 */
export type Dictionary = typeof en;