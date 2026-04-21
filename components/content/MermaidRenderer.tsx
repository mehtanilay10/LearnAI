'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface MermaidRendererProps {
  definition: string;
  caption?: string;
  className?: string;
}

let mermaidInitialized = false;

export function MermaidRenderer({ definition, caption, className }: MermaidRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'rendered' | 'error'>('loading');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default;

        if (!mermaidInitialized) {
          mermaid.initialize({
            startOnLoad: false,
            theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default',
            securityLevel: 'loose',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: 13,
          });
          mermaidInitialized = true;
        }

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, definition);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setStatus('rendered');
        }
      } catch (err) {
        if (!cancelled) {
          setStatus('error');
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
        }
      }
    }

    render();
    return () => {
      cancelled = true;
    };
  }, [definition]);

  if (status === 'error') {
    return (
      <div className={cn('my-4 rounded-lg border border-danger-muted bg-danger-subtle p-4', className)}>
        <p className="text-sm font-medium text-danger-fg">Diagram rendering failed</p>
        <pre className="mt-1 text-xs text-fg-muted overflow-x-auto">{error}</pre>
      </div>
    );
  }

  return (
    <figure className={cn('my-6', className)}>
      <div
        className={cn(
          'rounded-xl border border-border bg-canvas-subtle p-4 overflow-x-auto',
          status === 'loading' && 'min-h-[120px] animate-pulse',
          'flex items-center justify-center'
        )}
      >
        <div
          ref={containerRef}
          className="mermaid max-w-full"
          aria-label={caption ?? 'Diagram'}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-fg-subtle">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
