import type { ReactNode } from 'react';

import type { HomeSectionId } from '../homeSections';

/**
 * Props for HomeSection.
 */
interface HomeSectionProps {
    /** Section id, used as the anchor target. */
    id: HomeSectionId;
    /** Display number, for example `01`. */
    number: string;
    /** Localized section title. */
    title: string;
    /** Section content. */
    children: ReactNode;
}

/**
 * Numbered section with an anchor, offset so the sticky header does not
 * cover the heading when jumped to.
 */
function HomeSection({ id, number, title, children }: HomeSectionProps) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
            <h2
                id={`${id}-title`}
                className="mb-6 flex items-baseline gap-3 border-b border-border pb-2"
            >
                <span className="font-label text-accent">{number}</span>
                <span className="font-display text-2xl">{title}</span>
            </h2>
            {children}
        </section>
    );
}

export default HomeSection;