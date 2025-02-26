import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter ,
  } from 'react-router-dom';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  // </StrictMode>
);
