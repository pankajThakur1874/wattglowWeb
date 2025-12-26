import { GOOGLE_ANALYTICS_ID } from './constants';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initGA() {
  // Create script element for gtag.js
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GOOGLE_ANALYTICS_ID);
}

export function trackPageView(url: string) {
  if (window.gtag) {
    window.gtag('config', GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
