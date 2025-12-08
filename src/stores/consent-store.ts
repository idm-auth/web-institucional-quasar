import { defineStore } from 'pinia';
import { ref } from 'vue';
import { LocalStorage } from 'quasar';

interface ConsentData {
  analytics: boolean;
  date: string;
}

const CONSENT_KEY = 'cookie-consent';

export const useConsentStore = defineStore('consent', () => {
  const analyticsConsent = ref<boolean | null>(null);
  const consentGiven = ref(false);

  function loadConsent() {
    const stored = LocalStorage.getItem<ConsentData>(CONSENT_KEY);
    if (stored) {
      analyticsConsent.value = stored.analytics;
      consentGiven.value = true;
      
      // Se já tinha consentimento, carrega GA
      if (stored.analytics) {
        loadGA();
      }
    }
  }

  function saveConsent(analytics: boolean) {
    analyticsConsent.value = analytics;
    consentGiven.value = true;
    LocalStorage.set(CONSENT_KEY, { analytics, date: new Date().toISOString() });
  }

  function loadGA() {
    if (typeof window.gtag !== 'undefined') return;
    
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!measurementId) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.onerror = () => {
      // Silenciosamente ignora erro (ad blocker, etc)
    };
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
  }

  function acceptAll() {
    saveConsent(true);
    loadGA();
  }

  function rejectAll() {
    saveConsent(false);
  }

  return {
    loadConsent,
    analyticsConsent,
    consentGiven,
    saveConsent,
    acceptAll,
    rejectAll,
  };
});
