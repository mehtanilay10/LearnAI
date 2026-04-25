'use client';

import { useEffect } from 'react';

const isPwaEnabled =
  process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_ENABLE_PWA_DEV === 'true';

export function PWARegistration() {
  useEffect(() => {
    if (!isPwaEnabled || !('serviceWorker' in navigator)) {
      return;
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
          updateViaCache: 'none',
        });

        void registration.update().catch(() => undefined);
      } catch (error) {
        if (process.env.NODE_ENV !== 'production') {
          console.error('PWA service worker registration failed.', error);
        }
      }
    };

    if (document.readyState === 'complete') {
      void registerServiceWorker();
      return;
    }

    const onLoad = () => {
      void registerServiceWorker();
    };

    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return null;
}