import type { TranslatedText } from '@/i18n/language';
import type { Experience } from '@/types/experience';

/**
 * Bullet shared by both Revenue Management Analyst roles.
 */
const monitorIndicators: TranslatedText = {
    en: 'Monitoring of key performance indicators, ensuring established targets were achieved and reported periodically.',
    pt: 'Monitoramento de indicadores de desempenho, garantindo que as metas estabelecidas fossem alcançadas e reportadas periodicamente.',
};

/**
 * Professional experience. Order here does not matter: the page sorts by
 * start date, most recent first.
 */
export const experience: Experience[] = [
    {
        id: 'dinotonte',
        company: 'Dinotonte',
        role: {
            en: 'Unity Developer',
            pt: 'Desenvolvedor Unity',
        },
        location: {
            en: 'Rio de Janeiro, Remote',
            pt: 'Rio de Janeiro, Remoto',
        },
        period: { start: '2023-10', end: '2025-12' },
        description: [
            {
                en: 'Development of new features, bug fixing, and evolutionary maintenance of production systems, ensuring stability and reliability.',
                pt: 'Desenvolvimento de novas funcionalidades, correção de falhas e manutenção evolutiva de sistemas em ambiente de produção, assegurando estabilidade e confiabilidade.',
            },
            {
                en: 'Development of internal tools for data importing and transformation from CSV files, automating processes and significantly reducing system maintenance time.',
                pt: 'Desenvolvimento de ferramentas internas para importação e transformação de dados a partir de arquivos CSV, automatizando processos e reduzindo significativamente o tempo de manutenção e inclusão de informações no sistema.',
            },
            {
                en: 'Implementation of integrations with external APIs, connecting internal functionalities to third-party platforms in a structured and reliable manner.',
                pt: 'Implementação de integrações com APIs externas, conectando funcionalidades internas a plataformas de terceiros de forma estruturada e confiável.',
            },
            {
                en: 'Creation of automated build and continuous delivery pipelines (CI/CD), ensuring consistency, quality, and reducing manual intervention in deployments.',
                pt: 'Criação de pipeline automatizado de build e entrega contínua (CI/CD), garantindo consistência, qualidade e redução de intervenções manuais nas entregas.',
            },
            {
                en: 'Facilitated communication between technical and art teams, driving alignments to define workflows and technical guidelines.',
                pt: 'Atuação na comunicação entre equipes técnicas e artísticas, conduzindo alinhamentos para definição de fluxos de trabalho e diretrizes técnicas.',
            },
        ],
    },
    {
        id: 'blue-gravity-studios',
        company: 'Blue Gravity Studios',
        role: {
            en: 'Unity Developer',
            pt: 'Desenvolvedor Unity',
        },
        location: {
            en: 'London, Remote',
            pt: 'Londres, Remoto',
        },
        period: { start: '2021-09', end: '2023-10' },
        description: [
            {
                en: 'Development, evolution, and maintenance of core system modules and interfaces, including the implementation of new features and continuous improvements.',
                pt: 'Desenvolvimento, evolução e manutenção de módulos centrais do sistema e de suas interfaces, incluindo a implementação de novas funcionalidades e melhorias contínuas.',
            },
            {
                en: 'Collaborated with product and design areas to improve user experience and align system features with functional and usability requirements.',
                pt: 'Atuação em colaboração com áreas de produto e design para aprimorar a experiência do usuário e alinhar funcionalidades aos requisitos funcionais e de usabilidade.',
            },
            {
                en: 'Implementation of complex features based on multiple states, transitions, and business rules, ensuring system stability, performance, and maintainability.',
                pt: 'Implementação de funcionalidades complexas baseadas em múltiplos estados, transições e regras de negócio, garantindo estabilidade, desempenho e manutenibilidade do sistema.',
            },
        ],
    },
    {
        id: 'burger-king-brasil',
        company: 'Burger King do Brasil',
        role: {
            en: 'Revenue Management Analyst',
            pt: 'Analista de Gestão de Receitas',
        },
        location: {
            en: 'São Paulo, Brazil',
            pt: 'São Paulo, SP',
        },
        period: { start: '2018-12', end: '2020-05' },
        description: [
            monitorIndicators,
            {
                en: 'Interpretation of operational reports, supporting the management board in informed decision-making.',
                pt: 'Interpretação de relatórios operacionais, auxiliando a direção na tomada de decisões informadas.',
            },
        ],
    },
    {
        id: 'beontag',
        company: 'Beontag',
        role: {
            en: 'Revenue Management Analyst',
            pt: 'Analista de Gestão de Receitas',
        },
        location: {
            en: 'São Paulo, Brazil',
            pt: 'São Paulo, SP',
        },
        period: { start: '2016-12', end: '2018-12' },
        description: [
            monitorIndicators,
            {
                en: 'Analysis of quantitative and qualitative data to identify trends and patterns, supporting corporate strategic decisions.',
                pt: 'Análise de dados quantitativos e qualitativos para identificar tendências e padrões, apoiando decisões estratégicas da empresa.',
            },
        ],
    },
];