import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            {/* <Header /> later */}
            <main>
                <Outlet />
            </main>
            {/* <Footer /> later */}
        </>
    );
}

export default Layout;