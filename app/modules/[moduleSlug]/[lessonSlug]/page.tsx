import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import {
  getAllModules,
  getAllLessons,
  getModuleBySlug,
  getLessonBySlug,
  getLessonsForModule,
  getAdjacentLessons,
  getLessonBreadcrumb,
  extractTOC,
} from '@/lib/content';
import { buildLessonMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { FurtherReading } from '@/components/content/FurtherReading';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { LessonSidebar } from '@/components/layout/LessonSidebar';
import { TableOfContents } from '@/components/course/TableOfContents';
import { ProgressTracker } from '@/components/course/ProgressTracker';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { ReadingTimeBadge } from '@/components/ui/ReadingTimeBadge';
import { LessonCard } from '@/components/course/LessonCard';

interface Params {
  params: Promise<{ moduleSlug: string; lessonSlug: string }>;
}

export async function generateStaticParams() {
  const allLessons = getAllLessons();
  return allLessons.map((l) => ({
    moduleSlug: l.moduleSlug,
    lessonSlug: l.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { moduleSlug, lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);
  if (!lesson) return {};
  return buildLessonMetadata({
    title: lesson.title,
    description: lesson.description,
    moduleSlug,
    lessonSlug,
  });
}

export default async function LessonDetailPage({ params }: Params) {
  const { moduleSlug, lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);
  const mod = getModuleBySlug(moduleSlug);

  if (!lesson || !mod) notFound();

  const allModules = getAllModules().sort((a, b) => a.order - b.order);
  const moduleLessons = getLessonsForModule(moduleSlug);
  const { prev, next } = getAdjacentLessons(lesson);
  const { phase } = getLessonBreadcrumb(lesson);
  const toc = extractTOC(lesson.blocks);

  // Build lessonsByModule map for sidebar
  const lessonsByModule: Record<string, typeof moduleLessons> = {};
  for (const m of allModules) {
    lessonsByModule[m.slug] = getLessonsForModule(m.slug);
  }

  // Related lessons
  const relatedLessons = (lesson.relatedLessons ?? [])
    .map((slug) => getLessonBySlug(slug))
    .filter(Boolean) as Awaited<ReturnType<typeof getLessonBySlug>>[];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar — hidden on mobile, sticky on desktop */}
      <aside
        className="hidden w-64 shrink-0 lg:block"
        aria-label="Course sidebar"
      >
        <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
          <LessonSidebar
            currentModuleSlug={moduleSlug}
            currentLessonSlug={lessonSlug}
            modules={allModules}
            lessonsByModule={lessonsByModule}
          />
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 min-w-0">
        <article className="mx-auto w-full max-w-2xl min-w-0 px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs
            items={[
              { label: 'Modules', href: '/modules' },
              ...(phase ? [{ label: phase.title, href: '/modules' }] : []),
              { label: mod.title, href: `/modules/${moduleSlug}` },
              { label: lesson.title },
            ]}
            className="mb-6"
          />

          {/* Lesson header */}
          <header className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <DifficultyBadge difficulty={lesson.difficulty} size="md" />
              <ReadingTimeBadge minutes={lesson.estimatedMinutes} />
              {lesson.isOptional && (
                <span className="rounded-full border border-border px-2 py-0.5 text-xs text-fg-subtle">
                  Optional
                </span>
              )}
            </div>
            <h1 className="mb-2 text-2xl font-bold leading-snug text-fg-default sm:text-3xl">
              {lesson.title}
            </h1>
            <p className="text-base text-fg-muted">{lesson.description}</p>

            {/* Tags */}
            {lesson.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {lesson.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Progress tracker (mobile) */}
          <div className="mb-6 lg:hidden">
            <ProgressTracker
              lessonSlug={lessonSlug}
              moduleSlug={moduleSlug}
              allModuleLessonSlugs={moduleLessons.map((l) => l.slug)}
            />
          </div>

          {/* Content blocks */}
          <ContentBlockRenderer blocks={lesson.blocks} />

          {/* Further reading */}
          {lesson.furtherReading && lesson.furtherReading.length > 0 && (
            <FurtherReading items={lesson.furtherReading} />
          )}

          {/* Lesson navigation */}
          <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
            {prev ? (
              <Link
                href={`/modules/${moduleSlug}/${prev.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg max-w-[45%]"
              >
                <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="line-clamp-1">{prev.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/modules/${moduleSlug}/${next.slug}`}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg max-w-[45%]"
              >
                <span className="line-clamp-1">{next.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            )}
          </div>

          {/* Related lessons */}
          {relatedLessons.length > 0 && (
            <section className="mt-10" aria-label="Related lessons">
              <h2 className="mb-4 text-lg font-bold text-fg-default">Related lessons</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLessons.filter(Boolean).map((rel) => (
                  <LessonCard
                    key={rel!.slug}
                    lesson={rel!}
                    moduleSlug={rel!.moduleSlug}
                  />
                ))}
              </div>
            </section>
          )}
        </article>

        {/* Right sidebar: TOC + progress (desktop) */}
        <aside
          className="hidden w-56 shrink-0 xl:block"
          aria-label="Page navigation"
        >
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto space-y-6 p-4">
            <TableOfContents entries={toc} />
            <ProgressTracker
              lessonSlug={lessonSlug}
              moduleSlug={moduleSlug}
              allModuleLessonSlugs={moduleLessons.map((l) => l.slug)}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
