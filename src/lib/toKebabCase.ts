/**
 * Converts a camelCase string into kebab-case.
 *
 * @param value - String in camelCase, for example `accentForeground`.
 * @returns The kebab-case version, for example `accent-foreground`.
 */
export function toKebabCase(value: string): string {
    return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}