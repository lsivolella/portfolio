import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

import { contactChannels } from '@/data/contact';
import { useLanguage } from '@/i18n/useLanguage';
import type { ContactChannelId } from '@/types/contact';

/**
 * Icon for each contact channel. Typed against ContactChannelId, so a new
 * channel must add an entry.
 */
const channelIcons: Record<ContactChannelId, IconType> = {
    email: FaEnvelope,
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedin,
    github: FaGithub,
};

/**
 * Row of clickable icons, one per contact channel.
 */
function ContactLinks() {
    const { text } = useLanguage();

    return (
        <ul className="flex flex-wrap gap-4">
            {contactChannels.map((channel) => {
                const Icon = channelIcons[channel.id];
                const label = text.contact.channels[channel.id];

                return (
                    <li key={channel.id}>
                        <a
                            href={channel.href}
                            target={channel.id === 'email' ? undefined : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={label}
                            title={label}
                            className="flex size-12 items-center justify-center border border-border bg-surface text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                            <Icon size={22} aria-hidden="true" />
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default ContactLinks;
