import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { advancedConcepts, getAdvancedConceptBySlug } from '@/content/advanced';
import { getLessonBySlug, getCourseForModule } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { ContentBlockRenderer } from '@/components/content/ContentBlockRenderer';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return advancedConcepts.map((concept) => ({
    slug: concept.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const concept = getAdvancedConceptBySlug(slug);
  if (!concept) return {};
  return buildMetadata({
    title: concept.title,
    description: concept.description,
    path: `/advanced/${concept.slug}`,
  });
}

export default async function AdvancedConceptPage({ params }: Params) {
  const { slug } = await params;
  const concept = getAdvancedConceptBySlug(slug);

  if (!concept) {
    notFound();
  }

  const relatedConcepts = (concept.relatedConcepts ?? [])
    .map((s) => getAdvancedConceptBySlug(s))
    .filter((c): c is NonNullable<ReturnType<typeof getAdvancedConceptBySlug>> => Boolean(c));

  const prerequisiteLessons = (concept.prerequisites ?? [])
    .map((s) => getLessonBySlug(s))
    .filter((l): l is NonNullable<ReturnType<typeof getLessonBySlug>> => Boolean(l));

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Advanced Concepts', href: '/advanced' },
          { label: concept.title },
        ]}
        className="mb-6"
      />

      <header className="mb-8">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <DifficultyBadge difficulty={concept.difficulty} size="md" />
        </div>
        <h1 className="mb-2 text-2xl font-bold leading-snug text-fg-default sm:text-3xl">
          {concept.title}
        </h1>
        <p className="text-base text-fg-muted">{concept.description}</p>
      </header>

      {prerequisiteLessons.length > 0 && (
        <div className="mb-8 rounded-xl border border-border bg-canvas-subtle p-4">
          <h2 className="mb-2 text-sm font-semibold text-fg-default">Prerequisites</h2>
          <p className="mb-2 text-xs text-fg-muted">Recommended lessons before reading this concept:</p>
          <ul className="space-y-1">
            {prerequisiteLessons.map((lesson) => {
              const course = getCourseForModule(lesson.moduleSlug);
              if (!course) return null;
              return (
                <li key={lesson.slug}>
                  <Link
                    href={`/courses/${course.slug}/${lesson.moduleSlug}/${lesson.slug}`}
                    className="text-sm text-accent-fg hover:underline"
                  >
                    {lesson.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <ContentBlockRenderer blocks={concept.blocks} />

      {relatedConcepts.length > 0 && (
        <section className="mt-12" aria-label="Related concepts">
          <h2 className="mb-4 text-lg font-bold text-fg-default">Related Concepts</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedConcepts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/advanced/${rel.slug}`}
                className="flex flex-col rounded-xl border border-border bg-canvas p-4 dark:bg-canvas-subtle transition-colors hover:border-accent-muted"
              >
                <div className="mb-2">
                  <DifficultyBadge difficulty={rel.difficulty} />
                </div>
                <h3 className="mb-1 font-semibold text-fg-default">{rel.title}</h3>
                <p className="text-sm text-fg-muted leading-relaxed line-clamp-2">
                  {rel.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
