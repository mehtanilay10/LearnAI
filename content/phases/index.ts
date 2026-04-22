import type { Phase } from '@/types';

import phase1Foundations from './phase-1-foundations.json';
import phase2KeyConcepts from './phase-2-key-concepts.json';
import phase3ToolsInDepth from './phase-3-tools-in-depth.json';
import phase4AdvancedPrompting from './phase-4-advanced-prompting.json';
import phase5AutomationAgents from './phase-5-automation-agents.json';
import phase6Safety from './phase-6-safety.json';
import phase7IntermediateSystems from './phase-7-intermediate-systems.json';
import phase8AdvancedAi from './phase-8-advanced-ai.json';
import phase9Capstone from './phase-9-capstone.json';

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
];

export const phases: Phase[] = rawPhases as unknown as Phase[];

export function getPhaseBySlug(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}
