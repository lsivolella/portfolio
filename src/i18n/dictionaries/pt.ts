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
    /** pt.ts */
    contact: {
        title: 'Entre em contato',
        intro: 'Tem um projeto ou uma oportunidade em mente? Envie uma mensagem ou fale comigo por um dos canais.',
        channels: {
            email: 'E-mail',
            whatsapp: 'WhatsApp',
            linkedin: 'LinkedIn',
            github: 'GitHub',
        },
        name: 'Nome',
        email: 'E-mail',
        message: 'Mensagem',
        send: 'Enviar mensagem',
        sending: 'Enviando…',
        success: 'Mensagem enviada. Obrigado, responderei em breve.',
        error: 'Algo deu errado. Tente novamente ou use um dos canais de contato.',
        errors: {
            required: 'Este campo é obrigatório.',
            nameTooShort: 'Informe seu nome completo.',
            invalidEmail: 'Informe um e-mail válido.',
            messageTooShort: 'Escreva um pouco mais.',
            messageTooLong: 'Mantenha a mensagem com menos de 2000 caracteres.',
        },
        wait: 'Aguarde',
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
    projects: {
        title: 'Projetos',
        intro: 'Uma linha do tempo do que construí, do mais antigo ao mais recente.',
        kind: {
            personal: 'Projeto pessoal',
            professional: 'Projeto profissional',
        },
        links: {
            repository: 'Código-fonte',
            website: 'Site',
            store: 'Página na loja',
        },
    },
};
