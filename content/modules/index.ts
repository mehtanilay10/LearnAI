import type { Module } from '@/types';

// AI Basics — phase-1-foundations
import whatIsAi from '../courses/ai-basics/phase-1-foundations/what-is-ai/content.json';
import aiToolsOverview from '../courses/ai-basics/phase-1-foundations/ai-tools-overview/content.json';
import promptingBasics from '../courses/ai-basics/phase-1-foundations/prompting-basics/content.json';

// AI Basics — phase-2-key-concepts
import understandingLlms from '../courses/ai-basics/phase-2-key-concepts/understanding-llms/content.json';
import hallucinationsAndAccuracy from '../courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/content.json';

// AI Basics — phase-3-tools-in-depth
import chatbotsInDepth from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/content.json';
import researchAndSearchTools from '../courses/ai-basics/phase-3-tools-in-depth/research-and-search-tools/content.json';
import writingAndContentTools from '../courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/content.json';

// AI Basics — phase-4-advanced-prompting
import advancedPrompting from '../courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/content.json';
import aiWorkflows from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/content.json';

// AI Basics — phase-5-automation-agents
import automationBasics from '../courses/ai-basics/phase-5-automation-agents/automation-basics/content.json';
import agentsIntroduction from '../courses/ai-basics/phase-5-automation-agents/agents-introduction/content.json';
import toolCallingBasics from '../courses/ai-basics/phase-5-automation-agents/tool-calling-basics/content.json';

// AI Basics — phase-6-safety
import safetyAndLimitations from '../courses/ai-basics/phase-6-safety/safety-and-limitations/content.json';
import privacyAndData from '../courses/ai-basics/phase-6-safety/privacy-and-data/content.json';

// AI Basics — phase-7-intermediate-systems
import ragAndMemory from '../courses/ai-basics/phase-7-intermediate-systems/rag-and-memory/content.json';
import embeddingsAndVectors from '../courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/content.json';

// AI Basics — phase-8-advanced-ai
import mcpAndSkills from '../courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/content.json';
import multimodalAi from '../courses/ai-basics/phase-8-advanced-ai/multimodal-ai/content.json';
import localVsCloudAi from '../courses/ai-basics/phase-8-advanced-ai/local-vs-cloud-ai/content.json';

// AI Basics — phase-9-capstone
import personalAiStack from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/content.json';
import stayingCurrent from '../courses/ai-basics/phase-9-capstone/staying-current/content.json';

// Codex course modules
import codexIntroToAiCoding from '../courses/codex/phase-1-foundations/intro-to-ai-coding/content.json';
import codexPromptEngineeringForCode from '../courses/codex/phase-1-foundations/prompt-engineering-for-code/content.json';
import codexAiCodingTools from '../courses/codex/phase-2-tools/ai-coding-tools/content.json';
import codexPracticalAiWorkflows from '../courses/codex/phase-3-workflows/practical-ai-workflows/content.json';
import codexAgenticWorkflows from '../courses/codex/phase-3-workflows/agentic-workflows/content.json';
import codexSecurityAndTesting from '../courses/codex/phase-4-advanced-techniques/security-and-testing/content.json';

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
  codexPromptEngineeringForCode,
  codexAiCodingTools,
  codexPracticalAiWorkflows,
  codexAgenticWorkflows,
  codexSecurityAndTesting,
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
