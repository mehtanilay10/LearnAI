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
  {
    id: 'prompt-006',
    slug: 'rewrite-email',
    title: 'Rewrite Any Email',
    description: 'Polish, shorten, or adjust the tone of any email for maximum impact.',
    category: 'writing',
    difficulty: 'beginner',
    template: `Please rewrite the email below with the following goals:
- Tone: [TONE — e.g., "professional and warm", "direct and brief", "empathetic but firm"]
- Length: [TARGET LENGTH — e.g., "under 100 words", "same length but clearer"]
- Main improvement needed: [e.g., "remove jargon", "make the ask clearer", "sound less passive-aggressive"]

Keep the core message and factual content intact.

---
[PASTE EMAIL HERE]
---`,
    tags: ['email', 'writing', 'communication', 'productivity'],
    tips: [
      'Add "The recipient is [their role and relationship to you]" for more tailored rewrites',
      'Use tone descriptors like "confident but not arrogant" or "apologetic but solution-focused"',
      'Ask "what is the risk of this email being misunderstood?" before sending',
    ],
    isStarter: true,
  },
  {
    id: 'prompt-007',
    slug: 'note-cleanup',
    title: 'Clean Up Messy Notes',
    description: 'Turn rough, unstructured notes into a clean, organized summary.',
    category: 'productivity',
    difficulty: 'beginner',
    template: `I have rough notes from [CONTEXT — e.g., "a team meeting", "a conference talk", "a research session"].

Please transform them into:

**Summary** (2-3 sentences — the key takeaway)
**Key Points** (bullet list of the most important facts, decisions, or ideas)
**Action Items** (anything that requires follow-up, with [OWNER] and [DEADLINE] placeholders if not specified)
**Open Questions** (anything that needs clarification or follow-up research)

---
[PASTE RAW NOTES HERE]
---`,
    tags: ['notes', 'productivity', 'meetings', 'organization'],
    tips: [
      'Add "I am [YOUR ROLE] and this was for [AUDIENCE]" to get role-appropriate summaries',
      'Follow up: "Turn the action items into a formatted task list"',
      'For meeting notes, add who said what to get attributed summaries',
    ],
  },
  {
    id: 'prompt-008',
    slug: 'feedback-request',
    title: 'Get Actionable Feedback',
    description: 'Ask AI to critique your work and give you specific, actionable improvement suggestions.',
    category: 'writing',
    difficulty: 'beginner',
    template: `Please review the [TYPE OF WORK — e.g., "email", "report", "presentation outline", "product description"] below.

Context about the purpose and audience:
[1-2 SENTENCES DESCRIBING WHO THIS IS FOR AND WHAT IT NEEDS TO ACCOMPLISH]

Please give me:
1. **What is working well** (2-3 specific strengths)
2. **Top 3 improvements** (the highest-impact changes, most important first)
3. **Quick fixes** (grammatical, clarity, or wording issues to fix immediately)
4. **One stretch suggestion** (a bigger change that could significantly improve it)

---
[PASTE YOUR WORK HERE]
---`,
    tags: ['feedback', 'writing', 'editing', 'improvement'],
    tips: [
      'Be specific about what you want critiqued: "focus on clarity and structure, not style"',
      'Add "be blunt — I can handle honest feedback" for more direct critiques',
      'Follow up: "Now show me a rewritten version incorporating your top suggestions"',
    ],
  },
  {
    id: 'prompt-009',
    slug: 'research-assistant',
    title: 'Deep Research on Any Topic',
    description: 'Get a structured research briefing on any topic — with subtopics, key concepts, and knowledge gaps.',
    category: 'research',
    difficulty: 'intermediate',
    template: `Act as an experienced research assistant. I need to understand [TOPIC] for [PURPOSE — e.g., "a presentation", "a business decision", "personal education"].

My current knowledge level: [BEGINNER / INTERMEDIATE / has knowledge of X but not Y]

Please provide:
1. **Overview** (what this topic is, why it matters, key terminology)
2. **Key concepts** (5-7 sub-topics or concepts I need to understand — briefly explained)  
3. **Common misconceptions** (2-3 widespread wrong beliefs about this topic)
4. **Landscape** (major players, tools, frameworks, or schools of thought)
5. **Where to dig deeper** (what to search or read for specific subtopics)
6. **What I should not assume** (anything that changes depending on context or is often oversimplified)`,
    tags: ['research', 'learning', 'analysis', 'deep-dive'],
    tips: [
      'Use Perplexity for factual/current topics; use this prompt for conceptual understanding',
      'Follow up: "What are the most contested or unsettled questions in this field?"',
      'Add "relate this to [DOMAIN YOU KNOW]" for faster mental model building',
    ],
  },
  {
    id: 'prompt-010',
    slug: 'plan-project',
    title: 'Plan Any Project',
    description: 'Turn a vague project idea into a structured plan with phases, risks, and first steps.',
    category: 'productivity',
    difficulty: 'intermediate',
    template: `I need to plan a project:

**Project goal:** [WHAT YOU WANT TO ACHIEVE]
**Timeline:** [AVAILABLE TIME OR DEADLINE]
**Resources:** [PEOPLE, BUDGET, TOOLS AVAILABLE]
**My role:** [YOUR SPECIFIC ROLE IN THIS PROJECT]
**Known constraints:** [LIMITATIONS OR NON-NEGOTIABLES]

Please create:
1. **Project overview** (one paragraph framing the goal clearly)
2. **Phases / milestones** (logical sequence of work stages with rough timelines)
3. **Key tasks per phase** (3-5 tasks per phase)
4. **Risks and mitigations** (3 things that could go wrong and how to prevent them)
5. **First 3 actions** (what to do in the next 48 hours to start with momentum)`,
    tags: ['planning', 'project-management', 'productivity', 'strategy'],
    tips: [
      'Add "assume I have never done this before" for beginner-friendly planning',
      'Follow up: "Turn Phase 1 tasks into a week-by-week schedule"',
      'Ask "what are the most common reasons projects like this fail?" after the plan',
    ],
  },
  {
    id: 'prompt-011',
    slug: 'study-notes',
    title: 'Create Study Notes from Any Content',
    description: 'Convert any article, chapter, or transcript into comprehensive study notes.',
    category: 'learning',
    difficulty: 'beginner',
    template: `Convert the content below into study notes. Format as:

**Core idea in one sentence:**
(The single most important takeaway)

**Key concepts:**
- [Concept Name]: [1-sentence definition]
- (repeat for 5-8 key concepts)

**Important details:**
- (bullet points of facts, statistics, examples, or nuances worth remembering)

**How this connects to:**
- [ADJACENT TOPIC 1]: [brief connection]
- [ADJACENT TOPIC 2]: [brief connection]

**Questions to test understanding:**
1. [question]
2. [question]
3. [question]

---
[PASTE CONTENT HERE]
---`,
    tags: ['learning', 'studying', 'notes', 'education'],
    tips: [
      'Add "I am studying for [EXAM OR GOAL]" to focus on the most relevant content',
      'Use the generated questions for active recall practice',
      'Create these for every major resource and keep them in a personal knowledge base',
    ],
  },
  {
    id: 'prompt-012',
    slug: 'tool-selection-guide',
    title: 'Pick the Right AI Tool',
    description: 'Get a recommendation for which AI tool to use for a specific task or workflow.',
    category: 'thinking',
    difficulty: 'beginner',
    template: `I want to use AI to [DESCRIBE WHAT YOU WANT TO ACCOMPLISH].

My situation:
- Technical comfort level: [BEGINNER / INTERMEDIATE / ADVANCED]
- Budget: [FREE / WILLING TO PAY UP TO $X/month]
- Platform: [WEB / MAC / WINDOWS / MOBILE]
- Privacy concern: [LOW — happy to use cloud tools / HIGH — need local or private options]
- Existing tools I already use: [LIST ANY RELEVANT TOOLS]

Please recommend:
1. **Best fit tool** (with specific reason why it matches my situation)
2. **How to get started** (the quickest path to a working setup)
3. **Alternatives to consider** (1-2 options if the best fit does not work out)
4. **What to watch out for** (limitations or gotchas for my use case)`,
    tags: ['tools', 'selection', 'recommendations', 'getting-started'],
    tips: [
      'Be specific about the task — "AI for writing" is too vague; "AI to write weekly product updates" is better',
      'Run this prompt on multiple AI tools and compare the recommendations',
      'Follow up: "How does this compare to [specific tool] for my use case?"',
    ],
    isStarter: true,
  },
  {
    id: 'prompt-013',
    slug: 'analyze-options',
    title: 'Analyze a Decision or Tradeoff',
    description: 'Get a structured analysis of a difficult choice with clear pros, cons, and a recommendation.',
    category: 'analysis',
    difficulty: 'intermediate',
    template: `I am trying to decide between:

**Option A:** [DESCRIBE OPTION A]
**Option B:** [DESCRIBE OPTION B]
[Add Option C if applicable]

Context:
- My goal: [WHAT I AM TRYING TO ACHIEVE]
- My constraints: [KEY LIMITATIONS — time, money, skills, etc.]
- What matters most to me: [YOUR PRIORITIES IN ORDER]

Please give me:
1. **Structured comparison** (table or list comparing each option on the criteria that matter to me)
2. **Hidden trade-offs** (what I might not be fully accounting for)
3. **Recommendation** (which option you suggest for my stated goals, with reasoning)
4. **The question I should be asking instead** (if my framing of the decision seems off)`,
    tags: ['decision-making', 'analysis', 'tradeoffs', 'thinking'],
    tips: [
      'Add "argue strongly for Option B even if you lean toward A" to test assumptions',
      'Ask "what additional information would most change this recommendation?"',
      'Use this for product decisions, career choices, technology selections, and even personal dilemmas',
    ],
  },
  {
    id: 'prompt-014',
    slug: 'workflow-design',
    title: 'Design an AI Workflow',
    description: 'Get a step-by-step blueprint for automating a repetitive task using AI tools.',
    category: 'productivity',
    difficulty: 'intermediate',
    template: `I want to automate or streamline this task using AI:

**Task:** [DESCRIBE THE REPETITIVE OR TIME-CONSUMING TASK]
**Frequency:** [HOW OFTEN — daily, weekly, on-demand, etc.]
**Current process:** [HOW YOU DO IT TODAY — step by step]
**Pain points:** [WHAT IS SLOW, INCONSISTENT, OR TEDIOUS]
**Technical comfort:** [BEGINNER / INTERMEDIATE / CAN WRITE BASIC CODE]
**Tools I already use:** [LIST RELEVANT TOOLS — Notion, Gmail, Slack, etc.]

Please design a workflow:
1. **Proposed workflow** (step-by-step process using AI and/or automation tools)
2. **Tools required** (specific tools for each step, including free/paid options)
3. **Time investment to set up** (realistic estimate)
4. **Expected time saved** (per week, once running)
5. **First step** (the single simplest first action to prototype this immediately)`,
    tags: ['automation', 'workflow', 'productivity', 'ai-tools'],
    tips: [
      'Start with one manual task you do at least 3 times per week',
      'Focus on the prototype before the perfect version — a messy workflow that saves 30 minutes is valuable',
      'Ask "what could go wrong with this workflow and how would I catch it?"',
    ],
  },
  {
    id: 'prompt-015',
    slug: 'safe-verify',
    title: 'Fact-Check an AI Response',
    description: 'Ask AI to critically review its own output and flag claims that need independent verification.',
    category: 'analysis',
    difficulty: 'intermediate',
    template: `Please review the following AI-generated response and help me evaluate its reliability.

For each major claim or piece of information, tell me:
1. **Confidence level** (High / Medium / Low — based on how well-established this type of information is)
2. **Verification method** (how I could confirm this — e.g., "check official documentation", "search for recent statistics")
3. **Potential issues** (where this information might be outdated, overly simplified, or contested)
4. **What you are most uncertain about** (the claims in this response that are most likely to be inaccurate)

---
[PASTE THE AI RESPONSE TO REVIEW HERE]
---`,
    tags: ['verification', 'fact-checking', 'safety', 'critical-thinking'],
    tips: [
      'Use this whenever AI gives you specific statistics, dates, names, or technical claims',
      'Always verify high-stakes decisions (medical, legal, financial) with authoritative sources',
      'Ask the AI: "If you were wrong about this, what would be the most likely error?"',
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
