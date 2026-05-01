import type { Course } from '@/types';

import aiBasics from './ai-basics.json';
import codex from './codex.json';

const rawCourses = [aiBasics, codex];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
