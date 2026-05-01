import { MetadataRoute } from 'next';
import { getAllModules, getAllLessons, getAllCourses } from '@/lib/content';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://learnai.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const courses = getAllCourses();
  const modules = getAllModules();
  const lessons = getAllLessons();

  const staticRoutes = [
    '/',
    '/courses',
    '/modules',
    '/roadmap',
    '/glossary',
    '/tools',
    '/plan',
    '/projects',
    '/prompts',
    '/safety',
    '/faq',
    '/advanced',
    '/about',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const courseRoutes = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const moduleRoutes = modules.map((mod) => ({
    url: `${BASE_URL}/modules/${mod.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const lessonRoutes = lessons.map((lesson) => ({
    url: `${BASE_URL}/modules/${lesson.moduleSlug}/${lesson.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...moduleRoutes, ...lessonRoutes];
}
