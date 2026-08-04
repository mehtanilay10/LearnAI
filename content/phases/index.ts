import type { Phase } from '@/types';

// AI Basics course phases
import phase1Foundations from '../courses/ai-basics/phase-1-foundations/content.json';
import phase2KeyConcepts from '../courses/ai-basics/phase-2-key-concepts/content.json';
import phase3ToolsInDepth from '../courses/ai-basics/phase-3-tools-in-depth/content.json';
import phase4AdvancedPrompting from '../courses/ai-basics/phase-4-advanced-prompting/content.json';
import phase5AutomationAgents from '../courses/ai-basics/phase-5-automation-agents/content.json';
import phase6Safety from '../courses/ai-basics/phase-6-safety/content.json';
import phase7IntermediateSystems from '../courses/ai-basics/phase-7-intermediate-systems/content.json';
import phase8AdvancedAi from '../courses/ai-basics/phase-8-advanced-ai/content.json';
import phase9Capstone from '../courses/ai-basics/phase-9-capstone/content.json';

// Codex course phases
import codexPhase1Foundations from '../courses/codex/phase-1-foundations/content.json';
import codexPhase2Tools from '../courses/codex/phase-2-tools/content.json';
import codexPhase3Workflows from '../courses/codex/phase-3-workflows/content.json';
import codexPhase4AdvancedTechniques from '../courses/codex/phase-4-advanced-techniques/content.json';

// SQL Server course phases
import sqlPhase1Foundations from '../courses/sql-server/phase-1-foundations/content.json';
import sqlPhase2Querying from '../courses/sql-server/phase-2-querying/content.json';
import sqlPhase3Advanced from '../courses/sql-server/phase-3-advanced/content.json';
import sqlPhase4AdvancedProgramming from '../courses/sql-server/phase-4-advanced-programming/content.json';

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
  codexPhase4AdvancedTechniques,
    sqlPhase1Foundations,
    sqlPhase2Querying,
    sqlPhase3Advanced,
    sqlPhase4AdvancedProgramming,
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
