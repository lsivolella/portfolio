import type { TranslatedText } from '@/i18n/language';

import type { TimePeriod } from './period';

/**
 * Kinds of external link a project can have.
 */
export type ProjectLinkType = 'repository' | 'website' | 'store';

/**
 * A link shown as a button on the project card.
 */
export interface ProjectLink {
    /** What the link points to; drives the icon and the label. */
    type: ProjectLinkType;
    /** Destination URL. */
    href: string;
}

/**
 * Fields shared by every project.
 */
interface ProjectBase {
    /** Stable identifier, used as the React key. */
    id: string;
    /** Project name. */
    name: string;
    /** What the project is and what was built. */
    description: TranslatedText;
    /** Technologies used, written as they are normally spelled. */
    technologies: string[];
    /** When the work started and ended. */
    period: TimePeriod;
    /** Screenshot or GIF of the project running. Optional until available. */
    media?: string;
    /** Extra links besides the repository, such as a website or store page. */
    links?: ProjectLink[];
}

/**
 * A personal project, always backed by a public repository.
 */
export interface PersonalProject extends ProjectBase {
    /** Discriminator. */
    kind: 'personal';
    /** Public GitHub repository. Required for personal projects. */
    repositoryUrl: string;
}

/**
 * A project built for a company or client, usually without a public repository.
 */
export interface ProfessionalProject extends ProjectBase {
    /** Discriminator. */
    kind: 'professional';
    /** Company or client the project was built for. Proper noun. */
    company: string;
}

/**
 * Any project shown on the timeline.
 */
export type Project = PersonalProject | ProfessionalProject;
