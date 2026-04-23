'use client';

import { useEffect, useMemo, useState } from 'react';
import { Download, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface PWAInstallButtonProps {
  className?: string;
}

function isStandaloneMode(): boolean {
  if (typeof window === 'undefined') return false;

  const iosStandalone =
    typeof window.navigator !== 'undefined' &&
    'standalone' in window.navigator &&
    Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone);

  return window.matchMedia('(display-mode: standalone)').matches || iosStandalone;
}

export function PWAInstallButton({ className }: PWAInstallButtonProps) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [showIosHelp, setShowIosHelp] = useState(false);

  const isIos = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }, []);

  useEffect(() => {
    setInstalled(isStandaloneMode());

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const onAppInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
      setShowIosHelp(false);
    };

    const media = window.matchMedia('(display-mode: standalone)');
    const onDisplayModeChange = (e: MediaQueryListEvent) => {
      if (e.matches) setInstalled(true);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    media.addEventListener('change', onDisplayModeChange);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
      media.removeEventListener('change', onDisplayModeChange);
    };
  }, []);

  if (installed) return null;

  const canInstallWithPrompt = deferredPrompt !== null;
  const shouldShowFallback = !canInstallWithPrompt && isIos;

  if (!canInstallWithPrompt && !shouldShowFallback) {
    return null;
  }

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;

      if (choice.outcome !== 'accepted') {
        setDeferredPrompt(null);
      }
      return;
    }

    setShowIosHelp((value) => !value);
  };

  return (
    <div className={cn('w-full', className)}>
      <button
        type="button"
        onClick={handleInstall}
        className="flex w-full items-center justify-center gap-2 rounded-md border border-border bg-canvas-subtle px-3 py-2 text-sm font-medium text-fg-default transition-colors hover:bg-canvas"
        aria-expanded={showIosHelp}
        aria-controls="ios-install-help"
      >
        {canInstallWithPrompt ? (
          <Download className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Share2 className="h-4 w-4" aria-hidden="true" />
        )}
        Install App
      </button>

      {shouldShowFallback && showIosHelp && (
        <p id="ios-install-help" className="mt-2 rounded-md border border-border bg-canvas px-3 py-2 text-xs text-fg-muted">
          On iPhone/iPad: tap Share in your browser, then choose Add to Home Screen.
        </p>
      )}
    </div>
  );
}
