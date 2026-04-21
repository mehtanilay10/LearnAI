import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ProjectCard } from '@/components/content/ProjectCard';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { projects } from '@/content/projects';

export const metadata: Metadata = {
  title: 'Mini Projects',
  description: 'Hands-on AI mini projects for beginners and intermediate learners. Build real skills through practical exercises.',
};

export default function ProjectsPage() {
  const beginnerProjects = projects.filter((p) => p.difficulty === 'beginner');
  const advancedProjects = projects.filter((p) => p.difficulty !== 'beginner');

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Practice"
        title="Mini Projects"
        description="Short, focused projects that put your AI skills to work. Each project takes 1–3 hours and teaches you something real."
        titleAs="h1"
      />

      <CalloutBox
        variant="tip"
        title="Why do projects?"
        text="Reading about AI is good. Using AI on a real task is 10x better. These projects are designed to be short enough that you'll actually do them — and impactful enough that you'll remember what you learned."
        className="mb-8"
      />

      {beginnerProjects.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-fg-default">🟢 Beginner Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beginnerProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {advancedProjects.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-fg-default">🟡 Intermediate Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advancedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {/* Project detail section */}
      <div className="mt-12 space-y-10">
        <h2 className="text-2xl font-bold text-fg-default">Project Details</h2>
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.slug}
            className="scroll-mt-20 rounded-xl border border-border bg-canvas p-6 dark:bg-canvas-subtle"
          >
            <h3 className="mb-1 text-xl font-bold text-fg-default">{project.title}</h3>
            <p className="mb-4 text-fg-muted">{project.description}</p>

            <div className="mb-6">
              <h4 className="mb-2 text-sm font-semibold text-fg-default">Steps</h4>
              <ol className="space-y-2">
                {project.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent-fg text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-sm text-fg-default">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-lg bg-success-subtle border border-success-muted p-3 mb-4">
              <p className="text-sm font-medium text-success-fg mb-1">Expected output</p>
              <p className="text-sm text-fg-default">{project.expectedOutput}</p>
            </div>

            {project.bonusChallenges && (
              <div>
                <h4 className="mb-2 text-sm font-semibold text-fg-default">⭐ Bonus challenges</h4>
                <ul className="space-y-1">
                  {project.bonusChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="text-attention-fg">→</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
