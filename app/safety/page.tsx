import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Safety & Privacy',
  description: 'Learn how to use AI safely and protect your privacy. Understand AI limitations, hallucinations, prompt injection, data handling, and responsible AI use.',
};

export default function SafetyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Essential reading"
        title="AI Safety & Privacy"
        description="AI is powerful — but it comes with real risks. These lessons teach you to use AI responsibly, protect your data, and recognise when AI output is unreliable or unsafe."
        titleAs="h1"
      />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <SafetyCard
          title="Safety & Limitations"
          description="Understand what AI gets wrong, why hallucinations happen, and how to evaluate AI output critically."
          href="/courses/ai-basics/safety-and-limitations"
          topics={['Hallucinations', 'Accuracy', 'Critical thinking']}
        />
        <SafetyCard
          title="Privacy & Data"
          description="Protect your personal and business data when using AI. Learn what data AI companies collect and how to minimise your exposure."
          href="/courses/ai-basics/privacy-and-data"
          topics={['Data privacy', 'Copyright', 'Enterprise governance']}
        />
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-bold text-fg-default mb-4">Quick safety checklist</h2>
        <ul className="space-y-3">
          {[
            'Never paste passwords, API keys, or financial details into any AI chat',
            'Treat AI output as a draft, not a fact — verify important claims',
            'Be aware that your inputs may be used to train future model versions',
            'Use enterprise tiers with data-processing agreements for business data',
            'Be cautious with AI-generated code — review it for security vulnerabilities',
            'Understand that AI can be wrong in ways that sound confident and plausible',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-fg-muted">
              <span className="mt-0.5 h-4 w-4 rounded-full bg-accent-subtle text-accent-fg flex items-center justify-center text-xs font-bold">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function SafetyCard({ title, description, href, topics }: { title: string; description: string; href: string; topics: string[] }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-canvas p-6 transition-all hover:border-accent-fg hover:shadow-md"
    >
      <h3 className="text-base font-bold text-fg-default group-hover:text-accent-fg transition-colors">{title}</h3>
      <p className="mt-2 text-sm text-fg-muted leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className="rounded-full border border-border bg-canvas-subtle px-2 py-0.5 text-xs text-fg-subtle">{topic}</span>
        ))}
      </div>
    </Link>
  );
}
