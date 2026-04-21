import type { Module } from '@/types';

export const modules: Module[] = [
  {
    id: 'mod-001',
    slug: 'what-is-ai',
    phaseSlug: 'phase-1-foundations',
    title: 'What Is AI?',
    description:
      'Demystify artificial intelligence. Understand what AI actually is, how it differs from ML and generative AI, and why it matters right now.',
    longDescription:
      'This first module cuts through the hype and gives you a grounded, honest mental model of AI. You will understand the difference between traditional software and AI, see where AI excels and fails, and gain the vocabulary to talk confidently about it.',
    order: 1,
    difficulty: 'beginner',
    estimatedHours: 2,
    icon: '🤖',
    tags: ['foundations', 'ai-basics', 'mental-models'],
    lessonSlugs: [
      'ai-vs-ml-vs-generative-ai',
      'how-llms-work-simply',
      'what-ai-can-and-cannot-do',
      'ai-in-everyday-life',
    ],
    isOptional: false,
    whatYouLearn: [
      'The difference between AI, ML, and Generative AI',
      'How large language models (LLMs) work at a high level',
      'What AI is genuinely good and bad at',
      'Where AI already shows up in your daily life',
    ],
  },
  {
    id: 'mod-002',
    slug: 'ai-tools-overview',
    phaseSlug: 'phase-1-foundations',
    title: 'AI Tools Overview',
    description:
      "Explore the landscape of today's AI tools — chatbots, image generators, coding assistants, and more. Know which tools to reach for and when.",
    order: 2,
    difficulty: 'beginner',
    estimatedHours: 1.5,
    icon: '🛠️',
    tags: ['tools', 'chatgpt', 'claude', 'gemini', 'comparison'],
    lessonSlugs: ['chatbot-landscape', 'choosing-the-right-tool'],
    isOptional: false,
    prerequisites: ['what-is-ai'],
    whatYouLearn: [
      'Overview of the major AI chatbots and what makes each unique',
      'Image, audio, video, and code-generation tools',
      'How to quickly evaluate a new AI tool',
      'Free vs paid: what matters for beginners',
    ],
  },
  {
    id: 'mod-003',
    slug: 'prompting-basics',
    phaseSlug: 'phase-1-foundations',
    title: 'Prompting Basics',
    description:
      'Learn how to write clear, effective prompts. Master the techniques that get dramatically better results from any AI tool.',
    order: 3,
    difficulty: 'beginner',
    estimatedHours: 2.5,
    icon: '✍️',
    tags: ['prompting', 'prompt-engineering', 'communication'],
    lessonSlugs: ['anatomy-of-a-good-prompt', 'prompt-patterns'],
    isOptional: false,
    prerequisites: ['what-is-ai'],
    whatYouLearn: [
      'The anatomy of an effective prompt',
      'Context, role, tone, and format instructions',
      'Iterating and refining prompts',
      'Common beginner prompting mistakes to avoid',
    ],
  },
  {
    id: 'mod-004',
    slug: 'automation-basics',
    phaseSlug: 'phase-2-workflows',
    title: 'AI Automation Basics',
    description:
      'Learn how to automate repetitive tasks using AI tools, no-code platforms, and simple workflows that save hours every week.',
    order: 4,
    difficulty: 'intermediate',
    estimatedHours: 3,
    icon: '🔄',
    tags: ['automation', 'workflows', 'no-code', 'productivity'],
    lessonSlugs: [],
    isOptional: false,
    prerequisites: ['prompting-basics'],
    whatYouLearn: [
      'What AI automation is and how it differs from traditional scripting',
      'Introduction to workflow tools like Zapier, Make, and n8n',
      'Building your first automated AI workflow',
      'Identifying which tasks in your work are good automation candidates',
    ],
  },
  {
    id: 'mod-005',
    slug: 'agents-introduction',
    phaseSlug: 'phase-2-workflows',
    title: 'AI Agents',
    description:
      'Understand what AI agents are, how they work, and when they are useful — without needing to write a single line of code.',
    order: 5,
    difficulty: 'intermediate',
    estimatedHours: 2,
    icon: '🤖',
    tags: ['agents', 'agentic-ai', 'tool-calling', 'autonomy'],
    lessonSlugs: [],
    isOptional: false,
    prerequisites: ['automation-basics'],
    whatYouLearn: [
      'What an AI agent is versus a simple chatbot',
      'How agents use tools, memory, and planning',
      'Real use cases: research agents, personal assistants, coding agents',
      'Risks and limitations of autonomous AI agents',
    ],
  },
  {
    id: 'mod-006',
    slug: 'rag-and-memory',
    phaseSlug: 'phase-2-workflows',
    title: 'RAG & AI Memory',
    description:
      'Learn how AI can search your documents, remember context, and give you answers grounded in your own data.',
    order: 6,
    difficulty: 'intermediate',
    estimatedHours: 2.5,
    icon: '🗄️',
    tags: ['rag', 'retrieval', 'memory', 'embeddings', 'vector-databases'],
    lessonSlugs: [],
    isOptional: true,
    skipLabel: 'Skip if you only use general-purpose AI chatbots',
    prerequisites: ['agents-introduction'],
    whatYouLearn: [
      'What RAG (Retrieval-Augmented Generation) is and why it matters',
      'How AI memory works conceptually',
      'Practical tools for building knowledge bases with AI',
      'When to use RAG vs fine-tuning vs system prompts',
    ],
  },
];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByPhase(phaseSlug: string): Module[] {
  return modules
    .filter((m) => m.phaseSlug === phaseSlug)
    .sort((a, b) => a.order - b.order);
}
