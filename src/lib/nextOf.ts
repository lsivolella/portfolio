/**
 * Returns the item that follows `current` in a list, wrapping around to the
 * first item after the last one.
 *
 * @param items - Ordered list of options.
 * @param current - Option currently selected.
 * @returns The next option.
 */
export function nextOf<T>(items: readonly T[], current: T): T {
    return items[(items.indexOf(current) + 1) % items.length];
}