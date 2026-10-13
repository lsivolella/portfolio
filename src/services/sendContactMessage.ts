import emailjs from '@emailjs/browser';

import { emailjsConfig } from '@/config/emailjs';
import type { ContactFormValues } from '@/types/contact';

/**
 * Sends the contact form to the owner's inbox through EmailJS.
 *
 * @param values - Name, e-mail and message typed by the visitor.
 * @throws If EmailJS rejects the request or the network fails.
 */
export async function sendContactMessage(values: ContactFormValues): Promise<void> {
    await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
            from_name: values.name,
            reply_to: values.email,
            message: values.message,
        },
        { publicKey: emailjsConfig.publicKey },
    );
}
