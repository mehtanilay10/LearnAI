import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { RoadmapTimeline } from '@/components/course/RoadmapTimeline';
import { getAllPhases, getAllModules } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Learning Roadmap',
  description: 'A clear visual roadmap for the LearnAI course — from AI foundations through automation, agents, and advanced workflows.',
};

export default function RoadmapPage() {
  const phases = getAllPhases();
  const modules = getAllModules();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Learning path"
        title="Course Roadmap"
        description="Here's exactly what you'll learn and in what order. Each phase builds on the last — but you can jump to any module you need."
        titleAs="h1"
      />

      <div className="mb-6 rounded-xl border border-border bg-canvas-subtle p-4 text-sm text-fg-muted">
        <p>
          <strong className="text-fg-default">How to use this:</strong> Follow the phases in order for the best experience.
          Modules marked <em>Optional</em> can be skipped if you have a narrow goal.
          Check your progress in each module.
        </p>
      </div>

      <RoadmapTimeline phases={phases} />

      {/* Module overview table */}
      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">All modules at a glance</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="min-w-full text-sm">
            <thead className="bg-canvas-subtle">
              <tr>
                {['Phase', 'Module', 'Difficulty', 'Hours', 'Lessons'].map((h) => (
                  <th
                    key={h}
                    className="border-b border-border px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-fg-muted"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {modules.map((mod, idx) => {
                const phase = phases.find((p) => p.slug === mod.phaseSlug);
                return (
                  <tr
                    key={mod.id}
                    className={idx % 2 === 0 ? 'bg-canvas' : 'bg-canvas-subtle'}
                  >
                    <td className="border-b border-border px-4 py-2.5 text-fg-muted text-xs">
                      {phase?.title.replace('Phase 1: ', 'P1 ').replace('Phase 2: ', 'P2 ')}
                    </td>
                    <td className="border-b border-border px-4 py-2.5 font-medium text-fg-default">
                      <a href={`/modules/${mod.slug}`} className="hover:text-accent-fg transition-colors">
                        {mod.title}
                      </a>
                    </td>
                    <td className="border-b border-border px-4 py-2.5">
                      <span className={`inline-flex rounded-full border px-2 py-0 text-xs font-medium
                        ${mod.difficulty === 'beginner' ? 'bg-success-subtle text-success-fg border-success-muted' :
                          mod.difficulty === 'intermediate' ? 'bg-attention-subtle text-attention-fg border-attention-muted' :
                          'bg-done-muted text-done-fg border-done-fg'}`}>
                        {mod.difficulty}
                      </span>
                    </td>
                    <td className="border-b border-border px-4 py-2.5 text-fg-muted">
                      {mod.estimatedHours}h
                    </td>
                    <td className="border-b border-border px-4 py-2.5 text-fg-muted">
                      {mod.lessonSlugs.length}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
