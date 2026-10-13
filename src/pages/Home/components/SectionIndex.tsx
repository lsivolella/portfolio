import { useActiveSection } from '@/hooks/useActiveSection';
import { useLanguage } from '@/i18n/useLanguage';

import { getSectionNumber, homeSections } from '../homeSections';

/**
 * Sticky numbered list of the page sections. Visible on wide screens only.
 */
function SectionIndex() {
    const { text } = useLanguage();
    const active = useActiveSection(homeSections);

    return (
        <nav
            aria-label={text.accessibility.sectionIndex}
            className="hidden lg:sticky lg:top-24 lg:block lg:self-start"
        >
            <ul className="space-y-3 font-label uppercase tracking-wide">
                {homeSections.map((id, index) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            aria-current={active === id ? 'true' : undefined}
                            className={`flex gap-3 ${active === id ? 'text-accent' : 'text-muted hover:text-foreground'}`}
                        >
                            <span>{getSectionNumber(index)}</span>
                            <span>{text.home[id]}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SectionIndex;