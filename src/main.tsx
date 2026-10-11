// Display and label fonts for both themes, self-hosted through Fontsource.
import '@fontsource-variable/oswald';
import '@fontsource/alfa-slab-one';
import '@fontsource/archivo-black';
import '@fontsource/barlow-condensed/300.css';

// Body font shared by both themes.
import '@fontsource-variable/inter';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
