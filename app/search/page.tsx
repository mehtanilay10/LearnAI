'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight } from 'lucide-react';
import { searchAll } from '@/lib/content';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof searchAll>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey && document.activeElement === document.body) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length > 1) {
      setResults(searchAll(value));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-fg-default">Search</h1>
        <p className="mt-1 text-sm text-fg-muted">Find lessons, modules, glossary terms, and more. Press <kbd className="rounded border border-border bg-canvas-subtle px-1.5 py-0.5 text-xs">/</kbd> to focus.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-fg-muted" aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search lessons, modules, glossary terms..."
          className="w-full rounded-lg border border-border bg-canvas pl-10 pr-10 py-3 text-sm text-fg-default placeholder:text-fg-muted focus:border-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-fg/20"
          autoFocus
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); inputRef.current?.focus(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-fg-muted hover:bg-canvas-subtle hover:text-fg-default"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-6 space-y-3">
        {results.length === 0 && query.trim().length > 1 && (
          <p className="text-sm text-fg-muted text-center py-8">No results found for &ldquo;{query}&rdquo;.</p>
        )}
        {results.map((result) => (
          <Link
            key={`${result.type}-${result.slug}`}
            href={result.type === 'lesson' ? `/courses/${result.moduleSlug || ''}/${result.slug}` : `/${result.type === 'module' ? 'courses' : result.type}/${result.slug}`}
            className="group flex items-center justify-between rounded-lg border border-border bg-canvas p-4 transition-all hover:border-accent-fg"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle capitalize">{result.type}</span>
                {result.difficulty && (
                  <span className="rounded-full bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle capitalize">{result.difficulty}</span>
                )}
              </div>
              <p className="mt-1.5 text-sm font-medium text-fg-default group-hover:text-accent-fg transition-colors">{result.title}</p>
              <p className="mt-0.5 text-xs text-fg-muted line-clamp-1">{result.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-fg-muted group-hover:text-accent-fg transition-colors" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}
