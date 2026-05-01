import type { Phase } from '@/types';

// AI Basics course phases
import phase1Foundations from './phase-1-foundations.json';
import phase2KeyConcepts from './phase-2-key-concepts.json';
import phase3ToolsInDepth from './phase-3-tools-in-depth.json';
import phase4AdvancedPrompting from './phase-4-advanced-prompting.json';
import phase5AutomationAgents from './phase-5-automation-agents.json';
import phase6Safety from './phase-6-safety.json';
import phase7IntermediateSystems from './phase-7-intermediate-systems.json';
import phase8AdvancedAi from './phase-8-advanced-ai.json';
import phase9Capstone from './phase-9-capstone.json';

// Codex course phases
import codexPhase1Foundations from './codex-phase-1-foundations.json';
import codexPhase2Tools from './codex-phase-2-tools.json';
import codexPhase3Workflows from './codex-phase-3-workflows.json';

const rawPhases = [
  phase1Foundations,
  phase2KeyConcepts,
  phase3ToolsInDepth,
  phase4AdvancedPrompting,
  phase5AutomationAgents,
  phase6Safety,
  phase7IntermediateSystems,
  phase8AdvancedAi,
  phase9Capstone,
  codexPhase1Foundations,
  codexPhase2Tools,
  codexPhase3Workflows,
];

export const phases: Phase[] = rawPhases as unknown as Phase[];

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}

export function getPhasesByCourse(courseSlug: string): Phase[] {
  return phases
    .filter((p) => p.courseSlug === courseSlug)
    .sort((a, b) => a.order - b.order);
}
