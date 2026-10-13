import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useCooldown } from '@/hooks/useCooldown';
import { useLanguage } from '@/i18n/useLanguage';
import { sendContactMessage } from '@/services/sendContactMessage';
import type { ContactFormValues } from '@/types/contact';

import FormField from './FormField';

/**
 * Minimum number of characters for the name field.
 */
const MIN_NAME_LENGTH = 2;

/**
 * Minimum number of characters for the message field.
 */
const MIN_MESSAGE_LENGTH = 10;

/**
 * Maximum number of characters for the message field.
 */
const MAX_MESSAGE_LENGTH = 2000;

/**
 * Deliberately simple e-mail shape check: something, `@`, something, `.`,
 * something. The mail server is the real validator.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * How long the form stays locked after a message is sent, in milliseconds.
 */
const COOLDOWN_MS = 30_000;

/**
 * localStorage key holding the time of the last successful send.
 */
const COOLDOWN_STORAGE_KEY = 'contact:lastSentAt';

/**
 * Shared styling for text inputs and the textarea.
 */
const inputClass =
    'w-full border border-border bg-surface px-3 py-2 text-foreground focus-visible:outline-2 focus-visible:outline-accent';

/**
 * Outcome of the last submit attempt.
 */
type SubmitStatus = 'idle' | 'success' | 'error';

/**
 * Everything the form tracks: the visitor's values plus the honeypot field,
 * which is never sent.
 */
type ContactFormInputs = ContactFormValues & {
    /** Trap field. Real visitors never see it, so it must stay empty. */
    website: string;
};

/**
 * Contact form with localized validation, a honeypot and a send cooldown.
 */
function ContactForm() {
    const { language, text } = useLanguage();
    const [status, setStatus] = useState<SubmitStatus>('idle');
    const { remainingSeconds, start: startCooldown } = useCooldown(
        COOLDOWN_STORAGE_KEY,
        COOLDOWN_MS,
    );

    const coolingDown = remainingSeconds > 0;

    const secondsFormat = new Intl.NumberFormat(language, {
        style: 'unit',
        unit: 'second',
        unitDisplay: 'narrow',
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormInputs>({
        defaultValues: { name: '', email: '', message: '', website: '' },
    });

    /**
     * Sends the validated values and reports the outcome. A filled honeypot
     * is treated as a bot: nothing is sent, but success is shown.
     *
     * @param inputs - Values that passed validation, plus the honeypot.
     */
    async function onSubmit({ website, ...values }: ContactFormInputs): Promise<void> {
        if (coolingDown) {
            return;
        }

        setStatus('idle');

        if (website) {
            reset();
            setStatus('success');
            return;
        }

        try {
            await sendContactMessage(values);
            startCooldown();
            reset();
            setStatus('success');
        } catch {
            setStatus('error');
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            {/** Honeypot: off-screen, unreachable by keyboard, ignored by assistive tech. */}
            <div aria-hidden="true" className="absolute -left-[9999px] size-0 overflow-hidden">
                <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('website')}
                />
            </div>

            <FormField id="contact-name" label={text.contact.name} error={errors.name?.message}>
                <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={inputClass}
                    {...register('name', {
                        required: text.contact.errors.required,
                        minLength: {
                            value: MIN_NAME_LENGTH,
                            message: text.contact.errors.nameTooShort,
                        },
                    })}
                />
            </FormField>

            <FormField id="contact-email" label={text.contact.email} error={errors.email?.message}>
                <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={inputClass}
                    {...register('email', {
                        required: text.contact.errors.required,
                        pattern: {
                            value: EMAIL_PATTERN,
                            message: text.contact.errors.invalidEmail,
                        },
                    })}
                />
            </FormField>

            <FormField
                id="contact-message"
                label={text.contact.message}
                error={errors.message?.message}
            >
                <textarea
                    id="contact-message"
                    rows={6}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    className={inputClass}
                    {...register('message', {
                        required: text.contact.errors.required,
                        minLength: {
                            value: MIN_MESSAGE_LENGTH,
                            message: text.contact.errors.messageTooShort,
                        },
                        maxLength: {
                            value: MAX_MESSAGE_LENGTH,
                            message: text.contact.errors.messageTooLong,
                        },
                    })}
                />
            </FormField>

            <button
                type="submit"
                disabled={isSubmitting || coolingDown}
                className="bg-accent px-6 py-3 font-label uppercase tracking-wide text-accent-foreground disabled:opacity-60"
            >
                {isSubmitting
                    ? text.contact.sending
                    : coolingDown
                        ? `${text.contact.wait} ${secondsFormat.format(remainingSeconds)}`
                        : text.contact.send}
            </button>

            {status === 'success' && (
                <p role="status" className="text-foreground">
                    {text.contact.success}
                </p>
            )}
            {status === 'error' && (
                <p role="alert" className="text-highlight">
                    {text.contact.error}
                </p>
            )}
        </form>
    );
}

export default ContactForm;
