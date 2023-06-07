import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router.tsx';
import { GlobalProvider } from './contexts/GlobalContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <Router />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
