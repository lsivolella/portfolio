import type { Project, ProjectLink } from '@/types/project';

/**
 * Collects every link of a project into one list, with the repository first
 * for personal projects.
 *
 * @param project - Project to read the links from.
 * @returns The links in display order.
 */
export function getProjectLinks(project: Project): ProjectLink[] {
    const repository: ProjectLink[] =
        project.kind === 'personal'
            ? [{ type: 'repository', href: project.repositoryUrl }]
            : [];

    return [...repository, ...(project.links ?? [])];
}
