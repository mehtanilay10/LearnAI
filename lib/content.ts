/**
 * Content loading and indexing helpers.
 * All content is loaded from structured TypeScript files in /content/.
 * These helpers provide cross-content lookups and navigation utilities.
 */

import { phases } from '@/content/phases';
import { modules, getModulesByPhase } from '@/content/modules';
import { lessons, getLessonsByModule } from '@/content/lessons';
import { glossaryTerms } from '@/content/glossary';
import type {
  Phase,
  Module,
  Lesson,
  GlossaryTerm,
  TocEntry,
  ContentBlock,
  SearchResult,
  Difficulty,
} from '@/types';

// ── Re-exports for convenience ────────────────────────────────────────────────
export { phases, modules, lessons, glossaryTerms };

// ── Phase helpers ─────────────────────────────────────────────────────────────

export function getAllPhases(): Phase[] {
  return [...phases].sort((a, b) => a.order - b.order);
}

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}

// ── Module helpers ────────────────────────────────────────────────────────────

export function getAllModules(): Module[] {
  return [...modules].sort((a, b) => a.order - b.order);
}

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesForPhase(phaseSlug: string): Module[] {
  return getModulesByPhase(phaseSlug);
}

export function filterModulesByDifficulty(difficulty: Difficulty): Module[] {
  return modules.filter((m) => m.difficulty === difficulty);
}

// ── Lesson helpers ────────────────────────────────────────────────────────────

export function getAllLessons(): Lesson[] {
  return [...lessons].sort((a, b) => a.order - b.order);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsForModule(moduleSlug: string): Lesson[] {
  return getLessonsByModule(moduleSlug);
}

export function getAdjacentLessons(
  lesson: Lesson
): { prev: Lesson | null; next: Lesson | null } {
  const moduleLessons = getLessonsByModule(lesson.moduleSlug);
  const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
  return {
    prev: idx > 0 ? moduleLessons[idx - 1] : null,
    next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
  };
}

/** Return full breadcrumb data for a lesson */
export function getLessonBreadcrumb(lesson: Lesson): {
  phase: Phase | undefined;
  module: Module | undefined;
  lesson: Lesson;
} {
  const mod = getModuleBySlug(lesson.moduleSlug);
  const phase = mod ? getPhaseBySlug(mod.phaseSlug) : undefined;
  return { phase, module: mod, lesson };
}

// ── Glossary helpers ──────────────────────────────────────────────────────────

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

// ── Table of Contents extraction ─────────────────────────────────────────────

export function extractTOC(blocks: ContentBlock[]): TocEntry[] {
  const entries: TocEntry[] = [];
  for (const block of blocks) {
    if (block.type === 'heading' && block.data.anchor) {
      entries.push({
        anchor: block.data.anchor,
        text: block.data.text,
        level: block.data.level,
      });
    }
  }
  return entries;
}

// ── Full-text search ──────────────────────────────────────────────────────────

export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search lessons
  for (const lesson of lessons) {
    if (
      lesson.title.toLowerCase().includes(q) ||
      lesson.description.toLowerCase().includes(q) ||
      lesson.tags.some((t) => t.includes(q))
    ) {
      results.push({
        type: 'lesson',
        slug: lesson.slug,
        title: lesson.title,
        description: lesson.description,
        moduleSlug: lesson.moduleSlug,
        difficulty: lesson.difficulty,
        tags: lesson.tags,
      });
    }
  }

  // Search modules
  for (const mod of modules) {
    if (
      mod.title.toLowerCase().includes(q) ||
      mod.description.toLowerCase().includes(q) ||
      mod.tags.some((t) => t.includes(q))
    ) {
      results.push({
        type: 'module',
        slug: mod.slug,
        title: mod.title,
        description: mod.description,
        difficulty: mod.difficulty,
        tags: mod.tags,
      });
    }
  }

  // Search glossary
  for (const term of glossaryTerms) {
    if (
      term.term.toLowerCase().includes(q) ||
      term.shortDefinition.toLowerCase().includes(q) ||
      term.alsoKnownAs?.some((aka) => aka.toLowerCase().includes(q))
    ) {
      results.push({
        type: 'glossary',
        slug: term.slug,
        title: term.term,
        description: term.shortDefinition,
        difficulty: term.difficulty,
        tags: [term.category],
      });
    }
  }

  return results;
}

// ── Stats ─────────────────────────────────────────────────────────────────────

export function getCourseStats() {
  const totalLessons = lessons.length;
  const totalModules = modules.length;
  const totalMinutes = lessons.reduce((sum, l) => sum + l.estimatedMinutes, 0);
  const totalGlossaryTerms = glossaryTerms.length;

  return {
    totalLessons,
    totalModules,
    totalPhases: phases.length,
    totalMinutes,
    totalHours: Math.round(totalMinutes / 60),
    totalGlossaryTerms,
  };
}
