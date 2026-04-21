import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Users, Layers } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getCourseStats, getAllPhases } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About This Course',
  description: 'About the LearnAI course — who it\'s for, how it\'s structured, and what makes it different.',
};

export default function AboutPage() {
  const stats = getCourseStats();
  const phases = getAllPhases();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="About"
        title="Course Overview"
        description="Everything you need to know about the LearnAI course before you start."
        titleAs="h1"
      />

      {/* Quick stats */}
      <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { icon: <BookOpen className="h-4 w-4 text-accent-fg" />, label: 'Lessons', value: `${stats.totalLessons}+` },
          { icon: <Layers className="h-4 w-4 text-success-fg" />, label: 'Modules', value: stats.totalModules },
          { icon: <Clock className="h-4 w-4 text-attention-fg" />, label: 'Hours', value: `${stats.totalHours}+` },
          { icon: <Users className="h-4 w-4 text-done-fg" />, label: 'Glossary terms', value: `${stats.totalGlossaryTerms}+` },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-canvas-subtle p-4 text-center">
            <div className="flex justify-center mb-1">{s.icon}</div>
            <p className="text-2xl font-bold text-fg-default">{s.value}</p>
            <p className="text-xs text-fg-muted">{s.label}</p>
          </div>
        ))}
      </div>

      {/* What it is */}
      <section className="mb-8 prose-section">
        <h2 className="mb-3 text-xl font-bold text-fg-default">What is LearnAI?</h2>
        <p className="mb-3 text-fg-muted leading-relaxed">
          LearnAI is a practical, structured course for anyone who wants to build genuine AI literacy — not hype literacy, not theoretical knowledge, but real practical skill with AI tools and workflows.
        </p>
        <p className="mb-3 text-fg-muted leading-relaxed">
          It is deliberately not a developer course. You will not write machine learning code or train models. Instead, you will learn how to use the AI tools that exist today to do meaningful work faster and better.
        </p>
        <p className="text-fg-muted leading-relaxed">
          The course is organized into phases and modules that build progressively. You can follow it start-to-finish or jump directly to the topics you need most.
        </p>
      </section>

      {/* Course phases */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-fg-default">Course Structure</h2>
        <div className="space-y-4">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="rounded-xl border border-border bg-canvas p-5 dark:bg-canvas-subtle"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">{phase.icon}</span>
                <div>
                  <h3 className="font-bold text-fg-default">{phase.title}</h3>
                  <p className="text-xs text-fg-muted">~{phase.estimatedWeeks} weeks</p>
                </div>
              </div>
              <p className="text-sm text-fg-muted">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-bold text-fg-default">What&apos;s Included</h2>
        <div className="rounded-xl border border-border bg-canvas p-5 dark:bg-canvas-subtle">
          <ul className="space-y-2">
            {[
              '📚 Carefully structured lessons with clear difficulty labels',
              '✍️ A growing Prompt Library with ready-to-use templates',
              '📖 AI Glossary with plain-English definitions',
              '🛠️ Tool comparison guide with honest pros/cons',
              '🗺️ Visual learning roadmap and 90-day plan',
              '⚙️ Mini projects to practice real skills',
              '📈 Progress tracking (stored locally, private)',
              '🔒 Safety and responsible AI guidance throughout',
              '📊 Mermaid diagrams and visual concept maps',
            ].map((item, i) => (
              <li key={i} className="text-sm text-fg-default flex items-start gap-2">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">Design Philosophy</h2>
        <div className="space-y-3">
          {[
            { label: 'Beginner-friendly without being dumbed down', desc: 'We respect your intelligence and your time. Concepts are explained clearly, not simplified to meaninglessness.' },
            { label: 'Practical over theoretical', desc: 'Every concept connects to a real use case. We focus on what you can do with AI today, not how it might work in the future.' },
            { label: 'Honest about limitations', desc: "AI has real limitations. Hallucination, bias, privacy risks — we cover these honestly, not as footnotes." },
            { label: 'Your pace, your path', desc: 'The content is always available, there are no deadlines, and you can jump to what matters most to you right now.' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-border bg-canvas p-4 dark:bg-canvas-subtle">
              <p className="mb-0.5 font-semibold text-fg-default text-sm">{item.label}</p>
              <p className="text-sm text-fg-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/modules"
          className="flex items-center gap-2 rounded-lg bg-accent-fg px-5 py-2.5 font-medium text-white hover:bg-accent-emphasis transition-colors"
        >
          Start Learning
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <Link
          href="/roadmap"
          className="rounded-lg border border-border px-5 py-2.5 font-medium text-fg-muted hover:border-accent-fg hover:text-accent-fg transition-colors"
        >
          View Roadmap
        </Link>
      </div>
    </div>
  );
}
