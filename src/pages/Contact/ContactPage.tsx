import Container from '@/components/ui/Container';
import { useLanguage } from '@/i18n/useLanguage';

import ContactForm from './components/ContactForm';
import ContactLinks from './components/ContactLinks';

/**
 * Contact page: heading, clickable channels and the message form.
 */
function ContactPage() {
    const { text } = useLanguage();

    return (
        <Container className="py-12">
            <h1 className="font-display text-4xl">{text.contact.title}</h1>
            <p className="mt-4 max-w-prose text-lg">{text.contact.intro}</p>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_2fr]">
                <section aria-label={text.contact.title}>
                    <ContactLinks />
                </section>

                <ContactForm />
            </div>
        </Container>
    );
}

export default ContactPage;
