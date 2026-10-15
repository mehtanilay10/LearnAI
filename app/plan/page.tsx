import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getPlanForCourse, getAllCourses } from '@/lib/content';
import { BookOpen, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learning Plans',
  description: 'Structured 12-week learning plans for AI Basics and Codex courses. Follow a guided path to build real AI skills.',
};

export default function PlansPage() {
  const courses = getAllCourses();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Guided paths"
        title="Learning Plans"
        description="Follow a structured 12-week plan for each course. Each week has clear goals, recommended lessons, tools, and a practical tip."
        titleAs="h1"
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {courses.map((course) => {
          const plan = getPlanForCourse(course.slug);
          if (!plan) return null;
          const totalWeeks = plan.length;

          return (
            <Link
              key={course.slug}
              href={`/plan/${course.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-canvas p-6 transition-all hover:border-accent-fg hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-3xl" aria-hidden="true">{course.icon}</span>
                <div>
                  <h2 className="text-lg font-bold text-fg-default group-hover:text-accent-fg transition-colors">{course.title}</h2>
                  <p className="text-sm text-fg-muted">{course.subtitle}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-4 text-xs text-fg-subtle">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  {totalWeeks} weeks
                </span>
                <span className="flex items-center gap-1">
                  <Target className="h-3.5 w-3.5" aria-hidden="true" />
                  Guided path
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
