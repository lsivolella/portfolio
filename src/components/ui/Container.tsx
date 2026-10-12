import type { ReactNode } from 'react';

/**
 * Props for Container.
 */
interface ContainerProps {
    /** Content placed inside the container. */
    children: ReactNode;
    /** Extra classes appended to the base layout classes. */
    className?: string;
}

/**
 * Centers content and limits its width, so the header, pages and footer
 * share the same horizontal alignment.
 */
function Container({ children, className = '' }: ContainerProps) {
    return (
        <div className={`mx-auto w-full max-w-5xl px-4 ${className}`}>
            {children}
        </div>
    );
}

export default Container;