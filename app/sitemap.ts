import { MetadataRoute } from 'next';
import { getAllCourses, getAllModules, getAllLessons, getCourseForModule } from '@/lib/content';
import { advancedConcepts } from '@/content/advanced';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://learnai.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const courses = getAllCourses();
  const modules = getAllModules();
  const lessons = getAllLessons();

  const staticRoutes = [
    '/',
    '/courses',
    '/roadmap',
    '/glossary',
    '/tools',
    '/projects',
    '/prompts',
    '/advanced',
    '/safety',
    '/search',
    '/plan',
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

  const moduleRoutes = modules
    .map((mod) => {
      const course = getCourseForModule(mod.slug);
      if (!course) return null;
      return {
        url: `${BASE_URL}/courses/${course.slug}/${mod.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    })
    .filter((r): r is { url: string; lastModified: Date; changeFrequency: 'monthly'; priority: number } => r !== null);

  const lessonRoutes = lessons
    .map((lesson) => {
      const mod = modules.find((m) => m.slug === lesson.moduleSlug);
      const course = mod ? getCourseForModule(mod.slug) : undefined;
      if (!course) return null;
      return {
        url: `${BASE_URL}/courses/${course.slug}/${mod!.slug}/${lesson.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      };
    })
    .filter((r): r is { url: string; lastModified: Date; changeFrequency: 'monthly'; priority: number } => r !== null);

  const advancedConceptRoutes = advancedConcepts.map((concept) => ({
    url: `${BASE_URL}/advanced/${concept.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...moduleRoutes, ...lessonRoutes, ...advancedConceptRoutes];
}
