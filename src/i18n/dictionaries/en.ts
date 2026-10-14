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
        title: 'Get in touch',
        intro: 'Have a project or an opportunity in mind? Send me a message or reach out through one of the channels.',
        channels: {
            email: 'E-mail',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            github: 'GitHub',
        },
        name: 'Name',
        email: 'E-mail',
        message: 'Message',
        send: 'Send message',
        sending: 'Sending…',
        success: 'Message sent. Thank you, I will get back to you soon.',
        error: 'Something went wrong. Please try again or use one of the contact channels.',
        errors: {
            required: 'This field is required.',
            nameTooShort: 'Please enter your full name.',
            invalidEmail: 'Enter a valid e-mail address.',
            messageTooShort: 'Please write a little more.',
            messageTooLong: 'Please keep the message under 2000 characters.',
        },
        wait: 'Wait',
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
    projects: {
        title: 'Projects',
        intro: 'A timeline of what I have built, from the oldest to the most recent.',
        kind: {
            personal: 'Personal project',
            professional: 'Professional project',
        },
        links: {
            repository: 'Source code',
            website: 'Website',
            store: 'Store page',
        },
    },
};

/**
 * Shape every dictionary must follow, derived from the English one.
 */
export type Dictionary = typeof en;
