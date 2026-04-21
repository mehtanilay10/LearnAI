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
    estimatedWeeks: 4,
  },
  {
    id: 'phase-2',
    slug: 'phase-2-workflows',
    title: 'Phase 2: Workflows & Automation',
    subtitle: 'Put AI to work in real, practical ways',
    description:
      'Learn how to build repeatable AI-powered workflows, automate tasks, understand agents, and apply AI to real projects at work and in life.',
    order: 2,
    icon: '⚡',
    color: 'success',
    moduleSlug: ['automation-basics', 'agents-introduction', 'rag-and-memory'],
    estimatedWeeks: 6,
  },
];

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}
