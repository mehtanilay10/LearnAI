import type { Course } from '@/types';
import { isCourseArray } from '@/lib/typeGuards';

import aiBasics from './ai-basics/content.json';
import codex from './codex/content.json';
import claude from './claude/content.json';

const rawCourses = [aiBasics, codex, claude];

export const courses: Course[] = isCourseArray(rawCourses) ? rawCourses : [];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
