import type { GlossaryTerm } from '@/types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'term-001',
    slug: 'artificial-intelligence',
    term: 'Artificial Intelligence (AI)',
    shortDefinition:
      'The broad field of making computers perform tasks that typically require human intelligence.',
    fullDefinition:
      'Artificial Intelligence is the simulation of human intelligence processes by computer systems. It encompasses a wide range of capabilities including learning, reasoning, problem-solving, perception, and language understanding. The term is often used loosely to describe any sufficiently sophisticated automated system.',
    category: 'core-concepts',
    difficulty: 'beginner',
    relatedTerms: ['machine-learning', 'large-language-model', 'generative-ai'],
    learnMoreSlug: 'ai-vs-ml-vs-generative-ai',
    examples: [
      'Spam filters that learn to identify unwanted email',
      'Voice assistants like Siri or Alexa',
      'Recommendation systems on Netflix or Spotify',
    ],
    alsoKnownAs: ['AI'],
  },
  {
    id: 'term-002',
    slug: 'machine-learning',
    term: 'Machine Learning',
    shortDefinition:
      'A type of AI where systems learn from data examples rather than explicit rules.',
    fullDefinition:
      'Machine learning is a subset of AI where systems improve their performance on tasks by learning from data, without being explicitly programmed with the rules. The model finds patterns in training data and uses those patterns to make predictions or decisions on new data.',
    category: 'models-and-training',
    difficulty: 'beginner',
    relatedTerms: ['artificial-intelligence', 'large-language-model', 'neural-network'],
    learnMoreSlug: 'ai-vs-ml-vs-generative-ai',
    examples: [
      'Image recognition that learns to identify cats from thousands of cat photos',
      'Fraud detection that learns patterns of fraudulent transactions',
    ],
    alsoKnownAs: ['ML'],
  },
  {
    id: 'term-003',
    slug: 'large-language-model',
    term: 'Large Language Model',
    shortDefinition:
      'An AI model trained on massive amounts of text that can understand and generate human language.',
    fullDefinition:
      'A large language model (LLM) is a type of AI model trained on enormous datasets of text (billions of words) using a neural network architecture called a transformer. LLMs can generate coherent text, answer questions, summarize content, write code, and perform many language tasks. Examples include GPT-4, Claude, Gemini, and Llama.',
    category: 'models-and-training',
    difficulty: 'beginner',
    relatedTerms: ['artificial-intelligence', 'token', 'transformer', 'generative-ai', 'hallucination'],
    learnMoreSlug: 'how-llms-work-simply',
    examples: ['ChatGPT is powered by GPT-4', 'Claude by Anthropic', 'Gemini by Google'],
    alsoKnownAs: ['LLM', 'Foundation Model', 'Language Model'],
  },
  {
    id: 'term-004',
    slug: 'prompt',
    term: 'Prompt',
    shortDefinition: 'The text input you give to an AI model to get a response.',
    fullDefinition:
      'A prompt is the instruction, question, or context you provide to an AI model. The quality of your prompt directly affects the quality of the AI\'s output. A well-crafted prompt includes context, a clear task, and optionally a desired format and persona.',
    category: 'prompting',
    difficulty: 'beginner',
    relatedTerms: ['system-prompt', 'context-window', 'few-shot-prompting'],
    learnMoreSlug: 'anatomy-of-a-good-prompt',
    examples: [
      '"Summarize this article in 3 bullet points"',
      '"Act as a career coach and help me rewrite my LinkedIn bio"',
    ],
  },
  {
    id: 'term-005',
    slug: 'hallucination',
    term: 'Hallucination',
    shortDefinition:
      'When an AI confidently generates incorrect or fabricated information.',
    fullDefinition:
      'Hallucination occurs when an AI model generates text that sounds plausible but is factually wrong or completely invented. This happens because LLMs predict the next most probable token — they have no built-in fact-checking mechanism. Hallucinations can be subtle (slightly wrong dates) or dramatic (entirely fabricated citations).',
    category: 'core-concepts',
    difficulty: 'beginner',
    relatedTerms: ['large-language-model', 'context-window', 'rag'],
    learnMoreSlug: 'how-llms-work-simply',
    examples: [
      'Confidently citing a paper that doesn\'t exist',
      'Inventing biographical details about a real person',
      'Getting a historical date slightly wrong with no indication of uncertainty',
    ],
    alsoKnownAs: ['Confabulation', 'AI Confabulation'],
  },
  {
    id: 'term-006',
    slug: 'token',
    term: 'Token',
    shortDefinition:
      'The basic unit of text that AI models process — roughly 3-4 characters or 3/4 of a word.',
    fullDefinition:
      'Tokens are the chunks of text that LLMs work with. Text is broken into tokens before being fed into the model, and the model generates tokens one at a time. Tokens can be words, parts of words, characters, or punctuation. Approximately 1,000 tokens equals about 750 English words.',
    category: 'models-and-training',
    difficulty: 'beginner',
    relatedTerms: ['large-language-model', 'context-window'],
    learnMoreSlug: 'how-llms-work-simply',
    examples: [
      '"ChatGPT" is 1 token',
      '"Unbelievable" might be 2-3 tokens',
      'Most models allow 8,000 to 128,000 tokens of context',
    ],
  },
  {
    id: 'term-007',
    slug: 'rag',
    term: 'RAG (Retrieval-Augmented Generation)',
    shortDefinition:
      'A technique where AI retrieves relevant documents before generating a response, grounding answers in real data.',
    fullDefinition:
      'Retrieval-Augmented Generation (RAG) is an architecture that combines a retrieval system (like a vector database search) with a generative AI model. When you ask a question, the system first retrieves relevant documents from a knowledge base, then feeds those documents to the LLM as context. This significantly reduces hallucinations and allows AI to answer questions about private or up-to-date information.',
    category: 'rag-and-memory',
    difficulty: 'intermediate',
    relatedTerms: ['embedding', 'vector-database', 'large-language-model', 'context-window'],
    examples: [
      'Asking your company AI bot a question — it searches internal docs first, then answers',
      'A customer support bot that retrieves product manuals before responding',
    ],
    alsoKnownAs: ['Retrieval-Augmented Generation'],
  },
  {
    id: 'term-008',
    slug: 'embedding',
    term: 'Embedding',
    shortDefinition:
      'A numerical representation of text that captures its meaning — used to find semantically similar content.',
    fullDefinition:
      'An embedding is a list of numbers (a vector) that represents the meaning of a piece of text. Similar texts will have similar (close together) vectors. Embeddings are used in search, recommendations, and RAG systems to find relevant content based on meaning rather than exact keyword matching.',
    category: 'architecture',
    difficulty: 'intermediate',
    relatedTerms: ['rag', 'vector-database', 'semantic-search'],
    examples: [
      '"cat" and "kitten" will have similar embeddings',
      'A question embedding is compared against document embeddings to find relevant passages',
    ],
    alsoKnownAs: ['Vector Embedding', 'Text Embedding'],
  },
  {
    id: 'term-009',
    slug: 'generative-ai',
    term: 'Generative AI',
    shortDefinition:
      'AI systems that can create new content — text, images, code, audio, video.',
    fullDefinition:
      'Generative AI refers to AI systems trained to produce new content that didn\'t exist before, based on patterns learned from large datasets. It is a subset of machine learning that uses deep neural networks. The most well-known generative AI systems today are large language models (text), diffusion models (images), and video generation models.',
    category: 'core-concepts',
    difficulty: 'beginner',
    relatedTerms: ['large-language-model', 'machine-learning', 'artificial-intelligence'],
    learnMoreSlug: 'ai-vs-ml-vs-generative-ai',
    examples: [
      'ChatGPT generating a cover letter',
      'Midjourney creating an illustration from a text description',
      'GitHub Copilot writing code from a comment',
    ],
    alsoKnownAs: ['GenAI', 'Generative Models'],
  },
  {
    id: 'term-010',
    slug: 'context-window',
    term: 'Context Window',
    shortDefinition:
      "The maximum amount of text an AI model can process at once — its working memory.",
    fullDefinition:
      'The context window is the total amount of text (measured in tokens) that an LLM can "see" and process in a single interaction. This includes your entire conversation history, any documents you\'ve uploaded, the system prompt, and the current message. If a conversation exceeds the context window, older parts are forgotten.',
    category: 'models-and-training',
    difficulty: 'beginner',
    relatedTerms: ['token', 'large-language-model', 'rag'],
    examples: [
      'GPT-4 has a 128K token context window (~96,000 words)',
      'Claude 3.5 has a 200K token context window',
      'If you paste a long document and the conversation is long, early context may be dropped',
    ],
    alsoKnownAs: ['Context Length', 'Context Limit'],
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.category === category);
}

export function searchGlossary(query: string): GlossaryTerm[] {
  const q = query.toLowerCase();
  return glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.shortDefinition.toLowerCase().includes(q) ||
      t.alsoKnownAs?.some((aka) => aka.toLowerCase().includes(q))
  );
}
