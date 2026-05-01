import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ModuleCard } from '@/components/course/ModuleCard';
import { getAllCourses, getCourseBySlug, getPhasesForCourse, getModulesForCourse } from '@/lib/content';

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
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Params) {
  const { courseSlug } = await params;
  const course = getCourseBySlug(courseSlug);
  if (!course) notFound();

  const phases = getPhasesForCourse(courseSlug);
  const allModules = getModulesForCourse(courseSlug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow={`${course.icon} Course`}
        title={course.title}
        description={course.description}
        titleAs="h1"
      />

      {phases.map((phase) => {
        const phaseModules = allModules.filter((m) => m.phaseSlug === phase.slug);
        if (phaseModules.length === 0) return null;
        return (
          <section key={phase.id} className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl" aria-hidden="true">{phase.icon}</span>
              <div>
                <h2 className="font-bold text-fg-default">{phase.title}</h2>
                <p className="text-sm text-fg-muted">{phase.subtitle}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {phaseModules.map((mod) => (
                <ModuleCard
                  key={mod.id}
                  module={mod}
                  lessonCount={mod.lessonSlugs.length}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
