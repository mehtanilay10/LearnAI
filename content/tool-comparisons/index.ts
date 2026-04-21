import type { ToolEntry } from '@/types';

export const tools: ToolEntry[] = [
  {
    id: 'tool-001',
    slug: 'chatgpt',
    name: 'ChatGPT',
    description:
      'OpenAI\'s general-purpose AI assistant. The most widely used AI chatbot, capable of writing, coding, analysis, and more. GPT-4o is the flagship model.',
    category: 'chatbot',
    url: 'https://chatgpt.com',
    pricing: 'freemium',
    difficulty: 'beginner',
    bestFor: [
      'General writing and editing',
      'Research and summarization',
      'Coding assistance',
      'Brainstorming and ideation',
      'Learning new concepts',
    ],
    limitations: [
      'Free tier uses slower model',
      'Knowledge cutoff (may not know recent events without search)',
      'Can hallucinate confidently',
      'Some tasks require the paid plan',
    ],
    features: [
      { name: 'Web search', supported: true },
      { name: 'Code interpreter', supported: true },
      { name: 'Image generation', supported: 'partial', note: 'Paid plan only' },
      { name: 'File upload', supported: true },
      { name: 'API access', supported: true },
      { name: 'Custom GPTs', supported: true },
    ],
    logoEmoji: '🤖',
    isPopular: true,
    isBeginnnerPick: true,
  },
  {
    id: 'tool-002',
    slug: 'claude',
    name: 'Claude',
    description:
      'Anthropic\'s AI assistant known for nuanced writing, long-context processing, and thoughtful, careful responses. Excellent for long documents.',
    category: 'chatbot',
    url: 'https://claude.ai',
    pricing: 'freemium',
    difficulty: 'beginner',
    bestFor: [
      'Long document analysis and editing',
      'Nuanced writing with good style',
      'Thoughtful, careful reasoning',
      'Analyzing PDFs and documents',
      'Coding and debugging',
    ],
    limitations: [
      'Image generation not available',
      'Free tier has usage limits',
      'Less popular ecosystem of integrations than ChatGPT',
    ],
    features: [
      { name: 'Web search', supported: 'partial', note: 'Via tools feature' },
      { name: 'Code interpreter', supported: true },
      { name: 'Image generation', supported: false },
      { name: 'File upload', supported: true },
      { name: 'API access', supported: true },
      { name: '200K context window', supported: true },
    ],
    logoEmoji: '🧡',
    isPopular: true,
    isBeginnnerPick: true,
  },
  {
    id: 'tool-003',
    slug: 'gemini',
    name: 'Gemini',
    description:
      'Google\'s AI assistant with deep integration into Google Workspace. Strong multimodal capabilities and real-time web access.',
    category: 'chatbot',
    url: 'https://gemini.google.com',
    pricing: 'freemium',
    difficulty: 'beginner',
    bestFor: [
      'Google Workspace users (Gmail, Docs, Drive)',
      'Multimodal tasks (images + text)',
      'Real-time web search',
      'Analysis of YouTube videos',
    ],
    limitations: [
      'Deep Google ecosystem lock-in',
      'Some features require paid Gemini Advanced',
    ],
    features: [
      { name: 'Web search', supported: true },
      { name: 'Google Workspace integration', supported: true },
      { name: 'Image generation', supported: true },
      { name: 'File upload', supported: true },
      { name: 'API access', supported: true },
      { name: 'Multimodal (image input)', supported: true },
    ],
    logoEmoji: '🔵',
    isPopular: true,
  },
  {
    id: 'tool-004',
    slug: 'midjourney',
    name: 'Midjourney',
    description:
      'The most popular AI image generation tool, known for its distinctive artistic quality and photorealism. Accessed via Discord.',
    category: 'image-generation',
    url: 'https://midjourney.com',
    pricing: 'paid',
    difficulty: 'beginner',
    bestFor: [
      'High-quality artistic images',
      'Marketing and creative visuals',
      'Concept art and illustrations',
      'Photorealistic images',
    ],
    limitations: [
      'No free tier',
      'Requires Discord account',
      'All generated images are public on free/basic plans',
    ],
    logoEmoji: '🎨',
    isPopular: true,
  },
  {
    id: 'tool-005',
    slug: 'perplexity',
    name: 'Perplexity',
    description:
      'An AI-powered research and search tool that provides sourced, cited answers to questions in real time.',
    category: 'search',
    url: 'https://perplexity.ai',
    pricing: 'freemium',
    difficulty: 'beginner',
    bestFor: [
      'Research with cited sources',
      'Current events and factual lookups',
      'Learning about new topics quickly',
      'Reducing hallucination risk',
    ],
    limitations: [
      'Less conversational than pure chatbots',
      'Advanced features require Pro plan',
    ],
    logoEmoji: '🔍',
    isPopular: true,
    isBeginnnerPick: true,
  },
];

export function getToolBySlug(slug: string): ToolEntry | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolEntry[] {
  return tools.filter((t) => t.category === category);
}

export function getBeginnerPicks(): ToolEntry[] {
  return tools.filter((t) => t.isBeginnnerPick);
}
