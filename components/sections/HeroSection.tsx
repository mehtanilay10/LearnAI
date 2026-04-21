import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
  totalLessons: number;
  totalHours: number;
  totalGlossaryTerms: number;
}

export function HeroSection({ totalLessons, totalHours, totalGlossaryTerms }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-canvas py-16 sm:py-24">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-fg-default) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg-default) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        {/* Badge */}
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent-muted bg-accent-subtle px-3 py-1 text-xs font-medium text-accent-fg">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-fg animate-pulse" aria-hidden="true" />
          Practical AI Literacy Course
        </span>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-fg-default sm:text-5xl lg:text-6xl text-balance">
          Learn AI.{' '}
          <span className="text-accent-fg">Understand it.</span>{' '}
          Use it well.
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-fg-muted leading-relaxed">
          A complete, beginner-friendly course on AI tools, prompting, automation, agents, and modern AI workflows. No coding required.
        </p>

        {/* CTAs */}
        <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/modules"
            className="flex items-center gap-2 rounded-lg bg-accent-fg px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-emphasis"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Start Learning
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/roadmap"
            className="flex items-center gap-2 rounded-lg border border-border bg-canvas px-5 py-2.5 font-medium text-fg-default transition-colors hover:border-accent-fg hover:text-accent-fg dark:bg-canvas-subtle"
          >
            View Roadmap
          </Link>
        </div>

        {/* Stats */}
        <div className="mx-auto grid max-w-lg grid-cols-3 gap-4 rounded-xl border border-border bg-canvas-subtle p-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-fg-default">
              <BookOpen className="h-5 w-5 text-accent-fg" aria-hidden="true" />
              {totalLessons}+
            </div>
            <p className="mt-0.5 text-xs text-fg-muted">Lessons</p>
          </div>
          <div className="border-x border-border text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-fg-default">
              <Clock className="h-5 w-5 text-success-fg" aria-hidden="true" />
              {totalHours}h
            </div>
            <p className="mt-0.5 text-xs text-fg-muted">Content</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold text-fg-default">
              <CheckCircle className="h-5 w-5 text-done-fg" aria-hidden="true" />
              {totalGlossaryTerms}+
            </div>
            <p className="mt-0.5 text-xs text-fg-muted">Glossary terms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
