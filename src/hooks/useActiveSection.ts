import { useEffect, useState } from 'react';

/**
 * Tracks which of the given elements is currently crossing the middle of
 * the viewport, to highlight it in a side index. The last element is also
 * activated when the page is scrolled to the very bottom.
 *
 * @param ids - Element ids to watch, in page order. Pass a stable array.
 * @returns The id of the active element.
 */
export function useActiveSection(ids: readonly string[]): string | undefined {
    const [active, setActive] = useState<string | undefined>(ids[0]);

    /**
     * Effect 1: activate the section that crosses the middle of the viewport.
     */
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

    /**
     * Effect 2: when the page is scrolled to the very bottom, activate the
     * last section, even if it is too short to cross the observer band.
     */
    useEffect(() => {
        function handleScroll(): void {
            const atBottom =
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            if (atBottom) {
                setActive(ids[ids.length - 1]);
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [ids]);

    return active;
}
