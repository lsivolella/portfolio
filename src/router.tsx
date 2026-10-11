import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/layout/Layout';
import ContactPage from '@/pages/Contact/ContactPage';
import HomePage from '@/pages/Home/HomePage';
import ProjectsPage from '@/pages/Projects/ProjectsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'projects', element: <ProjectsPage /> },
            { path: 'contact', element: <ContactPage /> },
        ],
    },
]);