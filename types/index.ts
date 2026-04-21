// ─────────────────────────────────────────────────────────────────────────────
// Core domain types for LearnAI course website
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared primitives ────────────────────────────────────────────────────────

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type CalloutVariant = 'info' | 'tip' | 'warning' | 'note' | 'important';

// ── Content block system ─────────────────────────────────────────────────────

export interface MermaidDiagram {
  id: string;
  caption?: string;
  definition: string;
}

export interface ComparisonCardItem {
  title: string;
  description: string;
  pros?: string[];
  cons?: string[];
  tags?: string[];
}

export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface KeyTermItem {
  term: string;
  definition: string;
  learnMoreSlug?: string; // links to glossary
}

export interface ChecklistItem {
  text: string;
  hint?: string;
}

export interface ExerciseData {
  title: string;
  description: string;
  steps?: string[];
  expectedOutcome?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Discriminated union of all block types for type-safe rendering
export type ContentBlock =
  | {
      type: 'paragraph';
      id?: string;
      data: { text: string };
    }
  | {
      type: 'heading';
      id?: string;
      data: { level: 2 | 3 | 4; text: string; anchor?: string };
    }
  | {
      type: 'bullet-list';
      id?: string;
      data: { items: string[]; title?: string };
    }
  | {
      type: 'numbered-list';
      id?: string;
      data: { items: string[]; title?: string };
    }
  | {
      type: 'callout';
      id?: string;
      data: { variant: CalloutVariant; title?: string; text: string };
    }
  | {
      type: 'quote';
      id?: string;
      data: { text: string; attribution?: string };
    }
  | {
      type: 'key-terms';
      id?: string;
      data: { terms: KeyTermItem[] };
    }
  | {
      type: 'table';
      id?: string;
      data: TableData;
    }
  | {
      type: 'example';
      id?: string;
      data: { title?: string; content: string; code?: string; language?: string };
    }
  | {
      type: 'exercise';
      id?: string;
      data: ExerciseData;
    }
  | {
      type: 'checklist';
      id?: string;
      data: { title?: string; items: ChecklistItem[] };
    }
  | {
      type: 'mermaid';
      id?: string;
      data: MermaidDiagram;
    }
  | {
      type: 'comparison-cards';
      id?: string;
      data: { title?: string; cards: ComparisonCardItem[] };
    }
  | {
      type: 'summary-box';
      id?: string;
      data: { title?: string; points: string[]; takeaway?: string };
    }
  | {
      type: 'faq-block';
      id?: string;
      data: { title?: string; items: FAQItem[] };
    }
  | {
      type: 'divider';
      id?: string;
      data: Record<string, never>;
    };

// ── Table of Contents ────────────────────────────────────────────────────────

export interface TocEntry {
  anchor: string;
  text: string;
  level: 2 | 3 | 4;
}

// ── Phase ────────────────────────────────────────────────────────────────────

export interface Phase {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  order: number;
  icon: string; // emoji or icon name
  color: string; // tailwind color class
  moduleSlug: string[]; // ordered list of module slugs
  estimatedWeeks: number;
}

// ── Module ───────────────────────────────────────────────────────────────────

export interface Module {
  id: string;
  slug: string;
  phaseSlug: string;
  title: string;
  description: string;
  longDescription?: string;
  order: number;
  difficulty: Difficulty;
  estimatedHours: number;
  icon: string;
  tags: string[];
  lessonSlugs: string[]; // ordered list of lesson slugs
  isOptional?: boolean;
  skipLabel?: string;
  prerequisites?: string[]; // module slugs
  whatYouLearn?: string[];
}

// ── Lesson ───────────────────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  slug: string;
  moduleSlug: string;
  title: string;
  description: string;
  order: number;
  difficulty: Difficulty;
  estimatedMinutes: number;
  tags: string[];
  prerequisites?: string[]; // lesson slugs
  isOptional?: boolean;
  skipLabel?: string;
  blocks: ContentBlock[];
  relatedLessons?: string[]; // lesson slugs
  relatedGlossaryTerms?: string[]; // glossary term slugs
}

// ── Glossary ─────────────────────────────────────────────────────────────────

export type GlossaryCategory =
  | 'core-concepts'
  | 'models-and-training'
  | 'prompting'
  | 'tools-and-apis'
  | 'agents-and-automation'
  | 'safety-and-ethics'
  | 'architecture'
  | 'multimodal'
  | 'evaluation';

export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  phonetic?: string;
  shortDefinition: string;
  fullDefinition: string;
  category: GlossaryCategory;
  difficulty: Difficulty;
  relatedTerms?: string[]; // slugs
  learnMoreSlug?: string; // lesson slug
  examples?: string[];
  alsoKnownAs?: string[];
}

// ── Tool Comparison ──────────────────────────────────────────────────────────

export type ToolCategory =
  | 'chatbot'
  | 'image-generation'
  | 'coding'
  | 'writing'
  | 'automation'
  | 'search'
  | 'voice'
  | 'video'
  | 'productivity'
  | 'local-ai';

export interface ToolFeature {
  name: string;
  supported: boolean | 'partial' | 'unknown';
  note?: string;
}

export interface ToolEntry {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  url?: string;
  pricing: 'free' | 'freemium' | 'paid' | 'open-source';
  difficulty: Difficulty;
  bestFor: string[];
  limitations?: string[];
  features?: ToolFeature[];
  logoEmoji?: string;
  isPopular?: boolean;
  isBeginnnerPick?: boolean;
}

// ── Weekly / 90-Day Plan ─────────────────────────────────────────────────────

export type PlanWeekFocus =
  | 'foundations'
  | 'tools'
  | 'prompting'
  | 'workflows'
  | 'automation'
  | 'agents'
  | 'advanced'
  | 'review';

export interface PlanWeek {
  id: string;
  week: number;
  title: string;
  focus: PlanWeekFocus;
  description: string;
  goals: string[];
  moduleSlugs?: string[];
  lessonSlugs?: string[];
  tools?: string[];
  tip?: string;
}

// ── Mini Projects ────────────────────────────────────────────────────────────

export interface MiniProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  estimatedHours: number;
  tags: string[];
  skills: string[];
  tools: string[];
  steps: string[];
  expectedOutput: string;
  bonusChallenges?: string[];
  relatedLessons?: string[]; // lesson slugs
}

// ── FAQs ─────────────────────────────────────────────────────────────────────

export type FAQCategory =
  | 'getting-started'
  | 'tools'
  | 'learning-path'
  | 'concepts'
  | 'safety'
  | 'career';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  tags?: string[];
  relatedLessons?: string[];
}

// ── Prompt Templates ─────────────────────────────────────────────────────────

export type PromptCategory =
  | 'writing'
  | 'thinking'
  | 'research'
  | 'coding'
  | 'creativity'
  | 'productivity'
  | 'learning'
  | 'analysis'
  | 'summarization';

export interface PromptTemplate {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: PromptCategory;
  difficulty: Difficulty;
  template: string; // use [BRACKETS] for placeholders
  example?: string;
  tags: string[];
  tips?: string[];
  isStarter?: boolean;
}

// ── Advanced Concepts ────────────────────────────────────────────────────────

export type AdvancedConceptCategory =
  | 'llm-internals'
  | 'prompting-advanced'
  | 'rag-and-memory'
  | 'agents'
  | 'evaluation'
  | 'deployment'
  | 'safety';

export interface AdvancedConcept {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: AdvancedConceptCategory;
  difficulty: Exclude<Difficulty, 'beginner'>;
  prerequisites?: string[]; // lesson slugs
  blocks: ContentBlock[];
  relatedConcepts?: string[];
}

// ── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  isNew?: boolean;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ── Progress ─────────────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonSlug: string;
  moduleSlug: string;
  completedAt: string; // ISO date string
}

export interface CourseProgress {
  completedLessons: LessonProgress[];
  lastVisitedLesson?: string;
  startedAt?: string;
}

// ── Search ───────────────────────────────────────────────────────────────────

export interface SearchResult {
  type: 'lesson' | 'module' | 'glossary' | 'concept';
  slug: string;
  title: string;
  description: string;
  moduleSlug?: string;
  difficulty?: Difficulty;
  tags?: string[];
}

// ── Roadmap node ─────────────────────────────────────────────────────────────

export interface RoadmapNode {
  id: string;
  title: string;
  type: 'phase' | 'module' | 'milestone';
  href?: string;
  children?: RoadmapNode[];
  isOptional?: boolean;
  difficulty?: Difficulty;
}
