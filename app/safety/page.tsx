import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, Eye, Brain, MessageSquareWarning } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CalloutBox } from '@/components/ui/CalloutBox';

export const metadata: Metadata = {
  title: 'Safety & Responsible AI Use',
  description: 'Learn how to use AI safely, protect your privacy, recognize limitations, and avoid common AI pitfalls.',
};

const PRINCIPLES = [
  {
    icon: <ShieldAlert className="h-5 w-5 text-danger-fg" aria-hidden="true" />,
    title: 'Verify important information',
    description: 'AI can and does hallucinate. Before acting on anything important — medical, legal, financial, technical — verify with a reliable primary source.',
    level: 'core',
  },
  {
    icon: <Eye className="h-5 w-5 text-attention-fg" aria-hidden="true" />,
    title: 'Protect your private data',
    description: 'Never paste passwords, social security numbers, credit cards, or other sensitive personal information into public AI chatbots. Your conversations may be used for training.',
    level: 'core',
  },
  {
    icon: <Brain className="h-5 w-5 text-accent-fg" aria-hidden="true" />,
    title: 'Stay in the loop',
    description: 'AI is a tool, not a decision-maker. For consequential decisions — especially about people — keep humans in the loop and apply your own judgment.',
    level: 'core',
  },
  {
    icon: <MessageSquareWarning className="h-5 w-5 text-done-fg" aria-hidden="true" />,
    title: 'Recognize bias and limitations',
    description: 'AI models reflect the biases in their training data. They can produce responses that are gendered, culturally biased, or stereotyped. Always review AI outputs critically.',
    level: 'core',
  },
];

const PRIVACY_TIPS = [
  'Use Incognito mode when discussing sensitive personal matters',
  'Read the privacy policy of any AI tool before using it for work',
  'Check if your employer has a policy on AI tool usage',
  'For truly confidential content, consider local AI models (Ollama, LM Studio)',
  'Opt out of training data sharing where available (e.g., ChatGPT Settings → Data Controls)',
  'Treat AI like email — don\'t say things you wouldn\'t want recorded',
];

const HALLUCINATION_TIPS = [
  'Ask the AI to cite sources, then verify those sources exist',
  'Use Perplexity or a search-grounded tool for factual questions',
  'Ask follow-up: "How confident are you in that? What might you have wrong?"',
  'Cross-reference critical information with at least one reliable non-AI source',
  'Be especially skeptical of citations, statistics, and specific dates',
];

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Responsible use"
        title="Safety & Responsible AI Use"
        description="Using AI well means using it wisely. This page covers the most important habits for safe, ethical, privacy-aware AI use."
        titleAs="h1"
      />

      <CalloutBox
        variant="important"
        title="This is not optional reading"
        text="These principles apply from your very first day of using AI. The habits you build now will protect you and others as AI becomes more powerful."
        className="mb-8"
      />

      {/* Core principles */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">Core Principles</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-canvas p-5 dark:bg-canvas-subtle"
            >
              <div className="mb-2 flex items-center gap-2">
                {p.icon}
                <h3 className="font-semibold text-fg-default">{p.title}</h3>
              </div>
              <p className="text-sm text-fg-muted leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">🔒 Data & Privacy</h2>
        <div className="rounded-xl border border-border bg-canvas p-5 dark:bg-canvas-subtle">
          <ul className="space-y-2">
            {PRIVACY_TIPS.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-default">
                <span className="mt-0.5 text-accent-fg font-mono text-xs shrink-0">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hallucination */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">🧪 Handling AI Hallucinations</h2>
        <p className="mb-4 text-sm text-fg-muted">
          Hallucination — when AI confidently produces incorrect information — is the most common pitfall.
          Here&apos;s how to protect yourself:
        </p>
        <div className="rounded-xl border border-border bg-canvas p-5 dark:bg-canvas-subtle">
          <ul className="space-y-2">
            {HALLUCINATION_TIPS.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-fg-default">
                <span className="mt-0.5 text-danger-fg">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Responsible use */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-fg-default">🤝 Ethical Use</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Be transparent about AI use',
              text: "When AI substantially contributed to your work, acknowledge it where appropriate. This is especially important in academic, professional, and public contexts.",
            },
            {
              title: "Don't use AI to deceive",
              text: "Using AI to spread misinformation, impersonate people, create fake content for manipulation, or bypass security systems is harmful and often illegal.",
            },
            {
              title: "Think about who else is affected",
              text: "Some AI tasks have downstream human effects — content moderation, hiring screening, medical advice. Apply extra care when AI outputs affect real people's lives.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-canvas p-4 dark:bg-canvas-subtle"
            >
              <h3 className="mb-1 font-semibold text-fg-default">{item.title}</h3>
              <p className="text-sm text-fg-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="rounded-xl border border-accent-muted bg-accent-subtle p-6 text-center">
        <h2 className="mb-2 font-bold text-fg-default">Ready to continue learning?</h2>
        <p className="mb-4 text-sm text-fg-muted">
          Head back to the course to apply these principles throughout your AI journey.
        </p>
        <Link
          href="/modules"
          className="inline-flex items-center gap-2 rounded-lg bg-accent-fg px-4 py-2 text-sm font-medium text-white hover:bg-accent-emphasis transition-colors"
        >
          Continue Learning
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
