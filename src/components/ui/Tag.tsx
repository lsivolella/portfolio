import type { ReactNode } from 'react';

/**
 * Props for Tag.
 */
interface TagProps {
    /** Tag content, usually a technology name. */
    children: ReactNode;
}

/**
 * Small bordered label for a technology or a short attribute.
 */
function Tag({ children }: TagProps) {
    return (
        <span className="inline-block border border-border bg-surface px-3 py-1">
            {children}
        </span>
    );
}

export default Tag;
