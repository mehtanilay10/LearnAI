'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { PWAInstallButton } from '@/components/ui/PWAInstallButton';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/courses', label: 'Courses' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/tools', label: 'Tools' },
  { href: '/prompts', label: 'Prompts' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-canvas transition-theme">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-fg-default hover:text-accent-fg transition-colors"
        >
          <GraduationCap className="h-5 w-5 text-accent-fg" aria-hidden="true" />
          <span className="text-sm">LearnAI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-accent-subtle text-accent-fg'
                    : 'text-fg-muted hover:bg-canvas-subtle hover:text-fg-default'
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/plan"
            className="hidden items-center gap-1.5 rounded-md bg-accent-fg px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-emphasis sm:flex"
          >
            <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
            90-Day Plan
          </Link>
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-fg-muted transition-colors hover:bg-canvas-subtle hover:text-fg-default md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-canvas md:hidden animate-slide-up">
          <nav
            className="flex flex-col gap-1 px-4 py-3"
            aria-label="Mobile navigation"
          >
            <PWAInstallButton className="mb-2" />

            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-accent-subtle text-accent-fg'
                      : 'text-fg-muted hover:bg-canvas-subtle hover:text-fg-default'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/plan"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex items-center gap-1.5 rounded-md bg-accent-fg px-3 py-2 text-sm font-medium text-white"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              90-Day Plan
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
