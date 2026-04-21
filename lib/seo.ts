import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://learnai.dev';
const SITE_NAME = 'LearnAI';
const DEFAULT_DESCRIPTION =
  'Learn AI tools, prompting, automation, and modern AI workflows — no coding required. The practical AI literacy course for everyday users.';

export function buildMetadata({
  title,
  description,
  path = '',
  image,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const desc = description ?? DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path}`;
  const ogImage = image ?? `${BASE_URL}/og-default.png`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export function buildLessonMetadata(opts: {
  title: string;
  description: string;
  moduleSlug: string;
  lessonSlug: string;
}): Metadata {
  return buildMetadata({
    title: opts.title,
    description: opts.description,
    path: `/modules/${opts.moduleSlug}/${opts.lessonSlug}`,
  });
}

export function buildModuleMetadata(opts: {
  title: string;
  description: string;
  moduleSlug: string;
}): Metadata {
  return buildMetadata({
    title: opts.title,
    description: opts.description,
    path: `/modules/${opts.moduleSlug}`,
  });
}
