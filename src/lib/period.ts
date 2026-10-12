import type { LanguageName } from '@/i18n/language';
import type { TimePeriod, YearMonth } from '@/types/period';

/**
 * Formats a month for display using the browser's locale data, so no month
 * names are hardcoded. For example `2023-10` becomes `Oct 2023` or `out. de 2023`.
 *
 * @param value - Month in `YYYY-MM` format.
 * @param language - Language to format for.
 * @returns The localized month and year.
 */
export function formatYearMonth(value: YearMonth, language: LanguageName): string {
    const [year, month] = value.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1));

    return new Intl.DateTimeFormat(language, {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    }).format(date);
}

/**
 * Formats a period as "start – end", using a label for ongoing periods.
 *
 * @param period - Period to format.
 * @param language - Language to format for.
 * @param presentLabel - Text shown when the period has no end, for example "Present".
 * @returns The formatted period.
 */
export function formatPeriod(
    period: TimePeriod,
    language: LanguageName,
    presentLabel: string,
): string {
    const start = formatYearMonth(period.start, language);
    const end = period.end ? formatYearMonth(period.end, language) : presentLabel;

    return `${start} – ${end}`;
}

/**
 * Returns a copy of the items sorted by start date, most recent first.
 *
 * @param items - Items that have a `period`.
 * @returns A new sorted array; the input is not modified.
 */
export function sortByStartDesc<T extends { period: TimePeriod; }>(items: readonly T[]): T[] {
    return [...items].sort((a, b) => b.period.start.localeCompare(a.period.start));
}