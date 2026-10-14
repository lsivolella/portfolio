import Container from '@/components/ui/Container';
import { projects } from '@/data/projects';
import { useLanguage } from '@/i18n/useLanguage';
import { sortByStartAsc } from '@/lib/period';

import ProjectCard from './components/ProjectCard';

/**
 * Projects page: a vertical timeline of projects, oldest first.
 */
function ProjectsPage() {
    const { text } = useLanguage();

    return (
        <Container className="py-12">
            <h1 className="font-display text-4xl">{text.projects.title}</h1>
            <p className="mt-4 max-w-prose text-lg">{text.projects.intro}</p>

            <ol className="mt-12 space-y-12 border-l-2 border-border pl-8">
                {sortByStartAsc(projects).map((project) => (
                    <li key={project.id} className="relative">
                        {/** Timeline dot, centered on the vertical line. */}
                        <span
                            aria-hidden="true"
                            className="absolute top-2 -left-[calc(2rem+0.5rem+1px)] size-4 rounded-full bg-accent"
                        />
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ol>
        </Container>
    );
}

export default ProjectsPage;
