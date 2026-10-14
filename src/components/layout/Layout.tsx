import { Outlet, useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

/**
 * Site frame. The active page renders through <Outlet /> and fades in on
 * every route change, because the `key` makes React mount a new <main>.
 */
function Layout() {
    const { pathname } = useLocation();

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main
                key={pathname}
                className="flex-1 animate-fade-in motion-reduce:animate-none"
            >
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;
