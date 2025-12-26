import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Import Bootstrap JavaScript for interactive components
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import stylesheets in the correct order
import './styles/css/bootstrap.min.css';
import './styles/css/style.css';
import './styles/css/design-system.css';
import './styles/css/animations.css';
import './styles/css/about-enhanced.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
