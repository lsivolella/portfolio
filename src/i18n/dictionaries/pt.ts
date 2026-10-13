import type { Dictionary } from './en';

/**
 * Brazilian Portuguese dictionary. A missing or extra key is a compile error.
 */
export const pt: Dictionary = {
    languageName: 'Português',
    nav: {
        home: 'Início',
        projects: 'Projetos',
        contact: 'Contato',
    },
    home: {
        skills: 'Habilidades',
        experience: 'Experiência',
        education: 'Formação',
        languages: 'Idiomas',
    },
    contact: {
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar mensagem',
    },
    accessibility: {
        mainNavigation: 'Navegação principal',
        toggleTheme: 'Alternar tema',
        toggleLanguage: 'Alternar idioma',
        sectionIndex: 'Seções da página',
    },
    footer: {
        rights: 'Todos os direitos reservados.',
    },
    colorSchemes: {
        light: 'Claro',
        dark: 'Escuro',
    },
    time: {
        present: 'Atual',
        expected: 'previsto',
    },
    education: {
        status: {
            inProgress: 'Cursando',
            completed: 'Concluído',
        },
    },
};