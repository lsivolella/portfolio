import type { ReactNode } from 'react';

/**
 * Props for SegmentedToggle.
 */
interface SegmentedToggleProps<T extends string> {
    /** Available choices, in display order. */
    options: readonly {
        /** Value passed to `onChange` when this option is chosen. */
        value: T;
        /** Visible content of the option, such as an icon or a short code. */
        content: ReactNode;
        /** Accessible name announced by screen readers. */
        label: string;
        /** Language of the content, when it differs from the page language. */
        lang?: string;
    }[];
    /** Currently selected value. */
    value: T;
    /** Called with the chosen value. */
    onChange: (value: T) => void;
    /** Accessible name of the whole control. */
    label: string;
}

/**
 * Switch with any number of options and a thumb that slides under the
 * selected one. Used for both the theme and the language selectors.
 */
function SegmentedToggle<T extends string>({
    options,
    value,
    onChange,
    label,
}: SegmentedToggleProps<T>) {
    const selectedIndex = options.findIndex((option) => option.value === value);

    return (
        <div
            role="group"
            aria-label={label}
            className="relative inline-grid rounded-full border border-border p-1"
            style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}
        >
            {/** Sliding thumb: one cell wide, moved by whole multiples of its own width. */}
            <span
                aria-hidden="true"
                className="absolute inset-y-1 left-1 rounded-full bg-accent transition-transform duration-200 ease-out motion-reduce:transition-none"
                style={{
                    width: `calc((100% - 0.5rem) / ${options.length})`,
                    transform: `translateX(${selectedIndex * 100}%)`,
                }}
            />

            {options.map((option) => {
                const selected = option.value === value;

                return (
                    <button
                        key={option.value}
                        type="button"
                        lang={option.lang}
                        aria-label={option.label}
                        aria-pressed={selected}
                        onClick={() => onChange(option.value)}
                        className={`relative z-10 flex items-center justify-center px-3 py-1 font-label text-sm uppercase transition-colors motion-reduce:transition-none ${
                            selected ? 'text-accent-foreground' : 'text-muted hover:text-foreground'
                        }`}
                    >
                        {option.content}
                    </button>
                );
            })}
        </div>
    );
}

export default SegmentedToggle;