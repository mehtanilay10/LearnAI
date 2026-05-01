/**
 * Content loading and indexing helpers.
 * All content is loaded from structured TypeScript files in /content/.
 * These helpers provide cross-content lookups and navigation utilities.
 */

import { phases, getPhasesByCourse } from '@/content/phases';
import { modules, getModulesByPhase } from '@/content/modules';
import { lessons, getLessonsByModule } from '@/content/lessons';
import { glossaryTerms } from '@/content/glossary';
import { courses, getCourseBySlug } from '@/content/courses';
import type {
  Phase,
  Module,
  Lesson,
  Course,
  GlossaryTerm,
  TocEntry,
  ContentBlock,
  SearchResult,
  Difficulty,
} from '@/types';

// ── Re-exports for convenience ────────────────────────────────────────────────
export { phases, modules, lessons, glossaryTerms, courses };

// ── Course helpers ────────────────────────────────────────────────────────────

export function getAllCourses(): Course[] {
  return [...courses].sort((a, b) => a.order - b.order);
}

export { getCourseBySlug };

export function getPhasesForCourse(courseSlug: string): Phase[] {
  return getPhasesByCourse(courseSlug);
}

export function getModulesForCourse(courseSlug: string): Module[] {
  const coursePhases = getPhasesByCourse(courseSlug);
  const phaseSlugs = new Set(coursePhases.map((p) => p.slug));
  return modules
    .filter((m) => phaseSlugs.has(m.phaseSlug))
    .sort((a, b) => a.order - b.order);
}

export function getLessonsForCourse(courseSlug: string): Lesson[] {
  const courseModules = getModulesForCourse(courseSlug);
  const moduleSlugs = new Set(courseModules.map((m) => m.slug));
  return lessons
    .filter((l) => moduleSlugs.has(l.moduleSlug))
    .sort((a, b) => a.order - b.order);
}

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

export function getCourseForModule(moduleSlug: string): Course | undefined {
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return undefined;
  const phase = phases.find((p) => p.slug === mod.phaseSlug);
  if (!phase) return undefined;
  return courses.find((c) => c.slug === phase.courseSlug);
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
  const orderedLessons = getAllModules()
    .flatMap((m) => getLessonsByModule(m.slug))
    .filter((l) => Boolean(l));

  const idx = orderedLessons.findIndex((l) => l.slug === lesson.slug);

  if (idx === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: idx > 0 ? orderedLessons[idx - 1] : null,
    next: idx < orderedLessons.length - 1 ? orderedLessons[idx + 1] : null,
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
