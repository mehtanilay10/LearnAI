'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ProjectCard } from '@/components/content/ProjectCard';
import { ProjectModal } from '@/components/content/ProjectModal';
import { CalloutBox } from '@/components/ui/CalloutBox';
import type { MiniProject } from '@/types';

interface ProjectsContentProps {
  projects: MiniProject[];
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const [selected, setSelected] = useState<MiniProject | null>(null);

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
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </section>
      )}

      {advancedProjects.length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-bold text-fg-default">🟡 Intermediate Projects</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {advancedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </section>
      )}

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
