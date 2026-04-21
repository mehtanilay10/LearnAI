import type { PromptTemplate } from '@/types';

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'prompt-001',
    slug: 'explain-like-expert',
    title: 'Explain Like I\'m an Expert',
    description:
      'Get a clear explanation of any topic tailored to your specific background and level.',
    category: 'learning',
    difficulty: 'beginner',
    template: `Act as a knowledgeable teacher who is excellent at clear explanations.

I have [YOUR BACKGROUND/ROLE, e.g. "a marketing background with no technical knowledge"].

Please explain [TOPIC] to me. Include:
- What it is in plain language
- Why it matters or where it shows up
- One concrete real-world example
- One analogy that makes it click
- What I should know next if I want to go deeper`,
    example: `Act as a knowledgeable teacher who is excellent at clear explanations.

I have a marketing background with no technical knowledge.

Please explain "vector databases" to me. Include:
- What it is in plain language
- Why it matters or where it shows up
- One concrete real-world example
- One analogy that makes it click
- What I should know next if I want to go deeper`,
    tags: ['learning', 'explanation', 'beginner-friendly', 'education'],
    tips: [
      'Replace [YOUR BACKGROUND/ROLE] with your actual background for much better analogies',
      'Try different backgrounds for the same topic — compare how explanations change',
      'Follow up with "now explain the part about X in even simpler terms"',
    ],
    isStarter: true,
  },
  {
    id: 'prompt-002',
    slug: 'edit-my-writing',
    title: 'Edit My Writing',
    description:
      'Get specific, structured editing feedback on any piece of writing with actionable suggestions.',
    category: 'writing',
    difficulty: 'beginner',
    template: `Act as a professional editor with expertise in [TYPE OF WRITING, e.g. "business communication" / "blog posts" / "technical writing"].

Please review this piece of writing:

---
[PASTE YOUR WRITING HERE]
---

Provide feedback on:
1. **Clarity** — Is the message clear? What might confuse readers?
2. **Structure** — Does it flow logically? How could it be reorganized?
3. **Tone** — Is the tone right for [INTENDED AUDIENCE]?
4. **Concision** — What could be cut without losing meaning?

Then provide a revised version that applies your main suggestions.`,
    tags: ['editing', 'writing', 'feedback', 'professional'],
    tips: [
      'Specify your intended audience for much more relevant feedback',
      'Ask for a "track changes" style explanation to understand what changed and why',
      'Run it through again after making edits to catch anything new',
    ],
    isStarter: true,
  },
  {
    id: 'prompt-003',
    slug: 'decision-framework',
    title: 'Help Me Make a Decision',
    description:
      'Structure a complex decision with a pros/cons analysis tailored to your priorities.',
    category: 'thinking',
    difficulty: 'beginner',
    template: `I need to make a decision and want your help structuring my thinking.

**Decision:** [DESCRIBE THE DECISION, e.g. "Whether to accept a job offer at a startup vs. staying at my corporate job"]

**My priorities are:**
1. [PRIORITY 1, e.g. "Work-life balance"]
2. [PRIORITY 2, e.g. "Long-term career growth"]
3. [PRIORITY 3, e.g. "Compensation stability"]

**Key constraints:**
- [CONSTRAINT, e.g. "I have a mortgage"]
- [CONSTRAINT, e.g. "I am risk-averse by nature"]

Please:
1. Analyze the pros and cons of each option specifically against my priorities
2. Identify 2-3 key questions I should answer before deciding
3. Suggest what additional information would most change your recommendation
4. Give your honest recommendation with reasoning`,
    tags: ['decisions', 'analysis', 'thinking', 'reasoning'],
    tips: [
      'Be honest about your real constraints and fears for better analysis',
      'Ask the AI to "steelman" (argue for) the option you\'re leaning against',
      'Follow up: "What would you need to know to change your recommendation?"',
    ],
    isStarter: true,
  },
  {
    id: 'prompt-004',
    slug: 'summarize-document',
    title: 'Summarize Any Document',
    description:
      'Get a structured, actionable summary of any long document — articles, reports, PDFs.',
    category: 'summarization',
    difficulty: 'beginner',
    template: `Please summarize the following document. Format your summary as:

**1. One-sentence bottom line** (what this document is about in plain language)

**2. Key points** (3-5 bullet points of the most important information)

**3. Actionable takeaways** (What should I do or think differently based on this? 2-3 items)

**4. What I can skip** (Parts of the document that are less relevant for a general reader)

---
[PASTE DOCUMENT HERE]
---`,
    tags: ['summarization', 'reading', 'productivity', 'documents'],
    tips: [
      'Add "I am [YOUR ROLE]" before the document for role-specific summaries',
      'Ask "what questions should I ask the author of this document?" for critical reading',
      'For very long documents, summarize in sections first, then summarize the summaries',
    ],
  },
  {
    id: 'prompt-005',
    slug: 'brainstorm-ideas',
    title: 'Fast Brainstorm',
    description:
      'Generate a large, diverse set of ideas quickly — then narrow down and develop the best ones.',
    category: 'creativity',
    difficulty: 'beginner',
    template: `I need to brainstorm [TOPIC OR CHALLENGE].

Context: [1-2 sentences of relevant background]

Please give me 15 diverse ideas. Include:
- 5 conventional, safe ideas
- 5 creative or unexpected approaches  
- 5 "what if" or contrarian ideas that challenge assumptions

Do not explain each idea yet — just give me the list. I will pick the best ones to develop.`,
    tags: ['brainstorming', 'creativity', 'ideation', 'ideas'],
    tips: [
      'Ask for more ideas in specific directions: "give me 5 more in the style of [company/person]"',
      'After picking your favorites, use a follow-up: "develop idea #3 into a full plan"',
      'Ask "which 3 ideas have the highest potential vs. least effort?" for prioritization',
    ],
  },
];

export function getPromptBySlug(slug: string): PromptTemplate | undefined {
  return promptTemplates.find((p) => p.slug === slug);
}

export function getStarterPrompts(): PromptTemplate[] {
  return promptTemplates.filter((p) => p.isStarter);
}

export function getPromptsByCategory(category: string): PromptTemplate[] {
  return promptTemplates.filter((p) => p.category === category);
}
