'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FAQ } from '@/types';

interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border bg-canvas overflow-hidden dark:bg-canvas-subtle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-canvas-subtle"
      >
        <span className="text-sm font-medium text-fg-default leading-snug">{faq.question}</span>
        {open ? (
          <ChevronUp className="mt-0.5 h-4 w-4 shrink-0 text-fg-muted" aria-hidden="true" />
        ) : (
          <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-fg-muted" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3 animate-slide-up">
          <p className="text-sm text-fg-muted leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQAccordion({ faqs, className }: FAQAccordionProps) {
  if (faqs.length === 0) return null;

  return (
    <div className={cn('space-y-2', className)}>
      {faqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
}
