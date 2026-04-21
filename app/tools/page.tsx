import type { Metadata } from 'next';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { ToolComparisonCard } from '@/components/content/ToolComparisonCard';
import { tools } from '@/content/tool-comparisons';

export const metadata: Metadata = {
  title: 'AI Tool Comparisons',
  description: 'Compare the major AI tools — ChatGPT, Claude, Gemini, Perplexity, Midjourney and more. Know which tool to use for any task.',
};

const CATEGORIES = [
  { key: 'chatbot', label: 'Chatbots', emoji: '💬' },
  { key: 'image-generation', label: 'Image Generation', emoji: '🎨' },
  { key: 'search', label: 'AI Search', emoji: '🔍' },
  { key: 'coding', label: 'Coding', emoji: '💻' },
  { key: 'automation', label: 'Automation', emoji: '🔄' },
];

export default function ToolsPage() {
  const categorized = CATEGORIES.map((cat) => ({
    ...cat,
    tools: tools.filter((t) => t.category === cat.key),
  })).filter((cat) => cat.tools.length > 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <SectionHeader
        eyebrow="Reference"
        title="AI Tool Comparisons"
        description="An honest, up-to-date comparison of the tools worth knowing. Each entry shows what it's best for, key features, and whether it's beginner-friendly."
        titleAs="h1"
      />

      <div className="mb-8 rounded-xl border border-border bg-canvas-subtle p-4 text-sm text-fg-muted">
        <p>
          <strong className="text-fg-default">Where to start:</strong> If you&apos;re new to AI, pick any tool marked{' '}
          <span className="text-success-fg font-medium">⭐ Beginner pick</span>. ChatGPT or Claude are both excellent starting points.
        </p>
      </div>

      <div className="space-y-10">
        {categorized.map((cat) => (
          <section key={cat.key}>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-fg-default">
              <span aria-hidden="true">{cat.emoji}</span> {cat.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.tools.map((tool) => (
                <ToolComparisonCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
