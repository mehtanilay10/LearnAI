import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center gap-1 text-xs text-fg-muted', className)}
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition-colors hover:text-fg-default"
      >
        <Home className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3 text-fg-subtle" aria-hidden="true" />
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-fg-default"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-fg-default" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
