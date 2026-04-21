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

// ─── Lesson: AI in Everyday Life ─────────────────────────────────────────────
const aiInEverydayLife: Lesson = {
  id: 'lesson-005',
  slug: 'ai-in-everyday-life',
  moduleSlug: 'what-is-ai',
  title: 'AI in Everyday Life',
  description: 'Discover how AI is already embedded in the tools you use daily — and what that means for you.',
  order: 4,
  difficulty: 'beginner',
  estimatedMinutes: 8,
  tags: ['everyday-ai', 'practical', 'awareness'],
  blocks: [
    { type: 'paragraph', data: { text: 'AI is not a future technology. It is already running in dozens of apps you use every day — most of the time invisibly.' } },
    { type: 'heading', id: 'ai-already-here', data: { level: 2, text: 'AI you already use', anchor: 'ai-already-here' } },
    { type: 'bullet-list', data: { items: ['Email spam filters — AI scores every email before you see it', 'Autocomplete in Google Search and your phone keyboard', 'Netflix and Spotify recommendations', 'Face unlock and photo tagging on your phone', 'Google Translate and Live Caption', 'Voice assistants: Siri, Alexa, Google Assistant', 'Fraud detection when your bank blocks a suspicious charge', 'YouTube, Instagram, and TikTok feed algorithms'] } },
    { type: 'callout', data: { variant: 'info', title: 'The shift happening now', text: 'Until recently, AI worked silently in the background. Now, with generative AI, you can talk to AI directly — making it a tool you can actively use, not just passively experience.' } },
    { type: 'heading', id: 'why-this-matters', data: { level: 2, text: 'Why this matters for you', anchor: 'why-this-matters' } },
    { type: 'paragraph', data: { text: 'Understanding that AI is already part of your life makes the next step easier: using AI deliberately and proactively — to draft emails, research topics, plan projects, write code, and much more.' } },
    { type: 'summary-box', data: { title: 'Key points', points: ['AI has been running invisibly in apps for years', 'Generative AI (ChatGPT etc.) made AI something you talk to directly', 'You are not starting from zero — you already have AI experience', 'The next step is using AI intentionally'], takeaway: 'AI fluency is now a practical everyday skill, not a specialty.' } },
  ],
  relatedLessons: ['ai-vs-ml-vs-generative-ai', 'chatbot-landscape'],
};

// ─── Lesson: Chatbot Landscape ────────────────────────────────────────────────
const chatbotLandscape: Lesson = {
  id: 'lesson-006',
  slug: 'chatbot-landscape',
  moduleSlug: 'ai-tools-overview',
  title: 'The Chatbot Landscape',
  description: 'A clear map of the major AI chatbots — what each one is, who makes it, and when to use it.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['chatgpt', 'claude', 'gemini', 'perplexity', 'tools'],
  relatedGlossaryTerms: ['large-language-model', 'prompt', 'hallucination'],
  blocks: [
    { type: 'paragraph', data: { text: 'There are now dozens of AI chatbots. But four dominate everyday use. Here is a plain-language guide to each.' } },
    { type: 'heading', id: 'the-big-four', data: { level: 2, text: 'The four you need to know', anchor: 'the-big-four' } },
    { type: 'comparison-cards', data: { cards: [
      { title: 'ChatGPT (OpenAI)', description: 'The most widely used AI chatbot. Excellent for writing, coding, brainstorming, and analysis. GPT-4o is the flagship model. Has the largest ecosystem of plugins and integrations.', pros: ['Free tier is excellent', 'Huge feature set', 'Best integration ecosystem'], cons: ['Can hallucinate confidently', 'Context can drop in long chats'], tags: ['openai', 'freemium'] },
      { title: 'Claude (Anthropic)', description: 'Known for nuanced, careful writing and handling very long documents (200K context window). Often preferred for thoughtful analysis and editing.', pros: ['200K context', 'Very careful reasoning', 'Excellent writing style'], cons: ['Fewer integrations', 'No image generation'], tags: ['anthropic', 'freemium'] },
      { title: 'Gemini (Google)', description: 'Google\'s AI. Deeply integrated with Google Workspace (Docs, Gmail, Drive). Strong real-time web access and multimodal capabilities.', pros: ['Best Google Workspace integration', 'Real-time web access', 'Multimodal'], cons: ['Responses can be verbose', 'Less predictable tone'], tags: ['google', 'freemium'] },
      { title: 'Perplexity', description: 'AI-powered search. Best for factual questions where you need cited sources. Dramatically reduces hallucination risk on factual topics.', pros: ['Shows sources for every claim', 'Real-time web search', 'Great for research'], cons: ['Less useful for creative tasks', 'No document editing'], tags: ['search', 'freemium'] },
    ] } },
    { type: 'callout', data: { variant: 'tip', title: 'Which one should I use?', text: 'Start with ChatGPT or Claude for general tasks. Use Perplexity any time you need verified facts. Most people end up using 2-3 tools for different purposes.' } },
    { type: 'summary-box', data: { title: 'Quick reference', points: ['ChatGPT — best overall, largest ecosystem', 'Claude — best for long documents and careful writing', 'Gemini — best with Google Workspace', 'Perplexity — best for research and factual questions'] } },
  ],
  relatedLessons: ['choosing-the-right-tool', 'ai-vs-ml-vs-generative-ai'],
};

// ─── Lesson: Choosing the Right Tool ─────────────────────────────────────────
const choosingTheRightTool: Lesson = {
  id: 'lesson-007',
  slug: 'choosing-the-right-tool',
  moduleSlug: 'ai-tools-overview',
  title: 'Choosing the Right AI Tool',
  description: 'A practical decision framework for picking the right AI tool for any task.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 10,
  tags: ['tool-selection', 'decision-framework', 'practical'],
  blocks: [
    { type: 'paragraph', data: { text: 'Having too many tool choices is its own problem. This lesson gives you a simple decision framework you can apply to any task in under 30 seconds.' } },
    { type: 'heading', id: 'decision-framework', data: { level: 2, text: 'The tool selection checklist', anchor: 'decision-framework' } },
    { type: 'checklist', data: { title: 'Ask these questions before choosing a tool', items: [
      { text: 'Does this task need verified, sourced facts?', hint: 'If yes → Perplexity first' },
      { text: 'Is this long document analysis or careful writing?', hint: 'If yes → Claude' },
      { text: 'Am I working in Google Docs, Gmail, or Drive?', hint: 'If yes → Gemini' },
      { text: 'Do I need images or code interpreter?', hint: 'If yes → ChatGPT (paid)' },
      { text: 'Is privacy critical and no sensitive data involved?', hint: 'All major tools are similar here — check enterprise plans for business data' },
    ] } },
    { type: 'heading', id: 'task-map', data: { level: 2, text: 'Task-to-tool map', anchor: 'task-map' } },
    { type: 'table', data: { headers: ['Task', 'Best First Choice', 'Good Alternative'], rows: [
      ['Research with citations', 'Perplexity', 'ChatGPT with browse'],
      ['Edit a long document', 'Claude', 'ChatGPT'],
      ['Write a first draft', 'Claude or ChatGPT', 'Gemini'],
      ['Brainstorm ideas', 'ChatGPT or Claude', 'Any'],
      ['Gmail/Docs help', 'Gemini', 'ChatGPT'],
      ['Code help', 'ChatGPT or Claude', 'GitHub Copilot'],
      ['Image generation', 'DALL-E / Midjourney', 'Adobe Firefly'],
      ['Summarize a PDF', 'Claude', 'ChatGPT'],
    ] } },
    { type: 'callout', data: { variant: 'note', text: 'The best tool changes over time as models improve. Focus on learning the skill of prompt writing — that transfers across any tool.' } },
    { type: 'summary-box', data: { title: 'Decision shortcut', points: ['Facts with sources → Perplexity', 'Long docs/careful writing → Claude', 'Google Workspace → Gemini', 'General tasks → ChatGPT or Claude', 'The skill of prompting matters more than the tool'] } },
  ],
  relatedLessons: ['chatbot-landscape', 'anatomy-of-a-good-prompt'],
};

// ─── Lesson: Prompt Patterns ──────────────────────────────────────────────────
const promptPatterns: Lesson = {
  id: 'lesson-008',
  slug: 'prompt-patterns',
  moduleSlug: 'prompting-basics',
  title: 'Prompt Patterns That Work',
  description: 'Learn the most effective repeatable prompt patterns — from role-play to step-by-step to "think aloud".',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['prompt-patterns', 'templates', 'role-play', 'step-by-step'],
  blocks: [
    { type: 'paragraph', data: { text: 'Beyond the basic CRTF framework, certain prompt patterns reliably produce better results across very different tasks. Think of these as repeatable recipes.' } },
    { type: 'heading', id: 'role-play-pattern', data: { level: 2, text: 'Pattern 1: Role-play', anchor: 'role-play-pattern' } },
    { type: 'paragraph', data: { text: 'Telling the AI to act as a specific expert sets its tone, vocabulary, and approach. It subtly activates the most relevant part of its training.' } },
    { type: 'example', data: { title: 'Role-play prompt', content: '"Act as a senior product manager reviewing a feature spec. Be direct and focus on user impact and technical feasibility."' } },
    { type: 'heading', id: 'step-by-step-pattern', data: { level: 2, text: 'Pattern 2: Step-by-step', anchor: 'step-by-step-pattern' } },
    { type: 'paragraph', data: { text: 'Asking the AI to think step by step dramatically improves accuracy on complex questions. This is called chain-of-thought and is one of the most well-studied prompt techniques.' } },
    { type: 'example', data: { title: 'Step-by-step prompt', content: '"Think through this step by step before answering: If I have a $10,000 marketing budget and want to reach professionals aged 35-50, which channels should I prioritize and why?"' } },
    { type: 'heading', id: 'before-after-pattern', data: { level: 2, text: 'Pattern 3: Before / After', anchor: 'before-after-pattern' } },
    { type: 'example', data: { title: 'Before/after prompt', content: '"Here is a paragraph I wrote [PASTE]. Rewrite it to be 30% shorter while keeping all the key information. Show me the before and after side by side."' } },
    { type: 'heading', id: 'constraint-pattern', data: { level: 2, text: 'Pattern 4: Constraints', anchor: 'constraint-pattern' } },
    { type: 'paragraph', data: { text: 'Constraints force the AI to be precise. Word limits, format rules, and specific requirements all improve output quality.' } },
    { type: 'example', data: { title: 'Constraint prompt', content: '"Summarize this in exactly 3 bullets. Each bullet must start with an action verb. Maximum 15 words per bullet."' } },
    { type: 'heading', id: 'output-template-pattern', data: { level: 2, text: 'Pattern 5: Output template', anchor: 'output-template-pattern' } },
    { type: 'example', data: { title: 'Template prompt', content: '"Fill in this template based on the notes below:\n## Meeting Summary\n**Date:** [DATE]\n**Key decisions:** [LIST]\n**Action items:** [OWNER: TASK by DATE]\n**Open questions:** [LIST]\n\nNotes: [PASTE NOTES]"' } },
    { type: 'summary-box', data: { title: 'The 5 core patterns', points: ['Role-play — set an expert persona', 'Step-by-step — force reasoning on hard problems', 'Before/After — show what to transform', 'Constraints — force precision with limits', 'Output template — define the exact structure you need'] } },
  ],
  relatedLessons: ['anatomy-of-a-good-prompt', 'common-prompting-mistakes'],
};

// ─── Lesson: Common Prompting Mistakes ───────────────────────────────────────
const commonPromptingMistakes: Lesson = {
  id: 'lesson-009',
  slug: 'common-prompting-mistakes',
  moduleSlug: 'prompting-basics',
  title: 'Common Prompting Mistakes',
  description: 'The most common ways people accidentally get bad AI results — and how to fix each one.',
  order: 3,
  difficulty: 'beginner',
  estimatedMinutes: 10,
  tags: ['mistakes', 'debugging-prompts', 'improvement'],
  blocks: [
    { type: 'paragraph', data: { text: 'When AI output disappoints, the problem is almost always the prompt — not the model. Here are the most common mistakes and their fixes.' } },
    { type: 'table', data: { headers: ['Mistake', 'Why it fails', 'Fix'], rows: [
      ['Too vague ("write something about AI")', 'AI has no target to aim at', 'Add context, audience, length, and purpose'],
      ['No context about yourself', 'AI assumes a generic audience', 'Add: "I am a [role] working on [situation]"'],
      ['Accepting the first draft', 'First output is rarely the best', 'Iterate: "Make it shorter / more direct / change tone"'],
      ['Asking too many things at once', 'AI tries to do everything, does nothing well', 'One clear task per prompt; chain if needed'],
      ['Not specifying format', 'AI picks a format you did not want', 'Add: "Use bullet points" or "Reply in under 100 words"'],
      ['Not saying what NOT to do', 'AI includes things you wanted excluded', 'Add: "Do not include [X]. Avoid [Y]."'],
      ['Treating AI output as final', 'AI can hallucinate or miss nuance', 'Always review and edit AI output'],
    ] } },
    { type: 'callout', data: { variant: 'tip', title: 'The quick fix', text: 'If you got a bad result, do not start over. Instead, reply with: "That was not quite right. [Specific issue]. Try again with [specific adjustment]."' } },
    { type: 'summary-box', data: { title: 'Remember', points: ['Vagueness is the #1 cause of bad AI output', 'Prompting is a conversation — iterate, do not restart', 'Constraints improve quality', 'AI output is a starting point, not a final answer'] } },
  ],
  relatedLessons: ['anatomy-of-a-good-prompt', 'prompt-patterns'],
};

// ─── Chunk 2: Key Concepts + Tools In Depth ───────────────────────────────────

const tokensExplained: Lesson = {
  id: 'lesson-010',
  slug: 'tokens-explained',
  moduleSlug: 'understanding-llms',
  title: 'Tokens Explained',
  description: 'Understand what tokens are, how they affect limits and costs, and why they matter for everyday AI use.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 10,
  tags: ['tokens', 'context', 'cost', 'limits'],
  relatedGlossaryTerms: ['token', 'context-window', 'large-language-model'],
  blocks: [
    { type: 'paragraph', data: { text: 'Every AI model has limits. Those limits are measured in tokens — not words. Understanding tokens helps you avoid frustrating cut-offs and understand why some requests cost more than others.' } },
    { type: 'heading', id: 'what-is-a-token', data: { level: 2, text: 'What is a token?', anchor: 'what-is-a-token' } },
    { type: 'paragraph', data: { text: 'A token is a chunk of text — roughly 3-4 characters. The word "hello" is 1 token. "Unbelievably" might be 3 tokens. Numbers, punctuation, and spaces all take tokens too.' } },
    { type: 'table', data: { headers: ['Text', 'Approx. tokens'], rows: [['1,000 tokens', '≈ 750 words'], ['1 page of text', '≈ 500–700 tokens'], ['A short story (5,000 words)', '≈ 6,500 tokens'], ['An average PDF (20 pages)', '≈ 10,000–15,000 tokens']] } },
    { type: 'heading', id: 'why-tokens-matter', data: { level: 2, text: 'Why tokens matter', anchor: 'why-tokens-matter' } },
    { type: 'bullet-list', data: { title: 'Tokens affect:', items: ['Context limits — how much text the AI can "see" at once', 'API costs — you pay per token used (input + output)', 'Response truncation — long conversations may cut off early messages', 'Speed — more tokens generally means slower responses'] } },
    { type: 'callout', data: { variant: 'tip', text: 'For practical use: think of 1,000 tokens as roughly one page of reading. If your document is 50 pages you might hit limits with smaller models. Claude handles up to ~150,000 words in one session.' } },
    { type: 'summary-box', data: { title: 'Key facts', points: ['1 token ≈ 3-4 characters or ¾ of a word', '1,000 tokens ≈ 750 words', 'Token limits determine how much context an AI can process at once', 'Longer inputs use more tokens and may cost more on paid APIs'] } },
  ],
  relatedLessons: ['context-window-deep-dive', 'how-llms-work-simply'],
};

const contextWindowDeepDive: Lesson = {
  id: 'lesson-011',
  slug: 'context-window-deep-dive',
  moduleSlug: 'understanding-llms',
  title: 'Context Windows Explained',
  description: "Understand the context window — the AI's working memory — and how to use it effectively.",
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['context-window', 'memory', 'long-context', 'limits'],
  relatedGlossaryTerms: ['context-window', 'token'],
  blocks: [
    { type: 'paragraph', data: { text: "The context window is one of the most important and most misunderstood concepts in AI. Once you understand it, AI behavior — including seemingly random 'forgetting' — starts making sense." } },
    { type: 'heading', id: 'what-is-context', data: { level: 2, text: 'What is the context window?', anchor: 'what-is-context' } },
    { type: 'paragraph', data: { text: 'The context window is the total amount of text an AI model can process in one session. Everything within that window — your messages, its replies, uploaded documents, a system prompt — counts toward the limit. When you exceed it, the oldest content is quietly dropped.' } },
    { type: 'callout', data: { variant: 'warning', title: 'The AI does not have memory between sessions', text: 'Every new conversation starts blank. The context window is working memory for a single session only. It does not remember anything from a previous chat.' } },
    { type: 'table', data: { headers: ['Model', 'Context size', 'Approx. words'], rows: [['GPT-4o', '128,000 tokens', '~96,000 words'], ['Claude 3.5', '200,000 tokens', '~150,000 words'], ['Gemini 1.5 Pro', '1,000,000 tokens', '~750,000 words'], ['Smaller/local models', '4,000–32,000 tokens', '3,000–24,000 words']] } },
    { type: 'bullet-list', data: { title: 'Practical tips:', items: ['Start a new chat for unrelated tasks — do not let context bleed between topics', 'Paste long documents early in the conversation, not at the end', "If the AI seems to 'forget' earlier instructions, the context window may be full", 'For very long projects, summarize progress and paste the summary into a new chat'] } },
    { type: 'summary-box', data: { title: 'Remember', points: ["Context window = the AI's working memory per session", 'When it fills up, older content is dropped', 'No memory persists between separate conversations', 'Larger context windows = better for long documents'] } },
  ],
  relatedLessons: ['tokens-explained', 'ai-hallucination-deep-dive'],
};

const aiHallucinationDeepDive: Lesson = {
  id: 'lesson-012',
  slug: 'ai-hallucination-deep-dive',
  moduleSlug: 'hallucinations-and-accuracy',
  title: 'AI Hallucination: A Deep Dive',
  description: 'Understand why AI invents facts, the different types of hallucinations, and when it is most dangerous.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['hallucination', 'accuracy', 'reliability', 'safety'],
  relatedGlossaryTerms: ['hallucination', 'large-language-model'],
  blocks: [
    { type: 'paragraph', data: { text: 'Hallucination is not a bug that will be patched in the next update. It is a fundamental property of how language models work. Understanding this changes how you use AI tools.' } },
    { type: 'heading', id: 'why-it-happens', data: { level: 2, text: 'Why hallucination happens', anchor: 'why-it-happens' } },
    { type: 'paragraph', data: { text: "LLMs generate the statistically most likely next token — they do not retrieve facts from a verified database. When the model encounters a gap in its knowledge, it fills it with a plausible-sounding guess. It cannot say 'I don't know' because that is rarely the highest-probability token." } },
    { type: 'table', data: { headers: ['Type', 'Example', 'Risk level'], rows: [['Factual confabulation', 'Inventing a book title or author', 'High — easily missed'], ['Date errors', 'Wrong year for a historical event', 'Medium'], ['Citation fabrication', 'Making up a study with real-sounding authors', 'Very high'], ['Logical inconsistency', 'Contradicting itself in the same response', 'Medium'], ['Subtle distortion', 'Getting a statistic 10% wrong', 'Very high — nearly impossible to spot']] } },
    { type: 'callout', data: { variant: 'warning', title: 'Subtle hallucination is the most dangerous', text: 'Completely fabricated facts are easy to notice. Numbers that are slightly off, dates that are a year wrong, or quotes with the wrong wording are far harder to catch.' } },
    { type: 'bullet-list', data: { title: 'Hallucination risk is highest when asking about:', items: ['Specific statistics, dates, names, URLs, or citations', 'Niche topics the model was less trained on', 'Recent events after the model training cutoff', 'Mathematical calculations (use a calculator tool instead)', 'Very long responses — more tokens means more opportunities to drift'] } },
    { type: 'summary-box', data: { title: 'The defense', points: ['Treat all specific facts from AI as unverified until checked', 'Use Perplexity or web search for anything needing sources', "Ask 'are you confident?' — a good model will flag uncertainty", 'Never paste AI-generated facts into formal documents without verification'] } },
  ],
  relatedLessons: ['evaluating-ai-output', 'what-ai-can-and-cannot-do'],
};

const evaluatingAiOutput: Lesson = {
  id: 'lesson-013',
  slug: 'evaluating-ai-output',
  moduleSlug: 'hallucinations-and-accuracy',
  title: 'Evaluating AI Output',
  description: 'A practical framework for reviewing AI responses before using them — so you catch problems before they cause trouble.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 10,
  tags: ['evaluation', 'quality-check', 'verification', 'habits'],
  blocks: [
    { type: 'paragraph', data: { text: 'The skill of evaluating AI output is as important as the skill of prompting. A good habit here protects you from the biggest risks of AI use.' } },
    { type: 'heading', id: 'review-framework', data: { level: 2, text: 'The SIFT review framework', anchor: 'review-framework' } },
    { type: 'key-terms', data: { terms: [
      { term: 'S — Specific facts', definition: 'Check any specific names, numbers, dates, or citations. These are where AI most often gets things wrong.' },
      { term: 'I — Internal consistency', definition: 'Does the response contradict itself? Does the conclusion follow from the reasoning?' },
      { term: 'F — Fit for purpose', definition: 'Does this actually answer your question? Is the format right? Is the tone appropriate?' },
      { term: 'T — Tone and bias', definition: 'Is the tone appropriate for your audience? Does the AI have unintended slant or framing?' },
    ] } },
    { type: 'checklist', data: { title: 'Quick output review checklist', items: [
      { text: 'Did the AI actually answer my question?', hint: 'Sometimes it answers a related but different question' },
      { text: 'Are there specific facts I should verify?', hint: 'Dates, names, numbers, URLs, citations' },
      { text: 'Is the format and length right for my use case?' },
      { text: 'Does the tone match what I need?' },
      { text: 'Would a knowledgeable person in this area agree with this?', hint: 'Your own domain knowledge is the first filter' },
    ] } },
    { type: 'callout', data: { variant: 'note', text: 'You do not need to verify everything. For creative writing or brainstorming, verification is rarely needed. For factual claims in formal documents — always check.' } },
    { type: 'summary-box', data: { title: 'Takeaway', points: ['Apply SIFT: Specific facts, Internal consistency, Fit for purpose, Tone', 'Match your verification effort to the stakes', 'Your own expertise is the first and best filter'] } },
  ],
  relatedLessons: ['ai-hallucination-deep-dive', 'critical-evaluation'],
};

const chatgptGuide: Lesson = {
  id: 'lesson-014',
  slug: 'chatgpt-guide',
  moduleSlug: 'chatbots-in-depth',
  title: 'ChatGPT: A Practical Guide',
  description: 'Everything a non-technical user needs to get the most out of ChatGPT — features, tips, and what to expect.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 15,
  tags: ['chatgpt', 'openai', 'gpt-4o', 'practical'],
  blocks: [
    { type: 'paragraph', data: { text: 'ChatGPT is the most-used AI tool in the world. Here is a practical guide to using it well — including what the free tier actually gives you and how to avoid common frustrations.' } },
    { type: 'table', data: { headers: ['Tier', 'Model', 'Best for'], rows: [['Free', 'GPT-4o mini / GPT-4o (limited)', 'General chat, writing, simple analysis'], ['Plus ($20/mo)', 'GPT-4o, o1, image generation', 'Complex reasoning, images, file analysis'], ['Pro ($200/mo)', 'o1 Pro, all features', 'Advanced research and reasoning']] } },
    { type: 'bullet-list', data: { title: 'Key features to know:', items: ['Custom GPTs — saved personas/instructions for specific use cases', 'Memory — ChatGPT can remember facts about you across sessions (opt-in)', 'Canvas — a collaborative document editor for long writing projects', 'Voice mode — hands-free conversation with real-time responses', 'File upload — analyze PDFs, spreadsheets, images', 'Code interpreter — runs actual Python in your chat'] } },
    { type: 'callout', data: { variant: 'tip', title: 'Most underused feature', text: "Custom GPTs let you skip repeating your context every time. Set up one Custom GPT for your work style and another for writing — you'll save hours." } },
    { type: 'table', data: { headers: ['Problem', 'Fix'], rows: [['Response cut off', 'Type "continue" or ask for a shorter format'], ['AI ignores instructions', 'Put the most important instruction at the START and END'], ['Too verbose', 'Add "be concise, under 150 words"'], ['Wrong tone', 'Specify tone explicitly: "professional but warm"'], ['Forgot context', 'Start each new chat with a brief project summary']] } },
    { type: 'summary-box', data: { title: 'ChatGPT essentials', points: ['Free tier is genuinely useful for most everyday tasks', 'Custom GPTs save repetitive context setup', 'Memory feature is worth enabling for regular users', 'Code interpreter and file analysis are the best paid differentiators'] } },
  ],
  relatedLessons: ['model-comparison', 'chatbot-landscape'],
};

// ─── Chunk 3: Tools, Prompting Advanced, Automation ──────────────────────────

const modelComparison: Lesson = {
  id: 'lesson-015',
  slug: 'model-comparison',
  moduleSlug: 'chatbots-in-depth',
  title: 'Comparing AI Models',
  description: 'A practical side-by-side comparison of the major AI models to help you decide which to use for each task.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['model-comparison', 'chatgpt', 'claude', 'gemini', 'decision'],
  blocks: [
    { type: 'paragraph', data: { text: 'Rather than declaring a "best" model, this lesson gives you the information to make smart choices based on your actual task.' } },
    { type: 'table', data: { headers: ['Criterion', 'ChatGPT', 'Claude', 'Gemini'], rows: [
      ['Context window', '128K tokens', '200K tokens', '1M tokens (Pro)'],
      ['Writing quality', 'Excellent', 'Excellent (more nuanced)', 'Good'],
      ['Long document analysis', 'Good', 'Excellent', 'Good'],
      ['Code', 'Excellent', 'Excellent', 'Good'],
      ['Image generation', 'Yes (DALL-E, paid)', 'No', 'Yes (Imagen, paid)'],
      ['Real-time web search', 'Yes', 'Limited', 'Yes'],
      ['Google Workspace integration', 'Via plugins', 'No', 'Native'],
      ['Free tier quality', 'Very good', 'Good', 'Good'],
    ] } },
    { type: 'callout', data: { variant: 'info', text: 'Models are updated frequently. This comparison reflects general strengths as of early 2025. Always test the current version for your specific use case.' } },
    { type: 'heading', id: 'when-to-switch', data: { level: 2, text: 'When to switch models', anchor: 'when-to-switch' } },
    { type: 'bullet-list', data: { items: ['Switch to Claude when you need careful, nuanced writing or very long context', 'Switch to Perplexity when you need sourced facts', 'Switch to Gemini when working inside Google Workspace', 'Use ChatGPT as the default and switch when you hit its limits'] } },
    { type: 'summary-box', data: { title: 'Model selection in one sentence', points: ['No model is best at everything — build the habit of choosing based on the task', 'Your prompt quality matters more than your model choice for most everyday tasks', 'Start with one tool, learn it well, then expand to a second'] } },
  ],
  relatedLessons: ['chatbot-landscape', 'choosing-the-right-tool'],
};

const aiForResearch: Lesson = {
  id: 'lesson-016',
  slug: 'ai-for-research',
  moduleSlug: 'research-and-search-tools',
  title: 'Using AI for Research',
  description: 'How to research topics faster and more thoroughly using AI — while keeping your fact-checking instincts sharp.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['research', 'perplexity', 'sources', 'fact-checking'],
  blocks: [
    { type: 'paragraph', data: { text: 'AI can dramatically speed up your research — but only if you know how to use it safely. The key is combining AI synthesis with verified sources.' } },
    { type: 'heading', id: 'research-workflow', data: { level: 2, text: 'A reliable AI research workflow', anchor: 'research-workflow' } },
    { type: 'numbered-list', data: { items: [
      'Start with Perplexity to get a sourced overview — note which claims have citations',
      'Use Claude or ChatGPT to synthesize and simplify the overview',
      'Ask: "What are the most common misconceptions about [topic]?"',
      'Ask: "What questions should I be asking that I haven\'t thought of yet?"',
      'Identify 2-3 specific claims to verify via primary sources',
      'Document your sources alongside the AI synthesis',
    ] } },
    { type: 'callout', data: { variant: 'tip', title: 'Perplexity is your fact-check ally', text: 'Perplexity retrieves live web pages and cites every claim. Use it any time you need to trust a specific fact. Do not use ChatGPT alone for empirical research.' } },
    { type: 'heading', id: 'research-prompts', data: { level: 2, text: 'Research prompts that work', anchor: 'research-prompts' } },
    { type: 'example', data: { title: 'Overview prompt', content: '"Give me a structured overview of [TOPIC]. Include: key concepts, current state of knowledge, main debates or open questions, and 3 important things a non-expert often gets wrong."' } },
    { type: 'example', data: { title: 'Perspective prompt', content: '"What would a skeptic say about [CLAIM]? What evidence exists on both sides?"' } },
    { type: 'summary-box', data: { title: 'Research rules', points: ['Perplexity first for factual topics with citations needed', 'Claude or ChatGPT for synthesis, explanation, and perspective', "Never trust a statistic, date, or citation from AI without verifying it", 'AI is an accelerator, not a replacement for primary sources'] } },
  ],
  relatedLessons: ['ai-hallucination-deep-dive', 'evaluating-ai-output'],
};

const chainOfThoughtPrompting: Lesson = {
  id: 'lesson-017',
  slug: 'chain-of-thought-prompting',
  moduleSlug: 'advanced-prompting',
  title: 'Chain-of-Thought Prompting',
  description: 'Make AI reason step by step — the technique that produces dramatically better results on complex problems.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['chain-of-thought', 'reasoning', 'step-by-step', 'advanced-prompting'],
  relatedGlossaryTerms: ['prompt', 'large-language-model'],
  blocks: [
    { type: 'paragraph', data: { text: 'Chain-of-thought prompting is one of the most well-researched improvements in prompt engineering. It works by asking the AI to show its reasoning before giving an answer — and this dramatically reduces errors on complex tasks.' } },
    { type: 'heading', id: 'why-it-works', data: { level: 2, text: 'Why it works', anchor: 'why-it-works' } },
    { type: 'paragraph', data: { text: 'When an LLM generates a long chain of reasoning tokens before its final answer, each step conditions the next step — making the final answer far more likely to follow logically. It is like the difference between blurting out an answer versus thinking out loud first.' } },
    { type: 'heading', id: 'how-to-use', data: { level: 2, text: 'How to use it', anchor: 'how-to-use' } },
    { type: 'table', data: { headers: ['Approach', 'How to prompt', 'When to use'], rows: [
      ['Simple trigger', 'Add "think step by step" to any prompt', 'Most analytical tasks'],
      ['Explicit steps', '"First identify the key factors. Then rank them. Then recommend."', 'Structured decisions'],
      ['Show your work', '"Explain your reasoning before giving your final answer."', 'High-stakes answers'],
      ['Devil\'s advocate', '"What is the strongest argument AGAINST this conclusion?"', 'Checking your own reasoning'],
    ] } },
    { type: 'example', data: { title: 'Before chain-of-thought', content: '"Should I accept this job offer?" → Gets a generic pros/cons list' } },
    { type: 'example', data: { title: 'After chain-of-thought', content: '"Should I accept this job offer? Think through this step by step: first analyze the financial impact, then career development potential, then lifestyle fit, then uncertainty factors. After each section, note what matters most. Then give your weighted recommendation."' } },
    { type: 'callout', data: { variant: 'tip', text: 'For the most critical decisions, ask the AI to reason both for and against before concluding. This surfaces blind spots you might not have considered.' } },
    { type: 'summary-box', data: { title: 'Key points', points: ['Adding "think step by step" is the simplest and most powerful prompt upgrade', 'Chain-of-thought improves accuracy on complex reasoning tasks', 'Use it for decisions, analysis, planning, and complex explanations'] } },
  ],
  relatedLessons: ['few-shot-prompting', 'anatomy-of-a-good-prompt'],
};

const fewShotPrompting: Lesson = {
  id: 'lesson-018',
  slug: 'few-shot-prompting',
  moduleSlug: 'advanced-prompting',
  title: 'Few-Shot Prompting',
  description: 'Show the AI exactly what you want by providing examples — one of the most reliable techniques for consistent output.',
  order: 2,
  difficulty: 'intermediate',
  estimatedMinutes: 11,
  tags: ['few-shot', 'examples', 'consistent-output', 'advanced-prompting'],
  blocks: [
    { type: 'paragraph', data: { text: 'Telling the AI what you want is sometimes less effective than showing it. Few-shot prompting means including 1-3 examples of the input and desired output format in your prompt.' } },
    { type: 'heading', id: 'zero-vs-few', data: { level: 2, text: 'Zero-shot vs Few-shot', anchor: 'zero-vs-few' } },
    { type: 'table', data: { headers: ['Type', 'What it means', 'Best for'], rows: [
      ['Zero-shot', 'No examples — just instructions', 'Simple, common tasks'],
      ['One-shot', '1 example included', 'Unusual format requirements'],
      ['Few-shot', '2-5 examples included', 'Strict formatting, recurring tasks'],
    ] } },
    { type: 'example', data: { title: 'Few-shot prompt', content: 'Classify each customer feedback item as: Positive, Negative, or Neutral.\n\nExamples:\n"The onboarding was smooth and fast." → Positive\n"I waited 3 days for a reply." → Negative\n"I received my order." → Neutral\n\nNow classify these:\n1. "The product works but the instructions were unclear."\n2. "Absolutely love the new dashboard!"\n3. "My invoice was wrong twice in a row."' } },
    { type: 'callout', data: { variant: 'tip', title: 'When to use few-shot', text: 'Use few-shot when you need consistent formatting, a specific tone the AI keeps missing, or when you are processing a batch of similar items.' } },
    { type: 'summary-box', data: { title: 'Key points', points: ['Examples in your prompt are often more powerful than long instructions', 'Use 2-3 examples for recurring tasks to get reliable consistency', 'Few-shot works extremely well for classification, formatting, and tone-matching'] } },
  ],
  relatedLessons: ['chain-of-thought-prompting', 'building-your-first-workflow'],
};

const buildingYourFirstWorkflow: Lesson = {
  id: 'lesson-019',
  slug: 'building-your-first-workflow',
  moduleSlug: 'ai-workflows',
  title: 'Building Your First AI Workflow',
  description: 'Turn a repetitive AI task into a reusable, reliable workflow you can run in minutes.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 15,
  tags: ['workflows', 'automation', 'templates', 'productivity'],
  blocks: [
    { type: 'paragraph', data: { text: 'An AI workflow is a repeatable sequence of prompts and steps that reliably produces the output you need. Building one shifts you from "asking AI random questions" to "using AI as a dependable system".' } },
    { type: 'heading', id: 'anatomy-workflow', data: { level: 2, text: 'Anatomy of an AI workflow', anchor: 'anatomy-workflow' } },
    { type: 'numbered-list', data: { items: [
      'Trigger — what starts the workflow? (a meeting, a document, a request)',
      'Input preparation — what context/data does AI need?',
      'Prompt chain — what prompts run in sequence?',
      'Output format — what does the final result look like?',
      'Review step — what do you check before using the output?',
    ] } },
    { type: 'example', data: { title: 'Example: Meeting notes workflow', content: '1. TRIGGER: After a meeting, open recording transcript\n2. INPUT PREP: Paste transcript into Claude\n3. PROMPT 1: "Summarize this meeting: key decisions, open questions, and action items with owners"\n4. PROMPT 2: "Convert the action items into a table: Owner | Task | Due"\n5. OUTPUT: Formatted meeting notes ready to paste into Notion\n6. REVIEW: Check action item owners are correct' } },
    { type: 'heading', id: 'prompt-chaining', data: { level: 2, text: 'Prompt chaining', anchor: 'prompt-chaining' } },
    { type: 'paragraph', data: { text: 'Prompt chaining means the output of one prompt becomes the input of the next. This lets you break complex tasks into manageable, accurate steps rather than asking AI to do everything at once.' } },
    { type: 'callout', data: { variant: 'tip', text: 'Start by documenting a workflow you already do manually. Then identify which steps AI can handle. Build the prompt chain around those steps.' } },
    { type: 'summary-box', data: { title: 'Workflow building checklist', points: ['Define the trigger and final output before writing a single prompt', 'Break complex tasks into a chain of simpler prompts', 'Include a review step — AI workflows need human checkpoints', 'Save your finished workflow as a template so you can reuse it'] } },
  ],
  relatedLessons: ['few-shot-prompting', 'what-is-ai-automation'],
};

const whatIsAiAutomation: Lesson = {
  id: 'lesson-020',
  slug: 'what-is-ai-automation',
  moduleSlug: 'automation-basics',
  title: 'What Is AI Automation?',
  description: 'Understand what AI automation means, how it differs from traditional automation, and why it is a game-changer for individuals.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['automation', 'workflows', 'productivity', 'no-code'],
  blocks: [
    { type: 'paragraph', data: { text: 'Automation has existed for decades — macros, scheduled tasks, scripts. AI automation is different. It handles unstructured tasks that previously required human judgment: reading emails, interpreting documents, making contextual decisions.' } },
    { type: 'heading', id: 'old-vs-new', data: { level: 2, text: 'Traditional automation vs AI automation', anchor: 'old-vs-new' } },
    { type: 'table', data: { headers: ['Traditional automation', 'AI automation'], rows: [
      ['Rule-based: "if X, do Y"', 'Judgment-based: "understand X, decide what to do"'],
      ['Breaks when input changes format', 'Handles variation and ambiguity'],
      ['Cannot read or understand text', 'Reads, summarizes, classifies text'],
      ['Requires coding or low-code', 'Can be configured in natural language'],
    ] } },
    { type: 'mermaid', data: { id: 'automation-flow', caption: 'A simple AI automation flow: trigger → AI step → action', definition: `flowchart LR
  A[Trigger\\ne.g. new email] --> B[AI Step\\nSummarize & classify]
  B --> C{Category?}
  C -->|Urgent| D[Send Slack alert]
  C -->|Info| E[Log to Notion]
  C -->|Action needed| F[Create task in project tool]` } },
    { type: 'heading', id: 'great-candidates', data: { level: 2, text: 'Great automation candidates', anchor: 'great-candidates' } },
    { type: 'bullet-list', data: { items: ['Summarizing long email threads', 'Classifying incoming feedback or support requests', 'Generating first-draft responses to common questions', 'Converting meeting notes into action items', 'Weekly report compilation from multiple sources', 'Routing documents to the right folder based on content'] } },
    { type: 'callout', data: { variant: 'tip', text: "Start with the task that takes you 20-30 minutes every week and always feels like busywork. That's your first automation target." } },
    { type: 'summary-box', data: { title: 'Takeaway', points: ['AI automation handles tasks that require judgment, not just rules', 'You do not need to code — no-code tools make this accessible', 'Start with high-frequency, low-stakes tasks before automating critical workflows'] } },
  ],
  relatedLessons: ['no-code-automation-tools', 'building-your-first-workflow'],
};

const noCodeAutomationTools: Lesson = {
  id: 'lesson-021',
  slug: 'no-code-automation-tools',
  moduleSlug: 'automation-basics',
  title: 'No-Code AI Automation Tools',
  description: 'A guide to Zapier, Make (Integromat), n8n, and other no-code platforms that let you build AI workflows without writing code.',
  order: 2,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['zapier', 'make', 'n8n', 'no-code', 'automation'],
  blocks: [
    { type: 'paragraph', data: { text: 'You do not need to be a developer to automate work with AI. A new generation of no-code tools has made it possible to build sophisticated AI workflows in a few hours.' } },
    { type: 'comparison-cards', data: { cards: [
      { title: 'Zapier', description: 'The most popular automation platform. Connects 6,000+ apps. Easy drag-and-drop interface. Built-in AI steps for summarization, classification, and extraction.', pros: ['Easiest to learn', 'Most app integrations', 'AI steps built in'], cons: ['Gets expensive at scale', 'Less flexible for complex logic'], tags: ['beginner-friendly', 'paid'] },
      { title: 'Make (Integromat)', description: 'More powerful and visual than Zapier. Better for complex multi-step workflows. More affordable at scale. Steeper learning curve.', pros: ['Visual flow builder', 'More affordable', 'Very flexible'], cons: ['Steeper learning curve', 'Less intuitive for beginners'], tags: ['intermediate', 'freemium'] },
      { title: 'n8n', description: 'Open-source automation tool. Can be self-hosted for privacy. Very powerful and developer-friendly but works for non-coders too with some learning.', pros: ['Free self-hosted', 'Privacy-friendly', 'Very powerful'], cons: ['Setup required for self-hosting', 'Less beginner-friendly'], tags: ['advanced', 'open-source'] },
    ] } },
    { type: 'callout', data: { variant: 'tip', title: 'Start with Zapier', text: 'If you have never built an automation, start with Zapier. Their templates and AI step library make it possible to build your first useful automation in under an hour.' } },
    { type: 'heading', id: 'first-automation', data: { level: 2, text: 'Your first automation in 4 steps', anchor: 'first-automation' } },
    { type: 'numbered-list', data: { items: [
      'Pick a trigger app (e.g. "New email in Gmail with label X")',
      'Add an AI step: "Summarize this email and classify it as: urgent, FYI, or action-needed"',
      'Add an action based on classification (e.g. "Action-needed → create Notion task")',
      'Test with real data, then turn it on',
    ] } },
    { type: 'summary-box', data: { title: 'Key takeaways', points: ['Zapier is the easiest starting point — use their AI templates', 'Make offers more power and lower cost at scale', 'n8n is for privacy-conscious users comfortable with setup', 'Your first automation should be one you already do manually every week'] } },
  ],
  relatedLessons: ['what-is-ai-automation', 'what-are-agents'],
};

// ─── Chunk 4: Agents, Safety, Privacy, RAG, Embeddings ───────────────────────

const whatAreAgents: Lesson = {
  id: 'lesson-022',
  slug: 'what-are-agents',
  moduleSlug: 'agents-introduction',
  title: 'What Are AI Agents?',
  description: 'A plain-language explanation of AI agents — what makes them different from chatbots and when they actually help.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['agents', 'agentic-ai', 'autonomy', 'tool-calling'],
  relatedGlossaryTerms: ['agent', 'tool-calling', 'orchestration'],
  blocks: [
    { type: 'paragraph', data: { text: "A regular chatbot answers questions. An AI agent actually does things. It can search the web, write and run code, send emails, fill in forms, and chain together multi-step tasks — with minimal human input." } },
    { type: 'heading', id: 'chatbot-vs-agent', data: { level: 2, text: 'Chatbot vs Agent', anchor: 'chatbot-vs-agent' } },
    { type: 'table', data: { headers: ['Chatbot', 'Agent'], rows: [
      ['Responds to one message', 'Plans and executes a sequence of steps'],
      ['Produces text only', 'Can use tools (search, code, APIs, files)'],
      ['Waits for your next message', 'Can act autonomously until goal is reached'],
      ['No memory between sessions (typically)', 'May have persistent memory and state'],
      ['You provide all context', 'Agent gathers context itself via tools'],
    ] } },
    { type: 'mermaid', data: { id: 'agent-loop', caption: 'The agent loop: observe, plan, act, observe again', definition: `flowchart TD
  G[Goal given by user] --> O[Observe current state]
  O --> P[Plan next action]
  P --> A[Use a tool\\nsearch / code / API / file]
  A --> E{Goal achieved?}
  E -->|No| O
  E -->|Yes| R[Return result to user]` } },
    { type: 'heading', id: 'agent-examples', data: { level: 2, text: 'Real-world agent examples', anchor: 'agent-examples' } },
    { type: 'bullet-list', data: { items: [
      'Research agent: given a topic, searches 10 sources, synthesizes findings, formats a report',
      'Coding agent (e.g. Cursor, Devin): reads your codebase, writes and tests new features',
      'Personal assistant agent: checks your calendar, drafts emails, schedules meetings',
      'Data agent: pulls data from a spreadsheet, runs analysis, creates a chart',
    ] } },
    { type: 'callout', data: { variant: 'warning', title: 'Agents can make mistakes autonomously', text: 'Because agents act without confirmation at each step, a mistake can compound into multiple unwanted actions. Always set up guardrails and review agent output before it reaches your real systems.' } },
    { type: 'summary-box', data: { title: 'Key concepts', points: ['Agents plan, use tools, and execute steps — chatbots only respond', 'The agent loop: observe → plan → act → check → repeat', 'Agents are powerful but require careful oversight', 'You do not need to code to use most agent-based tools today'] } },
  ],
  relatedLessons: ['how-agents-work', 'what-is-tool-calling'],
};

const howAgentsWork: Lesson = {
  id: 'lesson-023',
  slug: 'how-agents-work',
  moduleSlug: 'agents-introduction',
  title: 'How Agents Work',
  description: 'A deeper look at how AI agents use planning, memory, and tools to complete multi-step tasks.',
  order: 2,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['agents', 'memory', 'planning', 'tools'],
  blocks: [
    { type: 'paragraph', data: { text: 'Under the hood, AI agents combine three capabilities that simple chatbots lack: a planning loop, access to tools, and some form of memory.' } },
    { type: 'key-terms', data: { terms: [
      { term: 'Planning', definition: 'The agent breaks a complex goal into sub-tasks and sequences them logically before acting.' },
      { term: 'Tool use', definition: 'The agent can call external tools: web search, code execution, file access, API calls, database queries.' },
      { term: 'Memory', definition: 'Short-term memory is the context window. Long-term memory is stored externally (vector DB, files) and retrieved when needed.' },
      { term: 'Reflection', definition: 'Some agents evaluate their own output and retry if the result is not satisfactory.' },
    ] } },
    { type: 'heading', id: 'popular-agents', data: { level: 2, text: 'Agents you can use today (no code)', anchor: 'popular-agents' } },
    { type: 'bullet-list', data: { items: [
      'ChatGPT with tools enabled — can search, run code, and analyze files in sequence',
      'Claude Projects — persistent memory and files for ongoing work',
      'Perplexity Deep Research — autonomous multi-step research that cites every source',
      'Notion AI — acts as an agent within your Notion workspace',
      'Microsoft Copilot — agent-like behavior across Office 365 apps',
    ] } },
    { type: 'callout', data: { variant: 'note', title: 'Do I need to use agents right now?', text: 'Not necessarily. For most everyday tasks, a good prompt workflow gets you 90% of the value. Agents add the most value for repetitive multi-step tasks that span multiple tools or data sources.' } },
    { type: 'summary-box', data: { title: 'Agent components', points: ['Planning: break goals into steps', 'Tools: external capabilities the agent can call', 'Memory: context window (short-term) + external store (long-term)', 'Agents are most valuable for multi-step tasks across multiple systems'] } },
  ],
  relatedLessons: ['what-are-agents', 'what-is-tool-calling'],
};

const whatIsToolCalling: Lesson = {
  id: 'lesson-024',
  slug: 'what-is-tool-calling',
  moduleSlug: 'tool-calling-basics',
  title: 'What Is Tool Calling?',
  description: 'Understand how AI agents use external tools — and what skills and plugins add to the picture.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 10,
  tags: ['tool-calling', 'skills', 'plugins', 'function-calling'],
  relatedGlossaryTerms: ['tool-calling', 'plugin', 'agent'],
  blocks: [
    { type: 'paragraph', data: { text: 'By default, an LLM only produces text. Tool calling is the mechanism that lets an AI model reach outside its text generation to interact with the real world.' } },
    { type: 'heading', id: 'how-tool-calling-works', data: { level: 2, text: 'How tool calling works', anchor: 'how-tool-calling-works' } },
    { type: 'numbered-list', data: { items: [
      'The AI receives your message and decides a tool would help',
      'It generates a structured "tool call" — specifying which tool and with what inputs',
      'The tool runs (e.g. web search runs, code executes, API is called)',
      'The tool result is returned to the AI as context',
      'The AI uses the result to continue generating its response',
    ] } },
    { type: 'table', data: { headers: ['Tool type', 'Example', 'What it enables'], rows: [
      ['Web search', 'Bing / Brave Search API', 'Access to current information'],
      ['Code execution', 'Python interpreter', 'Math, data analysis, file manipulation'],
      ['File access', 'Read/write local files', 'Persistent data, document analysis'],
      ['API call', 'Weather, calendar, CRM', 'Real-world data and actions'],
      ['Browser', 'Navigate web pages', 'Interact with any website'],
    ] } },
    { type: 'heading', id: 'skills-vs-tools', data: { level: 2, text: 'Skills vs plugins vs tools', anchor: 'skills-vs-tools' } },
    { type: 'table', data: { headers: ['Term', 'What it means in practice'], rows: [
      ['Tool', 'A specific function an agent can call (search, code, file read)'],
      ['Plugin', 'A packaged integration — e.g. a ChatGPT Plugin adds a new tool set'],
      ['Skill', 'A pre-configured capability an agent can invoke (more common in Microsoft Copilot terminology)'],
      ['MCP Server', 'A protocol for securely exposing a set of tools to an AI agent'],
    ] } },
    { type: 'summary-box', data: { title: 'Key ideas', points: ['Tool calling lets AI reach outside text generation to take real actions', 'Every AI agent is built on tool calling under the hood', 'Skills and plugins are packaged collections of tools', "You use tool calling every time ChatGPT 'searches the web' for you"] } },
  ],
  relatedLessons: ['what-are-agents', 'what-is-mcp'],
};

const aiLimitations: Lesson = {
  id: 'lesson-025',
  slug: 'ai-limitations',
  moduleSlug: 'safety-and-limitations',
  title: 'AI Limitations You Should Know',
  description: 'A comprehensive look at the real limitations of current AI — beyond just hallucinations.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['limitations', 'safety', 'expectations', 'responsible-use'],
  blocks: [
    { type: 'paragraph', data: { text: "Hallucination gets all the attention. But there are several other important limitations that affect how you should use AI tools. Understanding these isn't pessimistic — it makes you a smarter, safer user." } },
    { type: 'table', data: { headers: ['Limitation', 'What it means in practice', 'How to mitigate'], rows: [
      ['Training cutoff', 'AI does not know about events after its training data ends', 'Use tools with web search for recent info'],
      ['No real-time data', 'AI cannot check live prices, weather, current news', 'Use Perplexity or a browsing-enabled tool'],
      ['Context window loss', 'Very long conversations lose early context', 'Summarize and restart for long projects'],
      ['Arithmetic errors', 'LLMs are not calculators — they approximate numbers', 'Use code interpreter or a calculator for maths'],
      ['Inconsistent reasoning', 'Same prompt can yield different answers on different tries', 'Use chain-of-thought, verify important conclusions'],
      ['Bias from training data', 'AI reflects biases present in the text it was trained on', 'Apply critical judgment, especially on social topics'],
      ['No real understanding', 'AI processes patterns, not concepts — it does not truly "understand"', 'Do not assume depth it does not have'],
    ] } },
    { type: 'callout', data: { variant: 'important', title: 'The core mental model', text: 'AI is a pattern-completion engine trained on text. It is extraordinarily useful — but it cannot reason, verify facts, update itself in real-time, or guarantee precision. Use it accordingly.' } },
    { type: 'summary-box', data: { title: 'Safe use rules', points: ['Verify before acting on specific facts, numbers, or citations', 'Use web-enabled tools for current information', 'Never use AI alone for high-stakes medical, legal, or financial decisions', 'Apply your domain expertise as the final filter on all AI output'] } },
  ],
  relatedLessons: ['critical-evaluation', 'ai-hallucination-deep-dive'],
};

const criticalEvaluation: Lesson = {
  id: 'lesson-026',
  slug: 'critical-evaluation',
  moduleSlug: 'safety-and-limitations',
  title: 'Critical Evaluation of AI Output',
  description: 'Build the habit of evaluating AI responses critically — the most important skill for safe and effective AI use.',
  order: 2,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['evaluation', 'critical-thinking', 'verification', 'habits'],
  blocks: [
    { type: 'paragraph', data: { text: 'The most dangerous AI user is one who never questions the output. The most effective AI user has a fast, reliable habit for deciding when to trust, verify, or discard an AI response.' } },
    { type: 'heading', id: 'trust-levels', data: { level: 2, text: 'A trust tiering system', anchor: 'trust-levels' } },
    { type: 'table', data: { headers: ['Task type', 'Trust level', 'Action'], rows: [
      ['Brainstorming, creative ideas', 'Use freely', 'No verification needed'],
      ['First draft of writing', 'Use with review', 'Read and edit before sending'],
      ['Factual summary of a topic', 'Verify key claims', 'Check 1-2 specific facts'],
      ['Specific numbers, dates, citations', 'Verify before using', 'Always check primary source'],
      ['Medical, legal, financial advice', 'Do not rely on AI alone', 'Consult qualified human professional'],
    ] } },
    { type: 'heading', id: 'five-questions', data: { level: 2, text: 'Five questions to ask every AI response', anchor: 'five-questions' } },
    { type: 'numbered-list', data: { items: [
      'Did it actually answer the question I asked?',
      'Are there any specific facts I should verify before acting on this?',
      'Is the reasoning internally consistent?',
      'Is this missing something obvious my knowledge tells me should be here?',
      'Would a qualified person in this domain agree with this conclusion?',
    ] } },
    { type: 'callout', data: { variant: 'tip', text: 'Use this rule of thumb: the more consequential the action downstream, the more verification you need upstream. Adjust your verification effort to the stakes.' } },
    { type: 'summary-box', data: { title: 'Build this habit', points: ['Not every AI output needs verification — match effort to stakes', 'Specific facts (numbers, citations, names) always need a second check', 'Your domain expertise is a signal that AI output needs scrutiny', 'Treat AI as a smart first draft, not a final answer'] } },
  ],
  relatedLessons: ['evaluating-ai-output', 'protecting-your-data'],
};

const protectingYourData: Lesson = {
  id: 'lesson-027',
  slug: 'protecting-your-data',
  moduleSlug: 'privacy-and-data',
  title: 'Protecting Your Data When Using AI',
  description: 'Know exactly what AI tools collect, what you should never share, and how to use AI safely with sensitive information.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 12,
  tags: ['privacy', 'data', 'security', 'enterprise', 'sensitive'],
  relatedGlossaryTerms: ['training-data', 'prompt'],
  blocks: [
    { type: 'paragraph', data: { text: 'Using AI tools freely without thinking about data is one of the biggest mistakes people make. Here is a clear picture of the risks and a practical policy you can apply immediately.' } },
    { type: 'heading', id: 'what-is-collected', data: { level: 2, text: 'What AI tools collect', anchor: 'what-is-collected' } },
    { type: 'table', data: { headers: ['Tool', 'Default data use', 'How to opt out'], rows: [
      ['ChatGPT (free)', 'Conversations may be used for training', 'Settings → Data controls → Disable training'],
      ['ChatGPT (Plus/Teams)', 'Training off by default on Plus', 'Verify in settings'],
      ['Claude', 'Conversations may be reviewed for safety', 'Anthropic privacy settings'],
      ['Gemini', 'Conversations used to improve Google products', 'Activity controls in Google account'],
      ['Perplexity', 'Queries logged, settings vary by account', 'Review privacy settings'],
    ] } },
    { type: 'callout', data: { variant: 'warning', title: 'Never paste these into a public AI chatbot', text: 'Passwords or API keys | Social Security numbers | Patient health data | Confidential business strategy | Client personal information | Financial data with account numbers' } },
    { type: 'heading', id: 'safe-options', data: { level: 2, text: 'Safer options for sensitive work', anchor: 'safe-options' } },
    { type: 'bullet-list', data: { items: [
      'Enterprise tiers of ChatGPT, Claude, and Gemini — data is not used for training and is isolated',
      'Microsoft 365 Copilot — your data stays within your Microsoft tenant',
      'Local AI models (Ollama, LM Studio) — nothing leaves your machine',
      'Anonymize data before pasting — remove names, account numbers, and identifying details',
    ] } },
    { type: 'summary-box', data: { title: 'Personal data policy', points: ['Check privacy settings on every AI tool you use regularly', 'Never paste PII, credentials, or confidential business data into public chatbots', 'For business-sensitive work, use enterprise or local AI options', 'When in doubt, anonymize data before using AI on it'] } },
  ],
  relatedLessons: ['critical-evaluation', 'local-ai-options'],
};

const ragExplained: Lesson = {
  id: 'lesson-028',
  slug: 'rag-explained',
  moduleSlug: 'rag-and-memory',
  title: 'RAG Explained Simply',
  description: 'Understand what Retrieval-Augmented Generation (RAG) is, why it matters, and how it makes AI much more useful for personal and business knowledge.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 16,
  tags: ['rag', 'retrieval', 'knowledge-base', 'grounding'],
  relatedGlossaryTerms: ['rag', 'embedding', 'vector-database', 'hallucination'],
  blocks: [
    { type: 'paragraph', data: { text: 'When you ask ChatGPT a question, it answers based only on what it learned during training. RAG changes this — it lets AI search your own documents before answering, grounding responses in your actual data.' } },
    { type: 'heading', id: 'rag-vs-base', data: { level: 2, text: 'Without RAG vs With RAG', anchor: 'rag-vs-base' } },
    { type: 'comparison-cards', data: { cards: [
      { title: 'Without RAG', description: 'AI answers based only on training data. Knowledge has a cutoff date. Cannot access your internal documents. More likely to hallucinate on specific questions.', cons: ['No access to your data', 'Hallucination risk on specific topics', 'Training data cutoff'] },
      { title: 'With RAG', description: 'AI first searches your knowledge base for relevant documents, then answers using those retrieved documents as context. Answers are grounded in your real data.', pros: ['Answers sourced from your actual documents', 'Much lower hallucination rate on specific topics', 'Always up-to-date with your knowledge base'] },
    ] } },
    { type: 'mermaid', data: { id: 'rag-flow', caption: 'How RAG works: retrieve first, then generate', definition: `sequenceDiagram
  participant U as User
  participant R as Retriever
  participant KB as Knowledge Base
  participant LLM as Language Model

  U->>R: "What is our refund policy?"
  R->>KB: Search for relevant docs
  KB->>R: Return top 3 matching passages
  R->>LLM: Question + retrieved passages
  LLM->>U: Answer grounded in real policy doc` } },
    { type: 'heading', id: 'rag-in-practice', data: { level: 2, text: 'RAG in tools you might already use', anchor: 'rag-in-practice' } },
    { type: 'bullet-list', data: { items: [
      'Notion AI — asks questions about your Notion workspace documents',
      'Perplexity — retrieves web pages, then generates a cited answer',
      'Microsoft 365 Copilot — searches across your email, files, and Teams',
      'Claude Projects — chat with your uploaded document collections',
      'Custom chatbots (e.g., a company FAQ bot) — almost always RAG-based',
    ] } },
    { type: 'callout', data: { variant: 'note', title: 'When does RAG matter to you?', text: "RAG matters most when you want to ask AI about your own documents, data, or knowledge base. If you're just asking general questions, RAG is less relevant." } },
    { type: 'summary-box', data: { title: 'RAG in one sentence', points: ['RAG = retrieve first, then generate — grounding AI answers in real documents', 'It dramatically reduces hallucination on specific knowledge domains', 'Tools like Perplexity, Notion AI, and Microsoft 365 Copilot all use RAG', 'It is the technology behind "talking to your documents" workflows'] } },
  ],
  relatedLessons: ['embeddings-simply', 'protectingYourData'],
};

// ─── Chunk 5: Advanced Systems + Capstone ────────────────────────────────────

const embeddingsSimply: Lesson = {
  id: 'lesson-029',
  slug: 'embeddings-simply',
  moduleSlug: 'embeddings-and-vectors',
  title: 'Embeddings Simply Explained',
  description: 'What embeddings are, why they are foundational to modern AI, and how they make semantic search feel like magic.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['embeddings', 'vectors', 'semantic-search', 'meaning'],
  relatedGlossaryTerms: ['embedding', 'vector-database', 'rag'],
  blocks: [
    { type: 'paragraph', data: { text: 'How does a search engine know that "car" and "automobile" are the same thing? Or that "happy" and "joyful" are more similar than "happy" and "sad"? The answer is embeddings.' } },
    { type: 'heading', id: 'what-is-embedding', data: { level: 2, text: 'What is an embedding?', anchor: 'what-is-embedding' } },
    { type: 'paragraph', data: { text: 'An embedding is a list of hundreds of numbers (a vector) that represents the meaning of a piece of text. The amazing property: texts with similar meanings will have similar (close together) vectors. This turns meaning into math.' } },
    { type: 'callout', data: { variant: 'info', title: 'The map analogy', text: 'Imagine placing every word on a giant map. Words with similar meanings are placed near each other. "King" is near "queen" is near "monarch". "Happy" is near "joyful" but far from "sad". An embedding is the map coordinate for a piece of text.' } },
    { type: 'heading', id: 'why-it-matters', data: { level: 2, text: 'Why embeddings matter for you', anchor: 'why-it-matters' } },
    { type: 'bullet-list', data: { items: [
      'Semantic search — searching by meaning instead of exact keywords',
      'RAG systems — finding the right document to feed to an AI before it answers',
      'Recommendations — finding similar items without rule-based matching',
      'Duplicate detection — finding near-identical content even with different wording',
    ] } },
    { type: 'example', data: { title: 'Semantic search vs keyword search', content: 'Keyword search: "affordable car" finds documents containing those exact words.\nSemantic search with embeddings: "affordable car" also finds documents about "cheap vehicles", "budget automobiles", and "low-cost transportation" — because their meaning-vectors are close.' } },
    { type: 'heading', id: 'vector-database', data: { level: 2, text: 'Vector databases', anchor: 'vector-database' } },
    { type: 'paragraph', data: { text: 'A vector database stores embeddings and lets you find the most similar ones quickly — even across millions of documents. This is the engine that powers RAG. Tools like Pinecone, Weaviate, and Qdrant are purpose-built for this.' } },
    { type: 'summary-box', data: { title: 'Key ideas', points: ['Embeddings convert meaning into numbers (vectors)', 'Similar meaning = similar vectors = close on the meaning map', 'Semantic search uses embeddings to find relevant content by meaning', 'Vector databases store and search embeddings — the engine behind RAG'] } },
  ],
  relatedLessons: ['rag-explained', 'what-is-mcp'],
};

const whatIsMcp: Lesson = {
  id: 'lesson-030',
  slug: 'what-is-mcp',
  moduleSlug: 'mcp-and-skills',
  title: 'What Is MCP?',
  description: 'Understand the Model Context Protocol — the open standard that connects AI models to tools, databases, and services.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['mcp', 'protocol', 'tool-calling', 'integration'],
  relatedGlossaryTerms: ['mcp', 'tool-calling', 'agent'],
  blocks: [
    { type: 'paragraph', data: { text: 'MCP — the Model Context Protocol — is an open standard introduced by Anthropic in 2024 that is quickly becoming the universal language for connecting AI models to external tools and data sources.' } },
    { type: 'heading', id: 'why-mcp', data: { level: 2, text: 'Why MCP was created', anchor: 'why-mcp' } },
    { type: 'paragraph', data: { text: 'Before MCP, every AI tool had its own custom integration with every service. If you wanted your AI to access your database, your calendar, and your code editor, each required a custom one-off implementation. MCP creates a standard API that works once and works everywhere.' } },
    { type: 'callout', data: { variant: 'info', title: 'The USB analogy', text: 'Before USB, every device needed a different, incompatible cable. USB created one standard plug that works everywhere. MCP does the same for AI tools → external tools.' } },
    { type: 'mermaid', data: { id: 'mcp-diagram', caption: 'MCP: a standard protocol connecting AI models to tools via MCP Servers', definition: `flowchart LR
  A[AI Model\\ne.g. Claude] -->|MCP protocol| B[MCP Server A\\nFile system]
  A -->|MCP protocol| C[MCP Server B\\nGitHub]
  A -->|MCP protocol| D[MCP Server C\\nDatabase]
  A -->|MCP protocol| E[MCP Server D\\nCalendar]` } },
    { type: 'heading', id: 'mcp-today', data: { level: 2, text: 'MCP today', anchor: 'mcp-today' } },
    { type: 'bullet-list', data: { items: [
      'Hundreds of MCP servers now exist for tools like GitHub, Slack, Notion, Postgres, filesystem access, and more',
      'Claude Desktop supports MCP natively — you can connect it to your local files, databases, and apps',
      'Many AI coding tools (Cursor, Cline, Windsurf) use MCP to give agents access to development tools',
      'MCP is now supported by OpenAI and other major providers — it is becoming the industry standard',
    ] } },
    { type: 'callout', data: { variant: 'note', title: 'Do I need to understand MCP deeply?', text: 'Not right now. What matters: MCP is why AI tools can increasingly connect to everything else you use. As more tools adopt it, AI agents will become dramatically more useful for everyday workflows.' } },
    { type: 'summary-box', data: { title: 'MCP in brief', points: ['MCP = a standard protocol for AI models to connect to external tools', 'Created by Anthropic, now adopted industry-wide', 'Like USB for AI integrations — build once, works everywhere', 'The foundation for increasingly capable AI agents in your workflow'] } },
  ],
  relatedLessons: ['ai-skills-explained', 'what-are-agents'],
};

const aiSkillsExplained: Lesson = {
  id: 'lesson-031',
  slug: 'ai-skills-explained',
  moduleSlug: 'mcp-and-skills',
  title: 'AI Skills and Plugins Explained',
  description: 'Understand what skills and plugins are, how they differ from tools, and what they mean for everyday AI users.',
  order: 2,
  difficulty: 'intermediate',
  estimatedMinutes: 10,
  tags: ['skills', 'plugins', 'tool-calling', 'copilot'],
  blocks: [
    { type: 'paragraph', data: { text: 'The terminology around AI extensibility is confusing — skills, plugins, tools, and functions are often used interchangeably. Here is a clear breakdown.' } },
    { type: 'table', data: { headers: ['Term', 'Platform', 'What it means'], rows: [
      ['Plugin', 'ChatGPT (legacy), OpenAI', 'A packaged integration that adds a new capability to ChatGPT'],
      ['Tool', 'OpenAI API, general', 'A function an AI can call — web search, code execution, file access'],
      ['Skill', 'Microsoft Copilot, AutoGen', 'A named capability the agent can invoke — maps to a tool or set of tools'],
      ['Action', 'GPTs, Copilot Studio', 'An API call the AI can make to an external service'],
      ['MCP Server', 'Anthropic Claude, industry', 'A standardized server exposing tools via the MCP protocol'],
    ] } },
    { type: 'callout', data: { variant: 'info', text: 'These terms all describe the same fundamental concept: giving an AI model a way to call an external capability. The terminology varies by platform.' } },
    { type: 'heading', id: 'practical-view', data: { level: 2, text: 'What this means for you as a user', anchor: 'practical-view' } },
    { type: 'bullet-list', data: { items: [
      'When ChatGPT "searches the web" — it is using a tool/skill',
      'When Microsoft 365 Copilot reads your email — it is using a skill',
      'When Claude Desktop accesses your local files — it is using an MCP server',
      'When a GPT has custom actions — it is using function calling under the hood',
    ] } },
    { type: 'summary-box', data: { title: 'Bottom line', points: ['Different words, same concept: giving AI access to external capabilities', 'As a user, what matters is: what can this tool do, and is it safe?', 'MCP is becoming the standard way to build these integrations', 'The richer the tool ecosystem an AI has, the more useful it becomes as an agent'] } },
  ],
  relatedLessons: ['what-is-mcp', 'what-are-agents'],
};

const imagesAndAi: Lesson = {
  id: 'lesson-032',
  slug: 'images-and-ai',
  moduleSlug: 'multimodal-ai',
  title: 'Images and AI',
  description: 'How AI tools work with images — generation, analysis, editing, and practical use cases.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 12,
  tags: ['images', 'multimodal', 'dall-e', 'midjourney', 'vision'],
  blocks: [
    { type: 'paragraph', data: { text: "AI is no longer text-only. Today's AI tools can see images, generate them, describe them, and edit them. Here's a practical guide to what works and when." } },
    { type: 'heading', id: 'image-generation', data: { level: 2, text: 'Image generation', anchor: 'image-generation' } },
    { type: 'comparison-cards', data: { cards: [
      { title: 'DALL-E 3 (OpenAI)', description: 'Built into ChatGPT (paid). Best for quick practical images — social media, presentations, mockups. Excellent at following detailed text descriptions.', tags: ['paid', 'integrated'] },
      { title: 'Midjourney', description: 'The creative standard for artistic and aesthetic quality. Best for beautiful or stylized imagery. Runs via Discord. Requires a paid subscription.', tags: ['paid', 'artistic'] },
      { title: 'Adobe Firefly', description: 'Commercially safe image generation integrated into Adobe products. Best for professional design workflows with copyright-clear images.', tags: ['paid', 'commercial-safe'] },
      { title: 'Flux / SDXL (open)', description: 'Open-source image models you can run locally or via third-party apps. Free and highly customizable but require more setup.', tags: ['free', 'open-source'] },
    ] } },
    { type: 'heading', id: 'image-analysis', data: { level: 2, text: 'Image analysis (vision)', anchor: 'image-analysis' } },
    { type: 'bullet-list', data: { title: 'What AI can do with images you upload:', items: [
      'Describe and caption what is in a photo',
      'Extract text from screenshots, photos, and documents (OCR)',
      'Analyze charts, graphs, and diagrams',
      'Identify objects, people, logos, and scenes',
      'Answer questions about an image',
      'Compare two images and describe differences',
    ] } },
    { type: 'callout', data: { variant: 'tip', text: 'Upload a screenshot of a complex chart to Claude or ChatGPT and ask "summarize the key trends in this data." It saves minutes of manual reading.' } },
    { type: 'summary-box', data: { title: 'Image AI quick guide', points: ['Generation: DALL-E (quick/integrated), Midjourney (quality), Firefly (commercial)', 'Analysis: ChatGPT and Claude both support vision — upload any image and ask questions', 'OCR: AI can read text from photos and screenshots reliably', 'Always check generated images for artifacts, extra fingers, wrong text'] } },
  ],
  relatedLessons: ['local-ai-options', 'model-comparison'],
};

const localAiOptions: Lesson = {
  id: 'lesson-033',
  slug: 'local-ai-options',
  moduleSlug: 'local-vs-cloud-ai',
  title: 'Local AI Options',
  description: 'When and how to run AI models on your own computer — and whether it makes sense for you.',
  order: 1,
  difficulty: 'intermediate',
  estimatedMinutes: 14,
  tags: ['local-ai', 'ollama', 'privacy', 'open-weights', 'offline'],
  relatedGlossaryTerms: ['local-model', 'open-weights'],
  blocks: [
    { type: 'paragraph', data: { text: 'Most people use cloud AI tools — ChatGPT, Claude, Gemini. But a growing number of users run AI models locally on their own machines. Here is an honest look at when that makes sense.' } },
    { type: 'heading', id: 'why-local', data: { level: 2, text: 'Reasons to use local AI', anchor: 'why-local' } },
    { type: 'bullet-list', data: { items: [
      'Complete data privacy — nothing leaves your machine',
      'Works offline — no internet required',
      'No usage limits or subscription cost',
      'Ability to customize and fine-tune models',
      'Consistent responses (no model updates without your consent)',
    ] } },
    { type: 'heading', id: 'trade-offs', data: { level: 2, text: 'The trade-offs', anchor: 'trade-offs' } },
    { type: 'table', data: { headers: ['Aspect', 'Local AI', 'Cloud AI'], rows: [
      ['Privacy', 'Complete — data stays on device', 'Depends on provider policy'],
      ['Capability', 'Good but behind frontier models', 'Access to the best models'],
      ['Speed', 'Depends on your hardware', 'Very fast on good internet'],
      ['Cost', 'Free after hardware', 'Subscription or pay-per-use'],
      ['Setup', 'Requires some setup', 'Instant in browser'],
      ['Internet', 'Works offline', 'Requires internet'],
    ] } },
    { type: 'heading', id: 'tools', data: { level: 2, text: 'Tools for running local AI', anchor: 'tools' } },
    { type: 'bullet-list', data: { items: [
      'Ollama — the easiest way to run open models locally (Mac, Linux, Windows). Free. Runs Llama3, Mistral, Gemma, and more in one command.',
      'LM Studio — polished desktop app for downloading and chatting with local models. Great for beginners to local AI.',
      'Jan.ai — open-source ChatGPT-like interface for local models.',
      "Open WebUI — a self-hosted web dashboard that connects to Ollama. Looks and feels like ChatGPT but runs on your machine.",
    ] } },
    { type: 'callout', data: { variant: 'note', title: 'Hardware requirements', text: 'Small models (1B-7B parameters) run acceptably on most modern MacBooks and mid-range PCs with 16GB RAM. Larger models (13B-70B) need 32-64GB RAM or a gaming GPU.' } },
    { type: 'summary-box', data: { title: 'Is local AI right for you?', points: ['Yes, if: privacy is critical and you have a capable machine', 'Yes, if: you work offline frequently', "No, if: you need the best model quality and cloud privacy policies work for you", 'Start with: Ollama + LM Studio — takes 10 minutes to set up'] } },
  ],
  relatedLessons: ['protecting-your-data', 'building-your-ai-stack'],
};

const buildingYourAiStack: Lesson = {
  id: 'lesson-034',
  slug: 'building-your-ai-stack',
  moduleSlug: 'personal-ai-stack',
  title: 'Building Your Personal AI Stack',
  description: 'Design a set of AI tools and workflows tailored to your work, life, and goals — without falling into tool overload.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 14,
  tags: ['personal-toolkit', 'tool-selection', 'workflow', 'productivity'],
  blocks: [
    { type: 'paragraph', data: { text: "By this point in the course you've encountered many AI tools. The challenge now is deciding which ones to actually use, together, in a coherent way. This is your personal AI stack." } },
    { type: 'heading', id: 'stack-framework', data: { level: 2, text: 'A framework for building your stack', anchor: 'stack-framework' } },
    { type: 'numbered-list', data: { items: [
      'List your top 5 most time-consuming, repeated tasks at work',
      'Identify which tasks involve writing, research, analysis, or coordination',
      'Match each task category to the best AI tool for it',
      'Commit to 2-3 tools maximum for 90 days — resist adding more',
      'Review and adjust after 90 days based on what you actually used',
    ] } },
    { type: 'heading', id: 'sample-stacks', data: { level: 2, text: 'Sample stacks by role', anchor: 'sample-stacks' } },
    { type: 'table', data: { headers: ['Role', 'Core tools', 'Use them for'], rows: [
      ['Knowledge worker', 'Claude + Perplexity', 'Writing/editing + research'],
      ['Product manager', 'ChatGPT + Notion AI', 'Strategy docs + workspace search'],
      ['Developer', 'Cursor/Copilot + Claude', 'Code + documentation'],
      ['Marketer', 'ChatGPT + Canva AI', 'Copy + visuals'],
      ['Student', 'Claude + Perplexity', 'Study notes + research'],
    ] } },
    { type: 'callout', data: { variant: 'tip', title: 'Avoid tool overload', text: 'The biggest mistake is collecting tools instead of building habits. Two tools you use daily are worth more than twenty you have accounts for.' } },
    { type: 'checklist', data: { title: 'Stack review checklist (do quarterly)', items: [
      { text: 'Am I using each tool at least once a week?' },
      { text: 'Is there a tool I could replace with one I already have?' },
      { text: 'Have any of my tools improved enough to reconsider my setup?' },
      { text: 'Am I paying for tools I no longer use?' },
    ] } },
    { type: 'summary-box', data: { title: 'Your AI stack principles', points: ['Start minimal: 2-3 tools max for 90 days', 'Choose by task, not by news coverage', 'Depth beats breadth — master one tool before adding another', 'Review quarterly and cut what you do not use'] } },
  ],
  relatedLessons: ['staying-current-in-ai', 'choosing-the-right-tool'],
};

const stayingCurrentInAi: Lesson = {
  id: 'lesson-035',
  slug: 'staying-current-in-ai',
  moduleSlug: 'staying-current',
  title: 'Staying Current with AI',
  description: 'How to stay informed about AI without feeling overwhelmed — and build a sustainable learning habit.',
  order: 1,
  difficulty: 'beginner',
  estimatedMinutes: 10,
  tags: ['learning-mindset', 'news', 'resources', 'habits'],
  blocks: [
    { type: 'paragraph', data: { text: "AI moves fast. New models launch monthly. Capabilities change rapidly. The worst response to this is exhausting yourself by trying to follow everything. The best response is a sustainable system." } },
    { type: 'heading', id: 'filters', data: { level: 2, text: 'Signal vs noise in AI news', anchor: 'filters' } },
    { type: 'table', data: { headers: ['Signal (worth your time)', 'Noise (safe to skip)'], rows: [
      ['New capabilities in tools you already use', 'Daily AI news aggregators with no filter'],
      ['New models from major labs (OpenAI, Anthropic, Google, Meta)', 'Most Twitter/X AI hype threads'],
      ['New tool categories that change workflows', 'Benchmarks and leaderboard posts'],
      ['Privacy and policy changes in tools you trust with data', '"AGI is 2 years away" speculation'],
    ] } },
    { type: 'heading', id: 'sources', data: { level: 2, text: 'Recommended sources', anchor: 'sources' } },
    { type: 'bullet-list', data: { items: [
      'The Rundown AI (newsletter) — curated daily AI news, concise',
      'TLDR AI (newsletter) — fast, brief, technical but readable',
      'Simon Willison\'s blog — thoughtful, in-depth AI exploration',
      'AI Explained (YouTube) — accessible breakdowns of new developments',
      'Official model announcement pages from OpenAI, Anthropic, Google',
    ] } },
    { type: 'heading', id: 'habit', data: { level: 2, text: 'A sustainable learning habit', anchor: 'habit' } },
    { type: 'numbered-list', data: { items: [
      '15 minutes per week: scan one newsletter — note anything relevant to your work',
      'Monthly: try one new feature in a tool you already use',
      'Quarterly: spend 2 hours testing any genuinely new capability category',
      'Annually: revisit your AI stack and strategy — has anything fundamentally changed?',
    ] } },
    { type: 'callout', data: { variant: 'tip', title: 'The confident learner mindset', text: "You do not need to know everything. You need to know enough to recognize when something new is relevant to you — and have the skills to learn it quickly. Those skills are exactly what this course built." } },
    { type: 'summary-box', data: { title: 'Staying current without overwhelm', points: ['Filter ruthlessly: follow capabilities in tools you use, not hype', '2 newsletters + 1 YouTube channel is enough for most people', 'Build a 15-minute weekly review habit — scalable and sustainable', 'Your foundation from this course gives you context to evaluate anything new quickly'] } },
  ],
  relatedLessons: ['building-your-ai-stack', 'choosing-the-right-tool'],
};

// ─── Lesson registry ─────────────────────────────────────────────────────────

export const lessons: Lesson[] = [
  aiVsMlVsGenerativeAi,
  howLlmsWorkSimply,
  whatAiCanAndCannotDo,
  anatomyOfAGoodPrompt,
  aiInEverydayLife,
  chatbotLandscape,
  choosingTheRightTool,
  promptPatterns,
  commonPromptingMistakes,
  tokensExplained,
  contextWindowDeepDive,
  aiHallucinationDeepDive,
  evaluatingAiOutput,
  chatgptGuide,
  modelComparison,
  aiForResearch,
  chainOfThoughtPrompting,
  fewShotPrompting,
  buildingYourFirstWorkflow,
  whatIsAiAutomation,
  noCodeAutomationTools,
  whatAreAgents,
  howAgentsWork,
  whatIsToolCalling,
  aiLimitations,
  criticalEvaluation,
  protectingYourData,
  ragExplained,
  embeddingsSimply,
  whatIsMcp,
  aiSkillsExplained,
  imagesAndAi,
  localAiOptions,
  buildingYourAiStack,
  stayingCurrentInAi,
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
