import type { Lesson } from '@/types';
import { isLessonArray } from '@/lib/typeGuards';

// AI Basics — phase-1-foundations — what-is-ai
import aiVsMlVsGenerativeAi from '../courses/ai-basics/phase-1-foundations/what-is-ai/ai-vs-ml-vs-generative-ai.json';
import howLlmsWorkSimply from '../courses/ai-basics/phase-1-foundations/what-is-ai/how-llms-work-simply.json';
import whatAiCanAndCannotDo from '../courses/ai-basics/phase-1-foundations/what-is-ai/what-ai-can-and-cannot-do.json';
import aiInEverydayLife from '../courses/ai-basics/phase-1-foundations/what-is-ai/ai-in-everyday-life.json';

// AI Basics — phase-1-foundations — ai-tools-overview
import chatbotLandscape from '../courses/ai-basics/phase-1-foundations/ai-tools-overview/chatbot-landscape.json';
import choosingTheRightTool from '../courses/ai-basics/phase-1-foundations/ai-tools-overview/choosing-the-right-tool.json';

// AI Basics — phase-1-foundations — prompting-basics
import anatomyOfAGoodPrompt from '../courses/ai-basics/phase-1-foundations/prompting-basics/anatomy-of-a-good-prompt.json';
import promptPatterns from '../courses/ai-basics/phase-1-foundations/prompting-basics/prompt-patterns.json';
import commonPromptingMistakes from '../courses/ai-basics/phase-1-foundations/prompting-basics/common-prompting-mistakes.json';
import systemPromptsAndCustomInstructions from '../courses/ai-basics/phase-1-foundations/prompting-basics/system-prompts-and-custom-instructions.json';

// AI Basics — phase-2-key-concepts — understanding-llms
import tokensExplained from '../courses/ai-basics/phase-2-key-concepts/understanding-llms/tokens-explained.json';
import contextWindowDeepDive from '../courses/ai-basics/phase-2-key-concepts/understanding-llms/context-window-deep-dive.json';

// AI Basics — phase-2-key-concepts — hallucinations-and-accuracy
import aiHallucinationDeepDive from '../courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/ai-hallucination-deep-dive.json';
import evaluatingAiOutput from '../courses/ai-basics/phase-2-key-concepts/hallucinations-and-accuracy/evaluating-ai-output.json';

// AI Basics — phase-3-tools-in-depth — chatbots-in-depth
import chatgptGuide from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/chatgpt-guide.json';
import modelComparison from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/model-comparison.json';
import aiForCoding from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/ai-for-coding.json';
import modelSelectionAndCostOptimization from '../courses/ai-basics/phase-3-tools-in-depth/chatbots-in-depth/model-selection-and-cost-optimization.json';

// AI Basics — phase-3-tools-in-depth — research-and-search-tools
import aiForResearch from '../courses/ai-basics/phase-3-tools-in-depth/research-and-search-tools/ai-for-research.json';

// AI Basics — phase-3-tools-in-depth — writing-and-content-tools
import aiWritingAssistant from '../courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/ai-writing-assistant.json';
import editingWithAi from '../courses/ai-basics/phase-3-tools-in-depth/writing-and-content-tools/editing-with-ai.json';

// AI Basics — phase-4-advanced-prompting — advanced-prompting
import chainOfThoughtPrompting from '../courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/chain-of-thought-prompting.json';
import fewShotPrompting from '../courses/ai-basics/phase-4-advanced-prompting/advanced-prompting/few-shot-prompting.json';

// AI Basics — phase-4-advanced-prompting — ai-workflows
import buildingYourFirstWorkflow from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/building-your-first-workflow.json';
import promptDebuggingWorkflow from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/prompt-debugging-workflow.json';
import aiProductDesignLifecycle from '../courses/ai-basics/phase-4-advanced-prompting/ai-workflows/ai-product-design-lifecycle.json';

// AI Basics — phase-5-automation-agents — automation-basics
import whatIsAiAutomation from '../courses/ai-basics/phase-5-automation-agents/automation-basics/what-is-ai-automation.json';
import noCodeAutomationTools from '../courses/ai-basics/phase-5-automation-agents/automation-basics/no-code-automation-tools.json';
import aiForDataAnalysis from '../courses/ai-basics/phase-5-automation-agents/automation-basics/ai-for-data-analysis.json';

// AI Basics — phase-5-automation-agents — agents-introduction
import whatAreAgents from '../courses/ai-basics/phase-5-automation-agents/agents-introduction/what-are-agents.json';
import howAgentsWork from '../courses/ai-basics/phase-5-automation-agents/agents-introduction/how-agents-work.json';

// AI Basics — phase-5-automation-agents — tool-calling-basics
import whatIsToolCalling from '../courses/ai-basics/phase-5-automation-agents/tool-calling-basics/what-is-tool-calling.json';
import agentGuardrailsAndApprovals from '../courses/ai-basics/phase-5-automation-agents/tool-calling-basics/agent-guardrails-and-approvals.json';

// AI Basics — phase-6-safety — safety-and-limitations
import aiLimitations from '../courses/ai-basics/phase-6-safety/safety-and-limitations/ai-limitations.json';
import criticalEvaluation from '../courses/ai-basics/phase-6-safety/safety-and-limitations/critical-evaluation.json';
import aiEvaluationMetrics from '../courses/ai-basics/phase-6-safety/safety-and-limitations/ai-evaluation-metrics.json';
import promptSecurityAndJailbreakDefense from '../courses/ai-basics/phase-6-safety/safety-and-limitations/prompt-security-and-jailbreak-defense.json';

// AI Basics — phase-6-safety — privacy-and-data
import protectingYourData from '../courses/ai-basics/phase-6-safety/privacy-and-data/protecting-your-data.json';
import aiAndCopyright from '../courses/ai-basics/phase-6-safety/privacy-and-data/ai-and-copyright.json';
import teamAiGovernance from '../courses/ai-basics/phase-6-safety/privacy-and-data/team-ai-governance.json';
import enterpriseAiImplementationPlaybook from '../courses/ai-basics/phase-6-safety/privacy-and-data/enterprise-ai-implementation-playbook.json';

// AI Basics — phase-7-intermediate-systems — rag-and-memory
import ragExplained from '../courses/ai-basics/phase-7-intermediate-systems/rag-and-memory/rag-explained.json';

// AI Basics — phase-7-intermediate-systems — embeddings-and-vectors
import embeddingsSimply from '../courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/embeddings-simply.json';
import vectorDatabasesInPractice from '../courses/ai-basics/phase-7-intermediate-systems/embeddings-and-vectors/vector-databases-in-practice.json';

// AI Basics — phase-8-advanced-ai — mcp-and-skills
import whatIsMcp from '../courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/what-is-mcp.json';
import aiSkillsExplained from '../courses/ai-basics/phase-8-advanced-ai/mcp-and-skills/ai-skills-explained.json';

// AI Basics — phase-8-advanced-ai — multimodal-ai
import imagesAndAi from '../courses/ai-basics/phase-8-advanced-ai/multimodal-ai/images-and-ai.json';
import voiceAndVideoAi from '../courses/ai-basics/phase-8-advanced-ai/multimodal-ai/voice-and-video-ai.json';

// AI Basics — phase-8-advanced-ai — local-vs-cloud-ai
import localAiOptions from '../courses/ai-basics/phase-8-advanced-ai/local-vs-cloud-ai/local-ai-options.json';

// AI Basics — phase-9-capstone — personal-ai-stack
import buildingYourAiStack from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/building-your-ai-stack.json';
import aiRoadmapByRole from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/ai-roadmap-by-role.json';
import aiProjectPortfolioAndCapstoneAssessments from '../courses/ai-basics/phase-9-capstone/personal-ai-stack/ai-project-portfolio-and-capstone-assessments.json';

// AI Basics — phase-9-capstone — staying-current
import stayingCurrentInAi from '../courses/ai-basics/phase-9-capstone/staying-current/staying-current-in-ai.json';

// Codex — phase-1-foundations — intro-to-ai-coding
import whatIsAiCoding from '../courses/codex/phase-1-foundations/intro-to-ai-coding/what-is-ai-coding.json';
import historyOfAiCoding from '../courses/codex/phase-1-foundations/intro-to-ai-coding/history-of-ai-coding.json';
import settingUpAiCodingEnvironment from '../courses/codex/phase-1-foundations/intro-to-ai-coding/setting-up-ai-coding-environment.json';

// Codex — phase-1-foundations — prompt-engineering-for-code
import basicPromptingForCode from '../courses/codex/phase-1-foundations/prompt-engineering-for-code/basic-prompting-for-code.json';
import advancedPromptingPatterns from '../courses/codex/phase-1-foundations/prompt-engineering-for-code/advanced-prompting-patterns.json';
import promptingForDebugging from '../courses/codex/phase-1-foundations/prompt-engineering-for-code/prompting-for-debugging.json';

// Codex — phase-2-tools — ai-coding-tools
import githubCopilotGuide from '../courses/codex/phase-2-tools/ai-coding-tools/github-copilot-guide.json';
import cursorIdeGuide from '../courses/codex/phase-2-tools/ai-coding-tools/cursor-ide-guide.json';
import chatAssistantsForCoding from '../courses/codex/phase-2-tools/ai-coding-tools/chat-assistants-for-coding.json';
import claudeForCode from '../courses/codex/phase-2-tools/ai-coding-tools/claude-for-code.json';
import windsurfAndAlternatives from '../courses/codex/phase-2-tools/ai-coding-tools/windsurf-and-alternatives.json';

// Codex — phase-3-workflows — practical-ai-workflows
import debuggingWithAi from '../courses/codex/phase-3-workflows/practical-ai-workflows/debugging-with-ai.json';
import writingTestsWithAi from '../courses/codex/phase-3-workflows/practical-ai-workflows/writing-tests-with-ai.json';
import refactoringWithAi from '../courses/codex/phase-3-workflows/practical-ai-workflows/refactoring-with-ai.json';
import codeReviewWithAi from '../courses/codex/phase-3-workflows/practical-ai-workflows/code-review-with-ai.json';

// Codex — phase-3-workflows — agentic-workflows
import agenticCodingIntro from '../courses/codex/phase-3-workflows/agentic-workflows/agentic-coding-intro.json';
import buildingAiAgents from '../courses/codex/phase-3-workflows/agentic-workflows/building-ai-agents.json';
import multiFileWorkflows from '../courses/codex/phase-3-workflows/agentic-workflows/multi-file-workflows.json';

// Codex — phase-4-advanced-techniques — security-and-testing
import aiSecurityRisks from '../courses/codex/phase-4-advanced-techniques/security-and-testing/ai-security-risks.json';
import testingStrategies from '../courses/codex/phase-4-advanced-techniques/security-and-testing/testing-strategies.json';

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
  historyOfAiCoding,
  settingUpAiCodingEnvironment,
  basicPromptingForCode,
  advancedPromptingPatterns,
  promptingForDebugging,
  githubCopilotGuide,
  cursorIdeGuide,
  chatAssistantsForCoding,
  claudeForCode,
  windsurfAndAlternatives,
  debuggingWithAi,
  writingTestsWithAi,
  refactoringWithAi,
  codeReviewWithAi,
  agenticCodingIntro,
  buildingAiAgents,
  multiFileWorkflows,
  aiSecurityRisks,
  testingStrategies,
];

export const lessons: Lesson[] = isLessonArray(rawLessons) ? rawLessons : [];

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
