import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { FAQAccordion } from '@/components/content/FAQAccordion';
import { faqs } from '@/content/faqs';
import type { FAQCategory } from '@/types';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about learning AI, choosing tools, and using AI responsibly.',
};

const CATEGORY_LABELS: Record<FAQCategory, { label: string; emoji: string }> = {
  'getting-started': { label: 'Getting Started', emoji: '🚀' },
  tools: { label: 'Tools', emoji: '🛠️' },
  'learning-path': { label: 'Learning Path', emoji: '🗺️' },
  concepts: { label: 'Concepts', emoji: '🧠' },
  safety: { label: 'Safety & Privacy', emoji: '🔒' },
  career: { label: 'Career', emoji: '💼' },
};

export default function FAQPage() {
  const categories = Object.entries(CATEGORY_LABELS) as [FAQCategory, typeof CATEGORY_LABELS[FAQCategory]][];
  const categorized = categories.map(([key, meta]) => ({
    key,
    ...meta,
    faqs: faqs.filter((f) => f.category === key),
  })).filter((c) => c.faqs.length > 0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Help"
        title="Frequently Asked Questions"
        description="Honest answers to the most common questions about learning AI."
        titleAs="h1"
      />

      <div className="space-y-10">
        {categorized.map((cat) => (
          <section key={cat.key}>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-fg-default">
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.label}
            </h2>
            <FAQAccordion faqs={cat.faqs} />
          </section>
        ))}
      </div>
    </div>
  );
}
