import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ModuleCard } from '@/components/course/ModuleCard';
import { FilterBar } from '@/components/ui/FilterBar';
import { getAllCourses, getPhasesForCourse, getModulesForCourse } from '@/lib/content';

export const metadata: Metadata = {
  title: 'All Modules',
  description: 'Browse all modules across all courses on LearnAI. From AI basics to AI-powered coding.',
};

export default function ModulesPage() {
  const courses = getAllCourses();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Course content"
        title="All Modules"
        description="Work through the modules in order or jump to what you need. Each module has clear difficulty ratings and honest time estimates."
        titleAs="h1"
      />

      {courses.map((course) => {
        const phases = getPhasesForCourse(course.slug);
        const modules = getModulesForCourse(course.slug);
        if (modules.length === 0) return null;

        return (
          <div key={course.id} className="mb-16">
            <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
              <span className="text-2xl" aria-hidden="true">{course.icon}</span>
              <div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-xl font-bold text-fg-default hover:text-accent-fg transition-colors"
                >
                  {course.title}
                </Link>
                <p className="text-sm text-fg-muted">{course.subtitle}</p>
              </div>
            </div>

            {phases.map((phase) => {
              const phaseModules = modules.filter((m) => m.phaseSlug === phase.slug);
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
      })}
    </div>
  );
}
