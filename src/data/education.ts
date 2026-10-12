import type { Education } from '@/types/education';

/**
 * Formal education. The page sorts by start date, most recent first.
 */
export const education: Education[] = [
    {
        id: 'puc-minas-software-engineering',
        type: {
            en: "Bachelor's Degree",
            pt: 'Bacharelado',
        },
        course: {
            en: 'Software Engineering',
            pt: 'Engenharia de Software',
        },
        institution: 'PUC Minas',
        location: {
            en: 'Belo Horizonte, Brazil',
            pt: 'Belo Horizonte, MG',
        },
        period: { start: '2025-08', end: '2029-06' },
        status: 'inProgress',
    },
    {
        id: 'insper-finance',
        type: {
            en: 'Postgraduate Degree',
            pt: 'Pós-graduação',
        },
        course: {
            en: 'Finance',
            pt: 'Finanças',
        },
        institution: 'Insper',
        location: {
            en: 'São Paulo, Brazil',
            pt: 'São Paulo, SP',
        },
        period: { start: '2017-07', end: '2019-10' },
        status: 'completed',
    },
    {
        id: 'ufmg-civil-engineering',
        type: {
            en: "Bachelor's Degree",
            pt: 'Bacharelado',
        },
        course: {
            en: 'Civil Engineering',
            pt: 'Engenharia Civil',
        },
        institution: 'UFMG',
        location: {
            en: 'Belo Horizonte, Brazil',
            pt: 'Belo Horizonte, MG',
        },
        period: { start: '2010-08', end: '2015-12' },
        status: 'completed',
    },
];