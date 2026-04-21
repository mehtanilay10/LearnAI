import type { Lesson } from '@/types';

// ─── Lesson: AI vs ML vs Generative AI ───────────────────────────────────────
const aiVsMlVsGenerativeAi: Lesson = {
  id: 'lesson-001',
  slug: 'ai-vs-ml-vs-generative-ai',
  moduleSlug: 'what-is-ai',
  title: 'AI vs ML vs Generative AI',
  description:
    'Cut through the confusion. Understand the difference between AI, machine learning, and generative AI — and why it matters for how you use these tools.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['ai-basics', 'ml', 'generative-ai', 'terminology'],
  relatedGlossaryTerms: ['artificial-intelligence', 'machine-learning', 'large-language-model', 'generative-ai'],
  blocks: [
    {
      type: 'callout',
      id: 'intro-callout',
      data: {
        variant: 'tip',
        title: 'No math required',
        text: 'This lesson explains these concepts at the conceptual level. You do not need any technical background.',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'When people talk about "AI" today, they often mean very different things. A doctor, a programmer, a marketer, and a journalist will all use the word "AI" to mean something slightly different. That confusion gets in the way of using these tools well.',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Let\'s clear it up with one simple diagram and a few clean definitions.',
      },
    },
    {
      type: 'heading',
      id: 'the-big-picture',
      data: { level: 2, text: 'The big picture', anchor: 'the-big-picture' },
    },
    {
      type: 'mermaid',
      data: {
        id: 'ai-ml-genai',
        caption: 'Generative AI is a subset of ML, which is a subset of AI',
        definition: `graph TD
  A[Artificial Intelligence\\nTeach machines to do smart things]
  B[Machine Learning\\nLearn from data automatically]
  C[Deep Learning\\nNeural networks with many layers]
  D[Generative AI\\nCreate new text, images, code, audio]
  E[Chatbots like ChatGPT\\nGemini, Claude]

  A --> B
  B --> C
  C --> D
  D --> E

  style A fill:#ddf4ff,stroke:#0969da,color:#0550ae
  style B fill:#d1f3d8,stroke:#1a7f37,color:#1a7f37
  style C fill:#fff8c5,stroke:#9a6700,color:#9a6700
  style D fill:#ffe1cc,stroke:#bc4c00,color:#bc4c00
  style E fill:#eddff8,stroke:#8250df,color:#6639ba`,
      },
    },
    {
      type: 'heading',
      id: 'artificial-intelligence',
      data: { level: 2, text: 'Artificial Intelligence (AI)', anchor: 'artificial-intelligence' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'AI is the broad field of making computers do things that typically require human intelligence — like recognizing faces, understanding speech, recommending movies, or translating text.',
      },
    },
    {
      type: 'callout',
      data: {
        variant: 'note',
        text: 'AI includes both simple rule-based systems ("if X, show Y") and advanced systems that learn from data. The word is often used loosely.',
      },
    },
    {
      type: 'heading',
      id: 'machine-learning',
      data: { level: 2, text: 'Machine Learning (ML)', anchor: 'machine-learning' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Machine learning is a type of AI where systems learn from examples rather than following explicit rules. Instead of telling a computer "a spam email has these words," you show it thousands of spam examples and it figures out the patterns.',
      },
    },
    {
      type: 'example',
      data: {
        title: 'ML in action',
        content: 'Netflix recommendations, Instagram feeds, fraud detection at your bank, voice recognition on your phone — all of these use machine learning.',
      },
    },
    {
      type: 'heading',
      id: 'generative-ai',
      data: { level: 2, text: 'Generative AI', anchor: 'generative-ai' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Generative AI is the newest and most impactful category. These are AI systems that can generate new content — text, images, code, audio, or video — that did not exist before.',
      },
    },
    {
      type: 'paragraph',
      data: {
        text: 'ChatGPT, Claude, Gemini, Midjourney, and DALL-E are all generative AI tools. They work by learning patterns from massive amounts of data, then using those patterns to produce new, plausible outputs.',
      },
    },
    {
      type: 'comparison-cards',
      data: {
        title: 'Quick comparison',
        cards: [
          {
            title: 'Traditional AI',
            description: 'Rule-based systems that follow explicit logic',
            pros: ['Predictable', 'Auditable', 'Fast'],
            cons: ['Rigid', 'Cannot handle new situations well'],
            tags: ['rules', 'deterministic'],
          },
          {
            title: 'Machine Learning',
            description: 'Systems that learn patterns from data',
            pros: ['Adapts from examples', 'Handles complex patterns'],
            cons: ['Needs lots of data', 'Can be a black box'],
            tags: ['data-driven', 'training'],
          },
          {
            title: 'Generative AI',
            description: 'Systems that create new content',
            pros: ['Flexible', 'Creative', 'Handles natural language'],
            cons: ['Can hallucinate', 'Unpredictable outputs'],
            tags: ['creative', 'llm', 'modern'],
          },
        ],
      },
    },
    {
      type: 'summary-box',
      data: {
        title: 'Key takeaways',
        points: [
          'AI is the broad field; ML and Generative AI are types of AI',
          'Machine learning learns from data examples, not hand-coded rules',
          'Generative AI (ChatGPT, Claude, etc.) creates new content — text, images, code',
          'When someone says "AI" today, they usually mean generative AI',
        ],
        takeaway: 'You now have the vocabulary to talk about these technologies clearly.',
      },
    },
  ],
  relatedLessons: ['how-llms-work-simply', 'what-ai-can-and-cannot-do'],
};

// ─── Lesson: How LLMs Work Simply ────────────────────────────────────────────
const howLlmsWorkSimply: Lesson = {
  id: 'lesson-002',
  slug: 'how-llms-work-simply',
  moduleSlug: 'what-is-ai',
  title: 'How LLMs Work (Simply)',
  description:
    'A plain-language explanation of how large language models like ChatGPT actually work — no math, no code, just the real mental model.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 15,
  tags: ['llms', 'tokens', 'neural-networks', 'how-ai-works'],
  relatedGlossaryTerms: ['large-language-model', 'token', 'transformer', 'temperature'],
  blocks: [
    {
      type: 'paragraph',
      data: {
        text: 'You\'ve used ChatGPT or another AI chatbot. You type something, and it responds intelligently. But what is actually happening inside? Understanding this — even at a simple level — makes you dramatically better at using these tools.',
      },
    },
    {
      type: 'heading',
      id: 'autocomplete-on-steroids',
      data: { level: 2, text: 'The core idea: autocomplete at a massive scale', anchor: 'autocomplete-on-steroids' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'At its core, a large language model (LLM) is a very sophisticated next-word predictor. Given a sequence of text, it predicts what should come next — over and over, word by word (technically token by token), until it produces a complete response.',
      },
    },
    {
      type: 'callout',
      data: {
        variant: 'info',
        title: 'Think of it this way',
        text: 'Your phone keyboard predicts the next word. An LLM does the same thing — but it was trained on hundreds of billions of words, so its predictions are remarkably accurate and nuanced.',
      },
    },
    {
      type: 'heading',
      id: 'what-is-a-token',
      data: { level: 2, text: 'What is a token?', anchor: 'what-is-a-token' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'AI models don\'t read word by word — they use tokens. A token is roughly 3-4 characters of text. The word "learning" is one token. "Unbelievable" might be 2-3 tokens. Numbers and punctuation have their own tokens too.',
      },
    },
    {
      type: 'callout',
      data: {
        variant: 'tip',
        text: 'Token limits matter. Most models have a "context window" — a limit on how much text (tokens) they can process at once. This is why very long conversations can cause the AI to forget earlier context.',
      },
    },
    {
      type: 'heading',
      id: 'how-it-was-trained',
      data: { level: 2, text: 'How was it trained?', anchor: 'how-it-was-trained' },
    },
    {
      type: 'numbered-list',
      data: {
        title: 'Super simplified training process:',
        items: [
          'Collected hundreds of billions of words from the internet, books, and other text',
          'Trained a neural network to predict missing words billions of times',
          'The network adjusted its internal parameters each time it was wrong',
          'After training, the model can complete any text in a plausible way',
          'Then it was fine-tuned via human feedback to be helpful and safe (RLHF)',
        ],
      },
    },
    {
      type: 'heading',
      id: 'why-it-halluccinates',
      data: { level: 2, text: 'Why AI sometimes makes things up', anchor: 'why-it-halluccinates' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'Because the model generates text that sounds plausible based on patterns — it has no built-in fact-checking step. It doesn\'t know when it doesn\'t know something. It will produce confident-sounding text even when it\'s wrong. This is called hallucination.',
      },
    },
    {
      type: 'callout',
      data: {
        variant: 'warning',
        title: 'Critical habit',
        text: 'Always verify important facts from AI with a second source. The AI sounds confident even when it\'s wrong.',
      },
    },
    {
      type: 'mermaid',
      data: {
        id: 'llm-flow',
        caption: 'How an LLM processes your message and generates a response',
        definition: `sequenceDiagram
  participant U as You
  participant T as Tokenizer
  participant M as LLM (Neural Network)
  participant D as Decoder
  participant R as Response

  U->>T: "Explain photosynthesis simply"
  T->>M: [token ids: 1204, 384, 9021...]
  M->>M: Predict next token (repeated 100s of times)
  M->>D: Output token probabilities
  D->>R: Decode tokens → readable text
  R->>U: "Photosynthesis is the process..."`,
      },
    },
    {
      type: 'summary-box',
      data: {
        title: 'What you just learned',
        points: [
          'LLMs work by predicting the next token in a sequence — repeatedly',
          'They were trained on massive amounts of text from the internet',
          'They have no memory between conversations (unless the app adds it)',
          'Hallucination happens because they predict plausible text, not verified facts',
          'Context window = how much text they can "hold in mind" at once',
        ],
      },
    },
  ],
  relatedLessons: ['ai-vs-ml-vs-generative-ai', 'what-ai-can-and-cannot-do'],
};

// ─── Lesson: What AI Can and Cannot Do ───────────────────────────────────────
const whatAiCanAndCannotDo: Lesson = {
  id: 'lesson-003',
  slug: 'what-ai-can-and-cannot-do',
  moduleSlug: 'what-is-ai',
  title: 'What AI Can and Cannot Do',
  description:
    'Set accurate expectations. Know where AI genuinely excels versus where it struggles — so you use it wisely and avoid frustrating mistakes.',
  order: 3,
  difficulty: 'beginner',
  estimatedMinutes: 10,
  tags: ['ai-limitations', 'expectations', 'hallucination', 'practical'],
  blocks: [
    {
      type: 'paragraph',
      data: {
        text: 'Knowing what AI is bad at is just as valuable as knowing what it\'s good at. Setting the right expectations prevents disappointment and helps you design better workflows.',
      },
    },
    {
      type: 'table',
      data: {
        headers: ['AI is great at…', 'AI struggles with…'],
        rows: [
          ['Drafting and editing text', 'Knowing today\'s news (without search tools)'],
          ['Summarizing long documents', 'Precise arithmetic and calculations'],
          ['Brainstorming ideas quickly', 'Verifying facts reliably'],
          ['Explaining complex concepts simply', 'Consistent long-context reasoning'],
          ['Writing and reviewing code', 'Truly original creative intuition'],
          ['Translating between languages', 'Real-world physical tasks'],
          ['Answering general knowledge questions', 'Knowing what it doesn\'t know'],
        ],
      },
    },
    {
      type: 'callout',
      data: {
        variant: 'important',
        title: 'The golden rule',
        text: 'AI is a powerful first-draft and thinking tool. Treat its outputs as a smart starting point that you refine — not as final answers you blindly accept.',
      },
    },
    {
      type: 'summary-box',
      data: {
        title: 'The right mental model',
        points: [
          'AI is like a brilliant intern — fast, wide-ranging, enthusiastic, but needs supervision',
          'Use AI for speed and breadth; bring your own judgment and expertise for depth',
          'The more specific your prompt, the better the output',
          'Always ask: "Does this need verification before I act on it?"',
        ],
      },
    },
  ],
  relatedLessons: ['how-llms-work-simply', 'anatomy-of-a-good-prompt'],
};

// ─── Lesson: Anatomy of a Good Prompt ────────────────────────────────────────
const anatomyOfAGoodPrompt: Lesson = {
  id: 'lesson-004',
  slug: 'anatomy-of-a-good-prompt',
  moduleSlug: 'prompting-basics',
  title: 'Anatomy of a Good Prompt',
  description:
    'Learn the simple framework for writing prompts that consistently get excellent results from any AI tool.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['prompting', 'prompt-design', 'context', 'role-prompting'],
  relatedGlossaryTerms: ['prompt', 'system-prompt', 'context-window', 'temperature'],
  blocks: [
    {
      type: 'paragraph',
      data: {
        text: 'Most people use AI by typing a quick question and hoping for the best. That works — but learning to write good prompts is like learning to ask good questions. It dramatically improves what you get back.',
      },
    },
    {
      type: 'heading',
      id: 'the-core-framework',
      data: { level: 2, text: 'The CRTF Framework', anchor: 'the-core-framework' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'A strong prompt usually contains four elements. Think of them as levers you can adjust:',
      },
    },
    {
      type: 'key-terms',
      data: {
        terms: [
          {
            term: 'Context',
            definition: 'Background information the AI needs. Who are you? What situation are you in? What has already happened?',
          },
          {
            term: 'Role',
            definition: 'Ask the AI to act as a specific persona — "Act as a UX designer", "You are a patient high school teacher".',
          },
          {
            term: 'Task',
            definition: 'The actual instruction — what you want it to do. Be specific and action-oriented.',
          },
          {
            term: 'Format',
            definition: 'How you want the output structured — "give me a bullet list", "write in under 100 words", "use markdown headers".',
          },
        ],
      },
    },
    {
      type: 'example',
      data: {
        title: 'Before vs After',
        content: 'Bad prompt: "Write me an email"\n\nGood prompt: "Act as a professional copywriter. I need to send an email to a client who missed our meeting without explanation. Tone: firm but not aggressive. Keep it under 80 words. Use two short paragraphs."',
      },
    },
    {
      type: 'heading',
      id: 'iteration',
      data: { level: 2, text: 'Prompting is a conversation', anchor: 'iteration' },
    },
    {
      type: 'paragraph',
      data: {
        text: 'You rarely get a perfect result on the first try — and that\'s fine. Treat prompting like a conversation: refine, clarify, ask it to adjust the tone, make it shorter, add an example, try again.',
      },
    },
    {
      type: 'checklist',
      data: {
        title: 'Prompt quality checklist',
        items: [
          { text: 'Did I give enough context for the AI to understand my situation?' },
          { text: 'Did I specify a role or persona if useful?' },
          { text: 'Is my task instruction clear and specific?' },
          { text: 'Did I specify the desired format and length?' },
          { text: 'If the output was wrong, did I refine rather than restart?' },
        ],
      },
    },
    {
      type: 'summary-box',
      data: {
        title: 'Takeaways',
        points: [
          'Good prompts have: Context + Role + Task + Format',
          'Specificity is your superpower — vague prompts get vague answers',
          'Prompting is iterative — refine the result instead of accepting the first output',
          'The AI cannot read your mind; tell it exactly what you need',
        ],
      },
    },
  ],
  relatedLessons: ['prompt-patterns', 'what-ai-can-and-cannot-do'],
};

// ─── Lesson registry ─────────────────────────────────────────────────────────

export const lessons: Lesson[] = [
  aiVsMlVsGenerativeAi,
  howLlmsWorkSimply,
  whatAiCanAndCannotDo,
  anatomyOfAGoodPrompt,
  // TODO: add more lessons here as content is populated
  // Following the same structure, add:
  // - ai-in-everyday-life
  // - chatbot-landscape
  // - choosing-the-right-tool
  // - prompt-patterns
  // - automation-basics lessons
  // - agents lessons
  // - rag-and-memory lessons
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleSlug === moduleSlug)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(
  lesson: Lesson,
  allLessons: Lesson[]
): { prev: Lesson | null; next: Lesson | null } {
  const moduleLessons = allLessons
    .filter((l) => l.moduleSlug === lesson.moduleSlug)
    .sort((a, b) => a.order - b.order);
  const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
  return {
    prev: idx > 0 ? moduleLessons[idx - 1] : null,
    next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
  };
}
