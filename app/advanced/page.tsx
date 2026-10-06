import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';
import { advancedConcepts } from '@/content/advanced';

export const metadata: Metadata = {
  title: 'Advanced Concepts',
  description: 'Deep dives into advanced AI concepts: LLM internals, RAG, agents, embeddings, MCP, evaluation, and more.',
};

const CATEGORY_LABELS: Record<string, string> = {
  'llm-internals': 'LLM Internals',
  'rag-and-memory': 'RAG & Memory',
  'agents': 'Agents',
  'evaluation': 'Evaluation',
  'deployment': 'Deployment',
  'safety': 'Safety',
  'prompting-advanced': 'Advanced Prompting',
};

const CATEGORIES = [...new Set(advancedConcepts.map((c) => c.category))].sort((a, b) => {
  const labelA = CATEGORY_LABELS[a] ?? a;
  const labelB = CATEGORY_LABELS[b] ?? b;
  return labelA.localeCompare(labelB);
});

export default function AdvancedPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Deep dives"
        title="Advanced Concepts Hub"
        description="Go deeper on the technical ideas powering modern AI. These concepts are for learners who want to understand what's actually happening under the hood."
        titleAs="h1"
      />

      <CalloutBox
        variant="info"
        title="These are not required for most users"
        text="The core course gives you everything you need to use AI confidently. Come here when you're curious about the 'why' and 'how' behind the tools."
        className="mb-8"
      />

      {CATEGORIES.map((cat) => {
        const catConcepts = advancedConcepts.filter((c) => c.category === cat);
        const label = CATEGORY_LABELS[cat] ?? cat;
        return (
          <section key={cat} className="mb-10">
            <h2 className="mb-4 text-lg font-bold text-fg-default">{label}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catConcepts.map((concept) => (
                <Link
                  key={concept.id}
                  href={`/advanced/${concept.slug}`}
                  className="flex flex-col rounded-xl border border-border bg-canvas p-4 dark:bg-canvas-subtle transition-colors hover:border-accent-muted"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <DifficultyBadge difficulty={concept.difficulty} />
                  </div>
                  <h3 className="mb-1 font-semibold text-fg-default">{concept.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1">
                    {concept.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
