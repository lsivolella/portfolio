import type { Competency, SkillGroup } from '@/types/skills';

/**
 * Technologies grouped the way the Home page shows them. Each technology is
 * its own entry; add `years` to an item to display experience time.
 */
export const skillGroups: SkillGroup[] = [
    {
        id: 'languages',
        title: {
            en: 'Languages',
            pt: 'Linguagens',
        },
        items: [
            { name: 'C#' },
            { name: 'Java' },
            { name: 'TypeScript' },
            { name: 'JavaScript' },
            { name: 'SQL' },
            { name: 'HTML' },
            { name: 'CSS' },
        ],
    },
    {
        id: 'frameworks',
        title: {
            en: 'Frameworks',
            pt: 'Frameworks',
        },
        items: [
            { name: '.NET' },
            { name: 'ASP.NET Core' },
            { name: 'Spring Boot' },
            { name: 'Angular' },
            { name: 'React' },
            { name: 'Unity' },
        ],
    },
    {
        id: 'data-and-tools',
        title: {
            en: 'Data & Tools',
            pt: 'Dados e Ferramentas',
        },
        items: [
            { name: 'PostgreSQL' },
            { name: 'REST APIs' },
            { name: 'Git' },
            { name: 'GitHub' },
        ],
    },
];

/**
 * Professional competencies, shown as short statements.
 */
export const competencies: Competency[] = [
    {
        en: 'Development and maintenance of production systems',
        pt: 'Desenvolvimento e manutenção de sistemas em produção',
    },
    {
        en: 'Integration with external APIs',
        pt: 'Integração com APIs externas',
    },
    {
        en: 'Process automation',
        pt: 'Automação de processos',
    },
    {
        en: 'Teamwork and collaboration',
        pt: 'Trabalho em equipe',
    },
    {
        en: 'Communication between business and technical areas',
        pt: 'Comunicação com áreas técnicas e de negócio',
    },
    {
        en: 'Development best practices and code quality',
        pt: 'Boas práticas de desenvolvimento e qualidade de código',
    },
];