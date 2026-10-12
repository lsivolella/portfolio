import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

/**
 * Site frame. The footer is pushed to the bottom of the viewport on short
 * pages, and the active page renders through <Outlet />.
 */
function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;