import Link from 'next/link';
import { ArrowRight, BookOpen, LayoutGrid, Compass, Zap, MessageSquare, ShieldCheck } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { getCourseStats, getAllModules, getAllPhases } from '@/lib/content';

export default function HomePage() {
  const stats = getCourseStats();
  const modules = getAllModules().slice(0, 3);
  const phases = getAllPhases();

  const featureCards = [
    {
      icon: <BookOpen className="h-5 w-5 text-accent-fg" aria-hidden="true" />,
      title: 'Structured Learning Path',
      description: 'Follow a clear roadmap from AI basics to advanced workflows. No guessing what to learn next.',
    },
    {
      icon: <Zap className="h-5 w-5 text-success-fg" aria-hidden="true" />,
      title: 'Practical Focus',
      description: 'Every lesson connects to real tasks. You\'ll use what you learn the same day.',
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-done-fg" aria-hidden="true" />,
      title: 'Prompting Mastery',
      description: 'The single highest-leverage skill for AI users. We teach it deeply and practically.',
    },
    {
      icon: <Compass className="h-5 w-5 text-attention-fg" aria-hidden="true" />,
      title: 'AI Tools Guide',
      description: 'Navigate the landscape of AI tools with confidence. Know which tool to reach for and when.',
    },
    {
      icon: <LayoutGrid className="h-5 w-5 text-accent-fg" aria-hidden="true" />,
      title: 'Visual Reference',
      description: 'Diagrams, Mermaid flows, and decision frameworks make complex concepts click.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-success-fg" aria-hidden="true" />,
      title: 'Safety & Ethics',
      description: 'Use AI responsibly. We cover privacy, hallucination, bias, and digital safety throughout.',
    },
  ];

  return (
    <>
      <HeroSection
        totalLessons={stats.totalLessons}
        totalHours={stats.totalHours}
        totalGlossaryTerms={stats.totalGlossaryTerms}
      />

      {/* Who is this for */}
      <section className="border-b border-border bg-canvas-subtle py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Who this is for"
            title="AI literacy for everyone"
            description="You don't need a technical background. If you're curious about AI and want to use it confidently in your work and life, this course was built for you."
            align="center"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { emoji: '👩‍💼', label: 'Professionals', desc: 'Use AI to work faster, think better, and automate the tedious.' },
              { emoji: '📚', label: 'Lifelong Learners', desc: 'Stay current with AI and build real, lasting AI literacy.' },
              { emoji: '🚀', label: 'Career Changers', desc: 'Add AI fluency to your existing skills and stand out.' },
              { emoji: '✍️', label: 'Writers & Creators', desc: 'Use AI as a powerful creative collaborator.' },
              { emoji: '🎓', label: 'Students', desc: 'Learn how AI is changing education, work, and every field.' },
              { emoji: '🤔', label: 'The Curious', desc: 'Understand what AI actually is — not just the hype.' },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 rounded-xl border border-border bg-canvas p-4 dark:bg-canvas-subtle">
                <span className="text-2xl leading-none mt-0.5" aria-hidden="true">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-fg-default text-sm">{item.label}</p>
                  <p className="text-sm text-fg-muted mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border py-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="What's included"
            title="Everything you need to use AI well"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-canvas p-4 dark:bg-canvas-subtle"
              >
                <div className="mb-3">{card.icon}</div>
                <h3 className="mb-1 font-semibold text-fg-default text-sm">{card.title}</h3>
                <p className="text-sm text-fg-muted">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="mb-3 text-2xl font-bold text-fg-default">
            Ready to build your AI skills?
          </h2>
          <p className="mb-6 text-fg-muted">
            Start with the first module — no account needed, no cost, no coding required.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/courses/ai-basics/what-is-ai"
              className="flex items-center gap-2 rounded-lg bg-accent-fg px-5 py-2.5 font-medium text-white transition-colors hover:bg-accent-emphasis"
            >
              Start: What is AI?
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
