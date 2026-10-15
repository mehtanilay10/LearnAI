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

// .NET + React AI Lead course modules
// Phase 1: Advanced .NET & System Design
import dotnetAdvancedCsharp from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/advanced-csharp-patterns/content.json';
import dotnetSystemDesign from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/system-design-architecture/content.json';
import dotnetPerformanceScaling from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/performance-scaling/content.json';

// Phase 2: React/TypeScript & Modern Frontend
import dotnetAdvancedReact from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/advanced-react-patterns/content.json';
import dotnetTypescriptAdvanced from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/typescript-advanced/content.json';
import dotnetStateManagement from '../courses/dotnet-react-ai-lead/phase-2-react-typescript/state-management-architecture/content.json';

// Phase 3: Generative AI & LLM Integration
import dotnetLlmFundamentals from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-fundamentals/content.json';
import dotnetPromptEngineering from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/prompt-engineering/content.json';
import dotnetLlmIntegration from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/llm-integration-dotnet/content.json';
import dotnetAiSdkSemantickernel from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/ai-sdk-semantic-kernel/content.json';

// Phase 4: RAG, Agents & MCP
import dotnetRagFundamentals from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/rag-fundamentals/content.json';
import dotnetAiAgents from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/ai-agents/content.json';
import dotnetMcpIntegration from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/mcp-integration/content.json';

// Phase 5: Azure Cloud & DevOps
import dotnetAzureFundamentals from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/azure-fundamentals/content.json';
import dotnetDevopsCicd from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/devops-cicd/content.json';
import dotnetMonitoringObservability from '../courses/dotnet-react-ai-lead/phase-5-azure-devops/monitoring-observability/content.json';

// Phase 6: Security, Testing & AI-Assisted Dev
import dotnetSecurityFundamentals from '../courses/dotnet-react-ai-lead/phase-6-security-testing/security-fundamentals/content.json';
import dotnetTestingStrategies from '../courses/dotnet-react-ai-lead/phase-6-security-testing/testing-strategies/content.json';
import dotnetAiAssistedDev from '../courses/dotnet-react-ai-lead/phase-6-security-testing/ai-assisted-development/content.json';

// Phase 7: Capstone Project
import dotnetCapstoneDesign from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-design/content.json';
import dotnetCapstoneImplementation from '../courses/dotnet-react-ai-lead/phase-7-capstone/capstone-implementation/content.json';

// Phase 1: New module - Clean Architecture & .NET Aspire
import dotnetCleanArchitectureAspire from '../courses/dotnet-react-ai-lead/phase-1-advanced-dotnet/clean-architecture-dotnet-aspire/content.json';
// Phase 3: New module - Embedding Systems & Vector Engineering
import dotnetEmbeddingSystems from '../courses/dotnet-react-ai-lead/phase-3-genai-llm/embedding-systems-vector-engineering/content.json';
// Phase 4: New module - Agent Memory & Human-in-the-Loop
import dotnetAgentMemoryHitl from '../courses/dotnet-react-ai-lead/phase-4-rag-agents-mcp/agent-memory-hitl/content.json';

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
  // .NET + React AI Lead course
  dotnetAdvancedCsharp,
  dotnetSystemDesign,
  dotnetPerformanceScaling,
  dotnetCleanArchitectureAspire,
  dotnetAdvancedReact,
  dotnetTypescriptAdvanced,
  dotnetStateManagement,
  dotnetLlmFundamentals,
  dotnetPromptEngineering,
  dotnetLlmIntegration,
  dotnetAiSdkSemantickernel,
  dotnetEmbeddingSystems,
  dotnetRagFundamentals,
  dotnetAiAgents,
  dotnetMcpIntegration,
  dotnetAgentMemoryHitl,
  dotnetAzureFundamentals,
  dotnetDevopsCicd,
  dotnetMonitoringObservability,
  dotnetSecurityFundamentals,
  dotnetTestingStrategies,
  dotnetAiAssistedDev,
  dotnetCapstoneDesign,
  dotnetCapstoneImplementation,
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
