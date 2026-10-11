import { RouterProvider } from 'react-router-dom';

import LanguageProvider from '@/i18n/LanguageProvider.tsx';
import { router } from '@/router';
import ThemeProvider from '@/theme/ThemeProvider';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <RouterProvider router={router} />
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
