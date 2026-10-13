/**
 * Identifier of a contact channel. Each id needs an icon and a label.
 */
export type ContactChannelId = 'email' | 'whatsapp' | 'linkedin' | 'github';

/**
 * A way of reaching the person, shown as a clickable icon.
 */
export interface ContactChannel {
    /** Channel identifier. */
    id: ContactChannelId;
    /** Link opened when the icon is clicked. */
    href: string;
}

/**
 * Values collected by the contact form.
 */
export interface ContactFormValues {
    /** Sender name. */
    name: string;
    /** Sender e-mail address, used for the reply. */
    email: string;
    /** Message body. */
    message: string;
}
