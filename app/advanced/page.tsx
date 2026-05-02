import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { DifficultyBadge } from '@/components/ui/DifficultyBadge';

export const metadata: Metadata = {
  title: 'Advanced Concepts',
  description: 'Deep dives into advanced AI concepts: LLM internals, RAG, agents, embeddings, MCP, evaluation, and more.',
};

const CONCEPTS = [
  {
    id: 'how-transformers-work',
    title: 'How Transformers Work',
    description: 'The architecture behind every modern LLM — attention mechanisms, positional encoding, and why scale matters.',
    category: 'LLM Internals',
    difficulty: 'advanced' as const,
    available: false,
  },
  {
    id: 'embeddings-deep-dive',
    title: 'Embeddings Deep Dive',
    description: 'Understand vector spaces, semantic similarity, and how embeddings power search, RAG, and recommendations.',
    category: 'Architecture',
    difficulty: 'intermediate' as const,
    available: false,
  },
  {
    id: 'rag-architecture',
    title: 'RAG Architecture Patterns',
    description: 'Naive RAG vs advanced RAG. Chunking strategies, reranking, hybrid search, and practical implementation patterns.',
    category: 'RAG & Memory',
    difficulty: 'advanced' as const,
    available: false,
  },
  {
    id: 'agentic-workflows',
    title: 'Agentic Workflows',
    description: 'How AI agents plan, use tools, manage memory, and chain actions. ReAct, CoT, and agent orchestration patterns.',
    category: 'Agents',
    difficulty: 'advanced' as const,
    available: false,
  },
  {
    id: 'mcp-explained',
    title: 'MCP (Model Context Protocol)',
    description: 'What MCP is, why it matters for the future of AI tools, and how it creates a universal standard for AI-tool connections.',
    category: 'Protocols',
    difficulty: 'intermediate' as const,
    available: false,
  },
  {
    id: 'prompt-injection',
    title: 'Prompt Injection & Security',
    description: 'The security risks of autonomous AI agents. Prompt injection attacks, mitigations, and safe design patterns.',
    category: 'Safety',
    difficulty: 'advanced' as const,
    available: false,
  },
  {
    id: 'evaluating-llm-outputs',
    title: 'Evaluating LLM Outputs',
    description: 'How to systematically evaluate AI quality: evals, benchmarks, human feedback, and automated testing approaches.',
    category: 'Evaluation',
    difficulty: 'advanced' as const,
    available: false,
  },
  {
    id: 'local-vs-cloud-ai',
    title: 'Local AI vs Cloud AI',
    description: 'Trade-offs, privacy implications, hardware requirements, and when to run models locally vs via API.',
    category: 'Deployment',
    difficulty: 'intermediate' as const,
    available: false,
  },
  {
    id: 'multimodal-ai',
    title: 'Multimodal AI',
    description: 'How models that understand text, images, audio, and video work — and how to use them effectively.',
    category: 'Architecture',
    difficulty: 'intermediate' as const,
    available: false,
  },
];

const CATEGORIES = [...new Set(CONCEPTS.map((c) => c.category))];

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
        const catConcepts = CONCEPTS.filter((c) => c.category === cat);
        return (
          <section key={cat} className="mb-10">
            <h2 className="mb-4 text-lg font-bold text-fg-default">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catConcepts.map((concept) => (
                <div
                  key={concept.id}
                  className="flex flex-col rounded-xl border border-border bg-canvas p-4 dark:bg-canvas-subtle opacity-70"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <DifficultyBadge difficulty={concept.difficulty} />
                    <span className="text-xs text-fg-subtle px-2 py-0.5 rounded-full border border-border bg-canvas-subtle">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="mb-1 font-semibold text-fg-default">{concept.title}</h3>
                  <p className="text-sm text-fg-muted leading-relaxed flex-1">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-8 rounded-xl border border-dashed border-border p-8 text-center">
        <p className="mb-2 font-medium text-fg-default">Full content coming in Step 2</p>
        <p className="mb-4 text-sm text-fg-muted">
          These concept pages are scaffolded and ready to be populated. The architecture supports full content blocks, Mermaid diagrams, and cross-linking.
        </p>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-accent-fg hover:underline"
        >
          Start with the core modules
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
