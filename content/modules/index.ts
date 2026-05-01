import type { Module } from '@/types';

// AI Basics course modules
import whatIsAi from './phase-1-foundations/what-is-ai.json';
import aiToolsOverview from './phase-1-foundations/ai-tools-overview.json';
import promptingBasics from './phase-1-foundations/prompting-basics.json';
import understandingLlms from './phase-2-key-concepts/understanding-llms.json';
import hallucinationsAndAccuracy from './phase-2-key-concepts/hallucinations-and-accuracy.json';
import chatbotsInDepth from './phase-3-tools-in-depth/chatbots-in-depth.json';
import researchAndSearchTools from './phase-3-tools-in-depth/research-and-search-tools.json';
import writingAndContentTools from './phase-3-tools-in-depth/writing-and-content-tools.json';
import advancedPrompting from './phase-4-advanced-prompting/advanced-prompting.json';
import aiWorkflows from './phase-4-advanced-prompting/ai-workflows.json';
import automationBasics from './phase-5-automation-agents/automation-basics.json';
import agentsIntroduction from './phase-5-automation-agents/agents-introduction.json';
import toolCallingBasics from './phase-5-automation-agents/tool-calling-basics.json';
import safetyAndLimitations from './phase-6-safety/safety-and-limitations.json';
import privacyAndData from './phase-6-safety/privacy-and-data.json';
import ragAndMemory from './phase-7-intermediate-systems/rag-and-memory.json';
import embeddingsAndVectors from './phase-7-intermediate-systems/embeddings-and-vectors.json';
import mcpAndSkills from './phase-8-advanced-ai/mcp-and-skills.json';
import multimodalAi from './phase-8-advanced-ai/multimodal-ai.json';
import localVsCloudAi from './phase-8-advanced-ai/local-vs-cloud-ai.json';
import personalAiStack from './phase-9-capstone/personal-ai-stack.json';
import stayingCurrent from './phase-9-capstone/staying-current.json';

// Codex course modules
import codexIntroToAiCoding from './codex-phase-1-foundations/codex-intro-to-ai-coding.json';
import codexAiCodingTools from './codex-phase-2-tools/codex-ai-coding-tools.json';
import codexAgenticWorkflows from './codex-phase-3-workflows/codex-agentic-workflows.json';

const rawModules = [
  whatIsAi,
  aiToolsOverview,
  promptingBasics,
  understandingLlms,
  hallucinationsAndAccuracy,
  chatbotsInDepth,
  researchAndSearchTools,
  writingAndContentTools,
  advancedPrompting,
  aiWorkflows,
  automationBasics,
  agentsIntroduction,
  toolCallingBasics,
  safetyAndLimitations,
  privacyAndData,
  ragAndMemory,
  embeddingsAndVectors,
  mcpAndSkills,
  multimodalAi,
  localVsCloudAi,
  personalAiStack,
  stayingCurrent,
  // Codex course
  codexIntroToAiCoding,
  codexAiCodingTools,
  codexAgenticWorkflows,
];

export const modules: Module[] = rawModules as unknown as Module[];

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getModulesByPhase(phaseSlug: string): Module[] {
  return modules
    .filter((m) => m.phaseSlug === phaseSlug)
    .sort((a, b) => a.order - b.order);
}
