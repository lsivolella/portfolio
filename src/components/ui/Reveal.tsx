import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Props for Reveal.
 */
interface RevealProps {
    /** Content to reveal. */
    children: ReactNode;
    /** Delay before the transition starts, in milliseconds. */
    delay?: number;
    /** Extra classes appended to the wrapper. */
    className?: string;
}

/**
 * Fades and lifts its content into place the first time it scrolls into
 * view. With reduced motion enabled, the content is simply shown.
 */
function Reveal({ children, delay = 0, className = '' }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition duration-700 ease-out motion-reduce:transition-none ${visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;
