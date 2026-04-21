import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ModuleCard } from '@/components/course/ModuleCard';
import { FilterBar } from '@/components/ui/FilterBar';
import { getAllModules, getAllPhases } from '@/lib/content';

export const metadata: Metadata = {
  title: 'All Modules',
  description: 'Browse all modules in the LearnAI course. From AI basics to automation, agents, and RAG.',
};

export default function ModulesPage() {
  const modules = getAllModules();
  const phases = getAllPhases();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Course content"
        title="All Modules"
        description="Work through the modules in order or jump to what you need. Each module has clear difficulty ratings and honest time estimates."
        titleAs="h1"
      />

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
}
