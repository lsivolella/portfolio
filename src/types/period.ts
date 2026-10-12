/**
 * A calendar month written as `YYYY-MM`, for example `2023-10`. The template
 * type rejects other shapes such as `2023/10`.
 */
export type YearMonth = `${number}-${number}`;

/**
 * Time span of a job or study. `end` is `null` while it is ongoing with no
 * known end; a degree in progress keeps its expected end date.
 */
export interface TimePeriod {
    /** First month of the period. */
    start: YearMonth;
    /** Last (or expected last) month of the period, or `null` if open-ended. */
    end: YearMonth | null;
}