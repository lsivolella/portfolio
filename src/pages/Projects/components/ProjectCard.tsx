import type { IconType } from 'react-icons';
import { FaGithub, FaGlobe, FaSteam } from 'react-icons/fa6';

import Tag from '@/components/ui/Tag';
import { useLanguage } from '@/i18n/useLanguage';
import { getProjectLinks } from '@/lib/getProjectLinks';
import { formatPeriod } from '@/lib/period';
import type { Project, ProjectLinkType } from '@/types/projects';

/**
 * Icon for each link type. Typed against ProjectLinkType, so a new type must
 * add an entry.
 */
const linkIcons: Record<ProjectLinkType, IconType> = {
    repository: FaGithub,
    website: FaGlobe,
    store: FaSteam,
};

/**
 * Button styling for each link type: places to visit are filled, the source
 * code is outlined.
 */
const linkStyles: Record<ProjectLinkType, string> = {
    repository: 'border border-border text-foreground hover:bg-surface',
    website: 'border border-accent bg-accent text-accent-foreground hover:opacity-90',
    store: 'border border-accent bg-accent text-accent-foreground hover:opacity-90',
};

/**
 * Props for ProjectCard.
 */
interface ProjectCardProps {
    /** Project to display. */
    project: Project;
}

/**
 * Project entry with the media on the left and the details on the right on
 * wide screens, stacked on narrow ones.
 */
function ProjectCard({ project }: ProjectCardProps) {
    const { language, text } = useLanguage();
    const links = getProjectLinks(project);

    return (
        <article
            className={`grid gap-6 border border-border bg-surface p-6 ${project.media ? 'md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]' : ''
                }`}
        >
            {project.media && (
                <img
                    src={project.media}
                    alt={project.name}
                    loading="lazy"
                    className="max-h-112 w-full self-center border border-border object-cover object-top"
                />
            )}

            <div className="flex flex-col">
                <p className="font-label uppercase tracking-wide text-accent">
                    {formatPeriod(project.period, language, text.time.present)}
                </p>

                <h3 className="mt-1 font-display text-2xl">{project.name}</h3>

                <p className="font-label uppercase tracking-wide text-muted">
                    {text.projects.kind[project.kind]}
                    {project.kind === 'professional' && ` · ${project.company}`}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <li key={technology}>
                            <Tag>{technology}</Tag>
                        </li>
                    ))}
                </ul>

                <p className="mt-4 text-muted">{project.description[language]}</p>

                {links.length > 0 && (
                    <ul className="mt-auto flex flex-wrap gap-3 pt-6 md:justify-end">
                        {links.map((link) => {
                            const Icon = linkIcons[link.type];

                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-3 py-2 font-label uppercase tracking-wide ${linkStyles[link.type]}`}
                                    >
                                        <Icon aria-hidden="true" />
                                        {text.projects.links[link.type]}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;
