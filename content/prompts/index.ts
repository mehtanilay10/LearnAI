import type { PromptTemplate } from '@/types';

import learningExplainLikeExpert from './learning/explain-like-expert.json';
import writingEditMyWriting from './writing/edit-my-writing.json';
import thinkingDecisionFramework from './thinking/decision-framework.json';
import summarizationSummarizeDocument from './summarization/summarize-document.json';
import creativityBrainstormIdeas from './creativity/brainstorm-ideas.json';
import writingRewriteEmail from './writing/rewrite-email.json';
import productivityNoteCleanup from './productivity/note-cleanup.json';
import writingFeedbackRequest from './writing/feedback-request.json';
import researchResearchAssistant from './research/research-assistant.json';
import productivityPlanProject from './productivity/plan-project.json';
import learningStudyNotes from './learning/study-notes.json';
import thinkingToolSelectionGuide from './thinking/tool-selection-guide.json';
import analysisAnalyzeOptions from './analysis/analyze-options.json';
import productivityWorkflowDesign from './productivity/workflow-design.json';
import analysisSafeVerify from './analysis/safe-verify.json';

const rawPromptTemplates = [
  learningExplainLikeExpert,
  writingEditMyWriting,
  thinkingDecisionFramework,
  summarizationSummarizeDocument,
  creativityBrainstormIdeas,
  writingRewriteEmail,
  productivityNoteCleanup,
  writingFeedbackRequest,
  researchResearchAssistant,
  productivityPlanProject,
  learningStudyNotes,
  thinkingToolSelectionGuide,
  analysisAnalyzeOptions,
  productivityWorkflowDesign,
  analysisSafeVerify,
];

export const promptTemplates: PromptTemplate[] = rawPromptTemplates as unknown as PromptTemplate[];

export function getPromptBySlug(slug: string): PromptTemplate | undefined {
  return promptTemplates.find((p) => p.slug === slug);
}

export function getStarterPrompts(): PromptTemplate[] {
  return promptTemplates.filter((p) => p.isStarter);
}

export function getPromptsByCategory(category: string): PromptTemplate[] {
  return promptTemplates.filter((p) => p.category === category);
}
