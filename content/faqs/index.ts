import type { FAQ } from '@/types';

export const faqs: FAQ[] = [
  {
    id: 'faq-001',
    question: 'Do I need to know how to code to use AI tools?',
    answer:
      'No. Most modern AI tools — ChatGPT, Claude, Gemini, Perplexity — are designed for everyday users with no technical background. You just type in natural language. That said, learning basic prompting techniques (covered in this course) will dramatically improve your results. Coding knowledge only becomes useful if you want to build AI-powered apps or automate complex workflows via APIs.',
    category: 'getting-started',
    tags: ['no-code', 'beginners', 'skills-required'],
  },
  {
    id: 'faq-002',
    question: 'Which AI tool should I start with?',
    answer:
      'For most beginners, start with either ChatGPT (free tier is excellent) or Claude. Both are capable of handling a wide range of everyday tasks. ChatGPT has the largest ecosystem of integrations and a huge user community. Claude is often preferred for longer documents and careful writing. Try both for a week and see which feels more natural to you. You\'ll probably end up using multiple tools for different purposes.',
    category: 'tools',
    tags: ['chatgpt', 'claude', 'getting-started', 'beginners'],
    relatedLessons: ['chatbot-landscape', 'choosing-the-right-tool'],
  },
  {
    id: 'faq-003',
    question: 'Why does AI sometimes give wrong answers?',
    answer:
      'AI chatbots work by predicting the next most likely word in a sequence — they don\'t actually look things up or verify facts in real time. They can produce confident-sounding text even when it\'s wrong. This is called "hallucination." The best defense is to treat AI outputs as a smart first draft that needs verification for important facts, always ask follow-up questions, and use tools like Perplexity that show you their sources.',
    category: 'concepts',
    tags: ['hallucination', 'accuracy', 'fact-checking'],
    relatedLessons: ['how-llms-work-simply', 'what-ai-can-and-cannot-do'],
  },
  {
    id: 'faq-004',
    question: 'Is my data safe when I use AI tools?',
    answer:
      'It depends on the tool and how you use it. For ChatGPT, Anthropic, and Google — your conversations may be used to improve models unless you opt out. You should never paste sensitive personal data (SSNs, passwords, medical records, confidential business information) into any AI chatbot. For business use, check if an enterprise tier is available with stronger data privacy guarantees. For truly sensitive work, local AI models (run on your own hardware) are an option.',
    category: 'safety',
    tags: ['privacy', 'data', 'enterprise', 'sensitive-data'],
  },
  {
    id: 'faq-005',
    question: 'Will AI replace my job?',
    answer:
      'AI will change most jobs — but "replace" is too blunt a word. For most knowledge workers, AI automates repetitive parts of their work and amplifies what they can produce. The people most at risk today are those who refuse to adapt. The practical approach: learn which parts of your work can be augmented by AI, use that to do more in less time, and focus on uniquely human skills — judgment, relationships, creativity, ethical decision-making, and domain expertise.',
    category: 'career',
    tags: ['jobs', 'future-of-work', 'automation'],
  },
];

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter((f) => f.category === category);
}
