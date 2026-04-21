import type { PlanWeek } from '@/types';

export const weeklyPlan: PlanWeek[] = [
  {
    id: 'week-01',
    week: 1,
    title: 'Getting Your AI Bearings',
    focus: 'foundations',
    description:
      'Your first week is about building a solid mental model of what AI is, why it matters now, and getting hands-on with at least one AI tool. No deep theory — just get oriented.',
    goals: [
      'Understand the difference between AI, ML, and Generative AI',
      'Sign up and try ChatGPT or Claude',
      'Have at least 3 real conversations with an AI tool',
      'Learn what a prompt is and write your first intentional one',
    ],
    moduleSlugs: ['what-is-ai'],
    lessonSlugs: ['ai-vs-ml-vs-generative-ai', 'how-llms-work-simply'],
    tools: ['ChatGPT', 'Claude'],
    tip: 'Don\'t overthink it. Just start talking to an AI like you\'d talk to a knowledgeable friend. Ask it to explain something you\'ve been curious about.',
  },
  {
    id: 'week-02',
    week: 2,
    title: 'AI Tools Landscape',
    focus: 'tools',
    description:
      'In week 2, you\'ll survey the most useful AI tools available right now and understand which tool to reach for and when. You\'ll also do your first tool comparison.',
    goals: [
      'Know the major AI chatbots and their key differences',
      'Try at least two different AI tools for the same task',
      'Understand pricing tiers and what free gets you',
      'Identify 3 tasks in your own work where AI could help',
    ],
    moduleSlugs: ['ai-tools-overview'],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
    tip: 'Use Perplexity.ai for anything that needs a factual answer with sources. It dramatically reduces hallucination risk.',
  },
  {
    id: 'week-03',
    week: 3,
    title: 'Mastering Prompts',
    focus: 'prompting',
    description:
      'The biggest skill jump in week 3. Learning to write excellent prompts is the single most valuable AI skill for non-technical users. This week is hands-on.',
    goals: [
      'Learn the CRTF prompt framework (Context, Role, Task, Format)',
      'Practice iterative prompting on real tasks',
      'Build a personal prompt library with 5 templates',
      'Understand what causes bad AI outputs and how to fix them',
    ],
    moduleSlugs: ['prompting-basics'],
    lessonSlugs: ['anatomy-of-a-good-prompt', 'prompt-patterns'],
    tools: ['ChatGPT', 'Claude'],
    tip: 'Keep a "prompt journal" this week — save every prompt that worked really well. You\'re building a personal AI toolkit.',
  },
];

export function getWeek(week: number): PlanWeek | undefined {
  return weeklyPlan.find((w) => w.week === week);
}
