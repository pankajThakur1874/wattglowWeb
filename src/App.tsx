import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from './routes/AppRoutes';
import { initGA, trackPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Track initial page view
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
