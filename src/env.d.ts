/**
 * Typed environment variables exposed by Vite (prefix `VITE_`).
 */
interface ImportMetaEnv {
    /** EmailJS service id. */
    readonly VITE_EMAILJS_SERVICE_ID: string;
    /** EmailJS template id. */
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    /** EmailJS public key. */
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
}
