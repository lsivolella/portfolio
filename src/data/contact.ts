import type { ContactChannel } from '@/types/contact';

/**
 * Contact channels in display order. Remove an entry to hide that channel.
 */
export const contactChannels: ContactChannel[] = [
    { id: 'email', href: 'mailto:lucassivolella@gmail.com' },
    { id: 'whatsapp', href: 'https://wa.me/5511966377876' },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/lucassivolella' },
    { id: 'github', href: 'https://github.com/lsivolella' },
];
