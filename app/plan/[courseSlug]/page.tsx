import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Target, Lightbulb, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getPlanForCourse, getCourseBySlug, getAllCourses, getLessonBySlug } from '@/lib/content';
import { formatMinutes } from '@/lib/utils';
import type { PlanWeek } from '@/types';

interface Params {
  params: Promise<{ courseSlug: string }>;
}

export async function generateStaticParams() {
  return getAllCourses().map((c) => ({ courseSlug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) return {};
  return {
    title: `${course.title} — 12-Week Plan`,
    description: `Follow the structured 12-week learning plan for ${course.title}.`,
  };
}

export default async function PlanPage({ params }: Params) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  const plan = getPlanForCourse(courseSlug);

  if (!course || !plan) notFound();

  const courses = getAllCourses();
  const currentIdx = courses.findIndex((c) => c.slug === courseSlug);
  const prevCourse = currentIdx > 0 ? courses[currentIdx - 1] : null;
  const nextCourse = currentIdx < courses.length - 1 ? courses[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="12-week plan"
        title={`${course.title} — Learning Plan`}
        description="Follow this structured plan to build real AI skills. Each week has clear goals, recommended lessons, and a practical tip."
        titleAs="h1"
      />

      <div className="mt-8 space-y-6">
        {plan.map((week) => (
          <div key={week.week} className="rounded-xl border border-border bg-canvas p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="rounded-full bg-accent-subtle px-2.5 py-0.5 text-xs font-medium text-accent-fg">
                    Week {week.week}
                  </span>
                  <span className="rounded-full bg-canvas-subtle px-2.5 py-0.5 text-xs text-fg-subtle capitalize">
                    {week.focus}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-fg-default">{week.title}</h2>
                <p className="mt-1 text-sm text-fg-muted">{week.description}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-fg-default mb-2 flex items-center gap-1">
                  <Target className="h-4 w-4 text-accent-fg" aria-hidden="true" />
                  Goals
                </h3>
                <ul className="space-y-1">
                  {week.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="mt-0.5 h-4 w-4 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-fg-default mb-2 flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-accent-fg" aria-hidden="true" />
                  Lessons
                </h3>
                <ul className="space-y-1">
                  {week.lessonSlugs?.map((slug) => {
                    const lesson = getLessonBySlug(slug);
                    if (!lesson) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/courses/${courseSlug}/${lesson.moduleSlug}/${slug}`}
                          className="text-sm text-accent-fg hover:underline"
                        >
                          {lesson.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {week.tools && week.tools.length > 0 && (
                  <div className="mt-3">
                    <h3 className="text-sm font-semibold text-fg-default mb-1 flex items-center gap-1">
                      <Lightbulb className="h-4 w-4 text-accent-fg" aria-hidden="true" />
                      Tools
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {week.tools.map((tool) => (
                        <span key={tool} className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle">{tool}</span>
                      ))}
                    </div>
                  </div>
                )}

                {week.tip && (
                  <div className="mt-3">
                    <h3 className="text-sm font-semibold text-fg-default mb-1 flex items-center gap-1">
                      <Clock className="h-4 w-4 text-accent-fg" aria-hidden="true" />
                      Tip
                    </h3>
                    <p className="text-sm text-fg-muted italic">&ldquo;{week.tip}&rdquo;</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
        {prevCourse ? (
          <Link
            href={`/plan/${prevCourse.slug}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{prevCourse.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextCourse && (
          <Link
            href={`/plan/${nextCourse.slug}`}
            className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent-fg hover:text-accent-fg"
          >
            <span>{nextCourse.title}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );
}
