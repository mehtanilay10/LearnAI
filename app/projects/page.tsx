import type { Metadata } from 'next';
import { projects } from '@/content/projects';
import { ProjectsContent } from './ProjectsContent';

export const metadata: Metadata = {
  title: 'Mini Projects',
  description: 'Hands-on AI mini projects for beginners and intermediate learners. Build real skills through practical exercises.',
};

export default function ProjectsPage() {
  return <ProjectsContent projects={projects} />;
}

