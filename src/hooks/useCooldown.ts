import { useEffect, useState } from 'react';

import { readStorage, writeStorage } from '@/lib/storage';

/**
 * Milliseconds left until a stored start timestamp plus a duration elapses.
 *
 * @param storageKey - Key under which the start timestamp is saved.
 * @param durationMs - Cooldown length in milliseconds.
 * @returns Time left in milliseconds, never negative.
 */
function getRemainingMs(storageKey: string, durationMs: number): number {
    const startedAt = Number(readStorage(storageKey));

    if (!Number.isFinite(startedAt)) {
        return 0;
    }

    return Math.max(0, startedAt + durationMs - Date.now());
}

/**
 * Locks an action for a fixed time after it happens. The start time is kept
 * in localStorage, so reloading the page does not reset the cooldown.
 *
 * @param storageKey - Key under which the start timestamp is saved.
 * @param durationMs - Cooldown length in milliseconds.
 * @returns The whole seconds left, and a function that starts the cooldown.
 */
export function useCooldown(storageKey: string, durationMs: number) {
    const [remainingMs, setRemainingMs] = useState(() =>
        getRemainingMs(storageKey, durationMs),
    );

    const isActive = remainingMs > 0;

    useEffect(() => {
        if (!isActive) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setRemainingMs(getRemainingMs(storageKey, durationMs));
        }, 1000);

        return () => window.clearInterval(intervalId);
    }, [isActive, storageKey, durationMs]);

    /**
     * Starts the cooldown from now.
     */
    function start(): void {
        writeStorage(storageKey, String(Date.now()));
        setRemainingMs(durationMs);
    }

    return {
        remainingSeconds: Math.ceil(remainingMs / 1000),
        start,
    };
}
