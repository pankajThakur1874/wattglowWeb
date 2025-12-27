import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Import and expose Bootstrap JavaScript for interactive components
// Bootstrap 5.3+ ES modules don't auto-expose to window, so we do it manually
if (typeof window !== 'undefined') {
  // #region agent log
  fetch('http://127.0.0.1:7243/ingest/689acc4f-6fb5-4fe6-a0b0-3c76fbb96c99',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:8',message:'Loading Bootstrap',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
  // #endregion
  // @ts-ignore - Bootstrap doesn't have complete TypeScript definitions
  import('bootstrap').then((bootstrap: any) => {
    (window as any).bootstrap = bootstrap.default || bootstrap;
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/689acc4f-6fb5-4fe6-a0b0-3c76fbb96c99',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:12',message:'Bootstrap loaded and exposed',data:{hasBootstrap:!!(window as any).bootstrap,hasDropdown:!!(window as any).bootstrap?.Dropdown},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
  }).catch(() => {
    // Fallback: import the bundle and try to access it
    // #region agent log
    fetch('http://127.0.0.1:7243/ingest/689acc4f-6fb5-4fe6-a0b0-3c76fbb96c99',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.tsx:16',message:'Bootstrap import failed, trying bundle',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      // The bundle might expose bootstrap differently
      if (!(window as any).bootstrap) {
        // Try accessing via globalThis
        const bootstrapGlobal = (globalThis as any).bootstrap || (window as any).bootstrap;
        if (bootstrapGlobal) {
          (window as any).bootstrap = bootstrapGlobal;
        }
      }
    });
  });
}

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
