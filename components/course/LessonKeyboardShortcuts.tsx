'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function LessonKeyboardShortcuts({ prevHref, nextHref }: { prevHref?: string; nextHref?: string }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = document.activeElement?.tagName.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      if (e.key === 'j' && nextHref) {
        e.preventDefault();
        router.push(nextHref);
      } else if (e.key === 'k' && prevHref) {
        e.preventDefault();
        router.push(prevHref);
      } else if (e.key === '/' && pathname !== '/search') {
        e.preventDefault();
        router.push('/search');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextHref, prevHref, pathname, router]);

  return null;
}
