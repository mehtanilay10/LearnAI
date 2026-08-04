import type { Course } from '@/types';

import aiBasics from './ai-basics/content.json';
import codex from './codex/content.json';
import sqlServer from './sql-server/content.json';

const rawCourses = [aiBasics, codex, sqlServer];

export const courses: Course[] = rawCourses as unknown as Course[];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
