import Container from '@/components/ui/Container';
import { profile } from '@/data/profile';
import { useLanguage } from '@/i18n/useLanguage';

/**
 * Site footer with the copyright line.
 */
function Footer() {
    const { text } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-border">
            <Container className="py-6 font-label text-sm text-muted">
                © {year} {profile.name}. {text.footer.rights}
            </Container>
        </footer>
    );
}

export default Footer;