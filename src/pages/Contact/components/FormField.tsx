import type { ReactNode } from 'react';

/**
 * Props for FormField.
 */
interface FormFieldProps {
    /** Id of the input this field wraps, used to link the label and the error. */
    id: string;
    /** Visible label text. */
    label: string;
    /** Validation message to show, if any. */
    error?: string;
    /** The input element. */
    children: ReactNode;
}

/**
 * Label, input slot and error message, laid out consistently for every
 * form field.
 */
function FormField({ id, label, error, children }: FormFieldProps) {
    return (
        <div>
            <label htmlFor={id} className="mb-1 block font-label uppercase tracking-wide text-muted">
                {label}
            </label>
            {children}
            {error && (
                <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-highlight">
                    {error}
                </p>
            )}
        </div>
    );
}

export default FormField;
