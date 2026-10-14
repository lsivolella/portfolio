import littleSimWorld from '@/assets/images/projects/little-sim-world.jpg';
import portfolioHome from '@/assets/images/projects/portfolio-home.jpg';
import poupaaiHome from '@/assets/images/projects/poupaai-home.png';
import servifyLogo from '@/assets/images/projects/servify-logo.jpeg';
import type { Project } from '@/types/projects';

/**
 * Projects shown on the timeline. Order here does not matter: the page sorts
 * by start date, oldest first.
 */
export const projects: Project[] = [
    {
        id: 'portfolio',
        kind: 'personal',
        name: 'Portfolio',
        description: {
            en: 'Bilingual professional portfolio with light and dark themes, built with typed content, label-based theming and an email contact form.',
            pt: 'Portfólio profissional bilíngue com temas claro e escuro, construído com conteúdo tipado, temas por rótulos e formulário de contato por e-mail.',
        },
        technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel'],
        period: { start: '2026-10', end: null },
        repositoryUrl: 'https://github.com/lsivolella/portfolio',
        links: [{ type: 'website', href: 'https://lucas-sivolella.vercel.app' }],
        media: portfolioHome,
    },
    {
        id: 'little-sim-world',
        kind: 'professional',
        name: 'Little Sim World',
        company: 'Blue Gravity Studios',
        description: {
            en: 'A cozy 2D life simulator set in the town of Mini London, where players build their home, meet neighbors and shape their own routine, with online co-op for up to five players. I developed and maintained core system modules and interfaces, implemented complex features driven by multiple states, transitions and business rules, and worked with product and design to improve the player experience. The game reached Steam Early Access in May 2025.',
            pt: 'Simulador de vida 2D e aconchegante, ambientado em Mini Londres, onde o jogador constrói sua casa, conhece vizinhos e define sua própria rotina, com cooperativo online para até cinco jogadores. Desenvolvi e mantive módulos centrais do sistema e suas interfaces, implementei funcionalidades complexas baseadas em múltiplos estados, transições e regras de negócio, e trabalhei com produto e design para aprimorar a experiência do jogador. O jogo chegou ao Acesso Antecipado da Steam em maio de 2025.',
        },
        technologies: ['Unity', 'C#'],
        period: { start: '2021-09', end: '2023-10' },
        links: [
            {
                type: 'store',
                href: 'https://store.steampowered.com/app/1429880/Little_Sim_World/',
            },
        ],
        media: littleSimWorld,
    },
    {
        id: 'poupaai',
        kind: 'personal',
        name: 'PoupaAí',
        description: {
            en: 'A web platform that helps consumers find the best prices in local supermarkets and save time on their shopping, with price comparison, shopping lists, price alerts, purchase history, market ratings and a map of nearby stores. Built by a team of six during the first semester of the Software Engineering course, it was elected the best project of the term. I worked on the front-end across the products, markets, lists, history, ratings and alerts modules, rebuilt the shared navigation and header, consolidated duplicated styles, and produced the documentation, presentation and demo video.',
            pt: 'Plataforma web que ajuda consumidores a encontrar os melhores preços nos mercados e a economizar tempo nas compras, com comparação de preços, listas de compras, alertas de preço, histórico de compras, avaliações de mercados e mapa de lojas próximas. Desenvolvida por uma equipe de seis pessoas no primeiro período do curso de Engenharia de Software, foi eleita o melhor projeto do período. Atuei no front-end dos módulos de produtos, mercados, listas, históricos, avaliações e alertas, reconstruí a navegação e o cabeçalho compartilhados, consolidei estilos duplicados e produzi a documentação, a apresentação e o vídeo de demonstração.',
        },
        technologies: [
            'JavaScript',
            'HTML',
            'CSS',
            'Bootstrap',
            'Leaflet',
            'Chart.js',
            'Node.js',
            'JSON Server',
        ],
        period: { start: '2025-09', end: '2025-12' },
        repositoryUrl: 'https://github.com/lsivolella/PoupaAi',
        media: poupaaiHome,
    },
    {
        id: 'servify',
        kind: 'personal',
        name: 'Servify',
        description: {
            en: 'A web platform that automates the operational and financial management of service businesses that pay commissions per service, such as barbershops, beauty salons and aesthetics studios, with user management, services, scheduling based on each collaborator\'s availability, commissions and a KPI dashboard. Built by a team of five during the semester and elected the best work of the term. I worked on the back-end and front-end of the scheduling, availability and commission modules, modeled the relational data and its database migrations, wrote the seed script, and documented the business processes.',
            pt: 'Plataforma web que automatiza a gestão operacional e financeira de negócios de serviços que remuneram por comissão, como barbearias, salões de beleza e estúdios de estética, com gestão de usuários, serviços, agendamento conforme a disponibilidade de cada colaborador, comissões e painel de indicadores. Desenvolvida por uma equipe de cinco pessoas ao longo do semestre, foi eleita o melhor trabalho do período. Atuei no back-end e no front-end dos módulos de agendamento, disponibilidade e comissão, modelei os dados relacionais e suas migrações, escrevi o script de carga inicial e documentei os processos de negócio.',
        },
        technologies: [
            'React',
            'TypeScript',
            'Vite',
            'Material UI',
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'Flyway',
            'Render',
        ],
        period: { start: '2026-03', end: '2026-06' },
        repositoryUrl: 'https://github.com/lsivolella/Servify',
        links: [
            {
                type: 'website',
                href: 'https://plf-es-2026-1-ti2-1381100-grupo3-servify.onrender.com/',
            },
        ],
        media: servifyLogo,
    },
];
