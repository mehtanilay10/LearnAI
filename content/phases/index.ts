import type { Phase } from '@/types';

export const phases: Phase[] = [
  {
    id: 'phase-1',
    slug: 'phase-1-foundations',
    title: 'Phase 1: Foundations',
    subtitle: 'Understand what AI is and how to work with it',
    description:
      'Build your core mental model of AI. Learn what AI tools actually do, why they behave the way they do, and how to start using them confidently in daily life.',
    order: 1,
    icon: '🧠',
    color: 'accent',
    moduleSlug: ['what-is-ai', 'ai-tools-overview', 'prompting-basics'],
    estimatedWeeks: 3,
  },
  {
    id: 'phase-2',
    slug: 'phase-2-key-concepts',
    title: 'Phase 2: Key Concepts',
    subtitle: 'Build the vocabulary to use AI intelligently',
    description:
      'Understand the technical concepts every AI user should know — tokens, context windows, and hallucination — without needing a computer science background.',
    order: 2,
    icon: '📖',
    color: 'success',
    moduleSlug: ['understanding-llms', 'hallucinations-and-accuracy'],
    estimatedWeeks: 2,
  },
  {
    id: 'phase-3',
    slug: 'phase-3-tools-in-depth',
    title: 'Phase 3: AI Tools in Depth',
    subtitle: 'Get fluent with the tools that matter most',
    description:
      'Go beyond first impressions. Learn how each major AI tool works, what it is genuinely best at, and how to build a practical toolkit you will actually use every week.',
    order: 3,
    icon: '🛠️',
    color: 'accent',
    moduleSlug: ['chatbots-in-depth', 'research-and-search-tools', 'writing-and-content-tools'],
    estimatedWeeks: 3,
  },
  {
    id: 'phase-4',
    slug: 'phase-4-advanced-prompting',
    title: 'Phase 4: Advanced Prompting',
    subtitle: 'Master the techniques that separate good from great results',
    description:
      'Go beyond basic prompts. Learn chain-of-thought reasoning, few-shot examples, role-play personas, and how to chain prompts into repeatable workflows.',
    order: 4,
    icon: '✍️',
    color: 'success',
    moduleSlug: ['advanced-prompting', 'ai-workflows'],
    estimatedWeeks: 2,
  },
  {
    id: 'phase-5',
    slug: 'phase-5-automation-agents',
    title: 'Phase 5: Automation & Agents',
    subtitle: 'Put AI to work, even when you are not watching',
    description:
      'Learn how AI automation tools save hours every week. Understand what AI agents are, how they plan and execute multi-step tasks, and when to use them safely.',
    order: 5,
    icon: '⚡',
    color: 'accent',
    moduleSlug: ['automation-basics', 'agents-introduction', 'tool-calling-basics'],
    estimatedWeeks: 3,
  },
  {
    id: 'phase-6',
    slug: 'phase-6-safety',
    title: 'Phase 6: Safety & Responsible Use',
    subtitle: 'Use AI wisely — protect yourself and your work',
    description:
      'Understand the real risks of AI: hallucination, privacy exposure, data leakage, and overreliance. Build the habits and mental models to use AI responsibly.',
    order: 6,
    icon: '🛡️',
    color: 'success',
    moduleSlug: ['safety-and-limitations', 'privacy-and-data'],
    estimatedWeeks: 2,
  },
  {
    id: 'phase-7',
    slug: 'phase-7-intermediate-systems',
    title: 'Phase 7: Intermediate Systems',
    subtitle: 'Understand the architecture behind AI memory and search',
    description:
      'Learn about RAG, embeddings, and vector databases — the technology that lets AI tools search your documents and remember your data across sessions.',
    order: 7,
    icon: '🗄️',
    color: 'accent',
    moduleSlug: ['rag-and-memory', 'embeddings-and-vectors'],
    estimatedWeeks: 2,
  },
  {
    id: 'phase-8',
    slug: 'phase-8-advanced-ai',
    title: 'Phase 8: Advanced Modern AI',
    subtitle: 'Navigate the frontier of AI capabilities',
    description:
      'Understand the modern AI landscape — MCP protocols, skills and plugins, multimodal capabilities, and local AI options. These are the concepts shaping AI in 2025 and beyond.',
    order: 8,
    icon: '🚀',
    color: 'success',
    moduleSlug: ['mcp-and-skills', 'multimodal-ai', 'local-vs-cloud-ai'],
    estimatedWeeks: 3,
  },
  {
    id: 'phase-9',
    slug: 'phase-9-capstone',
    title: 'Phase 9: Capstone & Confident AI Use',
    subtitle: 'Build your personal AI strategy and keep growing',
    description:
      'Pull everything together. Build a personal AI stack, learn how to evaluate outputs critically, and develop the habits to keep pace with AI without overwhelm.',
    order: 9,
    icon: '🎯',
    color: 'accent',
    moduleSlug: ['personal-ai-stack', 'staying-current'],
    estimatedWeeks: 2,
  },
];

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}
