import type { MiniProject } from '@/types';

export const projects: MiniProject[] = [
  {
    id: 'proj-001',
    slug: 'personal-knowledge-base',
    title: 'Build Your Personal AI Knowledge Base',
    description:
      'Use an AI chatbot to summarize and organize notes from articles, videos, and meetings into a searchable personal knowledge system.',
    difficulty: 'beginner',
    estimatedHours: 2,
    tags: ['productivity', 'knowledge-management', 'summarization'],
    skills: ['Prompting', 'Iterative refinement', 'Summarization'],
    tools: ['ChatGPT or Claude', 'Notion or Obsidian (optional)'],
    steps: [
      'Choose 5 articles, videos, or notes from the past month that you wish you had retained better',
      'For each, paste the content into an AI chatbot and prompt: "Summarize this into: 1 key idea, 3 main points, 1 actionable takeaway. Use bullet points."',
      'Ask the AI to identify themes across all 5 summaries',
      'Create a simple document (Notion, Google Doc, flat text) with your summaries organized by theme',
      'Add one entry per week going forward',
    ],
    expectedOutput:
      'A structured notes document with 5 AI-summarized entries organized by theme, demonstrating your ability to use AI for learning retention.',
    bonusChallenges: [
      'Ask the AI to identify knowledge gaps based on your summaries',
      'Create a "reading list" prompt that suggests related topics',
      'Set up a weekly template prompt for consistent formatting',
    ],
    relatedLessons: ['anatomy-of-a-good-prompt', 'what-ai-can-and-cannot-do'],
  },
  {
    id: 'proj-002',
    slug: 'ai-writing-workflow',
    title: 'Design Your AI Writing Workflow',
    description:
      'Build a repeatable AI-assisted writing process for one type of document you write regularly — emails, reports, posts, or proposals.',
    difficulty: 'beginner',
    estimatedHours: 3,
    tags: ['writing', 'workflows', 'prompting', 'productivity'],
    skills: ['Prompt engineering', 'Workflow design', 'Editing with AI'],
    tools: ['ChatGPT or Claude'],
    steps: [
      'Pick one document type you write often (e.g., weekly update email, client proposal, LinkedIn post)',
      'Write down the steps you currently go through manually',
      'For each step, experiment with an AI prompt that speeds it up',
      'Document your best prompts for: first draft, editing, tone adjustment, subject line options',
      'Time yourself doing it the old way vs the AI-assisted way',
    ],
    expectedOutput:
      'A documented workflow with 3-5 reusable prompt templates for your chosen document type, plus a time comparison.',
    bonusChallenges: [
      'Build a "system prompt" that encodes your personal writing style and use it every time',
      'Create a version for a second document type',
    ],
    relatedLessons: ['anatomy-of-a-good-prompt', 'prompt-patterns'],
  },
  {
    id: 'proj-003',
    slug: 'ai-research-assistant',
    title: 'Use AI as a Research Assistant',
    description:
      'Research a topic you genuinely need to understand using AI tools — combining Perplexity for verified facts and Claude for synthesis.',
    difficulty: 'intermediate',
    estimatedHours: 2,
    tags: ['research', 'fact-checking', 'synthesis', 'critical-thinking'],
    skills: ['Research prompting', 'Source evaluation', 'AI synthesis'],
    tools: ['Perplexity (for sourced facts)', 'Claude or ChatGPT (for synthesis)'],
    steps: [
      'Pick a real topic you actually need to understand (work challenge, purchase decision, health topic)',
      'Use Perplexity to get a sourced overview — note which claims have strong citations',
      'Use Claude to ask "What are the most common misconceptions about [topic]?"',
      'Ask ChatGPT to explain it like you are [your background] and create a simple summary',
      'Identify one thing no AI got right or complete — verify it with a primary source',
    ],
    expectedOutput:
      'A 1-page summary of your topic that combines AI-assisted research with your own critical evaluation of the sources.',
    bonusChallenges: [
      'Compare the answers from three different AI tools on the same question',
      'Try to get the AI to give you contradictory statements to understand hallucination range',
    ],
    relatedLessons: ['what-ai-can-and-cannot-do', 'how-llms-work-simply'],
  },
];

export function getProjectBySlug(slug: string): MiniProject | undefined {
  return projects.find((p) => p.slug === slug);
}
