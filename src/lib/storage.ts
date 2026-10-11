/**
 * Reads a string from localStorage without ever throwing.
 *
 * @param key - Storage key to read.
 * @returns The stored value, or `null` if missing or storage is unavailable.
 */
export function readStorage(key: string): string | null {
    try {
        return localStorage.getItem(key);
    } catch {
        /** Storage can be blocked or unavailable; treat it as empty. */
        return null;
    }
}

/**
 * Writes a string to localStorage without ever throwing.
 *
 * @param key - Storage key to write.
 * @param value - Value to store.
 */
export function writeStorage(key: string, value: string): void {
    try {
        localStorage.setItem(key, value);
    } catch {
        /** Persistence is a convenience; the app works without it. */
    }
}