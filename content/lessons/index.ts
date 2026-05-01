import type { Lesson } from '@/types';

import aiVsMlVsGenerativeAi from './what-is-ai/ai-vs-ml-vs-generative-ai.json';
import howLlmsWorkSimply from './what-is-ai/how-llms-work-simply.json';
import whatAiCanAndCannotDo from './what-is-ai/what-ai-can-and-cannot-do.json';
import anatomyOfAGoodPrompt from './prompting-basics/anatomy-of-a-good-prompt.json';
import aiInEverydayLife from './what-is-ai/ai-in-everyday-life.json';
import chatbotLandscape from './ai-tools-overview/chatbot-landscape.json';
import choosingTheRightTool from './ai-tools-overview/choosing-the-right-tool.json';
import promptPatterns from './prompting-basics/prompt-patterns.json';
import commonPromptingMistakes from './prompting-basics/common-prompting-mistakes.json';
import tokensExplained from './understanding-llms/tokens-explained.json';
import contextWindowDeepDive from './understanding-llms/context-window-deep-dive.json';
import aiHallucinationDeepDive from './hallucinations-and-accuracy/ai-hallucination-deep-dive.json';
import evaluatingAiOutput from './hallucinations-and-accuracy/evaluating-ai-output.json';
import chatgptGuide from './chatbots-in-depth/chatgpt-guide.json';
import modelComparison from './chatbots-in-depth/model-comparison.json';
import aiForResearch from './research-and-search-tools/ai-for-research.json';
import chainOfThoughtPrompting from './advanced-prompting/chain-of-thought-prompting.json';
import fewShotPrompting from './advanced-prompting/few-shot-prompting.json';
import buildingYourFirstWorkflow from './ai-workflows/building-your-first-workflow.json';
import whatIsAiAutomation from './automation-basics/what-is-ai-automation.json';
import noCodeAutomationTools from './automation-basics/no-code-automation-tools.json';
import whatAreAgents from './agents-introduction/what-are-agents.json';
import howAgentsWork from './agents-introduction/how-agents-work.json';
import whatIsToolCalling from './tool-calling-basics/what-is-tool-calling.json';
import aiLimitations from './safety-and-limitations/ai-limitations.json';
import criticalEvaluation from './safety-and-limitations/critical-evaluation.json';
import protectingYourData from './privacy-and-data/protecting-your-data.json';
import ragExplained from './rag-and-memory/rag-explained.json';
import embeddingsSimply from './embeddings-and-vectors/embeddings-simply.json';
import whatIsMcp from './mcp-and-skills/what-is-mcp.json';
import aiSkillsExplained from './mcp-and-skills/ai-skills-explained.json';
import imagesAndAi from './multimodal-ai/images-and-ai.json';
import localAiOptions from './local-vs-cloud-ai/local-ai-options.json';
import buildingYourAiStack from './personal-ai-stack/building-your-ai-stack.json';
import stayingCurrentInAi from './staying-current/staying-current-in-ai.json';
import aiWritingAssistant from './writing-and-content-tools/ai-writing-assistant.json';
import editingWithAi from './writing-and-content-tools/editing-with-ai.json';
import voiceAndVideoAi from './multimodal-ai/voice-and-video-ai.json';
import systemPromptsAndCustomInstructions from './prompting-basics/system-prompts-and-custom-instructions.json';
import aiForCoding from './chatbots-in-depth/ai-for-coding.json';
import aiAndCopyright from './privacy-and-data/ai-and-copyright.json';
import aiForDataAnalysis from './automation-basics/ai-for-data-analysis.json';
import promptDebuggingWorkflow from './ai-workflows/prompt-debugging-workflow.json';
import agentGuardrailsAndApprovals from './tool-calling-basics/agent-guardrails-and-approvals.json';
import aiEvaluationMetrics from './safety-and-limitations/ai-evaluation-metrics.json';
import teamAiGovernance from './privacy-and-data/team-ai-governance.json';
import vectorDatabasesInPractice from './embeddings-and-vectors/vector-databases-in-practice.json';
import aiRoadmapByRole from './personal-ai-stack/ai-roadmap-by-role.json';
import modelSelectionAndCostOptimization from './chatbots-in-depth/model-selection-and-cost-optimization.json';
import aiProductDesignLifecycle from './ai-workflows/ai-product-design-lifecycle.json';
import promptSecurityAndJailbreakDefense from './safety-and-limitations/prompt-security-and-jailbreak-defense.json';
import enterpriseAiImplementationPlaybook from './privacy-and-data/enterprise-ai-implementation-playbook.json';
import aiProjectPortfolioAndCapstoneAssessments from './personal-ai-stack/ai-project-portfolio-and-capstone-assessments.json';

// Codex course lessons
import whatIsAiCoding from './codex-intro-to-ai-coding/what-is-ai-coding.json';
import githubCopilotGuide from './codex-ai-coding-tools/github-copilot-guide.json';
import agenticCodingIntro from './codex-agentic-workflows/agentic-coding-intro.json';

const rawLessons = [
  aiVsMlVsGenerativeAi,
  howLlmsWorkSimply,
  whatAiCanAndCannotDo,
  anatomyOfAGoodPrompt,
  aiInEverydayLife,
  chatbotLandscape,
  choosingTheRightTool,
  promptPatterns,
  commonPromptingMistakes,
  tokensExplained,
  contextWindowDeepDive,
  aiHallucinationDeepDive,
  evaluatingAiOutput,
  chatgptGuide,
  modelComparison,
  aiForResearch,
  chainOfThoughtPrompting,
  fewShotPrompting,
  buildingYourFirstWorkflow,
  whatIsAiAutomation,
  noCodeAutomationTools,
  whatAreAgents,
  howAgentsWork,
  whatIsToolCalling,
  aiLimitations,
  criticalEvaluation,
  protectingYourData,
  ragExplained,
  embeddingsSimply,
  whatIsMcp,
  aiSkillsExplained,
  imagesAndAi,
  localAiOptions,
  buildingYourAiStack,
  stayingCurrentInAi,
  aiWritingAssistant,
  editingWithAi,
  voiceAndVideoAi,
  systemPromptsAndCustomInstructions,
  aiForCoding,
  aiAndCopyright,
  aiForDataAnalysis,
  promptDebuggingWorkflow,
  agentGuardrailsAndApprovals,
  aiEvaluationMetrics,
  teamAiGovernance,
  vectorDatabasesInPractice,
  aiRoadmapByRole,
  modelSelectionAndCostOptimization,
  aiProductDesignLifecycle,
  promptSecurityAndJailbreakDefense,
  enterpriseAiImplementationPlaybook,
  aiProjectPortfolioAndCapstoneAssessments,
  // Codex course
  whatIsAiCoding,
  githubCopilotGuide,
  agenticCodingIntro,
];

export const lessons: Lesson[] = rawLessons as unknown as Lesson[];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getLessonsByModule(moduleSlug: string): Lesson[] {
  return lessons
    .filter((l) => l.moduleSlug === moduleSlug)
    .sort((a, b) => a.order - b.order);
}

export function getAdjacentLessons(
  lesson: Lesson,
  allLessons: Lesson[]
): { prev: Lesson | null; next: Lesson | null } {
  const moduleLessons = allLessons
    .filter((l) => l.moduleSlug === lesson.moduleSlug)
    .sort((a, b) => a.order - b.order);
  const idx = moduleLessons.findIndex((l) => l.slug === lesson.slug);
  return {
    prev: idx > 0 ? moduleLessons[idx - 1] : null,
    next: idx < moduleLessons.length - 1 ? moduleLessons[idx + 1] : null,
  };
}
