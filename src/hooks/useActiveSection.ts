import { useEffect, useState } from 'react';

/**
 * Tracks which of the given elements is currently crossing the middle of
 * the viewport, to highlight it in a side index.
 *
 * @param ids - Element ids to watch, in page order. Pass a stable array.
 * @returns The id of the active element.
 */
export function useActiveSection(ids: readonly string[]): string | undefined {
    const [active, setActive] = useState<string | undefined>(ids[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                }
            },
            /** A thin band around 40-45% down the viewport counts as "current". */
            { rootMargin: '-40% 0px -55% 0px' },
        );

        for (const id of ids) {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        }

        return () => observer.disconnect();
    }, [ids]);

    return active;
}