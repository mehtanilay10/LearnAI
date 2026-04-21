import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import { getAllModules, getModuleBySlug, getLessonsForModule, getPhaseBySlug } from '@/lib/content';
import { buildModuleMetadata } from '@/lib/seo';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { LessonCard } from '@/components/course/LessonCard';
import { formatHours, pluralize } from '@/lib/utils';

interface Params {
  params: Promise<{ moduleSlug: string }>;
}

export async function generateStaticParams() {
  return getAllModules().map((m) => ({ moduleSlug: m.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { moduleSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return {};
  return buildModuleMetadata({ title: mod.title, description: mod.description, moduleSlug });
}

export default async function ModuleDetailPage({ params }: Params) {
  const { moduleSlug } = await params;
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) notFound();

  const lessons = getLessonsForModule(moduleSlug);
  const phase = getPhaseBySlug(mod.phaseSlug);
  const allModules = getAllModules().sort((a, b) => a.order - b.order);
  const currentIdx = allModules.findIndex((m) => m.slug === moduleSlug);
  const prevModule = currentIdx > 0 ? allModules[currentIdx - 1] : null;
  const nextModule = currentIdx < allModules.length - 1 ? allModules[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Modules', href: '/modules' },
          ...(phase ? [{ label: phase.title, href: '/modules' }] : []),
          { label: mod.title },
        ]}
        className="mb-6"
      />

      {/* Header */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">{mod.icon}</span>
          <div>
            {phase && (
              <p className="text-xs font-medium text-fg-subtle">{phase.title}</p>
            )}
            <div className="mt-1 flex flex-wrap gap-2">
              <DifficultyBadge difficulty={mod.difficulty} size="md" />
              {mod.isOptional && (
                <span className="inline-flex items-center rounded-full border border-border px-2 py-1 text-sm text-fg-subtle">
                  Optional
                </span>
              )}
            </div>
          </div>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-fg-default">{mod.title}</h1>
        <p className="mb-4 text-lg text-fg-muted">{mod.longDescription ?? mod.description}</p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-fg-muted">
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            {pluralize(lessons.length, 'lesson')}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {formatHours(mod.estimatedHours)}
          </span>
        </div>

        {/* Tags */}
        {mod.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {mod.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-canvas-subtle px-2.5 py-0.5 text-xs text-fg-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* What you'll learn */}
      {mod.whatYouLearn && (
        <div className="mb-8 rounded-xl border border-border bg-canvas-subtle p-5">
          <h2 className="mb-3 font-semibold text-fg-default">What you&apos;ll learn</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {mod.whatYouLearn.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-default">
                <span className="mt-0.5 text-accent-fg font-bold shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Lessons */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">
          {lessons.length > 0 ? `${lessons.length} Lessons` : 'Lessons'}
        </h2>

        {lessons.length > 0 ? (
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                moduleSlug={moduleSlug}
                variant="list"
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-sm text-fg-muted">Lessons coming soon for this module.</p>
          </div>
        )}
      </div>

      {/* Module nav */}
      <div className="flex items-center justify-between gap-4 border-t border-border pt-8">
        {prevModule ? (
          <Link
            href={`/modules/${prevModule.slug}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{prevModule.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextModule && (
          <Link
            href={`/modules/${nextModule.slug}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
          >
            <span>{nextModule.title}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
