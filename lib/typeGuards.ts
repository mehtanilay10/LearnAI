import type { Lesson, Module, Course, GlossaryTerm, Phase, PromptTemplate } from '@/types';

export function isLessonArray(value: unknown): value is Lesson[] {
  return Array.isArray(value) && value.every(isLesson);
}

export function isLesson(value: unknown): value is Lesson {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.slug === 'string' &&
    typeof v.moduleSlug === 'string' &&
    typeof v.title === 'string' &&
    typeof v.description === 'string' &&
    typeof v.order === 'number' &&
    typeof v.difficulty === 'string' &&
    typeof v.estimatedMinutes === 'number' &&
    Array.isArray(v.tags) &&
    Array.isArray(v.blocks)
  );
}

export function isModuleArray(value: unknown): value is Module[] {
  return Array.isArray(value) && value.every(isModule);
}

export function isModule(value: unknown): value is Module {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.slug === 'string' &&
    typeof v.phaseSlug === 'string' &&
    typeof v.title === 'string' &&
    typeof v.description === 'string' &&
    typeof v.order === 'number' &&
    typeof v.difficulty === 'string' &&
    typeof v.estimatedHours === 'number' &&
    Array.isArray(v.tags) &&
    Array.isArray(v.lessonSlugs)
  );
}

export function isCourseArray(value: unknown): value is Course[] {
  return Array.isArray(value) && value.every(isCourse);
}

export function isCourse(value: unknown): value is Course {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.slug === 'string' &&
    typeof v.title === 'string' &&
    typeof v.subtitle === 'string' &&
    typeof v.description === 'string' &&
    typeof v.icon === 'string' &&
    typeof v.color === 'string' &&
    typeof v.order === 'number' &&
    Array.isArray(v.phaseSlugs)
  );
}

export function isGlossaryTermArray(value: unknown): value is GlossaryTerm[] {
  return Array.isArray(value) && value.every(isGlossaryTerm);
}

export function isGlossaryTerm(value: unknown): value is GlossaryTerm {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.slug === 'string' &&
    typeof v.term === 'string' &&
    typeof v.shortDefinition === 'string' &&
    typeof v.fullDefinition === 'string' &&
    typeof v.category === 'string' &&
    typeof v.difficulty === 'string'
  );
}

export function isPhaseArray(value: unknown): value is Phase[] {
  return Array.isArray(value) && value.every(isPhase);
}

export function isPhase(value: unknown): value is Phase {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.slug === 'string' &&
    typeof v.courseSlug === 'string' &&
    typeof v.title === 'string' &&
    typeof v.subtitle === 'string' &&
    typeof v.description === 'string' &&
    typeof v.order === 'number' &&
    typeof v.icon === 'string' &&
    typeof v.color === 'string' &&
    Array.isArray(v.moduleSlug) &&
    typeof v.estimatedWeeks === 'number'
  );
}

export function isPromptTemplateArray(value: unknown): value is PromptTemplate[] {
  return Array.isArray(value) && value.every(isPromptTemplate);
}

export function isPromptTemplate(value: unknown): value is PromptTemplate {
  if (!value || typeof value !== 'object') return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.slug === 'string' &&
    typeof v.title === 'string' &&
    typeof v.description === 'string' &&
    typeof v.category === 'string' &&
    typeof v.difficulty === 'string' &&
    typeof v.template === 'string' &&
    Array.isArray(v.tags)
  );
}
