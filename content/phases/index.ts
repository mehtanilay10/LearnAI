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

// .NET + React AI Lead course phases
import dotnetPhase1AdvancedDotnet from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/content.json';
import dotnetPhase2ReactTypescript from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/content.json';
import dotnetPhase3GenaiLlm from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/content.json';
import dotnetPhase4RagAgentsMcp from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/content.json';
import dotnetPhase5AzureDevops from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/content.json';
import dotnetPhase6SecurityTesting from '../courses/dotnet-react-ai-lead/phase-6-security-testing/content.json';
import dotnetPhase7Capstone from '../courses/dotnet-react-ai-lead/phase-7-capstone/content.json';

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
  dotnetPhase1AdvancedDotnet,
  dotnetPhase2ReactTypescript,
  dotnetPhase3GenaiLlm,
  dotnetPhase4RagAgentsMcp,
  dotnetPhase5AzureDevops,
  dotnetPhase6SecurityTesting,
  dotnetPhase7Capstone,
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
